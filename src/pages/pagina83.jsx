import React, { useState } from 'react';
import styles from './pagina83.module.css';
import pg83IconNotes from '../assets/Icons/Icon-Notes.png';
import pagina83_imagem1 from '../assets/images/pagina83_imagem1.webp';
import pagina83_imagem2 from '../assets/images/pagina83_imagem2.webp';
import vSquare from '../assets/icons/vSquare.png';
import xSquare from '../assets/icons/xSquare.png';
import eIcon from '../assets/icons/eIcon.png';
import pIcon from '../assets/icons/pIcon.png';

import volumeReduzidoIcon from '../assets/icons/volumeReduzido.png';
import global_learningLEe from '../assets/audios/global_learningLEe.mp3';
import global_learningLEp from '../assets/audios/global_learningLEp.mp3';
import global_affirmativee from '../assets/audios/global_affirmativee.mp3';
import global_affirmativep from '../assets/audios/global_affirmativep.mp3';
import global_negativee from '../assets/audios/global_negativee.mp3';
import global_negativep from '../assets/audios/global_negativep.mp3';

import pg83_audio1 from '../assets/audios/pg83_audio1.mp3';
import pg83_audio2 from '../assets/audios/pg83_audio2.mp3';
import pg83_audio3 from '../assets/audios/pg83_audio3.mp3';
import pg83_audio4 from '../assets/audios/pg83_audio4.mp3';
import pg83_audio5 from '../assets/audios/pg83_audio5.mp3';
import pg83_audio6 from '../assets/audios/pg83_audio6.mp3';
import pg83_audio7 from '../assets/audios/pg83_audio7.mp3';
import pg83_audio8 from '../assets/audios/pg83_audio8.mp3';
import pg83_audio9 from '../assets/audios/pg83_audio9.mp3';
import pg83_audio10 from '../assets/audios/pg83_audio10.mp3';

const audioMap = {
    global_learningLEe,
    global_learningLEp,
    global_affirmativee,
    global_affirmativep,
    global_negativee,
    global_negativep,
    pg83_audio1,
    pg83_audio2,
    pg83_audio3,
    pg83_audio4,
    pg83_audio5,
    pg83_audio6,
    pg83_audio7,
    pg83_audio8,
    pg83_audio9,
    pg83_audio10,
};

const Pagina83 = () => {
    const [inputValues, setInputValues] = useState(Array(10).fill(''));
    const [results, setResults] = useState(Array(10).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});

    const correctAnswers = [
        'is', 'are', 'am', 'are', 'is',
        'is not', 'is not', 'are not', 'are not', 'is not'
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
        <div className={styles.pg83Container}>
            <header className={styles.pg83Header}>
                <h1 className={styles.pg83H1}>
                    Learning Language Exercises
                    <img
                        src={eIcon}
                        alt="English audio"
                        className={styles.pg83HeaderIcon}
                        onClick={() => playAudio("global_learningLEe")}
                    />
                    <img
                        src={pIcon}
                        alt="Portuguese audio"
                        className={styles.pg83HeaderIcon}
                        onClick={() => playAudio("global_learningLEp")}
                    />
                </h1>
                <h2 className={styles.pg83H2}>
                    Complete the sentences in the Simple Present Form of Verb Be <br />
                    Complete as frases no Presente Simples do verbo "To Be" (ser/estar).
                </h2>
            </header>

            <main className={styles.pg83Main}>
                <div className={styles.pg83tabelaAfirmativaContainer}>
                    <div className={styles.pg83tableHeaderAfirmativa}>AFIRMATIVA</div>
                    <table className={styles.pg83styledTableAfirmativa}>
                        <thead>
                            <tr className={styles.pg83celulatable}>
                                <th>Sujeito</th>
                                <th>Verbo Auxiliar</th>
                                <th>Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className={styles.pg83ContainerQuestoes}>
                    <div className={styles.pg83Questions1}>
                        <p className={styles.pg83ATituloQuestion}>
                            Negative:
                            <img
                                src={eIcon}
                                alt="English audio"
                                className={styles.pg83HeaderIcon}
                                onClick={() => playAudio("global_negativee")}
                            />
                            <img
                                src={pIcon}
                                alt="Portuguese audio"
                                className={styles.pg83HeaderIcon}
                                onClick={() => playAudio("global_negativep")}
                            />
                        </p>
                        {[
                            "The new project ____ exciting.",
                            "They ____ from Canada",
                            "I ____ a good swimmer",
                            "My parents ____ proud of me.",
                            "That car ____ fast"
                        ].map((question, index) => {
                            const audioKey = `pg83_audio${index + 1}`;

                            return (
                                <div key={index} className={styles.pg83Question}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(97 + index)}.</strong> {question.split('____')[0]}
                                        </em>
                                    </span>
                                    <div className={styles.pg83InputContainer}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles.pg83InputBox}
                                        />
                                    </div>
                                    <span><em>{question.split('____')[1]}</em></span>
                                    <div className={styles.pg83IconsContainer}>
                                        {/* Ícones de Correção */}
                                        {results[index] !== null && (
                                            <img
                                                src={results[index] ? vSquare : xSquare}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles.pg83CheckmarkImage}
                                            />
                                        )}

                                        {/* Ícone de Áudio */}
                                        <img
                                            src={eIcon}
                                            alt="Audio Icon"
                                            className={styles.pg83AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />

                                        {/* Ícone de Volume Reduzido */}
                                        <img
                                            src={volumeReduzidoIcon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles.pg83AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg83Pulsing : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                    <div className={styles.pg83ContainerImagem}> <img className={styles.pg83imagem} src={pagina83_imagem1} alt="" /></div>
                </div>
                <aside className={styles.pg83Aside}>
                    <div className={styles.pg83Asidecontainer}>
                        <div className={styles.pg83AsideNotes1}>
                            <img className={styles.pg83AsideImgNotes} src={pg83IconNotes} alt="" />
                            <p>Study Note</p>
                        </div>
                        <div className={styles.pg83AsideNotes2}>
                            <p>
                                Here, "is" is used for singular subjects (the new project, I, that car) and "are" is used for the
                                plural subject (they).
                            </p>
                        </div>
                    </div>
                </aside>
                <div className={styles.pg83tabelaNegativaContainer}>
                    <div className={styles.pg83tableHeaderNegativa}>NEGATIVA</div>
                    <table className={styles.pg83styledTableNegativa}>
                        <thead>
                            <tr className={styles.pg83celulatable}>
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
                <div className={styles.pg83ContainerQuestoes}>

                    <div className={styles.pg83Questions2}>
                        <p className={styles.pg83ATituloQuestion}>
                            Negative:
                            <img
                                src={eIcon}
                                alt="English audio"
                                className={styles.pg83HeaderIcon}
                                onClick={() => playAudio("global_negativee")}
                            />
                            <img
                                src={pIcon}
                                alt="Portuguese audio"
                                className={styles.pg83HeaderIcon}
                                onClick={() => playAudio("global_negativep")}
                            />
                        </p>
                        {[
                            "The meeting ____ boring.",
                            "She ____ at home right now.",
                            "We ____ late for the train.",
                            "The kittens ____ hungry.",
                            "My phone ____ old."
                        ].map((question, index) => {
                            const audioKey = `pg83_audio${index + 6}`;

                            return (
                                <div key={index + 5} className={styles.pg83Question}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(102 + index)}.</strong> {question.split('____')[0]}
                                        </em>
                                    </span>
                                    <div className={styles.pg83InputContainer}>
                                        <input
                                            type="text"
                                            value={inputValues[index + 5]}
                                            onChange={(e) => handleInputChange(e.target.value, index + 5)}
                                            className={styles.pg83InputBox}
                                        />
                                    </div>
                                    <span><em>{question.split('____')[1]}</em></span>
                                    <div className={styles.pg83IconsContainer}>
                                        {/* Ícones de Correção */}
                                        {results[index + 5] !== null && (
                                            <img
                                                src={results[index + 5] ? vSquare : xSquare}
                                                alt={results[index + 5] ? "Correct" : "Incorrect"}
                                                className={styles.pg83CheckmarkImage}
                                            />
                                        )}

                                        {/* Ícone de Áudio */}
                                        <img
                                            src={eIcon}
                                            alt="Audio Icon"
                                            className={styles.pg83AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />

                                        {/* Ícone de Volume Reduzido */}
                                        <img
                                            src={volumeReduzidoIcon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles.pg83AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg83Pulsing : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.pg83ContainerImagem}><img className={styles.pg83imagem} src={pagina83_imagem2} alt="" /></div>
                </div>
                <aside className={styles.pg83Aside}>
                    <div className={styles.pg83Asidecontainer}>
                        <div className={styles.pg83AsideNotes1}>
                            <img className={styles.pg83AsideImgNotes} src={pg83IconNotes} alt="" />
                            <p>Study Note</p>
                        </div>
                        <div className={styles.pg83AsideNotes2}>
                            <p>
                                "Not" negates the meaning of the sentence. The verb "be" is conjugated as "is not" for singular
                                subjects (the meeting, she, my phone) and "are not" for plural subjects (we, the kittens)
                            </p>
                        </div>
                    </div>
                </aside>
            </main>
            <button className={styles.pg83CheckButton} onClick={handleCheckClick}><em>Check</em></button>
        </div>
    );
};

export default Pagina83;
