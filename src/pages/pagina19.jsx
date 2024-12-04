import React, { useState, useRef } from 'react';
import styles from './pagina19.module.css';
import negativaAudio from '../assets/audios/negativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import sheAudio from '../assets/audios/she_G.mp3';
import isAudio from '../assets/audios/is_G.mp3';
import notAudio from '../assets/audios/not.mp3';
import isntAudio from '../assets/audios/isnt_G.mp3';
import aintAudio from '../assets/audios/aint_G.mp3';
import missDeboraAudio from '../assets/audios/missDebora.mp3';
import atTheGymAudio from '../assets/audios/atTheGym.mp3';
import twentySevenYearsOldAudio from '../assets/audios/27YearsOld_G.mp3';
import traducaoAudio1 from '../assets/audios/pg19_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg19_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg19_trad3.mp3';

const Pagina19 = () => {
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
            <div className={styles.Pg19Container}>
                <header className={styles.Pg19Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg19HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg19Main}>
                    <div>
                        <div
                            className={styles.Pg19TableHeader}
                            onClick={() => playAudio(negativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            NEGATIVA
                        </div>
                        <table className={styles.Pg19StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br /> Advérbio</th>
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
                                        className={styles.Pg19Sujeito}
                                        onClick={() => playAudio(sheAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        She
                                    </td>
                                    <td
                                        className={styles.Pg19VerboAuxiliar}
                                        onClick={() => playAudio(isAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        is
                                    </td>
                                    <td
                                        className={styles.Pg19Adverbio}
                                        onClick={() => playAudio(notAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.Pg19Verbo}></td>
                                    <td
                                        className={styles.Pg19ObjetivoComplemento}
                                        onClick={() => playAudio(missDeboraAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Miss Debora
                                    </td>
                                    <td
                                        className={styles.Pg19Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ela não é a Srta. Debora
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg19Sujeito}
                                        onClick={() => playAudio(sheAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        She
                                    </td>
                                    <td
                                        className={styles.Pg19VerboAuxiliar}
                                        onClick={() => playAudio(isntAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        isn't
                                    </td>
                                    <td className={styles.Pg19Adverbio}></td>
                                    <td className={styles.Pg19Verbo}></td>
                                    <td
                                        className={styles.Pg19ObjetivoComplemento}
                                        onClick={() => playAudio(atTheGymAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        at the gym
                                    </td>
                                    <td
                                        className={styles.Pg19Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ela não está na academia
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg19Sujeito}
                                        onClick={() => playAudio(sheAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        She
                                    </td>
                                    <td
                                        className={styles.Pg19VerboAuxiliar}
                                        onClick={() => playAudio(aintAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        ain't
                                    </td>
                                    <td className={styles.Pg19Adverbio}></td>
                                    <td className={styles.Pg19Verbo}></td>
                                    <td
                                        className={styles.Pg19ObjetivoComplemento}
                                        onClick={() => playAudio(twentySevenYearsOldAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        27 years old
                                    </td>
                                    <td
                                        className={styles.Pg19Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ela não tem 27 anos
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.Pg19StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br /> Advérbio</th>
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
                                                    className={styles.Pg19InputCell}
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

export default Pagina19;
