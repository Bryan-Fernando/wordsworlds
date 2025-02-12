import React, { useState } from 'react';

import styles from './pagina102.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';

import pagina102_imagem1 from '../assets/images/pagina102_imagem1.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg102_audio1e from '../assets/audios/pg102_audio1e.mp3';
import pg102_audio1p from '../assets/audios/pg102_audio1p.mp3';
import pg102_audio2 from '../assets/audios/pg102_audio2.mp3';
import pg102_audio3 from '../assets/audios/pg102_audio3.mp3';
import pg102_audio4 from '../assets/audios/pg102_audio4.mp3';
import pg102_audio5 from '../assets/audios/pg102_audio5.mp3';
import pg102_audio6 from '../assets/audios/pg102_audio6.mp3';
import pg102_audio7 from '../assets/audios/pg102_audio7.mp3';
import pg102_audio8 from '../assets/audios/pg102_audio8.mp3';
import pg102_audio9 from '../assets/audios/pg102_audio9.mp3';
import pg102_audio10 from '../assets/audios/pg102_audio10.mp3';
import pg102_audio11 from '../assets/audios/pg102_audio11.mp3';
import pg102_audio12 from '../assets/audios/pg102_audio12.mp3';
import pg102_audio13 from '../assets/audios/pg102_audio13.mp3';
import pg102_audio14 from '../assets/audios/pg102_audio14.mp3';
import pg102_audio15 from '../assets/audios/pg102_audio15.mp3';
import pg102_audio16 from '../assets/audios/pg102_audio16.mp3';
import pg102_audio17 from '../assets/audios/pg102_audio17.mp3';
import pg102_audio18 from '../assets/audios/pg102_audio18.mp3';
import pg102_audio19 from '../assets/audios/pg102_audio19.mp3';
import pg102_audio20 from '../assets/audios/pg102_audio20.mp3';
import pg102_audio21 from '../assets/audios/pg102_audio21.mp3';
import pg102_audio22 from '../assets/audios/pg102_audio22.mp3';
import pg102_audio23 from '../assets/audios/pg102_audio23.mp3';
import pg102_audio24 from '../assets/audios/pg102_audio24.mp3';
import pg102_audio25 from '../assets/audios/pg102_audio25.mp3';

const audioMap = {
    global_learning_le_e,
    global_learning_le_p,
    pg102_audio1e,
    pg102_audio1p,
    pg102_audio2,
    pg102_audio3,
    pg102_audio4,
    pg102_audio5,
    pg102_audio6,
    pg102_audio7,
    pg102_audio8,
    pg102_audio9,
    pg102_audio10,
    pg102_audio11,
    pg102_audio12,
    pg102_audio13,
    pg102_audio14,
    pg102_audio15,
    pg102_audio16,
    pg102_audio17,
    pg102_audio18,
    pg102_audio19,
    pg102_audio20,
    pg102_audio21,
    pg102_audio22,
    pg102_audio23,
    pg102_audio24,
    pg102_audio25,
};

const Pagina102 = () => {
    const [inputValues, setInputValues] = useState(Array(30).fill(''));
    const [results, setResults] = useState(Array(30).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});

    const correctAnswers = [
        'am', 'is', 'are', 'are', 'is',  // Affirmative
        'am not', 'is not', 'are not', 'are not', 'is not',  // Negative
        'are', 'is', 'are', 'are',  // Interrogative
        'is', 'is', 'are not', 'are', 'is',  // Mixed
        'are not', 'are', 'am', 'is', 'are'  // Mixed (continuação)
    ];

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => {
            if (!value.trim()) return false; // Se o campo estiver vazio, marca como incorreto

            const trimmedValue = value.trim().toLowerCase();
            const correctValue = correctAnswers[index]?.toLowerCase() || "";

            return trimmedValue === correctValue;
        });

        setResults(newResults);
    };





    const handleInputChange = (value, index) => {
        setInputValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = value;
            return newValues;
        });
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
        <div className={styles.pg102Container}>
            <main className={styles.pg102Main}>
                <header className={styles.pg102Header}>
                    <h1 className={styles.pg102H1}>Learning Language Exercises <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles.pg102HeaderIcon}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese audio"
                            className={styles.pg102HeaderIcon}
                            onClick={() => playAudio("global_learning_le_p")}
                        /></h1>
                    <p>Fill in the blanks with the correct form of “be“ in the Present Simple Tense. <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles.pg102HeaderIcon}
                        onClick={() => playAudio("pg102_audio1e")}
                    />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese audio"
                            className={styles.pg102HeaderIcon}
                            onClick={() => playAudio("pg102_audio1p")}
                        /></p>
                </header>

                {/* Affirmative */}
                <div className={styles.pg102ContainerQuestoes}>
                    <div className={styles.pg102Questions1}>
                        <h2 className={styles.pg102H2}>Affirmative:</h2>
                        {[
        "I ____ a student.",
        "She ____ my sister.",
        "We ____ friends.",
        "They ____ at home.",
        "It ____ a beautiful day."
    ].map((sentence, index) => {
        const audioKey = `pg102_audio${index + 2}`;
        return (
            <div key={index} className={styles.pg102Question}>
                <span>{sentence.split('____')[0]}</span>
                <input
                    type="text"
                    value={inputValues[index] || ""}
                    onChange={(e) => handleInputChange(e.target.value, index)}
                    className={styles.pg102InputBox}
                />
                <span>{sentence.split('____')[1]}</span>
                
                {results[index] !== null && (
                    <img
                        src={results[index] ? correct_icon : wrong_icon}
                        alt={results[index] ? "Correct" : "Incorrect"}
                        className={styles.pg102CheckmarkImage}
                    />
                )}

                <div className={styles.pg102IconsContainer}>
                    <img src={eng_audio_icon} alt="Audio Icon" className={styles.pg102AdditionalIcon} onClick={() => playAudio(audioKey)} />
                    <img src={slow_audio_icon} alt="Volume Reduced Icon" className={`${styles.pg102AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg102Pulsing : ''}`} onClick={() => toggleSpeedReduction(audioKey)} />
                </div>
            </div>
        );
    })}
                    </div>

                    <div className={styles.pg102tabelaAfirmativaContainer}>
                        <div className={styles.pg102tableHeaderAfirmativa}>AFIRMATIVA</div>
                        <table className={styles.pg102styledTableAfirmativa}>
                            <thead>
                                <tr className={styles.pg102celulatable}>
                                    <th>Sujeito</th>
                                    <th>Verbo Auxiliar</th>
                                    <th>Adverb</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto Complemento</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>

                {/* Negative */}
                <div className={styles.pg102ContainerQuestoes}>
                    <div className={styles.pg102Questions2}>
                        <h2 className={styles.pg102H2}>Negative:</h2>
                        {[
                            "I ____ a teacher.",
                            "She ____ my mother.",
                            "We ____ late.",
                            "They ____ happy.",
                            "It ____ cold today."
                        ].map((sentence, index) => {
                            const realIndex = index + 5;
                            const audioKey = `pg102_audio${realIndex + 2}`;

                            return (
                                <div key={realIndex} className={styles.pg102Question}>
                                    <span>{sentence.split('____')[0]}</span>
                                    <input
                                        type="text"
                                        value={inputValues[realIndex] || ""}
                                        onChange={(e) => handleInputChange(e.target.value, realIndex)}
                                        className={styles.pg102InputBox}
                                    />
                                    <span>{sentence.split('____')[1]}</span>

                                    {results[realIndex] !== null && (
                                        <img
                                            src={results[realIndex] ? correct_icon : wrong_icon}
                                            alt={results[realIndex] ? "Correct" : "Incorrect"}
                                            className={styles.pg102CheckmarkImage}
                                        />
                                    )}

                                    <div className={styles.pg102IconsContainer}>
                                        <img src={eng_audio_icon} alt="Audio Icon" className={styles.pg102AdditionalIcon} onClick={() => playAudio(audioKey)} />
                                        <img src={slow_audio_icon} alt="Volume Reduced Icon" className={`${styles.pg102AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg102Pulsing : ''}`} onClick={() => toggleSpeedReduction(audioKey)} />
                                    </div>
                                </div>
                            );
                        })}


                    </div>
                    <div className={styles.pg102tabelaNegativaContainer}>
                        <div className={styles.pg102tableHeaderNegativa}>NEGATIVA</div>
                        <table className={styles.pg102styledTableNegativa}>
                            <thead>
                                <tr className={styles.pg102celulatable}>
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
                </div>

                {/* Interrogative */}
                <div className={styles.pg102ContainerQuestoes}>
                    <div className={styles.pg102Questions3}>
                        <h2 className={styles.pg102H2}>Interrogative:</h2>
                        {[
                            "you a doctor?",
                            "she your friend?",
                            "we late?",
                            "they at the park?"
                        ].map((sentence, index) => {
                            const realIndex = index + 14; // Agora os índices são contínuos
                            const audioKey = `pg102_audio${realIndex - 2}`; // Ajustando a sequência de áudios

                            return (
                                <div key={realIndex} className={styles.pg102Question}>
                                    <input
                                        type="text"
                                        value={inputValues[realIndex] || ""}
                                        onChange={(e) => handleInputChange(e.target.value, realIndex)}
                                        className={styles.pg102InputBox}
                                    />
                                    <span>{sentence}</span>

                                    {/* Se `results[realIndex]` for false ou campo estiver vazio, mostra X vermelho */}
                                    {results[realIndex] !== undefined && (
                                        <img
                                            src={results[realIndex] ? correct_icon : wrong_icon}
                                            alt={results[realIndex] ? "Correct" : "Incorrect"}
                                            className={styles.pg102CheckmarkImage}
                                        />
                                    )}

                                    <div className={styles.pg102IconsContainer}>
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles.pg102AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={slow_audio_icon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles.pg102AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg102Pulsing : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}


                    </div>
                    <div className={styles.pg102tabelaInterrogativaContainer}>
                        <div className={styles.pg102tableHeaderInterrogativa}>INTERROGATIVA</div>
                        <table className={styles.pg102styledTableInterrogativa}>
                            <thead>
                                <tr className={styles.pg102celulatable}>
                                    <th>verbo_auxiliar</th>
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
                </div>

                {/* Mixed */}
                <div className={styles.pg102ContainerQuestoes}>
                    <div className={styles.pg102Questions4}>
                        <h2 className={styles.pg102H2}>Mixed:</h2>
                        {[
        "It ____ a cat. (affirmative)",
        "____ he your brother? (interrogative)",
        "They ____ here. (negative)",
        "____ we ready? (interrogative)",
        "She ____ a good singer. (affirmative)",
        "You ____ my teacher. (negative)",
        "____ they from France? (interrogative)",
        "I ____ at home. (affirmative)",
        "It ____ a big problem. (affirmative)",
        "____ you my friend? (interrogative)"
    ].map((sentence, index) => {
        const realIndex = index + 14; // Corrigindo para bater com correctAnswers
        const audioKey = `pg102_audio${realIndex + 2}`; // Mantendo a sequência de áudios correta

        return (
            <div key={realIndex} className={styles.pg102Question}>
                <span>{sentence.split('____')[0]}</span>

                <input
                    type="text"
                    value={inputValues[realIndex] || ""}
                    onChange={(e) => handleInputChange(e.target.value, realIndex)}
                    className={styles.pg102InputBox}
                />

                <span>{sentence.split('____')[1]}</span>

                {/* Ícones de feedback corretos */}
                {results[realIndex] !== undefined && (
                    <img
                        src={results[realIndex] ? correct_icon : wrong_icon}
                        alt={results[realIndex] ? "Correct" : "Incorrect"}
                        className={styles.pg102CheckmarkImage}
                    />
                )}

                <div className={styles.pg102IconsContainer}>
                    <img src={eng_audio_icon} alt="Audio Icon" className={styles.pg102AdditionalIcon} onClick={() => playAudio(audioKey)} />
                    <img src={slow_audio_icon} alt="Volume Reduced Icon" className={`${styles.pg102AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg102Pulsing : ''}`} onClick={() => toggleSpeedReduction(audioKey)} />
                </div>
            </div>
        );
    })}

                    </div>
                    {/* Imagem */}
                    <div className={styles.pg102ContainerImagem}>
                        <img className={styles.pg102imagem} src={pagina102_imagem1} alt="Learning" />
                    </div>

                </div>


            </main>
            <button className={styles.pg102CheckButton} onClick={handleCheckClick}><em>Check</em></button>
        </div>
    );
};

export default Pagina102;
