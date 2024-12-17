import React, { useState, useRef } from 'react';
import styles from './pagina16.module.css';
import interrogativaAudio from '../assets/audios/interrogativaA.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
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
            <div className={styles.Pg16Container}>
                <header className={styles.Pg16Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg16HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg16Main}>
                    <div>
                        <div
                            className={styles.Pg16TableHeader}
                            onClick={() => playAudio(interrogativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            AFFIRMATIVE INTERROGATIVE
                        </div>
                        <table className={styles.Pg16StyledTable}>
                            <colgroup>
                                <col className={styles.Pg16Sujeito} />
                                <col className={styles.Pg16VerboAuxiliar} />
                                <col className={styles.Pg16Adverbio} />
                                <col className={styles.Pg16Verbo} />
                                <col className={styles.Pg16ObjetivoComplemento} />
                                <col className={styles.Pg16Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
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
                                        className={styles.Pg16VerboAuxiliar}
                                        onClick={() => playAudio(pg16Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Is
                                    </td>
                                    <td
                                        className={styles.Pg16Sujeito}
                                        onClick={() => playAudio(pg16Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        he
                                    </td>
                                    <td className={styles.Pg16Adverbio}></td>
                                    <td className={styles.Pg16Verbo}></td>
                                    <td
                                        className={styles.Pg16ObjetivoComplemento}
                                        onClick={() => playAudio(pg16Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Mr. Smith?
                                    </td>
                                    <td
                                        className={styles.Pg16Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ele é o Sr. Smith?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg16VerboAuxiliar}
                                        onClick={() => playAudio(pg16Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Is
                                    </td>
                                    <td
                                        className={styles.Pg16Sujeito}
                                        onClick={() => playAudio(pg16Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        he
                                    </td>
                                    <td className={styles.Pg16Adverbio}></td>
                                    <td className={styles.Pg16Verbo}></td>
                                    <td
                                        className={styles.Pg16ObjetivoComplemento}
                                        onClick={() => playAudio(pg16Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        at the bank?
                                    </td>
                                    <td
                                        className={styles.Pg16Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ele está no banco?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg16VerboAuxiliar}
                                        onClick={() => playAudio(pg16Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Is
                                    </td>
                                    <td
                                        className={styles.Pg16Sujeito}
                                        onClick={() => playAudio(pg16Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        he
                                    </td>
                                    <td className={styles.Pg16Adverbio}></td>
                                    <td className={styles.Pg16Verbo}></td>
                                    <td
                                        className={styles.Pg16ObjetivoComplemento}
                                        onClick={() => playAudio(pg16Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        29 years old?
                                    </td>
                                    <td
                                        className={styles.Pg16Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ele tem 29 anos?
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.Pg16StyledTable}>
                            <colgroup>
                                <col className={styles.Pg16Sujeito} />
                                <col className={styles.Pg16VerboAuxiliar} />
                                <col className={styles.Pg16Adverbio} />
                                <col className={styles.Pg16Verbo} />
                                <col className={styles.Pg16ObjetivoComplemento} />
                                <col className={styles.Pg16Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
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
                                                    className={styles.Pg16InputCell}
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
