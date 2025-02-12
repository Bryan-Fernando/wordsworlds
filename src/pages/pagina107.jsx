import React, { useState, useRef } from 'react';

import styles from './pagina107.module.css';

import pg10IconNotes from '../assets/icons/notes_icon.webp';

import negativaAudio from '../assets/audios/negativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present from '../assets/audios/global_simple_present.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg107_audio1 from '../assets/audios/pg107_audio1.mp3';
import pg107_audio2 from '../assets/audios/pg107_audio2.mp3';
import pg107_audio3 from '../assets/audios/pg107_audio3.mp3';
import pg107_audio4 from '../assets/audios/pg107_audio4.mp3';
import pg107_audio5 from '../assets/audios/pg107_audio5.mp3';
import pg107_audio6 from '../assets/audios/pg107_audio6.mp3';
import pg107_audio7 from '../assets/audios/pg107_audio7.mp3';

import pg107_trad1 from '../assets/audios/pg107_trad1.mp3';
import pg107_trad2 from '../assets/audios/pg107_trad2.mp3';
import pg107_trad3 from '../assets/audios/pg107_trad3.mp3';
import pg107_trad4 from '../assets/audios/pg107_trad4.mp3';
import pg107_trad5 from '../assets/audios/pg107_trad5.mp3';
import pg107_trad6 from '../assets/audios/pg107_trad6.mp3';
import pg107_trad7 from '../assets/audios/pg107_trad7.mp3';

const Pagina107 = () => {
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
            <div className={styles.pg107Container}>
                <header className={styles.pg107Header}>
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
                <main className={styles.pg107Main}>
                    <div>
                        <div
                            className={styles.pg107TableHeader}
                            onClick={() => playAudio(negativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            NEGATIVE
                        </div>
                        <table className={styles.pg107StyledTable}>
                            <colgroup>
                                <col className={styles.pg107Sujeito} />
                                <col className={styles.pg107verbo_auxiliar} />
                                <col className={styles.pg107Adverbio} />
                                <col className={styles.pg107Verbo} />
                                <col className={styles.pg107ObjetivoComplemento} />
                                <col className={styles.pg107Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br /> Adverb</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: 'pointer' }}>
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Translation</th>
                                </tr>
                            </thead>
                            <tbody>
    {[
        { subject: "I", aux: "do", adv: "not", verb: "work", obj: "on Mondays", trad: "Eu não trabalho às segundas-feiras", audio: pg107_audio1, tradAudio: pg107_trad1 },
        { subject: "He", aux: "doesn't", adv: "", verb: "work", obj: "every day", trad: "Ele não trabalha todos os dias", audio: pg107_audio2, tradAudio: pg107_trad2 },
        { subject: "She", aux: "does", adv: "not", verb: "work", obj: "at home", trad: "Ela não trabalha em casa", audio: pg107_audio3, tradAudio: pg107_trad3 },
        { subject: "It", aux: "does", adv: "not", verb: "work", obj: "that way", trad: "Não funciona dessa maneira", audio: pg107_audio4, tradAudio: pg107_trad4 },
        { subject: "We", aux: "do", adv: "not", verb: "work", obj: "on weekdays", trad: "Nós não trabalhamos em dias úteis", audio: pg107_audio5, tradAudio: pg107_trad5 },
        { subject: "You", aux: "do", adv: "not", verb: "work", obj: "hard", trad: "Você não trabalha duro", audio: pg107_audio6, tradAudio: pg107_trad6 },
        { subject: "They", aux: "don’t", adv: "", verb: "work", obj: "on Weekends", trad: "Eles não trabalham nos fins de semana", audio: pg107_audio7, tradAudio: pg107_trad7 },
    ].map((row, index) => (
        <tr key={index} onClick={() => playAudio(row.audio)} style={{ cursor: "pointer" }}>
            <td className={styles.pg107Sujeito}>{row.subject}</td>
            <td className={styles.pg107verbo_auxiliar}>{row.aux}</td>
            <td className={styles.pg107Adverbio}>{row.adv}</td>
            <td className={styles.pg107Verbo}>{row.verb}</td>
            <td className={styles.pg107ObjetivoComplemento}>{row.obj}</td>
            <td
                className={styles.pg107Traducao}
                onClick={(e) => {
                    e.stopPropagation(); // Evita que clique no TD dispare o evento do TR
                    playAudio(row.tradAudio);
                }}
            >
                {row.trad}
            </td>
        </tr>
    ))}
</tbody>

                        </table>
                        <table className={styles.pg107StyledTable}>
                            <colgroup>
                                <col className={styles.pg107Sujeito} />
                                <col className={styles.pg107verbo_auxiliar} />
                                <col className={styles.pg107Adverbio} />
                                <col className={styles.pg107Verbo} />
                                <col className={styles.pg107ObjetivoComplemento} />
                                <col className={styles.pg107Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br /> Adverb</th>
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
                                                    id={`input-${rowIndex}-${colIndex}`}
                                                    className={styles.pg107InputCell}
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
                <aside className={styles.pg107Aside}>
                    <div className={styles.pg107AsideNotes1A}>
                        <p>Word Bank</p>
                    </div>
                    <div className={styles.pg107AsideNotes2A}>
                        <p>That way <br />
                            Dessa forma.
                            <br />
                            Hard <br />
                            Muito.
                        </p>
                    </div>
                </aside>
                <aside className={styles.pg107Aside}>
                    <div className={styles.pg107AsideNotes1B}>
                        <img className={styles.pg107AsideImgNotes} src={pg10IconNotes} alt="" />
                        <p>NOTE</p>
                    </div>
                    <div className={styles.pg107AsideNotes2B}>
                        <p>Don’t = Do not <br />Doesn’t = Does not
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina107;
