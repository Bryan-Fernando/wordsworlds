import React from 'react';
import styles from './pagina61.module.css';
import pagina61_imagem1 from '../assets/images/pagina61_imagem1.webp';
import global_audio_grammar from '../assets/audios/global_grammar.mp3';
import global_whatTie from '../assets/audios/global_whatTie.mp3';
import global_whatTip from '../assets/audios/global_whatTip.mp3';

import pg61_audio1 from '../assets/audios/pg61_audio1.mp3';
import pg61_audio2 from '../assets/audios/pg61_audio2.mp3';
import pg61_audio3 from '../assets/audios/pg61_audio3.mp3';
import pg61_audio4 from '../assets/audios/pg61_audio4.mp3';
import pg61_audio5 from '../assets/audios/pg61_audio5.mp3';
import pg61_audio6 from '../assets/audios/pg61_audio6.mp3';
import pg61_audio7 from '../assets/audios/pg61_audio7.mp3';
import pg61_audio8 from '../assets/audios/pg61_audio8.mp3';
import pg61_audio9 from '../assets/audios/pg61_audio9.mp3';
import pg61_audio10 from '../assets/audios/pg61_audio10.mp3';
import pg61_audio11 from '../assets/audios/pg61_audio11.mp3';
import pg61_audio12 from '../assets/audios/pg61_audio12.mp3';
import pg61_audio13 from '../assets/audios/pg61_audio13.mp3';
import pg61_audio14 from '../assets/audios/pg61_audio14.mp3';
import pg61_audio15 from '../assets/audios/pg61_audio15.mp3';
import pg61_audio16 from '../assets/audios/pg61_audio16.mp3';
import pg61_audio17 from '../assets/audios/pg61_audio17.mp3';
import pg61_audio18 from '../assets/audios/pg61_audio18.mp3';
import pg61_audio19 from '../assets/audios/pg61_audio19.mp3';
import pg61_audio20 from '../assets/audios/pg61_audio20.mp3';
import pg61_audio21 from '../assets/audios/pg61_audio21.mp3';
import pg61_audio22 from '../assets/audios/pg61_audio22.mp3';

const Pagina61 = () => {

    const audioMap = {
        pg61_audio1,
        pg61_audio2,
        pg61_audio3,
        pg61_audio4,
        pg61_audio5,
        pg61_audio6,
        pg61_audio7,
        pg61_audio8,
        pg61_audio9,
        pg61_audio10,
        pg61_audio11,
        pg61_audio12,
        pg61_audio13,
        pg61_audio14,
        pg61_audio15,
        pg61_audio16,
        pg61_audio17,
        pg61_audio18,
        pg61_audio19,
        pg61_audio20,
        pg61_audio21,
        pg61_audio22,
    };

    const playAudio = (audioKey) => {
        const audioSrc = audioMap[audioKey];
        if (audioSrc) {
            const audio = new Audio(audioSrc);
            audio.play();
        }
    };

    return (
        <div>
            <div className={styles.pg61Container}>
                <header className={styles.pg61Header}>
                    <h1
                        className={styles.pg61HeaderTitle}
                        onClick={() => playAudio(global_audio_grammar)}
                        style={{ cursor: 'pointer' }}
                    >
                        Grammar
                    </h1>
                    <div className={styles.page60HeaderSubtitleContainer}>
                        <h2
                            className={styles.page60HeaderSubtitleText}
                            onClick={() => playAudio(global_whatTie)}
                            style={{ cursor: 'pointer' }}
                        >
                            What time is it?
                        </h2>
                        <p
                            className={styles.page60Translation}
                            onClick={() => playAudio(global_whatTip)}
                            style={{ cursor: 'pointer' }}
                        >
                            Que horas são?
                        </p>
                    </div>
                </header>
                <div className={styles.pg61ContainerMainDiv}>
                    {/* Main content and aside layout */}
                    <main className={styles.pg61Main}>
                        <div className={styles.pg61MainContainer1}>
                            <p>
                                No sistema de um relógio digital, <strong>indicamos inicialmente as horas, seguidas pelos minutos, que variam de 0 a 59.</strong>
                            </p>
                        </div>
                        <div className={styles.pg61MainContainer2}>
                            <div className={styles.pg61MainLado1}>
                                <p className={styles.pg61RedText}>
                                    <span onClick={() => playAudio('pg61_audio1')} style={{ cursor: 'pointer' }}>10:00 – It’s ten o’clock.</span>
                                </p>
                            </div>
                            <div className={styles.pg61MainListaCinza}></div>
                            <div className={styles.pg61MainLado2}>
                                <p>10:00 – São 10 horas</p>
                            </div>
                            <div className={styles.pg61LinhaHorizontal}></div>
                            <div className={styles.pg61MainLado1}>
                                <p className={styles.pg61RedText}>
                                    <span onClick={() => playAudio('pg61_audio2')} style={{ cursor: 'pointer' }}>10:01 - It’s ten oh one</span> <br />
                                    <span onClick={() => playAudio('pg61_audio3')} style={{ cursor: 'pointer' }}>10:02 - It’s ten oh two</span> <br />
                                    <span onClick={() => playAudio('pg61_audio4')} style={{ cursor: 'pointer' }}>10:03 - It’s ten oh three</span> <br />
                                    <span onClick={() => playAudio('pg61_audio5')} style={{ cursor: 'pointer' }}>10:04 - It’s ten oh four</span> <br />
                                    <span onClick={() => playAudio('pg61_audio6')} style={{ cursor: 'pointer' }}>10:05 - It’s ten oh five</span> <br />
                                    <span onClick={() => playAudio('pg61_audio7')} style={{ cursor: 'pointer' }}>10:06 - It’s ten oh six</span> <br />
                                    <span onClick={() => playAudio('pg61_audio8')} style={{ cursor: 'pointer' }}>10:07 - It’s ten oh seven</span> <br />
                                    <span onClick={() => playAudio('pg61_audio9')} style={{ cursor: 'pointer' }}>10:08 - It’s ten oh eight</span> <br />
                                    <span onClick={() => playAudio('pg61_audio10')} style={{ cursor: 'pointer' }}>10:09 - It’s ten oh nine</span> <br />
                                </p>
                            </div>

                            <div className={styles.pg61MainListaCinza}></div>
                            <div className={styles.pg61MainLado2}>
                                <p>
                                    10:01 - São dez e um <br />
                                    10:02 - São dez e dois <br />
                                    10:03 - São dez e três <br />
                                    10:04 - São dez e quatro <br />
                                    10:05 - São dez e cinco <br />
                                    10:06 - São dez e seis <br />
                                    10:07 - São dez e sete <br />
                                    10:08 - São dez e oito <br />
                                    10:09 - São dez e nove <br />
                                </p>
                            </div>
                            <div className={styles.pg61LinhaHorizontal}></div>
                            <div className={styles.pg61MainLado1}>
                                <p className={styles.pg61RedText}>
                                    <span onClick={() => playAudio('pg61_audio11')} style={{ cursor: 'pointer' }}>10:10 - It’s ten ten.</span> <br />
                                    <span onClick={() => playAudio('pg61_audio12')} style={{ cursor: 'pointer' }}>10:15 - It’s ten fifteen.</span> <br />
                                    <span onClick={() => playAudio('pg61_audio13')} style={{ cursor: 'pointer' }}>10:20 - It’s ten twenty.</span> <br />
                                    <span onClick={() => playAudio('pg61_audio14')} style={{ cursor: 'pointer' }}>10:25 - It’s ten twenty-five.</span> <br />
                                    <span onClick={() => playAudio('pg61_audio15')} style={{ cursor: 'pointer' }}>10:30 - It’s ten thirty.</span> <br />
                                    <span onClick={() => playAudio('pg61_audio16')} style={{ cursor: 'pointer' }}>10:35 - It’s ten thirty-five.</span> <br />
                                    <span onClick={() => playAudio('pg61_audio17')} style={{ cursor: 'pointer' }}>10:40 - It’s ten forty.</span> <br />
                                    <span onClick={() => playAudio('pg61_audio18')} style={{ cursor: 'pointer' }}>10:45 - It’s ten forty-five.</span> <br />
                                    <span onClick={() => playAudio('pg61_audio19')} style={{ cursor: 'pointer' }}>10:50 - It’s ten fifty.</span> <br />
                                    <span onClick={() => playAudio('pg61_audio20')} style={{ cursor: 'pointer' }}>10:55 - It’s ten fifty-five.</span> <br />
                                </p>
                            </div>

                            <div className={styles.pg61MainListaCinza}></div>
                            <div className={styles.pg61MainLado2}>
                                <p>
                                    10:10 - São dez e dez. <br />
                                    10:15 - São dez e quinze. <br />
                                    10:20 - São dez e vinte. <br />
                                    10:25 - São dez e vinte e cinco. <br />
                                    10:30 - São dez e trinta. <br />
                                    10:35 - São dez e trinta e cinco. <br />
                                    10:40 - São dez e quarenta. <br />
                                    10:45 - São dez e quarenta e cinco. <br />
                                    10:50 - São dez e cinquenta. <br />
                                    10:55 - São dez e cinquenta e cinco. <br />
                                </p>
                            </div>
                            <div className={styles.pg61LinhaHorizontal}></div>
                            <div className={styles.pg61MainLado1}>
                                <p className={styles.pg61RedText} onClick={() => playAudio('pg61_audio21')} style={{ cursor: 'pointer' }}>It’s almost eleven o’clock.</p>
                            </div>
                            <div className={styles.pg61MainListaCinza}></div>
                            <div className={styles.pg61MainLado2}>
                                <p>São quase onze horas</p>
                            </div>
                        </div>
                        <div className={styles.pg61MainContainer3}>
                            <div className={styles.pg61MainLado1}>
                                <p className={styles.pg61RedText} onClick={() => playAudio('pg61_audio22')} style={{ marginRight: '0.5rem', cursor: 'pointer' }}>11:00 - It’s eleven o’clock</p>
                            </div>
                            <div className={styles.pg61MainListaCinza}></div>
                            <div className={styles.pg61MainLado2}>
                                <p>11:00 - São onze horas</p>
                            </div>
                        </div>
                        <div className={styles.pg61Aside}>
                            <h3>Telling the time</h3>
                            <p>Dizendo as horas</p>
                            <div className={styles.pg61AsideImageContainer}>
                                <img
                                    src={pagina61_imagem1}
                                    alt="Imagem ilustrativa do relógio"
                                    className={styles.pg61AsideImage}
                                />
                            </div>
                            <div className={styles.pg61AsideDetails}>
                                <div>
                                    <h4>Ordem</h4>
                                    <p>It’s <br /> São</p>
                                </div>
                                <div>
                                    <h4>Hora</h4>
                                    <p>ten <br /> dez</p>
                                </div>
                                <div>
                                    <h4>Minutos</h4>
                                    <p><span className={styles.highlightText}>oh </span> one<br /> <span className={styles.highlightText}> e </span> um</p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Pagina61;


