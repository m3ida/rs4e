import $ from 'jquery';
import React from 'react';

function Buttons(props) {
    const questions = require('../quests/' + props.questionsFileName);

    const buttonAnimation = (event) => {
        const circle = document.createElement('div');
        const x = event.nativeEvent.layerX;
        const y = event.nativeEvent.layerY;
        circle.classList.add('circle');
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        event.target.appendChild(circle);
        setTimeout(() => {
            circle.remove();
        }, 500);
    };

    const changeQuestion = (event, forward) => {
        $('.content-container').removeClass('animate__backInLeft');
        $('.content-container').removeClass('animate__backInRight');
        buttonAnimation(event);

        if (forward) $('.content-container').addClass('animate__backOutLeft');
        else $('.content-container').addClass('animate__backOutRight');

        setTimeout(() => {
            props.setMsgErro();
            if (forward) {
                props.setQuestionIndex(props.questionIndex + 1);
                $('.content-container').removeClass('animate__backOutLeft');
                $('.content-container').addClass('animate__backInRight');
            } else {
                props.setQuestionIndex(props.questionIndex - 1);
                $('.content-container').removeClass('animate__backOutRight');
                $('.content-container').addClass('animate__backInLeft');
            }
        }, 200);
    };

    if (props.questionIndex === -1) {
        return (
            <div className='button begin-button special' onClick={(e) => changeQuestion(e, true)}>
                <p>COMEÇAR</p>
            </div>
        );
    } else if (props.questionIndex < questions.elements.length) {
        return (
            <div className='buttons-container'>
                <div className='button special back-button' onClick={(e) => changeQuestion(e, false)}>
                    <p>VOLTAR</p>
                </div>
                <div
                    className='button special forward-button'
                    onClick={(e) => {
                        buttonAnimation(e);
                        if (questions.elements[props.questionIndex].isRequired && !questions.elements[props.questionIndex].answered) {
                            props.setMsgErro(<p className='errorMessage'>É de resposta obrigatória.</p>);
                            $('html, body').animate({ scrollTop: 0 }, 'slow');
                        } else {
                            props.setAnswer(questions.elements[props.questionIndex].value, false);

                            if (questions.elements[props.questionIndex].hasOther && $('#otherText') && $('#otherText').val().length > 0) {
                                props.setAnswer($('#otherText').val(), true);
                            }
                            changeQuestion(e, true);
                        }
                    }}
                >
                    <p>{props.questionIndex === questions.elements.length - 1 ? 'CONCLUIR' : 'PRÓXIMA'}</p>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default Buttons;
