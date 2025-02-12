import React, { useState } from 'react';

import styles from './pagina94.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina94_imagem1 from '../assets/images/pagina94_imagem1.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg94_audio1e from '../assets/audios/pg94_audio1e.mp3';
import pg94_audio1p from '../assets/audios/pg94_audio1p.mp3';
import pg94_audio2 from '../assets/audios/pg94_audio2.mp3';
import pg94_audio3 from '../assets/audios/pg94_audio3.mp3';
import pg94_audio4 from '../assets/audios/pg94_audio4.mp3';
import pg94_audio5 from '../assets/audios/pg94_audio5.mp3';
import pg94_audio6 from '../assets/audios/pg94_audio6.mp3';
import pg94_audio7 from '../assets/audios/pg94_audio7.mp3';
import pg94_audio8 from '../assets/audios/pg94_audio8.mp3';
import pg94_audio9 from '../assets/audios/pg94_audio9.mp3';
import pg94_audio10 from '../assets/audios/pg94_audio10.mp3';
import pg94_audio11 from '../assets/audios/pg94_audio11.mp3';

const Pagina94 = () => {
    const [inputValues, setInputValues] = useState(Array(6).fill(''));
    const [results, setResults] = useState(Array(6).fill(null));

    const correctAnswers = [
        'Does she eat breakfast every morning?',
        'Do they play soccer in the park?',
        'Does he go to the gym after work?',
        'Do birds sing in the trees?',
        'Do you study English at school?'
    ];

    const audioMap = {
        global_learning_le_e,
        global_learning_le_p,
        pg94_audio1e,
        pg94_audio1p,
        pg94_audio2,
        pg94_audio3,
        pg94_audio4,
        pg94_audio5,
        pg94_audio6,
        pg94_audio7,
        pg94_audio8,
        pg94_audio9,
        pg94_audio10,
        pg94_audio11
    };

    const playAudio = (audioKey) => {
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => {
            if (!correctAnswers[index]) return false;

            const isCorrect = value.trim().toLowerCase() === correctAnswers[index].toLowerCase();

            return isCorrect;
        });
        setResults(newResults);
    };


    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
    };

    return (
        <div className={styles["page94__container"]}>
            <header className={styles["page94__header"]}>
                <h1 className={styles["page94__title"]}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page94__header-icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page94__header-icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
            </header>
            <main className={styles["page94__main"]}>
                <div className={styles["page94__table-container"]}>
                    <div className={styles["page94__table-header--interrogative"]}>INTERROGATIVA</div>
                    <table className={styles["page94__table--interrogative"]}>
                        <thead className={styles["page94__thead"]}>
                            <tr className={styles["page94__table-row"]}>
                                <th>Palavras <br /> Interrogativas</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th>Sujeito</th>
                                <th>
                                    <span className={styles["page94__highlight"]}>Not</span> <br /> Advérbio
                                </th>
                                <th>Verbo(s)</th>
                                <th>Objeto <br /> Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className={styles["page94__content-flex"]}>
                    <div className={styles["page94__questions-container"]}>
                        <h2 className={styles["page94__questions-title"]}>
                            1. Make questions for the following answers.
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles["page94__header-icon"]}
                                onClick={() => playAudio("pg94_audio1e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles["page94__header-icon"]}
                                onClick={() => playAudio("pg94_audio1p")}
                            />
                        </h2>

                        {[
                            "Yes, she eats breakfast every morning.",
                            "Yes, they play soccer in the park.",
                            "Yes, he goes to the gym after work.",
                            "Yes, the birds sing in the trees.",
                            "Yes, I study English at school."
                        ].map((question, index) => {
                            const answerAudio = `pg94_audio${index + 2}`;
                            const inputAudio = `pg94_audio${index + 7}`;

                            return (
                                <div key={index} className={styles["page94__question"]}>
                                    <div className={styles["page94__input-container"]}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles["page94__input-box"]}
                                        />
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page94__additional-icon"]}
                                            onClick={() => playAudio(inputAudio)}
                                        />
                                        {results[index] !== null ? (
                                            <img
                                                src={results[index] ? correct_icon : wrong_icon}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles["page94__checkmark-image"]}
                                                style={{ display: "inline-block" }}
                                            />
                                        ) : (
                                            <span className={styles["page94__placeholder"]}></span>
                                        )}

                                    </div>
                                    <span
                                        className={styles["page94__question-text"]}
                                        onClick={() => playAudio(answerAudio)}
                                    >
                                        <em>{question}</em>
                                    </span>
                                </div>
                            );
                        })}

                        <button className={styles["page94__button--check"]} onClick={handleCheckClick}>
                            <em>Check</em>
                        </button>
                    </div>


                    <div className={styles["page94__image-container"]}>
                        <img src={pagina94_imagem1} alt="kids playing soccer" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Pagina94;
