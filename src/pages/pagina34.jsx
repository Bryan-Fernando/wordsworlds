import React, { useState, useRef } from 'react';
import styles from './pagina34.module.css';
import negativaAudio from '../assets/audios/negativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import iAudio from '../assets/audios/i_B.mp3';
import heAudio from '../assets/audios/he_G.mp3';
import not from '../assets/audios/not_B.mp3';
import itAudio from '../assets/audios/it_G.mp3';
import imAudio from "../assets/audios/'m_B.mp3";
import isntAudio from '../assets/audios/isnt_G.mp3';
import aintAudio from '../assets/audios/aint_G.mp3';
import spanishTeacherAudio from '../assets/audios/theSpanish.mp3';
import atWorkAudio from '../assets/audios/atWork.mp3';
import twentySevenYearsOldAudio from '../assets/audios/27YearsOld_G.mp3';
import sunnyAudio from '../assets/audios/sunny.mp3';
import traducaoAudio1 from '../assets/audios/pg34_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg34_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg34_trad3.mp3';
import traducaoAudio4 from '../assets/audios/pg34_trad4.mp3';

const Pagina34 = () => {
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
            <div className={styles.Pg34Container}>
                <header className={styles.Pg34Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg34HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg34Main}>
                    <div>
                        <div
                            className={styles.Pg34TableHeader}
                            onClick={() => playAudio(negativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            NEGATIVA
                        </div>
                        <table className={styles.Pg34StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>
                                        Sujeito
                                    </th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>
                                        'Not' <br /> Advérbio
                                    </th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verbo(s)</th>
                                    <th onClick={() => playAudio(objetoComplementoAudio)} style={{ cursor: 'pointer' }}>
                                        Objeto <br /> Complemento
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>
                                        Tradução
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles.Pg34Sujeito} onClick={() => playAudio(iAudio)} style={{ cursor: 'pointer' }}>
                                        I
                                    </td>
                                    <td className={styles.Pg34VerboAuxiliar} onClick={() => playAudio(imAudio)} style={{ cursor: 'pointer' }}>
                                        'm
                                    </td>
                                    <td className={styles.Pg34Adverbio} onClick={() => playAudio(not)} style={{ cursor: 'pointer' }}>
                                        not
                                    </td>
                                    <td className={styles.Pg34Verbo}></td>
                                    <td className={styles.Pg34ObjetivoComplemento} onClick={() => playAudio(spanishTeacherAudio)} style={{ cursor: 'pointer' }}>
                                        the Spanish teacher
                                    </td>
                                    <td className={styles.Pg34Traducao} onClick={() => playAudio(traducaoAudio1)} style={{ cursor: 'pointer' }}>
                                        Eu não sou o professor de espanhol
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg34Sujeito} onClick={() => playAudio(heAudio)} style={{ cursor: 'pointer' }}>
                                        He
                                    </td>
                                    <td className={styles.Pg34VerboAuxiliar} onClick={() => playAudio(isntAudio)} style={{ cursor: 'pointer' }}>
                                        isn't
                                    </td>
                                    <td className={styles.Pg34Adverbio}></td>
                                    <td className={styles.Pg34Verbo}></td>
                                    <td className={styles.Pg34ObjetivoComplemento} onClick={() => playAudio(atWorkAudio)} style={{ cursor: 'pointer' }}>
                                        at work
                                    </td>
                                    <td className={styles.Pg34Traducao} onClick={() => playAudio(traducaoAudio2)} style={{ cursor: 'pointer' }}>
                                        Ele não está no trabalho
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg34Sujeito} onClick={() => playAudio(itAudio)} style={{ cursor: 'pointer' }}>
                                        It
                                    </td>
                                    <td className={styles.Pg34VerboAuxiliar} onClick={() => playAudio(isntAudio)} style={{ cursor: 'pointer' }}>
                                        isn't
                                    </td>
                                    <td className={styles.Pg34Adverbio}></td>
                                    <td className={styles.Pg34Verbo}></td>
                                    <td className={styles.Pg34ObjetivoComplemento} onClick={() => playAudio(twentySevenYearsOldAudio)} style={{ cursor: 'pointer' }}>
                                        27 years old
                                    </td>
                                    <td className={styles.Pg34Traducao} onClick={() => playAudio(traducaoAudio3)} style={{ cursor: 'pointer' }}>
                                        Ela não tem 27 anos
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg34Sujeito} onClick={() => playAudio(heAudio)} style={{ cursor: 'pointer' }}>
                                        He
                                    </td>
                                    <td className={styles.Pg34VerboAuxiliar} onClick={() => playAudio(aintAudio)} style={{ cursor: 'pointer' }}>
                                        ain't
                                    </td>
                                    <td className={styles.Pg34Adverbio}></td>
                                    <td className={styles.Pg34Verbo}></td>
                                    <td className={styles.Pg34ObjetivoComplemento} onClick={() => playAudio(sunnyAudio)} style={{ cursor: 'pointer' }}>
                                        sunny
                                    </td>
                                    <td className={styles.Pg34Traducao} onClick={() => playAudio(traducaoAudio4)} style={{ cursor: 'pointer' }}>
                                        Não está ensolarado
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg34StyledTable}>
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
                                                    className={styles.Pg34InputCell}
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

export default Pagina34;
