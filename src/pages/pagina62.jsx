import React from 'react';

import styles from './pagina62.module.css';

import pagina62_imagem1 from '../assets/images/pagina62_imagem1.webp';

import global_audio_grammar from '../assets/audios/global_grammar.mp3';
import global_what_ti_e from '../assets/audios/global_what_ti_e.mp3';
import global_what_ti_p from '../assets/audios/global_what_ti_p.mp3';
import pg62_audio1 from '../assets/audios/pg62_audio1.mp3';
import pg62_audio2 from '../assets/audios/pg62_audio2.mp3';
import pg62_audio3 from '../assets/audios/pg62_audio3.mp3';
import pg62_audio4 from '../assets/audios/pg62_audio4.mp3';
import pg62_audio5 from '../assets/audios/pg62_audio5.mp3';
import pg62_audio6 from '../assets/audios/pg62_audio6.mp3';
import pg62_audio7 from '../assets/audios/pg62_audio7.mp3';
import pg62_audio8 from '../assets/audios/pg62_audio8.mp3';
import pg62_audio9 from '../assets/audios/pg62_audio9.mp3';
import pg62_audio10 from '../assets/audios/pg62_audio10.mp3';
import pg62_audio11 from '../assets/audios/pg62_audio11.mp3';
import pg62_audio12 from '../assets/audios/pg62_audio12.mp3';
import pg62_audio13 from '../assets/audios/pg62_audio13.mp3';
import pg62_audio14 from '../assets/audios/pg62_audio14.mp3';
import pg62_audio15 from '../assets/audios/pg62_audio15.mp3';
import pg62_audio16 from '../assets/audios/pg62_audio16.mp3';
import pg62_audio17 from '../assets/audios/pg62_audio17.mp3';
import pg62_audio18 from '../assets/audios/pg62_audio18.mp3';
import pg62_audio19 from '../assets/audios/pg62_audio19.mp3';
import pg62_audio20 from '../assets/audios/pg62_audio20.mp3';
import pg62_audio21 from '../assets/audios/pg62_audio21.mp3';
import pg62_audio22 from '../assets/audios/pg62_audio22.mp3';
import pg62_audio23 from '../assets/audios/pg62_audio23.mp3';
import pg62_audio24 from '../assets/audios/pg62_audio24.mp3';
import pg62_audio25 from '../assets/audios/pg62_audio25.mp3';
import pg62_audio26 from '../assets/audios/pg62_audio26.mp3';


const Pagina62 = () => {

    const audioMap = {
        global_audio_grammar: global_audio_grammar,
        global_what_ti_e: global_what_ti_e,
        global_what_ti_p:global_what_ti_p,
        pg62_audio1: pg62_audio1,
        pg62_audio2: pg62_audio2,
        pg62_audio3: pg62_audio3,
        pg62_audio4: pg62_audio4,
        pg62_audio5: pg62_audio5,
        pg62_audio6: pg62_audio6,
        pg62_audio7: pg62_audio7,
        pg62_audio8: pg62_audio8,
        pg62_audio9: pg62_audio9,
        pg62_audio10: pg62_audio10,
        pg62_audio11: pg62_audio11,
        pg62_audio12: pg62_audio12,
        pg62_audio13: pg62_audio13,
        pg62_audio14: pg62_audio14,
        pg62_audio15: pg62_audio15,
        pg62_audio16: pg62_audio16,
        pg62_audio17: pg62_audio17,
        pg62_audio18: pg62_audio18,
        pg62_audio19: pg62_audio19,
        pg62_audio20: pg62_audio20,
        pg62_audio21: pg62_audio21,
        pg62_audio22: pg62_audio22,
        pg62_audio23: pg62_audio23,
        pg62_audio24: pg62_audio24,
        pg62_audio25: pg62_audio25,
        pg62_audio26: pg62_audio26
    };


    const playAudio = (audioKey) => {
        const audioSrc = audioMap[audioKey];
        if (audioSrc) {
            const audio = new Audio(audioSrc);
            audio.play();
        } else {
            console.warn(`Áudio não encontrado para a chave: ${audioKey}`);
        }
    };


    return (
        <div>
            <div className={styles["page62__container"]}>
                <header className={styles["page62__header"]}>
                    <h1
                        className={styles["page62__title"]}
                        onClick={() => playAudio('global_audio_grammar')}
                        style={{ cursor: 'pointer' }}
                    >
                        Grammar
                    </h1>
                    <div>
                        <div className={styles["page62__subtitle-container"]}>
                            <h2
                                className={styles["page62__subtitle-text"]}
                                onClick={() => playAudio('global_what_ti_e')}
                                style={{ cursor: 'pointer' }}
                            >
                                What time is it?
                            </h2>
                            <p
                                className={styles["page62__subtext"]}
                                onClick={() => playAudio('global_what_ti_p')}
                                style={{ cursor: 'pointer' }}
                            >
                                Que horas são?
                            </p>
                        </div>
                    </div>
                </header>
    
                <main className={styles["page62__main"]}>
                    <div className={styles["page62__titles"]}>
                        <h3 className={styles["page62__title-left"]} onClick={() => playAudio('pg62_audio1')} style={{ cursor: 'pointer' }}>
                            To
                        </h3>
                        <h3 className={styles["page62__title-right"]} onClick={() => playAudio('pg62_audio2')} style={{ cursor: 'pointer' }}>
                            Past/After
                        </h3>
                    </div>
                    <div className={styles["page62__clock-container"]}>
                        <img
                            src={pagina62_imagem1}
                            alt="Relógio com setas indicando o horário"
                            className={styles["page62__image"]}
                        />
                        <p className={styles["page62__text"]} style={{ top: '24%', right: '100%' }} onClick={() => playAudio('pg62_audio3')}>
                            It’s five <span className={styles["page62__highlight"]}>to...</span>
                        </p>
                        <p className={styles["page62__text"]} style={{ top: '33%', right: '100%' }} onClick={() => playAudio('pg62_audio4')}>
                            It’s ten <span className={styles["page62__highlight"]}>to...</span>
                        </p>
                        <p className={styles["page62__text"]} style={{ top: '46%', right: '100%' }} onClick={() => playAudio('pg62_audio5')}>
                            It’s (a) quarter <span className={styles["page62__highlight"]}>to...</span>
                        </p>
                        <p className={styles["page62__text"]} style={{ top: '58%', right: '100%' }} onClick={() => playAudio('pg62_audio6')}>
                            It’s twenty <span className={styles["page62__highlight"]}>to...</span>
                        </p>
                        <p className={styles["page62__text"]} style={{ top: '68%', right: '100%' }} onClick={() => playAudio('pg62_audio7')}>
                            It’s twenty-five <span className={styles["page62__highlight"]}>to...</span>
                        </p>
                        <p className={styles["page62__text"]} style={{ top: '24%', left: '100%' }} onClick={() => playAudio('pg62_audio8')}>
                            It’s five <span className={styles["page62__highlight"]}>past</span>...
                        </p>
                        <p className={styles["page62__text"]} style={{ top: '34%', left: '100%' }} onClick={() => playAudio('pg62_audio9')}>
                            It’s ten <span className={styles["page62__highlight"]}>past</span>...
                        </p>
                        <p className={styles["page62__text"]} style={{ top: '46%', left: '100%' }} onClick={() => playAudio('pg62_audio10')}>
                            It’s (a) quarter <span className={styles["page62__highlight"]}>past</span>...
                        </p>
                        <p className={styles["page62__text"]} style={{ top: '59%', left: '100%' }} onClick={() => playAudio('pg62_audio11')}>
                            It’s twenty <span className={styles["page62__highlight"]}>past</span>...
                        </p>
                        <p className={styles["page62__text"]} style={{ top: '68%', left: '100%' }} onClick={() => playAudio('pg62_audio12')}>
                            It’s twenty-five <span className={styles["page62__highlight"]}>past</span>...
                        </p>
                        <p className={styles["page62__text"]} style={{ top: '100%', left: '45%' }} onClick={() => playAudio('pg62_audio13')}>
                            It’s half <span className={styles["page62__highlight"]}>past</span>...
                        </p>
                        <p className={styles["page62__text"]} style={{ top: '-15%', left: '45%' }} onClick={() => playAudio('pg62_audio14')}>
                            It is <br /> <span className={styles["page62__highlight"]}>...o’clock</span>
                        </p>
                    </div>
                </main>
                <aside className={styles["page62__aside"]}>
                    <div className={styles["page62__extra-container"]}>
                        {/* Bloco Esquerdo */}
                        <div className={styles["page62__extra-block"]}>
                            <p onClick={() => playAudio('pg62_audio15')} style={{ cursor: 'pointer' }}>
                                10:35 - It’s twenty-five <strong>to</strong> eleven.
                            </p>
                            <p onClick={() => playAudio('pg62_audio16')} style={{ cursor: 'pointer' }}>
                                10:40 - It’s twenty <strong>to</strong> eleven.
                            </p>
                            <p onClick={() => playAudio('pg62_audio17')} style={{ cursor: 'pointer' }}>
                                10:45 - It’s quarter <strong>to</strong> eleven.
                            </p>
                            <p onClick={() => playAudio('pg62_audio18')} style={{ cursor: 'pointer' }}>
                                10:50 - It’s ten <strong>to</strong> eleven.
                            </p>
                            <p onClick={() => playAudio('pg62_audio19')} style={{ cursor: 'pointer' }}>
                                10:55 - It’s five <strong>to</strong> eleven.
                            </p>
                        </div>
    
                        {/* Bloco Central */}
                        <div className={styles["page62__extra-block--center"]}>
                            <p onClick={() => playAudio('pg62_audio20')} style={{ cursor: 'pointer' }}>
                                10:00 - It’s ten <strong>o’clock</strong>.
                            </p>
                        </div>
    
                        {/* Bloco Direito */}
                        <div className={styles["page62__extra-block"]}>
                            <p onClick={() => playAudio('pg62_audio21')} style={{ cursor: 'pointer' }}>
                                10:05 - It’s five <strong>past/after</strong> ten.
                            </p>
                            <p onClick={() => playAudio('pg62_audio22')} style={{ cursor: 'pointer' }}>
                                10:10 - It’s ten <strong>past/after</strong> ten.
                            </p>
                            <p onClick={() => playAudio('pg62_audio23')} style={{ cursor: 'pointer' }}>
                                10:15 - It’s quarter <strong>past/after</strong> ten.
                            </p>
                            <p onClick={() => playAudio('pg62_audio24')} style={{ cursor: 'pointer' }}>
                                10:20 - It’s twenty <strong>past/after</strong> ten.
                            </p>
                            <p onClick={() => playAudio('pg62_audio25')} style={{ cursor: 'pointer' }}>
                                10:25 - It’s twenty-five <strong>past/after</strong> ten.
                            </p>
                            <p onClick={() => playAudio('pg62_audio26')} style={{ cursor: 'pointer' }}>
                                10:30 - It’s half <strong>past/after</strong> ten.
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
    
};

export default Pagina62;
