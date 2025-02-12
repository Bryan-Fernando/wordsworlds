import React, { useState } from 'react';

import styles from './pagina89.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina89_imagem1 from '../assets/images/pagina89_imagem1.webp';
import pagina89_imagem2 from '../assets/images/pagina89_imagem2.webp';
import pagina89_imagem3 from '../assets/images/pagina89_imagem3.webp';
import pagina89_imagem4 from '../assets/images/pagina89_imagem4.webp';
import pagina89_imagem5 from '../assets/images/pagina89_imagem5.webp';
import pagina89_imagem6 from '../assets/images/pagina89_imagem6.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import global_article_a_ane from '../assets/audios/global_article-a-ane.mp3';
import global_article_a_anp from '../assets/audios/global_article-a-anp.mp3';
import pg89_audio1 from '../assets/audios/pg89_audio1.mp3';
import pg89_audio2 from '../assets/audios/pg89_audio2.mp3';
import pg89_audio3 from '../assets/audios/pg89_audio3.mp3';
import pg89_audio4 from '../assets/audios/pg89_audio4.mp3';
import pg89_audio5 from '../assets/audios/pg89_audio5.mp3';
import pg89_audio6 from '../assets/audios/pg89_audio6.mp3';

const audioMap = {
    global_learning_le_e,
    global_learning_le_p,
    global_article_a_ane,
    global_article_a_anp,
    pg89_audio1,
    pg89_audio2,
    pg89_audio3,
    pg89_audio4,
    pg89_audio5,
    pg89_audio6
};

const Pagina89 = () => {
    const [inputValues, setInputValues] = useState(Array(6).fill(''));
    const [results, setResults] = useState(Array(6).fill(null));

    const correctAnswers = ['an', 'a', 'a', 'an', 'a', 'an'];

    const handleCheckClick = () => {
        setResults(inputValues.map((value, index) =>
            value.trim().toLowerCase() === correctAnswers[index]
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
            audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };

    return (
        <div className={styles["pg89__container"]}>
            <header className={styles["pg89__header"]}>
                <h1 className={styles["pg89__title"]}>
                    Learning Language Exercise
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["pg89__header-icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["pg89__header-icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>

                <h2 className={styles["pg89__subtitle"]}>
                    Complete with the appropriate indefinite article (a/an)
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["pg89__header-icon"]}
                        onClick={() => playAudio("global_article_a_ane")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["pg89__header-icon"]}
                        onClick={() => playAudio("global_article_a_anp")}
                    />
                </h2>
            </header>

            <main className={styles["pg89__main"]}>
                <div className={styles["pg89__questions-container"]}>
                    <div className={styles["pg89__column"]}>
                        {[
                            { img: pagina89_imagem1, sentence: "animal.", audio: "pg89_audio1" },
                            { img: pagina89_imagem2, sentence: "man.", audio: "pg89_audio2" },
                            { img: pagina89_imagem3, sentence: "river.", audio: "pg89_audio3" }
                        ].map((question, index) => (
                            <div key={index} className={styles["pg89__question-item"]}>
                                <img className={styles["pg89__image"]} src={question.img} alt="" />
                                <span>
                                    <strong>{String.fromCharCode(97 + index)}.</strong>
                                    <input
                                        type="text"
                                        value={inputValues[index]}
                                        onChange={(e) => handleInputChange(e.target.value, index)}
                                        className={styles["pg89__input"]}
                                    />
                                    <span
                                        className={styles["pg89__clickable-text"]}
                                        onClick={() => playAudio(question.audio)}
                                    >
                                        {question.sentence}
                                    </span>
                                </span>
                                <div className={styles["pg89__icons-container"]}>
                                    {results[index] !== null && (
                                        <img
                                            src={results[index] ? correct_icon : wrong_icon}
                                            alt={results[index] ? "Correct" : "Incorrect"}
                                            className={styles["pg89__icon-check"]}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles["pg89__column"]}>
                        {[
                            { img: pagina89_imagem4, sentence: "elephant.", audio: "pg89_audio4" },
                            { img: pagina89_imagem5, sentence: "lion.", audio: "pg89_audio5" },
                            { img: pagina89_imagem6, sentence: "ocean.", audio: "pg89_audio6" }
                        ].map((question, index) => (
                            <div key={index + 3} className={styles["pg89__question-item"]}>
                                <img className={styles["pg89__image"]} src={question.img} alt="" />
                                <span>
                                    <strong>{String.fromCharCode(100 + index)}.</strong>
                                    <input
                                        type="text"
                                        value={inputValues[index + 3]}
                                        onChange={(e) => handleInputChange(e.target.value, index + 3)}
                                        className={styles["pg89__input"]}
                                    />
                                    <span
                                        className={styles["pg89__clickable-text"]}
                                        onClick={() => playAudio(question.audio)}
                                    >
                                        {question.sentence}
                                    </span>
                                </span>
                                <div className={styles["pg89__icons-container"]}>
                                    {results[index + 3] !== null && (
                                        <img
                                            src={results[index + 3] ? correct_icon : wrong_icon}
                                            alt={results[index + 3] ? "Correct" : "Incorrect"}
                                            className={styles["pg89__icon-check"]}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <button className={styles["pg89__check-button"]} onClick={handleCheckClick}>
                <em>Check</em>
            </button>
        </div>
    );
};

export default Pagina89;
