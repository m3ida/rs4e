import React, { useEffect } from 'react';
import Email from './Answers/Email';
import Rating from './Answers/Rating';
import Matrix from './Answers/Matrix';
import Radiogroup from './Answers/Radiogroup';
import Simqual from './Answers/Simqual';
import ConhecerEmpreendedor from './Answers/ConhecerEmpreendedor';

function Answer(props) {
    const questions = require('../quests/' + props.questionsFileName);

    const setAnswered = (answered) => {
        if (!answered) {
            delete questions.elements[props.questionIndex].answered;
            props.setDisabledButton(false);
        } else {
            questions.elements[props.questionIndex].answered = answered;
            props.setDisabledButton(true);
        }
    };

    switch (questions.elements[props.questionIndex].type) {
        case 'radiogroup':
            return <Radiogroup setAnswered={setAnswered} questionIndex={props.questionIndex} questionsFileName={props.questionsFileName} />;
        case 'matrix':
            return <Matrix setAnswered={setAnswered} questionIndex={props.questionIndex} questionsFileName={props.questionsFileName} />;
        case 'rating':
            return <Rating setAnswered={setAnswered} questionIndex={props.questionIndex} questionsFileName={props.questionsFileName} />;

        case 'email':
            return <Email setAnswered={setAnswered} questionIndex={props.questionIndex} questionsFileName={props.questionsFileName} />;
        case 'sim_qual':
            return <Simqual setAnswered={setAnswered} questionIndex={props.questionIndex} questionsFileName={props.questionsFileName} />;
        case 'conhecer-empreendedor':
            return <ConhecerEmpreendedor setAnswered={setAnswered} questionIndex={props.questionIndex} questionsFileName={props.questionsFileName} />
        default:
            return <></>;
    }
}

export default Answer;
