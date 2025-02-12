import React, { useState } from 'react';

import styles from './pagina92.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';

import pagina92_imagem1 from '../assets/images/pagina92_imagem1.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg92_audio1e from '../assets/audios/pg92_audio1e.mp3';
import pg92_audio1p from '../assets/audios/pg92_audio1p.mp3';
import pg92_audio2 from '../assets/audios/pg92_audio2.mp3';
import pg92_audio3 from '../assets/audios/pg92_audio3.mp3';
import pg92_audio4 from '../assets/audios/pg92_audio4.mp3';
import pg92_audio5 from '../assets/audios/pg92_audio5.mp3';
import pg92_audio6 from '../assets/audios/pg92_audio6.mp3';
import pg92_audio7 from '../assets/audios/pg92_audio7.mp3';
import pg92_audio8 from '../assets/audios/pg92_audio8.mp3';
import pg92_audio9 from '../assets/audios/pg92_audio9.mp3';
import pg92_audio10 from '../assets/audios/pg92_audio10.mp3';

const Pagina92 = () => {
    const [inputValues, setInputValues] = useState(Array(9).fill(''));
    const [results, setResults] = useState(Array(9).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});

    const correctAnswers = [
        "What is your name?",
        "What is your occupation?",
        "How old are you?",
        "Where are you from?",
        "What is your favorite food?",
        "Are you married?",
        "Who is your best friend?",
        "What is the capital of Mexico?",
        "What is your favorite color?",
    ];

    const audioMap = {
        global_learning_le_e,
        global_learning_le_p,
        pg92_audio1e,
        pg92_audio1p,
        pg92_audio2,
        pg92_audio3,
        pg92_audio4,
        pg92_audio5,
        pg92_audio6,
        pg92_audio7,
        pg92_audio8,
        pg92_audio9,
        pg92_audio10
    };

    const handleCheckClick = () => {
        setResults(inputValues.map((value, index) =>
            value.trim().toLowerCase() === correctAnswers[index].toLowerCase()
        ));
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
        <div className={styles["page92__container"]}>
            <header className={styles["page92__header"]}>
                <h1 className={styles["page92__title"]}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page92__header-icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page92__header-icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
            </header>
            <main className={styles["page92__main"]}>
                <div className={styles["page92__table-container"]}>
                    <div className={styles["page92__table-header--interrogative"]}>INTERROGATIVA</div>
                    <table className={styles["page92__table--interrogative"]}>
                        <thead className={styles["page92__thead"]}>
                            <tr className={styles["page92__table-row"]}>
                                <th>Palavras <br /> Interrogativas</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th>Sujeito</th>
                                <th><span className={styles["page92__highlight"]}>Not</span> <br />Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto <br /> Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className={styles["page92__flex-container"]}>
                    <div className={styles["page92__questions-container"]}>
                        <p className={styles["page92__questions-title"]}>
                            Make questions for the following answers.
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles["page92__header-icon"]}
                                onClick={() => playAudio("pg92_audio1e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles["page92__header-icon"]}
                                onClick={() => playAudio("pg92_audio1p")}
                            />
                        </p>

                        {[
                            "My name is Dario.",
                            "I am an engineer.",
                            "I am 25.",
                            "I am from Mexico City.",
                            "My favorite food is churrasco.",
                            "No, I am not married.",
                            "My best friend is my dad.",
                            "The capital of Mexico is Mexico City.",
                            "It is black."
                        ].map((answer, index) => {
                            const audioKey = `pg92_audio${index + 2}`;

                            return (
                                <div key={index} className={styles["page92__question-item"]}>
                                    <div className={styles["page92__input-container"]}>

                                        <div className={styles["page92__icons-group"]}>
                                            <img
                                                src={eng_audio_icon}
                                                alt="Audio Icon"
                                                className={styles["page92__additional-icon"]}
                                                onClick={() => playAudio(audioKey)}
                                            />
                                            <img
                                                src={slow_audio_icon}
                                                alt="Volume Reduced Icon"
                                                className={`${styles["page92__additional-icon"]} ${isSpeedReduced[audioKey] ? styles["page92__icon--pulsing"] : ''}`}
                                                onClick={() => toggleSpeedReduction(audioKey)}
                                            />
                                        </div>


                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles["page92__input-box"]}
                                        />

                                        {results[index] !== null && (
                                            <img
                                                src={results[index] ? correct_icon : wrong_icon}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles["page92__checkmark-image"]}
                                            />
                                        )}
                                    </div>
                                    <span className={styles["page92__answer-text"]}>{answer}</span>
                                </div>
                            );
                        })}

                        <button className={styles["page92__button--check"]} onClick={handleCheckClick}>
                            <em>Check</em>
                        </button>
                    </div>

                    <div className={styles["page92__image-container"]}>
                        <img src={pagina92_imagem1} alt="man in mexican clothes" />
                        <div className={styles["page92__notice"]}>
                            <p>
                                <span className={styles["page92__notice-icon"]}>!</span>
                                Foto de <strong>Alena Darmel.</strong> A imagem desta pessoa é apenas
                                ilustrativa e não está relacionada às informações do exercício.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <aside className={styles["page92__aside"]}>
                <div className={styles["page92__aside-container"]}>
                    <div className={styles["page92__aside-header"]}>
                        <p>Word Bank</p>
                    </div>
                    <div className={styles["page92__aside-content"]}>
                        <div className={styles["page92__aside-column"]}>
                            <p className={styles["page92__text--red"]}>Who</p>
                            <p className={styles["page92__text--black"]}>Quem</p>
                            <p className={styles["page92__text--red"]}>What</p>
                            <p className={styles["page92__text--black"]}>O que, que, qual, quais</p>
                        </div>
                        <div className={styles["page92__aside-divider"]}></div>
                        <div className={styles["page92__aside-column"]}>
                            <p className={styles["page92__text--red"]}>Where</p>
                            <p className={styles["page92__text--black"]}>Onde, aonde</p>
                            <p className={styles["page92__text--red"]}>How old</p>
                            <p className={styles["page92__text--black"]}>Quantos anos</p>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Pagina92;
