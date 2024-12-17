import React, { useState, useRef } from 'react';
import styles from './pagina8.module.css';
import interrogativaNAudio from '../assets/audios/interrogativaN.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import traducaoAudio1 from '../assets/audios/pg8_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg8_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg8_trad3.mp3';
import pg8Audio1 from '../assets/audios/pg8_audio1.mp3';
import pg8Audio2 from '../assets/audios/pg8_audio2.mp3';
import pg8Audio3 from '../assets/audios/pg8_audio3.mp3';

const Pagina8 = () => {
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
            <div className={styles.Pg8Container}>
                <header className={styles.Pg8Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg8HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg8Main}>
                    <div>
                        <div
                            className={styles.Pg8TableHeader}
                            onClick={() => playAudio(interrogativaNAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            NEGATIVE INTERROGATIVE
                        </div>
                        <table className={styles.Pg8StyledTable}>
                            <colgroup>
                                <col className={styles.Pg8Sujeito} />
                                <col className={styles.Pg8VerboAuxiliar} />
                                <col className={styles.Pg8Adverbio} />
                                <col className={styles.Pg8Verbo} />
                                <col className={styles.Pg8ObjetivoComplemento} />
                                <col className={styles.Pg8Traducao} />
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
                                    Object  <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Translation</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        className={styles.Pg8Sujeito}
                                        onClick={() => playAudio(pg8Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Am
                                    </td>
                                    <td
                                        className={styles.Pg8VerboAuxiliar}
                                        onClick={() => playAudio(pg8Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        I
                                    </td>
                                    <td
                                        className={styles.Pg8Adverbio}
                                        onClick={() => playAudio(pg8Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.Pg8Verbo}></td>
                                    <td
                                        className={styles.Pg8ObjetivoComplemento}
                                        onClick={() => playAudio(pg8Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        a good student?
                                    </td>
                                    <td
                                        className={styles.Pg8Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu não sou um bom aluno?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg8Sujeito}
                                        onClick={() => playAudio(pg8Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Ain't
                                    </td>
                                    <td
                                        className={styles.Pg8VerboAuxiliar}
                                        onClick={() => playAudio(pg8Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        I
                                    </td>
                                    <td className={styles.Pg8Adverbio}></td>
                                    <td className={styles.Pg8Verbo}></td>
                                    <td
                                        className={styles.Pg8ObjetivoComplemento}
                                        onClick={() => playAudio(pg8Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        In class A or B?
                                    </td>
                                    <td
                                        className={styles.Pg8Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu não estou na turma A ou B?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg8Sujeito}
                                        onClick={() => playAudio(pg8Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Ain't
                                    </td>
                                    <td
                                        className={styles.Pg8VerboAuxiliar}
                                        onClick={() => playAudio(pg8Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        I
                                    </td>
                                    <td className={styles.Pg8Adverbio}></td>
                                    <td className={styles.Pg8Verbo}></td>
                                    <td
                                        className={styles.Pg8ObjetivoComplemento}
                                        onClick={() => playAudio(pg8Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        over 3?
                                    </td>
                                    <td
                                        className={styles.Pg8Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu não tenho mais de 3 anos?
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.Pg8StyledTable}>
                            <colgroup>
                                <col className={styles.Pg8Sujeito} />
                                <col className={styles.Pg8VerboAuxiliar} />
                                <col className={styles.Pg8Adverbio} />
                                <col className={styles.Pg8Verbo} />
                                <col className={styles.Pg8ObjetivoComplemento} />
                                <col className={styles.Pg8Traducao} />
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
                                    Object  <br /> Complement
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
                                                    id={`input-${rowIndex}-${colIndex}`}
                                                    className={styles.Pg8InputCell}
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

export default Pagina8;
