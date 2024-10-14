import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Estrutura from '../Estrutura';
import womansTalking from './assets/womansTalking.png';
import './PaginaCurso7.css';
import eIcon from '../assets/eIcon.png';
import pIcon from '../assets/pIcon.png';
import microfone from './assets/microfone.png';
import megafone from './assets/megafone.png';
import a1 from './assets/a1.mp3';
import a2 from './assets/a2.mp3';
import b1 from './assets/b1.mp3';
import b2 from './assets/b2.mp3';
import c1 from './assets/c1.mp3';
import c2 from './assets/c2.mp3';
import d1 from './assets/d1.mp3';
import d2 from './assets/d2.mp3';

function PaginaCurso7() {
    const navigate = useNavigate();

    const [gravandoA, setGravandoA] = useState(false);
    const [gravandoB, setGravandoB] = useState(false);
    const [gravandoC, setGravandoC] = useState(false);
    const [gravandoD, setGravandoD] = useState(false);

    const [recordedAudioA, setRecordedAudioA] = useState(null);
    const [recordedAudioB, setRecordedAudioB] = useState(null);
    const [recordedAudioC, setRecordedAudioC] = useState(null);
    const [recordedAudioD, setRecordedAudioD] = useState(null);

    const audioRefA = useRef();
    const audioRefB = useRef();
    const audioRefC = useRef();
    const audioRefD = useRef();

    const audioA1 = useRef(new Audio(a1));
    const audioA2 = useRef(new Audio(a2));
    const audioB1 = useRef(new Audio(b1));
    const audioB2 = useRef(new Audio(b2));
    const audioC1 = useRef(new Audio(c1));
    const audioC2 = useRef(new Audio(c2));
    const audioD1 = useRef(new Audio(d1));
    const audioD2 = useRef(new Audio(d2));

    const irParaPaginaAnterior = () => {
        navigate('/pagina/6');
    };

    const irParaProximaPagina = () => {
        navigate('/pagina/8');
    };

    const [animandoMegafoneA1, setAnimandoMegafoneA1] = useState(false);
    const [animandoMegafoneB1, setAnimandoMegafoneB1] = useState(false);
    const [animandoMegafoneA2, setAnimandoMegafoneA2] = useState(false);
    const [animandoMegafoneB2, setAnimandoMegafoneB2] = useState(false);

    const tocarAudio = (audioRef) => {
        audioRef.current.play();
    };

    const gravarAudio = async (setRecordedAudio, audioRef, setGravando, audioToPlay, setAnimandoMegafone) => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);

            const audioChunks = [];
            setGravando(true);

            mediaRecorder.ondataavailable = (event) => {
                audioChunks.push(event.data);
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
                const audioUrl = URL.createObjectURL(audioBlob);
                setRecordedAudio(audioUrl);
                audioRef.current.src = audioUrl;
                setGravando(false);

                // Apenas toque o áudio se não for o B2
                if (audioToPlay !== null) {
                    tocarAudio(audioToPlay);
                }
            };

            mediaRecorder.start();

            setTimeout(() => {
                mediaRecorder.stop();
            }, 10000);
        } catch (error) {
            console.error('Erro ao gravar áudio:', error);
            setGravando(false);
        }
    };

    const animarMegafone = (setAnimandoMegafone) => {
        setAnimandoMegafone(true);
        setTimeout(() => {
            setAnimandoMegafone(false);
        }, 10000); 
    };

    return (
        <Estrutura>
            <div className="conteudo-dialogo">
                <div className="dialogo-header">
                    <h1 className="dialogue">Dialogue</h1>
                    <h1 className="practice">Practice</h1>
                    <h2>Listening & <br /> Speaking</h2>
                </div>

                <div className="imagem-container">
                    <img src={womansTalking} alt="Shopping dialogue" className="womansTalking" />
                </div>

                <div className="dialogo-container">
                    {/* Microfone A1 com animação de gravação */}
                    <img
                        src={microfone}
                        alt=""
                        className={`microfonea1 ${gravandoA ? 'microfone-gravando' : ''}`}
                        onClick={() => gravarAudio(setRecordedAudioA, audioRefA, setGravandoA, audioC1, setAnimandoMegafoneA1)}
                    />

                    <img
                        src={megafone}
                        alt=""
                        className={`megafonea1 ${animandoMegafoneA1 ? 'pulse' : ''}`}
                        onClick={() => {
                            if (recordedAudioA) {
                                tocarAudio(audioRefA);
                            }
                            animarMegafone(setAnimandoMegafoneA1);
                        }}
                    />

                    <div className="dialogoSarah">
                        <strong>Sarah:</strong>
                        <p className='engText'>I think this light-colored dress would be perfect for our weekend trip. What do you think, Emma?</p>
                        <p>Eu acho que este vestido de cor clara seria perfeito para nossa viagem de fim de semana. O que você acha, Emma?</p>
                    </div>

                    <img src={eIcon} alt="" className='icone iconea1' onClick={() => tocarAudio(audioA1)} />
                    <img src={pIcon} alt="" className='icone iconea2' onClick={() => tocarAudio(audioA2)} />

                    {/* Microfone B1 com animação de gravação */}
                    <img
                        src={microfone}
                        alt=""
                        className={`microfoneb1 ${gravandoB ? 'microfone-gravando' : ''}`}
                        onClick={() => gravarAudio(setRecordedAudioB, audioRefB, setGravandoB, audioB1, setAnimandoMegafoneB1)}
                    />
                    <img
                        src={megafone}
                        alt=""
                        className={`megafoneb1 ${animandoMegafoneB1 ? 'pulse' : ''}`}
                        onClick={() => {
                            if (recordedAudioB) {
                                tocarAudio(audioRefB);
                            }
                            animarMegafone(setAnimandoMegafoneB1);
                        }}
                    />

                    <div className="dialogoEmma">
                        <strong>Emma:</strong>
                        <p className='engText'>(Holding up a colorful blouse) Oh, it's cute! I like the pattern on this blouse though. Maybe I'll try it on.</p>
                        <p>(Segurando uma blusa colorida) Ah, é fofa! Mas eu gosto do padrão dessa blusa. Talvez eu experimente.</p>
                    </div>

                    <img src={eIcon} alt="" className='icone iconec1' onClick={() => tocarAudio(audioC1)} />
                    <img src={pIcon} alt="" className='icone iconec2' onClick={() => tocarAudio(audioC2)} />

                    {/* Microfone A2 com animação de gravação */}
                    <img
                        src={microfone}
                        alt=""
                        className={`microfonea2 ${gravandoC ? 'microfone-gravando' : ''}`}
                        onClick={() => gravarAudio(setRecordedAudioC, audioRefC, setGravandoC, audioD1, setAnimandoMegafoneA2)}
                    />
                    <img
                        src={megafone}
                        alt=""
                        className={`megafonea2 ${animandoMegafoneA2 ? 'pulse' : ''}`}
                        onClick={() => {
                            if (recordedAudioC) {
                                tocarAudio(audioRefC);
                            }
                            animarMegafone(setAnimandoMegafoneA2);
                        }}
                    />

                    <div className="dialogoSarah2">
                        <strong>Sarah:</strong>
                        <p className='engText'>Yeah, it totally suits your style. Should we try these on and check for some shoes after?</p>
                        <p>Sim, combina totalmente com o seu estilo. Deveríamos experimentar essas e depois procurar alguns sapatos?</p>
                    </div>

                    <img src={eIcon} alt="" className='icone iconeb1' onClick={() => tocarAudio(audioB1)} />
                    <img src={pIcon} alt="" className='icone iconeb2' onClick={() => tocarAudio(audioB2)} />

                    {/* Microfone B2 com animação de gravação */}
                    <img
                        src={microfone}
                        alt=""
                        className={`microfoneb2 ${gravandoD ? 'microfone-gravando' : ''}`}
                        onClick={() => gravarAudio(setRecordedAudioD, audioRefD, setGravandoD, null, setAnimandoMegafoneB2)} // Não toca áudio ao gravar
                    />

                    <img
                        src={megafone}
                        alt=""
                        className={`megafoneb2 ${animandoMegafoneB2 ? 'pulse' : ''}`}
                        onClick={() => {
                            if (recordedAudioD) {
                                tocarAudio(audioRefD);
                            }
                            animarMegafone(setAnimandoMegafoneB2);
                        }}
                    />

                    <div className="dialogoEmma2">
                        <strong>Emma:</strong>
                        <p className='engText'>Definitely! Let's head to the fitting rooms first.</p>
                        <p>Com certeza! Vamos primeiro para os provadores.</p>
                    </div>

                    <img src={eIcon} alt="" className='icone iconed1' onClick={() => tocarAudio(audioD1)} />
                    <img src={pIcon} alt="" className='icone iconed2' onClick={() => tocarAudio(audioD2)} />
                </div>

                <div className="botoes-navegacao">
                    <button className="anterior-button" id='anterior7' onClick={irParaPaginaAnterior}>Anterior</button>
                    <button className="proximo-button" id='proximo7' onClick={irParaProximaPagina}>Próximo</button>
                </div>

                <div className="marcador-pagina">
                    <strong>7</strong>
                </div>

                <audio ref={audioRefA} style={{ display: 'none' }} />
                <audio ref={audioRefB} style={{ display: 'none' }} />
                <audio ref={audioRefC} style={{ display: 'none' }} />
                <audio ref={audioRefD} style={{ display: 'none' }} />
            </div>
        </Estrutura>
    );
}

export default PaginaCurso7;
