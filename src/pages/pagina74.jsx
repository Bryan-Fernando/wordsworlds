import React, { useState } from 'react';
import styles from './pagina74.module.css';
import pg74IconNotes from '../assets/Icons/Icon-Notes.png';
import pagina74_imagem1 from '../assets/images/pagina74_imagem1.webp';
import pagina74_imagem2 from '../assets/images/pagina74_imagem2.webp';
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

import pg74_audio1 from '../assets/audios/pg74_audio1.mp3';
import pg74_audio2 from '../assets/audios/pg74_audio2.mp3';
import pg74_audio3 from '../assets/audios/pg74_audio3.mp3';
import pg74_audio4 from '../assets/audios/pg74_audio4.mp3';
import pg74_audio5 from '../assets/audios/pg74_audio5.mp3';
import pg74_audio6 from '../assets/audios/pg74_audio6.mp3';
import pg74_audio7 from '../assets/audios/pg74_audio7.mp3';
import pg74_audio8 from '../assets/audios/pg74_audio8.mp3';
import pg74_audio9 from '../assets/audios/pg74_audio9.mp3';
import pg74_audio10 from '../assets/audios/pg74_audio10.mp3';


const audioMap = {
    global_learningLEe,
    global_learningLEp,
    global_affirmativee,
    global_affirmativep,
    global_negativee,
    global_negativep,
    pg74_audio1,
    pg74_audio2,
    pg74_audio3,
    pg74_audio4,
    pg74_audio5,
    pg74_audio6,
    pg74_audio7,
    pg74_audio8,
    pg74_audio9,
    pg74_audio10,
};


const pagina74 = () => {
    const [inputValues, setInputValues] = useState(Array(10).fill(''));
    const [results, setResults] = useState(Array(10).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});

    const correctAnswers = [
        'is', 'is', 'is', 'is', 'are',

        'is not', 'are not', 'is not', 'is not', 'is not'
    ];


    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) =>
            value.trim().toLowerCase() === correctAnswers[index]
        );
        setResults(newResults);
    };


    const handleInputChange = (value, index) => {
        setInputValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = value.trim();
            return newValues;
        });
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
        <div className={styles.pg74Container}>
            <header className={styles.pg74Header}>
                <h1 className={styles.pg74H1}>
                    Learning Language Exercises
                    <img
                        src={eIcon}
                        alt="English audio"
                        className={styles.pg74HeaderIcon}
                        onClick={() => playAudio("global_learningLEe")}
                    />
                    <img
                        src={pIcon}
                        alt="Portuguese audio"
                        className={styles.pg74HeaderIcon}
                        onClick={() => playAudio("global_learningLEp")}
                    />
                </h1>
                <h2 className={styles.pg74H2}>Complete the sentences in the Simple Present Form of Verb Be <br /> Complete as frases no Presente Simples do verbo "To Be" (ser/estar).
                </h2>
            </header>
            <main className={styles.pg74Main}>
                <div className={styles.pg74tabelaAfirmativaContainer}>
                    <div className={styles.pg74tableHeaderAfirmativa}>AFIRMATIVA</div>
                    <table className={styles.pg74styledTableAfirmativa}>
                        <thead className={styles.pg74Thead}>
                            <tr className={styles.pg74celulatable}>
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
                <div className={styles.pg74ContainerQuestoes}>
                    <div className={styles.pg74Questions1}>
                        <p className={styles.pg74ATituloQuestion}>
                            Affirmative:
                            <img
                                src={eIcon}
                                alt="English audio"
                                className={styles.pg74HeaderIcon}
                                onClick={() => playAudio("global_affirmativee")}
                            />
                            <img
                                src={pIcon}
                                alt="Portuguese audio"
                                className={styles.pg74HeaderIcon}
                                onClick={() => playAudio("global_affirmativep")}
                            />
                        </p>
                        {[
                            "The weather ____ beautiful today.",
                            "My cat ____ playful in the morning.",
                            "Sarah ____ my best friend.",
                            "This book ____ interesting.",
                            "The flowers ____ blooming in the garden."
                        ].map((question, index) => {
                            const audioKey = `pg74_audio${index + 1}`;

                            return (
                                <div key={index} className={styles.pg74Question}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(97 + index)}.</strong> {question.split('____')[0]}
                                        </em>
                                    </span>
                                    <div className={styles.pg74InputContainer}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles.pg74InputBox}
                                        />
                                    </div>
                                    <span><em>{question.split('____')[1]}</em></span>
                                    <div className={styles.pg74IconsContainer}>
                                        {/* Aqui está a lógica de verificação */}
                                        {results[index] !== null && (
                                            <img
                                                src={results[index] ? vSquare : xSquare}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles.pg74CheckmarkImage}
                                            />
                                        )}
                                        <img
                                            src={eIcon}
                                            alt="Audio Icon"
                                            className={styles.pg74AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={volumeReduzidoIcon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles.pg74AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg74Pulsing : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                    <div className={styles.pg74ContainerImagem}> <img className={styles.pg74imagem} src={pagina74_imagem1} alt="" /></div>
                </div>
                <aside className={styles.pg74Aside}>
                    <div className={styles.pg74Asidecontainer}>
                        <div className={styles.pg74AsideNotes1}>
                            <img className={styles.pg74AsideImgNotes} src={pg74IconNotes} alt="" />
                            <p>Study Note</p>
                        </div>
                        <div className={styles.pg74AsideNotes2}>
                            <p>
                                In these sentences, "is" is used with singular subjects (the weather, my cat, Sarah, this book)
                                while "are" is used with plural subjects (the flowers).

                            </p>
                        </div>
                    </div>
                </aside>
                <div className={styles.pg74tabelaNegativaContainer}>
                    <div className={styles.pg74tableHeaderNegativa}>NEGATIVA</div>
                    <table className={styles.pg74styledTableNegativa}>
                        <thead className={styles.pg74Thead}>
                            <tr className={styles.pg74celulatable}>
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
                <div className={styles.pg74ContainerQuestoes}>

                    <div className={styles.pg74Questions2}>
                        <p className={styles.pg74ATituloQuestion}>
                            Negative:
                            <img
                                src={eIcon}
                                alt="English audio"
                                className={styles.pg74HeaderIcon}
                                onClick={() => playAudio("global_negativee")}
                            />
                            <img
                                src={pIcon}
                                alt="Portuguese audio"
                                className={styles.pg74HeaderIcon}
                                onClick={() => playAudio("global_negativep")}
                            />
                        </p>

                        {[
                            "My dog ____ aggressive.",
                            "The children ____ quiet during class.",
                            "The sky ____ clear at night.",
                            "This restaurant ____ expensive.",
                            "The movie ____ boring."
                        ].map((question, index) => {
                            const audioKey = `pg74_audio${index + 6}`;

                            return (
                                <div key={index + 5} className={styles.pg74Question}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(102 + index)}.</strong> {question.split('____')[0]}
                                        </em>
                                    </span>
                                    <div className={styles.pg74InputContainer}>
                                        <input
                                            type="text"
                                            value={inputValues[index + 5]}
                                            onChange={(e) => handleInputChange(e.target.value, index + 5)}
                                            className={styles.pg74InputBox}
                                        />
                                    </div>
                                    <span><em>{question.split('____')[1]}</em></span>
                                    <div className={styles.pg74IconsContainer}>
                                        {results[index + 5] !== null && (
                                            <img
                                                src={results[index + 5] ? vSquare : xSquare}
                                                alt={results[index + 5] ? "Correct" : "Incorrect"}
                                                className={styles.pg74CheckmarkImage}
                                            />
                                        )}
                                        <img
                                            src={eIcon}
                                            alt="Audio Icon"
                                            className={styles.pg74AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={volumeReduzidoIcon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles.pg74AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg74Pulsing : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}


                    </div>
                    <div className={styles.pg74ContainerImagem}><img className={styles.pg74imagem} src={pagina74_imagem2} alt="" /></div>
                </div>
                <aside className={styles.pg74Aside}>
                    <div className={styles.pg74Asidecontainer}>
                        <div className={styles.pg74AsideNotes1}>
                            <img className={styles.pg74AsideImgNotes} src={pg74IconNotes} alt="" />
                            <p>Study Note</p>
                        </div>
                        <div className={styles.pg74AsideNotes2}>
                            <p>
                                "Not" is used to form negative sentences. The verb "be" is conjugated as "am not" for the first
                                person singular (I), "is not" for singular subjects (my dog, the sky, this restaurant, the movie),
                                and "are not" for plural subjects (the children)
                            </p>
                        </div>
                    </div>
                </aside>
            </main>
            <button className={styles.pg74CheckButton} onClick={handleCheckClick}><em>Check</em></button>
        </div>
    );
};

export default pagina74;
