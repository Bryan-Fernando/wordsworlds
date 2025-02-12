import React, { useState } from 'react';

import styles from './pagina100.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg100_audio1e from '../assets/audios/pg100_audio1e.mp3';
import pg100_audio1p from '../assets/audios/pg100_audio1p.mp3';
import pg100_audio2 from '../assets/audios/pg100_audio2.mp3';
import pg100_audio3 from '../assets/audios/pg100_audio3.mp3';
import pg100_audio4 from '../assets/audios/pg100_audio4.mp3';
import pg100_audio5 from '../assets/audios/pg100_audio5.mp3';
import pg100_audio6 from '../assets/audios/pg100_audio6.mp3';
import pg100_audio7 from '../assets/audios/pg100_audio7.mp3';
import pg100_audio8 from '../assets/audios/pg100_audio8.mp3';
import pg100_audio9 from '../assets/audios/pg100_audio9.mp3';
import pg100_audio10e from '../assets/audios/pg100_audio10e.mp3';
import pg100_audio10p from '../assets/audios/pg100_audio10p.mp3';
import pg100_audio11 from '../assets/audios/pg100_audio11.mp3';
import pg100_audio12 from '../assets/audios/pg100_audio12.mp3';
import pg100_audio13 from '../assets/audios/pg100_audio13.mp3';
import pg100_audio14 from '../assets/audios/pg100_audio14.mp3';
import pg100_audio15 from '../assets/audios/pg100_audio15.mp3';
import pg100_audio16 from '../assets/audios/pg100_audio16.mp3';
import pg100_audio17 from '../assets/audios/pg100_audio17.mp3';
import pg100_audio18 from '../assets/audios/pg100_audio18.mp3';

// Mapeamento dos áudios
const audioMap = {
    global_learning_le_e,
    global_learning_le_p,
    pg100_audio1e,
    pg100_audio1p,
    pg100_audio2,
    pg100_audio3,
    pg100_audio4,
    pg100_audio5,
    pg100_audio6,
    pg100_audio7,
    pg100_audio8,
    pg100_audio9,
    pg100_audio10e,
    pg100_audio10p,
    pg100_audio11,
    pg100_audio12,
    pg100_audio13,
    pg100_audio14,
    pg100_audio15,
    pg100_audio16,
    pg100_audio17,
    pg100_audio18,
};

const Pagina100 = () => {
    const [inputValues, setInputValues] = useState(Array(16).fill(''));
    const [results, setResults] = useState(Array(16).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});

    const correctAnswers = [
        "'m not", "aren't", "aren't", "isn't", "aren't",
        "isn't", "isn't", "isn't", "am not", "is not",
        "is not", "is not", "are not", "is not", "is not", "are not"
    ];

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => {
            if (!value) return false;

            const userAnswer = value.trim().toLowerCase().replace(/'/g, "").replace(/\s+/g, " ");
            const correctAnswer = correctAnswers[index].toLowerCase().replace(/'/g, "").replace(/\s+/g, " ");

            return userAnswer === correctAnswer;
        });

        setResults(newResults);
    };



    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value.toString();
        setInputValues(newValues);
    };



    const playAudio = (audioKey) => {
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            audio.playbackRate = isSpeedReduced[audioKey] ? 0.6 : 1;
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
        <div className={styles.pg100Container}>
            <header className={styles.pg100Header}>
                <h1 className={styles.pg100H1}>Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles.pg100HeaderIcon}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles.pg100HeaderIcon}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
            </header>
            <main className={styles.pg100Main}>
                <div className={styles.pg100tabelaNegativaContainer}>
                    <div className={styles.pg100tableHeaderNegativa}>NEGATIVA</div>
                    <table className={styles.pg100styledTableNegativa}>
                        <thead>
                            <tr className={styles.pg100celulatable}>
                                <th>Introdução</th>
                                <th>Sujeito</th>
                                <th>Verbo Auxiliar</th>
                                <th><span style={{ color: 'red' }}>Not</span> <br /> Adverb</th>
                                <th>Verbo(s)</th>
                                <th>Objeto Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className={styles.pg100ContainerQuestoes}>
                    <div className={styles.pg100Questions1}>
                        <p className={styles.pg100ATituloQuestion}>
                            A) Fill in the blanks with the negative form, using the contracted forms: ('m not, isn't, or aren't).
                            <span className={styles.pg100IconsContainer}>
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.pg100HeaderIcon}
                                    onClick={() => playAudio("pg100_audio1e")}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.pg100HeaderIcon}
                                    onClick={() => playAudio("pg100_audio1p")}
                                />
                            </span>
                        </p>

                        {[
                            "I am single.",
                            "We are at home.",
                            "You are Brazilians.",
                            "It is hot.",
                            "They are busy.",
                            "She is thirsty.",
                            "He is a soccer player.",
                            "We are in Paris."
                        ].map((sentence, index) => (
                            <div key={index} className={styles.pg100Question}>
                                <span><em><strong>{index + 1}.</strong> {sentence}</em></span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.pg100Questions1}>
                        {[
                            "I ____ married.",
                            "We ____ at the club.",
                            "You ____ Portuguese.",
                            "It ____ cool.",
                            "They ____ free (available).",
                            "She ____ hungry.",
                            "He ____ a musician.",
                            "We ____ in London."
                        ].map((question, index) => {
                            const audioKey = `pg100_audio${index + 2}`;
                            return (
                                <div key={index} className={styles.pg100Question}>
                                    <span><em>{question.split('____')[0]}</em></span>
                                    <div className={styles.pg100InputContainer}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles.pg100InputBox}
                                        />
                                    </div>
                                    <span><em>{question.split('____')[1]}</em></span>
                                    <div className={styles.pg100IconsContainer}>
                                        {results[index] !== null && (
                                            <img
                                                src={results[index] ? correct_icon : wrong_icon}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles.pg100CheckmarkImage}
                                            />
                                        )}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles.pg100AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={slow_audio_icon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles.pg100AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg100Pulsing : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* Tabela NEGATIVA */}
                <div className={styles.pg100tabelaNegativaContainer}>
                    <div className={styles.pg100tableHeaderNegativa}>NEGATIVA</div>
                    <table className={styles.pg100styledTableNegativa}>
                        <thead>
                            <tr className={styles.pg100celulatable}>
                                <th>Introdução</th>
                                <th>Sujeito</th>
                                <th>Verbo Auxiliar</th>
                                <th><span style={{ color: 'red' }}>Not</span> <br /> Adverb</th>
                                <th>Verbo(s)</th>
                                <th>Objeto Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className={styles.pg100ContainerQuestoes}>
                    <div className={styles.pg100Questions1}>
                        <p className={styles.pg100ATituloQuestion}>
                            B) Change into the Negative Form, using (not). <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles.pg100HeaderIcon}
                                onClick={() => playAudio("pg100_audio10e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles.pg100HeaderIcon}
                                onClick={() => playAudio("pg100_audio10p")}
                            />
                        </p>

                        {[
                            "I am tired.",
                            "He is happy.",
                            "She is at home.",
                            "It is cold.",
                            "We are late.",
                            "He is a doctor.",
                            "She is my sister.",
                            "We are in São Paulo."
                        ].map((sentence, index) => (
                            <div key={index + 8} className={styles.pg100Question}>
                                <span><em><strong>{index + 1}.</strong> {sentence}</em></span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.pg100Questions1}>
                        {[
                            "I ____ sleepy.",
                            "He ____ sad.",
                            "She ____ at school.",
                            "It ____ hot.",
                            "We ____ early.",
                            "He ____ a nurse.",
                            "She ____ my cousin.",
                            "We ____ in Rio de Janeiro."
                        ].map((question, index) => {
                            const audioKey = `pg100_audio${index + 11}`;
                            return (
                                <div key={index + 8} className={styles.pg100Question}>
                                    <span><em>{question.split('____')[0]}</em></span>
                                    <div className={styles.pg100InputContainer}>
                                        <input
                                            type="text"
                                            value={inputValues[index + 8]}
                                            onChange={(e) => handleInputChange(e.target.value, index + 8)}
                                            className={styles.pg100InputBox}
                                        />
                                    </div>
                                    <span><em>{question.split('____')[1]}</em></span>
                                    <div className={styles.pg100IconsContainer}>
                                        {results[index + 8] !== null && (
                                            <img
                                                src={results[index + 8] ? correct_icon : wrong_icon}
                                                alt={results[index + 8] ? "Correct" : "Incorrect"}
                                                className={styles.pg100CheckmarkImage}
                                            />
                                        )}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles.pg100AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={slow_audio_icon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles.pg100AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg100Pulsing : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

            </main>
            <button className={styles.pg100CheckButton} onClick={handleCheckClick}><em>Check</em></button>
        </div>
    );
};

export default Pagina100;
