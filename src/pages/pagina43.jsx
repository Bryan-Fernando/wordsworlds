import React, { useState, useRef } from 'react';

import styles from './pagina43.module.css';

import pg43IconNotes from '../assets/icons/notes_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import pagina43_imagem1 from '../assets/images/pagina43_imagem1.webp';
import pagina43_imagem2 from '../assets/images/pagina43_imagem2.webp';
import pagina43_imagem3 from '../assets/images/pagina43_imagem3.webp';
import pagina43_imagem4 from '../assets/images/pagina43_imagem4.webp';
import pagina43_imagem5 from '../assets/images/pagina43_imagem5.webp';

import global_intro_e from '../assets/audios/global_intro_e.mp3';
import global_intro_p from '../assets/audios/global_intro_p.mp3';
import audio1e from '../assets/audios/pg43_audio1e.mp3';
import audio1p from '../assets/audios/pg43_audio1p.mp3';
import audio2e from '../assets/audios/pg43_audio2e.mp3';
import audio2p from '../assets/audios/pg43_audio2p.mp3';
import audio3e from '../assets/audios/pg43_audio3e.mp3';
import audio3p from '../assets/audios/pg43_audio3p.mp3';
import audio4e from '../assets/audios/pg43_audio4e.mp3';
import audio4p from '../assets/audios/pg43_audio4p.mp3';
import audio5e from '../assets/audios/pg43_audio5e.mp3';
import audio5p from '../assets/audios/pg43_audio5p.mp3';
import audio6e from '../assets/audios/pg43_audio6e.mp3';
import audio6p from '../assets/audios/pg43_audio6p.mp3';
import audio7e from '../assets/audios/pg43_audio7e.mp3';
import audio7p from '../assets/audios/pg43_audio7p.mp3';
import audio8e from '../assets/audios/pg43_audio8e.mp3';
import audio8p from '../assets/audios/pg43_audio8p.mp3';
import audio9e from '../assets/audios/pg43_audio9e.mp3';
import audio9p from '../assets/audios/pg43_audio9p.mp3';
import audio10e from '../assets/audios/pg43_audio10e.mp3';
import audio10p from '../assets/audios/pg43_audio10p.mp3';
import audio11e from '../assets/audios/pg43_audio11e.mp3';
import audio11p from '../assets/audios/pg43_audio11p.mp3';
import audio12e from '../assets/audios/pg43_audio12e.mp3';
import audio12p from '../assets/audios/pg43_audio12p.mp3';
import audio13e from '../assets/audios/pg43_audio13e.mp3';
import audio13p from '../assets/audios/pg43_audio13p.mp3';
import audio14e from '../assets/audios/pg43_audio14e.mp3';
import audio14p from '../assets/audios/pg43_audio14p.mp3';
import audio15e from '../assets/audios/pg43_audio15e.mp3';
import audio15p from '../assets/audios/pg43_audio15p.mp3';
import audio16e from '../assets/audios/pg43_audio16e.mp3';
import audio16p from '../assets/audios/pg43_audio16p.mp3';
import audio17e from '../assets/audios/pg43_audio17e.mp3';
import audio17p from '../assets/audios/pg43_audio17p.mp3';
import audio18e from '../assets/audios/pg43_audio18e.mp3';
import audio18p from '../assets/audios/pg43_audio18p.mp3';
import audio19e from '../assets/audios/pg43_audio19e.mp3';
import audio19p from '../assets/audios/pg43_audio19p.mp3';
import audio20e from '../assets/audios/pg43_audio20e.mp3';
import audio20p from '../assets/audios/pg43_audio20p.mp3';


const Pagina43 = () => {
    const audioMap = {
        'pg43_audio1e': audio1e,
        'pg43_audio1p': audio1p,
        'pg43_audio2e': audio2e,
        'pg43_audio2p': audio2p,
        'pg43_audio3e': audio3e,
        'pg43_audio3p': audio3p,
        'pg43_audio4e': audio4e,
        'pg43_audio4p': audio4p,
        'pg43_audio5e': audio5e,
        'pg43_audio5p': audio5p,
        'pg43_audio6e': audio6e,
        'pg43_audio6p': audio6p,
        'pg43_audio7e': audio7e,
        'pg43_audio7p': audio7p,
        'pg43_audio8e': audio8e,
        'pg43_audio8p': audio8p,
        'pg43_audio9e': audio9e,
        'pg43_audio9p': audio9p,
        'pg43_audio10e': audio10e,
        'pg43_audio10p': audio10p,
        'pg43_audio11e': audio11e,
        'pg43_audio11p': audio11p,
        'pg43_audio12e': audio12e,
        'pg43_audio12p': audio12p,
        'pg43_audio13e': audio13e,
        'pg43_audio13p': audio13p,
        'pg43_audio14e': audio14e,
        'pg43_audio14p': audio14p,
        'pg43_audio15e': audio15e,
        'pg43_audio15p': audio15p,
        'pg43_audio16e': audio16e,
        'pg43_audio16p': audio16p,
        'pg43_audio17e': audio17e,
        'pg43_audio17p': audio17p,
        'pg43_audio18e': audio18e,
        'pg43_audio18p': audio18p,
        'pg43_audio19e': audio19e,
        'pg43_audio19p': audio19p,
        'pg43_audio20e': audio20e,
        'pg43_audio20p': audio20p,
    };

    const currentAudio = useRef(null);

    const playHeaderAudio = (audioFile) => {
        const audio = new Audio(audioFile);
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
            <div className={styles.pg43Container}>
                <header className={styles.pg43Header}>
                    <h1 className={styles.pg43HeaderH1} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        Introductions
                        <span>
                            <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                style={{ width: '1.8rem', height: '1.8rem', cursor: 'pointer' }}
                                onClick={() => playHeaderAudio(global_intro_e)}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                style={{ width: '1.8rem', height: '1.8rem', marginLeft: '0.3rem', cursor: 'pointer' }}
                                onClick={() => playHeaderAudio(global_intro_p)}
                            />
                        </span>
                    </h1>
                </header>
                <main className={styles.pg43Main}>
                    <div className={styles.pg43ContainerMain}>
                        <div className={styles.pg43ContainerDiv}>
                            <img className={styles.pg43MainImagems} src={pagina43_imagem1} alt="" />
                            <p className={styles.pg43MainParagrafoBold}>Name:<br />Age:<br />Nationality:<br />City:</p>
                            <p>I'm Sister Juliana Garcia.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio1e')}
                                /> <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio1p')}
                                />
                                <br />I'm 32 years old.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio2e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio2p')}
                                />
                                <br />I'm Brazilian.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio3e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio3p')}
                                />
                                <br />
                                I'm from Machadinho D’Oeste.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio4e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio4p')}
                                />
                            </p>
                        </div>
                        <div className={styles.pg43ContainerDiv}>
                            <img className={styles.pg43MainImagems} src={pagina43_imagem2} alt="" />
                            <p className={styles.pg43MainParagrafoBold}>Name:<br />Age:<br />Nationality:<br />City:</p>
                            <p>This is Jones Oliveira.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio5e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio5p')}
                                />
                                <br />He's 31 years old.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio6e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio6p')}
                                />
                                <br />He is Brazilian.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio7e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio7p')}
                                />
                                <br />
                                He's from Ariquemes.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio8e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio8p')}
                                />
                            </p>
                        </div>
                        <div className={styles.pg43ContainerDiv}>
                            <img className={styles.pg43MainImagems} src={pagina43_imagem3} alt="" />
                            <p className={styles.pg43MainParagrafoBold}>Name:<br />Age:<br />Nationality:<br />City:</p>
                            <p>This is Laura Brandhuber.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio9e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio9p')}
                                />
                                <br />She's 30 years old.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio10e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio10p')}
                                />
                                <br /> She is Brazilian.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio11e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio11p')}
                                />
                                <br />
                                She's from Belo Horizonte.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio12e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio12p')}
                                />
                            </p>
                        </div>
                        <div className={styles.pg43ContainerDiv}>
                            <img className={styles.pg43MainImagems} src={pagina43_imagem4} alt="" />
                            <p className={styles.pg43MainParagrafoBold}>Name:<br />Age:<br />Nationality:<br />City:</p>
                            <p>I’m Rogério Madeira.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio13e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio13p')}
                                />
                                <br /> I’m 35 years old.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio14e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio14p')}
                                />
                                <br /> I’m Brazilian.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio15e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio15p')}
                                />
                                <br />
                                I’m from Ariquemes.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio16e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio16p')}
                                />
                            </p>
                        </div>
                        <div className={styles.pg43ContainerDiv}>
                            <img className={styles.pg43MainImagems} src={pagina43_imagem5} alt="" />
                            <p className={styles.pg43MainParagrafoBold}>Name:<br />Age:<br />Nationality:<br />City:</p>
                            <p>This is Gustavo Farias.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio17e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio17p')}
                                />
                                <br /> He's 38 years old.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio18e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio18p')}
                                />
                                <br /> He's Brazilian.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio19e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio19p')}
                                />
                                <br />
                                He's from Mato Grosso.
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio20e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.iconButton}
                                    onClick={() => playAudio('pg43_audio20p')}
                                />
                            </p>
                        </div>
                    </div>
                </main>
                <aside className={styles.pg43Aside}>
                    <div className={styles.pg43Asidecontainer}>
                        <div className={styles.pg43AsideNotes1}>
                            <img className={styles.pg43AsideImgNotes} src={pg43IconNotes} alt="" />
                            <p>Word Bank</p>
                        </div>
                        <div className={styles.pg43AsideNotes2}>
                            <p className={styles.pg43AsideNotes2Negrito}>
                                Who...? <br />
                                What...? <br />
                                Where...? <br />
                                When...? <br />
                                What Time...? <br />
                            </p>
                            <p>
                                Quem...? <br />
                                O que | Que | Qual | Quais...? <br />
                                Aonde | Onde...? <br />
                                Quando...? <br />
                                Que horas...? <br />
                            </p>
                            <div className={styles.pg43VerticalLine}></div>
                            <p className={styles.pg43AsideNotes2Negrito}>
                                How? <br />
                                How Old? <br />
                            </p>
                            <p>
                                Como? <br />
                                Quantos anos? <br />
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina43;