import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Estrutura from '../Estrutura';
import './PaginaCurso6.css';
import eIcon from '../assets/eIcon.png'; 
import portugueseIcon from '../assets/pIcon.png'; 
import volumeReduzidoIcon from '../assets/volumeReduzido.png'; 
import vSquare from '../assets/vSquare.png';
import xSquare from '../assets/xSquare.png';
import e1 from './assets/e1.mp3';
import e2 from './assets/e2.mp3';
import e3 from './assets/e3.mp3';
import e4 from './assets/e4.mp3';
import e5 from './assets/e5.mp3';
import e6 from './assets/e6.mp3';
import e7 from './assets/e7.mp3';
import e8 from './assets/e8.mp3';
import p1 from './assets/p1.mp3';
import p2 from './assets/p2.mp3';
import p3 from './assets/p3.mp3';
import p4 from './assets/p4.mp3';
import p5 from './assets/p5.mp3';
import p6 from './assets/p6.mp3';
import p7 from './assets/p7.mp3';
import p8 from './assets/p8.mp3';

const audios = {
    english: [
        new Audio(e1),
        new Audio(e2),
        new Audio(e3),
        new Audio(e4),
        new Audio(e5),
        new Audio(e6),
        new Audio(e7),
        new Audio(e8),
    ],
    portuguese: [
        new Audio(p1),
        new Audio(p2),
        new Audio(p3),
        new Audio(p4),
        new Audio(p5),
        new Audio(p6),
        new Audio(p7),
        new Audio(p8),
    ],
};

function PaginaCurso6() {
    const navigate = useNavigate();
    const location = useLocation();
    const { respostas } = location.state || { respostas: {} };
    const [isSpeedReduced, setIsSpeedReduced] = useState(false);
    const [playingAudio, setPlayingAudio] = useState(null);
    const [percentualAcertos, setPercentualAcertos] = useState(0);

    useEffect(() => {
        const acertos = respostasCorretas.filter((resposta, index) => respostas[index]?.join(' ') === resposta).length;
        const percentual = (acertos / respostasCorretas.length) * 100;
        setPercentualAcertos(percentual);
    }, [respostas]);

    const irParaPaginaAnterior = () => {
        window.scrollTo(0, 0);
        navigate('/pagina/5');
    };

    const irParaProximaPagina = () => {
        window.scrollTo(0, 0);
        navigate('/pagina/7');
    };

    const playAudio = (index, language) => {
        if (playingAudio) {
            playingAudio.pause();
            playingAudio.currentTime = 0;
        }
    
        const audioToPlay = audios[language][index];
        
        setTimeout(() => {
            audioToPlay.play();
            setPlayingAudio(audioToPlay);
    
            audioToPlay.onended = () => {
                setPlayingAudio(null);
            };
        }, 700); 
    };

    const reduzirVelocidade = () => {
        Object.keys(audios).forEach(language => {
            audios[language].forEach(audio => {
                audio.playbackRate = isSpeedReduced ? 1 : 0.75;
            });
        });
        setIsSpeedReduced(!isSpeedReduced);
    };

    const respostasCorretas = [
        'There is a bird in the nest',
        "There aren't any clouds in the sky",
        'There are three books on the shelf',
        "There aren't many people at the party",
        'There is a pencil on the table',
        'There is a couch in the living room',
        "There isn't any milk in the fridge",
        "There isn't a grocery store in this neighborhood",
    ];

    return (
        <Estrutura>
            <div className="respostas-container">
                <h2>Answers</h2>
                <h3>Para reduzir a velocidade da reprodução para 0.75x, clique no </h3>
                <img src={volumeReduzidoIcon} className='iconTitle' alt="Ícone de volume reduzido" />
                
                <div className="percentual-acertos">
                    <span>{percentualAcertos.toFixed(0)}%</span>
                </div>

                <div className="respostas-lista">
                    {respostasCorretas.map((resposta, index) => (
                        <div key={index} className="resposta-item">
                            {respostas[index] ? respostas[index].join(' ') : ''}
                            <img
                                src={respostas[index] && respostas[index].join(' ') === resposta ? vSquare : xSquare}
                                alt={respostas[index] && respostas[index].join(' ') === resposta ? 'Correct' : 'Incorrect'}
                                className={`resposta-status ${respostas[index] && respostas[index].join(' ') === resposta ? 'correta' : 'incorreta'}`}
                            />
                            {respostas[index] && respostas[index].join(' ') === resposta && (
                                <>
                                    <img
                                        className={`englishAudio ${playingAudio === audios.english[index] ? 'pulse' : ''}`}
                                        src={eIcon}
                                        alt="Play English Audio"
                                        onClick={() => playAudio(index, 'english')}
                                    />
                                    <img
                                        className={`portugueseAudio ${playingAudio === audios.portuguese[index] ? 'pulse' : ''}`}
                                        src={portugueseIcon}
                                        alt="Play Portuguese Audio"
                                        onClick={() => playAudio(index, 'portuguese')}
                                    />
                                    <img
                                        className="volumeReduzido"
                                        src={volumeReduzidoIcon}
                                        alt="Toggle Speed"
                                        onClick={reduzirVelocidade}
                                    />
                                </>
                            )}
                        </div>
                    ))}
                </div>

                <div className="botoes-navegacao">
                    <button className="anterior-button-p6" id="anterior6" onClick={irParaPaginaAnterior}>Anterior</button>
                    <button className="proximo-button-p6" id="proximo6" onClick={irParaProximaPagina}>Próximo</button>
                    <button className="try-again-button" id="try6" onClick={() => navigate('/pagina/5')}>Try Again</button>
                </div>

                <div className="marcador-pagina">
                    <strong>6</strong>
                </div>
            </div>
        </Estrutura>
    );
}

export default PaginaCurso6;
