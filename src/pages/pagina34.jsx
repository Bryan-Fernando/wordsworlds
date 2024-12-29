import React, { useState, useRef } from 'react';
import styles from './pagina34.module.css';
import negativaAudio from '../assets/audios/negativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg34Audio1 from '../assets/audios/pg34_audio1.mp3';
import pg34Audio2 from '../assets/audios/pg34_audio2.mp3';
import pg34Audio3 from '../assets/audios/pg34_audio3.mp3';
import pg34Audio4 from '../assets/audios/pg34_audio4.mp3';
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
            <div className={styles.pg34Container}>
                <header className={styles.pg34Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.pg34HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.pg34Main}>
                    <div>
                        <div
                            className={styles.pg34TableHeader}
                            onClick={() => playAudio(negativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            NEGATIVE
                        </div>
                        <table className={styles.pg34StyledTable}>
                            <colgroup>
                                <col className={styles.pg34Sujeito} />
                                <col className={styles.pg34VerboAuxiliar} />
                                <col className={styles.pg34Adverbio} />
                                <col className={styles.pg34Verbo} />
                                <col className={styles.pg34ObjetivoComplemento} />
                                <col className={styles.pg34Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>
                                        Sujeito
                                    </th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>
                                        'Not' <br /> Adverb
                                    </th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th onClick={() => playAudio(objetoComplementoAudio)} style={{ cursor: 'pointer' }}>
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>
                                        Translation
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles.pg34Sujeito} onClick={() => playAudio(pg34Audio1)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        I
                                    </td>
                                    <td className={styles.pg34VerboAuxiliar} onClick={() => playAudio(pg34Audio1)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        'm
                                    </td>
                                    <td className={styles.pg34Adverbio} onClick={() => playAudio(pg34Audio1)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        not
                                    </td>
                                    <td className={styles.pg34Verbo}></td>
                                    <td className={styles.pg34ObjetivoComplemento} onClick={() => playAudio(pg34Audio1)} style={{ cursor: 'pointer' }}>
                                        the Spanish teacher
                                    </td>
                                    <td className={styles.pg34Traducao} onClick={() => playAudio(traducaoAudio1)} style={{ cursor: 'pointer' }}>
                                        Eu não sou o professor de espanhol
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.pg34Sujeito} onClick={() => playAudio(pg34Audio2)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        He
                                    </td>
                                    <td className={styles.pg34VerboAuxiliar} onClick={() => playAudio(pg34Audio2)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        isn't
                                    </td>
                                    <td className={styles.pg34Adverbio}></td>
                                    <td className={styles.pg34Verbo}></td>
                                    <td className={styles.pg34ObjetivoComplemento} onClick={() => playAudio(pg34Audio2)} style={{ cursor: 'pointer' }}>
                                        at work
                                    </td>
                                    <td className={styles.pg34Traducao} onClick={() => playAudio(traducaoAudio2)} style={{ cursor: 'pointer' }}>
                                        Ele não está no trabalho
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.pg34Sujeito} onClick={() => playAudio(pg34Audio3)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        It
                                    </td>
                                    <td className={styles.pg34VerboAuxiliar} onClick={() => playAudio(pg34Audio3)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        isn't
                                    </td>
                                    <td className={styles.pg34Adverbio}></td>
                                    <td className={styles.pg34Verbo}></td>
                                    <td className={styles.pg34ObjetivoComplemento} onClick={() => playAudio(pg34Audio3)} style={{ cursor: 'pointer' }}>
                                        27 years old
                                    </td>
                                    <td className={styles.pg34Traducao} onClick={() => playAudio(traducaoAudio3)} style={{ cursor: 'pointer' }}>
                                        Ela não tem 27 anos
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.pg34Sujeito} onClick={() => playAudio(pg34Audio4)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        He
                                    </td>
                                    <td className={styles.pg34VerboAuxiliar} onClick={() => playAudio(pg34Audio4)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        ain't
                                    </td>
                                    <td className={styles.pg34Adverbio}></td>
                                    <td className={styles.pg34Verbo}></td>
                                    <td className={styles.pg34ObjetivoComplemento} onClick={() => playAudio(pg34Audio4)} style={{ cursor: 'pointer' }}>
                                        sunny
                                    </td>
                                    <td className={styles.pg34Traducao} onClick={() => playAudio(traducaoAudio4)} style={{ cursor: 'pointer' }}>
                                        Não está ensolarado
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.pg34StyledTable}>
                            <colgroup>
                                <col className={styles.pg34Sujeito} />
                                <col className={styles.pg34VerboAuxiliar} />
                                <col className={styles.pg34Adverbio} />
                                <col className={styles.pg34Verbo} />
                                <col className={styles.pg34ObjetivoComplemento} />
                                <col className={styles.pg34Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br /> Adverb</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th onClick={() => playAudio(objetoComplementoAudio)} style={{ cursor: 'pointer' }}>
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Translation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValues.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    className={styles.pg34InputCell}
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
