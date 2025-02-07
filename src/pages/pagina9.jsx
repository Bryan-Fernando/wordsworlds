import React, { useState, useRef } from 'react';
import styles from './pagina9.module.css';

import global_verboToBe from '../assets/audios/global_verboToBe.mp3';
import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simplePresent from '../assets/audios/global_simplePresent.mp3';

import afirmativaAudio from '../assets/audios/afirmativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg9Audio1 from '../assets/audios/pg9_audio1.mp3';
import pg9Audio2 from '../assets/audios/pg9_audio2.mp3';
import pg9Audio3 from '../assets/audios/pg9_audio3.mp3';
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
            <div className={styles.pg9Container}>
                <header className={styles.pg9Header}>
                    <h1 className={styles.pg9AudioText}
                        onClick={() => playAudio(global_grammar)}>
                        Grammar
                    </h1>
                    <h2 className={styles.pg9AudioText}
                        onClick={() => playAudio(global_simplePresent)}
                        style={{ color: 'black' }}>
                        Simple Present (Presente Simples)
                    </h2>
                    <h3 className={styles.pg9AudioText}
                        onClick={() => playAudio(global_verboToBe)}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                    </h3>
                </header>

                <main className={styles.pg9Main}>
                    <div>
                        <div
                            className={styles.pg9TableHeader}
                            onClick={() => playAudio(afirmativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            AFFIRMATIVE
                        </div>
                        <table className={styles.pg9StyledTable}>
                            <colgroup>
                                <col className={styles.pg9Sujeito} />
                                <col className={styles.pg9VerboAuxiliar} />
                                <col className={styles.pg9Adverbio} />
                                <col className={styles.pg9Verbo} />
                                <col className={styles.pg9ObjetivoComplemento} />
                                <col className={styles.pg9Traducao} />
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
                                <tr>
                                    <td
                                        className={styles.pg9Sujeito}
                                        onClick={() => playAudio(pg9Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        You
                                    </td>
                                    <td
                                        className={styles.pg9VerboAuxiliar}
                                        onClick={() => playAudio(pg9Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        are
                                    </td>
                                    <td className={styles.pg9Adverbio}></td>
                                    <td className={styles.pg9Verbo}></td>
                                    <td
                                        className={styles.pg9ObjetivoComplemento}
                                        onClick={() => playAudio(pg9Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        the new director
                                    </td>
                                    <td
                                        className={styles.pg9Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você é o novo diretor.
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg9Sujeito}
                                        onClick={() => playAudio(pg9Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        You
                                    </td>
                                    <td
                                        className={styles.pg9VerboAuxiliar}
                                        onClick={() => playAudio(pg9Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        are
                                    </td>
                                    <td className={styles.pg9Adverbio}></td>
                                    <td className={styles.pg9Verbo}></td>
                                    <td
                                        className={styles.pg9ObjetivoComplemento}
                                        onClick={() => playAudio(pg9Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        in class 2-B
                                    </td>
                                    <td
                                        className={styles.pg9Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você está na sala de aula 2-B.
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg9Sujeito}
                                        onClick={() => playAudio(pg9Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        You
                                    </td>
                                    <td
                                        className={styles.pg9VerboAuxiliar}
                                        onClick={() => playAudio(pg9Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        are
                                    </td>
                                    <td className={styles.pg9Adverbio}></td>
                                    <td className={styles.pg9Verbo}></td>
                                    <td
                                        className={styles.pg9ObjetivoComplemento}
                                        onClick={() => playAudio(pg9Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        only 12 years old
                                    </td>
                                    <td
                                        className={styles.pg9Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você tem apenas 12 anos de idade.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.pg9StyledTable}>
                            <colgroup>
                                <col className={styles.pg9Sujeito} />
                                <col className={styles.pg9VerboAuxiliar} />
                                <col className={styles.pg9Adverbio} />
                                <col className={styles.pg9Verbo} />
                                <col className={styles.pg9ObjetivoComplemento} />
                                <col className={styles.pg9Traducao} />
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
                                                    className={styles.pg9InputCell}
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
