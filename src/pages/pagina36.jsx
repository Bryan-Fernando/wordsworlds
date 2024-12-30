import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './pagina36.module.css';
import passaro from '../assets/images/Pagina36_passaro.png';
import lapis from '../assets/images/Pagina36_lapis.png';

const Pagina36 = () => {
    const [respostas, setRespostas] = useState({});
    const [frasesEmbaralhadas, setFrasesEmbaralhadas] = useState({});
    const [palavrasClicadas, setPalavrasClicadas] = useState({});
    const navigate = useNavigate();

    const respostasCorretas = [
        ['There is', 'a bird', 'in the nest'],
        ["There aren't", 'any clouds', 'in the sky'],
        ['There are', 'three books', 'on the shelf'],
        ["There aren't", 'many people', 'at the party'],
        ['There is', 'a pencil', 'on the table'],
        ['There is', 'a couch', 'in the living room'],
        ["There isn't", 'any milk', 'in the fridge'],
        ["There isn't", 'a grocery store', 'in this neighborhood'],
    ];

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
        const resultado = respostasCorretas.map((resposta, index) => {
            const respostaUsuario = respostas[index] || [];
            return JSON.stringify(resposta) === JSON.stringify(respostaUsuario);
        });

        navigate('/pagina37', { state: { respostasUsuario: respostas, resultado } });
    };

    return (
        <div className={styles.pg36Container}>
            <header className={styles.pg36Header}>
                <h1 className={styles.pg36pageTitle}>Learning Language Exercises</h1>
                <h2 className={styles.pg36questionText}>Put the words in the correct order.</h2>
            </header>

            <div className={styles.pg36MainAsideContainer}>
                <main className={styles.pg36MainContainer}>
                    <div className={styles.pg36frases}>
                        {respostasCorretas.map((_, fraseIndex) => (
                            <div key={fraseIndex} className={styles.pg36fraseContainer}>
                                <div className={styles.pg36frase}>
                                    {frasesEmbaralhadas[fraseIndex] &&
                                        frasesEmbaralhadas[fraseIndex].map((word, wordIndex) => (
                                            <div
                                                key={wordIndex}
                                                className={`${styles.pg36word} ${palavrasClicadas[`${fraseIndex}-${word.toLowerCase()}`] ? styles.pg36disabled : ''}`}
                                                onClick={() => handleWordClick(fraseIndex, word)}
                                            >
                                                {word}
                                            </div>
                                        ))}
                                </div>

                                <div className={styles.pg36inputFrase}>
                                    {respostas[fraseIndex] &&
                                        respostas[fraseIndex].map((palavra, index) => (
                                            <div
                                                key={index}
                                                className={styles.pg36chip}
                                                onClick={() => handleChipClick(fraseIndex, palavra)}
                                            >
                                                {index === 0
                                                    ? palavra.charAt(0).toUpperCase() + palavra.slice(1)
                                                    : palavra}
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className={styles.pg36checkButton} onClick={verificarRespostas}>
                        Check
                    </button>
                </main>

                <aside className={styles.pg36AsideContainer}>
                    <div className={styles.pg36tabelaAfirmativaContainer}>
                        <div className={styles.pg36tableHeaderAfirmativa}>AFIRMATIVA</div>
                        <table className={styles.pg36styledTableAfirmativa}>
                            <thead>
                                <tr>
                                    <th>Sujeito</th>
                                    <th>Verbo Auxiliar</th>
                                    <th>Adverb</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto Complemento</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className={styles.pg36tabelaNegativaContainer}>
                        <div className={styles.pg36tableHeaderNegativa}>NEGATIVA</div>
                        <table className={styles.pg36styledTableNegativa}>
                            <thead>
                                <tr>
                                    <th>Sujeito</th>
                                    <th>Verbo Auxiliar</th>
                                    <th>
                                        <span style={{ color: 'red' }}>Not</span> <br /> Adverb
                                    </th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto Complemento</th>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    <div className={styles.pg36ImagensContainer}>
                        <img src={passaro} alt="Pássaro" className={styles.pg36Imagem} />
                        <img src={lapis} alt="Lápis" className={styles.pg36Imagem} />
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina36;
