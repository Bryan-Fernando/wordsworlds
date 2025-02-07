import React, { useState, useRef } from 'react';
import styles from './pagina109.module.css';
import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simplePresent from '../assets/audios/global_simplePresent.mp3';
import interrogativaNegativaAudio from '../assets/audios/interrogativaN.mp3';
import verboAuxiliarAudio from '../assets/audios/verboauxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objetoComplementoAudio from '../assets/audios/objetocomplemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg109_audio1 from '../assets/audios/pg109_audio1.mp3';
import pg109_audio2 from '../assets/audios/pg109_audio2.mp3';
import pg109_audio3 from '../assets/audios/pg109_audio3.mp3';
import pg109_audio4 from '../assets/audios/pg109_audio4.mp3';
import pg109_audio5 from '../assets/audios/pg109_audio5.mp3';
import pg109_audio6 from '../assets/audios/pg109_audio6.mp3';
import pg109_audio7 from '../assets/audios/pg109_audio7.mp3';

import pg109_trad1 from '../assets/audios/pg109_trad1.mp3';
import pg109_trad2 from '../assets/audios/pg109_trad2.mp3';
import pg109_trad3 from '../assets/audios/pg109_trad3.mp3';
import pg109_trad4 from '../assets/audios/pg109_trad4.mp3';
import pg109_trad5 from '../assets/audios/pg109_trad5.mp3';
import pg109_trad6 from '../assets/audios/pg109_trad6.mp3';
import pg109_trad7 from '../assets/audios/pg109_trad7.mp3';


const Pagina109 = () => {
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
            <div className={styles.pg109Container}>
                <header className={styles.pg109Header}>
                    <h1 className={styles.pg8AudioText}
                                            onClick={() => playAudio(global_grammar)} style={{ cursor: 'pointer' }}>
                                            Grammar
                                        </h1>
                                        <h2 className={styles.pg8AudioText}
                                            onClick={() => playAudio(global_simplePresent)}
                                            style={{ color: 'black', cursor: 'pointer' }}>
                                            Simple Present (Presente Simples)
                                        </h2>
                </header>
                <main className={styles.pg109Main}>
                    <div>
                        <div
                            className={styles.pg109TableHeader}
                            onClick={() => playAudio(interrogativaNegativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            NEGATIVE INTERROGATIVE
                        </div>
                        <table className={styles.pg109StyledTable}>
                            <colgroup>
                                <col className={styles.pg109Sujeito} />
                                <col className={styles.pg109VerboAuxiliar} />
                                <col className={styles.pg109Adverbio} />
                                <col className={styles.pg109Verbo} />
                                <col className={styles.pg109ObjetivoComplemento} />
                                <col className={styles.pg109Traducao} />
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
                                {[
                                    { verboAux: "Do", sujeito: "I", adverbio: "not", verbo: "work", complemento: "on Mondays?", audio: pg109_audio1, tradAudio: pg109_trad1, traducao: "Eu não trabalho às segundas-feiras?" },
                                    { verboAux: "Doesn't", sujeito: "he", adverbio: "", verbo: "work", complemento: "every day?", audio: pg109_audio2, tradAudio: pg109_trad2, traducao: "Ele não trabalha todos os dias?" },
                                    { verboAux: "Doesn't", sujeito: "she", adverbio: "", verbo: "work", complemento: "at home?", audio: pg109_audio3, tradAudio: pg109_trad3, traducao: "Ela não trabalha em casa?" },
                                    { verboAux: "Doesn't", sujeito: "it", adverbio: "", verbo: "work", complemento: "now?", audio: pg109_audio4, tradAudio: pg109_trad4, traducao: "Não funciona agora?" },
                                    { verboAux: "Don't", sujeito: "we", adverbio: "", verbo: "work", complemento: "(on) weekdays?", audio: pg109_audio5, tradAudio: pg109_trad5, traducao: "Nós não trabalhamos em dias úteis?" },
                                    { verboAux: "Don't", sujeito: "you", adverbio: "", verbo: "work", complemento: "(on) weekends?", audio: pg109_audio6, tradAudio: pg109_trad6, traducao: "Você não trabalha nos fins de semana?" },
                                    { verboAux: "Don't", sujeito: "they", adverbio: "", verbo: "work", complemento: "on weekends?", audio: pg109_audio7, tradAudio: pg109_trad7, traducao: "Eles não trabalham nos fins de semana?" },
                                ].map((linha, index) => (
                                    <tr key={index} onClick={() => playAudio(linha.audio)} style={{ cursor: 'pointer' }}>
                                        <td className={styles.pg109VerboAuxiliar}>{linha.verboAux}</td>
                                        <td className={styles.pg109Sujeito}>{linha.sujeito}</td>
                                        <td className={styles.pg109Adverbio}>{linha.adverbio}</td>
                                        <td className={styles.pg109Verbo}>{linha.verbo}</td>
                                        <td className={styles.pg109ObjetivoComplemento}>{linha.complemento}</td>
                                        <td className={styles.pg109Traducao} onClick={(e) => { e.stopPropagation(); playAudio(linha.tradAudio); }}>
                                            {linha.traducao}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                        <table className={styles.pg109StyledTable}>
                            <colgroup>
                                <col className={styles.pg109Sujeito} />
                                <col className={styles.pg109VerboAuxiliar} />
                                <col className={styles.pg109Adverbio} />
                                <col className={styles.pg109Verbo} />
                                <col className={styles.pg109ObjetivoComplemento} />
                                <col className={styles.pg109Traducao} />
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
                                                    className={styles.pg109InputCell}
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

export default Pagina109;
