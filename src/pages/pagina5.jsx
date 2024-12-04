import React, { useState, useRef } from 'react';
import styles from './pagina5.module.css';
import afirmativaAudio from '../assets/audios/afirmativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/Objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import iAudio from '../assets/audios/i.mp3';
import amAudio from '../assets/audios/am.mp3';
import atWorkAudio from '../assets/audios/atwork.mp3';
import yearsOldAudio from '../assets/audios/yearsOldB.mp3';

const Pagina5 = () => {
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
            <div className={styles.Pg5Container}>
                <header className={styles.Pg5Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg5HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg5Main}>
                    <div>
                        <div
                            className={styles.Pg5TableHeader}
                            onClick={() => playAudio(afirmativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            AFIRMATIVA
                        </div>
                        <table className={styles.Pg5StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Advérbio</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verbo(s)</th>
                                    <th
                                        onClick={() => playAudio(objetoComplementoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Objeto <br /> Complemento
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>
                                        Tradução
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        className={styles.Pg5Sujeito}
                                        onClick={() => playAudio(iAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        I
                                    </td>
                                    <td
                                        className={styles.Pg5VerboAuxiliar}
                                        onClick={() => playAudio(amAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        am
                                    </td>
                                    <td className={styles.Pg5Adverbio}></td>
                                    <td className={styles.Pg5Verbo}></td>
                                    <td className={styles.Pg5ObjetivoComplemento}></td>
                                    <td className={styles.Pg5Traducao}></td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg5Sujeito}
                                        onClick={() => playAudio(iAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        I
                                    </td>
                                    <td
                                        className={styles.Pg5VerboAuxiliar}
                                        onClick={() => playAudio(amAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        am
                                    </td>
                                    <td className={styles.Pg5Adverbio}></td>
                                    <td className={styles.Pg5Verbo}></td>
                                    <td
                                        className={styles.Pg5ObjetivoComplemento}
                                        onClick={() => playAudio(atWorkAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        at work
                                    </td>
                                    <td className={styles.Pg5Traducao}></td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg5Sujeito}
                                        onClick={() => playAudio(iAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        I
                                    </td>
                                    <td
                                        className={styles.Pg5VerboAuxiliar}
                                        onClick={() => playAudio(amAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        am
                                    </td>
                                    <td className={styles.Pg5Adverbio}></td>
                                    <td className={styles.Pg5Verbo}></td>
                                    <td
                                        className={styles.Pg5ObjetivoComplemento}
                                        onClick={() => playAudio(yearsOldAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        years old
                                    </td>
                                    <td className={styles.Pg5Traducao}></td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg5StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Advérbio</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verbo(s)</th>
                                    <th
                                        onClick={() => playAudio(objetoComplementoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Objeto <br /> Complemento
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>
                                        Tradução
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValues.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((value, colIndex) => (
                                            <td
                                                key={colIndex}
                                                style={{ cursor: value ? 'pointer' : 'default' }}
                                            >
                                                <textarea
                                                    id={`input-${rowIndex}-${colIndex}`}
                                                    className={styles.Pg5InputCell}
                                                    value={value}
                                                    rows="1"
                                                    onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
                                                    style={{
                                                        resize: 'none',
                                                        overflowWrap: 'break-word',
                                                        wordWrap: 'break-word',
                                                    }}
                                                    onClick={() => value && playAudio(value)}
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

export default Pagina5;
