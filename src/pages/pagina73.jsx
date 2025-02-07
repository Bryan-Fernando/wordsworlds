import React, { useState } from 'react';
import styles from './pagina73.module.css';
import pagina73_imagem1 from '../assets/images/pagina73_imagem1.webp';
import pagina73_imagem2 from '../assets/images/pagina73_imagem2.webp';
import vSquare from '../assets/icons/vSquare.png';
import xSquare from '../assets/icons/xSquare.png';
import eIcon from '../assets/icons/eIcon.png';
import pIcon from '../assets/icons/pIcon.png';
import volumeReduzidoIcon from '../assets/icons/volumeReduzido.png';
import global_learningLEe from '../assets/audios/global_learningLEe.mp3';
import global_learningLEp from '../assets/audios/global_learningLEp.mp3';
import global_fillBlankse from '../assets/audios/global_exerciseFillBlanke.mp3';
import global_fillBlanksp from '../assets/audios/global_exerciseFillBlankp.mp3';
import global_affirmativee from '../assets/audios/global_affirmativee.mp3';
import global_affirmativep from '../assets/audios/global_affirmativep.mp3';
import global_negativee from '../assets/audios/global_negativee.mp3';
import global_negativep from '../assets/audios/global_negativep.mp3';
import pg73_audio1 from '../assets/audios/pg73_audio1.mp3';
import pg73_audio2 from '../assets/audios/pg73_audio2.mp3';
import pg73_audio3 from '../assets/audios/pg73_audio3.mp3';
import pg73_audio4 from '../assets/audios/pg73_audio4.mp3';
import pg73_audio5 from '../assets/audios/pg73_audio5.mp3';
import pg73_audio6 from '../assets/audios/pg73_audio6.mp3';
import pg73_audio7 from '../assets/audios/pg73_audio7.mp3';
import pg73_audio8 from '../assets/audios/pg73_audio8.mp3';
import pg73_audio9 from '../assets/audios/pg73_audio9.mp3';
import pg73_audio10 from '../assets/audios/pg73_audio10.mp3';


const audioMap = {
    global_learningLEe,
    global_learningLEp,
    global_fillBlankse,
    global_fillBlanksp,
    global_affirmativee,
    global_affirmativep,
    global_negativee,
    global_negativep,
    pg73_audio1,
    pg73_audio2,
    pg73_audio3,
    pg73_audio4,
    pg73_audio5,
    pg73_audio6,
    pg73_audio7,
    pg73_audio8,
    pg73_audio9,
    pg73_audio10,
};


const pagina73 = () => {
    const [inputValues, setInputValues] = useState(Array(10).fill(''));
    const [results, setResults] = useState(Array(10).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});

    const correctAnswers = [
        'am', 'is', 'are', 'are', 'is',
        'am not', 'is not', 'are not', 'are not', 'is not'
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
        <div className={styles.pg73Container}>
            <header className={styles.pg73Header}>
                <h1 className={styles.pg73H1}>
                    Learning Language Exercises
                    <img
                        src={eIcon}
                        alt="English audio"
                        className={styles.headerIcon}
                        onClick={() => playAudio("global_learningLEe")}
                    />
                    <img
                        src={pIcon}
                        alt="Portuguese audio"
                        className={styles.headerIcon}
                        onClick={() => playAudio("global_learningLEp")}
                    />
                </h1>
                <p className={styles.pg73P}>
                    Fill in the blanks with the correct form of the verb ‘to be’ in the Simple Present tense
                    <img
                        src={eIcon}
                        alt="English audio"
                        className={styles.headerIcon}
                        onClick={() => playAudio("global_fillBlankse")}
                    />
                    <img
                        src={pIcon}
                        alt="Portuguese audio"
                        className={styles.headerIcon}
                        onClick={() => playAudio("global_fillBlanksp")}
                    />
                </p>
            </header>



            <main className={styles.pg73Main}>

                <div className={styles.pg73tabelaAfirmativaContainer}>
                    <div className={styles.pg73tableHeaderAfirmativa}>AFIRMATIVA</div>
                    <table className={styles.pg73styledTableAfirmativa}>
                        <thead className={styles.pg73Thead}>
                            <tr className={styles.pg73celulatable}>
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

                <div className={styles.pg73tabelaNegativaContainer}>
                    <div className={styles.pg73tableHeaderNegativa}>NEGATIVA</div>
                    <table className={styles.pg73styledTableNegativa}>
                        <thead className={styles.pg73Thead}>
                            <tr className={styles.pg73celulatable}>
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

                <div className={styles.pg73ContainerQuestoes}>
                    <div className={styles.pg73Questions1}>
                        <p className={styles.pg84ATituloQuestion}>
                            Affirmative:
                            <img
                                src={eIcon}
                                alt="English audio"
                                className={styles.headerIcon}
                                onClick={() => playAudio("global_affirmativee")}
                            />
                            <img
                                src={pIcon}
                                alt="Portuguese audio"
                                className={styles.headerIcon}
                                onClick={() => playAudio("global_affirmativep")}
                            />
                        </p>
                        {[
                            "I ____ a student.",
                            "She ____ my sister.",
                            "We ____ friends.",
                            "They ____ at home.",
                            "It ____ a beautiful day."
                        ].map((question, index) => {
                            const parts = question.split('____');
                            const audioKey = `pg73_audio${index + 1}`;

                            return (
                                <div key={index} className={styles.pg73Question}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(97 + index)}.</strong> {parts[0]}
                                        </em>
                                    </span>
                                    <div className={styles.pg73InputContainer}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles.pg73InputBox}
                                        />
                                    </div>
                                    <span><em>{parts[1]}</em></span>
                                    <div className={styles.pg73IconsContainer}>
                                        {results[index] !== null && (
                                            <img
                                                src={results[index] ? vSquare : xSquare}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles.pg73CheckmarkImage}
                                            />
                                        )}
                                        <img
                                            src={eIcon}
                                            alt="Audio Icon"
                                            className={styles.pg73AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={volumeReduzidoIcon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles.pg73AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg73Pulsing : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}


                    </div>

                </div>

                <div className={styles.pg73ContainerQuestoes}>

                    <div className={styles.pg73Questions2}>
                        <p className={styles.pg84ATituloQuestion}>
                            Negative:
                            <img
                                src={eIcon}
                                alt="English audio"
                                className={styles.headerIcon}
                                onClick={() => playAudio("global_negativee")}
                            />
                            <img
                                src={pIcon}
                                alt="Portuguese audio"
                                className={styles.headerIcon}
                                onClick={() => playAudio("global_negativep")}
                            />
                        </p>

                        {[
                            "I ____ a teacher.",
                            "She ____ my mother.",
                            "We ____ late.",
                            "They ____ happy.",
                            "It ____ cold today."
                        ].map((question, index) => {
                            const parts = question.split('____');
                            const audioKey = `pg73_audio${index + 6}`;

                            return (
                                <div key={index + 5} className={styles.pg73Question}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(102 + index)}.</strong> {parts[0]}
                                        </em>
                                    </span>
                                    <div className={styles.pg73InputContainer}>
                                        <input
                                            type="text"
                                            value={inputValues[index + 5]}
                                            onChange={(e) => handleInputChange(e.target.value, index + 5)}
                                            className={styles.pg73InputBox}
                                        />
                                    </div>
                                    <span>
                                        <em>
                                            {parts[1].split('not')[0]}
                                            {parts[1].split('not')[1]}
                                        </em>
                                    </span>
                                    <div className={styles.pg73IconsContainer}>
                                        {results[index + 5] !== null && (
                                            <img
                                                src={results[index + 5] ? vSquare : xSquare}
                                                alt={results[index + 5] ? "Correct" : "Incorrect"}
                                                className={styles.pg73CheckmarkImage}
                                            />
                                        )}
                                        <img
                                            src={eIcon}
                                            alt="Audio Icon"
                                            className={styles.pg73AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={volumeReduzidoIcon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles.pg73AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg73Pulsing : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                    <div className={styles.pg73ContainerImagem}> <img className={styles.pg73imagem1} src={pagina73_imagem1} alt="" />
                        <img className={styles.pg73imagem2} src={pagina73_imagem2} alt="" />
                    </div>

                </div>
            </main>
            <button className={styles.pg73CheckButton} onClick={handleCheckClick}><em>Check</em></button>
        </div>
    );
};

export default pagina73;
