import React from 'react';
import styles from './pagina2.module.css';

// Importação de todos os áudios (32 no total)
import pg2Audio1 from '../assets/Audios/pg2_audio1.mp3';  // Contents 1 - A
import pg2Audio2 from '../assets/Audios/pg2_audio2.mp3';  // Topics
import pg2Audio3 from '../assets/Audios/pg2_audio3.mp3';
import pg2Audio4 from '../assets/Audios/pg2_audio4.mp3';
import pg2Audio5 from '../assets/Audios/pg2_audio5.mp3';
import pg2Audio6 from '../assets/Audios/pg2_audio6.mp3';
import pg2Audio7 from '../assets/Audios/pg2_audio7.mp3';
import pg2Audio8 from '../assets/Audios/pg2_audio8.mp3';
import pg2Audio9 from '../assets/Audios/pg2_audio9.mp3';
import pg2Audio10 from '../assets/Audios/pg2_audio10.mp3';
import pg2Audio11 from '../assets/Audios/pg2_audio11.mp3';
import pg2Audio12 from '../assets/Audios/pg2_audio12.mp3';
import pg2Audio13 from '../assets/Audios/pg2_audio13.mp3';
import pg2Audio14 from '../assets/Audios/pg2_audio14.mp3';
import pg2Audio15 from '../assets/Audios/pg2_audio15.mp3';
import pg2Audio16 from '../assets/Audios/pg2_audio16.mp3';
import pg2Audio17 from '../assets/Audios/pg2_audio17.mp3';
import pg2Audio18 from '../assets/Audios/pg2_audio18.mp3';
import pg2Audio19 from '../assets/Audios/pg2_audio19.mp3';
import pg2Audio20 from '../assets/Audios/pg2_audio20.mp3';
import pg2Audio21 from '../assets/Audios/pg2_audio21.mp3';
import pg2Audio22 from '../assets/Audios/pg2_audio22.mp3';
import pg2Audio23 from '../assets/Audios/pg2_audio23.mp3';
import pg2Audio24 from '../assets/Audios/pg2_audio24.mp3';
import pg2Audio25 from '../assets/Audios/pg2_audio25.mp3';
import pg2Audio26 from '../assets/Audios/pg2_audio26.mp3';
import pg2Audio27 from '../assets/Audios/pg2_audio27.mp3';
import pg2Audio28 from '../assets/Audios/pg2_audio28.mp3';
import pg2Audio29 from '../assets/Audios/pg2_audio29.mp3';
import pg2Audio30 from '../assets/Audios/pg2_audio30.mp3';
import pg2Audio31 from '../assets/Audios/pg2_audio31.mp3';
import pg2Audio32 from '../assets/Audios/pg2_audio32.mp3';

const Pagina2 = () => {
    const playAudio = (audioSrc) => {
        const audio = new Audio(audioSrc);
        audio.play();
    };

    return (
        <div className={styles.page}>
            <div className={styles.page__container}>
                <header className={styles.page__header} onClick={() => playAudio(pg2Audio1)}>
                    <h1 className={styles.page__header__title}>Contents 1 - A</h1>
                </header>
                <main className={styles.page__main}>
                    <div className={styles.page__section}>
                        <h3 className={styles.page__section__title} onClick={() => playAudio(pg2Audio2)}>Topics</h3>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio3)}>1. Greetings and Introductions</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio4)}>2. Personal Information</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio5)}>3. People and Places</p>
                    </div>
                    <div className={styles.page__section}>
                        <h3 className={styles.page__section__title} onClick={() => playAudio(pg2Audio6)}>Vocabulary</h3>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio7)}>1. Names</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio8)}>2. Titles</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio9)}>3. Numbers (0 - 10) Cardinal</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio10)}>4. Countries, Cities, Nationalities</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio11)}>5. Nationalities</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio12)}>6. The Alphabet</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio13)}>7. Jobs - Occupation</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio14)}>8. Age</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio15)}>9. Phone Numbers / Email / Address</p>
                    </div>
                    <div className={styles.page__section}>
                        <h3 className={styles.page__section__title} onClick={() => playAudio(pg2Audio16)}>Grammar</h3>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio17)}>1. Subject Pronouns</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio18)}>2. Verb To Be (Simple Present)</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio19)}>3. Affirmative / Negative</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio20)}>4. Possessive Adjectives</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio21)}>5. Indefinite Articles</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio22)}>6. Demonstrative Pronouns (Singular)</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio23)}>7. Word Order / Tables</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio24)}>8. Video Explanation</p>
                    </div>
                    <div className={styles.page__section}>
                        <h3 className={styles.page__section__title} onClick={() => playAudio(pg2Audio25)}>Learning Objectives</h3>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio26)}>1. Real - Life - Conversations</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio27)}>2. Listening Pronunciation Practice</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio28)}>3. Exercises</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio29)}>4. Sentence Structure Tables</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio30)}>5. Reading and Comprehension</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio31)}>6. Language Practice.</p>
                        <p className={styles.page__section__item} onClick={() => playAudio(pg2Audio32)}>7. Listening / Speaking / Writing / Reading</p>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina2;