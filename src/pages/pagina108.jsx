import React, { useState, useRef } from 'react';

import styles from './pagina108.module.css';

import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present from '../assets/audios/global_simple_present.mp3';
import afirmativaAudio from '../assets/audios/interrogativa_a.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg108_audio1 from '../assets/audios/pg108_audio1.mp3';
import pg108_audio2 from '../assets/audios/pg108_audio2.mp3';
import pg108_audio3 from '../assets/audios/pg108_audio3.mp3';
import pg108_audio4 from '../assets/audios/pg108_audio4.mp3';
import pg108_audio5 from '../assets/audios/pg108_audio5.mp3';
import pg108_audio6 from '../assets/audios/pg108_audio6.mp3';
import pg108_audio7 from '../assets/audios/pg108_audio7.mp3';
import pg108_trad1 from '../assets/audios/pg108_trad1.mp3';
import pg108_trad2 from '../assets/audios/pg108_trad2.mp3';
import pg108_trad3 from '../assets/audios/pg108_trad3.mp3';
import pg108_trad4 from '../assets/audios/pg108_trad4.mp3';
import pg108_trad5 from '../assets/audios/pg108_trad5.mp3';
import pg108_trad6 from '../assets/audios/pg108_trad6.mp3';
import pg108_trad7 from '../assets/audios/pg108_trad7.mp3';

const Pagina108 = () => {
    const [inputValues, setInputValues] = useState(
        Array(6).fill(Array(6).fill(''))
    );
    const currentAudioRef = useRef(null);

    const playAudio = (audioFile) => {
        if (audioFile) {
            const audio = new Audio(audioFile);
            audio.play().catch((error) => console.error("Erro ao reproduzir áudio:", error));
        } else {
            console.warn("Áudio não encontrado.");
        }
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
            <div className={styles.pg108Container}>
                <header className={styles.pg108Header}>
                    <h1 className={styles.pg8AudioText}
                        onClick={() => playAudio(global_grammar)} style={{ cursor: 'pointer' }}>
                        Grammar
                    </h1>
                    <h2 className={styles.pg8AudioText}
                        onClick={() => playAudio(global_simple_present)}
                        style={{ color: 'black', cursor: 'pointer' }}>
                        Simple Present (Presente Simples)
                    </h2>
                </header>
                <main className={styles.pg108Main}>
                    <div>
                        <div
                            className={styles.pg108TableHeader}
                            onClick={() => playAudio(afirmativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            AFFIRMATIVE INTERROGATIVE
                        </div>
                        <table className={styles.pg108StyledTable}>
                            <colgroup>
                                <col className={styles.pg108Sujeito} />
                                <col className={styles.pg108verbo_auxiliar} />
                                <col className={styles.pg108Adverbio} />
                                <col className={styles.pg108Verbo} />
                                <col className={styles.pg108ObjetivoComplemento} />
                                <col className={styles.pg108Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>
                                        Subject
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>
                                        Adverb
                                    </th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: 'pointer' }}>
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>
                                        Translation
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { sujeito: "Do", verboAux: "I", adverbio: "", verbo: "work", complemento: "on Mondays?", audio: pg108_audio1, tradAudio: pg108_trad1, traducao: "Eu trabalho às segundas-feiras?" },
                                    { sujeito: "Does", verboAux: "he", adverbio: "", verbo: "work", complemento: "every day?", audio: pg108_audio2, tradAudio: pg108_trad2, traducao: "Ele trabalha todos os dias?" },
                                    { sujeito: "Does", verboAux: "she", adverbio: "", verbo: "work", complemento: "at home?", audio: pg108_audio3, tradAudio: pg108_trad3, traducao: "Ela trabalha em casa?" },
                                    { sujeito: "Does", verboAux: "it", adverbio: "", verbo: "work", complemento: "now?", audio: pg108_audio4, tradAudio: pg108_trad4, traducao: "Funciona agora?" },
                                    { sujeito: "Do", verboAux: "we", adverbio: "", verbo: "work", complemento: "(on) weekdays?", audio: pg108_audio5, tradAudio: pg108_trad5, traducao: "Nós trabalhamos em dias úteis?" },
                                    { sujeito: "Do", verboAux: "you", adverbio: "", verbo: "work", complemento: "(on) weekdays?", audio: pg108_audio6, tradAudio: pg108_trad6, traducao: "Você trabalha em dias úteis?" },
                                    { sujeito: "Do", verboAux: "they", adverbio: "", verbo: "work", complemento: "on weekends?", audio: pg108_audio7, tradAudio: pg108_trad7, traducao: "Eles trabalham nos fins de semana?" },
                                ].map((linha, index) => (
                                    <tr key={index} onClick={() => playAudio(linha.audio)} style={{ cursor: 'pointer' }}>
                                        <td className={styles.pg108Sujeito}>{linha.sujeito}</td>
                                        <td className={styles.pg108verbo_auxiliar}>{linha.verboAux}</td>
                                        <td className={styles.pg108Adverbio}>{linha.adverbio}</td>
                                        <td className={styles.pg108Verbo}>{linha.verbo}</td>
                                        <td className={styles.pg108ObjetivoComplemento}>{linha.complemento}</td>
                                        <td className={styles.pg108Traducao} onClick={(e) => { e.stopPropagation(); playAudio(linha.tradAudio); }}>
                                            {linha.traducao}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>


                        </table>

                        <table className={styles.pg108StyledTable}>
                            <colgroup>
                                <col className={styles.pg108Sujeito} />
                                <col className={styles.pg108verbo_auxiliar} />
                                <col className={styles.pg108Adverbio} />
                                <col className={styles.pg108Verbo} />
                                <col className={styles.pg108ObjetivoComplemento} />
                                <col className={styles.pg108Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Adverb</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: 'pointer' }}>
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
                                                    className={styles.pg108InputCell}
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

export default Pagina108;
