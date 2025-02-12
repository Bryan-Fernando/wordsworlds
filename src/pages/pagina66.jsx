import React from 'react';

import styles from './pagina66.module.css';

import pg66IconNotes from '../assets/icons/notes_icon.webp';
import pg66AudioIcon from '../assets/icons/eng_audio_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina66Imagem1 from '../assets/images/pagina65_imagem1.webp';
import pagina66Imagem2 from '../assets/images/pagina65_imagem2.webp';
import pagina66Imagem3 from '../assets/images/pagina65_imagem3.webp';

import global_readComPrp from '../assets/audios/global_readComPrp.mp3';
import global_readComPre from '../assets/audios/global_readComPre.mp3';
import pg65_audio1 from "../assets/audios/pg65_audio1.mp3";
import pg65_audio2 from "../assets/audios/pg65_audio2.mp3";
import pg65_audio3 from "../assets/audios/pg65_audio3.mp3";

const pagina66 = () => {

    const audioMap = {
        global_readComPre: global_readComPre,
        global_readComPrp: global_readComPrp,
        pg65_audio1: pg65_audio1,
        pg65_audio2: pg65_audio2,
        pg65_audio3: pg65_audio3,
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
            <div className={styles["page66__container"]}>
                <header className={styles["page66__header"]}>
                    <h1 className={styles["page66__title"]}>
                        Reading and Comprehension Language Practice
                        <img
                            src={eng_audio_icon}
                            alt="English audio"
                            className={styles["page66__audio-icon"]}
                            onClick={() => playAudio('global_readComPre')}
                        />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese audio"
                            className={styles["page66__audio-icon"]}
                            onClick={() => playAudio('global_readComPrp')}
                        />
                    </h1>
                </header>
                <main className={styles["page66__main"]}>
                    <div className={styles["page66__content"]}>
                        <div className={styles["page66__text-container--first"]}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;Getting to Know Brazil
                            </p>
                            <p onClick={() => playAudio("pg65_audio1")} style={{ cursor: "pointer" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;Brazil is a beautiful country in South America. It <strong>is</strong> famous for its beautiful beaches,
                                culturally diverse, and delicious food. The official language of Brazil is Portuguese. People in Brazil <strong>are</strong> friendly
                                and welcoming.
                            </p>
                        </div>
                        <div className={styles["page66__image-container--first"]}>
                            <img src={pagina66Imagem1} alt="Brazil Image 1" className={styles["page66__image-small"]} />
                        </div>
                    </div>
                    <div className={styles["page66__content"]}>
                        <div className={styles["page66__text-container--second"]}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;My Family
                            </p>
                            <p onClick={() => playAudio("pg65_audio2")} style={{ cursor: "pointer" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;My family is small. There <strong>are</strong> four people in my family: my father, my mother, my sister, and me.
                                My father is tall, and my mother <strong>is</strong> kind. My sister <strong>is</strong> funny, and I <strong>am</strong> happy.
                            </p>
                        </div>
                        <div className={styles["page66__image-container--second"]}>
                            <img src={pagina66Imagem2} alt="Brazil Image 2" className={styles["page66__image-small"]} />
                        </div>
                    </div>
                    <div className={styles["page66__content"]}>
                        <div className={styles["page66__text-container--third"]}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;School
                            </p>
                            <p onClick={() => playAudio("pg65_audio3")} style={{ cursor: "pointer" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;My school is big and colorful. There <strong>are</strong> many students and teachers.
                                The classrooms <strong>are</strong> bright, and the playground <strong>is</strong> fun. I <strong>am</strong> excited to learn every day.
                            </p>
                        </div>
                        <div className={styles["page66__image-container--third"]}>
                            <img src={pagina66Imagem3} alt="School Image 3" className={styles["page66__image-small"]} />
                        </div>
                    </div>
    
                    <div className={styles["page66__audio-section"]}>
                        <div className={styles["page66__question-icon"]}> <strong>1</strong></div>
                        <div className={styles["page66__audio-text"]}>
                            <p><strong>When listening to the audio.</strong></p>
                            <p>Separate sentence by sentence and provide its translation.</p>
                            <p><strong>Example:</strong></p>
                            <p> <img src={pg66AudioIcon} alt="Audio Icon" className={styles["page66__audio-icon"]} /> Getting to know Brazil.</p>
                            <p> <img src={pg66AudioIcon} alt="Audio Icon" className={styles["page66__audio-icon"]} />Brazil is a beautiful country in South America.</p>
                        </div>
                    </div>
                </main>
    
                <aside className={styles["page66__aside"]}>
                    <div className={styles["page66__aside-content"]}>
                        <div className={styles["page66__aside-note--first"]}>
                            <img className={styles["page66__aside-note-icon"]} src={pg66IconNotes} alt="Word Bank Icon" />
                            <p><strong>Listening Comprehension and Pronunciation</strong></p>
                        </div>
                        <div className={styles["page66__aside-note--second"]}>
                            <p>Now, take a moment to focus on the dialogues(s). Pay attention to the way the speakers express themselves, and try to practice mimicking their pronunciation.</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );    
};

export default pagina66;
