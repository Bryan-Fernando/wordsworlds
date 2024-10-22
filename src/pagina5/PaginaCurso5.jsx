import { useNavigate } from 'react-router-dom';
import Estrutura from '../Estrutura';
import './PaginaCurso5.css';
import passaro from './assets/passaro.png';
import lapis from './assets/lapis.png';
import { useState, useEffect } from 'react';

const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

function PaginaCurso5() {
    const navigate = useNavigate();
    const [respostas, setRespostas] = useState({});
    const [frasesEmbaralhadas, setFrasesEmbaralhadas] = useState({});
    const [palavrasClicadas, setPalavrasClicadas] = useState({}); // Estado para controle individual de palavras

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

    useEffect(() => {
        const novasFrasesEmbaralhadas = {};
        respostasCorretas.forEach((frase, fraseIndex) => {
            novasFrasesEmbaralhadas[fraseIndex] = shuffleArray(frase);
        });
        setFrasesEmbaralhadas(novasFrasesEmbaralhadas);
    }, []);

    const formatarPalavra = (palavra, isFirst) => {
        if (isFirst) {
            return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
        } else {
            return palavra.toLowerCase();
        }
    };

    const handleWordClick = (fraseIndex, word) => {
        setRespostas((prev) => {
            const palavrasAtuais = prev[fraseIndex] || [];
            const isFirstWord = palavrasAtuais.length === 0;
            const palavraFormatada = formatarPalavra(word, isFirstWord);

            // Verifica se a palavra já está nas respostas
            if (palavrasAtuais.includes(palavraFormatada)) {
                return prev; // Não faz nada se a palavra já estiver
            }

            // Adiciona a palavra se ela não estiver nas respostas
            return {
                ...prev,
                [fraseIndex]: [...palavrasAtuais, palavraFormatada],
            };
        });

        // Atualiza o estado das palavras clicadas
        setPalavrasClicadas((prev) => ({
            ...prev,
            [`${fraseIndex}-${word}`]: true, // Define como clicada a palavra específica
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
    };

    const irParaPaginaAnterior = () => {
        navigate('/pagina/4'); 
    }
    
    const irParaProximaPagina = () => {
        navigate('/pagina/6', { state: { respostas } }); // Passa as respostas
    };
    
    return (
        <Estrutura>
            <div>
                <div className="exercicio-ordenacao">
                    <h2>Learning Language Exercises</h2>
                    <p className="questionText">Put the words in the correct order.</p>
                    
                    <div className="frases">
                        {respostasCorretas.map((_, fraseIndex) => (
                            <div key={fraseIndex}>
                                <div className="frase">
                                    {frasesEmbaralhadas[fraseIndex] && frasesEmbaralhadas[fraseIndex].map((word, wordIndex) => (
                                        <div
                                            key={wordIndex}
                                            className={`word ${respostas[fraseIndex]?.includes(formatarPalavra(word, true)) ? 'disabled' : ''} ${palavrasClicadas[`${fraseIndex}-${word}`] ? 'clicada' : ''}`}
                                            onClick={() => handleWordClick(fraseIndex, word)}
                                        >
                                            {word}
                                        </div>
                                    ))} 
                                </div>
                                <div className="input-frase">
                                    {respostas[fraseIndex] && respostas[fraseIndex].map((palavra, index) => (
                                        <span key={index} className="chip" onClick={() => handleChipClick(fraseIndex, palavra)}>
                                            {palavra}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))} 
                    </div>

                    <div>
                        <img className="imagemP1" src={passaro} alt="Imagem 1" />
                        <img className="imagemP1_2" src={lapis} alt="Imagem 2" />
                    </div>

                    <button className="check-button" id='check5' onClick={irParaProximaPagina}>Check</button>
                    <button className="anterior-button-p5" id='anterior5' onClick={irParaPaginaAnterior}>Anterior</button>
                </div>
                <div className="marcador-pagina">
                    <strong>5</strong>
                </div>
            </div>
        </Estrutura>
    );
}

export default PaginaCurso5;
