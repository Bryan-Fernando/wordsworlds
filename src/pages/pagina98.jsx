import React, { useState } from 'react';
import styles from './Pagina98.module.css';
import pg98IconNotes from '../assets/Icons/Icon-Notes.png';
import pagina98_imagem1 from '../assets/images/pagina98_imagem1.webp';
import pagina98_imagem2 from '../assets/images/pagina98_imagem2.webp';
import vSquare from '../assets/icons/vSquare.png';
import xSquare from '../assets/icons/xSquare.png';
import eIcon from '../assets/icons/eIcon.png';
import pIcon from '../assets/icons/pIcon.png';
import volumeReduzidoIcon from '../assets/icons/volumeReduzido.png';

// Áudios globais
import global_learningLEe from '../assets/audios/global_learningLEe.mp3';
import global_learningLEp from '../assets/audios/global_learningLEp.mp3';

// Áudios das questões
import pg98_audio1e from '../assets/audios/pg98_audio1e.mp3';
import pg98_audio1p from '../assets/audios/pg98_audio1p.mp3';
import pg98_audio2 from '../assets/audios/pg98_audio2.mp3';
import pg98_audio3 from '../assets/audios/pg98_audio3.mp3';
import pg98_audio4 from '../assets/audios/pg98_audio4.mp3';
import pg98_audio5 from '../assets/audios/pg98_audio5.mp3';
import pg98_audio6 from '../assets/audios/pg98_audio6.mp3';
import pg98_audio7e from '../assets/audios/pg98_audio7e.mp3';
import pg98_audio7p from '../assets/audios/pg98_audio7p.mp3';
import pg98_audio8 from '../assets/audios/pg98_audio8.mp3';
import pg98_audio9 from '../assets/audios/pg98_audio9.mp3';
import pg98_audio10 from '../assets/audios/pg98_audio10.mp3';
import pg98_audio11 from '../assets/audios/pg98_audio11.mp3';
import pg98_audio12 from '../assets/audios/pg98_audio12.mp3';
import pg98_audio13 from '../assets/audios/pg98_audio13.mp3';
import pg98_audio14 from '../assets/audios/pg98_audio14.mp3';
import pg98_audio15 from '../assets/audios/pg98_audio15.mp3';
import pg98_audio16 from '../assets/audios/pg98_audio16.mp3';
import pg98_audio17 from '../assets/audios/pg98_audio17.mp3';



const audioMap = {
    global_learningLEe,
    global_learningLEp,
    pg98_audio1e,
    pg98_audio1p,
    pg98_audio2,
    pg98_audio3,
    pg98_audio4,
    pg98_audio5,
    pg98_audio6,
    pg98_audio7e,
    pg98_audio7p,
    pg98_audio8,
    pg98_audio9,
    pg98_audio10,
    pg98_audio11,
    pg98_audio12,
    pg98_audio13,
    pg98_audio14,
    pg98_audio15,
    pg98_audio16,
    pg98_audio17,
};

const Pagina98 = () => {
    const [inputValues, setInputValues] = useState(Array(15).fill(''));
    const [results, setResults] = useState(Array(15).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});


    const correctAnswers = [
        'reads', 'play', 'drinks', 'rises', 'study', // Bloco 1
        'wake up', 'walks', 'practices', 'arrives', 'go', // Bloco 2
        ['Does', 'like'], // Bloco 3, linha 1
        ['Do', 'study'],  // Bloco 3, linha 2
        ['Does', 'work'], // Bloco 3, linha 3
        ['Do', 'play'],   // Bloco 3, linha 4
        ['Do', 'speak'],  // Bloco 3, linha 5
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
        <div className={styles.pg98Container}>
            <header className={styles.pg98Header}>
                <h1 className={styles.pg98H1}>
                    Learning Language Exercises
                    <img
                        src={eIcon}
                        alt="English audio"
                        className={styles.pg98HeaderIcon}
                        onClick={() => playAudio("global_learningLEe")}
                    />
                    <img
                        src={pIcon}
                        alt="Portuguese audio"
                        className={styles.pg98HeaderIcon}
                        onClick={() => playAudio("global_learningLEp")}
                    />
                </h1>

            </header>
            <main className={styles.pg98Main}>
                <div className={styles.pg98tabelaAfirmativaContainer}>
                    <div className={styles.pg98tableHeaderAfirmativa}>AFIRMATIVA</div>
                    <table className={styles.pg98styledTableAfirmativa}>
                        <thead>
                            <tr className={styles.pg98celulatable}>
                                <th>Sujeito</th>
                                <th>Verbo Auxiliar</th>
                                <th>Adverb</th>
                                <th>Verbo(s)</th>
                                <th>Objeto Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className={styles.pg98PrimeirasQuestoes}>
                    <div className={styles.pg98ContainerQuestoes}>
                        <div className={styles.pg98Questions1}>
                            <p className={styles.pg98ATituloQuestion}>Fill in the blanks with the correct form of the verb in the simple present tense:
                                <img
                                    src={eIcon}
                                    alt="English audio"
                                    className={styles.pg98HeaderIcon}
                                    onClick={() => playAudio("pg98_audio1e")}
                                />
                                <img
                                    src={pIcon}
                                    alt="Portuguese audio"
                                    className={styles.pg98HeaderIcon}
                                    onClick={() => playAudio("pg98_audio1p")}
                                />
                            </p>
                            <p className={styles.pg98NumeroQuestion}>1.</p>
                            {["She ____ a book every night before bed.",
                                "They ____ basketball every Saturday morning.",
                                "He ____ a glass of water after every meal.",
                                "The sun ____ in the east.",
                                "We ____ English at school."
                            ].map((question, index) => {
                                const parts = question.split('____');
                                const audioKey = `pg98_audio${index + 2}`; // Define corretamente os áudios

                                return (
                                    <div key={index} className={styles.pg98Question}>
                                        <span>
                                            <em>
                                                <strong>{String.fromCharCode(97 + index)}.</strong> {parts[0]}
                                            </em>
                                        </span>
                                        <div className={styles.pg98InputContainer}>
                                            <input
                                                type="text"
                                                value={inputValues[index]}
                                                onChange={(e) => handleInputChange(e.target.value, index)}
                                                className={styles.pg98InputBox}
                                            />
                                        </div>
                                        <span><em>{parts[1]}</em></span>
                                        <div className={styles.pg98IconsContainer}>
                                            {results[index] !== null && (
                                                <img
                                                    src={results[index] ? vSquare : xSquare}
                                                    alt={results[index] ? "Correct" : "Incorrect"}
                                                    className={styles.pg98CheckmarkImage}
                                                />
                                            )}
                                            <img
                                                src={eIcon}
                                                alt="Audio Icon"
                                                className={styles.pg98AdditionalIcon}
                                                onClick={() => playAudio(audioKey)}
                                            />
                                            <img
                                                src={volumeReduzidoIcon}
                                                alt="Volume Reduced Icon"
                                                className={`${styles.pg98AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg98Pulsing : ''}`}
                                                onClick={() => toggleSpeedReduction(audioKey)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                        <div className={styles.pg98ContainerImagem}> <img className={styles.pg98imagem} src={pagina98_imagem1} alt="" /></div>
                    </div>
                    <div className={styles.pg98ContainerQuestoes}>
                        <div className={styles.pg98Questions1}>
                            <p className={styles.pg98ATituloQuestion}>Complete the sentences with the correct form of the verbs in parentheses:
                                <img
                                    src={eIcon}
                                    alt="English audio"
                                    className={styles.pg98HeaderIcon}
                                    onClick={() => playAudio("pg98_audio7e")}
                                />
                                <img
                                    src={pIcon}
                                    alt="Portuguese audio"
                                    className={styles.pg98HeaderIcon}
                                    onClick={() => playAudio("pg98_audio7p")}
                                />

                            </p>
                            <p className={styles.pg98NumeroQuestion}>2.</p>
                            {[
                                "Every morning, I ____ (wake up) at 6:00 AM.",
                                "My father ____ (walk) the dog after dinner.",
                                "Sarah ____ (practice) piano for an hour every day.",
                                "The bus ____ (arrive) at the station at 7:30 AM.",
                                "They ____ (go) to the gym three times a week."
                            ].map((question, index) => {
                                const parts = question.split('____');
                                const audioKey = `pg98_audio${index + 8}`; // Começa no pg98_audio8

                                return (
                                    <div key={index} className={styles.pg98Question}>
                                        <span>
                                            <em>
                                                <strong>{String.fromCharCode(97 + index)}.</strong> {parts[0]}
                                            </em>
                                        </span>
                                        <div className={styles.pg98InputContainer}>
                                            <input
                                                type="text"
                                                value={inputValues[index + 5]}
                                                onChange={(e) => handleInputChange(e.target.value, index + 5)}
                                                className={styles.pg98InputBox}
                                            />
                                        </div>
                                        <span><em>{parts[1]}</em></span>
                                        <div className={styles.pg98IconsContainer}>
                                            {results[index + 5] !== null && (
                                                <img
                                                    src={results[index + 5] ? vSquare : xSquare}
                                                    alt={results[index + 5] ? "Correct" : "Incorrect"}
                                                    className={styles.pg98CheckmarkImage}
                                                />
                                            )}
                                            <img
                                                src={eIcon}
                                                alt="Audio Icon"
                                                className={styles.pg98AdditionalIcon}
                                                onClick={() => playAudio(audioKey)}
                                            />
                                            <img
                                                src={volumeReduzidoIcon}
                                                alt="Volume Reduced Icon"
                                                className={`${styles.pg98AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg98Pulsing : ''}`}
                                                onClick={() => toggleSpeedReduction(audioKey)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.pg98ContainerImagem}> <img className={styles.pg98imagem} src={pagina98_imagem2} alt="" /></div>
                    </div>
                </div>
                <div className={styles.pg98tabelaInterrogativaContainer}>
                    <div className={styles.pg98tableHeaderInterrogativa}>INTERROGATIVA</div>
                    <table className={styles.pg98styledTableInterrogativa}>
                        <thead>
                            <tr className={styles.pg98celulatable}>
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
                <div className={styles.pg98ContainerQuestoes}>
                    <div className={styles.pg98Questions2}>
                        <p className={styles.pg98NumeroQuestion}>3.</p>
                        {[
                            "____ she ____ (like) coffee?",
                            "____ they ____ (study) French at school?",
                            "____ he ____ (work) on Saturdays?",
                            "____ the children ____ (play) every afternoon?",
                            "____ you ____ (speak) Spanish fluently?"
                        ].map((question, index) => {
                            const parts = question.split('____');
                            const audioKey = `pg98_audio${index + 13}`; // Começa no pg98_audio13

                            return (
                                <div key={index + 10} className={styles.pg98Question}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(97 + index)}.</strong>
                                        </em>
                                    </span>
                                    {parts.map((part, fieldIndex) => (
                                        <React.Fragment key={fieldIndex}>
                                            {fieldIndex === 0 && (
                                                <span className={styles.pg98spaminput}>
                                                    <input
                                                        type="text"
                                                        value={Array.isArray(inputValues[index + 10]) ? inputValues[index + 10][fieldIndex] || '' : ''}
                                                        onChange={(e) => handleInputChange(e.target.value, index + 10, fieldIndex)}
                                                        className={styles.pg98InputBox}
                                                    />
                                                </span>
                                            )}
                                            {fieldIndex > 0 && fieldIndex < parts.length - 1 && (
                                                <>
                                                    <span>{part}</span>
                                                    <span className={styles.pg98spaminput}>
                                                        <input
                                                            type="text"
                                                            value={Array.isArray(inputValues[index + 10]) ? inputValues[index + 10][fieldIndex] || '' : ''}
                                                            onChange={(e) => handleInputChange(e.target.value, index + 10, fieldIndex)}
                                                            className={styles.pg98InputBox}
                                                        />
                                                    </span>
                                                </>
                                            )}
                                            {fieldIndex === parts.length - 1 && <span>{part}</span>}
                                        </React.Fragment>
                                    ))}
                                    <div className={styles.pg98IconsContainer}>
                                        {results[index + 10] !== null && (
                                            <img
                                                src={results[index + 10] ? vSquare : xSquare}
                                                alt={results[index + 10] ? "Correct" : "Incorrect"}
                                                className={styles.pg98CheckmarkImage}
                                            />
                                        )}
                                        <img
                                            src={eIcon}
                                            alt="Audio Icon"
                                            className={styles.pg98AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </main>
            <button className={styles.pg98CheckButton} onClick={handleCheckClick}><em>Check</em></button>
        </div>
    );
};

export default Pagina98;
