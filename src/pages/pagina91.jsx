import React, { useState } from 'react';

import styles from './pagina91.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';

import pagina91_imagem1 from '../assets/images/pagina91_imagem1.webp';
import pagina91_imagem2 from '../assets/images/pagina91_imagem2.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg91_audio1e from '../assets/audios/pg91_audio1e.mp3';
import pg91_audio1p from '../assets/audios/pg91_audio1p.mp3';
import pg91_audio2 from '../assets/audios/pg91_audio2.mp3';
import pg91_audio3 from '../assets/audios/pg91_audio3.mp3';
import pg91_audio4 from '../assets/audios/pg91_audio4.mp3';
import pg91_audio5 from '../assets/audios/pg91_audio5.mp3';
import pg91_audio6 from '../assets/audios/pg91_audio6.mp3';
import pg91_audio7 from '../assets/audios/pg91_audio7.mp3';
import pg91_audio8 from '../assets/audios/pg91_audio8.mp3';
import pg91_audio9 from '../assets/audios/pg91_audio9.mp3';

const Pagina91 = () => {
    const [inputValues, setInputValues] = useState(Array(10).fill(''));
    const [results, setResults] = useState(Array(10).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});


    const correctAnswers = ['the', 'a', 'a', 'are', 'an', 'are', 'the', 'a'];

    const audioMap = {
        global_learning_le_e,
        global_learning_le_p,
        pg91_audio1e,
        pg91_audio1p,
        pg91_audio2,
        pg91_audio3,
        pg91_audio4,
        pg91_audio5,
        pg91_audio6,
        pg91_audio7,
        pg91_audio8,
        pg91_audio9
    };

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => value.toLowerCase() === correctAnswers[index]);
        setResults(newResults);
    };

    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
    };

    const playAudio = (audioKey) => {
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            const speed = isSpeedReduced[audioKey] ? 0.6 : 1;
            audio.playbackRate = speed;
            audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };


    const toggleSpeedReduction = (audioKey) => {
        setIsSpeedReduced((prevState) => ({
            ...prevState,
            [audioKey]: !prevState[audioKey]
        }));
    };


    return (
        <div className={styles["page91__container"]}>
            <header className={styles["page91__header"]}>
                <h1 className={styles["page91__title"]}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page91__header-icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page91__header-icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
                <div className={styles["page91__image-container"]}></div>
            </header>
            <main className={styles["page91__main"]}>
                <div style={{ width: '100%' }}>
                    <div className={styles["page91__header-images"]}>
                        <img src={pagina91_imagem1} alt="sala de aula" />
                        <img src={pagina91_imagem2} alt="engenheiros" />
                    </div>
                    <div className={styles["page91__table-header"]}>
                        <p>AFIRMATIVA</p>
                    </div>
                    <table className={styles["page91__table"]}>
                        <colgroup>
                            <col className={styles["page91__column--introduction"]} />
                            <col className={styles["page91__column--subject"]} />
                            <col className={styles["page91__column--auxiliary-verb"]} />
                            <col className={styles["page91__column--adverb"]} />
                            <col className={styles["page91__column--verb"]} />
                            <col className={styles["page91__column--object-complement"]} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>Introdução</th>
                                <th>Sujeito</th>
                                <th>Verbo Auxiliar</th>
                                <th>Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </main>
            <aside className={styles["page91__aside"]}>
                <h2 className={styles["page91__questions-title"]}>
                    Fill in the blank with the appropriate
                    <span className={styles["page91__highlight--definite"]}> Definitive </span>
                    or
                    <span className={styles["page91__highlight--indefinite"]}> Indefinite </span>
                    article, or leave the blank empty for
                    <span className={styles["page91__highlight--plural"]}> plural nouns </span>. <br />
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page91__header-icon"]}
                        onClick={() => playAudio("pg91_audio1e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page91__header-icon"]}
                        onClick={() => playAudio("pg91_audio1p")}
                    />
                </h2>
                <div className={styles["page91__questions-container"]}>
                    {[
                        "____ sky is blue.",
                        "I have ____ cat.",
                        "She is ____ teacher.",
                        "We  ____ students.",
                        "He is ____ architect.",
                        "They  ____ engineers.",
                        "____ Earth is round.",
                        "You are ____ musician"
                    ].map((question, index) => {
                        const audioKey = `pg91_audio${index + 2}`; // Áudios começam no pg91_audio2
                        return (
                            <div key={index} className={styles["page91__question"]}>
                                <span>
                                    <em>
                                        <strong>{index + 1}.</strong> {question.split('____')[0]}
                                    </em>
                                </span>
                                <div className={styles["page91__input-container"]}>
                                    <input
                                        type="text"
                                        value={inputValues[index]}
                                        onChange={(e) => handleInputChange(e.target.value, index)}
                                        className={styles["page91__input-box"]}
                                    />
                                    {results[index] !== null && (
                                        <img
                                            src={results[index] ? correct_icon : wrong_icon}
                                            alt={results[index] ? "Correct" : "Incorrect"}
                                            className={styles["page91__checkmark-image"]}
                                        />
                                    )}
                                </div>
                                <span><em>{question.split('____')[1]}</em></span>
                                <div className={styles["page91__icons-container"]}>
                                    <img
                                        src={eng_audio_icon}
                                        alt="Audio Icon"
                                        className={styles["page91__additional-icon"]}
                                        onClick={() => playAudio(audioKey)}
                                    />
                                    <img
                                        src={slow_audio_icon}
                                        alt="Volume Reduced Icon"
                                        className={`${styles["page91__additional-icon"]} ${isSpeedReduced[audioKey] ? styles["page91__icon--pulsing"] : ''}`}
                                        onClick={() => toggleSpeedReduction(audioKey)}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button className={styles["page91__button--check"]} onClick={handleCheckClick}>
                    <em>Check</em>
                </button>
            </aside>
        </div>
    );
};

export default Pagina91;
