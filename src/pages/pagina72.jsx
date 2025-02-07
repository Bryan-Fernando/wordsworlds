import React, { useState } from 'react';
import styles from './pagina72.module.css';
import pg72IconNotes from '../assets/Icons/Icon-Notes.png';
import pagina72_imagem1 from '../assets/images/pagina72_imagem1.webp';
import vSquare from '../assets/icons/vSquare.png';
import xSquare from '../assets/icons/xSquare.png';
import eIcon from '../assets/icons/eIcon.png';
import pIcon from '../assets/icons/pIcon.png';
import volumeReduzidoIcon from '../assets/icons/volumeReduzido.png';

import global_learningLEe from '../assets/audios/global_learningLEe.mp3';
import global_learningLEp from '../assets/audios/global_learningLEp.mp3';
import global_exerciseFillBlanke from '../assets/audios/global_exerciseFillBlanke.mp3';
import global_exerciseFillBlankp from '../assets/audios/global_exerciseFillBlankp.mp3';


import pg72_audio1e from '../assets/audios/pg72_audio1e.mp3';
import pg72_audio1p from '../assets/audios/pg72_audio1p.mp3';
import pg72_audio2 from '../assets/audios/pg72_audio2.mp3';
import pg72_audio3 from '../assets/audios/pg72_audio3.mp3';
import pg72_audio4 from '../assets/audios/pg72_audio4.mp3';
import pg72_audio5 from '../assets/audios/pg72_audio5.mp3';
import pg72_audio6 from '../assets/audios/pg72_audio6.mp3';
import pg72_audio7e from '../assets/audios/pg72_audio7e.mp3';
import pg72_audio7p from '../assets/audios/pg72_audio7p.mp3';
import pg72_audio8 from '../assets/audios/pg72_audio8.mp3';
import pg72_audio9 from '../assets/audios/pg72_audio9.mp3';
import pg72_audio10 from '../assets/audios/pg72_audio10.mp3';
import pg72_audio11 from '../assets/audios/pg72_audio11.mp3';
import pg72_audio12 from '../assets/audios/pg72_audio12.mp3';


const audioMap = {
    global_learningLEe,
    global_learningLEp,
    global_exerciseFillBlanke,
    global_exerciseFillBlankp,
    pg72_audio1e,
    pg72_audio1p,
    pg72_audio2,
    pg72_audio3,
    pg72_audio4,
    pg72_audio5,
    pg72_audio6,
    pg72_audio7e,
    pg72_audio7p,
    pg72_audio8,
    pg72_audio9,
    pg72_audio10,
    pg72_audio11,
    pg72_audio12,
};


const pagina72 = () => {
    const [inputValues, setInputValues] = useState(Array(10).fill(''));
    const [results, setResults] = useState(Array(10).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});

    const correctAnswers = [
        'am', 'is', 'is', 'are', 'is',
        'is not', 'are not', 'is not', 'am not', 'are not'
    ];


    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => value.toLowerCase() === correctAnswers[index]);
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

            const speed = isSpeedReduced[audioKey] ? 0.6 : 1;
            audio.playbackRate = speed;

            audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
        } else {
            console.warn(`Áudio não encontrado para a chave: ${audioKey}`);
        }
    };



    const toggleSpeedReduction = (audioKey) => {
        setIsSpeedReduced((prevState) => ({
            ...prevState,
            [audioKey]: !prevState[audioKey]
        }));
    };

    return (
        <div className={styles.pg72Container}>
            <header className={styles.pg72Header}>
                <h1 className={styles.pg72H1}>
                    Learning Language Exercises
                    <img
                        src={eIcon}
                        alt="English audio"
                        className={styles.pg72HeaderAudioIcon}
                        onClick={() => playAudio("global_learningLEe")}
                    />
                    <img
                        src={pIcon}
                        alt="Portuguese audio"
                        className={styles.pg72HeaderAudioIcon}
                        onClick={() => playAudio("global_learningLEp")}
                    />
                </h1>
                <p className={styles.pg72P}>
                    <strong>EXERCISE.</strong> Fill in the blanks with the correct forms of the verb 'be' in the Simple Present Tense
                    <img
                        src={eIcon}
                        alt="English audio"
                        className={styles.pg72HeaderAudioIcon}
                        onClick={() => playAudio("global_exerciseFillBlanke")}
                    />
                    <img
                        src={pIcon}
                        alt="Portuguese audio"
                        className={styles.pg72HeaderAudioIcon}
                        onClick={() => playAudio("global_exerciseFillBlankp")}
                    />
                </p>
            </header>


            <main className={styles.pg72Main}>
                <div className={styles.pg72ContainerQuestoes}>
                    <div className={styles.pg72Questions1}>
                        <p className={styles.pg84ATituloQuestion}>
                            Affirmative form:
                            <img
                                src={eIcon}
                                alt="English audio"
                                className={styles.pg72HeaderAudioIcon}
                                onClick={() => playAudio("pg72_audio1e")}
                            />
                            <img
                                src={pIcon}
                                alt="Portuguese audio"
                                className={styles.pg72HeaderAudioIcon}
                                onClick={() => playAudio("pg72_audio1p")}
                            />
                        </p>

                        {[
                            "I ____ creative.",
                            "She ____ intelligent.",
                            "He ____ ambitious.",
                            "They ____ helpful.",
                            "The team ____ united."
                        ].map((question, index) => {
                            const parts = question.split('____');
                            const audioKey = `pg72_audio${index + 2}`;

                            return (
                                <div key={index} className={styles.pg72Question}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(97 + index)}.</strong> {parts[0]}
                                        </em>
                                    </span>
                                    <div className={styles.pg72InputContainer}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles.pg72InputBox}
                                        />
                                    </div>
                                    <span><em>{parts[1]}</em></span>
                                    <div className={styles.pg72IconsContainer}>
                                        {results[index] !== null && (
                                            <img
                                                src={results[index] ? vSquare : xSquare}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles.pg72CheckmarkImage}
                                            />
                                        )}
                                        <img
                                            src={eIcon}
                                            alt="Audio Icon"
                                            className={styles.pg72AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={volumeReduzidoIcon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles.pg72AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg72Pulsing : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}


                    </div>
                    <div className={styles.pg72tabelaAfirmativaContainer}>
                        <div className={styles.pg72tableHeaderAfirmativa}>AFIRMATIVA</div>
                        <table className={styles.pg72styledTableAfirmativa}>
                            <thead className={styles.pg72Thead}>
                                <tr className={styles.pg72celulatable}>
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
                </div>

                <div className={styles.pg72ContainerQuestoes}>

                    <div className={styles.pg72Questions2}>
                        <p className={styles.pg84ATituloQuestion}>
                            Negative form:
                            <img
                                src={eIcon}
                                alt="English audio"
                                className={styles.pg72HeaderAudioIcon}
                                onClick={() => playAudio("pg72_audio7e")}
                            />
                            <img
                                src={pIcon}
                                alt="Portuguese audio"
                                className={styles.pg72HeaderAudioIcon}
                                onClick={() => playAudio("pg72_audio7p")}
                            />
                        </p>

                        {[
                            "He ____ talkative.",
                            "They ____ organized.",
                            "She ____ shy.",
                            "I ____ lazy.",
                            "The students ____ disrespectful."
                        ].map((question, index) => {
                            const parts = question.split('____');
                            const audioKey = `pg72_audio${index + 8}`;

                            return (
                                <div key={index + 5} className={styles.pg72Question}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(102 + index)}.</strong> {parts[0]}
                                        </em>
                                    </span>
                                    <div className={styles.pg72InputContainer}>
                                        <input
                                            type="text"
                                            value={inputValues[index + 5]}
                                            onChange={(e) => handleInputChange(e.target.value, index + 5)}
                                            className={styles.pg72InputBox}
                                        />
                                    </div>
                                    <span>
                                        <em>
                                            {parts[1]}
                                        </em>
                                    </span>
                                    <div className={styles.pg72IconsContainer}>
                                        {results[index + 5] !== null && (
                                            <img
                                                src={results[index + 5] ? vSquare : xSquare}
                                                alt={results[index + 5] ? "Correct" : "Incorrect"}
                                                className={styles.pg72CheckmarkImage}
                                            />
                                        )}
                                        <img
                                            src={eIcon}
                                            alt="Audio Icon"
                                            className={styles.pg72AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={volumeReduzidoIcon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles.pg72AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg72Pulsing : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.pg72tabelaNegativaContainer}>
                        <div className={styles.pg72tableHeaderNegativa}>NEGATIVA</div>
                        <table className={styles.pg72styledTableNegativa}>
                            <thead className={styles.pg72Thead}>
                                <tr className={styles.pg72celulatable}>
                                    <th>Introdução</th>
                                    <th>Sujeito</th>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th> <span style={{ color: 'red' }}>Not</span> <br />Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>

            </main>

            <button className={styles.pg72CheckButton} onClick={handleCheckClick}><em>Check</em></button>

            <aside className={styles.pg72WordBank}>
                <div className={styles.pg72WordBankContainer}>
                    <div className={styles.pg72WordBankHeader}>
                        <p>Word Bank</p>
                    </div>
                    <div className={styles.pg72WordBankContent}>
                        <div className={styles.pg72WordRow}>
                            <div className={styles.pg72WordColumn}>
                                <p><strong className={styles.pg72RedText}>Friendly</strong> <span>(amigável)</span></p>
                                <p><strong className={styles.pg72RedText}>Happy</strong> <span>(feliz)</span></p>
                                <p><strong className={styles.pg72RedText}>Hardworking</strong> <span>(trabalhador)</span></p>
                                <p><strong className={styles.pg72RedText}>Outgoing</strong> <span>(extrovertido)</span></p>
                                <p><strong className={styles.pg72RedText}>Creative</strong> <span>(criativo)</span></p>
                                <p><strong className={styles.pg72RedText}>Intelligent</strong> <span>(inteligente)</span></p>
                                <p><strong className={styles.pg72RedText}>Ambitious</strong> <span>(ambicioso)</span></p>
                            </div>
                            <div className={styles.pg72WordColumn}>
                                <p><strong className={styles.pg72RedText}>Helpful</strong> <span>(prestativo)</span></p>
                                <p><strong className={styles.pg72RedText}>Talkative</strong> <span>(falante)</span></p>
                                <p><strong className={styles.pg72RedText}>Organized</strong> <span>(organizado)</span></p>
                                <p><strong className={styles.pg72RedText}>Shy</strong> <span>(tímido)</span></p>
                                <p><strong className={styles.pg72RedText}>Lazy</strong> <span>(preguiçoso)</span></p>
                                <p><strong className={styles.pg72RedText}>Disrespectful</strong> <span>(desrespeitoso)</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>




            <div className={styles.pg72ContainerImagem}> <img className={styles.pg72imagem} src={pagina72_imagem1} alt="" /></div>


        </div>
    );
};

export default pagina72;
