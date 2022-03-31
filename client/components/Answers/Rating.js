import { Slider } from "@mui/material";
import React from 'react';

function Rating(props) {
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

    return (
        <Slider
                    onChangeCommitted={(e, val) => {
                        if (questions.elements[props.questionIndex].value == undefined) {
                            questions.elements[props.questionIndex].value = {};
                        }
                        questions.elements[props.questionIndex].value = val;
                        props.setAnswered(true);
                    }}
                    name={questions.elements[props.questionIndex].name}
                    valueLabelDisplay='auto'
                    defaultValue={questions.elements[props.questionIndex].value ? questions.elements[props.questionIndex].value : -1}
                    step={1}
                    marks={marks}
                    // valueLabelDisplay='on'
                    min={1}
                    max={7}
                    sx={{ mt: -3, mb: -1 }}
                />
    );
}

export default Rating;