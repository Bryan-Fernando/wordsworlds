import React, { useRef } from 'react';
import styles from './pagina4.module.css';

import eIcon from '../assets/icons/eIcon.png';
import pIcon from '../assets/icons/pIcon.png';

import pg4Audio1e from '../assets/audios/pg4_audio1e.mp3';
import pg4Audio1p from '../assets/audios/pg4_audio1p.mp3';
import pg4Audio2e from '../assets/audios/pg4_audio2e.mp3';
import pg4Audio2p from '../assets/audios/pg4_audio2p.mp3';

import imastu from '../assets/audios/imastu.mp3';
import heisateacher from '../assets/audios/heisateacher.mp3';
import sheismarried from '../assets/audios/sheismarried.mp3';
import itshot from '../assets/audios/itshot.mp3';
import wearebrazil from '../assets/audios/wearebrazil.mp3';
import youaresingle from '../assets/audios/youaresingle.mp3';
import theyarefromport from '../assets/audios/theyarefromport.mp3';
import imnotspanish from '../assets/audios/imnotspanish.mp3';
import heisnotalaw from '../assets/audios/heisnotalaw.mp3';
import sheisnotsingle from '../assets/audios/sheisnotsingle.mp3';
import itsnotcold from '../assets/audios/itsnotcold.mp3';
import werenotportuguese from '../assets/audios/werenotportuguese.mp3';
import yourenotitalian from '../assets/audios/yourenotitalian.mp3';
import theyarenotbrazil from '../assets/audios/theyarenotbrazil.mp3';

const Pagina4 = () => {
    const currentAudioRef = useRef(null);

    const playAudio = (audioFile) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }

        const audio = new Audio(audioFile);
        currentAudioRef.current = audio;
        audio.play();
    };

    return (
        <div className={styles.page}>
            <div className={styles.page__container}>
                <header className={styles.page__header}>
                    <h1 className={styles.page__header__title}>
                        Grammar To Be (Be)
                        <img
                            src={eIcon}
                            alt="English Audio"
                            className={styles.page__icon}
                            onClick={(e) => {
                                e.stopPropagation();
                                playAudio(pg4Audio1e);
                            }}
                        />
                        <img
                            src={pIcon}
                            alt="Portuguese Audio"
                            className={styles.page__icon}
                            onClick={(e) => {
                                e.stopPropagation();
                                playAudio(pg4Audio1p);
                            }}
                        />
                    </h1>
                    <h2 className={styles.page__header__subtitle}>
                        Subject Pronouns
                        <img
                            src={eIcon}
                            alt="English Audio"
                            className={styles.page__icon}
                            onClick={(e) => {
                                e.stopPropagation();
                                playAudio(pg4Audio2e);
                            }}
                        />
                        <img
                            src={pIcon}
                            alt="Portuguese Audio"
                            className={styles.page__icon}
                            onClick={(e) => {
                                e.stopPropagation();
                                playAudio(pg4Audio2p);
                            }}
                        />
                    </h2>
                </header>
                <main className={styles.page__main}>
                    <table className={styles.page__table}>
                        <thead>
                            <tr>
                                <th className={styles.page__table__header}>I</th>
                                <th className={styles.page__table__header}>He</th>
                                <th className={styles.page__table__header}>She</th>
                                <th className={styles.page__table__header}>It</th>
                                <th className={styles.page__table__header}>We</th>
                                <th className={styles.page__table__header}>You</th>
                                <th className={styles.page__table__header}>You and...</th>
                                <th className={styles.page__table__header}>They</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles.page__table__cell}>Eu</td>
                                <td className={styles.page__table__cell}>Ele</td>
                                <td className={styles.page__table__cell}>Ela</td>
                                <td className={styles.page__table__cell}>(Não traduzir)</td>
                                <td className={styles.page__table__cell}>Nós</td>
                                <td className={styles.page__table__cell}>Você</td>
                                <td className={styles.page__table__cell}>Você e... / Vocês</td>
                                <td className={styles.page__table__cell}>Eles/Elas</td>
                            </tr>
                            <tr>
                                <td className={`${styles.page__table__cell} ${styles.page__table__highlight}`}>I am</td>
                                <td colSpan="3" className={`${styles.page__table__cell} ${styles.page__table__highlight}`}>He is/ She is/ It is</td>
                                <td colSpan="4" className={`${styles.page__table__cell} ${styles.page__table__highlight}`}>We are/ You are/ They are</td>
                            </tr>
                        </tbody>
                    </table>
                </main>
                <hr className={styles.page__divider} />
                <aside className={styles.page__aside}>
                    <div className={styles.page__aside__affirmative}>
                        <div>
                            <h3 className={styles.page__aside__title}>AFFIRMATIVE</h3>
                            <p onClick={() => playAudio(imastu)} className={styles.page__clickable}>I am = I’m a student</p>
                            <hr />
                            <p onClick={() => playAudio(heisateacher)} className={styles.page__clickable}>He is = He’s a teacher</p>
                            <p onClick={() => playAudio(sheismarried)} className={styles.page__clickable}>She is = She’s married</p>
                            <p onClick={() => playAudio(itshot)} className={styles.page__clickable}>It is = It’s hot</p>
                            <hr />
                            <p onClick={() => playAudio(wearebrazil)} className={styles.page__clickable}>We are = We’re Brazilians</p>
                            <p onClick={() => playAudio(youaresingle)} className={styles.page__clickable}>You are = You’re single</p>
                            <p onClick={() => playAudio(theyarefromport)} className={styles.page__clickable}>They are = They’re from Portugal</p>
                        </div>
                    </div>
                    <div className={styles.page__aside__negative}>
                        <div>
                            <h3 className={styles.page__aside__title}>NEGATIVE</h3>
                            <p onClick={() => playAudio(imnotspanish)} className={styles.page__clickable}>I’m not Spanish</p>
                            <hr />
                            <p onClick={() => playAudio(heisnotalaw)} className={styles.page__clickable}>He’s not a lawyer</p>
                            <p onClick={() => playAudio(sheisnotsingle)} className={styles.page__clickable}>She’s not single</p>
                            <p onClick={() => playAudio(itsnotcold)} className={styles.page__clickable}>It’s not cold</p>
                            <hr />
                            <p onClick={() => playAudio(werenotportuguese)} className={styles.page__clickable}>We’re not Portuguese</p>
                            <p onClick={() => playAudio(yourenotitalian)} className={styles.page__clickable}>You’re not Italian</p>
                            <p onClick={() => playAudio(theyarenotbrazil)} className={styles.page__clickable}>They’re not Brazilians</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina4;