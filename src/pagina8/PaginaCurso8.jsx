import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Estrutura from '../Estrutura';
import './PaginaCurso8.css';
import imagem1 from './assets/imagem1.png';
import imagem2 from './assets/imagem2.png';
import imagem3 from './assets/imagem3.png';
import imagem4 from './assets/imagem4.png';
import imagem5 from './assets/imagem5.png';
import vSquare from '../assets/vSquare.png'; // Imagem de verificação correta
import xSquare from '../assets/xSquare.png'; // Imagem de verificação incorreta
import eIcon from '../assets/eIcon.png'; // Importando ícone de áudio
import audioA from './assets/audioA.mp3';
import audioB from './assets/audioB.mp3';
import audioC from './assets/audioC.mp3';
import audioD from './assets/audioD.mp3';
import audioE from './assets/audioE.mp3';
import pIcon from '../assets/pIcon.png'; // Ícone adicional para o áudio em português
import audio1 from './assets/audio1.mp3';
import audio2 from './assets/audio2.mp3';
import audio3 from './assets/audio3.mp3';
import audio4 from './assets/audio4.mp3';
import audio5 from './assets/audio5.mp3';
import volumeReduzidoIcon from '../assets/volumeReduzido.png';

const PaginaCurso8 = () => {
    const [inputValues, setInputValues] = useState(['', '', '', '', '']); // Inicializa os inputs vazios
    const [results, setResults] = useState([null, null, null, null, null]); // Inicializa resultados
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentAudio, setCurrentAudio] = useState(null);
    const [pulsingAudioIndex, setPulsingAudioIndex] = useState(null); // Novo estado para rastrear qual áudio está pulsando
    const [isSpeedReduced, setIsSpeedReduced] = useState([false, false, false, false, false]); // Altera para uma lista de booleanos

    const navigate = useNavigate();

    const irParaPaginaAnterior = () => {
        window.scrollTo(0, 0);
        navigate('/pagina/7');
    };

    const irParaProximaPagina = () => {
        window.scrollTo(0, 0);
        navigate('/pagina/9');
    };


    const audioFiles = [audioA, audioB, audioC, audioD, audioE];

    const correctSentences = [
        "The dog is sleeping on the floor.", // C
        "We are cooking dinner.",             // E
        "He is writing a letter.",            // D
        "She is drinking coffee.",             // A
        "They are playing basketball."         // B
    ];

    const handleSentenceClick = (sentence) => {
        setInputValues(prevValues => {
            const newValues = [...prevValues];
            const index = newValues.indexOf(sentence);

            // Se a sentença já estiver nos inputs, remove-a
            if (index !== -1) {
                newValues[index] = ''; // Remove a sentença se já estiver no input
            } else {
                // Caso contrário, adiciona a sentença ao primeiro input vazio
                const emptyIndex = newValues.findIndex(value => value === '');
                if (emptyIndex !== -1) {
                    newValues[emptyIndex] = sentence; // Adiciona a sentença ao primeiro input vazio
                }
            }
            return newValues;
        });
    };

    const handleCheckClick = () => {
        // Verifica as respostas e atualiza os resultados
        const newResults = inputValues.map((value, index) => (
            value === correctSentences[index] ? true : false
        ));
        setResults(newResults);
        console.log("Verificar respostas:", inputValues);
    };

    const handleAudioClick = (index) => {
        if (currentAudio) {
            currentAudio.pause();
        }

        const audio = new Audio(audioFiles[index]);
        audio.playbackRate = isSpeedReduced[index] ? 0.75 : 1; // Define a velocidade com base na lista de velocidades
        setCurrentAudio(audio);
        setIsPlaying(true);
        setPulsingAudioIndex(index);

        audio.play();
        audio.onended = () => {
            setIsPlaying(false);
            setPulsingAudioIndex(null);
        };
    };

    // Função para alternar a velocidade
    const reduzirVelocidade = (index) => {
        setIsSpeedReduced((prev) => {
            const newSpeeds = [...prev];
            newSpeeds[index] = !newSpeeds[index]; // Alterna a velocidade apenas para o índice específico
            return newSpeeds;
        });

        if (currentAudio && pulsingAudioIndex === index) {
            currentAudio.playbackRate = !isSpeedReduced[index] ? 0.75 : 1;
        }
    };


    return (
        <Estrutura>
            <div className="exercise-container">
                <h2>Exercise: </h2>
                <p className='exerciseTitle'>2. Matching Exercises (Match the sentence with the correct image/description)</p>
                <p className='exerciseQuestion'>Match the sentence (A-E) with the correct picture or description (1-5):</p>

                <div className="images-container">
                    {inputValues.slice(0, 3).map((value, index) => (
                        <div className="image-box" key={index}>
                            <img src={index === 0 ? imagem1 : index === 1 ? imagem2 : imagem3} alt={`Imagem ${index + 1}`} />
                            <input
                                type="text"
                                className="input-box"
                                placeholder="Place here"
                                value={value}
                                onChange={(e) => {
                                    const newValues = [...inputValues];
                                    newValues[index] = e.target.value; // Atualiza o input se o usuário digitar
                                    setInputValues(newValues);
                                }}
                            />
                            {/* Imagem de verificação com a nova classe */}
                            {results[index] !== null && (
                                <img
                                    src={results[index] ? vSquare : xSquare}
                                    alt={results[index] ? "Correct" : "Incorrect"}
                                    className={`checkmark-image ${results[index] ? 'has-border' : 'no-border'}`} // Ajuste aqui
                                />
                            )}
                        </div>
                    ))}
                </div>

                <div className="images-container-2">
                    {inputValues.slice(3).map((value, index) => (
                        <div className="image-box" key={index + 3}>
                            <img src={index === 0 ? imagem4 : imagem5} alt={`Imagem ${index + 4}`} />
                            <input
                                type="text"
                                className="input-box"
                                placeholder="Place here"
                                value={value}
                                onChange={(e) => {
                                    const newValues = [...inputValues];
                                    newValues[index + 3] = e.target.value; // Atualiza o input se o usuário digitar
                                    setInputValues(newValues);
                                }}
                            />
                            {/* Imagem de verificação com a nova classe */}
                            {results[index + 3] !== null && (
                                <img
                                    src={results[index + 3] ? vSquare : xSquare}
                                    alt={results[index + 3] ? "Correct" : "Incorrect"}
                                    className={`checkmark-image ${results[index + 3] ? 'has-border' : 'no-border'}`} // Ajuste aqui
                                />
                            )}
                        </div>
                    ))}
                </div>

                <div className="sentences-container">
                    <p><strong>Sentences:</strong></p>
                    <div className="sentence">
                        <p onClick={() => handleSentenceClick("She is drinking coffee.")} style={{ cursor: 'pointer' }}>
                            A) She is drinking coffee.
                        </p>
                        <img
                            src={eIcon}
                            alt="Audio Icon"
                            className={`audio-icon-1 ${pulsingAudioIndex === 0 ? 'pulse' : ''}`} // Atualizado
                            onClick={() => handleAudioClick(0)}
                        />
                        <img
                            src={volumeReduzidoIcon}
                            alt="Toggle Speed"
                            className={`volumeR1 ${isSpeedReduced[0] ? 'pulsing' : ''}`} // Para o índice 0
                            onClick={() => reduzirVelocidade(0)} // Passa o índice 0
                        />
                        {/* Novo ícone português */}
                        <img
                            src={pIcon}
                            alt="Portuguese Audio Icon"
                            className={`portugueseIcon ${pulsingAudioIndex === 0 ? 'pulse' : ''}`}
                            id='p1' // Atualizado
                            onClick={() => handleAudioClick(0, true)} 
                        />
                    </div>

                    <div className="sentence">
                        <p onClick={() => handleSentenceClick("They are playing basketball.")} style={{ cursor: 'pointer' }}>
                            B) They are playing basketball.
                        </p>
                        <img
                            src={eIcon}
                            alt="Audio Icon"
                            className={`audio-icon-2 ${pulsingAudioIndex === 1 ? 'pulse' : ''}`} // Atualizado
                            onClick={() => handleAudioClick(1)}
                        />
                        <img
                            src={volumeReduzidoIcon}
                            alt="Toggle Speed"
                            className={`volumeR2 ${isSpeedReduced[1] ? 'pulsing' : ''}`} // Para o índice 1
                            onClick={() => reduzirVelocidade(1)} // Passa o índice 1
                        />
                        {/* Novo ícone português */}
                        <img
                            src={pIcon}
                            alt="Portuguese Audio Icon"
                            className={`portugueseIcon ${pulsingAudioIndex === 1 ? 'pulse' : ''}`}
                            id='p2'// Atualizado
                            onClick={() => handleAudioClick(1, true)} // Passa o índice 1 para o áudio português
                        />
                    </div>

                    <div className="sentence">
                        <p onClick={() => handleSentenceClick("The dog is sleeping on the floor.")} style={{ cursor: 'pointer' }}>
                            C) The dog is sleeping on the floor.
                        </p>
                        <img
                            src={eIcon}
                            alt="Audio Icon"
                            className={`audio-icon-3 ${pulsingAudioIndex === 2 ? 'pulse' : ''}`} // Atualizado
                            onClick={() => handleAudioClick(2)}
                        />
                        <img
                            src={volumeReduzidoIcon}
                            alt="Toggle Speed"
                            className={`volumeR3 ${isSpeedReduced[2] ? 'pulsing' : ''}`} // Para o índice 2
                            onClick={() => reduzirVelocidade(2)} // Passa o índice 2
                        />
                        {/* Novo ícone português */}
                        <img
                            src={pIcon}
                            alt="Portuguese Audio Icon"
                            className={`portugueseIcon ${pulsingAudioIndex === 2 ? 'pulse' : ''}`}
                            id='p3' // Atualizado
                            onClick={() => handleAudioClick(2, true)} // Passa o índice 2 para o áudio português
                        />
                    </div>

                    <div className="sentence">
                        <p onClick={() => handleSentenceClick("He is writing a letter.")} style={{ cursor: 'pointer' }}>
                            D) He is writing a letter.
                        </p>
                        <img
                            src={eIcon}
                            alt="Audio Icon"
                            className={`audio-icon-4 ${pulsingAudioIndex === 3 ? 'pulse' : ''}`} // Atualizado
                            onClick={() => handleAudioClick(3)}
                        />
                        <img
                            src={volumeReduzidoIcon}
                            alt="Toggle Speed"
                            className={`volumeR4 ${isSpeedReduced[3] ? 'pulsing' : ''}`} // Para o índice 3
                            onClick={() => reduzirVelocidade(3)} // Passa o índice 3
                        />
                        {/* Novo ícone português */}
                        <img
                            src={pIcon}
                            alt="Portuguese Audio Icon"
                            className={`portugueseIcon ${pulsingAudioIndex === 3 ? 'pulse' : ''}`}
                            id='p4' // Atualizado
                            onClick={() => handleAudioClick(3, true)} // Passa o índice 3 para o áudio português
                        />
                    </div>

                    <div className="sentence">
                        <p onClick={() => handleSentenceClick("We are cooking dinner.")} style={{ cursor: 'pointer' }}>
                            E) We are cooking dinner.
                        </p>
                        <img
                            src={eIcon}
                            alt="Audio Icon"
                            className={`audio-icon-5 ${pulsingAudioIndex === 4 ? 'pulse' : ''}`} 
                            // Atualizado
                            onClick={() => handleAudioClick(4)}
                        />
                        <img
                            src={volumeReduzidoIcon}
                            alt="Toggle Speed"
                            className={`volumeR5 ${isSpeedReduced[4] ? 'pulsing' : ''}`} // Para o índice 4
                            onClick={() => reduzirVelocidade(4)} // Passa o índice 4
                        />
                        {/* Novo ícone português */}
                        <img
                            src={pIcon}
                            alt="Portuguese Audio Icon"
                            className={`portugueseIcon ${pulsingAudioIndex === 4 ? 'pulse' : ''}`}
                            id='p5' // Atualizado
                            onClick={() => handleAudioClick(4, true)} // Passa o índice 4 para o áudio português
                        />
                    </div>

                </div>

                <button className="check-button" onClick={handleCheckClick}>
                    Check
                </button>

                <div className="botoes-navegacao-p8">
                    <button className="anterior-button-p8" onClick={irParaPaginaAnterior}>Anterior</button>
                    <button className="proximo-button-p8" onClick={irParaProximaPagina}>Próximo</button>
                </div>

                <div className="marcador-pagina">
                    <strong>8</strong>
                </div>
            </div>
        </Estrutura>
    );
}

export default PaginaCurso8;
