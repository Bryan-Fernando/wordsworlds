import React, { useState, useRef } from 'react';
import styles from './pagina13.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import white_play_icon from '../assets/icons/white_play_icon.png'

import global_verbo_to_be from '../assets/audios/global_verbo_to_be.mp3';
import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present from '../assets/audios/global_simple_present.mp3';

import interrogativa_negativaAudio from '../assets/audios/interrogativa_n.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg13Audio1 from '../assets/audios/pg13_audio1.mp3';
import pg13Audio2 from '../assets/audios/pg13_audio2.mp3';
import pg13Audio3 from '../assets/audios/pg13_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg13_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg13_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg13_trad3.mp3';
import pg13IconNotes from '../assets/icons/notes_icon.webp';

const Pagina13 = () => {
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
            <div className={styles.pg13Container}>
                <header className={styles.pg13Header}>
                    <h1 className={styles.pg13AudioText}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles.pg13Icon}
                            onClick={() => playAudio(global_grammar)}
                        />
                    </h1>
                    <h2 className={styles.pg13AudioText} style={{ color: "black" }}>
                        Simple Present (Presente Simples)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles.pg13Icon}
                            onClick={() => playAudio(global_simple_present)}
                        />
                    </h2>
                    <h3 className={styles.pg13AudioText}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese Audio"
                            className={styles.pg13Icon}
                            onClick={() => playAudio(global_verbo_to_be)}
                        />
                    </h3>
                </header>
                <main className={styles.pg13Main}>
                    <div>
                        <div
                            className={styles.pg13TableHeader}
                            onClick={() => playAudio(interrogativa_negativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={white_play_icon}
                                alt="White icon"
                                className={styles.page__icon__left}
                            />
                            NEGATIVE INTERROGATIVE
                        </div>
                        <table className={styles.pg13StyledTable}>
                            <colgroup>
                                <col className={styles.pg13Sujeito} />
                                <col className={styles.pg13verbo_auxiliar} />
                                <col className={styles.pg13Adverbio} />
                                <col className={styles.pg13Verbo} />
                                <col className={styles.pg13ObjetivoComplemento} />
                                <col className={styles.pg13Traducao} />
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
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Translation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        className={styles.pg13verbo_auxiliar}
                                        onClick={() => playAudio(pg13Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Are
                                    </td>
                                    <td
                                        className={styles.pg13Sujeito}
                                        onClick={() => playAudio(pg13Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        you
                                    </td>
                                    <td
                                        className={styles.pg13Adverbio}
                                        onClick={() => playAudio(pg13Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.pg13Verbo}></td>
                                    <td
                                        className={styles.pg13ObjetivoComplemento}
                                        onClick={() => playAudio(pg13Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        the new director?
                                    </td>
                                    <td
                                        className={styles.pg13Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você não é o novo diretor?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg13verbo_auxiliar}
                                        onClick={() => playAudio(pg13Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Aren't
                                    </td>
                                    <td
                                        className={styles.pg13Sujeito}
                                        onClick={() => playAudio(pg13Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        you
                                    </td>
                                    <td className={styles.pg13Adverbio}></td>
                                    <td className={styles.pg13Verbo}></td>
                                    <td
                                        className={styles.pg13ObjetivoComplemento}
                                        onClick={() => playAudio(pg13Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        in class 2-B?
                                    </td>
                                    <td
                                        className={styles.pg13Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você não está na sala de aula (turma/classe) 2-B?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg13verbo_auxiliar}
                                        onClick={() => playAudio(pg13Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Ain't
                                    </td>
                                    <td
                                        className={styles.pg13Sujeito}
                                        onClick={() => playAudio(pg13Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        you
                                    </td>
                                    <td className={styles.pg13Adverbio}></td>
                                    <td className={styles.pg13Verbo}></td>
                                    <td
                                        className={styles.pg13ObjetivoComplemento}
                                        onClick={() => playAudio(pg13Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        only 12 years old?
                                    </td>
                                    <td
                                        className={styles.pg13Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você não tem apenas 12 anos?
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.pg13StyledTable}>
                            <colgroup>
                                <col className={styles.pg13Sujeito} />
                                <col className={styles.pg13verbo_auxiliar} />
                                <col className={styles.pg13Adverbio} />
                                <col className={styles.pg13Verbo} />
                                <col className={styles.pg13ObjetivoComplemento} />
                                <col className={styles.pg13Traducao} />
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
                                                    className={styles.pg13InputCell}
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
                <aside className={styles.pg13Aside}>
                    <div className={styles.pg13AsideNotes1}>
                        <img className={styles.pg13AsideImgNotes} src={pg13IconNotes} alt="" />
                        <p>NOTE: Usam a mesma terminação verbal “Are“, “Aren’t“:</p>
                    </div>
                    <div className={styles.pg13AsideNotes2}>
                        <p>
                            You <br />
                            You all <br />
                            You and Mary
                        </p>
                        <p>
                            Você <br />
                            Vocês todos <br />
                            Você e Mary
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina13;
