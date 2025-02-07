import React, { useState, useRef } from 'react';
import styles from './pagina6.module.css';

import globalVerboToBe from '../assets/audios/global_verboToBe.mp3';
import globalGrammar from '../assets/audios/global_grammar.mp3';
import globalSimplePresent from '../assets/audios/global_simplePresent.mp3';

import negativaAudio from '../assets/audios/negativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/Objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import traducaoAudio1 from '../assets/audios/pg6_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg6_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg6_trad3.mp3';
import traducaoAudio4 from '../assets/audios/pg6_trad4.mp3';
import pg6Audio1 from '../assets/audios/pg6_audio1.mp3';
import pg6Audio2 from '../assets/audios/pg6_audio2.mp3';
import pg6Audio3 from '../assets/audios/pg6_audio3.mp3';
import pg6Audio4 from '../assets/audios/pg6_audio4.mp3';

import pg6IconNotes from '../assets/Icons/Icon-Notes.png';

const Pagina6 = () => {
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

    return (
        <div className={styles.page}>
            <div className={styles.page__container}>
                <header className={styles.page__header}>
                    <h1
                        className={styles.page__header__title}
                        onClick={() => playAudio(globalGrammar)}
                    >
                        Grammar
                    </h1>
                    <h2
                        className={styles.page__header__subtitle}
                        onClick={() => playAudio(globalSimplePresent)}
                        style={{ color: 'black' }}
                    >
                        Simple Present (Presente Simples)
                    </h2>
                    <h3
                        className={styles.page__header__description}
                        onClick={() => playAudio(globalVerboToBe)}
                    >
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                    </h3>
                </header>

                <main className={styles.page__main}>
                    <div>
                        <div
                            className={styles.page__table__header}
                            onClick={() => playAudio(negativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            NEGATIVE
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
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br />Adverb</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th
                                        onClick={() => playAudio(objetoComplementoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Translation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        className={styles.page__table__subject}
                                        onClick={() => playAudio(pg6Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        I
                                    </td>
                                    <td
                                        className={styles.page__table__auxiliary}
                                        onClick={() => playAudio(pg6Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        am
                                    </td>
                                    <td
                                        className={styles.page__table__adverb}
                                        onClick={() => playAudio(pg6Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.page__table__verb}></td>
                                    <td className={styles.page__table__complement}></td>
                                    <td
                                        className={styles.page__table__translation}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu não sou ____
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.page__table__subject}
                                        onClick={() => playAudio(pg6Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        I
                                    </td>
                                    <td
                                        className={styles.page__table__auxiliary}
                                        onClick={() => playAudio(pg6Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        am
                                    </td>
                                    <td
                                        className={styles.page__table__adverb}
                                        onClick={() => playAudio(pg6Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.page__table__verb}></td>
                                    <td
                                        className={styles.page__table__complement}
                                        onClick={() => playAudio(pg6Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        at work
                                    </td>
                                    <td
                                        className={styles.page__table__translation}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu não estou no trabalho
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.page__table__subject}
                                        onClick={() => playAudio(pg6Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        I
                                    </td>
                                    <td
                                        className={styles.page__table__auxiliary}
                                        onClick={() => playAudio(pg6Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        am
                                    </td>
                                    <td
                                        className={styles.page__table__adverb}
                                        onClick={() => playAudio(pg6Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.page__table__verb}></td>
                                    <td
                                        className={styles.page__table__complement}
                                        onClick={() => playAudio(pg6Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        __ years old
                                    </td>
                                    <td
                                        className={styles.page__table__translation}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu não tenho ____ anos de idade
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.page__table__subject}
                                        onClick={() => playAudio(pg6Audio4)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        I
                                    </td>
                                    <td onClick={() => playAudio(pg6Audio4)} style={{ cursor: 'pointer', textAlign: 'center' }} className={styles.page__table__auxiliary}>ain't</td>
                                    <td className={styles.page__table__adverb}></td>
                                    <td className={styles.page__table__verb}></td>
                                    <td className={styles.page__table__complement}></td>
                                    <td
                                        className={styles.page__table__translation}
                                        onClick={() => playAudio(traducaoAudio4)}
                                        style={{ cursor: 'pointer' }}
                                    >Eu não estou</td>
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
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br /> Adverb</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th
                                        onClick={() => playAudio(objetoComplementoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Translation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValues.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
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
                <aside className={styles.page__aside}>
                    <div className={styles.page__aside__notes1}>
                        <img className={styles.page__aside__img} src={pg6IconNotes} alt="" />
                        <p>NOTE: Forma simples / Coloquial</p>
                    </div>
                    <div className={styles.page__aside__notes2}>
                        <p>I ain’t = non - standard or dialected English . (I am not) <br />
                            I aren’t = non - standard or dialected English. (I am not)
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina6;