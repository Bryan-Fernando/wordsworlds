import React, { useState, useRef } from 'react';

import styles from './pagina6.module.css';

import pg6IconNotes from '../assets/icons/notes_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import white_play_icon from '../assets/icons/white_play_icon.png'

import globalVerboToBe from '../assets/audios/global_verbo_to_be.mp3';
import globalGrammar from '../assets/audios/global_grammar.mp3';
import globalSimplePresent from '../assets/audios/global_simple_present.mp3';
import negativaAudio from '../assets/audios/negativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import traducaoAudio1 from '../assets/audios/pg6_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg6_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg6_trad3.mp3';
import traducaoAudio4 from '../assets/audios/pg6_trad4.mp3';
import pg6Audio1 from '../assets/audios/pg6_audio1.mp3';
import pg6Audio2 from '../assets/audios/pg6_audio2.mp3';
import pg6Audio3 from '../assets/audios/pg6_audio3.mp3';
import pg6Audio4 from '../assets/audios/pg6_audio4.mp3';

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
                            onClick={() => playAudio(negativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={white_play_icon}
                                alt="White Icon"
                                className={styles.page__icon__left}
                            />
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
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br />Adverb</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th
                                        onClick={() => playAudio(objeto_complemento_audio)}
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
                                    <td className={styles.page__table__complement} onClick={() => playAudio(pg6Audio1)}
                                        style={{ cursor: 'pointer'}}>Pedro</td>
                                    <td
                                        className={styles.page__table__translation}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu não sou Pedro
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
                                        (Sixteen) years old
                                    </td>
                                    <td
                                        className={styles.page__table__translation}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu não tenho (dezesseis) anos de idade
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
                                    <td className={styles.page__table__complement} onClick={() => playAudio(pg6Audio4)} style={{ cursor: 'pointer'}}>ready yet</td>
                                    <td
                                        className={styles.page__table__translation}
                                        onClick={() => playAudio(traducaoAudio4)}
                                        style={{ cursor: 'pointer' }}
                                    >Eu não estou pronto ainda</td>
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
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br /> Adverb</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th
                                        onClick={() => playAudio(objeto_complemento_audio)}
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
                        <p>I am + not = <span style={{ fontWeight: "bold" }}> I'm not &nbsp;&nbsp;&nbsp;</span>  is + not = <span style={{ fontWeight: "bold" }}>isn't&nbsp;&nbsp;&nbsp;</span >  are + not = <span style={{ fontWeight: "bold" }}>aren't</span >
                            <br />
                            <span style={{ fontWeight: "bold", color: "#A61C28" }}>I - He - She - It - We - You - They podem usar</span> <span style={{ fontWeight: "bold" }}>"ain't" na forma contraída.</span >
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina6;