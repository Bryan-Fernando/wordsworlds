import React, { useRef } from 'react';

import styles from './pagina53.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina53Imagem1 from '../assets/images/pagina53_imagem1.webp';
import pagina53Imagem2 from '../assets/images/pagina53_imagem2.webp';
import pagina53Imagem3 from '../assets/images/pagina53_imagem3.webp';
import pagina53Imagem4 from '../assets/images/pagina53_imagem4.webp';

import pg50Audio1e from '../assets/audios/pg50_audio1e.mp3';
import pg50Audio1p from '../assets/audios/pg50_audio1p.mp3';
import pg53Audio2H from '../assets/audios/pg53_audio2H.mp3';
import pg53Audio1 from '../assets/audios/pg53_audio1.mp3';
import pg53Audio2 from '../assets/audios/pg53_audio2.mp3';
import pg53Audio3 from '../assets/audios/pg53_audio3.mp3';
import pg53Audio4 from '../assets/audios/pg53_audio4.mp3';

const Pagina53 = () => {
    const audioMap = {
        "pg50-audio1e": pg50Audio1e,
        "pg50-audio1p": pg50Audio1p,
        "pg53-audio2h": pg53Audio2H,
        "pg53-audio1": pg53Audio1,
        "pg53-audio2": pg53Audio2,
        "pg53-audio3": pg53Audio3,
        "pg53-audio4": pg53Audio4,
    };

    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
        if (!audioMap[audioId]) {
            console.error(`Erro: Áudio não encontrado para ID '${audioId}'`);
            return;
        }

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
            <div className={styles['page53']}>
                <header className={styles['page53__header']}>
                    <h1 className={styles['page53__title']}>
                        Grammar - Demonstrative Pronouns
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles['page53__icon']}
                            onClick={() => playAudio('pg50-audio1e')}
                        />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese Audio"
                            className={styles['page53__icon']}
                            onClick={() => playAudio('pg50-audio1p')}
                        />
                    </h1>
                    <div className={styles['page53__subtitle-container']}>
                        <h2
                            className={styles['page53__subtitle']}
                            onClick={() => playAudio('pg53-audio2h')}
                        >
                            These = Estes / Estas / Esses / Essas
                        </h2>
                    </div>
                </header>
                <main className={styles['page53__content']}>
                    <div className={styles['page53__section-left']}>
                        <div>
                            <div className={styles['page53__image-container--large']}>
                                <img src={pagina53Imagem1} alt="Imagem 1" className={styles['page53__image']} />
                            </div>
                            <p
                                className={styles['page53__text']}
                                onClick={() => playAudio('pg53-audio1')}
                            >
                                These are my co-workers.
                            </p>
                        </div>
                        <div>
                            <div className={styles['page53__image-container--tall']}>
                                <img src={pagina53Imagem3} alt="Imagem 2" className={styles['page53__image']} />
                            </div>
                            <p
                                className={styles['page53__text']}
                                onClick={() => playAudio('pg53-audio2')}
                            >
                                These are my books.
                            </p>
                        </div>
                    </div>
                    <div className={styles['page53__section-right']}>
                        <div>
                            <div className={styles['page53__image-container--large-alt']}>
                                <img src={pagina53Imagem2} alt="Imagem 3" className={styles['page53__image']} />
                            </div>
                            <p
                                className={styles['page53__text']}
                                onClick={() => playAudio('pg53-audio3')}
                            >
                                These are my grades.
                            </p>
                        </div>
                        <div>
                            <div className={styles['page53__image-container--tall-alt']}>
                                <img src={pagina53Imagem4} alt="Imagem 4" className={styles['page53__image']} />
                            </div>
                            <p
                                className={styles['page53__text']}
                                onClick={() => playAudio('pg53-audio4')}
                            >
                                These are my new sneakers.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina53;
