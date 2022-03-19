import React from 'react';
import Email from './Answers/Email';
import Rating from './Answers/Rating';
import Matrix from './Answers/Matrix';
import Radiogroup from './Answers/Radiogroup';

function Answer(props) {
    const questions = require('../quests/' + props.questionsFileName)
    
    switch (questions.elements[props.questionIndex].type) {
        case 'radiogroup':
            return (
                <Radiogroup questionIndex={props.questionIndex} questionsFileName={props.questionsFileName} />
            );
        case 'matrix':
            return (
                <Matrix questionIndex={props.questionIndex} questionsFileName={props.questionsFileName} />
            );
        case 'rating':
            return (
                <Rating questionIndex={props.questionIndex} questionsFileName={props.questionsFileName} />
            );

        case 'email':
            return (
                <Email questionIndex={props.questionIndex} questionsFileName={props.questionsFileName} />
            );
        default:
            return <></>;
    }
}

export default Answer;
