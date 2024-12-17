import React, { useState, useRef } from 'react';
import styles from './pagina15.module.css';
import negativaAudio from '../assets/audios/negativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg15Audio1 from '../assets/audios/pg15_audio1.mp3';
import pg15Audio2 from '../assets/audios/pg15_audio2.mp3';
import pg15Audio3 from '../assets/audios/pg15_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg15_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg15_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg15_trad3.mp3';

const Pagina15 = () => {
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
            <div className={styles.Pg15Container}>
                <header className={styles.Pg15Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg15HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg15Main}>
                    <div>
                        <div
                            className={styles.Pg15TableHeader}
                            onClick={() => playAudio(negativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            NEGATIVE
                        </div>
                        <table className={styles.Pg15StyledTable}>
                            <colgroup>
                                <col className={styles.Pg15Sujeito} />
                                <col className={styles.Pg15VerboAuxiliar} />
                                <col className={styles.Pg15Adverbio} />
                                <col className={styles.Pg15Verbo} />
                                <col className={styles.Pg15ObjetivoComplemento} />
                                <col className={styles.Pg15Traducao} />
                            </colgroup> 
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br /> Adverb</th>
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
                                        className={styles.Pg15Sujeito}
                                        onClick={() => playAudio(pg15Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        He
                                    </td>
                                    <td
                                        className={styles.Pg15VerboAuxiliar}
                                        onClick={() => playAudio(pg15Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        is
                                    </td>
                                    <td
                                        className={styles.Pg15Adverbio}
                                        onClick={() => playAudio(pg15Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.Pg15Verbo}></td>
                                    <td
                                        className={styles.Pg15ObjetivoComplemento}
                                        onClick={() => playAudio(pg15Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Mr. Smith
                                    </td>
                                    <td
                                        className={styles.Pg15Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ele não é o senhor Smith
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg15Sujeito}
                                        onClick={() => playAudio(pg15Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        He
                                    </td>
                                    <td
                                        className={styles.Pg15VerboAuxiliar}
                                        onClick={() => playAudio(pg15Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        isn't
                                    </td>
                                    <td className={styles.Pg15Adverbio}></td>
                                    <td className={styles.Pg15Verbo}></td>
                                    <td
                                        className={styles.Pg15ObjetivoComplemento}
                                        onClick={() => playAudio(pg15Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        at the bank
                                    </td>
                                    <td
                                        className={styles.Pg15Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você não está no banco
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg15Sujeito}
                                        onClick={() => playAudio(pg15Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        He
                                    </td>
                                    <td
                                        className={styles.Pg15VerboAuxiliar}
                                        onClick={() => playAudio(pg15Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        ain't
                                    </td>
                                    <td className={styles.Pg15Adverbio}></td>
                                    <td className={styles.Pg15Verbo}></td>
                                    <td
                                        className={styles.Pg15ObjetivoComplemento}
                                        onClick={() => playAudio(pg15Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        29 years old
                                    </td>
                                    <td
                                        className={styles.Pg15Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você não tem 29 anos
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.Pg15StyledTable}>
                            <colgroup>
                                <col className={styles.Pg15Sujeito} />
                                <col className={styles.Pg15VerboAuxiliar} />
                                <col className={styles.Pg15Adverbio} />
                                <col className={styles.Pg15Verbo} />
                                <col className={styles.Pg15ObjetivoComplemento} />
                                <col className={styles.Pg15Traducao} />
                            </colgroup> 
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br /> Adverb</th>
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
                                                    className={styles.Pg15InputCell}
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

export default Pagina15;
