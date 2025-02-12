import React, { useState, useRef } from 'react';
import styles from './pagina12.module.css';

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
import pg12Audio1 from '../assets/audios/pg12_audio1.mp3';
import pg12Audio2 from '../assets/audios/pg12_audio2.mp3';
import pg12Audio3 from '../assets/audios/pg12_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg12_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg12_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg12_trad3.mp3';
import pg12IconNotes from '../assets/icons/notes_icon.webp';

const Pagina12 = () => {
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
            <div className={styles.pg12Container}>
                <header className={styles.pg12Header}>
                    <h1 className={styles.pg12AudioText}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles.pg12Icon}
                            onClick={() => playAudio(global_grammar)}
                        />
                    </h1>
                    <h2 className={styles.pg12AudioText} style={{ color: "black" }}>
                        Simple Present (Presente Simples)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles.pg12Icon}
                            onClick={() => playAudio(global_simple_present)}
                        />
                    </h2>
                    <h3 className={styles.pg12AudioText}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese Audio"
                            className={styles.pg12Icon}
                            onClick={() => playAudio(global_verbo_to_be)}
                        />
                    </h3>
                </header>
                <main className={styles.pg12Main}>
                    <div>
                        <div
                            className={styles.pg12TableHeader}
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
                        <table className={styles.pg12StyledTable}>
                            <colgroup>
                                <col className={styles.pg12Sujeito} />
                                <col className={styles.pg12verbo_auxiliar} />
                                <col className={styles.pg12Adverbio} />
                                <col className={styles.pg12Verbo} />
                                <col className={styles.pg12ObjetivoComplemento} />
                                <col className={styles.pg12Traducao} />
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
                                        className={styles.pg12verbo_auxiliar}
                                        onClick={() => playAudio(pg12Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Are
                                    </td>
                                    <td
                                        className={styles.pg12Sujeito}
                                        onClick={() => playAudio(pg12Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        you
                                    </td>
                                    <td className={styles.pg12Adverbio}></td>
                                    <td className={styles.pg12Verbo}></td>
                                    <td
                                        className={styles.pg12ObjetivoComplemento}
                                        onClick={() => playAudio(pg12Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        the new director?
                                    </td>
                                    <td
                                        className={styles.pg12Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você é o novo diretor?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg12verbo_auxiliar}
                                        onClick={() => playAudio(pg12Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Are
                                    </td>
                                    <td
                                        className={styles.pg12Sujeito}
                                        onClick={() => playAudio(pg12Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        you
                                    </td>
                                    <td className={styles.pg12Adverbio}></td>
                                    <td className={styles.pg12Verbo}></td>
                                    <td
                                        className={styles.pg12ObjetivoComplemento}
                                        onClick={() => playAudio(pg12Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        in class 2-B?
                                    </td>
                                    <td
                                        className={styles.pg12Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você está na sala de aula (turma/classe) 2-B?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg12verbo_auxiliar}
                                        onClick={() => playAudio(pg12Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Are
                                    </td>
                                    <td
                                        className={styles.pg12Sujeito}
                                        onClick={() => playAudio(pg12Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        you
                                    </td>
                                    <td className={styles.pg12Adverbio}></td>
                                    <td className={styles.pg12Verbo}></td>
                                    <td
                                        className={styles.pg12ObjetivoComplemento}
                                        onClick={() => playAudio(pg12Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        only 12 years old?
                                    </td>
                                    <td
                                        className={styles.pg12Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você tem apenas 12 anos?
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.pg12StyledTable}>
                            <colgroup>
                                <col className={styles.pg12Sujeito} />
                                <col className={styles.pg12verbo_auxiliar} />
                                <col className={styles.pg12Adverbio} />
                                <col className={styles.pg12Verbo} />
                                <col className={styles.pg12ObjetivoComplemento} />
                                <col className={styles.pg12Traducao} />
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
                                                    className={styles.pg12InputCell}
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
                <aside className={styles.pg12Aside}>
                    <div className={styles.pg12AsideNotes1}>
                        <img className={styles.pg12AsideImgNotes} src={pg12IconNotes} alt="" />
                        <p>NOTE: Usam a mesma terminação verbal “Are“, “Aren’t“:</p>
                    </div>
                    <div className={styles.pg12AsideNotes2}>
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

export default Pagina12;
