import React, { useState } from 'react';

import styles from './pagina2.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pg2Audio1e from '../assets/audios/pg2_audio1e.mp3';
import pg2Audio2e from '../assets/audios/pg2_audio2e.mp3';
import pg2Audio3e from '../assets/audios/pg2_audio3e.mp3';
import pg2Audio4e from '../assets/audios/pg2_audio4e.mp3';
import pg2Audio5e from '../assets/audios/pg2_audio5e.mp3';
import pg2Audio6e from '../assets/audios/pg2_audio6e.mp3';
import pg2Audio7e from '../assets/audios/pg2_audio7e.mp3';
import pg2Audio8e from '../assets/audios/pg2_audio8e.mp3';
import pg2Audio9e from '../assets/audios/pg2_audio9e.mp3';
import pg2Audio10e from '../assets/audios/pg2_audio10e.mp3';
import pg2Audio11e from '../assets/audios/pg2_audio11e.mp3';
import pg2Audio12e from '../assets/audios/pg2_audio12e.mp3';
import pg2Audio13e from '../assets/audios/pg2_audio13e.mp3';
import pg2Audio14e from '../assets/audios/pg2_audio14e.mp3';
import pg2Audio15e from '../assets/audios/pg2_audio15e.mp3';
import pg2Audio16e from '../assets/audios/pg2_audio16e.mp3';
import pg2Audio17e from '../assets/audios/pg2_audio17e.mp3';
import pg2Audio18e from '../assets/audios/pg2_audio18e.mp3';
import pg2Audio19e from '../assets/audios/pg2_audio19e.mp3';
import pg2Audio20e from '../assets/audios/pg2_audio20e.mp3';
import pg2Audio21e from '../assets/audios/pg2_audio21e.mp3';
import pg2Audio22e from '../assets/audios/pg2_audio22e.mp3';
import pg2Audio23e from '../assets/audios/pg2_audio23e.mp3';
import pg2Audio24e from '../assets/audios/pg2_audio24e.mp3';
import pg2Audio25e from '../assets/audios/pg2_audio25e.mp3';
import pg2Audio26e from '../assets/audios/pg2_audio26e.mp3';
import pg2Audio27e from '../assets/audios/pg2_audio27e.mp3';
import pg2Audio28e from '../assets/audios/pg2_audio28e.mp3';
import pg2Audio29e from '../assets/audios/pg2_audio29e.mp3';
import pg2Audio30e from '../assets/audios/pg2_audio30e.mp3';
import pg2Audio31e from '../assets/audios/pg2_audio31e.mp3';
import pg2Audio32e from '../assets/audios/pg2_audio32e.mp3';
import pg2Audio1p from '../assets/audios/pg2_audio1p.mp3';
import pg2Audio2p from '../assets/audios/pg2_audio2p.mp3';
import pg2Audio3p from '../assets/audios/pg2_audio3p.mp3';
import pg2Audio4p from '../assets/audios/pg2_audio4p.mp3';
import pg2Audio5p from '../assets/audios/pg2_audio5p.mp3';
import pg2Audio6p from '../assets/audios/pg2_audio6p.mp3';
import pg2Audio7p from '../assets/audios/pg2_audio7p.mp3';
import pg2Audio8p from '../assets/audios/pg2_audio8p.mp3';
import pg2Audio9p from '../assets/audios/pg2_audio9p.mp3';
import pg2Audio10p from '../assets/audios/pg2_audio10p.mp3';
import pg2Audio11p from '../assets/audios/pg2_audio11p.mp3';
import pg2Audio12p from '../assets/audios/pg2_audio12p.mp3';
import pg2Audio13p from '../assets/audios/pg2_audio13p.mp3';
import pg2Audio14p from '../assets/audios/pg2_audio14p.mp3';
import pg2Audio15p from '../assets/audios/pg2_audio15p.mp3';
import pg2Audio16p from '../assets/audios/pg2_audio16p.mp3';
import pg2Audio17p from '../assets/audios/pg2_audio17p.mp3';
import pg2Audio18p from '../assets/audios/pg2_audio18p.mp3';
import pg2Audio19p from '../assets/audios/pg2_audio19p.mp3';
import pg2Audio20p from '../assets/audios/pg2_audio20p.mp3';
import pg2Audio21p from '../assets/audios/pg2_audio21p.mp3';
import pg2Audio22p from '../assets/audios/pg2_audio22p.mp3';
import pg2Audio23p from '../assets/audios/pg2_audio23p.mp3';
import pg2Audio24p from '../assets/audios/pg2_audio24p.mp3';
import pg2Audio25p from '../assets/audios/pg2_audio25p.mp3';
import pg2Audio26p from '../assets/audios/pg2_audio26p.mp3';
import pg2Audio27p from '../assets/audios/pg2_audio27p.mp3';
import pg2Audio28p from '../assets/audios/pg2_audio28p.mp3';
import pg2Audio29p from '../assets/audios/pg2_audio29p.mp3';
import pg2Audio30p from '../assets/audios/pg2_audio30p.mp3';
import pg2Audio31p from '../assets/audios/pg2_audio31p.mp3';
import pg2Audio32p from '../assets/audios/pg2_audio32p.mp3';

const Pagina2 = () => {
    const [currentAudio, setCurrentAudio] = useState(null);

    const playAudio = (audioSrc) => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        const newAudio = new Audio(audioSrc);
        newAudio.play();
        setCurrentAudio(newAudio);
    };

    return (
        <div className={styles["page2"]}>
            <div className={styles["page2__container"]}>
                <header className={styles["page2__header"]}>
                    <h1 className={styles["page2__header--title"]}>Contents 1 - A <img
                        src={eng_audio_icon}
                        alt="English Audio"
                        className={styles["page2__icon"]}
                        onClick={() => playAudio(pg2Audio1e)}
                    />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese Audio"
                            className={styles["page2__icon"]}
                            onClick={() => playAudio(pg2Audio1p)}
                        /></h1>

                </header>

                <main className={styles["page2__main"]}>
                    <div className={styles["page2__section"]}>
                        <h3 className={styles["page2__section--title"]}>Topics                         <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page2__icon"]}
                            onClick={() => playAudio(pg2Audio2e)}
                        />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio2p)}
                            /></h3>


                        <p className={styles["page2__section--item"]}>1. Greetings and Introductions <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page2__icon"]}
                            onClick={() => playAudio(pg2Audio3e)}
                        />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio3p)}
                            /></p>

                        <p className={styles["page2__section--item"]}>2. Personal Information <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page2__icon"]}
                            onClick={() => playAudio(pg2Audio4e)}
                        />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio4p)}
                            /></p>
                        <p className={styles["page2__section--item"]}>3. People and Places <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page2__icon"]}
                            onClick={() => playAudio(pg2Audio5e)}
                        />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio5p)}
                            /></p>
                    </div>

                    <div className={styles["page2__section"]}>
                        <h3 className={styles["page2__section--title"]}>Vocabulary <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page2__icon"]}
                            onClick={() => playAudio(pg2Audio6e)}
                        />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio6p)}
                            /></h3>

                        <div className={styles["page2__section--item"]}>
                            <p>1. Names <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio7e)}
                            />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page2__icon"]}
                                    onClick={() => playAudio(pg2Audio7p)}
                                /></p>
                        </div>

                        <div className={styles["page2__section--item"]}>
                            <p>2. Titles <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio8e)}
                            />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page2__icon"]}
                                    onClick={() => playAudio(pg2Audio8p)}
                                /></p>
                        </div>

                        <div className={styles["page2__section--item"]}>
                            <p>3. Numbers (0 - 10) Cardinal <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio9e)}
                            />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page2__icon"]}
                                    onClick={() => playAudio(pg2Audio9p)}
                                /></p>
                        </div>

                        <div className={styles["page2__section--item"]}>
                            <p>4. Countries, Cities, Nationalities <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio10e)}
                            />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page2__icon"]}
                                    onClick={() => playAudio(pg2Audio10p)}
                                /></p>
                        </div>

                        <div className={styles["page2__section--item"]}>
                            <p>5. Nationalities <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio11e)}
                            />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page2__icon"]}
                                    onClick={() => playAudio(pg2Audio11p)}
                                /></p>
                        </div>

                        <div className={styles["page2__section--item"]}>
                            <p>6. The Alphabet <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio12e)}
                            />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page2__icon"]}
                                    onClick={() => playAudio(pg2Audio12p)}
                                /></p>
                        </div>

                        <div className={styles["page2__section--item"]}>
                            <p>7. Jobs - Occupation <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio13e)}
                            />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page2__icon"]}
                                    onClick={() => playAudio(pg2Audio13p)}
                                /></p>
                        </div>

                        <div className={styles["page2__section--item"]}>
                            <p>8. Age <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio14e)}
                            />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page2__icon"]}
                                    onClick={() => playAudio(pg2Audio14p)}
                                /></p>
                        </div>

                        <div className={styles["page2__section--item"]}>
                            <p>9. Phone Numbers / Email / Address <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio15e)}
                            />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page2__icon"]}
                                    onClick={() => playAudio(pg2Audio15p)}
                                /></p>
                        </div>
                    </div>

                    <div className={styles["page2__section"]}>
                        <h3 className={styles["page2__section--title"]}>Grammar <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page2__icon"]}
                            onClick={() => playAudio(pg2Audio16e)}
                        />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio16p)}
                            /></h3>
                        <p className={styles["page2__section--item"]}>
                            1. Subject Pronouns <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio17e)}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio17p)}
                            />
                        </p>

                        <p className={styles["page2__section--item"]}>
                            2. Verb To Be (Simple Present) <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio18e)}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio18p)}
                            />
                        </p>

                        <p className={styles["page2__section--item"]}>
                            3. Affirmative / Negative <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio19e)}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio19p)}
                            />
                        </p>

                        <p className={styles["page2__section--item"]}>
                            4. Possessive Adjectives <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio20e)}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio20p)}
                            />
                        </p>

                        <p className={styles["page2__section--item"]}>
                            5. Indefinite Articles <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio21e)}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio21p)}
                            />
                        </p>

                        <p className={styles["page2__section--item"]}>
                            6. Demonstrative Pronouns (Singular) <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio22e)}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio22p)}
                            />
                        </p>

                        <p className={styles["page2__section--item"]}>
                            7. Word Order / Tables <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio23e)}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio23p)}
                            />
                        </p>

                        <p className={styles["page2__section--item"]}>
                            8. Video Explanation <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio24e)}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio24p)}
                            />
                        </p>
                    </div>

                    <div className={styles["page2__section"]}>
                        <h3 className={styles["page2__section--title"]}>Learning Objectives <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page2__icon"]}
                            onClick={() => playAudio(pg2Audio25e)}
                        />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese Audio"
                            className={styles["page2__icon"]}
                            onClick={() => playAudio(pg2Audio25p)}
                        /></h3>

                        <p className={styles["page2__section--item"]}>
                            1. Real - Life - Conversations <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio26e)}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio26p)}
                            />
                        </p>

                        <p className={styles["page2__section--item"]}>
                            2. Listening Pronunciation Practice <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio27e)}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio27p)}
                            />
                        </p>

                        <p className={styles["page2__section--item"]}>
                            3. Exercises <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio28e)}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio28p)}
                            />
                        </p>

                        <p className={styles["page2__section--item"]}>
                            4. Sentence Structure Tables <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio29e)}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio29p)}
                            />
                        </p>

                        <p className={styles["page2__section--item"]}>
                            5. Reading and Comprehension <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio30e)}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio30p)}
                            />
                        </p>

                        <p className={styles["page2__section--item"]}>
                            6. Language Practice. <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio31e)}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio31p)}
                            />
                        </p>

                        <p className={styles["page2__section--item"]}>
                            7. Listening / Speaking / Writing / Reading <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio32e)}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles["page2__icon"]}
                                onClick={() => playAudio(pg2Audio32p)}
                            />
                        </p>
                    </div>

                </main>
            </div>
        </div>
    );
};

export default Pagina2;