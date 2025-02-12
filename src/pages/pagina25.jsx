import React, { useState, useRef } from 'react';

import styles from './pagina25.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import global_verbo_to_be from '../assets/audios/global_verbo_to_be.mp3';
import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present from '../assets/audios/global_simple_present.mp3';
import interrogativa_nAudio from '../assets/audios/interrogativa_n.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg25Audio1 from '../assets/audios/pg25_audio1.mp3';
import pg25Audio2 from '../assets/audios/pg25_audio2.mp3';
import pg25Audio3 from '../assets/audios/pg25_audio3.mp3';
import pg25Audio4 from '../assets/audios/pg25_audio4.mp3';
import traducaoAudio1 from '../assets/audios/pg25_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg25_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg25_trad3.mp3';
import traducaoAudio4 from '../assets/audios/pg25_trad4.mp3';

const Pagina25 = () => {
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
            <div className={styles.pg25Container}>
                <header className={styles.pg25Header}>
                    <h1 className={styles.pg25AudioText}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles.pg25Icon}
                            onClick={() => playAudio(global_grammar)}
                        />
                    </h1>
                    <h2 className={styles.pg25AudioText} style={{ color: "black" }}>
                        Simple Present (Presente Simples)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles.pg25Icon}
                            onClick={() => playAudio(global_simple_present)}
                        />
                    </h2>
                    <h3 className={styles.pg25AudioText}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese Audio"
                            className={styles.pg25Icon}
                            onClick={() => playAudio(global_verbo_to_be)}
                        />
                    </h3>
                </header>
                <main className={styles.pg25Main}>
                    <div>
                        <div
                            className={styles.pg25TableHeader}
                            onClick={() => playAudio(interrogativa_nAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles.page__icon__left}
                            />
                            NEGATIVE INTERROGATIVE
                        </div>
                        <table className={styles.pg25StyledTable}>
                            <colgroup>
                                <col className={styles.pg25Sujeito} />
                                <col className={styles.pg25verbo_auxiliar} />
                                <col className={styles.pg25Adverbio} />
                                <col className={styles.pg25Verbo} />
                                <col className={styles.pg25ObjetivoComplemento} />
                                <col className={styles.pg25Traducao} />
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
                                        className={styles.pg25verbo_auxiliar}
                                        onClick={() => playAudio(pg25Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Is
                                    </td>
                                    <td
                                        className={styles.pg25Sujeito}
                                        onClick={() => playAudio(pg25Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        it
                                    </td>
                                    <td
                                        className={styles.pg25Adverbio}
                                        onClick={() => playAudio(pg25Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.pg25Verbo}></td>
                                    <td
                                        className={styles.pg25ObjetivoComplemento}
                                        onClick={() => playAudio(pg25Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        a Ford 68?
                                    </td>
                                    <td
                                        className={styles.pg25Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Não é um Ford 68?
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td
                                        className={styles.pg25verbo_auxiliar}
                                        onClick={() => playAudio(pg25Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Isn't
                                    </td>
                                    <td
                                        className={styles.pg25Sujeito}
                                        onClick={() => playAudio(pg25Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        it
                                    </td>
                                    <td className={styles.pg25Adverbio}></td>
                                    <td className={styles.pg25Verbo}></td>
                                    <td
                                        className={styles.pg25ObjetivoComplemento}
                                        onClick={() => playAudio(pg25Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        ok?
                                    </td>
                                    <td
                                        className={styles.pg25Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Não está tudo bem?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg25verbo_auxiliar}
                                        onClick={() => playAudio(pg25Audio4)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Isn't
                                    </td>
                                    <td
                                        className={styles.pg25Sujeito}
                                        onClick={() => playAudio(pg25Audio4)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        it
                                    </td>
                                    <td className={styles.pg25Adverbio}></td>
                                    <td className={styles.pg25Verbo}></td>
                                    <td
                                        className={styles.pg25ObjetivoComplemento}
                                        onClick={() => playAudio(pg25Audio4)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        3 years old?
                                    </td>
                                    <td
                                        className={styles.pg25Traducao}
                                        onClick={() => playAudio(traducaoAudio4)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Não tem 3 anos?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg25verbo_auxiliar}
                                        onClick={() => playAudio(pg25Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Ain't
                                    </td>
                                    <td
                                        className={styles.pg25Sujeito}
                                        onClick={() => playAudio(pg25Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        it
                                    </td>
                                    <td className={styles.pg25Adverbio}></td>
                                    <td className={styles.pg25Verbo}></td>
                                    <td
                                        className={styles.pg25ObjetivoComplemento}
                                        onClick={() => playAudio(pg25Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        next to the library?
                                    </td>
                                    <td
                                        className={styles.pg25Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Não está ao lado da biblioteca?
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.pg25StyledTable}>
                            <colgroup>
                                <col className={styles.pg25Sujeito} />
                                <col className={styles.pg25verbo_auxiliar} />
                                <col className={styles.pg25Adverbio} />
                                <col className={styles.pg25Verbo} />
                                <col className={styles.pg25ObjetivoComplemento} />
                                <col className={styles.pg25Traducao} />
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
                                                    className={styles.pg25InputCell}
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

export default Pagina25;
