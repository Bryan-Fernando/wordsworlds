import React, { useState, useRef } from 'react';

import styles from './pagina7.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import white_play_icon from '../assets/icons/white_play_icon.png'

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
import traducaoAudio1 from '../assets/audios/pg7_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg7_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg7_trad3.mp3';
import pg7Audio1 from '../assets/audios/pg7_audio1.mp3';
import pg7Audio2 from '../assets/audios/pg7_audio2.mp3';
import pg7Audio3 from '../assets/audios/pg7_audio3.mp3';

const Pagina7 = () => {
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
            <div className={styles.pg7Container}>
                <header className={styles.pg7Header}>
                    <h1 className={styles.pg7AudioText}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles.pg7Icon}
                            onClick={() => playAudio(global_grammar)}
                        />
                    </h1>
                    <h2 className={styles.pg7AudioText} style={{ color: "black" }}>
                        Simple Present (Presente Simples)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles.pg7Icon}
                            onClick={() => playAudio(global_simple_present)}
                        />
                    </h2>
                    <h3 className={styles.pg7AudioText}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese Audio"
                            className={styles.pg7Icon}
                            onClick={() => playAudio(global_verbo_to_be)}
                        />
                    </h3>
                </header>

                <main className={styles.pg7Main}>
                    <div>
                        <div
                            className={styles.pg7TableHeader}
                            onClick={() => playAudio(interrogativa_audio)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={white_play_icon}
                                alt="White Icon"
                                className={styles.page__icon__left}
                            />
                            AFFIRMATIVE INTERROGATIVE
                        </div>
                        <table className={styles.pg7StyledTable}>
                            <colgroup>
                                <col className={styles.pg7Sujeito} />
                                <col className={styles.pg7verbo_auxiliar} />
                                <col className={styles.pg7Adverbio} />
                                <col className={styles.pg7Verbo} />
                                <col className={styles.pg7ObjetivoComplemento} />
                                <col className={styles.pg7Traducao} />
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
                                        Object  <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Translation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        className={styles.pg7Sujeito}
                                        onClick={() => playAudio(pg7Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Am
                                    </td>
                                    <td
                                        className={styles.pg7verbo_auxiliar}
                                        onClick={() => playAudio(pg7Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        I
                                    </td>
                                    <td className={styles.pg7Adverbio}></td>
                                    <td className={styles.pg7Verbo}></td>
                                    <td
                                        className={styles.pg7ObjetivoComplemento}
                                        onClick={() => playAudio(pg7Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        a good student?
                                    </td>
                                    <td
                                        className={styles.pg7Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu sou um bom aluno?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg7Sujeito}
                                        onClick={() => playAudio(pg7Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Am
                                    </td>
                                    <td
                                        className={styles.pg7verbo_auxiliar}
                                        onClick={() => playAudio(pg7Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        I
                                    </td>
                                    <td className={styles.pg7Adverbio}></td>
                                    <td className={styles.pg7Verbo}></td>
                                    <td
                                        className={styles.pg7ObjetivoComplemento}
                                        onClick={() => playAudio(pg7Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        In class A or B?
                                    </td>
                                    <td
                                        className={styles.pg7Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu estou na sala de aula (turma/classe) A ou B?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg7Sujeito}
                                        onClick={() => playAudio(pg7Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Am
                                    </td>
                                    <td
                                        className={styles.pg7verbo_auxiliar}
                                        onClick={() => playAudio(pg7Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        I
                                    </td>
                                    <td className={styles.pg7Adverbio}></td>
                                    <td className={styles.pg7Verbo}></td>
                                    <td
                                        className={styles.pg7ObjetivoComplemento}
                                        onClick={() => playAudio(pg7Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        over 3?
                                    </td>
                                    <td
                                        className={styles.pg7Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu tenho mais de 3 anos?
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.pg7StyledTable}>
                            <colgroup>
                                <col className={styles.pg7Sujeito} />
                                <col className={styles.pg7verbo_auxiliar} />
                                <col className={styles.pg7Adverbio} />
                                <col className={styles.pg7Verbo} />
                                <col className={styles.pg7ObjetivoComplemento} />
                                <col className={styles.pg7Traducao} />
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
                                        Object  <br /> Complement
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
                                                    className={styles.pg7InputCell}
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

export default Pagina7;
