import React, { useState, useRef } from 'react';
import styles from './pagina12.module.css';
import interrogativaAudio from '../assets/audios/interrogativaA.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg12Audio1 from '../assets/audios/pg12_audio1.mp3';
import pg12Audio2 from '../assets/audios/pg12_audio2.mp3';
import pg12Audio3 from '../assets/audios/pg12_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg12_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg12_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg12_trad3.mp3';
import Pg12IconNotes from '../assets/Icons/Icon-Notes.png';

const Pagina12 = () => {
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
            <div className={styles.Pg12Container}>
                <header className={styles.Pg12Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg12HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg12Main}>
                    <div>
                        <div
                            className={styles.Pg12TableHeader}
                            onClick={() => playAudio(interrogativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            AFFIRMATIVE INTERROGATIVE
                        </div>
                        <table className={styles.Pg12StyledTable}>
                            <colgroup>
                                <col className={styles.Pg12Sujeito} />
                                <col className={styles.Pg12VerboAuxiliar} />
                                <col className={styles.Pg12Adverbio} />
                                <col className={styles.Pg12Verbo} />
                                <col className={styles.Pg12ObjetivoComplemento} />
                                <col className={styles.Pg12Traducao} />
                            </colgroup> 
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Adverb</th>
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
                                        className={styles.Pg12VerboAuxiliar}
                                        onClick={() => playAudio(pg12Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Are
                                    </td>
                                    <td
                                        className={styles.Pg12Sujeito}
                                        onClick={() => playAudio(pg12Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        you
                                    </td>
                                    <td className={styles.Pg12Adverbio}></td>
                                    <td className={styles.Pg12Verbo}></td>
                                    <td
                                        className={styles.Pg12ObjetivoComplemento}
                                        onClick={() => playAudio(pg12Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        the new director?
                                    </td>
                                    <td
                                        className={styles.Pg12Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você é o novo diretor?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg12VerboAuxiliar}
                                        onClick={() => playAudio(pg12Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Are
                                    </td>
                                    <td
                                        className={styles.Pg12Sujeito}
                                        onClick={() => playAudio(pg12Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        you
                                    </td>
                                    <td className={styles.Pg12Adverbio}></td>
                                    <td className={styles.Pg12Verbo}></td>
                                    <td
                                        className={styles.Pg12ObjetivoComplemento}
                                        onClick={() => playAudio(pg12Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        in class 2-B?
                                    </td>
                                    <td
                                        className={styles.Pg12Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você está na turma 2-B?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg12VerboAuxiliar}
                                        onClick={() => playAudio(pg12Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Are
                                    </td>
                                    <td
                                        className={styles.Pg12Sujeito}
                                        onClick={() => playAudio(pg12Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        you
                                    </td>
                                    <td className={styles.Pg12Adverbio}></td>
                                    <td className={styles.Pg12Verbo}></td>
                                    <td
                                        className={styles.Pg12ObjetivoComplemento}
                                        onClick={() => playAudio(pg12Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        only 12 years old?
                                    </td>
                                    <td
                                        className={styles.Pg12Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você tem apenas 12 anos?
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.Pg12StyledTable}>
                            <colgroup>
                                <col className={styles.Pg12Sujeito} />
                                <col className={styles.Pg12VerboAuxiliar} />
                                <col className={styles.Pg12Adverbio} />
                                <col className={styles.Pg12Verbo} />
                                <col className={styles.Pg12ObjetivoComplemento} />
                                <col className={styles.Pg12Traducao} />
                            </colgroup> 
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
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
                                                    className={styles.Pg12InputCell}
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
                <aside className={styles.Pg12Aside}>
                        <div className={styles.Pg12AsideNotes1}>
                        <img className={styles.Pg12AsideImgNotes} src={Pg12IconNotes} alt="" />
                        <p>NOTE: Usam a mesma terminação verbal “Are“, “Aren’t“:</p>
                        </div>
                        <div className={styles.Pg12AsideNotes2}>
                        <p>
                            You <br />
                            You all <br />
                            You and Mary
                        </p>
                        <p>
                            Você <br />
                            Vocês todos <br />
                            Você e Mary
                        </p>
                        </div>
                    </aside>
            </div>
        </div>
    );
};

export default Pagina12;
