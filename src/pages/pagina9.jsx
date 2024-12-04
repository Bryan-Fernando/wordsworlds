import React, { useState, useRef } from 'react';
import styles from './pagina9.module.css';
import afirmativaAudio from '../assets/audios/afirmativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import youAudio from '../assets/audios/you_G.mp3';
import areAudio from '../assets/audios/are_B.mp3';
import newDirectorAudio from '../assets/audios/theNewDirec.mp3';
import inClass2BAudio from '../assets/audios/inclass2b.mp3';
import only12YearsOldAudio from '../assets/audios/only12.mp3';
import traducaoAudio1 from '../assets/audios/pg9_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg9_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg9_trad3.mp3';

const Pagina9 = () => {
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
            <div className={styles.Pg9Container}>
                <header className={styles.Pg9Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg9HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg9Main}>
                    <div>
                        <div
                            className={styles.Pg9TableHeader}
                            onClick={() => playAudio(afirmativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            AFIRMATIVA
                        </div>
                        <table className={styles.Pg9StyledTable}>
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
                                        className={styles.Pg9Sujeito}
                                        onClick={() => playAudio(youAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        You
                                    </td>
                                    <td
                                        className={styles.Pg9VerboAuxiliar}
                                        onClick={() => playAudio(areAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        are
                                    </td>
                                    <td className={styles.Pg9Adverbio}></td>
                                    <td className={styles.Pg9Verbo}></td>
                                    <td
                                        className={styles.Pg9ObjetivoComplemento}
                                        onClick={() => playAudio(newDirectorAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        the new director
                                    </td>
                                    <td
                                        className={styles.Pg9Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você é o novo diretor.
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg9Sujeito}
                                        onClick={() => playAudio(youAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        You
                                    </td>
                                    <td
                                        className={styles.Pg9VerboAuxiliar}
                                        onClick={() => playAudio(areAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        are
                                    </td>
                                    <td className={styles.Pg9Adverbio}></td>
                                    <td className={styles.Pg9Verbo}></td>
                                    <td
                                        className={styles.Pg9ObjetivoComplemento}
                                        onClick={() => playAudio(inClass2BAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        in class 2-B
                                    </td>
                                    <td
                                        className={styles.Pg9Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você está na classe 2-B.
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg9Sujeito}
                                        onClick={() => playAudio(youAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        You
                                    </td>
                                    <td
                                        className={styles.Pg9VerboAuxiliar}
                                        onClick={() => playAudio(areAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        are
                                    </td>
                                    <td className={styles.Pg9Adverbio}></td>
                                    <td className={styles.Pg9Verbo}></td>
                                    <td
                                        className={styles.Pg9ObjetivoComplemento}
                                        onClick={() => playAudio(only12YearsOldAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        only 12 years old
                                    </td>
                                    <td
                                        className={styles.Pg9Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você tem apenas 12 anos de idade.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.Pg9StyledTable}>
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
                                                    className={styles.Pg9InputCell}
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

export default Pagina9;
