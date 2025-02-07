import React, { useRef } from 'react';
import styles from './pagina55.module.css';
import pg55IconNotes from '../assets/Icons/Icon-Notes.png';
import pagina55Imagem1 from '../assets/Images/pagina55_imagem1.webp';
import pagina55Imagem2 from '../assets/Images/pagina55_imagem2.webp';
import pagina55Imagem3 from '../assets/Images/pagina55_imagem3.webp';
import pagina55Imagem4 from '../assets/Images/pagina55_imagem4.webp';
import pagina55Imagem5 from '../assets/Images/pagina55_imagem5.webp';
import eIcon from '../assets/icons/eIcon.png';
import pIcon from '../assets/icons/pIcon.png';

// Importação dos áudios do cabeçalho
import pg55Audio1e from '../assets/audios/pg55_audio1e.mp3';
import pg55Audio1p from '../assets/audios/pg55_audio1p.mp3';

// Importação dos áudios dos nomes/títulos
import pg55Audio2 from '../assets/audios/pg55_audio2.mp3';
import pg55Audio3 from '../assets/audios/pg55_audio3.mp3';
import pg55Audio4 from '../assets/audios/pg55_audio4.mp3';
import pg55Audio5 from '../assets/audios/pg55_audio5.mp3';
import pg55Audio6 from '../assets/audios/pg55_audio6.mp3';

const Pagina55 = () => {
    const audioMap = {
        "pg55-audio1e": pg55Audio1e,
        "pg55-audio1p": pg55Audio1p,
        "pg55-audio2": pg55Audio2,
        "pg55-audio3": pg55Audio3,
        "pg55-audio4": pg55Audio4,
        "pg55-audio5": pg55Audio5,
        "pg55-audio6": pg55Audio6,
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
            <div className={styles['page55']}>
                <header className={styles['page55__header']}>
                    <h1 className={styles['page55__title']}>
                        Names and Titles (Mr. Mrs. Miss. Ms. Ma’am)
                        <img
                            src={eIcon}
                            alt="English Audio"
                            className={styles['page55__icon']}
                            onClick={() => playAudio('pg55-audio1e')}
                        />
                        <img
                            src={pIcon}
                            alt="Portuguese Audio"
                            className={styles['page55__icon']}
                            onClick={() => playAudio('pg55-audio1p')}
                        />
                    </h1>
                </header>
                <main className={styles['page55__content']}>
                    <div className={styles['page55__section-left']}>
                        <div>
                            <div className={styles['page55__image-container--large']}>
                                <img src={pagina55Imagem1} alt="Ma’am Jeaneta Mc. Cartney" className={styles['page55__image']} />
                            </div>
                            <p
                                className={styles['page55__text']}
                                onClick={() => playAudio('pg55-audio2')}
                            >
                                <u>Ma’am</u> Jeaneta Mc. Cartney
                            </p>
                        </div>
                        <div>
                            <div className={styles['page55__image-container--large-alt']}>
                                <img src={pagina55Imagem2} alt="Mrs Carina Sanches" className={styles['page55__image']} />
                            </div>
                            <p
                                className={styles['page55__text']}
                                onClick={() => playAudio('pg55-audio3')}
                            >
                                <u>Mrs</u> Carina Sanches
                            </p>
                        </div>
                        <div>
                            <div className={styles['page55__image-container--large-alt']}>
                                <img src={pagina55Imagem3} alt="Ms Olivia Gomes" className={styles['page55__image']} />
                            </div>
                            <p
                                className={styles['page55__text']}
                                onClick={() => playAudio('pg55-audio4')}
                            >
                                <u>Ms</u> Olivia Gomes
                            </p>
                        </div>
                    </div>
                    <div className={styles['page55__section-right']}>
                        <div>
                            <div className={styles['page55__image-container--large-alt']}>
                                <img src={pagina55Imagem4} alt="Miss Leticia Pagliari" className={styles['page55__image']} />
                            </div>
                            <p
                                className={styles['page55__text']}
                                onClick={() => playAudio('pg55-audio5')}
                            >
                                <u>Miss</u> Leticia Pagliari
                            </p>
                        </div>
                        <div>
                            <div className={styles['page55__image-container--large-alt']}>
                                <img src={pagina55Imagem5} alt="Mr Ronaldo Willian" className={styles['page55__image']} />
                            </div>
                            <p
                                className={styles['page55__text']}
                                onClick={() => playAudio('pg55-audio6')}
                            >
                                <u>Mr</u> Ronaldo Willian
                            </p>
                        </div>
                    </div>
                </main>
                <aside className={styles['page55__aside']}>
                    <div className={styles['page55__aside-container']}>
                        <div className={styles['page55__aside-notes1']}>
                            <img className={styles['page55__aside-img-notes']} src={pg55IconNotes} alt="Word Bank Icon" />
                            <p>Word Bank</p>
                        </div>
                        <div className={styles['page55__aside-notes2']}>
                            <p className={styles['page55__aside-text-red']}>
                                Mr
                                <br />
                                Mrs
                                <br />
                                Miss <br />
                                Ms <br />
                                Ma’am <br />
                            </p>
                            <p>
                                Sr (senhor) <br />
                                Sra (senhora)
                                <br />
                                Srta (solteira) <br />
                                Ms (mulher adulta sem especificar seu estado civil) <br />
                                Madame (forma cortês de se dirigir a uma mulher) <br />
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina55;
