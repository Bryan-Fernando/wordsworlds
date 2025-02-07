import React from 'react';
import styles from './pagina65.module.css';
import pg65IconNotes from '../assets/Icons/Icon-Notes.png';
import pagina65Imagem1 from '../assets/Images/pagina65_imagem1.webp';
import pagina65Imagem2 from '../assets/Images/pagina65_imagem2.webp';
import pagina65Imagem3 from '../assets/Images/pagina65_imagem3.webp';
import global_readComPrp from '../assets/audios/global_readComPrp.mp3';
import global_readComPre from '../assets/audios/global_readComPre.mp3';
import eIcon from '../assets/icons/eIcon.png';
import pIcon from '../assets/icons/pIcon.png';
import pg65_audio1 from "../assets/audios/pg65_audio1.mp3";
import pg65_audio2 from "../assets/audios/pg65_audio2.mp3";
import pg65_audio3 from "../assets/audios/pg65_audio3.mp3";

const Pagina65 = () => {

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
            <div className={styles["page65__container"]}>
                <header className={styles["page65__header"]}>
                    <h1 className={styles["page65__title"]}>
                        Reading and Comprehension Language Practice
                        <img
                            src={eIcon}
                            alt="English audio"
                            className={styles["page65__audio-icon"]}
                            onClick={() => playAudio('global_readComPre')}
                        />
                        <img
                            src={pIcon}
                            alt="Portuguese audio"
                            className={styles["page65__audio-icon"]}
                            onClick={() => playAudio('global_readComPrp')}
                        />
                    </h1>
                </header>

                <main className={styles["page65__main"]}>
                    <div className={styles["page65__content"]}>
                        <div className={styles["page65__text-container--first"]}>
                            <p style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;Getting to Know Brazil
                            </p>
                            <p onClick={() => playAudio("pg65_audio1")} style={{ cursor: "pointer" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;Brazil is a beautiful country in South America. It <strong>is</strong> famous for its beautiful beaches,
                                culturally diverse, and delicious food. The official language of Brazil is Portuguese. People in Brazil <strong>are</strong> friendly
                                and welcoming.
                            </p>
                        </div>
                        <div className={styles["page65__image-container--first"]}>
                            <img src={pagina65Imagem1} alt="Brazil Image 1" className={styles["page65__image-small"]} />
                        </div>
                    </div>

                    <div className={styles["page65__content"]}>
                        <div className={styles["page65__text-container--second"]}>
                            <p style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;My Family
                            </p>
                            <p onClick={() => playAudio("pg65_audio2")} style={{ cursor: "pointer" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;My family is small. There <strong>are</strong> four people in my family: my father, my mother, my sister, and me.
                                My father is tall, and my mother <strong>is</strong> kind. My sister <strong>is</strong> funny, and I <strong>am</strong> happy.
                            </p>
                        </div>
                        <div className={styles["page65__image-container--second"]}>
                            <img src={pagina65Imagem2} alt="Brazil Image 2" className={styles["page65__image-small"]} />
                        </div>
                    </div>

                    <div className={styles["page65__content"]}>
                        <div className={styles["page65__text-container--third"]}>
                            <p style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;School
                            </p>
                            <p onClick={() => playAudio("pg65_audio3")} style={{ cursor: "pointer" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;My school is big and colorful. There <strong>are</strong> many students and teachers.
                                The classrooms <strong>are</strong> bright, and the playground <strong>is</strong> fun. I <strong>am</strong> excited to learn every day.
                            </p>
                        </div>
                        <div className={styles["page65__image-container--third"]}>
                            <img src={pagina65Imagem3} alt="School Image 3" className={styles["page65__image-small"]} />
                        </div>
                    </div>
                </main>

                <aside className={styles["page65__aside"]}>
                    <div className={styles["page65__aside-content"]}>
                        <div className={styles["page65__aside-note--first"]}>
                            <img className={styles["page65__aside-note-icon"]} src={pg65IconNotes} alt="Word Bank Icon" />
                            <p><strong>Listening Comprehension and Pronunciation</strong></p>
                        </div>
                        <div className={styles["page65__aside-note--second"]}>
                            <p>
                                Now, take a moment to focus on the dialogues(s). Pay attention to the way the speakers express themselves, and try to practice mimicking their pronunciation.
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );

};

export default Pagina65;
