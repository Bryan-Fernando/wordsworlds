import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './pagina36.module.css';
import passaro from '../assets/images/Pagina36_passaro.png';
import lapis from '../assets/images/Pagina36_lapis.png';

const Pagina36 = () => {
    const [respostas, setRespostas] = useState({});
    const [frasesEmbaralhadas, setFrasesEmbaralhadas] = useState({});
    const [palavrasClicadas, setPalavrasClicadas] = useState({});
    const navigate = useNavigate(); // Para navegação entre páginas

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
            if (palavrasAtuais.includes(word)) return prev;
            return {
                ...prev,
                [fraseIndex]: [...palavrasAtuais, word],
            };
        });

        setPalavrasClicadas((prev) => ({
            ...prev,
            [`${fraseIndex}-${word}`]: true,
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
            delete updated[`${fraseIndex}-${word}`];
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
        <div>
            <h2 className={styles.Pg36pageTitle}>Learning Language Exercises</h2>
            <p className={styles.Pg36questionText}>Put the words in the correct order.</p>

            {/* Tabela Afirmativa */}
            <div className={styles.Pg36tabelaAfirmativaContainer}>
                <div className={styles.Pg36tableHeaderAfirmativa}>AFIRMATIVA</div>
                <table className={styles.Pg36styledTableAfirmativa}>
                    <thead>
                        <tr>
                            <th>Sujeito</th>
                            <th>Verbo Auxiliar</th>
                            <th>Advérbio</th>
                            <th>Verbo(s)</th>
                            <th>Objeto Complemento</th>
                        </tr>
                    </thead>
                </table>
            </div>

            {/* Tabela Negativa */}
            <div className={styles.Pg36tabelaNegativaContainer}>
                <div className={styles.Pg36tableHeaderNegativa}>NEGATIVA</div>
                <table className={styles.Pg36styledTableNegativa}>
                    <thead>
                        <tr>
                            <th>Sujeito</th>
                            <th>Verbo Auxiliar</th>
                            <th><span style={{ color: 'red' }}>Not <br /></span> Advérbio</th>
                            <th>Verbo(s)</th>
                            <th>Objeto Complemento</th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className={styles.Pg36frases}>
                {respostasCorretas.map((_, fraseIndex) => (
                    <div key={fraseIndex} className={styles.Pg36fraseContainer}>
                        <div className={styles.Pg36frase}>
                            {frasesEmbaralhadas[fraseIndex] &&
                                frasesEmbaralhadas[fraseIndex].map((word, wordIndex) => (
                                    <div
                                        key={wordIndex}
                                        className={`${styles.Pg36word} ${
                                            palavrasClicadas[`${fraseIndex}-${word}`] ? styles.Pg36disabled : ''
                                        }`}
                                        onClick={() => handleWordClick(fraseIndex, word)}
                                    >
                                        {word}
                                    </div>
                                ))}
                        </div>
                        <div className={styles.Pg36inputFrase}>
                            {respostas[fraseIndex] &&
                                respostas[fraseIndex].map((palavra, index) => (
                                    <span
                                        key={index}
                                        className={styles.Pg36chip}
                                        onClick={() => handleChipClick(fraseIndex, palavra)}
                                    >
                                        {palavra}
                                    </span>
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.Pg36imagens}>
                <img className={styles.Pg36imagem} src={passaro} alt="Pássaro" />
                <img className={styles.Pg36imagem} src={lapis} alt="Lápis" />
            </div>

            <button
                className={styles.Pg36checkButton}
                onClick={verificarRespostas}
            >
                Check
            </button>
        </div>
    );
};

export default Pagina36;
