import React, { useState, useEffect, useRef } from 'react';
import Question from './Question';
import logo from '../img/rs4eLogo.png';
import { LinearProgress } from '@mui/material';
import Buttons from './Buttons';
import $ from 'jquery';

function Panel(props) {
    const questions = require('../quests/' + props.questionsFileName);

    const prevQuestionIndexRef = useRef();

    const [questionIndex, setQuestionIndex] = useState(-1);
    const [msgErro, setMsgErro] = useState();
    const [answers, setAnswers] = useState();

    const setAnswer = (answer, other) => {
        const temp = { ...answers };

        if (other) {
            temp[questions.elements[questionIndex].name + '.other'] = answer;
            questions.elements[questionIndex].otherValue = answer;
        } else {
            temp[questions.elements[questionIndex].name] = answer;
        }
        setAnswers(temp);
    };

    const handleFinish = () => {
        const quest = window.location.pathname.replace('/', '');

        $.post('/api/save?quest=' + quest, { answers: JSON.stringify(answers) });
    };

    const handleCleanUp = (aObject) => {
        delete aObject.value;
        delete aObject.answered;
    };

    useEffect(() => {
        if (questionIndex >= questions.elements.length) {
            handleFinish();
        } else {
            if (questionIndex > -1 && questions.elements[questionIndex].depends) {
                const dependency = questions.elements[questionIndex].depends;

                if (
                    (answers[dependency.question] !== dependency.value && dependency.value) ||
                    (!dependency.value && answers[dependency.question] === 'Não')
                ) {
                    handleCleanUp(questions.elements[questionIndex]);

                    delete answers[questions.elements[questionIndex].name];

                    if (questionIndex < prevQuestionIndex) {
                        setQuestionIndex(questionIndex - 1);
                    } else {
                        setQuestionIndex(questionIndex + 1);
                    }
                }
            }

            if (questionIndex < prevQuestionIndex && questionIndex === -1) {
                setAnswers({});
                questions.elements.forEach((element) => {
                    if (element.type == 'radiogroup' || element.type == 'text' || element.type == 'matrix') {
                        handleCleanUp(element);
                    }
                });
            }
        }

        prevQuestionIndexRef.current = questionIndex;
    }, [questionIndex]);

    const prevQuestionIndex = prevQuestionIndexRef.current;
    return (
        <>
            <div className='panel'>
                <div className='logo-container'>
                    {questionIndex !== -1 ? (
                        <LinearProgress
                            variant='determinate'
                            sx={{
                                height: 15,
                                color: 'success',
                            }}
                            color='success'
                            value={
                                questionIndex < questions.elements.length ? (questionIndex / (questions.elements.length - 1)) * 100 : 100
                            }
                        />
                    ) : (
                        <></>
                    )}

                    <img className='logo' src={logo} alt='Logo' loading='eager' />
                </div>
                <div className='content-container animate__animated animate__faster'>
                    {msgErro}
                    <Question questionIndex={questionIndex} questionsFileName={props.questionsFileName}></Question>
                </div>
                {/* <div className='buttons-container'> */}
                    <Buttons
                        setMsgErro={setMsgErro}
                        setQuestionIndex={setQuestionIndex}
                        questionIndex={questionIndex}
                        setAnswer={setAnswer}
                        questionsFileName={props.questionsFileName}
                    />
                {/* </div> */}
            </div>
        </>
    );
}

export default Panel;
