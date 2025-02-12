import React, { useState, useEffect } from 'react';

import styles from './pagina69.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina69_imagem1 from '../assets/images/pagina69_imagem1.webp';
import pagina69_imagem2 from '../assets/images/pagina69_imagem2.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg69_audio1e from "../assets/audios/pg69_audio1e.mp3";
import pg69_audio1p from "../assets/audios/pg69_audio1p.mp3";
import pg69_audio2e from "../assets/audios/pg69_audio2e.mp3";
import pg69_audio2p from "../assets/audios/pg69_audio2p.mp3";
import pg69_audio3e from "../assets/audios/pg69_audio3e.mp3";
import pg69_audio3p from "../assets/audios/pg69_audio3p.mp3";
import pg69_audio4e from "../assets/audios/pg69_audio4e.mp3";
import pg69_audio4p from "../assets/audios/pg69_audio4p.mp3";
import pg69_audio5e from "../assets/audios/pg69_audio5e.mp3";
import pg69_audio5p from "../assets/audios/pg69_audio5p.mp3";
import pg69_audio6e from "../assets/audios/pg69_audio6e.mp3";
import pg69_audio6p from "../assets/audios/pg69_audio6p.mp3";
import pg69_audio7e from "../assets/audios/pg69_audio7e.mp3";
import pg69_audio7p from "../assets/audios/pg69_audio7p.mp3";
import pg69_audio8e from "../assets/audios/pg69_audio8e.mp3";
import pg69_audio8p from "../assets/audios/pg69_audio8p.mp3";
import pg69_audio9e from "../assets/audios/pg69_audio9e.mp3";
import pg69_audio9p from "../assets/audios/pg69_audio9p.mp3";
import pg69_audio10e from "../assets/audios/pg69_audio10e.mp3";
import pg69_audio10p from "../assets/audios/pg69_audio10p.mp3";


const pagina69 = () => {
    const [respostas, setRespostas] = useState({});
    const [frasesEmbaralhadas, setFrasesEmbaralhadas] = useState({});
    const [palavrasClicadas, setPalavrasClicadas] = useState({});
    const [resultados, setResultados] = useState([]);
    const [velocidadeAudio, setVelocidadeAudio] = useState({});

    const respostasCorretas = [
        ['Is', 'he', 'at home'],
        ['Am', 'I', 'late', 'for class'],
        ['Are', 'we', 'in the same class'],
        ['Is', 'the movie', 'interesting'],
        ['Are', 'you', 'from Spain'],
        ['Is', 'she', 'your sister'],
        ['Are', 'they', 'in the park'],
        ['Is', 'the computer', 'on the desk'],
        ['Are', 'we', 'late', 'for the meeting'],
        ['Are', 'they', 'happy', 'with the results']
    ];

    const audioMap = {
        global_learning_le_e: global_learning_le_e,
        global_learning_le_p: global_learning_le_p,
        pg69_audio1e, pg69_audio1p,
        pg69_audio2e, pg69_audio2p,
        pg69_audio3e, pg69_audio3p,
        pg69_audio4e, pg69_audio4p,
        pg69_audio5e, pg69_audio5p,
        pg69_audio6e, pg69_audio6p,
        pg69_audio7e, pg69_audio7p,
        pg69_audio8e, pg69_audio8p,
        pg69_audio9e, pg69_audio9p,
        pg69_audio10e, pg69_audio10p,
    };



    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    useEffect(() => {
        const novasFrasesEmbaralhadas = {};
        respostasCorretas.forEach((frase, fraseIndex) => {
            novasFrasesEmbaralhadas[fraseIndex] = shuffleArray(frase);
        });
        setFrasesEmbaralhadas(novasFrasesEmbaralhadas);
    }, []);

    const handleWordClick = (fraseIndex, word) => {
        setRespostas((prev) => {
            const palavrasAtuais = prev[fraseIndex] || [];
            const novaPalavra =
                palavrasAtuais.length === 0
                    ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                    : word.charAt(0).toLowerCase() + word.slice(1);

            if (palavrasAtuais.includes(word)) return prev;

            return {
                ...prev,
                [fraseIndex]: [...palavrasAtuais, novaPalavra],
            };
        });

        setPalavrasClicadas((prev) => ({
            ...prev,
            [`${fraseIndex}-${word.toLowerCase()}`]: true,
        }));
    };

    const handleChipClick = (fraseIndex, word) => {
        setRespostas((prev) => {
            const palavrasAtuais = prev[fraseIndex] || [];
            return {
                ...prev,
                [fraseIndex]: palavrasAtuais.filter((palavra) => palavra !== word),
            };
        });

        setPalavrasClicadas((prev) => {
            const updated = { ...prev };
            delete updated[`${fraseIndex}-${word.toLowerCase()}`];
            return updated;
        });
    };

    const verificarRespostas = () => {
        const novosResultados = respostasCorretas.map((resposta, index) => {
            const respostaUsuario = respostas[index] || [];

            const respostaUsuarioNormalizada = respostaUsuario.map(word => word.trim().toLowerCase());
            const respostaCorretaNormalizada = resposta.map(word => word.trim().toLowerCase());

            return JSON.stringify(respostaCorretaNormalizada) === JSON.stringify(respostaUsuarioNormalizada);
        });

        setResultados(novosResultados);
    };

const playAudio = (audioKey, speed = 1.0) => {
        const audioSrc = audioMap[audioKey];
        if (audioSrc) {
            const audio = new Audio(audioSrc);
            audio.playbackRate = speed; // Define a velocidade do áudio (1.0 = normal, 0.75x = reduzida)
            audio.play();
        } else {
            console.warn(`Áudio não encontrado para a chave: ${audioKey}`);
        }
    };


    return (
        <div className={styles["page69__container"]}>
            <header className={styles["page69__header"]}>
                <h1 className={styles["page69__header-title"]}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page69__audio-icon"]}
                        onClick={() => playAudio('global_learning_le_e')}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page69__audio-icon"]}
                        onClick={() => playAudio('global_learning_le_p')}
                    />
                </h1>
                <p><span className={styles["page69__text--red"]}>Word Order:</span> Unscramble the words to form questions.</p>
                <p><span className={styles["page69__text--red"]}>Ordem das Palavras:</span> Reorganize as palavras para formar perguntas.</p>
                <p><span className={styles["page69__text--red"]}>Click</span> the words to form the correct sentence.</p>
                <p><span className={styles["page69__text--red"]}>Clique</span> nas palavras para formar a frase correta.</p>
            </header>
    
            <div className={styles["page69__table-interrogative-container"]}>
                <div className={styles["page69__table-header-interrogative"]}>INTERROGATIVA</div>
                <table className={styles["page69__styled-table-interrogative"]}>
                    <thead className={styles["page69__thead"]}>
                        <tr className={styles["page69__table-row"]}>
                            <th>Palavras <br /> Interrogativas</th>
                            <th>Verbo <br /> Auxiliar</th>
                            <th>Sujeito</th>
                            <th><span className={styles["highlight"]}>Not</span> <br />Advérbio</th>
                            <th>Verbo(s)</th>
                            <th>Objeto <br /> Complemento</th>
                        </tr>
                    </thead>
                </table>
            </div>
    
            <div className={styles["page69__main-aside-container"]}>
                <main className={styles["page69__main-container"]}>
                    <div className={styles["page69__phrases"]}>
                        {respostasCorretas.map((_, fraseIndex) => (
                            <div key={fraseIndex} className={styles["page69__phrase-container"]}>
                                <div className={styles["page69__phrase"]}>
                                    {frasesEmbaralhadas[fraseIndex] &&
                                        frasesEmbaralhadas[fraseIndex].map((word, wordIndex) => (
                                            <div
                                                key={wordIndex}
                                                className={`${styles["page69__word"]} ${palavrasClicadas[`${fraseIndex}-${word.toLowerCase()}`] ? styles["page69__word--disabled"] : ""}`}
                                                onClick={() => handleWordClick(fraseIndex, word)}
                                            >
                                                {word}
                                            </div>
                                        ))}
                                </div>
    
                                <div className={styles["page69__input-phrase"]}>
                                    {respostas[fraseIndex] &&
                                        respostas[fraseIndex].map((palavra, index) => (
                                            <div
                                                key={index}
                                                className={styles["page69__chip"]}
                                                onClick={() => handleChipClick(fraseIndex, palavra)}
                                            >
                                                {index === 0
                                                    ? palavra.charAt(0).toUpperCase() + palavra.slice(1)
                                                    : palavra}
                                            </div>
                                        ))}
    
                                    {resultados.length > 0 && (
                                        <>
                                            {resultados[fraseIndex] ? (
                                                <>
                                                    {/* Ícone de Correto */}
                                                    <img
                                                        src={correct_icon}
                                                        alt="Correto"
                                                        className={styles["page69__icon--correct"]}
                                                    />
    
                                                    {/* Ícone de Áudio Inglês */}
                                                    <img
                                                        src={eng_audio_icon}
                                                        alt="Play English Audio"
                                                        className={styles["icon--english"]}
                                                        onClick={() => playAudio(`pg69_audio${fraseIndex + 1}e`)}
                                                        style={{ cursor: "pointer" }}
                                                    />
    
                                                    {/* Ícone de Áudio Português */}
                                                    <img
                                                        src={ptbr_audio_icon}
                                                        alt="Play Portuguese Audio"
                                                        className={styles["icon--portuguese"]}
                                                        onClick={() => playAudio(`pg69_audio${fraseIndex + 1}p`)}
                                                        style={{ cursor: "pointer" }}
                                                    />
                                                </>
                                            ) : (
                                                <img
                                                    src={wrong_icon}
                                                    alt="Errado"
                                                    className={styles["page69__icon--wrong"]}
                                                />
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className={styles["page69__check-button"]} onClick={verificarRespostas}>
                        Check
                    </button>
                </main>
    
                <aside className={styles["page69__aside-container"]}>
                    <div className={styles["page69__images-container"]}>
                        <img src={pagina69_imagem1} alt="Imagem 1" className={styles["page69__image"]} />
                        <img src={pagina69_imagem2} alt="Imagem 2" className={styles["page69__image"]} />
                    </div>
                </aside>
            </div>
        </div>
    );
    
};

export default pagina69;
