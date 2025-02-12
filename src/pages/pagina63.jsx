import React from 'react';

import styles from './pagina63.module.css';

import pg63IconNotes from '../assets/icons/notes_icon.webp';

import pagina63_imagem1 from '../assets/images/pagina63_imagem1.webp';

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

const Pagina63 = () => {

    const audioMap = {
        global_audio_grammar: global_audio_grammar,
        global_what_ti_e: global_what_ti_e,
        global_what_ti_p: global_what_ti_p,
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
            <div className={styles["page63__container"]}>
                <header className={styles["page63__header"]}>
                    <h1
                        className={styles["page63__title"]}
                        onClick={() => playAudio('global_audio_grammar')}
                        style={{ cursor: 'pointer' }}
                    >
                        Grammar
                    </h1>
                    <div>
                        <div className={styles["page63__subtitle-container"]}>
                            <h2
                                className={styles["page63__subtitle-text"]}
                                onClick={() => playAudio('global_what_ti_e')}
                                style={{ cursor: 'pointer' }}
                            >
                                What time is it?
                            </h2>
                            <p
                                className={styles["page63__subtext"]}
                                onClick={() => playAudio('global_what_ti_p')}
                                style={{ cursor: 'pointer' }}
                            >
                                Que horas são?
                            </p>
                        </div>
                    </div>
                </header>
                <main className={styles["page63__main"]}>
                    <div className={styles["page63__titles"]}>
                        <h3 className={styles["page63__title-left"]} onClick={() => playAudio('pg62_audio1')} style={{ cursor: 'pointer' }}>
                            To
                        </h3>
                        <h3 className={styles["page63__title-right"]} onClick={() => playAudio('pg62_audio2')} style={{ cursor: 'pointer' }}>
                            Past/After
                        </h3>
                    </div>
                    <div className={styles["page63__clock-container"]}>
                        <img
                            src={pagina63_imagem1}
                            alt="Relógio com setas indicando o horário"
                            className={styles["page63__image"]}
                        />
                        <p className={styles["page63__text"]} style={{ top: '24%', right: '100%' }} onClick={() => playAudio('pg62_audio3')}>
                            It’s five <span className={styles["page63__highlight"]}>to...</span>
                        </p>
                        <p className={styles["page63__text"]} style={{ top: '33%', right: '100%' }} onClick={() => playAudio('pg62_audio4')}>
                            It’s ten <span className={styles["page63__highlight"]}>to...</span>
                        </p>
                        <p className={styles["page63__text"]} style={{ top: '46%', right: '100%' }} onClick={() => playAudio('pg62_audio5')}>
                            It’s (a) quarter <span className={styles["page63__highlight"]}>to...</span>
                        </p>
                        <p className={styles["page63__text"]} style={{ top: '58%', right: '100%' }} onClick={() => playAudio('pg62_audio6')}>
                            It’s twenty <span className={styles["page63__highlight"]}>to...</span>
                        </p>
                        <p className={styles["page63__text"]} style={{ top: '68%', right: '100%' }} onClick={() => playAudio('pg62_audio7')}>
                            It’s twenty-five <span className={styles["page63__highlight"]}>to...</span>
                        </p>
                        <p className={styles["page63__text"]} style={{ top: '24%', left: '100%' }} onClick={() => playAudio('pg62_audio8')}>
                            It’s five <span className={styles["page63__highlight"]}>past</span>...
                        </p>
                        <p className={styles["page63__text"]} style={{ top: '34%', left: '100%' }} onClick={() => playAudio('pg62_audio9')}>
                            It’s ten <span className={styles["page63__highlight"]}>past</span>...
                        </p>
                        <p className={styles["page63__text"]} style={{ top: '46%', left: '100%' }} onClick={() => playAudio('pg62_audio10')}>
                            It’s (a) quarter <span className={styles["page63__highlight"]}>past</span>...
                        </p>
                        <p className={styles["page63__text"]} style={{ top: '59%', left: '100%' }} onClick={() => playAudio('pg62_audio11')}>
                            It’s twenty <span className={styles["page63__highlight"]}>past</span>...
                        </p>
                        <p className={styles["page63__text"]} style={{ top: '68%', left: '100%' }} onClick={() => playAudio('pg62_audio12')}>
                            It’s twenty-five <span className={styles["page63__highlight"]}>past</span>...
                        </p>
                        <p className={styles["page63__text"]} style={{ top: '-15%', left: '45%' }} onClick={() => playAudio('pg62_audio14')}>
                            It is <br /> <span className={styles["page63__highlight"]}>...o’clock</span>
                        </p>
                    </div>
                </main>
                <aside className={styles["page63__aside"]}>
                    <div className={styles["page63__aside-note--primary"]}>
                        <img className={styles["page63__aside-image"]} src={pg63IconNotes} alt="Ícone de nota" />
                        <p><strong>Study note</strong></p>
                    </div>
                    <div className={styles["page63__aside-note--secondary"]}>
                        <p>
                            <strong>It’s twenty to ten.</strong> <span className={styles["page63__spacing--small"]}>Faltam vinte para às dez.</span>
                        </p>
                        <p>
                            <strong>It’s ten o’clock.</strong> <span className={styles["page63__spacing--medium"]}>São dez horas.</span>
                        </p>
                        <p>
                            <strong>It’s five past/after ten.</strong> <span className={styles["page63__spacing--large"]}>São dez e cinco.</span>
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );

};

export default Pagina63;
