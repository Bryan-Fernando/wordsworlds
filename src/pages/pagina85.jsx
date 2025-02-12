import React, { useState } from 'react';

import styles from './pagina85.module.css';

import pg85IconNotes from '../assets/icons/notes_icon.webp';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';

import pagina85_imagem1 from '../assets/images/pagina85_imagem1.webp';
import pagina85_imagem2 from '../assets/images/pagina85_imagem2.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import global_affirmativee from '../assets/audios/global_affirmativee.mp3';
import global_affirmativep from '../assets/audios/global_affirmativep.mp3';
import global_negativee from '../assets/audios/global_negativee.mp3';
import global_negativep from '../assets/audios/global_negativep.mp3';
import pg85_audio1 from '../assets/audios/pg85_audio1.mp3';
import pg85_audio2 from '../assets/audios/pg85_audio2.mp3';
import pg85_audio3 from '../assets/audios/pg85_audio3.mp3';
import pg85_audio4 from '../assets/audios/pg85_audio4.mp3';
import pg85_audio5 from '../assets/audios/pg85_audio5.mp3';
import pg85_audio6 from '../assets/audios/pg85_audio6.mp3';
import pg85_audio7 from '../assets/audios/pg85_audio7.mp3';
import pg85_audio8 from '../assets/audios/pg85_audio8.mp3';
import pg85_audio9 from '../assets/audios/pg85_audio9.mp3';
import pg85_audio10 from '../assets/audios/pg85_audio10.mp3';

const audioMap = {
    global_learning_le_e,
    global_learning_le_p,
    global_affirmativee,
    global_affirmativep,
    global_negativee,
    global_negativep,
    pg85_audio1,
    pg85_audio2,
    pg85_audio3,
    pg85_audio4,
    pg85_audio5,
    pg85_audio6,
    pg85_audio7,
    pg85_audio8,
    pg85_audio9,
    pg85_audio10,
};

const Pagina85 = () => {
    const [inputValues, setInputValues] = useState(Array(10).fill(''));
    const [results, setResults] = useState(Array(10).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});

    const correctAnswers = [
        'is', 'is', 'is', 'are', 'are',
        'is not', 'are not', 'am not', 'is not', 'are not'
    ];

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
        <div className={styles.pg85Container}>
            <header className={styles.pg85Header}>
                <h1 className={styles.pg85H1}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles.pg85HeaderIcon}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles.pg85HeaderIcon}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
                <h2 className={styles.pg85H2}>
                    Complete the sentences in the Simple Present Form of Verb Be <br />
                    Complete as frases no Presente Simples do verbo "To Be" (ser/estar).
                </h2>
            </header>

            <main className={styles.pg85Main}>
                <div className={styles.pg85tabelaAfirmativaContainer}>
                    <div className={styles.pg85tableHeaderAfirmativa}>AFIRMATIVA</div>
                    <table className={styles.pg85styledTableAfirmativa}>
                        <thead>
                            <tr className={styles.pg85celulatable}>
                                <th>Sujeito</th>
                                <th>Verbo Auxiliar</th>
                                <th>Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className={styles.pg85ContainerQuestoes}>
                    <div className={styles.pg85Questions1}>
                        <p className={styles.pg85ATituloQuestion}>
                            Affirmative:
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles.pg85HeaderIcon}
                                onClick={() => playAudio("global_affirmativee")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles.pg85HeaderIcon}
                                onClick={() => playAudio("global_affirmativep")}
                            />
                        </p>

                        {[
                            "Mathematics ____ my favorite subject.",
                            "The park ____ quiet in the morning.",
                            "He ____ a good dancer.",
                            "These shoes ____ comfortable.",
                            "The birds ____ singing happily."
                        ].map((question, index) => {
                            const audioKey = `pg85_audio${index + 1}`;

                            return (
                                <div key={index} className={styles.pg85Question}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(97 + index)}.</strong> {question.split('____')[0]}
                                        </em>
                                    </span>
                                    <div className={styles.pg85InputContainer}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles.pg85InputBox}
                                        />
                                    </div>
                                    <span><em>{question.split('____')[1]}</em></span>
                                    <div className={styles.pg85IconsContainer}>

                                        {results[index] !== null && (
                                            <img
                                                src={results[index] ? correct_icon : wrong_icon}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles.pg85CheckmarkImage}
                                            />
                                        )}

                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles.pg85AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />

                                        <img
                                            src={slow_audio_icon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles.pg85AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg85Pulsing : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                    <div className={styles.pg85ContainerImagem}> <img className={styles.pg85imagem} src={pagina85_imagem1} alt="" /></div>
                </div>
                <aside className={styles.pg85Aside}>
                    <div className={styles.pg85Asidecontainer}>
                        <div className={styles.pg85AsideNotes1}>
                            <img className={styles.pg85AsideImgNotes} src={pg85IconNotes} alt="" />
                            <p>Study Note</p>
                        </div>
                        <div className={styles.pg85AsideNotes2}>
                            <p>
                                Here, "is" is used with singular subjects (mathematics, he, the park) and "are" is used with the
                                plural subjects (these shoes, the birds).
                            </p>
                        </div>
                    </div>
                </aside>
                <div className={styles.pg85tabelaNegativaContainer}>
                    <div className={styles.pg85tableHeaderNegativa}>NEGATIVA</div>
                    <table className={styles.pg85styledTableNegativa}>
                        <thead>
                            <tr className={styles.pg85celulatable}>
                                <th>Sujeito</th>
                                <th>Verbo Auxiliar</th>
                                <th>
                                    <span style={{ color: 'red' }}>Not</span> <br /> Advérbio
                                </th>
                                <th>Verbo(s)</th>
                                <th>Objeto Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className={styles.pg85ContainerQuestoes}>

                    <div className={styles.pg85Questions2}>
                        <p className={styles.pg85ATituloQuestion}>
                            Negative:
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles.pg85HeaderIcon}
                                onClick={() => playAudio("global_negativee")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles.pg85HeaderIcon}
                                onClick={() => playAudio("global_negativep")}
                            />
                        </p>

                        {[
                            "Her cat ____ black.",
                            "The flowers ____ wilted.",
                            "I ____ a morning person.",
                            "The test ____ difficult.",
                            "Our neighbors ____ noisy."
                        ].map((question, index) => {
                            const audioKey = `pg85_audio${index + 6}`;

                            return (
                                <div key={index + 5} className={styles.pg85Question}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(102 + index)}.</strong> {question.split('____')[0]}
                                        </em>
                                    </span>
                                    <div className={styles.pg85InputContainer}>
                                        <input
                                            type="text"
                                            value={inputValues[index + 5]}
                                            onChange={(e) => handleInputChange(e.target.value, index + 5)}
                                            className={styles.pg85InputBox}
                                        />
                                    </div>
                                    <span><em>{question.split('____')[1]}</em></span>
                                    <div className={styles.pg85IconsContainer}>

                                        {results[index + 5] !== null && (
                                            <img
                                                src={results[index + 5] ? correct_icon : wrong_icon}
                                                alt={results[index + 5] ? "Correct" : "Incorrect"}
                                                className={styles.pg85CheckmarkImage}
                                            />
                                        )}

                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles.pg85AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />

                                        <img
                                            src={slow_audio_icon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles.pg85AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg85Pulsing : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                    <div className={styles.pg85ContainerImagem}><img className={styles.pg85imagem} src={pagina85_imagem2} alt="" /></div>
                </div>
                <aside className={styles.pg85Aside}>
                    <div className={styles.pg85Asidecontainer}>
                        <div className={styles.pg85AsideNotes1}>
                            <img className={styles.pg85AsideImgNotes} src={pg85IconNotes} alt="" />
                            <p>Study Note</p>
                        </div>
                        <div className={styles.pg85AsideNotes2}>
                            <p>
                                "Not" negates the meaning. The verb "be" is conjugated as "is not" for singular subjects (her
                                cat, I, the test) and "are not" for plural subjects (the flowers, our neighbors).
                            </p>
                        </div>
                    </div>
                </aside>
            </main>
            <button className={styles.pg85CheckButton} onClick={handleCheckClick}><em>Check</em></button>
        </div>
    );
};

export default Pagina85;
