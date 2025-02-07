import React from 'react';
import styles from './pagina3.module.css';

import pagina3_imagem1 from '../assets/Images/pagina3_imagem1.webp';
import pagina3_imagem2 from '../assets/Images/pagina3_imagem2.webp';
import pagina3_imagem3 from '../assets/Images/pagina3_imagem3.webp';
import pagina3_imagem4 from '../assets/Images/pagina3_imagem4.webp';

import eIcon from '../assets/icons/eIcon.png';
import pIcon from '../assets/icons/pIcon.png';
import pg3Audio1e from '../assets/Audios/pg3_audio1e.mp3';
import pg3Audio1p from '../assets/Audios/pg3_audio1p.mp3';
import pg3Audio2e from '../assets/Audios/pg3_audio2e.mp3';
import pg3Audio2p from '../assets/Audios/pg3_audio2p.mp3';
import pg3Audio3e from '../assets/Audios/pg3_audio3e.mp3';
import pg3Audio3p from '../assets/Audios/pg3_audio3p.mp3';
import pg3Audio4e from '../assets/Audios/pg3_audio4e.mp3';
import pg3Audio4p from '../assets/Audios/pg3_audio4p.mp3';
import pg3Audio5e from '../assets/Audios/pg3_audio5e.mp3';
import pg3Audio5p from '../assets/Audios/pg3_audio5p.mp3';
import pg3Audio6e from '../assets/Audios/pg3_audio6e.mp3';
import pg3Audio6p from '../assets/Audios/pg3_audio6p.mp3';

const Pagina3 = () => {
    const playAudio = (audioSrc) => {
        const audio = new Audio(audioSrc);
        audio.play();
    };

    return (
        <div className={styles.page}>
            <div className={styles.page__container}>
                <header className={styles.page__header}>
                    <h1 className={styles.page__header__title}>
                        People
                        <img
                            src={eIcon}
                            alt="English Audio"
                            className={styles.page__icon}
                            onClick={(e) => {
                                e.stopPropagation();
                                playAudio(pg3Audio1e);
                            }}
                        />
                        <img
                            src={pIcon}
                            alt="Portuguese Audio"
                            className={styles.page__icon}
                            onClick={(e) => {
                                e.stopPropagation();
                                playAudio(pg3Audio1p);
                            }}
                        />
                    </h1>
                </header>
                <main className={styles.page__main}>
                    <img src={pagina3Imagem1} alt="People 1" className={styles.page__image} />
                    <img src={pagina3Imagem2} alt="People 2" className={styles.page__image} />
                    <img src={pagina3Imagem3} alt="People 3" className={styles.page__image} />
                    <img src={pagina3Imagem4} alt="People 4" className={styles.page__image} />
                </main>
                <aside className={styles.page__aside}>
                    <div className={styles.page__aside__header}>
                        <h2 className={styles.page__aside__title}>
                            Greetings and Introductions
                            <img
                                src={eIcon}
                                alt="English Audio"
                                className={styles.page__icon}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    playAudio(pg3Audio2e);
                                }}
                            />
                            <img
                                src={pIcon}
                                alt="Portuguese Audio"
                                className={styles.page__icon}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    playAudio(pg3Audio2p);
                                }}
                            />
                        </h2>
                    </div>
                    <div className={styles.page__aside__list}>
                        <ol>
                            <li className={styles.page__list__item}>
                                Hi, I am Ana Tereza. I am a college veterinary student.
                                <img
                                    src={eIcon}
                                    alt="English Audio"
                                    className={styles.page__icon}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        playAudio(pg3Audio3e);
                                    }}
                                />
                                <img
                                    src={pIcon}
                                    alt="Portuguese Audio"
                                    className={styles.page__icon}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        playAudio(pg3Audio3p);
                                    }}
                                />
                            </li>
                            <li className={styles.page__list__item}>
                                Hello, I am Andrei. I am a teacher.
                                <img
                                    src={eIcon}
                                    alt="English Audio"
                                    className={styles.page__icon}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        playAudio(pg3Audio4e);
                                    }}
                                />
                                <img
                                    src={pIcon}
                                    alt="Portuguese Audio"
                                    className={styles.page__icon}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        playAudio(pg3Audio4p);
                                    }}
                                />
                            </li>
                            <li className={styles.page__list__item}>
                                Hi, I am Emilia. I am a lawyer.
                                <img
                                    src={eIcon}
                                    alt="English Audio"
                                    className={styles.page__icon}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        playAudio(pg3Audio5e);
                                    }}
                                />
                                <img
                                    src={pIcon}
                                    alt="Portuguese Audio"
                                    className={styles.page__icon}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        playAudio(pg3Audio5p);
                                    }}
                                />
                            </li>
                            <li className={styles.page__list__item}>
                                Hello, I am Rafael Vargas. I am a musician, a singer and songwriter.
                                <img
                                    src={eIcon}
                                    alt="English Audio"
                                    className={styles.page__icon}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        playAudio(pg3Audio6e);
                                    }}
                                />
                                <img
                                    src={pIcon}
                                    alt="Portuguese Audio"
                                    className={styles.page__icon}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        playAudio(pg3Audio6p);
                                    }}
                                />
                            </li>
                        </ol>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina3;