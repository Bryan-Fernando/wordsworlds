import React, { useState, useRef } from 'react';
import styles from './pagina5.module.css';
import afirmativaAudio from '../assets/audios/afirmativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/Objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg5Audio1 from '../assets/audios/pg5_audio1.mp3';
import pg5Audio2 from '../assets/audios/pg5_audio2.mp3';
import pg5Audio3 from '../assets/audios/pg5_audio3.mp3';

const Pagina5 = () => {
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

    const handleRowClick = (rowIndex) => {
        switch (rowIndex) {
            case 0:
                playAudio(pg5Audio1);
                break;
            case 1:
                playAudio(pg5Audio2);
                break;
            case 2:
                playAudio(pg5Audio3);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <div className={styles.Pg5Container}>
                <header className={styles.Pg5Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg5HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg5Main}>
                    <div>
                        <div
                            className={styles.Pg5TableHeader}
                            onClick={() => playAudio(afirmativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            AFFIRMATIVE
                        </div>
                        <table className={styles.Pg5StyledTable}>
                            <colgroup>
                                <col className={styles.Pg5Sujeito} />
                                <col className={styles.Pg5VerboAuxiliar} />
                                <col className={styles.Pg5Adverbio} />
                                <col className={styles.Pg5Verbo} />
                                <col className={styles.Pg5ObjetivoComplemento} />
                                <col className={styles.Pg5Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th
                                        onClick={() => playAudio(sujeitoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Subject
                                    </th>
                                    <th
                                        onClick={() => playAudio(verboAuxiliarAudio)}
                                        style={{ cursor: 'pointer'}}
                                    >
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th
                                        onClick={() => playAudio(adverbioAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Adverb
                                    </th>
                                    <th
                                        onClick={() => playAudio(verboAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Verb(s)
                                    </th>
                                    <th
                                        onClick={() => playAudio(objetoComplementoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Object <br /> Complement
                                    </th>
                                    <th
                                        onClick={() => playAudio(traducaoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Translation
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    onClick={() => handleRowClick(0)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <td className={styles.Pg5Sujeito} style={{ textAlign: 'center' }}>I</td>
                                    <td className={styles.Pg5VerboAuxiliar} style={{ textAlign: 'center' }}>am</td>
                                    <td className={styles.Pg5Adverbio}></td>
                                    <td className={styles.Pg5Verbo}></td>
                                    <td className={styles.Pg5ObjetivoComplemento}></td>
                                    <td className={styles.Pg5Traducao}></td>
                                </tr>
                                <tr
                                    onClick={() => handleRowClick(1)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <td className={styles.Pg5Sujeito} style={{ textAlign: 'center' }}>I</td>
                                    <td className={styles.Pg5VerboAuxiliar} style={{ textAlign: 'center' }}>am</td>
                                    <td className={styles.Pg5Adverbio}></td>
                                    <td className={styles.Pg5Verbo}></td>
                                    <td className={styles.Pg5ObjetivoComplemento}>at work</td>
                                    <td className={styles.Pg5Traducao}></td>
                                </tr>
                                <tr
                                    onClick={() => handleRowClick(2)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <td className={styles.Pg5Sujeito} style={{ textAlign: 'center' }}>I</td>
                                    <td className={styles.Pg5VerboAuxiliar} style={{ textAlign: 'center' }}>am</td>
                                    <td className={styles.Pg5Adverbio}></td>
                                    <td className={styles.Pg5Verbo}></td>
                                    <td className={styles.Pg5ObjetivoComplemento}>years old</td>
                                    <td className={styles.Pg5Traducao}></td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg5StyledTable}>
                            <colgroup>
                                <col className={styles.Pg5Sujeito} />
                                <col className={styles.Pg5VerboAuxiliar} />
                                <col className={styles.Pg5Adverbio} />
                                <col className={styles.Pg5Verbo} />
                                <col className={styles.Pg5ObjetivoComplemento} />
                                <col className={styles.Pg5Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th
                                        onClick={() => playAudio(sujeitoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Subject
                                    </th>
                                    <th
                                        onClick={() => playAudio(verboAuxiliarAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th
                                        onClick={() => playAudio(adverbioAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Adverb
                                    </th>
                                    <th
                                        onClick={() => playAudio(verboAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Verb(s)
                                    </th>
                                    <th
                                        onClick={() => playAudio(objetoComplementoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Object <br /> Complement
                                    </th>
                                    <th
                                        onClick={() => playAudio(traducaoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Translation
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValues.map((row, rowIndex) => (
                                    <tr key={rowIndex} style={{ cursor: 'pointer' }}>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    id={`input-${rowIndex}-${colIndex}`}
                                                    className={styles.Pg5InputCell}
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

export default Pagina5;
