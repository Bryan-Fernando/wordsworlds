import React, { useState, useRef } from 'react';
import styles from './pagina30.module.css';
import afirmativaAudio from '../assets/audios/afirmativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import theyAudio from '../assets/audios/they_B.mp3';
import areAudio from '../assets/audios/are_B.mp3';
import fromBrazilAudio from '../assets/audios/fromBrazil.mp3';
import atCinemaAudio from '../assets/audios/atTheCinema.mp3';
import fifteenAndSixteenAudio from '../assets/audios/15and16.mp3';
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
            <div className={styles.Pg30Container}>
                <header className={styles.Pg30Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg30HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg30Main}>
                    <div>
                        <div
                            className={styles.Pg30TableHeader}
                            onClick={() => playAudio(afirmativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            AFIRMATIVA
                        </div>
                        <table className={styles.Pg30StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>
                                        Advérbio
                                    </th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verbo(s)</th>
                                    <th onClick={() => playAudio(objetoComplementoAudio)} style={{ cursor: 'pointer' }}>
                                        Objeto <br /> Complemento
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Tradução</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        className={styles.Pg30Sujeito}
                                        onClick={() => playAudio(theyAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        They
                                    </td>
                                    <td
                                        className={styles.Pg30VerboAuxiliar}
                                        onClick={() => playAudio(areAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        are
                                    </td>
                                    <td className={styles.Pg30Adverbio}></td>
                                    <td className={styles.Pg30Verbo}></td>
                                    <td
                                        className={styles.Pg30ObjetivoComplemento}
                                        onClick={() => playAudio(fromBrazilAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        from Brazil
                                    </td>
                                    <td
                                        className={styles.Pg30Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eles/Elas são do Brasil.
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg30Sujeito}
                                        onClick={() => playAudio(theyAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        They
                                    </td>
                                    <td
                                        className={styles.Pg30VerboAuxiliar}
                                        onClick={() => playAudio(areAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        are
                                    </td>
                                    <td className={styles.Pg30Adverbio}></td>
                                    <td className={styles.Pg30Verbo}></td>
                                    <td
                                        className={styles.Pg30ObjetivoComplemento}
                                        onClick={() => playAudio(atCinemaAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        at the cinema
                                    </td>
                                    <td
                                        className={styles.Pg30Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eles/Elas estão no cinema.
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg30Sujeito}
                                        onClick={() => playAudio(theyAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        They
                                    </td>
                                    <td
                                        className={styles.Pg30VerboAuxiliar}
                                        onClick={() => playAudio(areAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        are
                                    </td>
                                    <td className={styles.Pg30Adverbio}></td>
                                    <td className={styles.Pg30Verbo}></td>
                                    <td
                                        className={styles.Pg30ObjetivoComplemento}
                                        onClick={() => playAudio(fifteenAndSixteenAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        15 and 16 years old
                                    </td>
                                    <td
                                        className={styles.Pg30Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eles/Elas têm 15 e 16 anos de idade.
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg30StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Advérbio</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verbo(s)</th>
                                    <th onClick={() => playAudio(objetoComplementoAudio)} style={{ cursor: 'pointer' }}>
                                        Objeto <br /> Complemento
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Tradução</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValues.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    className={styles.Pg30InputCell}
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