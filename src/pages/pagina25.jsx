import React, { useState, useRef } from 'react';
import styles from './pagina25.module.css';
import interrogativaNAudio from '../assets/audios/interrogativaN.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import isAudio from '../assets/audios/is_G.mp3';
import itAudio from '../assets/audios/it_G.mp3';
import notAudio from '../assets/audios/not.mp3';
import aintAudio from '../assets/audios/aint_G.mp3';
import isntAudio from '../assets/audios/isnt_G.mp3';
import aFord68Audio from '../assets/audios/68INT.mp3';
import nextToLibraryAudio from '../assets/audios/nextToThe.mp3';
import okayAudio from '../assets/audios/okay.mp3';
import threeYearsOldAudio from '../assets/audios/3yearsINT.mp3';
import traducaoAudio1 from '../assets/audios/pg25_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg25_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg25_trad3.mp3';
import traducaoAudio4 from '../assets/audios/pg25_trad4.mp3';

const Pagina25 = () => {
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
            <div className={styles.Pg25Container}>
                <header className={styles.Pg25Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg25HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg25Main}>
                    <div>
                        <div
                            className={styles.Pg25TableHeader}
                            onClick={() => playAudio(interrogativaNAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            INTERROGATIVA NEGATIVA
                        </div>
                        <table className={styles.Pg25StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
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
                                        className={styles.Pg25VerboAuxiliar}
                                        onClick={() => playAudio(isAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Is
                                    </td>
                                    <td
                                        className={styles.Pg25Sujeito}
                                        onClick={() => playAudio(itAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        it
                                    </td>
                                    <td
                                        className={styles.Pg25Adverbio}
                                        onClick={() => playAudio(notAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        not
                                    </td>
                                    <td className={styles.Pg25Verbo}></td>
                                    <td
                                        className={styles.Pg25ObjetivoComplemento}
                                        onClick={() => playAudio(aFord68Audio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        a Ford 68?
                                    </td>
                                    <td
                                        className={styles.Pg25Traducao}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Não é um Ford 68?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg25VerboAuxiliar}
                                        onClick={() => playAudio(aintAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Ain't
                                    </td>
                                    <td
                                        className={styles.Pg25Sujeito}
                                        onClick={() => playAudio(itAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        it
                                    </td>
                                    <td className={styles.Pg25Adverbio}></td>
                                    <td className={styles.Pg25Verbo}></td>
                                    <td
                                        className={styles.Pg25ObjetivoComplemento}
                                        onClick={() => playAudio(nextToLibraryAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        next to the library?
                                    </td>
                                    <td
                                        className={styles.Pg25Traducao}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Não está ao lado da biblioteca?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg25VerboAuxiliar}
                                        onClick={() => playAudio(isntAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Isn't
                                    </td>
                                    <td
                                        className={styles.Pg25Sujeito}
                                        onClick={() => playAudio(itAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        it
                                    </td>
                                    <td className={styles.Pg25Adverbio}></td>
                                    <td className={styles.Pg25Verbo}></td>
                                    <td
                                        className={styles.Pg25ObjetivoComplemento}
                                        onClick={() => playAudio(okayAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        ok?
                                    </td>
                                    <td
                                        className={styles.Pg25Traducao}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Não está tudo bem?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.Pg25VerboAuxiliar}
                                        onClick={() => playAudio(isntAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Isn't
                                    </td>
                                    <td
                                        className={styles.Pg25Sujeito}
                                        onClick={() => playAudio(itAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        it
                                    </td>
                                    <td className={styles.Pg25Adverbio}></td>
                                    <td className={styles.Pg25Verbo}></td>
                                    <td
                                        className={styles.Pg25ObjetivoComplemento}
                                        onClick={() => playAudio(threeYearsOldAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        3 years old?
                                    </td>
                                    <td
                                        className={styles.Pg25Traducao}
                                        onClick={() => playAudio(traducaoAudio4)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Não tem 3 anos?
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.Pg25StyledTable}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verboAuxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Verbo <br /> Auxiliar
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
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
                                                    className={styles.Pg25InputCell}
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

export default Pagina25;
