import React, { useState, useRef } from 'react';

import styles from './pagina27.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import white_play_icon from '../assets/icons/white_play_icon.png'

import global_verbo_to_be from '../assets/audios/global_verbo_to_be.mp3';
import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present from '../assets/audios/global_simple_present.mp3';
import negativaAudio from '../assets/audios/negativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg27Audio1 from '../assets/audios/pg27_audio1.mp3';
import pg27Audio2 from '../assets/audios/pg27_audio2.mp3';
import pg27Audio3 from '../assets/audios/pg27_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg27_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg27_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg27_trad3.mp3';

const Pagina27 = () => {
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
            <div className={styles.pg27Container}>
                <header className={styles.pg27Header}>
                    <h1 className={styles.pg27AudioText}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles.pg27Icon}
                            onClick={() => playAudio(global_grammar)}
                        />
                    </h1>
                    <h2 className={styles.pg27AudioText} style={{ color: "black" }}>
                        Simple Present (Presente Simples)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles.pg27Icon}
                            onClick={() => playAudio(global_simple_present)}
                        />
                    </h2>
                    <h3 className={styles.pg27AudioText}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese Audio"
                            className={styles.pg27Icon}
                            onClick={() => playAudio(global_verbo_to_be)}
                        />
                    </h3>
                </header>
                <main className={styles.pg27Main}>
                    <div>
                        <div
                            className={styles.pg27TableHeader}
                            onClick={() => playAudio(negativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={white_play_icon}
                                alt="White icon"
                                className={styles.page__icon__left}
                            />
                            NEGATIVE
                        </div>
                        <table className={styles.pg27StyledTable}>
                            <colgroup>
                                <col className={styles.pg27Sujeito} />
                                <col className={styles.pg27verbo_auxiliar} />
                                <col className={styles.pg27Adverbio} />
                                <col className={styles.pg27Verbo} />
                                <col className={styles.pg27ObjetivoComplemento} />
                                <col className={styles.pg27Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
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
                                        className={styles.pg27Sujeito}
                                        onClick={() => playAudio(pg27Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        We
                                    </td>
                                    <td
                                        className={styles.pg27verbo_auxiliar}
                                        onClick={() => playAudio(pg27Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        are
                                    </td>
                                    <td
                                        className={styles.pg27Adverbio}
                                        onClick={() => playAudio(pg27Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.pg27Verbo}></td>
                                    <td
                                        className={styles.pg27ObjetivoComplemento}
                                        onClick={() => playAudio(pg27Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        from Brazil
                                    </td>
                                    <td
                                        className={styles.pg27Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Nós não somos do Brasil
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg27Sujeito}
                                        onClick={() => playAudio(pg27Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        We
                                    </td>
                                    <td
                                        className={styles.pg27verbo_auxiliar}
                                        onClick={() => playAudio(pg27Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        aren't
                                    </td>
                                    <td className={styles.pg27Adverbio}></td>
                                    <td className={styles.pg27Verbo}></td>
                                    <td
                                        className={styles.pg27ObjetivoComplemento}
                                        onClick={() => playAudio(pg27Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        at the ( cinema/the movie/theater )
                                    </td>
                                    <td
                                        className={styles.pg27Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Nós não estamos no cinema
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg27Sujeito}
                                        onClick={() => playAudio(pg27Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        We
                                    </td>
                                    <td
                                        className={styles.pg27verbo_auxiliar}
                                        onClick={() => playAudio(pg27Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        ain't
                                    </td>
                                    <td className={styles.pg27Adverbio}></td>
                                    <td className={styles.pg27Verbo}></td>
                                    <td
                                        className={styles.pg27ObjetivoComplemento}
                                        onClick={() => playAudio(pg27Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        15 and 16 years old
                                    </td>
                                    <td
                                        className={styles.pg27Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Nós não temos 15 e 16 anos de idade
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.pg27StyledTable}>
                            <colgroup>
                                <col className={styles.pg27Sujeito} />
                                <col className={styles.pg27verbo_auxiliar} />
                                <col className={styles.pg27Adverbio} />
                                <col className={styles.pg27Verbo} />
                                <col className={styles.pg27ObjetivoComplemento} />
                                <col className={styles.pg27Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
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
                                                    className={styles.pg27InputCell}
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

export default Pagina27;
