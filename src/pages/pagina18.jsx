import React, { useState, useRef } from 'react';
import styles from './pagina18.module.css';
import afirmativaAudio from '../assets/audios/afirmativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg18Audio1 from '../assets/audios/pg18_audio1.mp3';
import pg18Audio2 from '../assets/audios/pg18_audio2.mp3';
import pg18Audio3 from '../assets/audios/pg18_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg18_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg18_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg18_trad3.mp3';

const Pagina18 = () => {
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
            <div className={styles.Pg18Container}>
                <header className={styles.Pg18Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg18HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg18Main}>
                    <div>
                        <div
                            className={styles.Pg18TableHeader}
                            onClick={() => playAudio(afirmativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            AFFIRMATIVE
                        </div>
                        <table className={styles.Pg18StyledTable}>
                            <colgroup>
                                <col className={styles.Pg18Sujeito} />
                                <col className={styles.Pg18VerboAuxiliar} />
                                <col className={styles.Pg18Adverbio} />
                                <col className={styles.Pg18Verbo} />
                                <col className={styles.Pg18ObjetivoComplemento} />
                                <col className={styles.Pg18Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Adverb</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th onClick={() => playAudio(objetoComplementoAudio)} style={{ cursor: 'pointer' }}>
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Translation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        className={styles.Pg18Sujeito}
                                        onClick={() => playAudio(pg18Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        She
                                    </td>
                                    <td
                                        className={styles.Pg18VerboAuxiliar}
                                        onClick={() => playAudio(pg18Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        is
                                    </td>
                                    <td className={styles.Pg18Adverbio}></td>
                                    <td className={styles.Pg18Verbo}></td>
                                    <td
                                        className={styles.Pg18ObjetivoComplemento}
                                        onClick={() => playAudio(pg18Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Miss Debora
                                    </td>
                                    <td
                                        className={styles.Pg18Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ela é a Srta. Debora
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg18Sujeito}
                                        onClick={() => playAudio(pg18Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        She
                                    </td>
                                    <td
                                        className={styles.Pg18VerboAuxiliar}
                                        onClick={() => playAudio(pg18Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        is
                                    </td>
                                    <td className={styles.Pg18Adverbio}></td>
                                    <td className={styles.Pg18Verbo}></td>
                                    <td
                                        className={styles.Pg18ObjetivoComplemento}
                                        onClick={() => playAudio(pg18Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        at the gym
                                    </td>
                                    <td
                                        className={styles.Pg18Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ela está na academia
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg18Sujeito}
                                        onClick={() => playAudio(pg18Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        She
                                    </td>
                                    <td
                                        className={styles.Pg18VerboAuxiliar}
                                        onClick={() => playAudio(pg18Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        is
                                    </td>
                                    <td className={styles.Pg18Adverbio}></td>
                                    <td className={styles.Pg18Verbo}></td>
                                    <td
                                        className={styles.Pg18ObjetivoComplemento}
                                        onClick={() => playAudio(pg18Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        27 years old
                                    </td>
                                    <td
                                        className={styles.Pg18Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ela tem 27 anos
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.Pg18StyledTable}>
                            <colgroup>
                                <col className={styles.Pg18Sujeito} />
                                <col className={styles.Pg18VerboAuxiliar} />
                                <col className={styles.Pg18Adverbio} />
                                <col className={styles.Pg18Verbo} />
                                <col className={styles.Pg18ObjetivoComplemento} />
                                <col className={styles.Pg18Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Adverb</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th onClick={() => playAudio(objetoComplementoAudio)} style={{ cursor: 'pointer' }}>
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
                                                    className={styles.Pg18InputCell}
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

export default Pagina18;