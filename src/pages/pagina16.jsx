import React, { useState, useRef } from 'react';
import styles from './pagina16.module.css';
import interrogativaAudio from '../assets/audios/interrogativaA.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import isAudio from '../assets/audios/is_G.mp3';
import heAudio from '../assets/audios/he_G.mp3';
import mrSmithAudio from '../assets/audios/mrsmithINT.mp3';
import atTheBankAudio from '../assets/audios/atBankINT.mp3';
import twentyNineYearsOldAudio from '../assets/audios/29YearsINT.mp3';
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
                            INTERROGATIVA AFIRMATIVA
                        </div>
                        <table className={styles.Pg16StyledTable}>
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
                                        className={styles.Pg16VerboAuxiliar}
                                        onClick={() => playAudio(isAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Is
                                    </td>
                                    <td
                                        className={styles.Pg16Sujeito}
                                        onClick={() => playAudio(heAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        he
                                    </td>
                                    <td className={styles.Pg16Adverbio}></td>
                                    <td className={styles.Pg16Verbo}></td>
                                    <td
                                        className={styles.Pg16ObjetivoComplemento}
                                        onClick={() => playAudio(mrSmithAudio)}
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
                                        onClick={() => playAudio(isAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Is
                                    </td>
                                    <td
                                        className={styles.Pg16Sujeito}
                                        onClick={() => playAudio(heAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        he
                                    </td>
                                    <td className={styles.Pg16Adverbio}></td>
                                    <td className={styles.Pg16Verbo}></td>
                                    <td
                                        className={styles.Pg16ObjetivoComplemento}
                                        onClick={() => playAudio(atTheBankAudio)}
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
                                        onClick={() => playAudio(isAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Is
                                    </td>
                                    <td
                                        className={styles.Pg16Sujeito}
                                        onClick={() => playAudio(heAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        he
                                    </td>
                                    <td className={styles.Pg16Adverbio}></td>
                                    <td className={styles.Pg16Verbo}></td>
                                    <td
                                        className={styles.Pg16ObjetivoComplemento}
                                        onClick={() => playAudio(twentyNineYearsOldAudio)}
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
