import React, { useState, useRef } from 'react';
import styles from './pagina14.module.css';
import afirmativaAudio from '../assets/audios/afirmativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import heAudio from '../assets/audios/he_G.mp3';
import isAudio from '../assets/audios/is_G.mp3';
import mrSmithAudio from '../assets/audios/mrsmith.mp3';
import atTheBankAudio from '../assets/audios/atthebank.mp3';
import twentyNineYearsOldAudio from '../assets/audios/29yearsold.mp3';
import traducaoAudio1 from '../assets/audios/pg14_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg14_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg14_trad3.mp3';

const Pagina14 = () => {
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
            <div className={styles.Pg14Container}>
                <header className={styles.Pg14Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg14HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg14Main}>
                    <div>
                        <div
                            className={styles.Pg14TableHeader}
                            onClick={() => playAudio(afirmativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            AFIRMATIVA
                        </div>
                        <table className={styles.Pg14StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
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
                                        className={styles.Pg14Sujeito}
                                        onClick={() => playAudio(heAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        He
                                    </td>
                                    <td
                                        className={styles.Pg14VerboAuxiliar}
                                        onClick={() => playAudio(isAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        is
                                    </td>
                                    <td className={styles.Pg14Adverbio}></td>
                                    <td className={styles.Pg14Verbo}></td>
                                    <td
                                        className={styles.Pg14ObjetivoComplemento}
                                        onClick={() => playAudio(mrSmithAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Mr. Smith
                                    </td>
                                    <td
                                        className={styles.Pg14Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ele é o senhor Smith
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg14Sujeito}
                                        onClick={() => playAudio(heAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        He
                                    </td>
                                    <td
                                        className={styles.Pg14VerboAuxiliar}
                                        onClick={() => playAudio(isAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        is
                                    </td>
                                    <td className={styles.Pg14Adverbio}></td>
                                    <td className={styles.Pg14Verbo}></td>
                                    <td
                                        className={styles.Pg14ObjetivoComplemento}
                                        onClick={() => playAudio(atTheBankAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        at the bank
                                    </td>
                                    <td
                                        className={styles.Pg14Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ele está no banco
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg14Sujeito}
                                        onClick={() => playAudio(heAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        He
                                    </td>
                                    <td
                                        className={styles.Pg14VerboAuxiliar}
                                        onClick={() => playAudio(isAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        is
                                    </td>
                                    <td className={styles.Pg14Adverbio}></td>
                                    <td className={styles.Pg14Verbo}></td>
                                    <td
                                        className={styles.Pg14ObjetivoComplemento}
                                        onClick={() => playAudio(twentyNineYearsOldAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        29 years old
                                    </td>
                                    <td
                                        className={styles.Pg14Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ele tem 29 anos
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.Pg14StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
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
                                                    value={value}
                                                    onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
                                                    className={styles.Pg14InputCell}
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

export default Pagina14;