import React from 'react';

import styles from './pagina60.module.css';

import pagina60_imagem1 from '../assets/images/pagina60_imagem1.webp';
import pagina60_imagem2 from '../assets/images/pagina60_imagem2.webp';
import pagina60_imagem3 from '../assets/images/pagina60_imagem3.webp';
import pagina60_imagem4 from '../assets/images/pagina60_imagem4.webp';
import pagina60_imagem5 from '../assets/images/pagina60_imagem5.webp';
import pagina60_imagem6 from '../assets/images/pagina60_imagem6.webp';
import pagina60_imagem7 from '../assets/images/pagina60_imagem7.webp';
import pagina60_imagem8 from '../assets/images/pagina60_imagem8.webp';

import pg60_audio1 from '../assets/audios/pg60_audio1.mp3';
import pg60_audio2 from '../assets/audios/pg60_audio2.mp3';
import pg60_audio3 from '../assets/audios/pg60_audio3.mp3';
import pg60_audio4 from '../assets/audios/pg60_audio4.mp3';
import pg60_audio5 from '../assets/audios/pg60_audio5.mp3';
import pg60_audio6 from '../assets/audios/pg60_audio6.mp3';
import pg60_audio7 from '../assets/audios/pg60_audio7.mp3';
import pg60_audio8 from '../assets/audios/pg60_audio8.mp3';
import global_audio_grammar from '../assets/audios/global_grammar.mp3';
import global_what_ti_e from '../assets/audios/global_what_ti_e.mp3';
import global_what_ti_p from '../assets/audios/global_what_ti_p.mp3';


const Pagina60 = () => {

    const audioMap = {
        global_audio_grammar,
        global_what_ti_e,
        global_what_ti_p,
        pg60_audio1,
        pg60_audio2,
        pg60_audio3,
        pg60_audio4,
        pg60_audio5,
        pg60_audio6,
        pg60_audio7,
        pg60_audio8
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
    <div className={styles['page60__container']}>
        <header className={styles['page60__header']}>
            <h1
                className={styles['page60__title']}
                onClick={() => playAudio('global_audio_grammar')}
                style={{ cursor: 'pointer' }}
            >
                Grammar
            </h1>
            <div className={styles['page60__subtitle-container']}>
                <h2
                    className={styles['page60__subtitle-text']}
                    onClick={() => playAudio('global_what_ti_e')}
                    style={{ cursor: 'pointer' }}
                >
                    What time is it?
                </h2>
                <p
                    className={styles['page60__translation']}
                    onClick={() => playAudio('global_what_ti_p')}
                    style={{ cursor: 'pointer' }}
                >
                    Que horas são?
                </p>
            </div>
        </header>

        <main className={styles['page60__main']}>
            <div className={styles['page60__notes']}>
                <div className={styles['page60__notes-icon']}>!</div> {/* Ícone no canto superior esquerdo */}
                <p style={{ fontWeight: 'bold', margin: 0 }}>
                    a.m = before noon (antes de meio-dia) <br />
                    p.m = after noon (depois de meio-dia)
                </p>
            </div>

            <div className={styles['page60__examples-container']}>
                <div className={styles['page60__example']}>
                    <div className={styles['page60__image-container']}>
                        <img src={pagina60_imagem1} alt="Clock example 1" />
                    </div>
                    <p
                        style={{ color: '#A61C28', fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={() => playAudio('pg60_audio1')}
                    >
                        It is eight o’clock.
                    </p>
                    <p>(São oito horas.)</p>
                </div>
                <div className={styles['page60__example']}>
                    <div className={styles['page60__image-container']}>
                        <img src={pagina60_imagem2} alt="Clock example 2" />
                    </div>
                    <p
                        style={{ color: '#A61C28', fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={() => playAudio('pg60_audio2')}
                    >
                        It is ten ten.
                    </p>
                    <p>(São dez e dez.)</p>
                </div>
                <div className={styles['page60__example']}>
                    <div className={styles['page60__image-container']}>
                        <img src={pagina60_imagem3} alt="Clock example 3" />
                    </div>
                    <p
                        style={{ color: '#A61C28', fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={() => playAudio('pg60_audio3')}
                    >
                        It is seven-fifteen.
                    </p>
                    <p>(São sete e quinze.)</p>
                </div>
                <div className={styles['page60__example']}>
                    <div className={styles['page60__image-container']}>
                        <img src={pagina60_imagem4} alt="Clock example 4" />
                    </div>
                    <p
                        style={{ color: '#A61C28', fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={() => playAudio('pg60_audio4')}
                    >
                        It is five-fourteen.
                    </p>
                    <p>(São cinco e quatorze.)</p>
                </div>
            </div>
            <div className={styles['page60__examples-container']}>
                        <div className={styles['page60__example']}>
                            <div className={styles['page60__image-container']}>
                                <img src={pagina60_imagem5} alt="Clock example 5" />
                            </div>
                            <p
                                style={{ color: '#A61C28', fontWeight: 'bold', cursor: 'pointer' }}
                                onClick={() => playAudio('pg60_audio5')}
                            >
                                It is one twenty-nine.
                            </p>
                            <p>(São uma e vinte e nove.)</p>
                        </div>
                        <div className={styles['page60__example']}>
                            <div className={styles['page60__image-container']}>
                                <img src={pagina60_imagem6} alt="Clock example 6" />
                            </div>
                            <p
                                style={{ color: '#A61C28', fontWeight: 'bold', cursor: 'pointer' }}
                                onClick={() => playAudio('pg60_audio6')}
                            >
                                It is noon.
                            </p>
                            <p>(É meio-dia.)</p>
                        </div>
                        <div className={styles['page60__example']}>
                            <div className={styles['page60__image-container']}>
                                <img src={pagina60_imagem7} alt="Clock example 7" />
                            </div>
                            <p
                                style={{ color: '#A61C28', fontWeight: 'bold', cursor: 'pointer' }}
                                onClick={() => playAudio('pg60_audio7')}
                            >
                                It is nine forty-five.<br />
                                It’s fifteen to ten.
                            </p>
                            <p>
                                (São nove e quarenta e cinco.)<br />
                                (São quinze para as dez.)
                            </p>
                        </div>
                        <div className={styles['page60__example']}>
                            <div className={styles['page60__image-container']}>
                                <img src={pagina60_imagem8} alt="Clock example 8" />
                            </div>
                            <p
                                style={{ color: '#A61C28', fontWeight: 'bold', cursor: 'pointer' }}
                                onClick={() => playAudio('pg60_audio8')}
                            >
                                It is three-fifty.<br />
                                It’s ten to four.
                            </p>
                            <p>
                                (São três e cinquenta.)<br />
                                (São dez para às quatro.)
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );

};

export default Pagina60;
