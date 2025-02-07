import React, { useState, useRef, useEffect } from 'react';
import styles from './pagina38.module.css';

import pg38_audio1e from '../assets/audios/pg38_audio1e.mp3';
import pg38_audio1p from '../assets/audios/pg38_audio1p.mp3';
import pg38_audio2e from '../assets/audios/pg38_audio2e.mp3';
import pg38_audio2p from '../assets/audios/pg38_audio2p.mp3';


import eIcon from '../assets/icons/eIcon.png';
import pIcon from '../assets/icons/pIcon.png';
import microfone from '../assets/icons/microfone.png';
import megafone from '../assets/icons/megafone.png';
import pagina38_imagem1 from '../assets/images/pagina38_imagem1.webp';
import Pagina38_a1 from '../assets/audios/pg38_a1.mp3';
import Pagina38_a2 from '../assets/audios/Pagina38_a2.mp3';
import Pagina38_b1 from '../assets/audios/pg38_b1.mp3';
import Pagina38_b2 from '../assets/audios/Pagina38_b2.mp3';
import Pagina38_c1 from '../assets/audios/pg38_c1.mp3';
import Pagina38_c2 from '../assets/audios/Pagina38_c2.mp3';
import Pagina38_d1 from '../assets/audios/pg38_d1.mp3';
import Pagina38_d2 from '../assets/audios/Pagina38_d2.mp3';

const Pagina38 = () => {
    const [audioPlaying, setAudioPlaying] = useState(null);
    const [gravando, setGravando] = useState(null);
    const [recordedAudios, setRecordedAudios] = useState({});
    const [megafonePulsando, setMegafonePulsando] = useState(null);


    // Referências para os áudios
    const audioRefs = useRef({});

    useEffect(() => {
        audioRefs.current = {
            pg38_audio1e: new Audio(pg38_audio1e),
            pg38_audio1p: new Audio(pg38_audio1p),
            pg38_audio2e: new Audio(pg38_audio2e),
            pg38_audio2p: new Audio(pg38_audio2p),
    
            audioA1: new Audio(Pagina38_a1),
            audioA2: new Audio(Pagina38_a2),
            audioB1: new Audio(Pagina38_b1),
            audioB2: new Audio(Pagina38_b2),
            audioC1: new Audio(Pagina38_c1),
            audioC2: new Audio(Pagina38_c2),
            audioD1: new Audio(Pagina38_d1),
            audioD2: new Audio(Pagina38_d2),
        };
    }, []);

    const tocarAudio = (audioKey) => {
        const audio = audioRefs.current[audioKey];
    
        if (!audio) {
            console.error(`Áudio não encontrado para a chave: ${audioKey}`);
            return;
        }
    
        if (audioPlaying) {
            audioPlaying.pause();
            audioPlaying.currentTime = 0;
        }
    
        setAudioPlaying(audio);
        audio.play();
        audio.onended = () => {
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

            setMegafonePulsando(blocoId);

            audio.play();
            audio.onended = () => {
                setMegafonePulsando(null);
            };
        }
    };

    return (
        <div className={styles.pg38Container}>
            <header className={styles.pg38Header}>
                <div className={styles.pg38HeaderText}>
                    <h1 className={styles.pg38AudioText}>
                        Dialogue Practice
                        <img
                            src={eIcon}
                            alt="English Audio"
                            style={{ width: '2rem', height: '2rem', marginLeft: '0.5rem', cursor: 'pointer' }}
                            onClick={() => tocarAudio('pg38_audio1e')}
                        />
                        <img
                            src={pIcon}
                            alt="Portuguese Audio"
                            style={{ width: '2rem', height: '2rem', marginLeft: '0.5rem', cursor: 'pointer' }}
                            onClick={() => tocarAudio('pg38_audio1p')}
                        />
                    </h1>
                    <h2 className={styles.pg38AudioText}>
                        Listening & Speaking
                        <img
                            src={eIcon}
                            alt="English Audio"
                            style={{ width: '2rem', height: '2rem', marginLeft: '0.5rem', cursor: 'pointer' }}
                            onClick={() => tocarAudio('pg38_audio2e')}
                        />
                        <img
                            src={pIcon}
                            alt="Portuguese Audio"
                            style={{ width: '2rem', height: '2rem', marginLeft: '0.5rem', cursor: 'pointer' }}
                            onClick={() => tocarAudio('pg38_audio2p')}
                        />
                    </h2>
                </div>
                <div className={styles.pg38HeaderImage}>
                    <img src={pagina38_imagem1} alt="Women talking while shopping" className={styles.pg38Image} />
                </div>
            </header>



            <main className={styles.pg38Main}>
    <div className={styles.pg38DialogContainer}>
        {[
            {
                id: 'sarah1',
                speaker: 'Sarah',
                textEn: 'I think this light-colored dress would be perfect for our weekend trip. What do you think, Emma?',
                textPt: 'Eu acho que este vestido de cor clara seria perfeito para nossa viagem de fim de semana. O que você acha, Emma?',
                audioEn: 'audioA1',
                audioPt: 'audioA2',
            },
            {
                id: 'emma1',
                speaker: 'Emma',
                textEn: 'Hmm, I like it, but I think I’d prefer something more formal. Maybe we can find a nice suit.',
                textPt: 'Hmm, gostei, mas acho que preferiria algo mais formal. Talvez possamos encontrar um terno bacana.',
                audioEn: 'audioC1',
                audioPt: 'audioC2',
            },
            {
                id: 'sarah2',
                speaker: 'Sarah',
                textEn: 'Yeah, it totally suits your style. Should we try these on and check for some shoes after?',
                textPt: 'Sim, combina totalmente com o seu estilo. Deveríamos experimentar essas e depois procurar alguns sapatos?',
                audioEn: 'audioB1',
                audioPt: 'audioB2',
            },
            {
                id: 'emma2',
                speaker: 'Emma',
                textEn: 'Yeah, let’s check the men’s section for something sharp.',
                textPt: 'Sim, vamos dar uma olhada na seção masculina para algo mais elegante.',
                audioEn: 'audioD1',
                audioPt: 'audioD2',
            },
        ].map(({ id, speaker, textEn, textPt, audioEn, audioPt }) => (
            <div key={id} className={styles.pg38DialogBlock}>
                <div className={styles.pg38AudioControls}>
                    <img
                        src={microfone}
                        className={`${styles.pg38Icon} ${gravando === id ? styles.pulsando : ''}`}
                        alt="Gravar áudio"
                        onClick={() => gravarAudio(id)}
                    />
                    <img
                        src={megafone}
                        className={`${styles.pg38Icon} ${megafonePulsando === id ? styles.pulsando : ''}`}
                        alt="Reproduzir áudio gravado"
                        onClick={() => tocarAudioGravado(id)}
                    />
                </div>
                <div className={`${styles.pg38DialogBox} ${speaker === 'Emma' ? styles.pg38DialogBoxEmma : ''}`}>
                    <strong>{speaker}:</strong>
                    <p><strong>{textEn}</strong></p>
                    <p>{textPt}</p>
                </div>
                <div className={styles.pg38AudioIcons}>
                    <img
                        src={eIcon}
                        className={`${styles.pg38Icon} ${audioPlaying?.icon === `eIcon${id}` ? styles.pulsando : ''}`}
                        alt="English Audio"
                        onClick={() => tocarAudio(audioEn)}
                    />
                    <img
                        src={pIcon}
                        className={`${styles.pg38Icon} ${audioPlaying?.icon === `pIcon${id}` ? styles.pulsando : ''}`}
                        alt="Portuguese Audio"
                        onClick={() => tocarAudio(audioPt)}
                    />
                </div>
            </div>
        ))}
    </div>
</main>


        </div>
    );
};

export default Pagina38;
