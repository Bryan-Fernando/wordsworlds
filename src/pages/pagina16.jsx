import React, { useState, useRef } from 'react';

import styles from './pagina16.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import global_verbo_to_be from '../assets/audios/global_verbo_to_be.mp3';
import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present from '../assets/audios/global_simple_present.mp3';
import interrogativa_audio from '../assets/audios/interrogativa_a.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg16Audio1 from '../assets/audios/pg16_audio1.mp3';
import pg16Audio2 from '../assets/audios/pg16_audio2.mp3';
import pg16Audio3 from '../assets/audios/pg16_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg16_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg16_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg16_trad3.mp3';

const Pagina16 = () => {
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
        <div>
            <div className={styles.pg16Container}>
                <header className={styles.pg16Header}>
                    <h1 className={styles.pg16AudioText}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles.pg16Icon}
                            onClick={() => playAudio(global_grammar)}
                        />
                    </h1>
                    <h2 className={styles.pg16AudioText} style={{ color: "black" }}>
                        Simple Present (Presente Simples)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles.pg16Icon}
                            onClick={() => playAudio(global_simple_present)}
                        />
                    </h2>
                    <h3 className={styles.pg16AudioText}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese Audio"
                            className={styles.pg16Icon}
                            onClick={() => playAudio(global_verbo_to_be)}
                        />
                    </h3>
                </header>
                <main className={styles.pg16Main}>
                    <div>
                        <div
                            className={styles.pg16TableHeader}
                            onClick={() => playAudio(interrogativa_audio)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles.page__icon__left}
                            />
                            AFFIRMATIVE INTERROGATIVE
                        </div>
                        <table className={styles.pg16StyledTable}>
                            <colgroup>
                                <col className={styles.pg16Sujeito} />
                                <col className={styles.pg16verbo_auxiliar} />
                                <col className={styles.pg16Adverbio} />
                                <col className={styles.pg16Verbo} />
                                <col className={styles.pg16ObjetivoComplemento} />
                                <col className={styles.pg16Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Adverb</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: 'pointer' }}>
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Translation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        className={styles.pg16verbo_auxiliar}
                                        onClick={() => playAudio(pg16Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Is
                                    </td>
                                    <td
                                        className={styles.pg16Sujeito}
                                        onClick={() => playAudio(pg16Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        he
                                    </td>
                                    <td className={styles.pg16Adverbio}></td>
                                    <td className={styles.pg16Verbo}></td>
                                    <td
                                        className={styles.pg16ObjetivoComplemento}
                                        onClick={() => playAudio(pg16Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Mr. Smith?
                                    </td>
                                    <td
                                        className={styles.pg16Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ele é o Sr. Smith?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg16verbo_auxiliar}
                                        onClick={() => playAudio(pg16Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Is
                                    </td>
                                    <td
                                        className={styles.pg16Sujeito}
                                        onClick={() => playAudio(pg16Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        he
                                    </td>
                                    <td className={styles.pg16Adverbio}></td>
                                    <td className={styles.pg16Verbo}></td>
                                    <td
                                        className={styles.pg16ObjetivoComplemento}
                                        onClick={() => playAudio(pg16Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        at the bank?
                                    </td>
                                    <td
                                        className={styles.pg16Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ele está no banco?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg16verbo_auxiliar}
                                        onClick={() => playAudio(pg16Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Is
                                    </td>
                                    <td
                                        className={styles.pg16Sujeito}
                                        onClick={() => playAudio(pg16Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        he
                                    </td>
                                    <td className={styles.pg16Adverbio}></td>
                                    <td className={styles.pg16Verbo}></td>
                                    <td
                                        className={styles.pg16ObjetivoComplemento}
                                        onClick={() => playAudio(pg16Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        29 years old?
                                    </td>
                                    <td
                                        className={styles.pg16Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ele tem 29 anos?
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.pg16StyledTable}>
                            <colgroup>
                                <col className={styles.pg16Sujeito} />
                                <col className={styles.pg16verbo_auxiliar} />
                                <col className={styles.pg16Adverbio} />
                                <col className={styles.pg16Verbo} />
                                <col className={styles.pg16ObjetivoComplemento} />
                                <col className={styles.pg16Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Adverb</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: 'pointer' }}>
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
                                                    className={styles.pg16InputCell}
                                                    value={value}
                                                    onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
                                                    rows="1"
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

export default Pagina16;
