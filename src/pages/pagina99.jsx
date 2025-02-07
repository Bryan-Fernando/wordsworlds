import React, { useState } from 'react';
import styles from './pagina99.module.css';
import pagina99_imagem1 from '../assets/images/pagina99_imagem1.webp';
import vSquare from '../assets/icons/vSquare.png';
import xSquare from '../assets/icons/xSquare.png';
import eIcon from '../assets/icons/eIcon.png';
import pIcon from '../assets/icons/pIcon.png';
import volumeReduzidoIcon from '../assets/icons/volumeReduzido.png';

// Áudios Globais
import global_learningLEe from '../assets/audios/global_learningLEe.mp3';
import global_learningLEp from '../assets/audios/global_learningLEp.mp3';

// Áudios Específicos da Página 99
import pg99_audio1e from '../assets/audios/pg99_audio1e.mp3';
import pg99_audio1p from '../assets/audios/pg99_audio1p.mp3';
import pg99_audio2 from '../assets/audios/pg99_audio2.mp3';
import pg99_audio3 from '../assets/audios/pg99_audio3.mp3';
import pg99_audio4 from '../assets/audios/pg99_audio4.mp3';
import pg99_audio5 from '../assets/audios/pg99_audio5.mp3';
import pg99_audio6 from '../assets/audios/pg99_audio6.mp3';
import pg99_audio7e from '../assets/audios/pg99_audio7e.mp3';
import pg99_audio7p from '../assets/audios/pg99_audio7p.mp3';
import pg99_audio8 from '../assets/audios/pg99_audio8.mp3';
import pg99_audio9 from '../assets/audios/pg99_audio9.mp3';
import pg99_audio10 from '../assets/audios/pg99_audio10.mp3';
import pg99_audio11 from '../assets/audios/pg99_audio11.mp3';
import pg99_audio12 from '../assets/audios/pg99_audio12.mp3';
import pg99_audio13e from '../assets/audios/pg99_audio13e.mp3';
import pg99_audio13p from '../assets/audios/pg99_audio13p.mp3';
import pg99_audio14 from '../assets/audios/pg99_audio14.mp3';
import pg99_audio15 from '../assets/audios/pg99_audio15.mp3';
import pg99_audio16 from '../assets/audios/pg99_audio16.mp3';
import pg99_audio17 from '../assets/audios/pg99_audio17.mp3';


const audioMap = {
    global_learningLEe,
    global_learningLEp,
    pg99_audio1e,
    pg99_audio1p,
    pg99_audio2,
    pg99_audio3,
    pg99_audio4,
    pg99_audio5,
    pg99_audio6,
    pg99_audio7e,
    pg99_audio7p,
    pg99_audio8,
    pg99_audio9,
    pg99_audio10,
    pg99_audio11,
    pg99_audio12,
    pg99_audio13e,
    pg99_audio13p,
    pg99_audio14,
    pg99_audio15,
    pg99_audio16,
    pg99_audio17,
};


const Pagina99 = () => {
    const [inputValues, setInputValues] = useState(
        Array(14).fill('').map((_, index) => (index >= 10 ? ['', ''] : ''))
    );
    const [results, setResults] = useState(Array(14).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});




    const correctAnswers = [
        "she doesn't like to swim in the pool.",
        "they don't eat lunch together.",
        "he doesn't watch every day",
        "the children don't play in the park after school.",
        "i don't drink coffee in the morning.",
        "doesn't like",
        "don't study",
        "doesn't play",
        "doesn't sleep",
        "don't watch",
        ["doesn't", "like"],
        ["don't", "play"],
        ["doesn't", "drink"],
        ["don't", "enjoy"]
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
        setResults(newResults.map((res) => (res !== true ? false : true)));
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
            [audioKey]: !prevState[audioKey],
        }));
    };

    return (
        <div className={styles.pg99Container}>
            <header className={styles.pg99Header}>
                <h1 className={styles.pg99H1}>
                    Learning Language Exercises
                    <img
                        src={eIcon}
                        alt="English audio"
                        className={styles.pg99HeaderIcon}
                        onClick={() => playAudio("global_learningLEe")}
                    />
                    <img
                        src={pIcon}
                        alt="Portuguese audio"
                        className={styles.pg99HeaderIcon}
                        onClick={() => playAudio("global_learningLEp")}
                    />
                </h1>

                <p className={styles.pg99ATituloQuestion}>
                    Change into the negative form:
                    <img
                        src={eIcon}
                        alt="English audio"
                        className={styles.pg99HeaderIcon}
                        onClick={() => playAudio("pg99_audio1e")}
                    />
                    <img
                        src={pIcon}
                        alt="Portuguese audio"
                        className={styles.pg99HeaderIcon}
                        onClick={() => playAudio("pg99_audio1p")}
                    />
                </p>

            </header>
            <main className={styles.pg99Main}>
                <div className={styles.pg99tabelaNegativaContainer}>
                    <div className={styles.pg99tableHeaderNegativa}>NEGATIVA</div>
                    <table className={styles.pg99styledTableNegativa}>
                        <thead>
                            <tr className={styles.pg99celulatable}>
                                <th>Sujeito</th>
                                <th>Verbo Auxiliar</th>
                                <th>
                                    <span style={{ color: 'red' }}>Not</span> <br /> Adverb
                                </th>
                                <th>Verbo(s)</th>
                                <th>Objeto Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className={styles.pg99ContainerImagem}> <img className={styles.pg99imagem} src={pagina99_imagem1} alt="" /></div>
                <div className={styles.pg99PrimeirasQuestoes}>
                    <div className={styles.pg99ContainerQuestoes}>
                        <div className={styles.pg99Questions1}>
                            {[
                                "She likes to swim in the pool. ____",
                                "They eat lunch together every day. ____",
                                "He watches television in the evening. ____",
                                "The children play in the park after school. ____",
                                "I drink coffee in the morning. ____"
                            ].map((question, index) => {
                                const audioKey = `pg99_audio${index + 2}`; // Ajuste correto do áudio

                                return (
                                    <div key={index} className={styles.pg99Question}>
                                        <span>
                                            <em>
                                                <strong>{String.fromCharCode(97 + index)}.</strong> {question.split('____')[0]}
                                            </em>
                                        </span>
                                        <div className={styles.pg99InputContainer}>
                                            <input
                                                type="text"
                                                value={inputValues[index]}
                                                onChange={(e) => handleInputChange(e.target.value, index)}
                                                className={styles.pg99LargeInputBox}
                                            />
                                        </div>
                                        <div className={styles.pg99IconsContainer}>
                                            {results[index] !== null && (
                                                <img
                                                    src={results[index] ? vSquare : xSquare}
                                                    alt={results[index] ? "Correct" : "Incorrect"}
                                                    className={styles.pg99CheckmarkImage}
                                                />
                                            )}
                                            <img
                                                src={eIcon}
                                                alt="Audio Icon"
                                                className={styles.pg99AdditionalIcon}
                                                onClick={() => playAudio(audioKey)}
                                            />
                                            <img
                                                src={volumeReduzidoIcon}
                                                alt="Volume Reduced Icon"
                                                className={`${styles.pg99AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg99Pulsing : ''}`}
                                                onClick={() => toggleSpeedReduction(audioKey)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                    <div className={styles.pg99ContainerQuestoes}>
                        <div className={styles.pg99Questions1}>
                            <p className={styles.pg99ATituloQuestion}>
                                Fill in the blanks with the negative form of the verbs:
                                <img
                                    src={eIcon}
                                    alt="English audio"
                                    className={styles.pg99HeaderIcon}
                                    onClick={() => playAudio("pg99_audio7e")}
                                />
                                <img
                                    src={pIcon}
                                    alt="Portuguese audio"
                                    className={styles.pg99HeaderIcon}
                                    onClick={() => playAudio("pg99_audio7p")}
                                />
                            </p>

                            {[
                                "She ____ (not like) to eat spicy food.",
                                "They ____ (not study) French at school.",
                                "He ____ (not play) video games on weekdays.",
                                "The cat ____ (not sleep) on the bed.",
                                "We ____ (not watch) TV after dinner."
                            ].map((question, index) => {
                                const audioKey = `pg99_audio${index + 8}`;
                                const parts = question.split('____'); 

                                return (
                                    <div key={index + 5} className={styles.pg99Question}>
                                        <span>
                                            <em>
                                                <strong>{String.fromCharCode(97 + index)}.</strong> {parts[0]}
                                            </em>
                                        </span>
                                        <div className={styles.pg99InputContainer}>
                                            <input
                                                type="text"
                                                value={inputValues[index + 5]}
                                                onChange={(e) => handleInputChange(e.target.value, index + 5)}
                                                className={styles.pg99InputBox}
                                            />
                                        </div>
                                        
                                        {parts.length > 1 && <span><em>{parts[1]}</em></span>}

                                        <div className={styles.pg99IconsContainer}>
                                            {results[index + 5] !== null && (
                                                <img
                                                    src={results[index + 5] ? vSquare : xSquare}
                                                    alt={results[index + 5] ? "Correct" : "Incorrect"}
                                                    className={styles.pg99CheckmarkImage}
                                                />
                                            )}
                                            <img
                                                src={eIcon}
                                                alt="Audio Icon"
                                                className={styles.pg99AdditionalIcon}
                                                onClick={() => playAudio(audioKey)}
                                            />
                                            <img
                                                src={volumeReduzidoIcon}
                                                alt="Volume Reduced Icon"
                                                className={`${styles.pg99AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg99Pulsing : ''}`}
                                                onClick={() => toggleSpeedReduction(audioKey)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}


                        </div>
                    </div>
                    <div className={styles.pg99ContainerQuestoes}>
                        <div className={styles.pg99Questions2}>
                            <p className={styles.pg99ATituloQuestion}>
                                Form negative questions using the simple present tense and give short answers:
                                <img
                                    src={eIcon}
                                    alt="English audio"
                                    className={styles.pg99HeaderIcon}
                                    onClick={() => playAudio("pg99_audio13e")}
                                />
                                <img
                                    src={pIcon}
                                    alt="Portuguese audio"
                                    className={styles.pg99HeaderIcon}
                                    onClick={() => playAudio("pg99_audio13p")}
                                />
                            </p>

                            {[
                                "____ she ____ (not like) ice cream?",
                                "____ they ____ (not play) soccer on weekends?",
                                "____ he ____ (not drink) coffee in the morning?",
                                "____ you ____ (not enjoy) watching movies?"
                            ].map((question, index) => {
                                const parts = question.split('____');
                                const audioKey = `pg99_audio${index + 14}`;

                                return (
                                    <div key={index + 10} className={styles.pg99Question}>
                                        <span>
                                            <em>
                                                <strong>{String.fromCharCode(97 + index)}.</strong>
                                            </em>
                                        </span>
                                        {parts.map((part, fieldIndex) => (
                                            <React.Fragment key={fieldIndex}>
                                                {fieldIndex === 0 && (
                                                    <span className={styles.pg99spaminput}>
                                                        <input
                                                            type="text"
                                                            value={Array.isArray(inputValues[index + 10]) ? inputValues[index + 10][fieldIndex] || '' : ''}
                                                            onChange={(e) => handleInputChange(e.target.value, index + 10, fieldIndex)}
                                                            className={styles.pg99InputBox}
                                                        />
                                                    </span>
                                                )}
                                                {fieldIndex > 0 && fieldIndex < parts.length - 1 && (
                                                    <>
                                                        <span>{part}</span>
                                                        <span className={styles.pg99spaminput}>
                                                            <input
                                                                type="text"
                                                                value={Array.isArray(inputValues[index + 10]) ? inputValues[index + 10][fieldIndex] || '' : ''}
                                                                onChange={(e) => handleInputChange(e.target.value, index + 10, fieldIndex)}
                                                                className={styles.pg99InputBox}
                                                            />
                                                        </span>
                                                    </>
                                                )}
                                                {fieldIndex === parts.length - 1 && <span>{part}</span>}
                                            </React.Fragment>
                                        ))}
                                        <div className={styles.pg99IconsContainer}>
                                            {results[index + 10] !== null && (
                                                <img
                                                    src={results[index + 10] ? vSquare : xSquare}
                                                    alt={results[index + 10] ? "Correct" : "Incorrect"}
                                                    className={styles.pg99CheckmarkImage}
                                                />
                                            )}
                                            <img
                                                src={eIcon}
                                                alt="Audio Icon"
                                                className={styles.pg99AdditionalIcon}
                                                onClick={() => playAudio(audioKey)}
                                            />
                                            <img
                                                src={volumeReduzidoIcon}
                                                alt="Volume Reduced Icon"
                                                className={`${styles.pg99AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg99Pulsing : ''}`}
                                                onClick={() => toggleSpeedReduction(audioKey)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </main>
            <button className={styles.pg99CheckButton} onClick={handleCheckClick}><em>Check</em></button>
        </div>
    );
};

export default Pagina99;
