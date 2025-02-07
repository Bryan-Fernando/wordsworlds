import React from 'react';
import styles from './pagina67.module.css';
import pg67IconNotes from '../assets/Icons/Icon-Notes.png';
import pagina67Imagem1 from '../assets/Images/pagina67_imagem1.webp';
import pagina67Imagem2 from '../assets/Images/pagina67_imagem2.webp';
import pagina67Imagem3 from '../assets/Images/pagina67_imagem3.webp';
import pagina67Imagem4 from '../assets/Images/pagina67_imagem4.webp';
import global_readComPrp from '../assets/audios/global_readComPrp.mp3';
import global_readComPre from '../assets/audios/global_readComPre.mp3';
import eIcon from '../assets/icons/eIcon.png';
import pIcon from '../assets/icons/pIcon.png';

import pg67_audio1 from "../assets/audios/pg67_audio1.mp3";
import pg67_audio2 from "../assets/audios/pg67_audio2.mp3";
import pg67_audio3 from "../assets/audios/pg67_audio3.mp3";
import pg67_audio4 from "../assets/audios/pg67_audio4.mp3";


const pagina67 = () => {

    const audioMap = {
        global_readComPre: global_readComPre,
        global_readComPrp: global_readComPrp,
        pg67_audio1: pg67_audio1,
        pg67_audio2: pg67_audio2,
        pg67_audio3: pg67_audio3,
        pg67_audio4: pg67_audio4,
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
            <div className={styles["page67__container"]}>
                <header className={styles["page67__header"]}>
                    <h1 className={styles["page67__title"]}>
                        Reading and Comprehension Language Practice
                        <img
                            src={eIcon}
                            alt="English audio"
                            className={styles["page67__audio-icon"]}
                            onClick={() => playAudio('global_readComPre')}
                        />
                        <img
                            src={pIcon}
                            alt="Portuguese audio"
                            className={styles["page67__audio-icon"]}
                            onClick={() => playAudio('global_readComPrp')}
                        />
                    </h1>
                </header>
                <main className={styles["page67__main"]}>
                    <div className={styles["page67__main-container"]}>
                        <div className={styles["page67__text-container1"]}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;My Daily Routine
                            </p>
                            <p onClick={() => playAudio("pg67_audio1")} style={{ cursor: "pointer" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;My daily routine is simple. I <strong>am</strong> a teacher. 
                                In the morning, I <strong>am</strong> at home. Then, I <strong>am</strong> at work. 
                                In the afternoon, I <strong>am</strong> busy with meetings and classes. 
                                At night, I <strong>am</strong> at home again.
                            </p>
                        </div>
                        <div className={styles["page67__image-container1"]}>
                            <img src={pagina67Imagem1} alt="Daily Routine" className={styles["page67__img-small"]} />
                        </div>
                    </div>
                    <div className={styles["page67__main-container"]}>
                        <div className={styles["page67__text-container2"]}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;Hobbies and Interests
                            </p>
                            <p onClick={() => playAudio("pg67_audio2")} style={{ cursor: "pointer" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;My hobbies <strong>are</strong> simple. I <strong>am</strong> interested in reading. 
                                Books <strong>are</strong> my passion. I <strong>am</strong> also fond of cooking. 
                                Recipes <strong>are</strong> my inspiration. In my free time, I <strong>am</strong> happy pursuing these activities.
                            </p>
                        </div>
                        <div className={styles["page67__image-container2"]}>
                            <img src={pagina67Imagem2} alt="Hobbies" className={styles["page67__img-small"]} />
                        </div>
                    </div>
                    <div className={styles["page67__main-container"]}>
                        <div className={styles["page67__text-container3"]}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;My Friends
                            </p>
                            <p onClick={() => playAudio("pg67_audio3")} style={{ cursor: "pointer" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;My friends are great. They are fun to be around. We are always together. 
                                We are happy when we play games. We are sad when we have to say goodbye.
                            </p>
                        </div>
                        <div className={styles["page67__image-container3"]}>
                            <img src={pagina67Imagem3} alt="Friends" className={styles["page67__img-small"]} />
                        </div>
                    </div>
                    <div className={styles["page67__main-container"]}>
                        <div className={styles["page67__text-container4"]}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;My Phone
                            </p>
                            <p onClick={() => playAudio("pg67_audio4")} style={{ cursor: "pointer" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;My phone is new. It is a gift. It is useful. I am happy with it. 
                                I am always texting my friends. They are important to me.
                            </p>
                        </div>
                        <div className={styles["page67__image-container4"]}>
                            <img src={pagina67Imagem4} alt="Phone" className={styles["page67__img-small"]} />
                        </div>
                    </div>
                </main>
                <aside className={styles["page67__aside"]}>
                    <div className={styles["page67__aside-container"]}>
                        <div className={styles["page67__aside-notes1"]}>
                            <img className={styles["page67__aside-img-notes"]} src={pg67IconNotes} alt="Word Bank Icon" />
                            <p><strong>Listening Comprehension and Pronunciation</strong></p>
                        </div>
                        <div className={styles["page67__aside-notes2"]}>
                            <p>Now, take a moment to focus on the dialogues(s). Pay attention to the way the speakers express themselves, and try to practice mimicking their pronunciation.</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
    
};

export default pagina67;
