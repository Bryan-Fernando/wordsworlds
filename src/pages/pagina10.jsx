import React, { useState, useRef } from 'react';
import styles from './pagina10.module.css';
import negativaAudio from '../assets/audios/negativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import youAudio from '../assets/audios/you_G.mp3';
import areAudio from '../assets/audios/are_B.mp3';
import notAudio from '../assets/audios/not_B.mp3';
import arentAudio from '../assets/audios/arent_B.mp3';
import aintAudio from '../assets/audios/aint_B.mp3';
import newDirectorAudio from '../assets/audios/theNewDirec.mp3';
import inClass2BAudio from '../assets/audios/inclass2b.mp3';
import only12YearsOldAudio from '../assets/audios/only12.mp3';
import traducaoAudio1 from '../assets/audios/pg10_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg10_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg10_trad3.mp3';

const Pagina10 = () => {
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
            <div className={styles.Pg10Container}>
                <header className={styles.Pg10Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg10HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg10Main}>
                    <div>
                        <div
                            className={styles.Pg10TableHeader}
                            onClick={() => playAudio(negativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            NEGATIVA
                        </div>
                        <table className={styles.Pg10StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br /> Advérbio</th>
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
                                        className={styles.Pg10Sujeito}
                                        onClick={() => playAudio(youAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        You
                                    </td>
                                    <td
                                        className={styles.Pg10VerboAuxiliar}
                                        onClick={() => playAudio(areAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        are
                                    </td>
                                    <td
                                        className={styles.Pg10Adverbio}
                                        onClick={() => playAudio(notAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.Pg10Verbo}></td>
                                    <td
                                        className={styles.Pg10ObjetivoComplemento}
                                        onClick={() => playAudio(newDirectorAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        the new director
                                    </td>
                                    <td
                                        className={styles.Pg10Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você não é o novo diretor.
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg10Sujeito}
                                        onClick={() => playAudio(youAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        You
                                    </td>
                                    <td
                                        className={styles.Pg10VerboAuxiliar}
                                        onClick={() => playAudio(arentAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        aren't
                                    </td>
                                    <td className={styles.Pg10Adverbio}></td>
                                    <td className={styles.Pg10Verbo}></td>
                                    <td
                                        className={styles.Pg10ObjetivoComplemento}
                                        onClick={() => playAudio(inClass2BAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        in class 2-B
                                    </td>
                                    <td
                                        className={styles.Pg10Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você não está na classe 2-B.
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg10Sujeito}
                                        onClick={() => playAudio(youAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        You
                                    </td>
                                    <td
                                        className={styles.Pg10VerboAuxiliar}
                                        onClick={() => playAudio(aintAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        ain't
                                    </td>
                                    <td className={styles.Pg10Adverbio}></td>
                                    <td className={styles.Pg10Verbo}></td>
                                    <td
                                        className={styles.Pg10ObjetivoComplemento}
                                        onClick={() => playAudio(only12YearsOldAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        only 12 years old
                                    </td>
                                    <td
                                        className={styles.Pg10Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você não tem apenas 12 anos de idade.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.Pg10StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br /> Advérbio</th>
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
                                                    id={`input-${rowIndex}-${colIndex}`}
                                                    className={styles.Pg10InputCell}
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

export default Pagina10;
