import React, { useState } from 'react';

import styles from './pagina84.module.css';

import pg84IconNotes from '../assets/icons/notes_icon.webp';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';

import pagina84_imagem1 from '../assets/images/pagina84_imagem1.webp';
import pagina84_imagem2 from '../assets/images/pagina84_imagem2.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import global_affirmativee from '../assets/audios/global_affirmativee.mp3';
import global_affirmativep from '../assets/audios/global_affirmativep.mp3';
import global_negativee from '../assets/audios/global_negativee.mp3';
import global_negativep from '../assets/audios/global_negativep.mp3';
import pg84_audio1 from '../assets/audios/pg84_audio1.mp3';
import pg84_audio2 from '../assets/audios/pg84_audio2.mp3';
import pg84_audio3 from '../assets/audios/pg84_audio3.mp3';
import pg84_audio4 from '../assets/audios/pg84_audio4.mp3';
import pg84_audio5 from '../assets/audios/pg84_audio5.mp3';
import pg84_audio6 from '../assets/audios/pg84_audio6.mp3';
import pg84_audio7 from '../assets/audios/pg84_audio7.mp3';
import pg84_audio8 from '../assets/audios/pg84_audio8.mp3';
import pg84_audio9 from '../assets/audios/pg84_audio9.mp3';
import pg84_audio10 from '../assets/audios/pg84_audio10.mp3';

const audioMap = {

    global_learning_le_e,
    global_learning_le_p,
    global_affirmativee,
    global_affirmativep,
    global_negativee,
    global_negativep,

    pg84_audio1,
    pg84_audio2,
    pg84_audio3,
    pg84_audio4,
    pg84_audio5,
    pg84_audio6,
    pg84_audio7,
    pg84_audio8,
    pg84_audio9,
    pg84_audio10,
};


const Pagina84 = () => {
    const [inputValues, setInputValues] = useState(Array(10).fill(''));
    const [results, setResults] = useState(Array(10).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});

    const correctAnswers = [
        'is', 'am', 'are', 'is', 'is',
        'is not', 'are not', 'is not', 'are not', 'is not'
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
        <div className={styles.pg84Container}>
            <header className={styles.pg84Header}>
                <h1 className={styles.pg84H1}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles.pg84HeaderIcon}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles.pg84HeaderIcon}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
                <h2 className={styles.pg84H2}>Complete the sentences in the Simple Present Form of Verb Be <br /> Complete as frases no Presente Simples do verbo "To Be" (ser/estar).
                </h2>
            </header>
            <main className={styles.pg84Main}>
                <div className={styles.pg84tabelaAfirmativaContainer}>
                    <div className={styles.pg84tableHeaderAfirmativa}>AFIRMATIVA</div>
                    <table className={styles.pg84styledTableAfirmativa}>
                        <thead>
                            <tr className={styles.pg84celulatable}>
                                <th>Sujeito</th>
                                <th>Verbo Auxiliar</th>
                                <th>Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className={styles.pg84ContainerQuestoes}>
                    <div className={styles.pg84Questions1}>
                        <p className={styles.pg84ATituloQuestion}>
                            Affirmative:
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles.pg84HeaderIcon}
                                onClick={() => playAudio("global_affirmativee")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles.pg84HeaderIcon}
                                onClick={() => playAudio("global_affirmativep")}
                            />
                        </p>
                        {[
                            "The sky ____ blue.",
                            "I ____ an artist.",
                            "The children ____ excited about the field trip.",
                            "That restaurant ____ famous for its pizza.",
                            "My sister ____ kind-hearted."
                        ].map((question, index) => {
                            const audioKey = `pg84_audio${index + 1}`;

                            return (
                                <div key={index} className={styles.pg84Question}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(97 + index)}.</strong> {question.split('____')[0]}
                                        </em>
                                    </span>
                                    <div className={styles.pg84InputContainer}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles.pg84InputBox}
                                        />
                                    </div>
                                    <span><em>{question.split('____')[1]}</em></span>
                                    <div className={styles.pg84IconsContainer}>
                                        {results[index] !== null && (
                                            <img
                                                src={results[index] ? correct_icon : wrong_icon}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles.pg84CheckmarkImage}
                                            />
                                        )}

                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles.pg84AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />

                                        <img
                                            src={slow_audio_icon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles.pg84AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg84Pulsing : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}


                    </div>
                    <div className={styles.pg84ContainerImagem}> <img className={styles.pg84imagem} src={pagina84_imagem1} alt="" /></div>
                </div>
                <aside className={styles.pg84Aside}>
                    <div className={styles.pg84Asidecontainer}>
                        <div className={styles.pg84AsideNotes1}>
                            <img className={styles.pg84AsideImgNotes} src={pg84IconNotes} alt="" />
                            <p>Study Note</p>
                        </div>
                        <div className={styles.pg84AsideNotes2}>
                            <p>
                                In these sentences, "is" is used with singular subjects (the sky, I, that restaurant, my sister) while
                                "are" is used with plural subjects (the children).
                            </p>
                        </div>
                    </div>
                </aside>
                <div className={styles.pg84tabelaNegativaContainer}>
                    <div className={styles.pg84tableHeaderNegativa}>NEGATIVA</div>
                    <table className={styles.pg84styledTableNegativa}>
                        <thead>
                            <tr className={styles.pg84celulatable}>
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
                <div className={styles.pg84ContainerQuestoes}>

                    <div className={styles.pg84Questions2}>
                        <p className={styles.pg84ATituloQuestion}>
                            Negative:
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles.pg84HeaderIcon}
                                onClick={() => playAudio("global_negativee")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles.pg84HeaderIcon}
                                onClick={() => playAudio("global_negativep")}
                            />
                        </p>

                        {[
                            "It ____ easy to learn a new language.",
                            "They ____ interested in sports.",
                            "The soup ____ hot enough.",
                            "My keys ____ on the table.",
                            "She ____ a fan of horror movies."
                        ].map((question, index) => {
                            const audioKey = `pg84_audio${index + 6}`;

                            return (
                                <div key={index + 5} className={styles.pg84Question}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(102 + index)}.</strong> {question.split('____')[0]}
                                        </em>
                                    </span>
                                    <div className={styles.pg84InputContainer}>
                                        <input
                                            type="text"
                                            value={inputValues[index + 5]}
                                            onChange={(e) => handleInputChange(e.target.value, index + 5)}
                                            className={styles.pg84InputBox}
                                        />
                                    </div>
                                    <span><em>{question.split('____')[1]}</em></span>
                                    <div className={styles.pg84IconsContainer}>
                                        {results[index + 5] !== null && (
                                            <img
                                                src={results[index + 5] ? correct_icon : wrong_icon}
                                                alt={results[index + 5] ? "Correct" : "Incorrect"}
                                                className={styles.pg84CheckmarkImage}
                                            />
                                        )}

                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles.pg84AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />

                                        <img
                                            src={slow_audio_icon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles.pg84AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg84Pulsing : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                    <div className={styles.pg84ContainerImagem}><img className={styles.pg84imagem} src={pagina84_imagem2} alt="" /></div>
                </div>
                <aside className={styles.pg84Aside}>
                    <div className={styles.pg84Asidecontainer}>
                        <div className={styles.pg84AsideNotes1}>
                            <img className={styles.pg84AsideImgNotes} src={pg84IconNotes} alt="" />
                            <p>Study Note</p>
                        </div>
                        <div className={styles.pg84AsideNotes2}>
                            <p>
                                "Not" is used to negate the meaning. The verb "be" is conjugated as "is not" for singular
                                subjects (it, the soup, she) and "are not" for plural subjects (they, my keys).
                            </p>
                        </div>
                    </div>
                </aside>
            </main>
            <button className={styles.pg84CheckButton} onClick={handleCheckClick}><em>Check</em></button>
        </div>
    );
};

export default Pagina84;
