import React, { useState, useRef } from 'react';
import styles from './pagina6.module.css';
import negativaAudio from '../assets/audios/negativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/Objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import traducaoAudio1 from '../assets/audios/pg6_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg6_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg6_trad3.mp3';
import iAudio from '../assets/audios/i.mp3';
import amAudio from '../assets/audios/am.mp3'; 
import notAudio from '../assets/audios/not_B.mp3';
import aint from '../assets/audios/aint_B.mp3';
import atWorkAudio from '../assets/audios/atwork.mp3';
import yearsOldAudio from '../assets/audios/yearsOldB.mp3';

const Pagina6 = () => {
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
            <div className={styles.Pg6Container}>
                <header className={styles.Pg6Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg6HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg6Main}>
                    <div>
                        <div
                            className={styles.Pg6TableHeader}
                            onClick={() => playAudio(negativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            NEGATIVA
                        </div>
                        <table className={styles.Pg6StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br />Advérbio</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verbo(s)</th>
                                    <th
                                        onClick={() => playAudio(objetoComplementoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Objeto <br /> Complemento
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Tradução</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        className={styles.Pg6Sujeito}
                                        onClick={() => playAudio(iAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        I
                                    </td>
                                    <td
                                        className={styles.Pg6VerboAuxiliar}
                                        onClick={() => playAudio(amAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        am
                                    </td>
                                    <td
                                        className={styles.Pg6Adverbio}
                                        onClick={() => playAudio(notAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.Pg6Verbo}></td>
                                    <td className={styles.Pg6ObjetivoComplemento}></td>
                                    <td
                                        className={styles.Pg6Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu não sou ____
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg6Sujeito}
                                        onClick={() => playAudio(iAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        I
                                    </td>
                                    <td
                                        className={styles.Pg6VerboAuxiliar}
                                        onClick={() => playAudio(amAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        am
                                    </td>
                                    <td
                                        className={styles.Pg6Adverbio}
                                        onClick={() => playAudio(notAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.Pg6Verbo}></td>
                                    <td
                                        className={styles.Pg6ObjetivoComplemento}
                                        onClick={() => playAudio(atWorkAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        at work
                                    </td>
                                    <td
                                        className={styles.Pg6Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu não estou no trabalho
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg6Sujeito}
                                        onClick={() => playAudio(iAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        I
                                    </td>
                                    <td
                                        className={styles.Pg6VerboAuxiliar}
                                        onClick={() => playAudio(amAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        am
                                    </td>
                                    <td
                                        className={styles.Pg6Adverbio}
                                        onClick={() => playAudio(notAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.Pg6Verbo}></td>
                                    <td
                                        className={styles.Pg6ObjetivoComplemento}
                                        onClick={() => playAudio(yearsOldAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        years old
                                    </td>
                                    <td
                                        className={styles.Pg6Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu não tenho ____ anos de idade
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg6Sujeito}
                                        onClick={() => playAudio(iAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        I
                                    </td>
                                    <td onClick={() => playAudio(aint)} style={{ cursor: 'pointer' }} className={styles.Pg6VerboAuxiliar}>ain't</td>
                                    <td className={styles.Pg6Adverbio}></td>
                                    <td className={styles.Pg6Verbo}></td>
                                    <td className={styles.Pg6ObjetivoComplemento}></td>
                                    <td
                                        className={styles.Pg6Traducao}
                                        onClick={() => playAudio(traducaoAudio4)}
                                        style={{ cursor: 'pointer' }}
                                    ></td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg6StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br /> Advérbio</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verbo(s)</th>
                                    <th
                                        onClick={() => playAudio(objetoComplementoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Objeto <br /> Complemento
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Tradução</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValues.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    id={`input-${rowIndex}-${colIndex}`}
                                                    className={styles.Pg6InputCell}
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

export default Pagina6;
