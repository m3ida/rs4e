import express from 'express';
import devBundle from './devBundle';
import path from 'path';
import template from './../template';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const excelJS = require('exceljs');

const app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
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

devBundle.compile(app);

const CURRENT_WORKING_DIR = process.cwd();
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

app.post('/api/save', (req, res) => {
    switch (req.query.quest) {
        case 'QuestRS4E':
            const entry1 = new Rs4e({ date: new Date(), data: JSON.parse(req.body.answers) });
            entry1.save();
            break;
        case 'QuestUMA':
            const entry2 = new UMa({ date: new Date(), data: JSON.parse(req.body.answers) });
            entry2.save();
            break;
        case 'QuestRS4EEmp':
            const entry3 = new Rs4e_emp({ date: new Date(), data: JSON.parse(req.body.answers) });
            entry3.save();
            break;
        case 'QuestUMAEmp':
            const entry4 = new UMaEmp({ date: new Date(), data: JSON.parse(req.body.answers) });
            entry4.save();
            break;
    }
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

app.post('/api/admin', verifyJWT, (req, res) => {
    res.json({ isLoggedIn: true, username: req.user.username });
});

// app.post('/admin/register', async (req, res) => {
//     const user = req.body;

//     const takenUsername = await User.findOne({ username: user.username });

//     if (takenUsername) {
//         res.json({ message: 'Username taken' });
//     } else {
//         user.password = await bcrypt.hash(user.password, 10);

//         const dbUser = new User({ username: user.username, password: user.password });

//         dbUser.save();
//         res.json({ message: 'success' });
//     }
// });

app.post('/admin/login', (req, res) => {
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

app.post('/admin/excel', verifyJWT, async (req, res) => {
    let db;
    switch (req.query.quest) {
        case 'QuestRS4E':
            db = Rs4e;
            break;
        case 'QuestUMA':
            db = UMa;
            break;
        case 'QuestRS4EEmp':
            db = Rs4e_emp;
            break;
        case 'QuestUMAEmp':
            db = UMaEmp;
            break;
    }

    const workbook = new excelJS.Workbook(); // Create a new workbook
    const worksheet = workbook.addWorksheet('My Users'); // New Worksheet
    const path = __dirname + '/files'; // Path to download excel  // Column for data in excel. key must match data key

    let colunas = [{ header: 'Data', key: 'date', width: 10 }];

    const post = await db.findOne({}, {}, { sort: { created_at: -1 } });

    Object.keys(post.data).forEach(function (k) {
        if (typeof post.data[k] === 'object') {
            Object.keys(post.data[k]).forEach(function (j) {
                colunas.push({ header: k + '.' + j, key: k + '.' + j, width: 10 });
            });
        } else {
            colunas.push({ header: k, key: k, width: 10 });
        }
    });


    worksheet.columns = colunas;

    const entries = await db.find();

    // Looping through User data
    let counter = 1;
    entries.forEach((entry) => {
        const temp = entry.data;
        Object.keys(temp).forEach((question) => {
            if (typeof temp[question] === 'object') {
                Object.keys(temp[question]).forEach(function (subquestion) {
                    temp[question + '.' + subquestion] = temp[question][subquestion];
                });
                delete temp[question];
            }
        });
        temp['date'] = entry.date;
        worksheet.addRow(temp); // Add data in worksheet
        counter++;
    }); // Making first line in excel bold

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
    res.status(200).send(template());
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.info('Server started on port %s.', port);
});
