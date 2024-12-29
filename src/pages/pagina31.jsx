import React, { useState, useRef } from 'react';
import styles from './pagina31.module.css';
import negativaAudio from '../assets/audios/negativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg31Audio1 from '../assets/audios/pg31_audio1.mp3';
import pg31Audio2 from '../assets/audios/pg31_audio2.mp3';
import pg31Audio3 from '../assets/audios/pg31_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg31_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg31_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg31_trad3.mp3';

const Pagina31 = () => {
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
            <div className={styles.pg31Container}>
                <header className={styles.pg31Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.pg31HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.pg31Main}>
                    <div>
                        <div
                            className={styles.pg31TableHeader}
                            onClick={() => playAudio(negativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            NEGATIVE
                        </div>
                        <table className={styles.pg31StyledTable}>
                            <colgroup>
                                <col className={styles.pg31Sujeito} />
                                <col className={styles.pg31VerboAuxiliar} />
                                <col className={styles.pg31Adverbio} />
                                <col className={styles.pg31Verbo} />
                                <col className={styles.pg31ObjetivoComplemento} />
                                <col className={styles.pg31Traducao} />
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
                                <tr>
                                    <td onClick={() => playAudio(pg31Audio1)} style={{ cursor: 'pointer', textAlign: 'center' }}>They</td>
                                    <td onClick={() => playAudio(pg31Audio1)} style={{ cursor: 'pointer', textAlign: 'center' }}>are</td>
                                    <td onClick={() => playAudio(pg31Audio1)} style={{ cursor: 'pointer', textAlign: 'center' }}>not</td>
                                    <td></td>
                                    <td onClick={() => playAudio(pg31Audio1)} style={{ cursor: 'pointer' }}>from Brazil</td>
                                    <td onClick={() => playAudio(traducaoAudio1)} style={{ cursor: 'pointer' }}>Eles/Elas não são do Brasil</td>
                                </tr>
                                <tr>
                                    <td onClick={() => playAudio(pg31Audio2)} style={{ cursor: 'pointer', textAlign: 'center' }}>They</td>
                                    <td onClick={() => playAudio(pg31Audio2)} style={{ cursor: 'pointer', textAlign: 'center' }}>aren't</td>
                                    <td></td>
                                    <td></td>
                                    <td onClick={() => playAudio(pg31Audio2)} style={{ cursor: 'pointer' }}>at the cinema</td>
                                    <td onClick={() => playAudio(traducaoAudio2)} style={{ cursor: 'pointer' }}>Eles/Elas não estão no cinema</td>
                                </tr>
                                <tr>
                                    <td onClick={() => playAudio(pg31Audio3)} style={{ cursor: 'pointer', textAlign: 'center' }}>They</td>
                                    <td onClick={() => playAudio(pg31Audio3)} style={{ cursor: 'pointer', textAlign: 'center' }}>ain't</td>
                                    <td></td>
                                    <td></td>
                                    <td onClick={() => playAudio(pg31Audio3)} style={{ cursor: 'pointer' }}>15 and 16 years old</td>
                                    <td onClick={() => playAudio(traducaoAudio3)} style={{ cursor: 'pointer' }}>Eles/Elas não têm 15 e 16 anos de idade</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.pg31StyledTable}>
                            <colgroup>
                                <col className={styles.pg31Sujeito} />
                                <col className={styles.pg31VerboAuxiliar} />
                                <col className={styles.pg31Adverbio} />
                                <col className={styles.pg31Verbo} />
                                <col className={styles.pg31ObjetivoComplemento} />
                                <col className={styles.pg31Traducao} />
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
                                                    className={styles.pg31InputCell}
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

export default Pagina31;
