import $ from 'jquery';
import { useState } from 'react';
import { Tooltip } from '@mui/material';
import React from 'react';

function Email(props) {
    const questions = require('../../quests/' + props.questionsFileName)

    const validateEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    };

    const [emailValidation, setEmailValidation] = useState('');
    const [emailTooltip, setEmailTooltip] = useState(false);

    return (
        <>
            <p>
                <label>
                    <input
                        defaultChecked={
                            questions.elements[props.questionIndex].value !== undefined &&
                            questions.elements[props.questionIndex].value !== 'Não'
                        }
                        type='radio'
                        id='simEmail'
                        value={
                            questions.elements[props.questionIndex].value !== undefined &&
                            questions.elements[props.questionIndex].value !== 'Não'
                                ? questions.elements[props.questionIndex].value
                                : ''
                        }
                        name={questions.elements[props.questionIndex].name}
                        onClick={() => {
                            $("input[type=email]").prop("disabled", false)

                            if ($('input[type=email]').val() !== '' && validateEmail($('input[type=email]').val())) {
                                questions.elements[props.questionIndex].value = $('input[type=email]').val();
                                props.setAnswered(true);
                            } else {
                                delete questions.elements[props.questionIndex].value;
                                props.setAnswered(false);
                            }
                        }}
                    />
                    Sim.
                </label>{' '}
                Queria, por favor, fornecer o seu email:&nbsp;
                <Tooltip open={emailTooltip} title={emailValidation}>
                    <input
                        type='email'
                        defaultValue={
                            questions.elements[props.questionIndex].value !== undefined &&
                            questions.elements[props.questionIndex].value !== 'Não'
                                ? questions.elements[props.questionIndex].value
                                : ''
                        }
                        disabled={true}
                        onChange={(e) => {
                            if (!validateEmail(e.target.value)) {
                                setEmailTooltip(true);
                                setEmailValidation('Email inválido!');
                                props.setAnswered(false);
                            } else {
                                setEmailValidation('Email válido!');
                                props.setAnswered(true);
                                setTimeout(function () {
                                    setEmailTooltip(false);
                                }, 1000);
                            }

                            if ($('#simEmail').is(':checked')) {
                                if (e.target.value === '') {
                                    delete questions.elements[props.questionIndex].value;
                                    props.setAnswered(false);
                                } else {
                                    if (validateEmail($('input[type=email]').val())) {
                                        questions.elements[props.questionIndex].value = e.target.value;
                                        props.setAnswered(true);
                                    }
                                }
                            }
                        }}
                    />
                </Tooltip>
            </p>
            <p>
                <label>
                    <input
                        defaultChecked={questions.elements[props.questionIndex].value === 'Não'}
                        type='radio'
                        value='Não'
                        name={questions.elements[props.questionIndex].name}
                        onClick={() => {
                            $("input[type=email]").prop("disabled", true)
                            questions.elements[props.questionIndex].value = 'Não';
                            props.setAnswered(true);
                        }}
                    />
                    Não
                </label>
            </p>
        </>
    );
}

export default Email;
