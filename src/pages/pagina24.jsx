import React, { useState, useRef } from 'react';
import styles from './pagina24.module.css';
import interrogativaAAudio from '../assets/audios/interrogativaA.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import isAudio from '../assets/audios/is_G.mp3';
import itAudio from '../assets/audios/it_G.mp3';
import aFord68Audio from '../assets/audios/68INT.mp3';
import nextToLibraryAudio from '../assets/audios/nextToThe.mp3';
import okayAudio from '../assets/audios/okay.mp3';
import threeYearsOldAudio from '../assets/audios/3yearsINT.mp3';
import traducaoAudio1 from '../assets/audios/pg24_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg24_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg24_trad3.mp3';
import traducaoAudio4 from '../assets/audios/pg24_trad4.mp3';

const Pagina24 = () => {
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
            <div className={styles.Pg24Container}>
                <header className={styles.Pg24Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg24HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg24Main}>
                    <div>
                        <div
                            className={styles.Pg24TableHeader}
                            onClick={() => playAudio(interrogativaAAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            INTERROGATIVA AFIRMATIVA
                        </div>
                        <table className={styles.Pg24StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Advérbio</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verbo(s)</th>
                                    <th onClick={() => playAudio(objetoComplementoAudio)} style={{ cursor: 'pointer' }}>
                                        Objeto <br /> Complemento
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Tradução</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        className={styles.Pg24VerboAuxiliar}
                                        onClick={() => playAudio(isAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Is
                                    </td>
                                    <td
                                        className={styles.Pg24Sujeito}
                                        onClick={() => playAudio(itAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        it
                                    </td>
                                    <td className={styles.Pg24Adverbio}></td>
                                    <td className={styles.Pg24Verbo}></td>
                                    <td
                                        className={styles.Pg24ObjetivoComplemento}
                                        onClick={() => playAudio(aFord68Audio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        a Ford 68?
                                    </td>
                                    <td
                                        className={styles.Pg24Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        É um Ford 68?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg24VerboAuxiliar}
                                        onClick={() => playAudio(isAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Is
                                    </td>
                                    <td
                                        className={styles.Pg24Sujeito}
                                        onClick={() => playAudio(itAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        it
                                    </td>
                                    <td className={styles.Pg24Adverbio}></td>
                                    <td className={styles.Pg24Verbo}></td>
                                    <td
                                        className={styles.Pg24ObjetivoComplemento}
                                        onClick={() => playAudio(nextToLibraryAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        next to the library?
                                    </td>
                                    <td
                                        className={styles.Pg24Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Está / Fica ao lado da biblioteca?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg24VerboAuxiliar}
                                        onClick={() => playAudio(isAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Is
                                    </td>
                                    <td
                                        className={styles.Pg24Sujeito}
                                        onClick={() => playAudio(itAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        it
                                    </td>
                                    <td className={styles.Pg24Adverbio}></td>
                                    <td className={styles.Pg24Verbo}></td>
                                    <td
                                        className={styles.Pg24ObjetivoComplemento}
                                        onClick={() => playAudio(okayAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        ok?
                                    </td>
                                    <td
                                        className={styles.Pg24Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Está tudo bem?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg24VerboAuxiliar}
                                        onClick={() => playAudio(isAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Is
                                    </td>
                                    <td
                                        className={styles.Pg24Sujeito}
                                        onClick={() => playAudio(itAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        it
                                    </td>
                                    <td className={styles.Pg24Adverbio}></td>
                                    <td className={styles.Pg24Verbo}></td>
                                    <td
                                        className={styles.Pg24ObjetivoComplemento}
                                        onClick={() => playAudio(threeYearsOldAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        3 years old?
                                    </td>
                                    <td
                                        className={styles.Pg24Traducao}
                                        onClick={() => playAudio(traducaoAudio4)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Tem 3 anos?
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.Pg24StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Advérbio</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verbo(s)</th>
                                    <th onClick={() => playAudio(objetoComplementoAudio)} style={{ cursor: 'pointer' }}>
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
                                                    className={styles.Pg24InputCell}
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

export default Pagina24;