import Answer from './Answer';
import React from 'react';

function Question(props) {
    const questions = require('../quests/' + props.questionsFileName);

    const consentimentoTxt = [
        'Para poder participar neste estudo, solicitamos o preenchimento da declaração de consentimento:',
        '“Declaro que aceito os termos e condições do presente questionário e que me foram dados os esclarecimentos ' +
            'necessários e as informações suficientes para a participação voluntária neste estudo. Declaro que sei que posso ' +
            'desistir a qualquer momento de participar neste estudo sem qualquer prejuízo"',
    ];

    if (props.questionIndex < questions.elements.length) {
        const question = questions.elements[props.questionIndex];

        if (props.questionIndex >= 0) {
            const classes = question.isRequired ? 'required' : '';
            return (
                <div className={questions.elements[props.questionIndex].answered ? 'question answered' : 'question'}>
                    <h4 className={classes}>
                        {props.questionIndex + 1}. {question.title || question.name}
                    </h4>
                    <p>{question.description}</p>
                    <Answer
                        questionsFileName={props.questionsFileName}
                        onChange={() => console.log('hey')}
                        questionIndex={props.questionIndex}
                        setDisabledButton={props.setDisabledButton}
                    />
                </div>
            );
        } else {
            let descriptionHTML = questions.description.map((description) => {
                return <p key={questions.description.indexOf(description)}>{description}</p>;
            });

            return (
                <>
                    <div className='description'>
                        {descriptionHTML}

                        <br />
                        <p>{consentimentoTxt[0]}</p>
                        <p>{consentimentoTxt[1]}</p>

                        <p>
                            <label>
                                <input
                                    defaultChecked={true}
                                    type='radio'
                                    name={'consentimento'}
                                    value={'Não'}
                                    onClick={() => {
                                        props.setConsentido(false);
                                    }}
                                />
                                Não
                            </label>
                        </p>

                        <p>
                            <label>
                                <input
                                    defaultChecked={false}
                                    type='radio'
                                    name={'consentimento'}
                                    value={'Sim'}
                                    onClick={() => {
                                        props.setConsentido(true);
                                    }}
                                />
                                Sim
                            </label>
                        </p>
                    </div>
                </>
            );
        }
    } else {
        return <h2>Obrigado pelo seu tempo.</h2>;
    }
}

export default Question;
