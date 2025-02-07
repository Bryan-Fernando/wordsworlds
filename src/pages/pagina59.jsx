import React from 'react';
import styles from './pagina59.module.css';
import pagina59_imagem1 from '../assets/images/pagina59_imagem1.webp';
import global_audio_grammar from '../assets/audios/global_grammar.mp3';
import global_audio_tellingTTe from '../assets/audios/global_tellingTTe.mp3';
import global_audio_tellingTTp from '../assets/audios/global_tellingTTp.mp3';
import pg59_audio1 from '../assets/audios/pg59_audio1.mp3';
import pg59_audio2 from '../assets/audios/pg59_audio2.mp3';
import pg59_audio3 from '../assets/audios/pg59_audio3.mp3';
import pg59_audio4 from '../assets/audios/pg59_audio4.mp3';
import pg59_audio5 from '../assets/audios/pg59_audio5.mp3';
import pg59_audio6 from '../assets/audios/pg59_audio6.mp3';
import pg59_audio7 from '../assets/audios/pg59_audio7.mp3';
import pg59_audio8 from '../assets/audios/pg59_audio8.mp3';
import pg59_audio9 from '../assets/audios/pg59_audio9.mp3';
import pg59_audio10 from '../assets/audios/pg59_audio10.mp3';
import pg59_audio11 from '../assets/audios/pg59_audio11.mp3';
import pg59_audio12 from '../assets/audios/pg59_audio12.mp3';
import pg59_audio13 from '../assets/audios/pg59_audio13.mp3';
import pg59_audio14 from '../assets/audios/pg59_audio14.mp3';

const Pagina59 = () => {

    const audioMap = {
        global_audio_grammar,
        global_audio_tellingTTe,
        global_audio_tellingTTp,
        pg59_audio1,
        pg59_audio2,
        pg59_audio3,
        pg59_audio4,
        pg59_audio5,
        pg59_audio6,
        pg59_audio7,
        pg59_audio8,
        pg59_audio9,
        pg59_audio10,
        pg59_audio11,
        pg59_audio12,
        pg59_audio13,
        pg59_audio14
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
            <div className={styles['page59__container']}>
                <header className={styles['page59__header']}>
                    <h1
                        className={styles['page59__title']}
                        onClick={() => playAudio('global_audio_grammar')}
                        style={{ cursor: 'pointer' }}
                    >
                        Grammar
                    </h1>
                    <div className={styles['page59__header-divider']}>
                        <div className={styles['page59__header-icon']}></div>
                        <h2
                            className={styles['page59__subtitle']}
                            onClick={() => playAudio('global_audio_tellingTTe')}
                            style={{ cursor: 'pointer' }}
                        >
                            Telling the time
                        </h2>
                        <p
                            className={styles['page59__subtext']}
                            onClick={() => playAudio('global_audio_tellingTTp')}
                            style={{ cursor: 'pointer' }}
                        >
                            Dizendo as horas
                        </p>
                    </div>
                </header>
    
                <main className={styles['page59__main']}>
                    <div className={styles['page59__info']}>
                        <p><strong>OBS:</strong> Em inglês existem (têm) duas formas de dizer as horas:</p>
                        <p><strong>1.</strong> O sistema do relógio analógico conforme exemplos.</p>
                        <p><strong>1.1</strong> Neste sistema mencionamos primeiro as horas seguidas dos minutos até os 30 minutos.</p>
                        <p><strong>1.2</strong> Após os 30 minutos invertemos, mencionamos primeiro os minutos seguidos da hora até 1 minuto para a hora seguinte.</p>
                    </div>
                    <div className={styles['page59__time-grid']}>
                        <div className={styles['page59__time-column--left']}>
                            <p onClick={() => playAudio('pg59_audio1')} style={{ cursor: 'pointer' }}>10:00 - It’s ten o’clock.</p>
                            <div className={styles['page59__divider']}></div>
                            <p>
                                <span onClick={() => playAudio('pg59_audio2')} style={{ cursor: 'pointer' }}>
                                    10:05 - It’s five past/after ten.
                                </span><br />
                                <span onClick={() => playAudio('pg59_audio3')} style={{ cursor: 'pointer' }}>
                                    10:10 - It’s ten past/after ten.
                                </span><br />
                                <span onClick={() => playAudio('pg59_audio4')} style={{ cursor: 'pointer' }}>
                                    10:15 - It’s quarter past/after ten.
                                </span><br />
                                <span onClick={() => playAudio('pg59_audio5')} style={{ cursor: 'pointer' }}>
                                    10:20 - It’s twenty past/after ten.
                                </span><br />
                                <span onClick={() => playAudio('pg59_audio6')} style={{ cursor: 'pointer' }}>
                                    10:25 - It’s twenty-five past/after ten.
                                </span><br />
                                <span onClick={() => playAudio('pg59_audio7')} style={{ cursor: 'pointer' }}>
                                    10:30 - It’s half past/after ten.
                                </span>
                            </p>
                            <div className={styles['page59__divider']}></div>
                            <p>
                                <span onClick={() => playAudio('pg59_audio8')} style={{ cursor: 'pointer' }}>
                                    10:35 - It’s twenty-five to eleven.
                                </span><br />
                                <span onClick={() => playAudio('pg59_audio9')} style={{ cursor: 'pointer' }}>
                                    10:40 - It’s twenty to eleven.
                                </span><br />
                                <span onClick={() => playAudio('pg59_audio10')} style={{ cursor: 'pointer' }}>
                                    10:45 - It’s quarter to eleven.
                                </span><br />
                                <span onClick={() => playAudio('pg59_audio11')} style={{ cursor: 'pointer' }}>
                                    10:50 - It’s ten to eleven.
                                </span><br />
                                <span onClick={() => playAudio('pg59_audio12')} style={{ cursor: 'pointer' }}>
                                    10:55 - It’s five to eleven.
                                </span>
                            </p>
                        </div>
                        <div className={styles['page59__gray-box']}></div>
                        <div className={styles['page59__time-column--right']}>
                            <p>10:00 - São 10 horas</p>
                            <div className={styles['page59__divider']}></div>
                            <p>
                                10:05 - São 10 e 5<br />
                                10:10 - São 10 e 10<br />
                                10:15 - São 10 e 15<br />
                                10:20 - São 10 e 20<br />
                                10:25 - São 10 e 25<br />
                                10:30 - São 10 e 30<br />
                            </p>
                            <div className={styles['page59__divider']}></div>
                            <p>
                                10:35 - São/Faltam 25 para às 11<br />
                                10:40 - São/Faltam 20 para às 11<br />
                                10:45 - São/Faltam 15 para às 11<br />
                                10:50 - São/Faltam 10 para às 11<br />
                                10:55 - São/Faltam 5 para às 11<br />
                            </p>
                        </div>
                    </div>
                </main>
                <aside className={styles['page59__aside']}>
                    <div className={styles['page59__aside-container']}>
                        <span
                            className={styles['page59__text--left']}
                            onClick={() => playAudio('pg59_audio13')}
                            style={{ cursor: 'pointer' }}
                        >
                            To
                        </span>
                        <img
                            src={pagina59_imagem1}
                            alt="Clock Illustration"
                            className={styles['page59__image']}
                        />
                        <span
                            className={styles['page59__text--right']}
                            onClick={() => playAudio('pg59_audio14')}
                            style={{ cursor: 'pointer' }}
                        >
                            Past <br /> After
                        </span>
                    </div>
                </aside>
            </div>
        </div>
    );
    
};

export default Pagina59;
