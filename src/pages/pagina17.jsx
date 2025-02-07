import React, { useState, useRef } from 'react';
import styles from './pagina17.module.css';

import global_verboToBe from '../assets/audios/global_verboToBe.mp3';
import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simplePresent from '../assets/audios/global_simplePresent.mp3';

import interrogativaNegativaAudio from '../assets/audios/interrogativaN.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg17Audio1 from '../assets/audios/pg17_audio1.mp3';
import pg17Audio2 from '../assets/audios/pg17_audio2.mp3';
import pg17Audio3 from '../assets/audios/pg17_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg17_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg17_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg17_trad3.mp3';

const Pagina17 = () => {
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
            <div className={styles.pg17Container}>
                <header className={styles.pg17Header}>
                    <h1 className={styles.pg17AudioText}
                        onClick={() => playAudio(global_grammar)}>
                        Grammar
                    </h1>
                    <h2 className={styles.pg17AudioText}
                        onClick={() => playAudio(global_simplePresent)}
                        style={{ color: 'black' }}>
                        Simple Present (Presente Simples)
                    </h2>
                    <h3 className={styles.pg17AudioText}
                        onClick={() => playAudio(global_verboToBe)}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                    </h3>
                </header>
                <main className={styles.pg17Main}>
                    <div>
                        <div
                            className={styles.pg17TableHeader}
                            onClick={() => playAudio(interrogativaNegativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            NEGATIVE INTERROGATIVE
                        </div>
                        <table className={styles.pg17StyledTable}>
                            <colgroup>
                                <col className={styles.pg17Sujeito} />
                                <col className={styles.pg17VerboAuxiliar} />
                                <col className={styles.pg17Adverbio} />
                                <col className={styles.pg17Verbo} />
                                <col className={styles.pg17ObjetivoComplemento} />
                                <col className={styles.pg17Traducao} />
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
                                        className={styles.pg17VerboAuxiliar}
                                        onClick={() => playAudio(pg17Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Is
                                    </td>
                                    <td
                                        className={styles.pg17Sujeito}
                                        onClick={() => playAudio(pg17Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        he
                                    </td>
                                    <td
                                        className={styles.pg17Adverbio}
                                        onClick={() => playAudio(pg17Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.pg17Verbo}></td>
                                    <td
                                        className={styles.pg17ObjetivoComplemento}
                                        onClick={() => playAudio(pg17Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Mr. Smith?
                                    </td>
                                    <td
                                        className={styles.pg17Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ele não é o Sr. Smith?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg17VerboAuxiliar}
                                        onClick={() => playAudio(pg17Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Ain't
                                    </td>
                                    <td
                                        className={styles.pg17Sujeito}
                                        onClick={() => playAudio(pg17Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        he
                                    </td>
                                    <td className={styles.pg17Adverbio}></td>
                                    <td className={styles.pg17Verbo}></td>
                                    <td
                                        className={styles.pg17ObjetivoComplemento}
                                        onClick={() => playAudio(pg17Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        at the bank?
                                    </td>
                                    <td
                                        className={styles.pg17Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ele não está no banco?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg17VerboAuxiliar}
                                        onClick={() => playAudio(pg17Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        Isn't
                                    </td>
                                    <td
                                        className={styles.pg17Sujeito}
                                        onClick={() => playAudio(pg17Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        he
                                    </td>
                                    <td className={styles.pg17Adverbio}></td>
                                    <td className={styles.pg17Verbo}></td>
                                    <td
                                        className={styles.pg17ObjetivoComplemento}
                                        onClick={() => playAudio(pg17Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        29 years old?
                                    </td>
                                    <td
                                        className={styles.pg17Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ele não tem 29 anos?
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.pg17StyledTable}>
                            <colgroup>
                                <col className={styles.pg17Sujeito} />
                                <col className={styles.pg17VerboAuxiliar} />
                                <col className={styles.pg17Adverbio} />
                                <col className={styles.pg17Verbo} />
                                <col className={styles.pg17ObjetivoComplemento} />
                                <col className={styles.pg17Traducao} />
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
                                                    className={styles.pg17InputCell}
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

export default Pagina17;
