import React, { useState, useEffect } from 'react';
import { Slider, Checkbox } from '@mui/material';
import $ from 'jquery';

function ConhecerEmpreendedor(props) {
    const questions = require('../../quests/' + props.questionsFileName);
    const [relacionamentoInactive, _setRelacionamentoInactive] = useState([true, true, true, true]);

    useEffect(() => {
        verifyAnswered();
    }, [relacionamentoInactive]);

    const setRelacionamentoInactive = (index, state) => {
        const aux = { ...relacionamentoInactive };

        aux[index] = !state;

        _setRelacionamentoInactive(aux);
    };

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

    const relacionamentos = ['Família', 'Amigos', 'Patrão', 'Outro'];
    const questRelacionamentos = [
        'Em que medida você conhece a atividade dele(a) como empreendedor(a)?',
        'Em que medida ele/ela pode ser considerado(a) um bom empreendedor(a)?',
    ];

    const verifyAnswered = () => {
        var questao = questions.elements[props.questionIndex];

        const numCheckboxActive = Object.values(relacionamentoInactive).filter((el) => {
            return el === false;
        }).length; //-> Numero de checkboxes ativas

        const numSlidersObrigatorios = 2 * numCheckboxActive;
        //-> número de sliders que tem de ser respondidos

        let numSlidersRespondidos = 0;
        for (const relation in questao.value) {
            numSlidersRespondidos += Object.keys(questao.value[relation]).length;
        }

        let answered = numSlidersRespondidos === numSlidersObrigatorios;

        if (numSlidersObrigatorios === 0) answered = false;

        props.setAnswered(answered);
    };

    const relacionamentosHTML = relacionamentos.map((relacionamento, index) => {
        const questRelacionamentosHTML = questRelacionamentos.map((questRelacionamento) => {
            return (
                <div
                    key={index + '.slider.' + questRelacionamento}
                    style={{
                        margin: '0 50px',
                        display:
                            !(questions.elements[props.questionIndex].value
                                ? questions.elements[props.questionIndex].value[relacionamento]
                                    ? true
                                    : false
                                : false) && relacionamentoInactive[index]
                                ? 'none'
                                : null,
                    }}
                >
                    <p>{questRelacionamento}</p>
                    <Slider
                        name={relacionamento + '.' + questRelacionamento}
                        defaultValue={
                            questions.elements[props.questionIndex].value
                                ? questions.elements[props.questionIndex].value[relacionamento]
                                    ? questions.elements[props.questionIndex].value[relacionamento][questRelacionamento]
                                    : -1
                                : -1
                        }
                        onChangeCommitted={(e, val) => {
                            var questao = questions.elements[props.questionIndex];
                            if (!questao.value) {
                                questao.value = {};
                            }
                            if (!questao.value[relacionamento]) {
                                questao.value[relacionamento] = {};
                            }

                            questao.value[relacionamento][questRelacionamento] = val;

                            //Verificar se está answered
                            verifyAnswered();
                        }}
                        sx={{
                            mt: -3,
                            mb: '50px',
                        }}
                        step={1}
                        marks={marks}
                        min={1}
                        max={7}
                    />
                </div>
            );
        });

        return (
            <div key={index + '.' + relacionamento} className='relacionamento-container'>
                <p>
                    <Checkbox
                        name={'relacionamento'}
                        defaultChecked={
                            questions.elements[props.questionIndex].value
                                ? questions.elements[props.questionIndex].value[relacionamento]
                                    ? true
                                    : false
                                : false
                        }
                        onChange={(e, val) => {
                            setRelacionamentoInactive(index, val);

                            if (!val && questions.elements[props.questionIndex].value) {
                                //Delete answer from sliders that belong to checkbox
                                delete questions.elements[props.questionIndex].value[relacionamento];

                                $(e.target).parents('div.relacionamento-container').find('.MuiSlider-track').css('width', '0%');
                                $(e.target).parents('div.relacionamento-container').find('.MuiSlider-thumb').css('left', '0%');
                            }
                        }}
                    />
                    {relacionamento}
                </p>

                {questRelacionamentosHTML}
            </div>
        );
    });

    return relacionamentosHTML;
}

export default ConhecerEmpreendedor;
