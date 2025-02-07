import React, { useState } from 'react';
import styles from './pagina68.module.css';
import CarolJohnImage from '../assets/Images/pagina68_imagem1.webp';
import vSquare from '../assets/icons/vSquare.png';
import xSquare from '../assets/icons/xSquare.png';
import eIcon from '../assets/icons/eIcon.png';
import pIcon from '../assets/icons/pIcon.png';
import global_learningLEe from '../assets/audios/global_learningLEe.mp3';
import global_learningLEp from '../assets/audios/global_learningLEp.mp3';
import pg68_audio1e from "../assets/audios/pg68_audio1e.mp3";
import pg68_audio1p from "../assets/audios/pg68_audio1p.mp3";
import pg68_audio2e from "../assets/audios/pg68_audio2e.mp3";
import pg68_audio2p from "../assets/audios/pg68_audio2p.mp3";
import pg68_audio3e from "../assets/audios/pg68_audio3e.mp3";
import pg68_audio4e from "../assets/audios/pg68_audio4e.mp3";
import pg68_audio5e from "../assets/audios/pg68_audio5e.mp3";
import pg68_audio6e from "../assets/audios/pg68_audio6e.mp3";
import pg68_audio7e from "../assets/audios/pg68_audio7e.mp3";
import pg68_audio8e from "../assets/audios/pg68_audio8e.mp3";
import pg68_audio9e from "../assets/audios/pg68_audio9e.mp3";
import pg68_audio10e from "../assets/audios/pg68_audio10e.mp3";
import pg68_audio11e from "../assets/audios/pg68_audio11e.mp3";
import pg68_audio12e from "../assets/audios/pg68_audio12e.mp3";
import pg68_audio13e from "../assets/audios/pg68_audio13e.mp3";
import pg68_audio14e from "../assets/audios/pg68_audio14e.mp3";
import pg68_audio15e from "../assets/audios/pg68_audio15e.mp3";



const allowedAnswers = [

    [
        'Hey, John. What is your phone number?',
        'Hey, John. What’s your phone number?',
        'Hey John. What is your phone number?',
        'Hey John. What’s your phone number',
        'John what is your phone number?',
        'John what’s your phone number?',
        'John. What is your phone number?',
        'John. What’s your phone number?',
        'What’s your phone number?',
        'What is your phone number?',
        'What’s your phone number?',
        'What’s your phone number',
        'What’s your number?',
        'What is your number?'
    ],

    [
        '355-6937?',
        '3556937?',
    ],

    [
        'Ok. What’s your email address?',
        'Ok. What is your email address?',
        'What is your email address?',
        'What’s your email address?',
    ],

    [
        'Thanks',
        'thanks',
        'Thanks.',
        'thanks.',
    ],
];

const Pagina68 = () => {

    const audioMap = {
        global_learningLEe: global_learningLEe,
        global_learningLEp: global_learningLEp,
        pg68_audio1e: pg68_audio1e,
        pg68_audio1p: pg68_audio1p,
        pg68_audio2e: pg68_audio2e,
        pg68_audio2p: pg68_audio2p,
        pg68_audio3e: pg68_audio3e,
        pg68_audio4e: pg68_audio4e,
        pg68_audio5e: pg68_audio5e,
        pg68_audio6e: pg68_audio6e,
        pg68_audio7e: pg68_audio7e,
        pg68_audio8e: pg68_audio8e,
        pg68_audio9e: pg68_audio9e,
        pg68_audio10e: pg68_audio10e,
        pg68_audio11e: pg68_audio11e,
        pg68_audio12e: pg68_audio12e,
        pg68_audio13e: pg68_audio13e,
        pg68_audio14e: pg68_audio14e,
        pg68_audio15e: pg68_audio15e,
    };



    const [inputValues, setInputValues] = useState(Array(7).fill(''));
    const [results, setResults] = useState(Array(7).fill(null));

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => {
            if (index % 2 === 0) {
                const normalizedInput = value.trim();
                return allowedAnswers[index / 2].includes(normalizedInput);
            }
            return null;
        });
        setResults(newResults);
    };

    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
    };

    const playAudio = (audioKey) => {
        const audioSrc = audioMap[audioKey];
        if (audioSrc) {
            const audio = new Audio(audioSrc);
            audio.play();
        } else {
            console.warn(`Áudio não encontrado para a chave: ${audioKey}`);
        }
    };



    return (
        <div className={styles["page68__container"]}>
            <header className={styles["page68__header"]}>
                <h1 className={styles["page68__title"]}>
                    Learning Language Exercises
                    <img
                        src={eIcon}
                        alt="English audio"
                        className={styles["page68__audio-icon"]}
                        onClick={() => playAudio('global_learningLEe')}
                    />
                    <img
                        src={pIcon}
                        alt="Portuguese audio"
                        className={styles["page68__audio-icon"]}
                        onClick={() => playAudio('global_learningLEp')}
                    />
                </h1>
                <h2 className={styles["page68__subtitle"]}>
                    Phone numbers and email addresses.
                    <img
                        src={eIcon}
                        alt="English audio"
                        className={styles["page68__audio-icon"]}
                        onClick={() => playAudio('pg68_audio1e')}
                    />
                    <img
                        src={pIcon}
                        alt="Portuguese audio"
                        className={styles["page68__audio-icon"]}
                        onClick={() => playAudio('pg68_audio1p')}
                    />
                </h2>

                <p className={styles["page68__instructions"]}>
                    Click on the correct word-box to complete the questions/statements.
                    <img
                        src={eIcon}
                        alt="English audio"
                        className={styles["page68__audio-icon"]}
                        onClick={() => playAudio('pg68_audio2e')}
                    />
                    <img
                        src={pIcon}
                        alt="Portuguese audio"
                        className={styles["page68__audio-icon"]}
                        onClick={() => playAudio('pg68_audio2p')}
                    />
                </p>
            </header>

            <main className={styles["page68__main"]}>
                <div className={styles["page68__left-side"]}>
                    <div className={styles["page68__questions-container"]}>
                        <div className={styles["page68__question"]}>
                            <label htmlFor="input1" className={styles["page68__label--carol"]}>Carol:</label>
                            <input
                                type="text"
                                value={inputValues[0]}
                                onChange={(e) => handleInputChange(e.target.value, 0)}
                                className={styles["page68__input-box"]}
                            />
                            {results[0] !== null && (
                                <img src={results[0] ? vSquare : xSquare} alt={results[0] ? "Correct" : "Incorrect"} className={styles["page68__checkmark-image"]} />
                            )}
                        </div>

                        <div className={styles["page68__question"]}>
                            <label htmlFor="input2" className={styles["page68__label--john"]}>John:</label>
                            <input
                                type="text"
                                value={inputValues[1]}
                                onChange={(e) => handleInputChange(e.target.value, 1)}
                                className={styles["page68__input-box"]}
                                placeholder="It’s 355 - 6927"
                                disabled
                            />
                        </div>

                        <div className={styles["page68__question"]}>
                            <label htmlFor="input3" className={styles["page68__label--carol"]}>Carol:</label>
                            <input
                                type="text"
                                value={inputValues[2]}
                                onChange={(e) => handleInputChange(e.target.value, 2)}
                                className={styles["page68__input-box"]}
                            />
                            {results[2] !== null && (
                                <img src={results[2] ? vSquare : xSquare} alt={results[2] ? "Correct" : "Incorrect"} className={styles["page68__checkmark-image"]} />
                            )}
                        </div>

                        <div className={styles["page68__question"]}>
                            <label htmlFor="input4" className={styles["page68__label--john"]}>John:</label>
                            <input
                                type="text"
                                value={inputValues[3]}
                                onChange={(e) => handleInputChange(e.target.value, 3)}
                                className={styles["page68__input-box"]}
                                placeholder="No, 355 - 6927"
                                disabled
                            />
                        </div>

                        <div className={styles["page68__question"]}>
                            <label htmlFor="input5" className={styles["page68__label--carol"]}>Carol:</label>
                            <input
                                type="text"
                                value={inputValues[4]}
                                onChange={(e) => handleInputChange(e.target.value, 4)}
                                className={styles["page68__input-box"]}
                            />
                            {results[4] !== null && (
                                <img src={results[4] ? vSquare : xSquare} alt={results[4] ? "Correct" : "Incorrect"} className={styles["page68__checkmark-image"]} />
                            )}
                        </div>

                        <div className={styles["page68__question"]}>
                            <label htmlFor="input6" className={styles["page68__label--john"]}>John:</label>
                            <input
                                type="text"
                                value={inputValues[5]}
                                onChange={(e) => handleInputChange(e.target.value, 5)}
                                className={styles["page68__input-box"]}
                                placeholder="It’s john2023@email.com"
                                disabled
                            />
                        </div>

                        <div className={styles["page68__question"]}>
                            <label htmlFor="input7" className={styles["page68__label--carol"]}>Carol:</label>
                            <input
                                type="text"
                                value={inputValues[6]}
                                onChange={(e) => handleInputChange(e.target.value, 6)}
                                className={styles["page68__input-box"]}
                            />
                            {results[6] !== null && (
                                <img src={results[6] ? vSquare : xSquare} alt={results[6] ? "Correct" : "Incorrect"} className={styles["page68__checkmark-image"]} />
                            )}
                        </div>

                        <button className={styles["page68__check-button"]} onClick={handleCheckClick}>Check</button>

                    </div>
                </div>

                <div className={styles["page68__right-side"]}>
                    <div className={styles["page68__image-container"]}>
                        <img src={CarolJohnImage} alt="Carol and John" className={styles["page68__image"]} />
                    </div>

                    <div className={styles["page68__answers-container"]}>
                        <p>
                            <strong>RESPOSTAS: (DEVEM SER VISÍVEIS APÓS CLICAR EM <span>‘CHECK’</span>)</strong>
                        </p>
                        <p onClick={() => playAudio("pg68_audio3e")} style={{ cursor: "pointer" }}>
                            <strong>A:</strong> Hey, John. What’s your phone number?
                        </p>
                        <p onClick={() => playAudio("pg68_audio4e")} style={{ cursor: "pointer" }}>
                            <strong>B:</strong> It’s 355-6927.
                        </p>
                        <p onClick={() => playAudio("pg68_audio5e")} style={{ cursor: "pointer" }}>
                            <strong>A:</strong> 355-6937?
                        </p>
                        <p onClick={() => playAudio("pg68_audio6e")} style={{ cursor: "pointer" }}>
                            <strong>B:</strong> No, 355-6927.
                        </p>
                        <p onClick={() => playAudio("pg68_audio7e")} style={{ cursor: "pointer" }}>
                            <strong>A:</strong> Ok. What’s your email address?
                        </p>
                        <p onClick={() => playAudio("pg68_audio8e")} style={{ cursor: "pointer" }}>
                            <strong>B:</strong> It’s john2023@gmail.com
                        </p>
                        <p onClick={() => playAudio("pg68_audio9e")} style={{ cursor: "pointer" }}>
                            <strong>A:</strong> Thanks.
                        </p>
                    </div>
                </div>

            </main>

            <div className={styles["page68__container-aside"]}>
                <aside className={styles["page68__aside"]}>
                    <div className={styles["page68__aside-section"]}>
                        <h2 onClick={() => playAudio("pg68_audio10e")} style={{ cursor: "pointer" }} className={styles["page68__aside-title"]}>
                            Asking for someone’s phone number
                        </h2>
                        <ul className={styles["page68__aside-list"]}>
                            <li onClick={() => playAudio("pg68_audio11e")} style={{ cursor: "pointer" }}>
                                What’s your phone number?
                            </li>
                            <li onClick={() => playAudio("pg68_audio12e")} style={{ cursor: "pointer" }}>
                                What’s your number?
                            </li>
                        </ul>
                    </div>

                    <div className={styles["page68__aside-section"]}>
                        <h2 onClick={() => playAudio("pg68_audio13e")} style={{ cursor: "pointer" }} className={styles["page68__aside-title"]}>
                            Asking for someone’s email address
                        </h2>
                        <ul className={styles["page68__aside-list"]}>
                            <li onClick={() => playAudio("pg68_audio14e")} style={{ cursor: "pointer" }}>
                                What’s your email address?
                            </li>
                            <li onClick={() => playAudio("pg68_audio15e")} style={{ cursor: "pointer" }}>
                                What’s your email?
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>

    );
};

export default Pagina68;
