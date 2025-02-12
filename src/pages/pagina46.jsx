import React, { useRef } from 'react';

import styles from './pagina46.module.css';

import pagina46_imagem1 from '../assets/images/pagina46_imagem1.webp';

import global_grammar from '../assets/audios/global_grammar.mp3';
import global_posse_ae from '../assets/audios/global_posse_ae.mp3';
import global_posse_ap from '../assets/audios/global_posse_ap.mp3';
import my_audio from '../assets/audios/my_audio.mp3';
import his_audio from '../assets/audios/his_audio.mp3';
import her_audio from '../assets/audios/her_audio.mp3';
import its_audio from '../assets/audios/its_audio.mp3';
import our_audio from '../assets/audios/our_audio.mp3';
import your_audio from '../assets/audios/your_audio.mp3';
import theirAudio from '../assets/audios/theirAudio.mp3';
import audio1e from '../assets/audios/pg46_audio1e.mp3';
import audio2e from '../assets/audios/pg46_audio2e.mp3';
import audio1p from '../assets/audios/pg46_audio1p.mp3';
import audio2p from '../assets/audios/pg46_audio2p.mp3';

const Pagina46 = () => {
    const audioMap = {
        'my_audio': my_audio,
        'his_audio': his_audio,
        'her_audio': her_audio,
        'its_audio': its_audio,
        'our_audio': our_audio,
        'your_audio': your_audio,
        'theirAudio': theirAudio,
        'pg46_audio1e': audio1e,
        'pg46_audio2e': audio2e,
        'pg46_audio1p': audio1p,
        'pg46_audio2p': audio2p,
    };


    const currentAudio = useRef(null);

    const globalAudioMap = {
        'global_grammar': global_grammar,
        'global_posse_ae': global_posse_ae,
        'global_posse_ap': global_posse_ap
    };

    const playGlobalAudio = (audioKey) => {
        const audio = new Audio(globalAudioMap[audioKey]);
        audio.play();
    };

    const playAudio = (audioId) => {
        if (currentAudio.current) {
            currentAudio.current.pause();
            currentAudio.current.currentTime = 0;
        }

        const audio = new Audio(audioMap[audioId]);
        currentAudio.current = audio;
        audio.play();
    };

    return (
        <div>
            <div className={styles.pg46Container}>
                <header className={styles.pg46Header}>
                    <h1 className={styles.pg46HeaderH1} onClick={() => playGlobalAudio('global_grammar')}>
                        Grammar
                    </h1>
                    <div className={styles.pg46HeaderH2H3}>
                        <h2 className={styles.pg46HeaderH2} onClick={() => playGlobalAudio('global_posse_ae')}>
                            Possessive Adjectives
                        </h2>
                        <h3 className={styles.pg46HeaderH3} onClick={() => playGlobalAudio('global_posse_ap')}>
                            Pronomes possessivos
                        </h3>
                    </div>
                </header>
                <main className={styles.pg46Main}>
                    <div>
                        <table className={styles.pg46table}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio('my_audio')}>My</th>
                                    <td>meu(s), minha(s)</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('his_audio')}>His</th>
                                    <td>dele (seu/s/sua/s)</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('her_audio')}>Her</th>
                                    <td>dela (seu/s/sua/s)</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('its_audio')}>Its</th>
                                    <td>seu(s), sua(s) - coisas/animais/plantas</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('our_audio')}>Our</th>
                                    <td>nosso(s), nossa(s)</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('your_audio')}>Your</th>
                                    <td>seu(s), sua(s), teu(s), tua(s)</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('your_audio')}>Your</th>
                                    <td>seus, suas, teus, tuas (de vocês)</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('theirAudio')}>Their</th>
                                    <td>deles, delas, seus, suas</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </main>
                <aside className={styles.pg46Aside}>
                    <div className={styles.pg46Exemplo}>
                        <p> <strong>Exemplo: </strong></p>
                        <div className={styles.pg46ContainerAsidetexto}>
                            <div className={styles.pg46AsideTexto1} onClick={() => playAudio('pg46_audio1e')} style={{ cursor: 'pointer' }}>
                                <p>Emily: Yes, I’m proud of our progress.<br /> <strong>Our</strong> hard work is paying off.</p>
                            </div>
                            <div className={styles.pg46AsideTexto2} onClick={() => playAudio('pg46_audio2e')} style={{ cursor: 'pointer' }}>
                                <p>Alex: This project is going really well. <br /> <strong>Our</strong> team has put in  a lot of</p>
                            </div>
                        </div>
                        <div className={styles.pg46ExemploImg}>
                            <img className={styles.pg46AsideImg1} src={pagina46_imagem1} alt="" />
                        </div>
                    </div>
                    <div className={styles.pg46Traducao}>
                        <p> <strong>Tradução:</strong></p>
                        <div className={styles.pg46AsideTraducao1} onClick={() => playAudio('pg46_audio1p')} style={{ cursor: 'pointer' }}>
                            <p>Alex: Este projeto está indo muito bem. <strong>Nossa</strong> equipe tem se esforçado muito.</p>
                        </div>
                        <div className={styles.pg46AsideTraducao2} onClick={() => playAudio('pg46_audio2p')} style={{ cursor: 'pointer' }}>
                            <p>Emily: Sim, estou orgulhoso do nosso progresso. <strong>Nosso</strong>  trabalho duro está valendo a pena.</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina46;
