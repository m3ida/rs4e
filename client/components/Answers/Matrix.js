import { Slider } from '@mui/material';
import React, { useState, useEffect } from 'react';
import $ from 'jquery';

function Matrix(props) {
    const questions = require('../../quests/' + props.questionsFileName);

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(
            questions.elements[props.questionIndex].otherValue && questions.elements[props.questionIndex].otherValue.length > 0
                ? false
                : true
        );
    }, [props.questionIndex]);

    const marks = [
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5',
        },
        {
            value: 6,
            label: '6',
        },
        {
            value: 7,
            label: '7',
        },
    ];

    const matrix = questions.elements[props.questionIndex].elements.map((row) => {
        return (
            <div key={props.questionIndex + '.' + row.value}>
                <p>
                    {row.other ? row.value + '. Qual? ' : row.value + ':'}
                    {row.other ? (
                        <input
                            key={props.questionIndex + '.' + row.value + '.input outra'}
                            id='otherText'
                            onChange={(e) => {
                                const vazio = e.target.value.length === 0;
                                setDisabled(vazio);

                                const numSubquestions = questions.elements[props.questionIndex].elements.length;
                                const numRespondidos = Object.keys(questions.elements[props.questionIndex].value).length;

                                let answered;
                                if (!vazio) {
                                    answered = numRespondidos === numSubquestions;
                                } else {
                                    answered = numRespondidos >= numSubquestions - 1;
                                }
                                questions.elements[props.questionIndex].answered = answered;

                                props.setAnswered(answered);
                            }}
                            type='text'
                            defaultValue={questions.elements[props.questionIndex].otherValue}
                        />
                    ) : (
                        <></>
                    )}
                </p>

                <Slider
                    key={props.questionIndex + '.slider.' + row.value}
                    onChangeCommitted={(e, val) => {
                        if (questions.elements[props.questionIndex].value == undefined) {
                            questions.elements[props.questionIndex].value = {};
                        }
                        questions.elements[props.questionIndex].value[row.value] = val;

                        const numSubquestions = questions.elements[props.questionIndex].elements.length;
                        const numRespondidos = Object.keys(questions.elements[props.questionIndex].value).length;

                        let answered;
                        if (questions.elements[props.questionIndex].hasOther) {
                            if ($('#otherText').val().length > 0) {
                                answered = numRespondidos === numSubquestions;
                            } else {
                                answered = numRespondidos >= numSubquestions - 1;
                            }
                        } else {
                            answered = numRespondidos === numSubquestions;
                        }

                        questions.elements[props.questionIndex].answered = answered;
                        props.setAnswered(answered);
                    }}
                    name={row.value}
                    // valueLabelDisplay='on'
                    defaultValue={
                        questions.elements[props.questionIndex].value ? questions.elements[props.questionIndex].value[row.value] : -1
                    }
                    disabled={row.other && disabled} //nao funsemina porque so ve no inicio
                    step={1}
                    marks={marks}
                    min={1}
                    max={7}
                    sx={{ mt: -3, mb: '50px' }}
                />
            </div>
        );
    });

    return matrix;
}

export default Matrix;
