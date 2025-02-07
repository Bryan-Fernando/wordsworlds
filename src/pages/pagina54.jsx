import React, { useRef } from 'react';
import styles from './pagina54.module.css';
import pagina54Imagem1 from '../assets/Images/pagina54_imagem1.webp';
import pagina54Imagem2 from '../assets/Images/pagina54_imagem2.webp';
import pagina54Imagem3 from '../assets/Images/pagina54_imagem3.webp';
import pagina54Imagem4 from '../assets/Images/pagina54_imagem4.webp';
import eIcon from '../assets/icons/eIcon.png';
import pIcon from '../assets/icons/pIcon.png';

// Importação dos áudios do cabeçalho (mesmos da Página 50)
import pg50Audio1e from '../assets/audios/pg50_audio1e.mp3';
import pg50Audio1p from '../assets/audios/pg50_audio1p.mp3';

// Áudio específico do subtítulo da Página 54
import pg54Audio2H from '../assets/audios/pg54_audio2H.mp3';

// Áudios específicos da Página 54
import pg54Audio1 from '../assets/audios/pg54_audio1.mp3';
import pg54Audio2 from '../assets/audios/pg54_audio2.mp3';
import pg54Audio3 from '../assets/audios/pg54_audio3.mp3';
import pg54Audio4 from '../assets/audios/pg54_audio4.mp3';

const Pagina54 = () => {
    const audioMap = {
        "pg50-audio1e": pg50Audio1e,
        "pg50-audio1p": pg50Audio1p,
        "pg54-audio2h": pg54Audio2H,
        "pg54-audio1": pg54Audio1,
        "pg54-audio2": pg54Audio2,
        "pg54-audio3": pg54Audio3,
        "pg54-audio4": pg54Audio4,
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
            <div className={styles['page54']}>
                <header className={styles['page54__header']}>
                    <h1 className={styles['page54__title']}>
                        Grammar - Demonstrative Pronouns
                        <img
                            src={eIcon}
                            alt="English Audio"
                            className={styles['page54__icon']}
                            onClick={() => playAudio('pg50-audio1e')}
                        />
                        <img
                            src={pIcon}
                            alt="Portuguese Audio"
                            className={styles['page54__icon']}
                            onClick={() => playAudio('pg50-audio1p')}
                        />
                    </h1>
                    <div className={styles['page54__subtitle-container']}>
                        <h2
                            className={styles['page54__subtitle']}
                            onClick={() => playAudio('pg54-audio2h')}
                        >
                            Those = Aqueles / Aquelas
                        </h2>
                    </div>
                </header>
                <main className={styles['page54__content']}>
                    <div className={styles['page54__section-left']}>
                        <div>
                            <div className={styles['page54__image-container--large']}>
                                <img src={pagina54Imagem1} alt="Imagem 1" className={styles['page54__image']} />
                            </div>
                            <p
                                className={styles['page54__text']}
                                onClick={() => playAudio('pg54-audio1')}
                            >
                                Those are my teammates.
                            </p>
                        </div>
                        <div>
                            <div className={styles['page54__image-container--tall']}>
                                <img src={pagina54Imagem3} alt="Imagem 3" className={styles['page54__image']} />
                            </div>
                            <p
                                className={styles['page54__text']}
                                onClick={() => playAudio('pg54-audio2')}
                            >
                                Those are my friends.
                            </p>
                        </div>
                    </div>
                    <div className={styles['page54__section-right']}>
                        <div>
                            <div className={styles['page54__image-container--large-alt']}>
                                <img src={pagina54Imagem2} alt="Imagem 2" className={styles['page54__image']} />
                            </div>
                            <p
                                className={styles['page54__text']}
                                onClick={() => playAudio('pg54-audio3')}
                            >
                                Those are Anne’s parents.
                            </p>
                        </div>
                        <div>
                            <div className={styles['page54__image-container--tall-alt']}>
                                <img src={pagina54Imagem4} alt="Imagem 4" className={styles['page54__image']} />
                            </div>
                            <p
                                className={styles['page54__text']}
                                onClick={() => playAudio('pg54-audio4')}
                            >
                                Those are my classmates.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina54;
