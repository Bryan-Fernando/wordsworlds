import React, { useState, useRef } from 'react';
import styles from './pagina6.module.css';
import negativaAudio from '../assets/audios/negativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/Objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import traducaoAudio1 from '../assets/audios/pg6_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg6_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg6_trad3.mp3';
import pg6Audio1 from '../assets/audios/pg6_audio1.mp3';
import pg6Audio2 from '../assets/audios/pg6_audio2.mp3';
import pg6Audio3 from '../assets/audios/pg6_audio3.mp3';
import pg6Audio4 from '../assets/audios/pg6_audio4.mp3';
import Pg6IconNotes from '../assets/Icons/Icon-Notes.png';

const Pagina6 = () => {
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
            <div className={styles.Pg6Container}>
                <header className={styles.Pg6Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg6HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg6Main}>
                    <div>
                        <div
                            className={styles.Pg6TableHeader}
                            onClick={() => playAudio(negativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            NEGATIVE
                        </div>
                        <table className={styles.Pg6StyledTable}>
                            <colgroup>
                                <col className={styles.Pg6Sujeito} />
                                <col className={styles.Pg6VerboAuxiliar} />
                                <col className={styles.Pg6Adverbio} />
                                <col className={styles.Pg6Verbo} />
                                <col className={styles.Pg6ObjetivoComplemento} />
                                <col className={styles.Pg6Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br />Adverb</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th
                                        onClick={() => playAudio(objetoComplementoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Translation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        className={styles.Pg6Sujeito}
                                        onClick={() => playAudio(pg6Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        I
                                    </td>
                                    <td
                                        className={styles.Pg6VerboAuxiliar}
                                        onClick={() => playAudio(pg6Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center'}}
                                    >
                                        am
                                    </td>
                                    <td
                                        className={styles.Pg6Adverbio}
                                        onClick={() => playAudio(pg6Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.Pg6Verbo}></td>
                                    <td className={styles.Pg6ObjetivoComplemento}></td>
                                    <td
                                        className={styles.Pg6Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu não sou ____
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg6Sujeito}
                                        onClick={() => playAudio(pg6Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        I
                                    </td>
                                    <td
                                        className={styles.Pg6VerboAuxiliar}
                                        onClick={() => playAudio(pg6Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        am
                                    </td>
                                    <td
                                        className={styles.Pg6Adverbio}
                                        onClick={() => playAudio(pg6Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.Pg6Verbo}></td>
                                    <td
                                        className={styles.Pg6ObjetivoComplemento}
                                        onClick={() => playAudio(pg6Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        at work
                                    </td>
                                    <td
                                        className={styles.Pg6Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu não estou no trabalho
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg6Sujeito}
                                        onClick={() => playAudio(pg6Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        I
                                    </td>
                                    <td
                                        className={styles.Pg6VerboAuxiliar}
                                        onClick={() => playAudio(pg6Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        am
                                    </td>
                                    <td
                                        className={styles.Pg6Adverbio}
                                        onClick={() => playAudio(pg6Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.Pg6Verbo}></td>
                                    <td
                                        className={styles.Pg6ObjetivoComplemento}
                                        onClick={() => playAudio(pg6Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        years old
                                    </td>
                                    <td
                                        className={styles.Pg6Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eu não tenho ____ anos de idade
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg6Sujeito}
                                        onClick={() => playAudio(pg6Audio4)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        I
                                    </td>
                                    <td onClick={() => playAudio(pg6Audio4)} style={{ cursor: 'pointer', textAlign: 'center' }} className={styles.Pg6VerboAuxiliar}>ain't</td>
                                    <td className={styles.Pg6Adverbio}></td>
                                    <td className={styles.Pg6Verbo}></td>
                                    <td className={styles.Pg6ObjetivoComplemento}></td>
                                    <td
                                        className={styles.Pg6Traducao}
                                        onClick={() => playAudio(traducaoAudio4)}
                                        style={{ cursor: 'pointer' }}
                                    ></td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg6StyledTable}>
                            <colgroup>
                                <col className={styles.Pg6Sujeito} />
                                <col className={styles.Pg6VerboAuxiliar} />
                                <col className={styles.Pg6Adverbio} />
                                <col className={styles.Pg6Verbo} />
                                <col className={styles.Pg6ObjetivoComplemento} />
                                <col className={styles.Pg6Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br /> Adverb</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th
                                        onClick={() => playAudio(objetoComplementoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
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
                                                    id={`input-${rowIndex}-${colIndex}`}
                                                    className={styles.Pg6InputCell}
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
                <aside className={styles.Pg6Aside}>
                    <div className={styles.Pg6AsideNotes1}>
                        <img className={styles.Pg6AsideImgNotes} src={Pg6IconNotes} alt="" />
                        <p>NOTE: Forma simples / Coloquial</p>
                    </div>
                    <div className={styles.Pg6AsideNotes2}>
                        <p>I ain’t = non - standard or dialected English . (I am not) <br />
                            I aren’t = non - standard or dialected English. (I am not)
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina6;
