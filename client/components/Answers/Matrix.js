import { Slider } from '@mui/material';
import React from 'react';

function Matrix(props) {
    const questions = require('../../quests/' + props.questionsFileName)

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
            <div key={row.value}>
                <p>{row.value}:</p>
                <Slider
                    onChangeCommitted={(e, val) => {
                        if (questions.elements[props.questionIndex].value == undefined) {
                            questions.elements[props.questionIndex].value = {};
                        }
                        questions.elements[props.questionIndex].value[row.value] = val;
                        if (
                            Object.keys(questions.elements[props.questionIndex].value).length ==
                            questions.elements[props.questionIndex].elements.length
                        ) {
                            questions.elements[props.questionIndex].answered = true;
                        }
                    }}
                    name={row.value}
                    // valueLabelDisplay='on'
                    defaultValue={
                        questions.elements[props.questionIndex].value ? questions.elements[props.questionIndex].value[row.value] : -1
                    }
                    step={1}
                    marks={marks}
                    min={1}
                    max={7}
                    sx={{ mt: -3, mb: '50px'}}
                />
            </div>
        );
    });
    return matrix;
}

export default Matrix;
