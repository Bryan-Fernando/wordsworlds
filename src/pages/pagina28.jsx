import React, { useState, useRef } from 'react';
import styles from './pagina28.module.css';
import interrogativaAAudio from '../assets/audios/interrogativaA.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import areAudio from '../assets/audios/are_B.mp3';
import weAudio from '../assets/audios/we_B.mp3';
import goodStudentsAudio from '../assets/audios/goodstudentsINT.mp3';
import lateAudio from '../assets/audios/lateINT.mp3';
import fourOrFiveYearsAudio from '../assets/audios/4or5INT.mp3';
import traducaoAudio1 from '../assets/audios/pg28_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg28_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg28_trad3.mp3';

const Pagina28 = () => {
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
            <div className={styles.Pg28Container}>
                <header className={styles.Pg28Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg28HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg28Main}>
                    <div>
                        <div
                            className={styles.Pg28TableHeader}
                            onClick={() => playAudio(interrogativaAAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            INTERROGATIVA AFIRMATIVA
                        </div>
                        <table className={styles.Pg28StyledTable}>
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
                                        className={styles.Pg28VerboAuxiliar}
                                        onClick={() => playAudio(areAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Are
                                    </td>
                                    <td
                                        className={styles.Pg28Sujeito}
                                        onClick={() => playAudio(weAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        we
                                    </td>
                                    <td className={styles.Pg28Adverbio}></td>
                                    <td className={styles.Pg28Verbo}></td>
                                    <td
                                        className={styles.Pg28ObjetivoComplemento}
                                        onClick={() => playAudio(goodStudentsAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        good students?
                                    </td>
                                    <td
                                        className={styles.Pg28Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Somos bons alunos?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg28VerboAuxiliar}
                                        onClick={() => playAudio(areAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Are
                                    </td>
                                    <td
                                        className={styles.Pg28Sujeito}
                                        onClick={() => playAudio(weAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        we
                                    </td>
                                    <td className={styles.Pg28Adverbio}></td>
                                    <td className={styles.Pg28Verbo}></td>
                                    <td
                                        className={styles.Pg28ObjetivoComplemento}
                                        onClick={() => playAudio(lateAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        late?
                                    </td>
                                    <td
                                        className={styles.Pg28Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Estamos atrasados?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg28VerboAuxiliar}
                                        onClick={() => playAudio(areAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Are
                                    </td>
                                    <td
                                        className={styles.Pg28Sujeito}
                                        onClick={() => playAudio(weAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        we
                                    </td>
                                    <td className={styles.Pg28Adverbio}></td>
                                    <td className={styles.Pg28Verbo}></td>
                                    <td
                                        className={styles.Pg28ObjetivoComplemento}
                                        onClick={() => playAudio(fourOrFiveYearsAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        4 or 5 years old?
                                    </td>
                                    <td
                                        className={styles.Pg28Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Temos 4 ou 5 anos?
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg28StyledTable}>
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
                                                    className={styles.Pg28InputCell}
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

export default Pagina28;
