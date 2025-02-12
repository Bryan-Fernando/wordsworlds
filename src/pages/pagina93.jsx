import React, { useState } from "react";

import styles from "./pagina93.module.css";

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina93_imagem1 from "../assets/images/pagina93_imagem1.webp";
import pagina93_imagem2 from "../assets/images/pagina93_imagem2.webp";

import global_learning_le_e from "../assets/audios/global_learning_le_e.mp3";
import global_learning_le_p from "../assets/audios/global_learning_le_p.mp3";
import global_answer_questionp from "../assets/audios/global_answer_questionp.mp3"
import global_answer_questione from "../assets/audios/global_answer_questione.mp3"
import pg93_audio1e from "../assets/audios/pg93_audio1e.mp3";
import pg93_audio1p from "../assets/audios/pg93_audio1p.mp3";
import pg93_audio2 from "../assets/audios/pg93_audio2.mp3";
import pg93_audio3 from "../assets/audios/pg93_audio3.mp3";
import pg93_audio4 from "../assets/audios/pg93_audio4.mp3";
import pg93_audio5 from "../assets/audios/pg93_audio5.mp3";
import pg93_audio6 from "../assets/audios/pg93_audio6.mp3";
import pg93_audio7 from "../assets/audios/pg93_audio7.mp3";
import pg93_audio8 from "../assets/audios/pg93_audio8.mp3";
import pg93_audio9 from "../assets/audios/pg93_audio9.mp3";
import pg93_audio10 from "../assets/audios/pg93_audio10.mp3";
import pg93_audio11 from "../assets/audios/pg93_audio11.mp3";
import pg93_audio12 from "../assets/audios/pg93_audio12.mp3";
import pg93_audio13 from "../assets/audios/pg93_audio13.mp3";
import pg93_audio14 from "../assets/audios/pg93_audio14.mp3";
import pg93_audio15 from "../assets/audios/pg93_audio15.mp3";
import pg93_audio16 from "../assets/audios/pg93_audio16.mp3";
import pg93_audio17 from "../assets/audios/pg93_audio17.mp3";
import pg93_audio18 from "../assets/audios/pg93_audio18.mp3";
import pg93_audio19 from "../assets/audios/pg93_audio19.mp3";
import pg93_audio20 from "../assets/audios/pg93_audio20.mp3";
import pg93_audio21 from "../assets/audios/pg93_audio21.mp3";
import pg93_audio22 from "../assets/audios/pg93_audio22.mp3";
import pg93_audio23 from "../assets/audios/pg93_audio23.mp3";
import pg93_audio24 from "../assets/audios/pg93_audio24.mp3";
import pg93_audio25 from "../assets/audios/pg93_audio25.mp3";
import pg93_audio26 from "../assets/audios/pg93_audio26.mp3";
import pg93_audio27 from "../assets/audios/pg93_audio27.mp3";
import pg93_audio28 from "../assets/audios/pg93_audio28.mp3";
import pg93_audio29 from "../assets/audios/pg93_audio29.mp3";
import pg93_audio30 from "../assets/audios/pg93_audio30.mp3";
import pg93_audio31 from "../assets/audios/pg93_audio31.mp3";


const Pagina93 = () => {
    const [inputValues1, setInputValues1] = useState(Array(6).fill(""));
    const [inputValues2, setInputValues2] = useState(Array(6).fill(""));
    const [inputValues3, setInputValues3] = useState(Array(6).fill(""));

    const handleInputChange = (value, index, setInputValues, inputValues) => {
        const updatedValues = [...inputValues];
        updatedValues[index] = value;
        setInputValues(updatedValues);
    };

    const audioMap = {
        global_learning_le_e,
        global_learning_le_p,
        global_answer_questione,
        global_answer_questionp,
        pg93_audio1e,
        pg93_audio1p,
        pg93_audio2,
        pg93_audio3,
        pg93_audio4,
        pg93_audio5,
        pg93_audio6,
        pg93_audio7,
        pg93_audio8,
        pg93_audio9,
        pg93_audio10,
        pg93_audio11,
        pg93_audio12,
        pg93_audio13,
        pg93_audio14,
        pg93_audio15,
        pg93_audio16,
        pg93_audio17,
        pg93_audio18,
        pg93_audio19,
        pg93_audio20,
        pg93_audio21,
        pg93_audio22,
        pg93_audio23,
        pg93_audio24,
        pg93_audio25,
        pg93_audio26,
        pg93_audio27,
        pg93_audio28,
        pg93_audio29,
        pg93_audio30,
        pg93_audio31
    };

    const playAudio = (audioKey) => {
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            audio.play().catch((error) =>
                console.error("Erro ao reproduzir o áudio:", error)
            );
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };

    return (
        <div className={styles["page93__container"]}>
            <header className={styles["page93__header"]}>
                <h1 className={styles["page93__title"]}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page93__header-icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page93__header-icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
            </header>
            <main className={styles["page93__main"]}>
                <div className={styles["page93__column-container"]}>
                    <div className={styles["page93__table-container"]}>
                        <div className={styles["page93__table-header--affirmative"]}>AFIRMATIVA</div>
                        <table className={styles["page93__table--affirmative"]}>
                            <thead>
                                <tr className={styles["page93__table-row"]}>
                                    <th>Introdução</th>
                                    <th>Sujeito</th>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th>Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    <div className={styles["page93__content-flex"]}>
                        <div className={styles["page93__questions-container"]}>
                            {/* EXAMPLE */}
                            <div>
                                <p>
                                    <span className={styles["page93__text--red"]}>
                                        <strong>EXAMPLE.</strong>
                                    </span>{" "}
                                    Answer the questions with your own words.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles["page93__header-icon"]}
                                        onClick={() => playAudio("pg93_audio1e")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles["page93__header-icon"]}
                                        onClick={() => playAudio("pg93_audio1p")}
                                    />
                                </p>

                                <div className={styles["page93__questions-list"]}>
                                    {[
                                        { question: "Who is he?", answer: "He is my classmate.", audio: "pg93_audio8" },
                                        { question: "What is his name?", answer: "His name is John.", audio: "pg93_audio9" },
                                        { question: "Where is he from?", answer: "He is from Ariquemes.", audio: "pg93_audio10" },
                                        { question: "What is his favorite sport?", answer: "His favorite sport is soccer.", audio: "pg93_audio11" },
                                        { question: "When is his birthday?", answer: "It is on March 2nd.", audio: "pg93_audio12" },
                                        { question: "How old is he?", answer: "He is 15.", audio: "pg93_audio13" },
                                    ].map((item, index) => (
                                        <div key={index} className={styles["page93__question"]}>
                                            <div className={styles["page93__question-row"]}>
                                                <span
                                                    className={styles["page93__question-text"]}
                                                    onClick={() => playAudio(item.audio)}
                                                >
                                                    <em>
                                                        <strong>{String.fromCharCode(97 + index)}.</strong> {item.question}
                                                    </em>
                                                </span>

                                                <input
                                                    type="text"
                                                    value={item.answer}
                                                    readOnly
                                                    className={styles["page93__input-box"]}
                                                    style={{ color: "#A61C28", cursor: "pointer" }}
                                                    onClick={() => playAudio(item.audio)}
                                                />
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                            {/* Bloco 1 */}
                            <div className={styles["page93__questions-list"]}>
                                <h2>
                                    1. Answer the questions with your own words.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles["page93__header-icon"]}
                                        onClick={() => playAudio("global_answer_questione")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles["page93__header-icon"]}
                                        onClick={() => playAudio("global_answer_questionp")}
                                    />
                                </h2>

                                {[
                                    "Who is she?",
                                    "What is her name?",
                                    "Where is she from?",
                                    "What is her favorite sport?",
                                    "When is her birthday?",
                                    "How old is she?",
                                ].map((question, index) => {
                                    const audioKey = `pg93_audio${index + 14}`;
                                    return (
                                        <div key={index} className={styles["page93__question"]}>
                                            <div className={styles["page93__question-row"]}>
                                                <span
                                                    className={styles["page93__question-text"]}
                                                    onClick={() => playAudio(audioKey)}
                                                >
                                                    <em>
                                                        <strong>{String.fromCharCode(97 + index)}.</strong> {question}
                                                    </em>
                                                </span>
                                                <input
                                                    type="text"
                                                    value={inputValues1[index]}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            e.target.value,
                                                            index,
                                                            setInputValues1,
                                                            inputValues1
                                                        )
                                                    }
                                                    className={styles["page93__input-box"]}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Bloco 2 */}
                            <div className={styles["page93__questions-list"]}>
                                <h2>
                                    2. Answer the questions with your own words.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles["page93__header-icon"]}
                                        onClick={() => playAudio("global_answer_questione")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles["page93__header-icon"]}
                                        onClick={() => playAudio("global_answer_questionp")}
                                    />
                                </h2>

                                {[
                                    "Who are you?",
                                    "What is your name?",
                                    "Where are you from?",
                                    "What is your favorite sport?",
                                    "When is your birthday?",
                                    "How old are you?",
                                ].map((question, index) => {
                                    const audioKey = `pg93_audio${index + 20}`;
                                    return (
                                        <div key={index} className={styles["page93__question"]}>
                                            <div className={styles["page93__question-row"]}>
                                                <span
                                                    className={styles["page93__question-text"]}
                                                    onClick={() => playAudio(audioKey)}
                                                >
                                                    <em>
                                                        <strong>{String.fromCharCode(97 + index)}.</strong> {question}
                                                    </em>
                                                </span>
                                                <input
                                                    type="text"
                                                    value={inputValues2[index]}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            e.target.value,
                                                            index,
                                                            setInputValues2,
                                                            inputValues2
                                                        )
                                                    }
                                                    className={styles["page93__input-box"]}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Bloco 3 */}
                            <div className={styles["page93__questions-list"]}>
                                <h2>
                                    3. Answer the questions with your own words.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles["page93__header-icon"]}
                                        onClick={() => playAudio("global_answer_questione")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles["page93__header-icon"]}
                                        onClick={() => playAudio("global_answer_questionp")}
                                    />
                                </h2>

                                {[
                                    "Who are they?",
                                    "What are their names?",
                                    "Where are they from?",
                                    "What are their favorite past times (hobbies)?",
                                    "When are their birthdays?",
                                    "How old are they?",
                                ].map((question, index) => {
                                    const audioKey = `pg93_audio${index + 26}`;
                                    return (
                                        <div key={index} className={styles["page93__question"]}>
                                            <div className={styles["page93__question-row"]}>
                                                <span
                                                    className={styles["page93__question-text"]}
                                                    onClick={() => playAudio(audioKey)}
                                                >
                                                    <em>
                                                        <strong>{String.fromCharCode(97 + index)}.</strong> {question}
                                                    </em>
                                                </span>
                                                <input
                                                    type="text"
                                                    value={inputValues3[index]}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            e.target.value,
                                                            index,
                                                            setInputValues3,
                                                            inputValues3
                                                        )
                                                    }
                                                    className={styles["page93__input-box"]}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>



                            <button className={styles["page93__button--check"]}>
                                <em>Check</em>
                            </button>
                        </div>

                        {/* Imagens */}
                        <div className={styles["page93__images"]}>
                            <img src={pagina93_imagem1} alt="Group of teenagers" />
                            <img src={pagina93_imagem2} alt="Teenagers with phone" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Pagina93;
