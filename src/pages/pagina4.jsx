import React, { useRef } from 'react';
import styles from './pagina4.module.css';

// Importação dos áudios
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
        // Parar o áudio atual, se existir
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }

        // Criar um novo áudio e tocar
        const audio = new Audio(audioFile);
        currentAudioRef.current = audio;
        audio.play();
    };

    return (
        <div>
            <div className={styles.Pg4Container}>
                <header className={styles.Pg4Header}>
                    <h1>Grammar To Be (Be)</h1>
                    <h2 className={styles.Pg4HeaderH2}>Subject Pronouns</h2>
                </header>
                <main className={styles.Pg4Main}>
                    <table className={styles.p4Table}>
                        <thead>
                            <tr>
                                <th className={styles.p4Table}>I</th>
                                <th className={styles.p4Table}>He</th>
                                <th className={styles.p4Table}>She</th>
                                <th className={styles.p4Table}>It</th>
                                <th className={styles.p4Table}>We</th>
                                <th className={styles.p4Table}>You</th>
                                <th className={styles.p4Table}>You and...</th>
                                <th className={styles.p4Table}>They</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles.p4Table}>Eu</td>
                                <td className={styles.p4Table}>Ele</td>
                                <td className={styles.p4Table}>Ela</td>
                                <td className={styles.p4Table}>(Não traduzir)</td>
                                <td className={styles.p4Table}>Nós</td>
                                <td className={styles.p4Table}>Você</td>
                                <td className={styles.p4Table}>Você e... / Vocês</td>
                                <td className={styles.p4Table}>Eles/Elas</td>
                            </tr>
                            <tr>
                                <td className={`${styles.p4Table} ${styles.Pg4Highlight}`}>I am</td>
                                <td className={styles.p4Table}>-</td>
                                <td colSpan="2" className={`${styles.p4Table} ${styles.Pg4Highlight}`}>He is/ She is/ It is</td>
                                <td className={styles.p4Table}>-</td>
                                <td className={styles.p4Table}>-</td>
                                <td colSpan="2" className={`${styles.p4Table} ${styles.Pg4Highlight}`}>We are/ You are/ They are</td>
                            </tr>
                        </tbody>
                    </table>
                </main>
                <hr className={styles.Pg4MainHr} />
                <aside className={styles.Pg4Aside}>
                    <div className={styles.Pg4AsideAffirmative}>
                        <div>
                            <h3 className={styles.Pg4AsideDivH3}>AFFIRMATIVE</h3>
                            <p onClick={() => playAudio(imastu)} className={styles.clickable}>I am = I’m a student</p>
                            <hr />
                            <p onClick={() => playAudio(heisateacher)} className={styles.clickable}>He is = He’s a teacher</p>
                            <p onClick={() => playAudio(sheismarried)} className={styles.clickable}>She is = She’s married</p>
                            <p onClick={() => playAudio(itshot)} className={styles.clickable}>It is = It’s hot</p>
                            <hr />
                            <p onClick={() => playAudio(wearebrazil)} className={styles.clickable}>We are = We’re Brazilians</p>
                            <p onClick={() => playAudio(youaresingle)} className={styles.clickable}>You are = You’re single</p>
                            <p onClick={() => playAudio(theyarefromport)} className={styles.clickable}>They are = They’re from Portugal</p>
                        </div>
                    </div>
                    <div className={styles.Pg4AsideNegative}>
                        <div>
                            <h3 className={styles.Pg4AsideDivH3}>NEGATIVE</h3>
                            <p onClick={() => playAudio(imnotspanish)} className={styles.clickable}>I’m not Spanish</p>
                            <hr />
                            <p onClick={() => playAudio(heisnotalaw)} className={styles.clickable}>He’s not a lawyer</p>
                            <p onClick={() => playAudio(sheisnotsingle)} className={styles.clickable}>She’s not single</p>
                            <p onClick={() => playAudio(itsnotcold)} className={styles.clickable}>It’s not cold</p>
                            <hr />
                            <p onClick={() => playAudio(werenotportuguese)} className={styles.clickable}>We’re not Portuguese</p>
                            <p onClick={() => playAudio(yourenotitalian)} className={styles.clickable}>You’re not Italian</p>
                            <p onClick={() => playAudio(theyarenotbrazil)} className={styles.clickable}>They’re not Brazilians</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina4;
