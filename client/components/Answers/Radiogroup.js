import $ from 'jquery';
import React from 'react';

function Radiogroup(props) {
    const questions = require('../../quests/' + props.questionsFileName)

    let choicesHTML = questions.elements[props.questionIndex].choices.map((answer) => {
        return (
            <p key={answer}>
                <label>
                    <input
                        defaultChecked={questions.elements[props.questionIndex].value === answer ? true : false}
                        type='radio'
                        name={questions.elements[props.questionIndex].name}
                        value={props.questionIndex + '.' + answer}
                        onClick={() => {
                            questions.elements[props.questionIndex].value = answer;
                            questions.elements[props.questionIndex].answered = true;
                        }}
                    />
                    {answer}
                </label>
            </p>
        );
    });

    if (questions.elements[props.questionIndex].hasOther === true) {
        const hasOther = (
            <p key={'hasOther'}>
                <input
                    defaultChecked={
                        questions.elements[props.questionIndex].value !== undefined &&
                        !questions.elements[props.questionIndex].choices.includes(questions.elements[props.questionIndex].value)
                    }
                    type='radio'
                    id='hasOtherRadio'
                    value={
                        questions.elements[props.questionIndex].value !== undefined &&
                        !questions.elements[props.questionIndex].choices.includes(questions.elements[props.questionIndex].value)
                            ? questions.elements[props.questionIndex].value
                            : ''
                    }
                    name={questions.elements[props.questionIndex].name}
                    onClick={() => {
                        if ($('input[type=text]').val() !== '') {
                            questions.elements[props.questionIndex].value = $('input[type=text]').val();
                            questions.elements[props.questionIndex].answered = true;
                        } else {
                            delete questions.elements[props.questionIndex].value;
                            delete questions.elements[props.questionIndex].answered;
                        }
                    }}
                />
                <input
                    type='text'
                    defaultValue={
                        questions.elements[props.questionIndex].value != undefined &&
                        !questions.elements[props.questionIndex].choices.includes(questions.elements[props.questionIndex].value)
                            ? questions.elements[props.questionIndex].value
                            : ''
                    } //Verificar isto
                    onChange={(e) => {
                        $('#hasOtherRadio').val(e.target.value);
                        if ($('#hasOtherRadio').is(':checked')) {
                            if (e.target.value === '') {
                                delete questions.elements[props.questionIndex].value;
                                delete questions.elements[props.questionIndex].answered;
                            } else {
                                questions.elements[props.questionIndex].value = e.target.value;
                                questions.elements[props.questionIndex].answered = true;
                            }
                        }
                    }}
                />
            </p>
        );

        choicesHTML.push(hasOther);
    }

    if (questions.elements[props.questionIndex].simQual === true) {
        const simQual = (
            <p key={'simQual'}>
                <input
                    defaultChecked={
                        questions.elements[props.questionIndex].value !== undefined &&
                        !questions.elements[props.questionIndex].choices.includes(questions.elements[props.questionIndex].value)
                    }
                    type='radio'
                    id='simQualRadio'
                    value={
                        questions.elements[props.questionIndex].value !== undefined &&
                        !questions.elements[props.questionIndex].choices.includes(questions.elements[props.questionIndex].value)
                            ? questions.elements[props.questionIndex].value
                            : ''
                    }
                    name={questions.elements[props.questionIndex].name}
                    onClick={() => {
                        if ($('input[type=text]').val() !== '') {
                            questions.elements[props.questionIndex].value = $('input[type=text]').val();
                            questions.elements[props.questionIndex].answered = true;
                        } else {
                            delete questions.elements[props.questionIndex].value;
                            delete questions.elements[props.questionIndex].answered;
                        }
                    }}
                />
                Sim. Qual?&nbsp;
                <input
                    type='text'
                    defaultValue={
                        questions.elements[props.questionIndex].value != undefined &&
                        !questions.elements[props.questionIndex].choices.includes(questions.elements[props.questionIndex].value)
                            ? questions.elements[props.questionIndex].value
                            : ''
                    } //Verificar isto
                    onChange={(e) => {
                        $('#simQualRadio').val(e.target.value);
                        if ($('#simQualRadio').is(':checked')) {
                            if (e.target.value === '') {
                                delete questions.elements[props.questionIndex].value;
                                delete questions.elements[props.questionIndex].answered;
                            } else {
                                questions.elements[props.questionIndex].value = e.target.value;
                                questions.elements[props.questionIndex].answered = true;
                            }
                        }
                    }}
                />
            </p>
        );
        choicesHTML.push(simQual);
    }

    return choicesHTML;
}

export default Radiogroup;