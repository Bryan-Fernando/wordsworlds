import React, { useState, useRef } from 'react';

import styles from './pagina8.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import white_play_icon from '../assets/icons/white_play_icon.png'

import interrogativa_nAudio from '../assets/audios/interrogativa_n.mp3';
import global_verbo_to_be from '../assets/audios/global_verbo_to_be.mp3';
import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present from '../assets/audios/global_simple_present.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import traducaoAudio1 from '../assets/audios/pg8_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg8_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg8_trad3.mp3';
import pg8Audio1 from '../assets/audios/pg8_audio1.mp3';
import pg8Audio2 from '../assets/audios/pg8_audio2.mp3';
import pg8Audio3 from '../assets/audios/pg8_audio3.mp3';

const Pagina8 = () => {
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
            <div className={styles.pg8Container}>
                <header className={styles.pg8Header}>
                    <h1 className={styles.pg8AudioText}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles.pg8Icon}
                            onClick={() => playAudio(global_grammar)}
                        />
                    </h1>
                    <h2 className={styles.pg8AudioText} style={{ color: "black" }}>
                        Simple Present (Presente Simples)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles.pg8Icon}
                            onClick={() => playAudio(global_simple_present)}
                        />
                    </h2>
                    <h3 className={styles.pg8AudioText}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese Audio"
                            className={styles.pg8Icon}
                            onClick={() => playAudio(global_verbo_to_be)}
                        />
                    </h3>
                </header>

                <main className={styles.pg8Main}>
                    <div>
                        <div
                            className={styles.pg8TableHeader}
                            onClick={() => playAudio(interrogativa_nAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={white_play_icon}
                                alt="White icon"
                                className={styles.page__icon__left}
                            />
                            NEGATIVE INTERROGATIVE
                        </div>
                        <table className={styles.pg8StyledTable}>
                            <colgroup>
                                <col className={styles.pg8Sujeito} />
                                <col className={styles.pg8verbo_auxiliar} />
                                <col className={styles.pg8Adverbio} />
                                <col className={styles.pg8Verbo} />
                                <col className={styles.pg8ObjetivoComplemento} />
                                <col className={styles.pg8Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br /> Adverb</th>
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
                                        className={styles.pg8Sujeito}
                                        onClick={() => playAudio(pg8Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Am
                                    </td>
                                    <td
                                        className={styles.pg8verbo_auxiliar}
                                        onClick={() => playAudio(pg8Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        I
                                    </td>
                                    <td
                                        className={styles.pg8Adverbio}
                                        onClick={() => playAudio(pg8Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.pg8Verbo}></td>
                                    <td
                                        className={styles.pg8ObjetivoComplemento}
                                        onClick={() => playAudio(pg8Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        a good student?
                                    </td>
                                    <td
                                        className={styles.pg8Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu não sou um bom aluno?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg8Sujeito}
                                        onClick={() => playAudio(pg8Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Ain't
                                    </td>
                                    <td
                                        className={styles.pg8verbo_auxiliar}
                                        onClick={() => playAudio(pg8Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        I
                                    </td>
                                    <td className={styles.pg8Adverbio}></td>
                                    <td className={styles.pg8Verbo}></td>
                                    <td
                                        className={styles.pg8ObjetivoComplemento}
                                        onClick={() => playAudio(pg8Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        In class A or B?
                                    </td>
                                    <td
                                        className={styles.pg8Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu não estou na sala de aula (turma/classe) A ou B?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg8Sujeito}
                                        onClick={() => playAudio(pg8Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Ain't
                                    </td>
                                    <td
                                        className={styles.pg8verbo_auxiliar}
                                        onClick={() => playAudio(pg8Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        I
                                    </td>
                                    <td className={styles.pg8Adverbio}></td>
                                    <td className={styles.pg8Verbo}></td>
                                    <td
                                        className={styles.pg8ObjetivoComplemento}
                                        onClick={() => playAudio(pg8Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        over 3?
                                    </td>
                                    <td
                                        className={styles.pg8Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu não tenho mais de 3 anos?
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.pg8StyledTable}>
                            <colgroup>
                                <col className={styles.pg8Sujeito} />
                                <col className={styles.pg8verbo_auxiliar} />
                                <col className={styles.pg8Adverbio} />
                                <col className={styles.pg8Verbo} />
                                <col className={styles.pg8ObjetivoComplemento} />
                                <col className={styles.pg8Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br /> Adverb</th>
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
                                                    className={styles.pg8InputCell}
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

export default Pagina8;
