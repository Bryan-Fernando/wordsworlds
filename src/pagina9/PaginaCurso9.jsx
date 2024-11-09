import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Estrutura from '../Estrutura';
import './PaginaCurso9.css';
import imagem1 from './assets/imagem1.png';
import imagem2 from './assets/imagem2.png';
import imagem3 from './assets/imagem3.png';
import imagem4 from './assets/imagem4.png';
import imagem5 from './assets/imagem5.png';
import vSquare from '../assets/vSquare.png'; // Imagem de verificação correta
import xSquare from '../assets/xSquare.png'; // Imagem de verificação incorreta
import eIcon from '../assets/eIcon.png'; // Importando ícone de áudio
import pIcon from '../assets/pIcon.png';
import audioA from './assets/audioA.mp3';
import audioB from './assets/audioB.mp3';
import audioC from './assets/audioC.mp3';
import audioD from './assets/audioD.mp3';
import audioE from './assets/audioE.mp3';
import audio1 from './assets/audio1.mp3';
import audio2 from './assets/audio2.mp3';
import audio3 from './assets/audio3.mp3';
import audio4 from './assets/audio4.mp3';
import audio5 from './assets/audio5.mp3';
import volumeReduzidoIcon from '../assets/volumeReduzido.png';

const PaginaCurso9 = () => {
    const [inputValues, setInputValues] = useState(['', '', '', '', '']); // Inicializa os inputs vazios
    const [results, setResults] = useState([null, null, null, null, null]); // Inicializa resultados
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentAudio, setCurrentAudio] = useState(null);
    const [pulsingAudioIndex, setPulsingAudioIndex] = useState(null); // Novo estado para rastrear qual áudio está pulsando
    const [isSpeedReduced, setIsSpeedReduced] = useState([false, false, false, false, false]); // Para cada áudio
    const navigate = useNavigate();

    const irParaPaginaAnterior = () => {
        window.scrollTo(0, 0);
        navigate('/pagina/8');
    };

    const irParaProximaPagina = () => {
        window.scrollTo(0, 0);
        navigate('/pagina/10');
    };

    const audioFiles = [audioA, audioB, audioC, audioD, audioE];

    const correctSentences = [
        "I am studying for my exam.",          // A - Imagem 1
        "They are swimming in the pool.",            // B - Imagem 2
        "We are watching a movie.",              // C - Imagem 3
        "He is cleaning the house.",        // D - Imagem 4
        "She is playing the piano."              // E - Imagem 5
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

    const handleAudioClick = (index, isPortuguese = false) => {
        if (currentAudio) {
            currentAudio.pause(); // Para o áudio atual, se houver
        }
    
        // Se for o ícone português, usa os áudios audio1 a audio5, caso contrário, usa audioA a audioE
        const audioFile = isPortuguese ? [audio1, audio2, audio3, audio4, audio5][index] : audioFiles[index];
        
        const audio = new Audio(audioFile); // Cria uma nova instância de áudio
        audio.playbackRate = isSpeedReduced[index] ? 0.75 : 1; // Ajusta a velocidade do áudio específico
        setCurrentAudio(audio);
        setIsPlaying(true);
        setPulsingAudioIndex(index); // Define qual áudio está pulsando
    
        audio.play();
        audio.onended = () => {
            setIsPlaying(false); // Reseta o estado quando o áudio terminar
            setPulsingAudioIndex(null); // Remove o pulso após o término
        };
    };
    

    // Função para alternar a velocidade
    const reduzirVelocidade = (index) => {
        const newSpeedReduced = [...isSpeedReduced];
        newSpeedReduced[index] = !newSpeedReduced[index]; // Alterna o estado para o índice correspondente
        setIsSpeedReduced(newSpeedReduced); // Atualiza o estado

        // Se o áudio estiver tocando, ajuste sua velocidade
        if (currentAudio) {
            currentAudio.playbackRate = newSpeedReduced[index] ? 0.5 : 1; // Ajusta a velocidade do áudio específico
        }
    }
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
                        <p onClick={() => handleSentenceClick("I am studying for my exam.")} style={{ cursor: 'pointer' }}>
                            A) I am studying for my exam.
                        </p>
                        <img
                            src={eIcon}
                            alt="Audio Icon"
                            className={`audio-icon-1 ${pulsingAudioIndex === 0 ? 'pulse' : ''}`} // Atualizado
                            onClick={() => handleAudioClick(0)}
                        />
                        <img
                            src={pIcon}
                            alt="Portuguese Audio Icon"
                            className={`portugueseIcon ${pulsingAudioIndex === 0 ? 'pulse' : ''}`}
                            id='p1' // Atualizado
                            onClick={() => handleAudioClick(0, true)} // Passa o índice 0 para o áudio português
                        />
                    </div>
                    <div className="sentence">
                        <p onClick={() => handleSentenceClick("He is cleaning the house.")} style={{ cursor: 'pointer' }}>
                            B) He is cleaning the house.
                        </p>
                        <img
                            src={eIcon}
                            alt="Audio Icon"
                            className={`audio-icon-2 ${pulsingAudioIndex === 1 ? 'pulse' : ''}`} // Atualizado
                            onClick={() => handleAudioClick(1)}
                        />
                        <img
                            src={pIcon}
                            alt="Portuguese Audio Icon"
                            className={`portugueseIcon ${pulsingAudioIndex === 1 ? 'pulse' : ''}`}
                            id='p2' // Atualizado
                            onClick={() => handleAudioClick(1, true)} // Passa o índice 0 para o áudio português
                        />
                    </div>
                    <div className="sentence">
                        <p onClick={() => handleSentenceClick("We are watching a movie.")} style={{ cursor: 'pointer' }}>
                            C) We are watching a movie.
                        </p>
                        <img
                            src={eIcon}
                            alt="Audio Icon"
                            className={`audio-icon-3 ${pulsingAudioIndex === 2 ? 'pulse' : ''}`} // Atualizado
                            onClick={() => handleAudioClick(2)}
                        />
                        <img
                            src={pIcon}
                            alt="Portuguese Audio Icon"
                            className={`portugueseIcon ${pulsingAudioIndex === 2 ? 'pulse' : ''}`}
                            id='p3' // Atualizado
                            onClick={() => handleAudioClick(2, true)} // Passa o índice 0 para o áudio português
                        />
                    </div>
                    <div className="sentence">
                        <p onClick={() => handleSentenceClick("They are swimming in the pool.")} style={{ cursor: 'pointer' }}>
                            D) They are swimming in the pool.
                        </p>
                        <img
                            src={eIcon}
                            alt="Audio Icon"
                            className={`audio-icon-4 ${pulsingAudioIndex === 3 ? 'pulse' : ''}`} // Atualizado
                            onClick={() => handleAudioClick(3)}
                        />
                        <img
                            src={pIcon}
                            alt="Portuguese Audio Icon"
                            className={`portugueseIcon ${pulsingAudioIndex === 3 ? 'pulse' : ''}`}
                            id='p4' // Atualizado
                            onClick={() => handleAudioClick(3, true)} // Passa o índice 0 para o áudio português
                        />
                    </div>
                    <div className="sentence">
                        <p onClick={() => handleSentenceClick("She is playing the piano.")} style={{ cursor: 'pointer' }}>
                            E) She is playing the piano.
                        </p>
                        <img
                            src={eIcon}
                            alt="Audio Icon"
                            className={`audio-icon-5 ${pulsingAudioIndex === 4 ? 'pulse' : ''}`} // Atualizado
                            onClick={() => handleAudioClick(4)}
                        />
                        <img
                            src={pIcon}
                            alt="Portuguese Audio Icon"
                            className={`portugueseIcon ${pulsingAudioIndex === 4 ? 'pulse' : ''}`}
                            id='p5' // Atualizado
                            onClick={() => handleAudioClick(4, true)} // Passa o índice 0 para o áudio português
                        />
                        <img
                            src={volumeReduzidoIcon}
                            alt="Toggle Speed"
                            className={`volumeR1 ${isSpeedReduced[0] ? 'pulsing' : ''}`} // Adiciona pulsação se a velocidade estiver reduzida
                            onClick={() => reduzirVelocidade(0)} // Passa o índice específico
                        />
                        <img
                            src={volumeReduzidoIcon}
                            alt="Toggle Speed"
                            className={`volumeR2 ${isSpeedReduced[1] ? 'pulsing' : ''}`} // Adiciona pulsação se a velocidade estiver reduzida
                            onClick={() => reduzirVelocidade(1)} // Passa o índice específico
                        />
                        <img
                            src={volumeReduzidoIcon}
                            alt="Toggle Speed"
                            className={`volumeR3 ${isSpeedReduced[2] ? 'pulsing' : ''}`} // Adiciona pulsação se a velocidade estiver reduzida
                            onClick={() => reduzirVelocidade(2)} // Passa o índice específico
                        />
                        <img
                            src={volumeReduzidoIcon}
                            alt="Toggle Speed"
                            className={`volumeR4 ${isSpeedReduced[3] ? 'pulsing' : ''}`} // Adiciona pulsação se a velocidade estiver reduzida
                            onClick={() => reduzirVelocidade(3)} // Passa o índice específico
                        />
                        <img
                            src={volumeReduzidoIcon}
                            alt="Toggle Speed"
                            className={`volumeR5 ${isSpeedReduced[4] ? 'pulsing' : ''}`} // Adiciona pulsação se a velocidade estiver reduzida
                            onClick={() => reduzirVelocidade(4)} // Passa o índice específico
                        />
                    </div>
                </div>

                <button className="check-button" onClick={handleCheckClick}>
                    Check
                </button>

                <div className="botoes-navegacao">
                    <button className="anterior-button-p9" onClick={irParaPaginaAnterior}>Anterior</button>
                    <button className="proximo-button-p9" onClick={irParaProximaPagina}>Próximo</button>
                </div>

                <div className="marcador-pagina">
                    <strong>9</strong>
                </div>
            </div>
        </Estrutura>
    );
}

export default PaginaCurso9;
