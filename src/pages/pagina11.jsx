import React, { useState, useRef } from 'react';
import styles from './pagina11.module.css';
import afirmativaAudio from '../assets/audios/afirmativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import youAndPedroAudio from '../assets/audios/youAndPedro.mp3';
import areAudio from '../assets/audios/are_B.mp3';
import greatStudentsAudio from '../assets/audios/greatStudents.mp3';
import youAllAudio from '../assets/audios/youAll.mp3';
import inClassBAudio from '../assets/audios/inClassB.mp3';
import allOfYouAudio from '../assets/audios/allOfYou.mp3';
import twelveYearsOldAudio from '../assets/audios/12YearsOld.mp3';
import traducaoAudio1 from '../assets/audios/pg11_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg11_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg11_trad3.mp3';

const Pagina11 = () => {
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
            <div className={styles.Pg11Container}>
                <header className={styles.Pg11Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg11HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg11Main}>
                    <div>
                        <div
                            className={styles.Pg11TableHeader}
                            onClick={() => playAudio(afirmativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            AFIRMATIVA
                        </div>
                        <table className={styles.Pg11StyledTable}>
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
                                        className={styles.Pg11Sujeito}
                                        onClick={() => playAudio(youAndPedroAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        You and Pedro
                                    </td>
                                    <td
                                        className={styles.Pg11VerboAuxiliar}
                                        onClick={() => playAudio(areAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        are
                                    </td>
                                    <td className={styles.Pg11Adverbio}></td>
                                    <td className={styles.Pg11Verbo}></td>
                                    <td
                                        className={styles.Pg11ObjetivoComplemento}
                                        onClick={() => playAudio(greatStudentsAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        great students
                                    </td>
                                    <td
                                        className={styles.Pg11Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você e Pedro são ótimos alunos.
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg11Sujeito}
                                        onClick={() => playAudio(youAllAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        You all
                                    </td>
                                    <td
                                        className={styles.Pg11VerboAuxiliar}
                                        onClick={() => playAudio(areAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        are
                                    </td>
                                    <td className={styles.Pg11Adverbio}></td>
                                    <td className={styles.Pg11Verbo}></td>
                                    <td
                                        className={styles.Pg11ObjetivoComplemento}
                                        onClick={() => playAudio(inClassBAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        in class B
                                    </td>
                                    <td
                                        className={styles.Pg11Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Vocês todos estão na classe B.
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg11Sujeito}
                                        onClick={() => playAudio(allOfYouAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        All of You
                                    </td>
                                    <td
                                        className={styles.Pg11VerboAuxiliar}
                                        onClick={() => playAudio(areAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        are
                                    </td>
                                    <td className={styles.Pg11Adverbio}></td>
                                    <td className={styles.Pg11Verbo}></td>
                                    <td
                                        className={styles.Pg11ObjetivoComplemento}
                                        onClick={() => playAudio(twelveYearsOldAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        12 years old
                                    </td>
                                    <td
                                        className={styles.Pg11Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Todos vocês têm 12 anos de idade.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.Pg11StyledTable}>
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
                                                    id={`input-${rowIndex}-${colIndex}`}
                                                    className={styles.Pg11InputCell}
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

export default Pagina11;
