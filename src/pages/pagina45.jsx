import React, { useRef } from 'react';
import styles from './pagina45.module.css';
import Pagina45_Aside_Imagem1 from '../assets/Images/Pagina45_Aside_Imagem1.jpg';
import Pagina45_Aside_Imagem2 from '../assets/Images/Pagina45_Aside_Imagem2.jpg';
import myAudio from '../assets/audios/myAudio.mp3';
import hisAudio from '../assets/audios/hisAudio.mp3';
import herAudio from '../assets/audios/herAudio.mp3';
import itsAudio from '../assets/audios/itsAudio.mp3';
import ourAudio from '../assets/audios/ourAudio.mp3';
import yourAudio from '../assets/audios/yourAudio.mp3';
import theirAudio from '../assets/audios/theirAudio.mp3';
import audio1e from '../assets/audios/pg45_audio1e.mp3';
import audio2e from '../assets/audios/pg45_audio2e.mp3';
import audio1p from '../assets/audios/pg45_audio1p.mp3';
import audio2p from '../assets/audios/pg45_audio2p.mp3';

const Pagina45 = () => {
    const audioMap = {
        'myAudio': myAudio,
        'hisAudio': hisAudio,
        'herAudio': herAudio,
        'itsAudio': itsAudio,
        'ourAudio': ourAudio,
        'yourAudio': yourAudio,
        'theirAudio': theirAudio,
        'pg45_audio1e': audio1e,
        'pg45_audio2e': audio2e,
        'pg45_audio1p': audio1p,
        'pg45_audio2p': audio2p,
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
                    <h1 className={styles.pg45HeaderH1}>Grammar</h1>
                    <div className={styles.pg45HeaderH2H3}>
                        <h2 className={styles.pg45HeaderH2}>Possessive Adjectives</h2>
                        <h3 className={styles.pg45HeaderH3}>Pronomes possessivos</h3>
                    </div>
                </header>
                <main className={styles.pg45Main}>
                    <div className={styles.pg45tableContainer}>
                        <table className={styles.pg45table}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio('myAudio')}>My</th>
                                    <td>meu(s), minha(s)</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('hisAudio')}>His</th>
                                    <td>dele (seu/s/sua/s)</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('herAudio')}>Her</th>
                                    <td>dela (seu/s/sua/s)</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('itsAudio')}>Its</th>
                                    <td>seu(s), sua(s) - coisas/animais/plantas</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('ourAudio')}>Our</th>
                                    <td>nosso(s), nossa(s)</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('yourAudio')}>Your</th>
                                    <td>seu(s), sua(s), teu(s), tua(s)</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('yourAudio')}>Your</th>
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
                            <img className={styles.pg45AsideImg1} src={Pagina45_Aside_Imagem1} alt="" />
                            <img className={styles.pg45AsideImg2} src={Pagina45_Aside_Imagem2} alt="" />
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
