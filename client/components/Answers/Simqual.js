import $ from 'jquery';
import { useState } from 'react';
import { Tooltip } from '@mui/material';
import React from 'react';

function Simqual(props) {
    const questions = require('../../quests/' + props.questionsFileName);

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
                        id='sim'
                        value={
                            questions.elements[props.questionIndex].value !== undefined &&
                            questions.elements[props.questionIndex].value !== 'Não'
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
                    Sim.
                </label>{' '}
                Qual?&nbsp;
                <input
                    type='text'
                    defaultValue={
                        questions.elements[props.questionIndex].value !== undefined &&
                        questions.elements[props.questionIndex].value !== 'Não'
                            ? questions.elements[props.questionIndex].value
                            : ''
                    }
                    onChange={(e) => {
                        if ($('#sim').is(':checked')) {
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
            <p>
                <label>
                    <input
                        defaultChecked={questions.elements[props.questionIndex].value === 'Não'}
                        type='radio'
                        value='Não'
                        name={questions.elements[props.questionIndex].name}
                        onClick={() => {
                            questions.elements[props.questionIndex].value = 'Não';
                            questions.elements[props.questionIndex].answered = true;
                        }}
                    />
                    Não
                </label>
            </p>
        </>
    );
}

export default Simqual;
