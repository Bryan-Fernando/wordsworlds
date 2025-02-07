import React, { useState, useRef } from 'react';
import styles from './pagina35.module.css';

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
import pg35Audio1 from '../assets/audios/pg35_audio1.mp3';
import pg35Audio2 from '../assets/audios/pg35_audio2.mp3';
import pg35Audio3 from '../assets/audios/pg35_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg35_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg35_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg35_trad3.mp3';

const Pagina35 = () => {
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
            <div className={styles.pg35Container}>
                <header className={styles.pg35Header}>
                    <h1 className={styles.pg35AudioText}
                        onClick={() => playAudio(global_grammar)}>
                        Grammar
                    </h1>
                    <h2 className={styles.pg35AudioText}
                        onClick={() => playAudio(global_simplePresent)}
                        style={{ color: 'black' }}>
                        Simple Present (Presente Simples)
                    </h2>
                    <h3 className={styles.pg35AudioText}
                        onClick={() => playAudio(global_verboToBe)}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                    </h3>
                </header>
                <main className={styles.pg35Main}>
                    <div>
                        <div
                            className={styles.pg35TableHeader}
                            onClick={() => playAudio(negativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            NEGATIVE
                        </div>
                        <table className={styles.pg35StyledTable}>
                            <colgroup>
                                <col className={styles.pg35Sujeito} />
                                <col className={styles.pg35VerboAuxiliar} />
                                <col className={styles.pg35Adverbio} />
                                <col className={styles.pg35Verbo} />
                                <col className={styles.pg35ObjetivoComplemento} />
                                <col className={styles.pg35Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>
                                        Sujeito
                                    </th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
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
                                    <td className={styles.pg35Sujeito} onClick={() => playAudio(pg35Audio1)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        We
                                    </td>
                                    <td className={styles.pg35VerboAuxiliar} onClick={() => playAudio(pg35Audio1)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        aren't
                                    </td>
                                    <td className={styles.pg35Adverbio}></td>
                                    <td className={styles.pg35Verbo}></td>
                                    <td className={styles.pg35ObjetivoComplemento} onClick={() => playAudio(pg35Audio1)} style={{ cursor: 'pointer' }}>
                                        in Maringá
                                    </td>
                                    <td className={styles.pg35Traducao} onClick={() => playAudio(traducaoAudio1)} style={{ cursor: 'pointer' }}>
                                        Nós não estamos em Maringá
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.pg35Sujeito} onClick={() => playAudio(pg35Audio2)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        You
                                    </td>
                                    <td className={styles.pg35VerboAuxiliar} onClick={() => playAudio(pg35Audio2)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        aren't
                                    </td>
                                    <td className={styles.pg35Adverbio}></td>
                                    <td className={styles.pg35Verbo}></td>
                                    <td className={styles.pg35ObjetivoComplemento} onClick={() => playAudio(pg35Audio2)} style={{ cursor: 'pointer' }}>
                                        on duty
                                    </td>
                                    <td className={styles.pg35Traducao} onClick={() => playAudio(traducaoAudio2)} style={{ cursor: 'pointer' }}>
                                        Você não está de plantão
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.pg35Sujeito} onClick={() => playAudio(pg35Audio3)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        They
                                    </td>
                                    <td className={styles.pg35VerboAuxiliar} onClick={() => playAudio(pg35Audio3)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        aren't
                                    </td>
                                    <td className={styles.pg35Adverbio}></td>
                                    <td className={styles.pg35Verbo}></td>
                                    <td className={styles.pg35ObjetivoComplemento} onClick={() => playAudio(pg35Audio3)} style={{ cursor: 'pointer' }}>
                                        busy
                                    </td>
                                    <td className={styles.pg35Traducao} onClick={() => playAudio(traducaoAudio3)} style={{ cursor: 'pointer' }}>
                                        Eles não estão ocupados
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.pg35StyledTable}>
                            <colgroup>
                                <col className={styles.pg35Sujeito} />
                                <col className={styles.pg35VerboAuxiliar} />
                                <col className={styles.pg35Adverbio} />
                                <col className={styles.pg35Verbo} />
                                <col className={styles.pg35ObjetivoComplemento} />
                                <col className={styles.pg35Traducao} />
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
                                                    className={styles.pg35InputCell}
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

export default Pagina35;
