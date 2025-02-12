import React, { useRef } from 'react';

import styles from './pagina45.module.css';

import pagina45_imagem1 from '../assets/images/pagina45_imagem1.webp';
import pagina45_imagem2 from '../assets/images/pagina45_imagem2.webp';

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
import audio1e from '../assets/audios/pg45_audio1e.mp3';
import audio2e from '../assets/audios/pg45_audio2e.mp3';
import audio1p from '../assets/audios/pg45_audio1p.mp3';
import audio2p from '../assets/audios/pg45_audio2p.mp3';

const Pagina45 = () => {
    const audioMap = {
        'my_audio': my_audio,
        'his_audio': his_audio,
        'her_audio': her_audio,
        'its_audio': its_audio,
        'our_audio': our_audio,
        'your_audio': your_audio,
        'theirAudio': theirAudio,
        'pg45_audio1e': audio1e,
        'pg45_audio2e': audio2e,
        'pg45_audio1p': audio1p,
        'pg45_audio2p': audio2p,
    };

    const globalAudioMap = {
        'global_grammar': global_grammar,
        'global_posse_ae': global_posse_ae,
        'global_posse_ap': global_posse_ap
    };

    const playGlobalAudio = (audioKey) => {
        const audio = new Audio(globalAudioMap[audioKey]);
        audio.play();
    };

    const currentAudio = useRef(null);

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
            <div className={styles.pg45Container}>
                <header className={styles.pg45Header}>
                    <h1 className={styles.pg45HeaderH1} onClick={() => playGlobalAudio('global_grammar')}>
                        Grammar
                    </h1>
                    <div className={styles.pg45HeaderH2H3}>
                        <h2 className={styles.pg45HeaderH2} onClick={() => playGlobalAudio('global_posse_ae')}>
                            Possessive Adjectives
                        </h2>
                        <h3 className={styles.pg45HeaderH3} onClick={() => playGlobalAudio('global_posse_ap')}>
                            Pronomes possessivos
                        </h3>
                    </div>
                </header>
                <main className={styles.pg45Main}>
                    <div className={styles.pg45tableContainer}>
                        <table className={styles.pg45table}>
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
                <aside className={styles.pg45Aside}>
                    <div className={styles.pg45Exemplo}>
                        <p> <strong>Exemplo:</strong></p>
                        <div className={styles.pg45ContainerAsidetexto}>
                            <div className={styles.pg45AsideTexto1} onClick={() => playAudio('pg45_audio2e')} style={{ cursor: 'pointer' }}>
                                <p>Laura: I know, it's hard to concentrate with <br /> all that noise. I'll talk to them about it.</p>
                            </div>
                            <div className={styles.pg45AsideTexto2} onClick={() => playAudio('pg45_audio1e')} style={{ cursor: 'pointer' }}>
                                <p>Mark: The neighbors are having a party. <br /> <strong>Their</strong> music is so loud!</p>
                            </div>
                        </div>
                        <div className={styles.pg45ExemploImg}>
                            <img className={styles.pg45AsideImg1} src={pagina45_imagem1} alt="" />
                            <img className={styles.pg45AsideImg2} src={pagina45_imagem2} alt="" />
                        </div>
                    </div>
                    <div className={styles.pg45Traducao}>
                        <p><strong>Tradução:</strong></p>
                        <div className={styles.pg45AsideTraducao1} onClick={() => playAudio('pg45_audio1p')} style={{ cursor: 'pointer' }}>
                            <p>Mark: Os vizinhos estão dando uma festa. A música <strong>deles</strong> está tão alta!</p>
                        </div>
                        <div className={styles.pg45AsideTraducao2} onClick={() => playAudio('pg45_audio2p')} style={{ cursor: 'pointer' }}>
                            <p>Laura: Eu sei, é difícil se concentrar com tanto barulho. Vou falar com eles sobre isso.</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina45;
