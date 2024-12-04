import React, { useState, useRef } from 'react';
import styles from './pagina21.module.css';
import interrogativaNegativaAudio from '../assets/audios/interrogativaN.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import isAudio from '../assets/audios/is_G.mp3';
import sheAudio from '../assets/audios/she_G.mp3';
import notAudio from '../assets/audios/not.mp3';
import isntAudio from '../assets/audios/isnt_G.mp3';
import aintAudio from '../assets/audios/aint_G.mp3';
import missDeboraAudio from '../assets/audios/missDebINT.mp3';
import atTheGymAudio from '../assets/audios/atgymINT.mp3';
import twentySevenYearsOldAudio from '../assets/audios/27yearsINT.mp3';
import traducaoAudio1 from '../assets/audios/pg21_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg21_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg21_trad3.mp3';

const Pagina21 = () => {
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
            <div className={styles.Pg21Container}>
                <header className={styles.Pg21Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg21HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg21Main}>
                    <div>
                        <div
                            className={styles.Pg21TableHeader}
                            onClick={() => playAudio(interrogativaNegativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            INTERROGATIVA NEGATIVA
                        </div>
                        <table className={styles.Pg21StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
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
                                        className={styles.Pg21VerboAuxiliar}
                                        onClick={() => playAudio(isAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Is
                                    </td>
                                    <td
                                        className={styles.Pg21Sujeito}
                                        onClick={() => playAudio(sheAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        she
                                    </td>
                                    <td
                                        className={styles.Pg21Adverbio}
                                        onClick={() => playAudio(notAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.Pg21Verbo}></td>
                                    <td
                                        className={styles.Pg21ObjetivoComplemento}
                                        onClick={() => playAudio(missDeboraAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Miss Debora?
                                    </td>
                                    <td
                                        className={styles.Pg21Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ela não é a Srta. Debora?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg21VerboAuxiliar}
                                        onClick={() => playAudio(aintAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ain't
                                    </td>
                                    <td
                                        className={styles.Pg21Sujeito}
                                        onClick={() => playAudio(sheAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        she
                                    </td>
                                    <td className={styles.Pg21Adverbio}></td>
                                    <td className={styles.Pg21Verbo}></td>
                                    <td
                                        className={styles.Pg21ObjetivoComplemento}
                                        onClick={() => playAudio(atTheGymAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        at the gym?
                                    </td>
                                    <td
                                        className={styles.Pg21Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ela não está na academia?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg21VerboAuxiliar}
                                        onClick={() => playAudio(isntAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Isn't
                                    </td>
                                    <td
                                        className={styles.Pg21Sujeito}
                                        onClick={() => playAudio(sheAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        she
                                    </td>
                                    <td className={styles.Pg21Adverbio}></td>
                                    <td className={styles.Pg21Verbo}></td>
                                    <td
                                        className={styles.Pg21ObjetivoComplemento}
                                        onClick={() => playAudio(twentySevenYearsOldAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        27 years old?
                                    </td>
                                    <td
                                        className={styles.Pg21Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ela não tem 27 anos?
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.Pg21StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
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
                                                    className={styles.Pg21InputCell}
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

export default Pagina21;
