import React, { useState, useRef } from 'react';
import styles from './pagina22.module.css';
import afirmativaAudio from '../assets/audios/afirmativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg22Audio1 from '../assets/audios/pg22_audio1.mp3';
import pg22Audio2 from '../assets/audios/pg22_audio2.mp3';
import pg22Audio3 from '../assets/audios/pg22_audio3.mp3';
import pg22Audio4 from '../assets/audios/pg22_audio4.mp3';
import traducaoAudio1 from '../assets/audios/pg22_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg22_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg22_trad3.mp3';
import traducaoAudio4 from '../assets/audios/pg22_trad4.mp3';

const Pagina22 = () => {
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
            <div className={styles.pg22Container}>
                <header className={styles.pg22Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.pg22HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.pg22Main}>
                    <div>
                        <div
                            className={styles.pg22TableHeader}
                            onClick={() => playAudio(afirmativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            AFFIRMATIVE
                        </div>
                        <table className={styles.pg22StyledTable}>
                            <colgroup>
                                <col className={styles.pg22Sujeito} />
                                <col className={styles.pg22VerboAuxiliar} />
                                <col className={styles.pg22Adverbio} />
                                <col className={styles.pg22Verbo} />
                                <col className={styles.pg22ObjetivoComplemento} />
                                <col className={styles.pg22Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Adverb</th>
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
                                        className={styles.pg22Sujeito}
                                        onClick={() => playAudio(pg22Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        It
                                    </td>
                                    <td
                                        className={styles.pg22VerboAuxiliar}
                                        onClick={() => playAudio(pg22Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        is
                                    </td>
                                    <td className={styles.pg22Adverbio}></td>
                                    <td className={styles.pg22Verbo}></td>
                                    <td
                                        className={styles.pg22ObjetivoComplemento}
                                        onClick={() => playAudio(pg22Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        (hot)
                                    </td>
                                    <td
                                        className={styles.pg22Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Está calor / quente. É quente
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg22Sujeito}
                                        onClick={() => playAudio(pg22Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        It
                                    </td>
                                    <td
                                        className={styles.pg22VerboAuxiliar}
                                        onClick={() => playAudio(pg22Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        is
                                    </td>
                                    <td className={styles.pg22Adverbio}></td>
                                    <td className={styles.pg22Verbo}></td>
                                    <td
                                        className={styles.pg22ObjetivoComplemento}
                                        onClick={() => playAudio(pg22Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        (next to the library)
                                    </td>
                                    <td
                                        className={styles.pg22Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Está/Fica ao lado da biblioteca
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg22Sujeito}
                                        onClick={() => playAudio(pg22Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        It
                                    </td>
                                    <td
                                        className={styles.pg22VerboAuxiliar}
                                        onClick={() => playAudio(pg22Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        is
                                    </td>
                                    <td className={styles.pg22Adverbio}></td>
                                    <td className={styles.pg22Verbo}></td>
                                    <td
                                        className={styles.pg22ObjetivoComplemento}
                                        onClick={() => playAudio(pg22Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        (okay)
                                    </td>
                                    <td
                                        className={styles.pg22Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Está tudo bem
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg22Sujeito}
                                        onClick={() => playAudio(pg22Audio4)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        It
                                    </td>
                                    <td
                                        className={styles.pg22VerboAuxiliar}
                                        onClick={() => playAudio(pg22Audio4)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        is
                                    </td>
                                    <td className={styles.pg22Adverbio}></td>
                                    <td className={styles.pg22Verbo}></td>
                                    <td
                                        className={styles.pg22ObjetivoComplemento}
                                        onClick={() => playAudio(pg22Audio4)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        (3 years old)
                                    </td>
                                    <td
                                        className={styles.pg22Traducao}
                                        onClick={() => playAudio(traducaoAudio4)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Tem 3 anos
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.pg22StyledTable}>
                            <colgroup>
                                <col className={styles.pg22Sujeito} />
                                <col className={styles.pg22VerboAuxiliar} />
                                <col className={styles.pg22Adverbio} />
                                <col className={styles.pg22Verbo} />
                                <col className={styles.pg22ObjetivoComplemento} />
                                <col className={styles.pg22Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Adverb</th>
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
                                                    className={styles.pg22InputCell}
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

export default Pagina22;
