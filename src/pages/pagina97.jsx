import React, { useState } from 'react';
import styles from './Pagina97.module.css';
import pg97IconNotes from '../assets/Icons/Icon-Notes.png';
import Pagina97_imagem1 from '../assets/images/Pagina97_imagem1.webp';
import Pagina97_imagem2 from '../assets/images/Pagina97_imagem2.webp';
import vSquare from '../assets/icons/vSquare.png';
import xSquare from '../assets/icons/xSquare.png';
import eIcon from '../assets/icons/eIcon.png';
import pIcon from '../assets/icons/pIcon.png';
import volumeReduzidoIcon from '../assets/icons/volumeReduzido.png';
import global_learningLEe from '../assets/audios/global_learningLEe.mp3';
import global_learningLEp from '../assets/audios/global_learningLEp.mp3';

// Áudios das questões
import pg97_audio1e from '../assets/audios/pg97_audio1e.mp3';
import pg97_audio1p from '../assets/audios/pg97_audio1p.mp3';
import pg97_audio2 from '../assets/audios/pg97_audio2.mp3';
import pg97_audio3 from '../assets/audios/pg97_audio3.mp3';
import pg97_audio4 from '../assets/audios/pg97_audio4.mp3';
import pg97_audio5 from '../assets/audios/pg97_audio5.mp3';
import pg97_audio6 from '../assets/audios/pg97_audio6.mp3';
import pg97_audio7 from '../assets/audios/pg97_audio7.mp3';
import pg97_audio8 from '../assets/audios/pg97_audio8.mp3';
import pg97_audio9 from '../assets/audios/pg97_audio9.mp3';
import pg97_audio10 from '../assets/audios/pg97_audio10.mp3';
import pg97_audio11 from '../assets/audios/pg97_audio11.mp3';
import pg97_audio12 from '../assets/audios/pg97_audio12.mp3';
import pg97_audio13 from '../assets/audios/pg97_audio13.mp3';


const audioMap = {
    global_learningLEe,
    global_learningLEp,
    pg97_audio1e,
    pg97_audio1p,
    pg97_audio2,
    pg97_audio3,
    pg97_audio4,
    pg97_audio5,
    pg97_audio6,
    pg97_audio7,
    pg97_audio8,
    pg97_audio9,
    pg97_audio10,
    pg97_audio11,
    pg97_audio12,
    pg97_audio13,
};


const Pagina97 = () => {
    const [inputValues, setInputValues] = useState(
        Array(12).fill('').map((_, index) => (index >= 8 ? ['', ''] : ''))
    );

    const [results, setResults] = useState(Array(15).fill(null));

    const correctAnswers = [
        'works', 'sleeps', 'reads', 'watch', 'arrives',
        'boils', 'has', 'need',
        ['Does', 'like'],
        ['Do', 'study'],
        ['Does', 'work'],
        ['Do', 'play'],
        ['Does', 'drink'],
        ['Do', 'enjoy'],
    ];


    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => {
            if (Array.isArray(correctAnswers[index])) {

                return Array.isArray(value) && correctAnswers[index].every(
                    (answer, subIndex) =>
                        value[subIndex]?.trim().toLowerCase() === answer.toLowerCase()
                );
            }

            return value?.trim().toLowerCase() === correctAnswers[index].toLowerCase();
        });
        setResults(newResults.map((res) => res !== true ? false : true));
    };


    const handleInputChange = (value, index, subIndex = null) => {
        const newValues = [...inputValues];
        if (subIndex !== null) {
            if (!Array.isArray(newValues[index])) {
                newValues[index] = ['', ''];
            }
            newValues[index][subIndex] = value;
        } else {
            newValues[index] = value;
        }
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
        <div className={styles.pg97Container}>
            <header className={styles.pg97Header}>
                <h1 className={styles.pg97H1}>
                    Learning Language Exercises
                    <img
                        src={eIcon}
                        alt="English audio"
                        className={styles.pg97HeaderIcon}
                        onClick={() => playAudio("global_learningLEe")}
                    />
                    <img
                        src={pIcon}
                        alt="Portuguese audio"
                        className={styles.pg97HeaderIcon}
                        onClick={() => playAudio("global_learningLEp")}
                    />
                </h1>
            </header>

            <main className={styles.pg97Main}>
                <div className={styles.pg97tabelaAfirmativaContainer}>
                    <div className={styles.pg97tableHeaderAfirmativa}>AFIRMATIVA</div>
                    <table className={styles.pg97styledTableAfirmativa}>
                        <thead>
                            <tr className={styles.pg97celulatable}>
                                <th>Sujeito</th>
                                <th>Verbo Auxiliar</th>
                                <th>Adverb</th>
                                <th>Verbo(s)</th>
                                <th>Objeto Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className={styles.pg97PrimeirasQuestoes}>
                    <div className={styles.pg97ContainerQuestoes}>
                        <div className={styles.pg97Questions1}>
                            <p className={styles.pg97ATituloQuestion}>Complete the sentences with the correct form of the verbs in parentheses:
                            <img
                        src={eIcon}
                        alt="English audio"
                        className={styles.pg97HeaderIcon}
                        onClick={() => playAudio("pg97_audio1e")}
                    />
                    <img
                        src={pIcon}
                        alt="Portuguese audio"
                        className={styles.pg97HeaderIcon}
                        onClick={() => playAudio("pg97_audio1p")}
                    />
                            </p>
                            <p className={styles.pg97NumeroQuestion}>1.</p>
                            {["He ____  (work) at a restaurant as a waiter.",
                                "The cat ____ (sleep) on the sofa all afternoon.",
                                "She ____ (read) a novel every evening before bed.",
                                "We ____ (watch) our favorite TV show every Friday night.",
                                "The train ____ (arrive) at the station at 9:00 AM sharp"
                            ].map((question, index) => {
                                const parts = question.split('____');

                                let audioKey;
                                if (index === 0) {
                                    audioKey = 'pg97_audio2';
                                } else if (index === 1) {
                                    audioKey = 'pg97_audio3';
                                } else if (index === 2) {
                                    audioKey = 'pg97_audio4';
                                } else if (index === 3) {
                                    audioKey = 'pg97_audio5';
                                } else {
                                    audioKey = 'pg97_audio6';
                                }

                                return (
                                    <div key={index} className={styles.pg97Question}>
                                        <span>
                                            <em>
                                                <strong>{String.fromCharCode(97 + index)}.</strong> {parts[0]}
                                            </em>
                                        </span>
                                        <div className={styles.pg97InputContainer}>
                                            <input
                                                type="text"
                                                value={inputValues[index]}
                                                onChange={(e) => handleInputChange(e.target.value, index)}
                                                className={styles.pg97InputBox}
                                            />
                                        </div>
                                        <span><em>{parts[1]}</em></span>
                                        <div className={styles.pg97IconsContainer}>
                                            {results[index] !== null && (
                                                <img
                                                    src={results[index] ? vSquare : xSquare}
                                                    alt={results[index] ? "Correct" : "Incorrect"}
                                                    className={styles.pg97CheckmarkImage}
                                                />
                                            )}
                                            <img
                                                src={eIcon}
                                                alt="Audio English"
                                                className={styles.pg97AdditionalIcon}
                                                onClick={() => playAudio(audioKey)}
                                            />

                                        </div>
                                    </div>
                                );
                            })}
                        </div>



                        <div className={styles.pg97ContainerImagem}> <img className={styles.pg97imagem} src={Pagina97_imagem1} alt="" /></div>
                    </div>

                    <div className={styles.pg97ContainerQuestoes}>
                        <div className={styles.pg97Questions1}>
                            <p className={styles.pg97NumeroQuestion}>2.</p>
                            {["Water ____ (boil) at 100 degrees Celsius.",
                                "English ____ (have) many irregular verbs.",
                                "Plants ____ (need) sunlight to grow."
                            ].map((question, index) => {
                                const parts = question.split('____');
                                const audioKey = `pg97_audio${index + 7}`;

                                return (
                                    <div key={index} className={styles.pg97Question}>
                                        <span>
                                            <em>
                                                <strong>{String.fromCharCode(97 + index)}.</strong> {parts[0]}
                                            </em>
                                        </span>
                                        <div className={styles.pg97InputContainer}>
                                            <input
                                                type="text"
                                                value={inputValues[index + 5]}
                                                onChange={(e) => handleInputChange(e.target.value, index + 5)}
                                                className={styles.pg97InputBox}
                                            />
                                        </div>
                                        <span><em>{parts[1]}</em></span>
                                        <div className={styles.pg97IconsContainer}>
                                            {results[index + 5] !== null && (
                                                <img
                                                    src={results[index + 5] ? vSquare : xSquare}
                                                    alt={results[index + 5] ? "Correct" : "Incorrect"}
                                                    className={styles.pg97CheckmarkImage}
                                                />
                                            )}
                                            <img
                                                src={eIcon}
                                                alt="Audio Icon"
                                                className={styles.pg97AdditionalIcon}
                                                onClick={() => playAudio(audioKey)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className={styles.pg97ContainerImagem}> <img className={styles.pg97imagem} src={Pagina97_imagem2} alt="" /></div>
                    </div>
                </div>
                <div className={styles.pg97tabelaInterrogativaContainer}>
                    <div className={styles.pg97tableHeaderInterrogativa}>INTERROGATIVA</div>
                    <table className={styles.pg97styledTableInterrogativa}>
                        <thead>
                            <tr className={styles.pg97celulatable}>
                                <th>VerboAuxiliar</th>
                                <th>Sujeito</th>
                                <th>
                                    <span style={{ color: 'red' }}>Not</span> <br /> Adverb
                                </th>
                                <th>Verbo(s)</th>
                                <th>Objeto Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className={styles.pg97ContainerQuestoes}>
                    <div className={styles.pg97Questions2}>
                        <p className={styles.pg97NumeroQuestion}>3.</p>
                        {[
                            "____ she ____ (work) at the hospital?",
                            "____ they ____ (play) soccer on weekends?",
                            "____ he ____ (drink) coffee in the morning?",
                            "____ you ____ (enjoy) hiking in the mountains?"
                        ].map((question, index) => {
                            const parts = question.split('____');
                            const audioKey = `pg97_audio${index + 10}`; // Ajuste para o áudio correto

                            // Para lidar com questões que têm múltiplos campos
                            return (
                                <div key={index + 10} className={styles.pg97Question}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(97 + index)}.</strong>
                                        </em>
                                    </span>
                                    {parts.map((part, fieldIndex) => (
                                        <React.Fragment key={fieldIndex}>
                                            {fieldIndex === 0 && (
                                                <span className={styles.pg97spaminput}>
                                                    <input
                                                        type="text"
                                                        value={Array.isArray(inputValues[index + 10]) ? inputValues[index + 10][fieldIndex] || '' : ''}
                                                        onChange={(e) => handleInputChange(e.target.value, index + 10, fieldIndex)}
                                                        className={styles.pg97InputBox}
                                                    />
                                                </span>
                                            )}
                                            {fieldIndex > 0 && fieldIndex < parts.length - 1 && (
                                                <>
                                                    <span>{part}</span>
                                                    <span className={styles.pg97spaminput}>
                                                        <input
                                                            type="text"
                                                            value={Array.isArray(inputValues[index + 10]) ? inputValues[index + 10][fieldIndex] || '' : ''}
                                                            onChange={(e) => handleInputChange(e.target.value, index + 10, fieldIndex)}
                                                            className={styles.pg97InputBox}
                                                        />
                                                    </span>
                                                </>
                                            )}
                                            {fieldIndex === parts.length - 1 && <span>{part}</span>}
                                        </React.Fragment>
                                    ))}
                                    <div className={styles.pg97IconsContainer}>
                                        {results[index + 10] !== null && (
                                            <img
                                                src={results[index + 10] ? vSquare : xSquare}
                                                alt={results[index + 10] ? "Correct" : "Incorrect"}
                                                className={styles.pg97CheckmarkImage}
                                            />
                                        )}
                                        <img
                                            src={eIcon}
                                            alt="Audio Icon"
                                            className={styles.pg97AdditionalIcon}
                                            onClick={() => playAudio(audioKey)} // Lógica de áudio sem o volume reduzido
                                        />
                                    </div>
                                </div>
                            );
                        })}

                    </div>

                </div>

            </main>
            <button className={styles.pg97CheckButton} onClick={handleCheckClick}><em>Check</em></button>
        </div>
    );
};

export default Pagina97;
