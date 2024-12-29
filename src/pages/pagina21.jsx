import React, { useState, useRef } from 'react';
import styles from './pagina21.module.css';
import interrogativaNegativaAudio from '../assets/audios/interrogativaN.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg21Audio1 from '../assets/audios/pg21_audio1.mp3';
import pg21Audio2 from '../assets/audios/pg21_audio2.mp3';
import pg21Audio3 from '../assets/audios/pg21_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg21_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg21_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg21_trad3.mp3';

const Pagina21 = () => {
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
            <div className={styles.pg21Container}>
                <header className={styles.pg21Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.pg21HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.pg21Main}>
                    <div>
                        <div
                            className={styles.pg21TableHeader}
                            onClick={() => playAudio(interrogativaNegativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            NEGATIVE INTERROGATIVE
                        </div>
                        <table className={styles.pg21StyledTable}>
                            <colgroup>
                                <col className={styles.pg21Sujeito} />
                                <col className={styles.pg21VerboAuxiliar} />
                                <col className={styles.pg21Adverbio} />
                                <col className={styles.pg21Verbo} />
                                <col className={styles.pg21ObjetivoComplemento} />
                                <col className={styles.pg21Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
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
                                    <td
                                        className={styles.pg21VerboAuxiliar}
                                        onClick={() => playAudio(pg21Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Is
                                    </td>
                                    <td
                                        className={styles.pg21Sujeito}
                                        onClick={() => playAudio(pg21Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        she
                                    </td>
                                    <td
                                        className={styles.pg21Adverbio}
                                        onClick={() => playAudio(pg21Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.pg21Verbo}></td>
                                    <td
                                        className={styles.pg21ObjetivoComplemento}
                                        onClick={() => playAudio(pg21Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Miss Debora?
                                    </td>
                                    <td
                                        className={styles.pg21Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ela não é a Srta. Debora?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg21VerboAuxiliar}
                                        onClick={() => playAudio(pg21Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Ain't
                                    </td>
                                    <td
                                        className={styles.pg21Sujeito}
                                        onClick={() => playAudio(pg21Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        she
                                    </td>
                                    <td className={styles.pg21Adverbio}></td>
                                    <td className={styles.pg21Verbo}></td>
                                    <td
                                        className={styles.pg21ObjetivoComplemento}
                                        onClick={() => playAudio(pg21Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        at the gym?
                                    </td>
                                    <td
                                        className={styles.pg21Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ela não está na academia?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg21VerboAuxiliar}
                                        onClick={() => playAudio(pg21Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Isn't
                                    </td>
                                    <td
                                        className={styles.pg21Sujeito}
                                        onClick={() => playAudio(pg21Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        she
                                    </td>
                                    <td className={styles.pg21Adverbio}></td>
                                    <td className={styles.pg21Verbo}></td>
                                    <td
                                        className={styles.pg21ObjetivoComplemento}
                                        onClick={() => playAudio(pg21Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        27 years old?
                                    </td>
                                    <td
                                        className={styles.pg21Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ela não tem 27 anos?
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.pg21StyledTable}>
                            <colgroup>
                                <col className={styles.pg21Sujeito} />
                                <col className={styles.pg21VerboAuxiliar} />
                                <col className={styles.pg21Adverbio} />
                                <col className={styles.pg21Verbo} />
                                <col className={styles.pg21ObjetivoComplemento} />
                                <col className={styles.pg21Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
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
                                                    className={styles.pg21InputCell}
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

export default Pagina21;
