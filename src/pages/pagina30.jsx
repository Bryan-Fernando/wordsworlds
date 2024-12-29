import React, { useState, useRef } from 'react';
import styles from './pagina30.module.css';
import afirmativaAudio from '../assets/audios/afirmativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg30Audio1 from '../assets/audios/pg30_audio1.mp3';
import pg30Audio2 from '../assets/audios/pg30_audio2.mp3';
import pg30Audio3 from '../assets/audios/pg30_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg30_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg30_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg30_trad3.mp3';

const Pagina30 = () => {
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
            <div className={styles.pg30Container}>
                <header className={styles.pg30Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.pg30HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.pg30Main}>
                    <div>
                        <div
                            className={styles.pg30TableHeader}
                            onClick={() => playAudio(afirmativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            AFFIRMATIVE
                        </div>
                        <table className={styles.pg30StyledTable}>
                            <colgroup>
                                <col className={styles.pg30Sujeito} />
                                <col className={styles.pg30VerboAuxiliar} />
                                <col className={styles.pg30Adverbio} />
                                <col className={styles.pg30Verbo} />
                                <col className={styles.pg30ObjetivoComplemento} />
                                <col className={styles.pg30Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>
                                        Adverb
                                    </th>
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
                                        className={styles.pg30Sujeito}
                                        onClick={() => playAudio(pg30Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        They
                                    </td>
                                    <td
                                        className={styles.pg30VerboAuxiliar}
                                        onClick={() => playAudio(pg30Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        are
                                    </td>
                                    <td className={styles.pg30Adverbio}></td>
                                    <td className={styles.pg30Verbo}></td>
                                    <td
                                        className={styles.pg30ObjetivoComplemento}
                                        onClick={() => playAudio(pg30Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        from Brazil
                                    </td>
                                    <td
                                        className={styles.pg30Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eles/Elas são do Brasil.
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg30Sujeito}
                                        onClick={() => playAudio(pg30Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        They
                                    </td>
                                    <td
                                        className={styles.pg30VerboAuxiliar}
                                        onClick={() => playAudio(pg30Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        are
                                    </td>
                                    <td className={styles.pg30Adverbio}></td>
                                    <td className={styles.pg30Verbo}></td>
                                    <td
                                        className={styles.pg30ObjetivoComplemento}
                                        onClick={() => playAudio(pg30Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        at the cinema
                                    </td>
                                    <td
                                        className={styles.pg30Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eles/Elas estão no cinema.
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg30Sujeito}
                                        onClick={() => playAudio(pg30Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        They
                                    </td>
                                    <td
                                        className={styles.pg30VerboAuxiliar}
                                        onClick={() => playAudio(pg30Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        are
                                    </td>
                                    <td className={styles.pg30Adverbio}></td>
                                    <td className={styles.pg30Verbo}></td>
                                    <td
                                        className={styles.pg30ObjetivoComplemento}
                                        onClick={() => playAudio(pg30Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        15 and 16 years old
                                    </td>
                                    <td
                                        className={styles.pg30Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eles/Elas têm 15 e 16 anos de idade.
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.pg30StyledTable}>
                            <colgroup>
                                <col className={styles.pg30Sujeito} />
                                <col className={styles.pg30VerboAuxiliar} />
                                <col className={styles.pg30Adverbio} />
                                <col className={styles.pg30Verbo} />
                                <col className={styles.pg30ObjetivoComplemento} />
                                <col className={styles.pg30Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Adverb</th>
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
                                                    className={styles.pg30InputCell}
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

export default Pagina30;
