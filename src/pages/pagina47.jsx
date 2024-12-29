import React, { useRef } from 'react';
import styles from './pagina47.module.css';
import pg45IconNotes from '../assets/Icons/Icon-Notes.png';
import Pagina47_Primeira_imagem from '../assets/Images/Pagina47_Primeira_imagem.jpg';
import myAudio from '../assets/audios/myAudio.mp3';
import hisAudio from '../assets/audios/hisAudio.mp3';
import herAudio from '../assets/audios/herAudio.mp3';
import itsAudio from '../assets/audios/itsAudio.mp3';
import ourAudio from '../assets/audios/ourAudio.mp3';
import yourAudio from '../assets/audios/yourAudio.mp3';
import theirAudio from '../assets/audios/theirAudio.mp3';
import audio1e from '../assets/audios/pg47_audio1e.mp3';
import audio2e from '../assets/audios/pg47_audio2e.mp3';
import audio3e from '../assets/audios/pg47_audio3e.mp3';
import audio4e from '../assets/audios/pg47_audio4e.mp3';
import audio5e from '../assets/audios/pg47_audio5e.mp3';
import audio6e from '../assets/audios/pg47_audio6e.mp3';
import audio7e from '../assets/audios/pg47_audio7e.mp3';
import audio8e from '../assets/audios/pg47_audio8e.mp3';
import audio9e from '../assets/audios/pg47_audio9e.mp3';
import audio10e from '../assets/audios/pg47_audio10e.mp3';
import audio11e from '../assets/audios/pg47_audio11e.mp3';
import audio12e from '../assets/audios/pg47_audio12e.mp3';
import audio13e from '../assets/audios/pg47_audio13e.mp3';
import audio14e from '../assets/audios/pg47_audio14e.mp3';
import audio15e from '../assets/audios/pg47_audio15e.mp3';
import audio1p from '../assets/audios/pg47_audio1p.mp3';
import audio2p from '../assets/audios/pg47_audio2p.mp3';
import audio3p from '../assets/audios/pg47_audio3p.mp3';
import audio4p from '../assets/audios/pg47_audio4p.mp3';

const Pagina47 = () => {
    const audioMap = {
        'myAudio': myAudio,
        'hisAudio': hisAudio,
        'herAudio': herAudio,
        'itsAudio': itsAudio,
        'ourAudio': ourAudio,
        'yourAudio': yourAudio,
        'theirAudio': theirAudio,
        'pg47_audio1e': audio1e,
        'pg47_audio2e': audio2e,
        'pg47_audio3e': audio3e,
        'pg47_audio4e': audio4e,
        'pg47_audio5e': audio5e,
        'pg47_audio6e': audio6e,
        'pg47_audio7e': audio7e,
        'pg47_audio8e': audio8e,
        'pg47_audio9e': audio9e,
        'pg47_audio10e': audio10e,
        'pg47_audio11e': audio11e,
        'pg47_audio12e': audio12e,
        'pg47_audio13e': audio13e,
        'pg47_audio14e': audio14e,
        'pg47_audio15e': audio15e,
        'pg47_audio1p': audio1p,
        'pg47_audio2p': audio2p,
        'pg47_audio3p': audio3p,
        'pg47_audio4p': audio4p,
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
            <div className={styles.pg47Container}>
                <header className={styles.pg47Header}>
                    <h1 className={styles.pg47HeaderH1}>Grammar</h1>
                    <div className={styles.pg47HeaderH2H3}>
                        <h2 className={styles.pg47HeaderH2}>Possessive Adjectives</h2>
                        <h3 className={styles.pg47HeaderH3}>Pronomes possessivos</h3>
                    </div>
                </header>
                <main className={styles.pg47Main}>
                    <div className={styles.pg47ContainerMain}>
                        <table className={styles.pg47table}>
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
                        <div className={styles.pg47MainTexto}>
                            <ol className={styles.pg47MainList}>
                                <li onClick={() => playAudio('pg47_audio1e')}>This is <strong>my</strong> teacher.</li>
                                <li onClick={() => playAudio('pg47_audio2e')}>Those are <strong>your</strong> keys.</li>
                                <li onClick={() => playAudio('pg47_audio3e')}>These are <strong>his</strong> pens.</li>
                                <li onClick={() => playAudio('pg47_audio4e')}>This is <strong>her</strong> phone.</li>
                                <li onClick={() => playAudio('pg47_audio5e')}>That is <strong>their</strong> car.</li>
                                <li onClick={() => playAudio('pg47_audio6e')}><strong>My</strong> friend Leo is from Italy.</li>
                                <li onClick={() => playAudio('pg47_audio7e')}><strong>His</strong> dad is an engineer.</li>
                                <li onClick={() => playAudio('pg47_audio8e')}><strong>Her</strong> parents are Canadian.</li>
                                <li onClick={() => playAudio('pg47_audio9e')}><strong>Our</strong> neighbor is French.</li>
                                <li onClick={() => playAudio('pg47_audio10e')}><strong>Your</strong> sister is smart.</li>
                            </ol>
                        </div>
                    </div>
                </main>
                <aside className={styles.pg47Aside}>
                    <div className={styles.pg47Exemplo}>
                        <p className={styles.pg47Titulo}>Exemplo:</p>
                        <div className={styles.pg47ContainerAsidetexto}>
                        <div className={`${styles.pg47AsideTexto2}`} onClick={() => playAudio('pg47_audio13e')}>
                                <p>Hi, Daniel!</p>
                            </div>
                            <div className={`${styles.pg47AsideTexto1}`} onClick={() => playAudio('pg47_audio11e')}>
                                <p>Nice to meet you, Daniel.</p>
                            </div>
                            <div className={`${styles.pg47AsideTexto3}`} onClick={() => playAudio('pg47_audio12e')}>
                                <p>Welcome guys!</p>
                            </div>
                            
                        </div>
                        <div className={styles.pg47ExemploImg}>
                            <img className={styles.pg47AsideImg1} src={Pagina47_Primeira_imagem} alt="" />
                        </div>
                        <div className={styles.pg47ExemploTexto}>
                            <div className={styles.pg47AsideTexto4} onClick={() => playAudio('pg47_audio14e')}>
                                <p>This is <strong>my</strong> friend Daniel.<br />
                                    He is <strong>our</strong> web designer.</p>
                            </div>
                            <div className={styles.pg47AsideTexto4} onClick={() => playAudio('pg47_audio15e')}>
                                <p>Daniel, this is <strong>my</strong> childhood friend Karen<br />
                                    and this is <strong>her</strong> brother Ethan.<br />
                                    They will be working in the IT (Information Technology) department.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.pg47Traducao}>
                        <p className={styles.pg47Titulo}>Tradução:</p>

                        <div className={styles.pg47TraducaoTop}>
                            <div className={styles.pg47AsideTraducao2} onClick={() => playAudio('pg47_audio1p')} style={{ cursor: 'pointer' }}>
                                <p>Oi, Daniel!</p>
                            </div>
                            <div className={styles.pg47AsideTraducao3} onClick={() => playAudio('pg47_audio2p')} style={{ cursor: 'pointer' }}>
                                <p>Sejam bem-vindos, pessoal!</p>
                            </div>
                            <div className={styles.pg47AsideTraducao1} onClick={() => playAudio('pg47_audio3p')} style={{ cursor: 'pointer' }}>
                                <p>Prazer em conhecê-lo, Daniel.</p>
                            </div>
                        </div>

                        <div className={styles.pg47AsideTraducao4} onClick={() => playAudio('pg47_audio4p')} style={{ cursor: 'pointer' }}>
                            <p>
                                Este é meu amigo Daniel. Ele é nosso web designer. Daniel, esta é minha amiga de infância Karen e este é seu irmão Ethan.
                            </p>
                        </div>
                    </div>

                </aside>

            </div>
        </div>
    );
};

export default Pagina47;
