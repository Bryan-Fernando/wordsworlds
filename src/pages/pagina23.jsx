import React, { useState, useRef } from 'react';
import styles from './pagina23.module.css';

import global_verboToBe from '../assets/audios/global_verboToBe.mp3';
import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simplePresent from '../assets/audios/global_simplePresent.mp3';

import negativaAudio from '../assets/audios/negativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg23Audio1 from '../assets/audios/pg23_audio1.mp3';
import pg23Audio2 from '../assets/audios/pg23_audio2.mp3';
import pg23Audio3 from '../assets/audios/pg23_audio3.mp3';
import pg23Audio4 from '../assets/audios/pg23_audio4.mp3';
import traducaoAudio1 from '../assets/audios/pg23_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg23_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg23_trad3.mp3';
import traducaoAudio4 from '../assets/audios/pg23_trad4.mp3';

const Pagina23 = () => {
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
            <div className={styles.pg23Container}>
                <header className={styles.pg23Header}>
                    <h1 className={styles.pg23AudioText}
                        onClick={() => playAudio(global_grammar)}>
                        Grammar
                    </h1>
                    <h2 className={styles.pg23AudioText}
                        onClick={() => playAudio(global_simplePresent)}
                        style={{ color: 'black' }}>
                        Simple Present (Presente Simples)
                    </h2>
                    <h3 className={styles.pg23AudioText}
                        onClick={() => playAudio(global_verboToBe)}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                    </h3>
                </header>
                <main className={styles.pg23Main}>
                    <div>
                        <div
                            className={styles.pg23TableHeader}
                            onClick={() => playAudio(negativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            NEGATIVE
                        </div>
                        <table className={styles.pg23StyledTable}>
                            <colgroup>
                                <col className={styles.pg23Sujeito} />
                                <col className={styles.pg23VerboAuxiliar} />
                                <col className={styles.pg23Adverbio} />
                                <col className={styles.pg23Verbo} />
                                <col className={styles.pg23ObjetivoComplemento} />
                                <col className={styles.pg23Traducao} />
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
                                    <td
                                        className={styles.pg23Sujeito}
                                        onClick={() => playAudio(pg23Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        It
                                    </td>
                                    <td
                                        className={styles.pg23VerboAuxiliar}
                                        onClick={() => playAudio(pg23Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        is
                                    </td>
                                    <td
                                        className={styles.pg23Adverbio}
                                        onClick={() => playAudio(pg23Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.pg23Verbo}></td>
                                    <td
                                        className={styles.pg23ObjetivoComplemento}
                                        onClick={() => playAudio(pg23Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        (hot)
                                    </td>
                                    <td
                                        className={styles.pg23Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Não está quente
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg23Sujeito}
                                        onClick={() => playAudio(pg23Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        It
                                    </td>
                                    <td
                                        className={styles.pg23VerboAuxiliar}
                                        onClick={() => playAudio(pg23Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        is
                                    </td>
                                    <td
                                        className={styles.pg23Adverbio}
                                        onClick={() => playAudio(pg23Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.pg23Verbo}></td>
                                    <td
                                        className={styles.pg23ObjetivoComplemento}
                                        onClick={() => playAudio(pg23Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        (next to the library)
                                    </td>
                                    <td
                                        className={styles.pg23Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Não é / Fica ao lado da biblioteca
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg23Sujeito}
                                        onClick={() => playAudio(pg23Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        It
                                    </td>
                                    <td
                                        className={styles.pg23VerboAuxiliar}
                                        onClick={() => playAudio(pg23Audio3)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        ain't
                                    </td>
                                    <td className={styles.pg23Adverbio}></td>
                                    <td className={styles.pg23Verbo}></td>
                                    <td
                                        className={styles.pg23ObjetivoComplemento}
                                        onClick={() => playAudio(pg23Audio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        (okay)
                                    </td>
                                    <td
                                        className={styles.pg23Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Não está bem
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg23Sujeito}
                                        onClick={() => playAudio(pg23Audio4)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        It
                                    </td>
                                    <td
                                        className={styles.pg23VerboAuxiliar}
                                        onClick={() => playAudio(pg23Audio4)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        isn't
                                    </td>
                                    <td className={styles.pg23Adverbio}></td>
                                    <td className={styles.pg23Verbo}></td>
                                    <td
                                        className={styles.pg23ObjetivoComplemento}
                                        onClick={() => playAudio(pg23Audio4)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        (3 years old)
                                    </td>
                                    <td
                                        className={styles.pg23Traducao}
                                        onClick={() => playAudio(traducaoAudio4)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Não tem 3 anos
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Segunda tabela com inputs dinâmicos */}
                        <table className={styles.pg23StyledTable}>
                            <colgroup>
                                <col className={styles.pg23Sujeito} />
                                <col className={styles.pg23VerboAuxiliar} />
                                <col className={styles.pg23Adverbio} />
                                <col className={styles.pg23Verbo} />
                                <col className={styles.pg23ObjetivoComplemento} />
                                <col className={styles.pg23Traducao} />
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
                                                    className={styles.pg23InputCell}
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

export default Pagina23;
