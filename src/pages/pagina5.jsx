import React, { useState, useRef } from 'react';

import styles from './pagina5.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import globalVerboToBe from '../assets/audios/global_verbo_to_be.mp3';
import globalGrammar from '../assets/audios/global_grammar.mp3';
import globalSimplePresent from '../assets/audios/global_simple_present.mp3';
import afirmativaAudio from '../assets/audios/afirmativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg5Audio1 from '../assets/audios/pg5_audio1.mp3';
import pg5Audio2 from '../assets/audios/pg5_audio2.mp3';
import pg5Audio3 from '../assets/audios/pg5_audio3.mp3';



const Pagina5 = () => {
    const [inputValues, setInputValues] = useState(
        Array(6).fill(Array(6).fill(''))
    );
    const currentAudioRef = useRef(null);

    const playAudio = (audioFile) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }

        const audio = new Audio(audioFile);
        currentAudioRef.current = audio;
        audio.play();
    };

    const handleInputChange = (rowIndex, colIndex, e) => {
        const newValue = e.target.value;
        const updatedValues = inputValues.map((row, i) =>
            row.map((value, j) => (i === rowIndex && j === colIndex ? newValue : value))
        );
        setInputValues(updatedValues);
    };

    const handleRowClick = (rowIndex) => {
        switch (rowIndex) {
            case 0:
                playAudio(pg5Audio1);
                break;
            case 1:
                playAudio(pg5Audio2);
                break;
            case 2:
                playAudio(pg5Audio3);
                break;
            default:
                break;
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.page__container}>
                <header className={styles["page__header"]}>
                    <h1 className={styles["page__header__title"]}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page__icon"]}
                            onClick={() => playAudio(globalGrammar)}
                        />
                    </h1>
                    <h2
                        className={styles["page__header__subtitle"]}
                        style={{ color: "black" }}
                    >
                        Simple Present (Presente Simples)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page__icon"]}
                            onClick={() => playAudio(globalSimplePresent)}
                        />
                    </h2>
                    <h3 className={styles["page__header__description"]}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese Audio"
                            className={styles["page__icon"]}
                            onClick={() => playAudio(globalVerboToBe)}
                        />
                    </h3>
                </header>

                <main className={styles.page__main}>
                    <div>
                        <div
                            className={styles.page__table__header}
                            onClick={() => playAudio(afirmativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles.page__icon__left}
                            />
                            AFFIRMATIVE
                        </div>
                        <table className={styles.page__table}>
                            <colgroup>
                                <col className={styles.page__table__subject} />
                                <col className={styles.page__table__auxiliary} />
                                <col className={styles.page__table__adverb} />
                                <col className={styles.page__table__verb} />
                                <col className={styles.page__table__complement} />
                                <col className={styles.page__table__translation} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th
                                        onClick={() => playAudio(sujeitoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Subject
                                    </th>
                                    <th
                                        onClick={() => playAudio(verbo_auxiliarAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th
                                        onClick={() => playAudio(adverbioAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Adverb
                                    </th>
                                    <th
                                        onClick={() => playAudio(verboAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Verb(s)
                                    </th>
                                    <th
                                        onClick={() => playAudio(objeto_complemento_audio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Object <br /> Complement
                                    </th>
                                    <th
                                        onClick={() => playAudio(traducaoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Translation
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    onClick={() => handleRowClick(0)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <td className={styles.page__table__subject} style={{ textAlign: 'center' }}>I</td>
                                    <td className={styles.page__table__auxiliary} style={{ textAlign: 'center' }}>am</td>
                                    <td className={styles.page__table__adverb}></td>
                                    <td className={styles.page__table__verb}></td>
                                    <td className={styles.page__table__complement}></td>
                                    <td className={styles.page__table__translation}></td>
                                </tr>
                                <tr
                                    onClick={() => handleRowClick(1)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <td className={styles.page__table__subject} style={{ textAlign: 'center' }}>I</td>
                                    <td className={styles.page__table__auxiliary} style={{ textAlign: 'center' }}>am</td>
                                    <td className={styles.page__table__adverb}></td>
                                    <td className={styles.page__table__verb}></td>
                                    <td className={styles.page__table__complement}>at work</td>
                                    <td className={styles.page__table__translation}></td>
                                </tr>
                                <tr
                                    onClick={() => handleRowClick(2)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <td className={styles.page__table__subject} style={{ textAlign: 'center' }}>I</td>
                                    <td className={styles.page__table__auxiliary} style={{ textAlign: 'center' }}>am</td>
                                    <td className={styles.page__table__adverb}></td>
                                    <td className={styles.page__table__verb}></td>
                                    <td className={styles.page__table__complement}>__ years old</td>
                                    <td className={styles.page__table__translation}></td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.page__table}>
                            <colgroup>
                                <col className={styles.page__table__subject} />
                                <col className={styles.page__table__auxiliary} />
                                <col className={styles.page__table__adverb} />
                                <col className={styles.page__table__verb} />
                                <col className={styles.page__table__complement} />
                                <col className={styles.page__table__translation} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th
                                        onClick={() => playAudio(sujeitoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Subject
                                    </th>
                                    <th
                                        onClick={() => playAudio(verbo_auxiliarAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th
                                        onClick={() => playAudio(adverbioAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Adverb
                                    </th>
                                    <th
                                        onClick={() => playAudio(verboAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Verb(s)
                                    </th>
                                    <th
                                        onClick={() => playAudio(objeto_complemento_audio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Object <br /> Complement
                                    </th>
                                    <th
                                        onClick={() => playAudio(traducaoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Translation
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValues.map((row, rowIndex) => (
                                    <tr key={rowIndex} style={{ cursor: 'pointer' }}>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    id={`input-${rowIndex}-${colIndex}`}
                                                    className={styles.page__table__input}
                                                    value={value}
                                                    rows="1"
                                                    onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
                                                    style={{
                                                        resize: 'none',
                                                        overflowWrap: 'break-word',
                                                        wordWrap: 'break-word',
                                                    }}
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina5;