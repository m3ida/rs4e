import express from 'express';
import devBundle from './devBundle';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const excelJS = require('exceljs');

const app = express();

const router = express.Router();
app.use('/rs4e', router);

let port = process.env.PORT || 3000;

router.use(bodyParser.json());
router.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
mongoose.connect(process.env.MONGODB);

const Rs4e = mongoose.model('Rs4e', { date: Date, data: JSON });
const UMa = mongoose.model('UMa', { date: Date, data: JSON });
const Rs4e_emp = mongoose.model('Rs4eEmp', { date: Date, data: JSON });
const UMaEmp = mongoose.model('UMaEmp', { date: Date, data: JSON });

const User = mongoose.model('User', {
    username: String,
    password: String,
});

devBundle.compile(router);

const CURRENT_WORKING_DIR = process.cwd();
app.use('/rs4e/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

router.post('/api/save', (req, res) => {
    let entry;
    switch (req.query.quest.toLocaleLowerCase()) {
        case 'questrs4e':
            entry = new Rs4e({ date: new Date(), data: JSON.parse(req.body.answers) });
            break;
        case 'questuma':
            entry = new UMa({ date: new Date(), data: JSON.parse(req.body.answers) });
            break;
        case 'questrs4eemp':
            entry = new Rs4e_emp({ date: new Date(), data: JSON.parse(req.body.answers) });
            break;
        case 'questumaemp':
            entry = new UMaEmp({ date: new Date(), data: JSON.parse(req.body.answers) });
            break;
        default:
            return res.status(422).send('Sem pedido');
    }

    entry.save().then((doc, err) => {
        if (!err) return res.status(200).send('Saved');
        return res.status(422).send(err);
    });
});

function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token']?.split(' ')[1];

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return res.json({ isLoggedIn: false, message: err });
            req.user = {};
            req.user.id = decoded.id;
            req.user.username = decoded.username;
            next();
        });
    } else {
        res.json({ message: 'Incorrect token given', isLoggedIn: false });
    }
}

router.post('/api/admin', verifyJWT, (req, res) => {
    res.json({ isLoggedIn: true, username: req.user.username });
});

/*router.post('/admin/register', async (req, res) => {
    const user = req.body;

    const takenUsername = await User.findOne({ username: user.username });

    if (takenUsername) {
        res.json({ message: 'Username taken' });
    } else {
        user.password = await bcrypt.hash(user.password, 10);

        const dbUser = new User({ username: user.username, password: user.password });

        dbUser.save();
        res.json({ message: 'success' });
    }
});*/

router.post('/admin/login', (req, res) => {
    const user = req.body;
    User.findOne({ username: user.username }).then((dbUser) => {
        if (!dbUser) {
            return res.json({ message: 'user not found' });
        }
        bcrypt.compare(user.password, dbUser.password).then((isCorrect) => {
            if (isCorrect) {
                const payload = {
                    id: dbUser._id,
                    username: dbUser.username,
                };
                jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 604800 /*7 days*/ }, (err, token) => {
                    if (err) return res.json({ message: err });
                    return res.json({ message: 'success', token: 'Bearer ' + token });
                });
            } else {
                return res.json({ message: 'wrong password' });
            }
        });
    });
});

router.post('/admin/excel', verifyJWT, async (req, res) => {
    let db, questions;
    switch (req.query.quest) {
        case 'QuestRS4E':
            db = Rs4e;
            questions = require('../client/quests/Quest_RS4E');
            break;
        case 'QuestUMa':
            db = UMa;
            questions = require('../client/quests/Quest_UMa');
            break;
        case 'QuestRS4EEmp':
            questions = require('../client/quests/Quest_RS4E_Emp');
            db = Rs4e_emp;
            break;
        case 'QuestUMaEmp':
            questions = require('../client/quests/Quest_UMa_Emp');
            db = UMaEmp;
            break;
    }

    const workbook = new excelJS.Workbook(); // Create a new workbook
    const worksheet = workbook.addWorksheet('Respostas'); // New Worksheet
    const path = __dirname + '/files'; // Path to download excel  // Column for data in excel. key must match data key

    let colunas = [{ header: 'Data', key: 'date', width: 20 }];

    questions.elements.forEach((question) => {
        if (question.type === 'matrix') {
            question.elements.forEach((subquestion) => {
                colunas.push({ header: question.name + '.' + subquestion.value, key: question.name + '.' + subquestion.value, width: 10 });
            });
        } else if (question.type === 'conhecer-empreendedor') {
            question.choices.forEach((subquestion) => {
                colunas.push({
                    header: question.name + '.' + subquestion + '.Em que medida você conhece a atividade dele(a) como empreendedor(a)?',
                    key: question.name + '.' + subquestion + '.Em que medida você conhece a atividade dele(a) como empreendedor(a)?',
                    width: 10,
                });
                colunas.push({
                    header: question.name + '.' + subquestion + '.Em que medida ele/ela pode ser considerado(a) um bom empreendedor(a)?',
                    key: question.name + '.' + subquestion + '.Em que medida ele/ela pode ser considerado(a) um bom empreendedor(a)?',
                    width: 10,
                });
            });
        } else {
            colunas.push({ header: question.name, key: question.name, width: 10 });
        }

        if (question.hasOther) {
            colunas.push({ header: question.name + '.Outro', key: question.name + '.other', width: 10 });
        }
    });

    worksheet.columns = colunas;

    const entries = await db.find();

    //Em cada entry na BD
    entries.forEach((entry) => {
        //temp = perguntas : respostas
        const temp = entry.data;

        //Percorrer as perguntas para ver quais tem respostas como objetos (Precisam de ser tratados)
        Object.keys(temp).forEach((question) => {
            //Se a resposta a esta pergunta for um objeto, entao coloca question.subquestion = resposta
            //No caso do tipo "conhecer-empreendedor", tem um Objeto dentro de um Objecto na resposta
            if (typeof temp[question] === 'object') {
                Object.keys(temp[question]).forEach(function (subquestion) {
                    if(typeof temp[question][subquestion] === 'object') { //Caso do tipo conhecer-empreendedor
                        Object.keys(temp[question][subquestion]).forEach(function (relacao) {
                            temp[question + '.' + subquestion + '.' + relacao] = temp[question][subquestion][relacao];
                        });
                    } else {
                        temp[question + '.' + subquestion] = temp[question][subquestion];
                    }
                    
                });
                delete temp[question];
            }
        });

        //colocar a data
        temp['date'] = entry.date;

        worksheet.addRow(temp); // Add data in worksheet
    });

    worksheet.getRow(1).eachCell((cell) => {
        cell.font = { bold: true };
    });

    try {
        const data = await workbook.xlsx.writeFile(`${path}/ficheiro.xlsx`).then(() => {
            res.send({ status: 'success', message: 'file successfully downloaded', path: `${path}/ficheiro.xlsx` });
        });
    } catch (err) {
        res.send({ status: 'error', message: err });
    }
});

app.get('*', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname + '/../index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.info('Server started on port %s.', port);
});
