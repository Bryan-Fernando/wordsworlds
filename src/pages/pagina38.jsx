import React, { useState, useRef } from 'react';
import styles from './pagina38.module.css';
import eIcon from '../assets/images/eIcon.png';
import pIcon from '../assets/images/pIcon.png';
import microfone from '../assets/icons/microfone.png';
import megafone from '../assets/icons/megafone.png';
import womansTalking from '../assets/images/Pagina38_womansTalking.png';
import Pagina38_a1 from '../assets/audios/Pagina38_a1.mp3';
import Pagina38_a2 from '../assets/audios/Pagina38_a2.mp3';
import Pagina38_b1 from '../assets/audios/Pagina38_b1.mp3';
import Pagina38_b2 from '../assets/audios/Pagina38_b2.mp3';
import Pagina38_c1 from '../assets/audios/Pagina38_c1.mp3';
import Pagina38_c2 from '../assets/audios/Pagina38_c2.mp3';
import Pagina38_d1 from '../assets/audios/Pagina38_d1.mp3';
import Pagina38_d2 from '../assets/audios/Pagina38_d2.mp3';

const Pagina38 = () => {
    const [audioPlaying, setAudioPlaying] = useState(null); // Controle de áudio tocando
    const [gravando, setGravando] = useState(null); // Controle de gravação por bloco
    const [recordedAudios, setRecordedAudios] = useState({}); // Áudios gravados
    const [megafonePulsando, setMegafonePulsando] = useState(null);

    const audioA1 = useRef(new Audio(Pagina38_a1));
    const audioA2 = useRef(new Audio(Pagina38_a2));
    const audioB1 = useRef(new Audio(Pagina38_b1));
    const audioB2 = useRef(new Audio(Pagina38_b2));
    const audioC1 = useRef(new Audio(Pagina38_c1));
    const audioC2 = useRef(new Audio(Pagina38_c2));
    const audioD1 = useRef(new Audio(Pagina38_d1));
    const audioD2 = useRef(new Audio(Pagina38_d2));

    const tocarAudio = (audioRef, iconName) => {
        if (audioPlaying) {
            audioPlaying.audio.pause();
            audioPlaying.audio.currentTime = 0;
        }
        setAudioPlaying({ audio: audioRef.current, icon: iconName });
        audioRef.current.play();
        audioRef.current.onended = () => {
            setAudioPlaying(null);
        };
    };

    const gravarAudio = async (blocoId) => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            const audioChunks = [];
            setGravando(blocoId);

            mediaRecorder.ondataavailable = (event) => {
                audioChunks.push(event.data);
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
                const audioUrl = URL.createObjectURL(audioBlob);
                setRecordedAudios((prev) => ({ ...prev, [blocoId]: audioUrl }));
                setGravando(null);
            };

            mediaRecorder.start();
            setTimeout(() => {
                mediaRecorder.stop();
            }, 20000); // Grava por 20 segundos
        } catch (error) {
            console.error('Erro ao gravar áudio:', error);
            setGravando(null);
        }
    };

    const tocarAudioGravado = (blocoId) => {
        if (recordedAudios[blocoId]) {
            const audio = new Audio(recordedAudios[blocoId]);
    
            setMegafonePulsando(blocoId); // Ativa a pulsação para o megafone correspondente
    
            audio.play();
            audio.onended = () => {
                setMegafonePulsando(null); // Desativa a pulsação após o término do áudio
            };
        }
    };

    return (
        <div className={styles.pg38Container}>
            {/* Cabeçalho */}
            <div className={styles.pg38Header}>
                <div className={styles.pg38HeaderText}>
                    <h1>Dialogue Practice</h1>
                    <h2>Listening & Speaking</h2>
                </div>
                <div className={styles.pg38HeaderImage}>
                    <img src={womansTalking} alt="Women talking while shopping" className={styles.pg38Image} />
                </div>
            </div>

            {/* Diálogos em colunas */}
            <div className={styles.pg38DialogContainer}>
                {/* Coluna esquerda: Sarah */}
                <div className={styles.pg38DialogColumn}>
                    <div className={styles.pg38DialogBlock}>
                        <div className={styles.pg38AudioControls}>
                            <img
                                src={microfone}
                                className={`${styles.pg38Icon} ${gravando === 'sarah1' ? styles.pulsando : ''}`}
                                alt="Gravar áudio"
                                onClick={() => gravarAudio('sarah1')}
                            />
                            <img
                                src={megafone}
                                className={`${styles.pg38Icon} ${megafonePulsando === 'sarah1' ? styles.pulsando : ''}`}
                                alt="Reproduzir áudio gravado"
                                onClick={() => tocarAudioGravado('sarah1')}
                            />
                        </div>
                        <div className={styles.pg38DialogBox}>
                            <strong>Sarah:</strong>
                            <p><strong>I think this light-colored dress would be perfect for our weekend trip. What do you think, Emma?</strong></p>
                            <p>Eu acho que este vestido de cor clara seria perfeito para nossa viagem de fim de semana. O que você acha, Emma?</p>
                            <div className={styles.pg38AudioIcons}>
                                <img
                                    src={eIcon}
                                    className={`${styles.pg38Icon} ${audioPlaying?.icon === 'eIconA1' ? styles.pulsando : ''}`}
                                    alt="English Audio"
                                    onClick={() => tocarAudio(audioA1, 'eIconA1')}
                                />
                                <img
                                    src={pIcon}
                                    className={`${styles.pg38Icon} ${audioPlaying?.icon === 'pIconA2' ? styles.pulsando : ''}`}
                                    alt="Portuguese Audio"
                                    onClick={() => tocarAudio(audioA2, 'pIconA2')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.pg38DialogBlock}>
                        <div className={styles.pg38AudioControls}>
                            <img
                                src={microfone}
                                className={`${styles.pg38Icon} ${gravando === 'sarah2' ? styles.pulsando : ''}`}
                                alt="Gravar áudio"
                                onClick={() => gravarAudio('sarah2')}
                            />
                            <img
                                src={megafone}
                                className={`${styles.pg38Icon} ${megafonePulsando === 'sarah2' ? styles.pulsando : ''}`}
                                alt="Reproduzir áudio gravado"
                                onClick={() => tocarAudioGravado('sarah2')}
                            />
                        </div>
                        <div className={styles.pg38DialogBox}>
                            <strong>Sarah:</strong>
                            <p><strong>Yeah, it totally suits your style. Should we try these on and check for some shoes after?</strong></p>
                            <p>Sim, combina totalmente com o seu estilo. Deveríamos experimentar essas e depois procurar alguns sapatos?</p>
                            <div className={styles.pg38AudioIcons}>
                                <img
                                    src={eIcon}
                                    className={`${styles.pg38Icon} ${audioPlaying?.icon === 'eIconC1' ? styles.pulsando : ''}`}
                                    alt="English Audio"
                                    onClick={() => tocarAudio(audioC1, 'eIconC1')}
                                />
                                <img
                                    src={pIcon}
                                    className={`${styles.pg38Icon} ${audioPlaying?.icon === 'pIconC2' ? styles.pulsando : ''}`}
                                    alt="Portuguese Audio"
                                    onClick={() => tocarAudio(audioC2, 'pIconC2')}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Coluna direita: Emma */}
                <div className={styles.pg38DialogColumn}>
                    <div className={styles.pg38DialogBlock}>
                        <div className={styles.pg38AudioControls}>
                            <img
                                src={microfone}
                                className={`${styles.pg38Icon} ${gravando === 'emma1' ? styles.pulsando : ''}`}
                                alt="Gravar áudio"
                                onClick={() => gravarAudio('emma1')}
                            />
                            <img
                                src={megafone}
                                className={`${styles.pg38Icon} ${megafonePulsando === 'emma1' ? styles.pulsando : ''}`}
                                alt="Reproduzir áudio gravado"
                                onClick={() => tocarAudioGravado('emma1')}
                            />
                        </div>
                        <div className={styles.pg38DialogBox}>
                            <strong>Emma:</strong>
                            <p><strong>(Holding up a colorful blouse) Oh, it's cute! I like the pattern on this blouse though. Maybe I'll try it on.</strong></p>
                            <p>(Segurando uma blusa colorida) Ah, é fofa! Mas eu gosto do padrão dessa blusa. Talvez eu experimente.</p>
                            <div className={styles.pg38AudioIcons}>
                                <img
                                    src={eIcon}
                                    className={`${styles.pg38Icon} ${audioPlaying?.icon === 'eIconB1' ? styles.pulsando : ''}`}
                                    alt="English Audio"
                                    onClick={() => tocarAudio(audioB1, 'eIconB1')}
                                />
                                <img
                                    src={pIcon}
                                    className={`${styles.pg38Icon} ${audioPlaying?.icon === 'pIconB2' ? styles.pulsando : ''}`}
                                    alt="Portuguese Audio"
                                    onClick={() => tocarAudio(audioB2, 'pIconB2')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.pg38DialogBlock}>
                        <div className={styles.pg38AudioControls}>
                            <img
                                src={microfone}
                                className={`${styles.pg38Icon} ${gravando === 'emma2' ? styles.pulsando : ''}`}
                                alt="Gravar áudio"
                                onClick={() => gravarAudio('emma2')}
                            />
                            <img
                                src={megafone}
                                className={`${styles.pg38Icon} ${megafonePulsando === 'emma2' ? styles.pulsando : ''}`}
                                alt="Reproduzir áudio gravado"
                                onClick={() => tocarAudioGravado('emma2')}
                            />
                        </div>
                        <div className={styles.pg38DialogBox}>
                            <strong>Emma:</strong>
                            <p><strong>Definitely! Let's head to the fitting rooms first.</strong></p>
                            <p>Com certeza! Vamos primeiro para os provadores.</p>
                            <div className={styles.pg38AudioIcons}>
                                <img
                                    src={eIcon}
                                    className={`${styles.pg38Icon} ${audioPlaying?.icon === 'eIconD1' ? styles.pulsando : ''}`}
                                    alt="English Audio"
                                    onClick={() => tocarAudio(audioD1, 'eIconD1')}
                                />
                                <img
                                    src={pIcon}
                                    className={`${styles.pg38Icon} ${audioPlaying?.icon === 'pIconD2' ? styles.pulsando : ''}`}
                                    alt="Portuguese Audio"
                                    onClick={() => tocarAudio(audioD2, 'pIconD2')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagina38;
