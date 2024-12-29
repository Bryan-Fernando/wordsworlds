import React, { useState, useRef } from 'react';
import styles from './pagina33.module.css';
import negativaAudio from '../assets/audios/interrogativaN.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg33Audio1 from '../assets/audios/pg33_audio1.mp3';
import pg33Audio2 from '../assets/audios/pg33_audio2.mp3';
import pg33Audio3 from '../assets/audios/pg33_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg33_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg33_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg33_trad3.mp3';

const Pagina33 = () => {
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
            <div className={styles.pg33Container}>
                <header className={styles.pg33Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.pg33HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.pg33Main}>
                    <div>
                        <div
                            className={styles.pg33TableHeader}
                            onClick={() => playAudio(negativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            NEGATIVE INTERROGATIVE
                        </div>
                        <table className={styles.pg33StyledTable}>
                            <colgroup>
                                <col className={styles.pg33Sujeito} />
                                <col className={styles.pg33VerboAuxiliar} />
                                <col className={styles.pg33Adverbio} />
                                <col className={styles.pg33Verbo} />
                                <col className={styles.pg33ObjetivoComplemento} />
                                <col className={styles.pg33Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>
                                        Sujeito
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
                                    <td className={styles.pg33Sujeito} onClick={() => playAudio(pg33Audio1)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        Are
                                    </td>
                                    <td className={styles.pg33VerboAuxiliar} onClick={() => playAudio(pg33Audio1)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        they
                                    </td>
                                    <td className={styles.pg33Adverbio} onClick={() => playAudio(pg33Audio1)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        not
                                    </td>
                                    <td className={styles.pg33Verbo}></td>
                                    <td className={styles.pg33ObjetivoComplemento} onClick={() => playAudio(pg33Audio1)} style={{ cursor: 'pointer' }}>
                                        from Brazil?
                                    </td>
                                    <td className={styles.pg33Traducao} onClick={() => playAudio(traducaoAudio1)} style={{ cursor: 'pointer' }}>
                                        Eles não são do Brasil?
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.pg33Sujeito} onClick={() => playAudio(pg33Audio2)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        Aren't
                                    </td>
                                    <td className={styles.pg33VerboAuxiliar} onClick={() => playAudio(pg33Audio2)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        they
                                    </td>
                                    <td className={styles.pg33Adverbio}></td>
                                    <td className={styles.pg33Verbo}></td>
                                    <td className={styles.pg33ObjetivoComplemento} onClick={() => playAudio(pg33Audio2)} style={{ cursor: 'pointer' }}>
                                        at the cinema?
                                    </td>
                                    <td className={styles.pg33Traducao} onClick={() => playAudio(traducaoAudio2)} style={{ cursor: 'pointer' }}>
                                        Eles não estão no cinema?
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.pg33Sujeito} onClick={() => playAudio(pg33Audio3)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        Ain't
                                    </td>
                                    <td className={styles.pg33VerboAuxiliar} onClick={() => playAudio(pg33Audio3)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        they
                                    </td>
                                    <td className={styles.pg33Adverbio}></td>
                                    <td className={styles.pg33Verbo}></td>
                                    <td className={styles.pg33ObjetivoComplemento} onClick={() => playAudio(pg33Audio3)} style={{ cursor: 'pointer' }}>
                                        15 and 16 years old?
                                    </td>
                                    <td className={styles.pg33Traducao} onClick={() => playAudio(traducaoAudio3)} style={{ cursor: 'pointer' }}>
                                        Eles não têm 15 e 16 anos?
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.pg33StyledTable}>
                            <colgroup>
                                <col className={styles.pg33Sujeito} />
                                <col className={styles.pg33VerboAuxiliar} />
                                <col className={styles.pg33Adverbio} />
                                <col className={styles.pg33Verbo} />
                                <col className={styles.pg33ObjetivoComplemento} />
                                <col className={styles.pg33Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not' <br />Adverb</th>
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
                                                    className={styles.pg33InputCell}
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

export default Pagina33;
