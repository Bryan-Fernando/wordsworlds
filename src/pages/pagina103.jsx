import React, { useState } from 'react';
import styles from './pagina103.module.css';
import pagina103_imagem1 from '../assets/images/pagina103_imagem1.webp';
import vSquare from '../assets/icons/vSquare.png';
import xSquare from '../assets/icons/xSquare.png';
import eIcon from '../assets/icons/eIcon.png';
import pIcon from '../assets/icons/pIcon.png';

// Áudios globais e instruções
import global_learningLEe from '../assets/audios/global_learningLEe.mp3';
import global_learningLEp from '../assets/audios/global_learningLEp.mp3';
import pg103_audio1e from '../assets/audios/pg103_audio1e.mp3';
import pg103_audio1p from '../assets/audios/pg103_audio1p.mp3';

// Áudios das questões
import pg103_audio2 from '../assets/audios/pg103_audio2.mp3';
import pg103_audio3 from '../assets/audios/pg103_audio3.mp3';
import pg103_audio4 from '../assets/audios/pg103_audio4.mp3';
import pg103_audio5 from '../assets/audios/pg103_audio5.mp3';
import pg103_audio6 from '../assets/audios/pg103_audio6.mp3';

// Mapeamento dos áudios para facilitar a chamada
const audioMap = {
    global_learningLEe,
    global_learningLEp,
    pg103_audio1e,
    pg103_audio1p,
    pg103_audio2,
    pg103_audio3,
    pg103_audio4,
    pg103_audio5,
    pg103_audio6
};

const Pagina103 = () => {
    const [inputValues, setInputValues] = useState(Array(5).fill(''));
    const [results, setResults] = useState(Array(5).fill(null));

    const correctAnswers = [
        "No, I’m not.",
        "Yes, she is.",
        "Yes, we are.",
        "No, it’s not.",
        "No, they aren’t."
    ];

    const options = [
        ["No, I’m not.", "Yes, we are.", "Yes, she is."],
        ["Yes, she is.", "No, they aren’t.", "No, I’m not."],
        ["Yes, we are.", "No, it’s not.", "Yes, she is."],
        ["No, it’s not.", "Yes, we are.", "No, they aren’t."],
        ["No, they aren’t.", "No, I’m not.", "Yes, she is."]
    ];

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => value === correctAnswers[index]);
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
            audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };

    return (
        <div className={styles.pg103Container}>
            <header className={styles.pg103Header}>
                <h1 className={styles.pg103H1}>
                    Learning Language Exercises 
                    <img
                        src={eIcon}
                        alt="English audio"
                        className={styles.pg103HeaderIcon}
                        onClick={() => playAudio("global_learningLEe")}
                    />
                    <img
                        src={pIcon}
                        alt="Portuguese audio"
                        className={styles.pg103HeaderIcon}
                        onClick={() => playAudio("global_learningLEp")}
                    />
                </h1>
                <p>
                    Match the questions with the correct answers.
                    <img
                        src={eIcon}
                        alt="English audio"
                        className={styles.pg103HeaderIcon}
                        onClick={() => playAudio("pg103_audio1e")}
                    />
                    <img
                        src={pIcon}
                        alt="Portuguese audio"
                        className={styles.pg103HeaderIcon}
                        onClick={() => playAudio("pg103_audio1p")}
                    />
                </p>
            </header>

            <main className={styles.pg103Main}>
                <div className={styles.pg103ContainerQuestoes}>
                    <div className={styles.pg103Questions}>
                        <p className={styles.pg103TituloQuestion}>Questions:</p>

                        {[
                            "Are you a teacher?",
                            "Is she your neighbor?",
                            "Are we going to the park?",
                            "Is it raining outside?",
                            "Are they from Japan?"
                        ].map((question, index) => {
                            const audioKey = `pg103_audio${index + 2}`;

                            return (
                                <div key={index} className={styles.pg103Question}>
                                    <span><strong>{index + 1}.</strong> {question}</span>

                                    <select
                                        className={styles.pg103SelectBox}
                                        value={inputValues[index]}
                                        onChange={(e) => handleInputChange(e.target.value, index)}
                                    >
                                        <option value="">Select an answer</option>
                                        {options[index].map((option, optIndex) => (
                                            <option key={optIndex} value={option}>{option}</option>
                                        ))}
                                    </select>

                                    {results[index] !== null && (
                                        <img
                                            src={results[index] ? vSquare : xSquare}
                                            alt={results[index] ? "Correct" : "Incorrect"}
                                            className={styles.pg103CheckmarkImage}
                                        />
                                    )}

                                    <div className={styles.pg103IconsContainer}>
                                        <img
                                            src={eIcon}
                                            alt="Audio Icon"
                                            className={styles.pg103AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles.pg103ContainerImagem}>
                        <img className={styles.pg103imagem} src={pagina103_imagem1} alt="Learning" />
                    </div>
                </div>
            </main>

            <button className={styles.pg103CheckButton} onClick={handleCheckClick}><em>Check</em></button>
        </div>
    );
};

export default Pagina103;
