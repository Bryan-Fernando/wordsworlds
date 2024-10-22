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
import audioA from './assets/audioA.mp3';
import audioB from './assets/audioB.mp3';
import audioC from './assets/audioC.mp3';
import audioD from './assets/audioD.mp3';
import audioE from './assets/audioE.mp3';
import volumeReduzidoIcon from '../assets/volumeReduzido.png';

const PaginaCurso9 = () => {
    const [inputValues, setInputValues] = useState(['', '', '', '', '']); // Inicializa os inputs vazios
    const [results, setResults] = useState([null, null, null, null, null]); // Inicializa resultados
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentAudio, setCurrentAudio] = useState(null);
    const [pulsingAudioIndex, setPulsingAudioIndex] = useState(null); // Novo estado para rastrear qual áudio está pulsando
    const [isSpeedReduced, setIsSpeedReduced] = useState(false);
    const navigate = useNavigate();

    const irParaPaginaAnterior = () => {
        navigate('/pagina/8');
    };

    const irParaProximaPagina = () => {
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

    const handleAudioClick = (index) => {
        if (currentAudio) {
            currentAudio.pause(); // Para o áudio atual, se houver
        }
    
        const audio = new Audio(audioFiles[index]); // Cria uma nova instância de áudio
    
        // Define a velocidade do áudio com base na velocidade atual (normal ou lenta)
        audio.playbackRate = isSpeedReduced ? 0.5 : 1; // Se 'isSpeedReduced' for true, fica lento (0.5), senão, normal (1)
        
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
    const reduzirVelocidade = () => {
        setIsSpeedReduced((prev) => !prev); // Alterna o estado de 'isSpeedReduced'
        
        // Se um áudio estiver tocando, ajuste sua velocidade imediatamente
        if (currentAudio) {
            currentAudio.playbackRate = !isSpeedReduced ? 0.5 : 1; // Se a velocidade não estiver reduzida, reduz para 0.5x, caso contrário, volta para 1x
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
                            src={volumeReduzidoIcon}
                            alt="Toggle Speed"
                            className="volumeR1"
                            onClick={reduzirVelocidade}
                        />
                        <img
                            src={volumeReduzidoIcon}
                            alt="Toggle Speed"
                            className="volumeR2"
                            onClick={reduzirVelocidade}
                        />
                        <img
                            src={volumeReduzidoIcon}
                            alt="Toggle Speed"
                            className="volumeR3"
                            onClick={reduzirVelocidade}
                        />
                        <img
                            src={volumeReduzidoIcon}
                            alt="Toggle Speed"
                            className="volumeR4"
                            onClick={reduzirVelocidade}
                        />
                          <img
                            src={volumeReduzidoIcon}
                            alt="Toggle Speed"
                            className="volumeR5"
                            onClick={reduzirVelocidade}
                        />
                    </div>
                </div>

                <button className="check-button" onClick={handleCheckClick}>
                    Check
                </button>

                <div className="botoes-navegacao">
                    <button className="anterior-button" id='anterior9'onClick={irParaPaginaAnterior}>Anterior</button>
                    <button className="proximo-button" id='proximo9' onClick={irParaProximaPagina}>Próximo</button>
                </div>

                <div className="marcador-pagina">
                    <strong>9</strong>
                </div>
            </div>
        </Estrutura>
    );
}

export default PaginaCurso9;
