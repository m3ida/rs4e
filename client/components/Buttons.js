import $ from 'jquery';
import React from 'react';

function Buttons(props) {
    const questions = require('../quests/' + props.questionsFileName);

    if (props.questionIndex === -1) {
        return (
            <input type='button' className='begin-button' value='Começar' onClick={() => props.setQuestionIndex(props.questionIndex + 1)} />
        );
    } else if (props.questionIndex === questions.elements.length - 1) {
        return (
            <>
                <input
                    type='button'
                    className='back-button'
                    value='Voltar'
                    onClick={() => {
                        props.setQuestionIndex(props.questionIndex - 1);
                        props.setMsgErro();
                    }}
                />
                <input
                    type='button'
                    className='forward-button'
                    value='Concluir'
                    onClick={() => {
                        if (questions.elements[props.questionIndex].isRequired && !questions.elements[props.questionIndex].answered) {
                            props.setMsgErro(<p className='errorMessage'>É de resposta obrigatória.</p>);
                        } else {
                            props.setAnswer(questions.elements[props.questionIndex].value);
                            props.setMsgErro();
                            props.setQuestionIndex(props.questionIndex + 1);
                        }
                    }}
                />
            </>
        );
    } else if(props.questionIndex < questions.elements.length){
        return (
            <>
                <input
                    type='button'
                    className='back-button'
                    value='Voltar'
                    onClick={() => {
                        props.setQuestionIndex(props.questionIndex - 1);
                        props.setMsgErro();
                    }}
                />
                <input
                    type='button'
                    className='forward-button'
                    value='Próxima'
                    onClick={function (e) {
                        if (questions.elements[props.questionIndex].isRequired && !questions.elements[props.questionIndex].answered) {
                            props.setMsgErro(<p className='errorMessage'>É de resposta obrigatória.</p>);
                        } else {
                            props.setAnswer(questions.elements[props.questionIndex].value);
                            // answers[questions.elements[props.questionIndex].name] = questions.elements[props.questionIndex].value;

                            $('.question:not(.answered) input[type=radio]').prop('checked', false);
                            $('.MuiSlider-track').css('width', '0%');
                            $('.MuiSlider-thumb').css('left', '0%');
                            $('.MuiSlider-thumb input').attr('aria-valuenow', -1);
                            $('.MuiSlider-thumb input').attr('value', -1);
                            $('.MuiSlider-valueLabelLabel').text('-1');

                            props.setQuestionIndex(props.questionIndex + 1);
                            props.setMsgErro();
                        }
                    }}
                />
            </>
        );
    } else {
        return (null)
    }
}

export default Buttons;
