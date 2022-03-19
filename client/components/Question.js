import Answer from './Answer';
import React from 'react';

function Question(props) {
    const questions = require('../quests/' + props.questionsFileName)

    if (props.questionIndex < questions.elements.length) {
        const question = questions.elements[props.questionIndex];

        if (props.questionIndex >= 0) {
            const classes = question.isRequired ? 'required' : '';
            return (
                <div className={questions.elements[props.questionIndex].answered ? 'question answered' : 'question'}>
                    <h4 className={classes}>
                        {props.questionIndex + 1}. {question.title || question.name}
                    </h4>
                    <p>{question.description}</p>
                    <Answer questionsFileName={props.questionsFileName} questionIndex={props.questionIndex} />
                </div>
            );
        } else {
            let descriptionHTML = questions.description.map((description) => {
                return <p key={questions.description.indexOf(description)}>{description}</p>;
            });

            return (
                <>
                    <h4>Participantes do curso intensivo de empreendedorismo do RS4E</h4>
                    <p>Formulário relativo à participação no projeto RS4E</p>
                    <div className='description'>{descriptionHTML}</div>
                </>
            );
        }
    } else {
        return (<h2>Obrigado pelo seu tempo.</h2>);
    }
}

export default Question;
