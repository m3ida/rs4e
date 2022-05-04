import React, { useState, useEffect, useRef } from 'react';
import Question from './Question';
import logors4e from '../img/rs4eLogo.png';
import logoUma from '../img/umaLogo.png';
import { LinearProgress } from '@mui/material';
import Buttons from './Buttons';
import $ from 'jquery';

function Panel(props) {
    const questions = require('../quests/' + props.questionsFileName);

    const prevQuestionIndexRef = useRef();

    const [questionIndex, setQuestionIndex] = useState(4);
    const [msgErro, setMsgErro] = useState();
    const [answers, setAnswers] = useState();
    const [disabledButton, setDisabledButton] = useState(
        questionIndex < questions.elements.length ? questions.elements[questionIndex].answered : true
    );
    const [consentido, setConsentido] = useState(false);

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
        $.post('/rs4e/api/save?quest=' + questions.name, { answers: JSON.stringify(answers) });
    };

    const handleCleanUp = (aObject) => {
        delete aObject.value;
        delete aObject.answered;
    };

    useEffect(() => {
        console.log(JSON.stringify(answers));
        if (questionIndex >= questions.elements.length) {
            handleFinish();
        } else {
            if (questionIndex > -1 && questions.elements[questionIndex].depends) {
                const dependency = questions.elements[questionIndex].depends;

                let skipQuestion = false;

                //é para ser diferente
                if (dependency.equals === false) {
                    //Se for igual entao passa a frente
                    skipQuestion = answers[dependency.question] === dependency.value;
                } else {
                    skipQuestion = answers[dependency.question] !== dependency.value;
                }

                //Falta aqui
                if (skipQuestion) {
                    handleCleanUp(questions.elements[questionIndex]);

                    delete answers[questions.elements[questionIndex].name];

                    if (questionIndex < prevQuestionIndex) {
                        setQuestionIndex(questionIndex - 1);
                        setDisabledButton(true);
                    } else {
                        setQuestionIndex(questionIndex + 1);
                        setDisabledButton(false);
                    }
                }
            }

            if (questionIndex < prevQuestionIndex && questionIndex === -1) {
                setAnswers({});
                setConsentido(false);
                questions.elements.forEach((element) => {
                    // if (element.type == 'radiogroup' || element.type == 'text' || element.type == 'matrix') {
                    handleCleanUp(element);
                    // }
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

                    <img className='logo' src={questions.img === 'uma' ? logoUma : logors4e} alt='Logo' loading='eager' />
                </div>
                <div className='content-container animate__animated animate__faster'>
                    {msgErro}
                    <Question
                        setDisabledButton={setDisabledButton}
                        questionIndex={questionIndex}
                        questionsFileName={props.questionsFileName}
                        consentido={consentido}
                        setConsentido={setConsentido}
                    ></Question>
                </div>
                {/* <div className='buttons-container'> */}
                <Buttons
                    setMsgErro={setMsgErro}
                    disabledButton={disabledButton}
                    setDisabledButton={setDisabledButton}
                    setQuestionIndex={setQuestionIndex}
                    questionIndex={questionIndex}
                    setAnswer={setAnswer}
                    questionsFileName={props.questionsFileName}
                    consentido={consentido}
                />
                {/* </div> */}
            </div>
        </>
    );
}

export default Panel;
