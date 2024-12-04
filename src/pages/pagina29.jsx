import React, { useState, useRef } from 'react';
import styles from './pagina29.module.css';
import interrogativaNAudio from '../assets/audios/interrogativaN.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import areAudio from '../assets/audios/are_B.mp3';
import weAudio from '../assets/audios/we_B.mp3';
import notAudio from '../assets/audios/not_B.mp3';
import arentAudio from '../assets/audios/arent_B.mp3';
import aintAudio from '../assets/audios/aint_B.mp3';
import goodStudentsAudio from '../assets/audios/goodstudentsINT.mp3';
import lateAudio from '../assets/audios/lateINT.mp3';
import fourOrFiveYearsAudio from '../assets/audios/4or5INT.mp3';
import traducaoAudio1 from '../assets/audios/pg29_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg29_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg29_trad3.mp3';

const Pagina29 = () => {
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
            <div className={styles.Pg29Container}>
                <header className={styles.Pg29Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg29HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg29Main}>
                    <div>
                        <div
                            className={styles.Pg29TableHeader}
                            onClick={() => playAudio(interrogativaNAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            INTERROGATIVA NEGATIVA
                        </div>
                        <table className={styles.Pg29StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>
                                        'Not'<br /> Advérbio
                                    </th>
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
                                        className={styles.Pg29VerboAuxiliar}
                                        onClick={() => playAudio(areAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Are
                                    </td>
                                    <td
                                        className={styles.Pg29Sujeito}
                                        onClick={() => playAudio(weAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        we
                                    </td>
                                    <td
                                        className={styles.Pg29Adverbio}
                                        onClick={() => playAudio(notAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.Pg29Verbo}></td>
                                    <td
                                        className={styles.Pg29ObjetivoComplemento}
                                        onClick={() => playAudio(goodStudentsAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        good students?
                                    </td>
                                    <td
                                        className={styles.Pg29Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Não somos bons alunos?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg29VerboAuxiliar}
                                        onClick={() => playAudio(arentAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Aren't
                                    </td>
                                    <td
                                        className={styles.Pg29Sujeito}
                                        onClick={() => playAudio(weAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        we
                                    </td>
                                    <td className={styles.Pg29Adverbio}></td>
                                    <td className={styles.Pg29Verbo}></td>
                                    <td
                                        className={styles.Pg29ObjetivoComplemento}
                                        onClick={() => playAudio(lateAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        late?
                                    </td>
                                    <td
                                        className={styles.Pg29Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Não estamos atrasados?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg29VerboAuxiliar}
                                        onClick={() => playAudio(aintAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ain't
                                    </td>
                                    <td
                                        className={styles.Pg29Sujeito}
                                        onClick={() => playAudio(weAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        we
                                    </td>
                                    <td className={styles.Pg29Adverbio}></td>
                                    <td className={styles.Pg29Verbo}></td>
                                    <td
                                        className={styles.Pg29ObjetivoComplemento}
                                        onClick={() => playAudio(fourOrFiveYearsAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        4 and 5 years old?
                                    </td>
                                    <td
                                        className={styles.Pg29Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Não temos 4 ou 5 anos?
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg29StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not' <br />Advérbio</th>
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
                                                    className={styles.Pg29InputCell}
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

export default Pagina29;
