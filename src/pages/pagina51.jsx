import React, { useRef } from 'react';

import styles from './pagina51.module.css';

import iconeE from '../assets/icons/eng_audio_icon.webp';
import iconeP from '../assets/icons/ptbr_audio_icon.webp';

import pagina51_imagem1 from '../assets/images/pagina51_imagem1.webp';
import pagina51_imagem2 from '../assets/images/pagina51_imagem2.webp';
import pagina51_imagem3 from '../assets/images/pagina51_imagem3.webp';
import pagina51_imagem4 from '../assets/images/pagina51_imagem4.webp';
import pagina51_imagem5 from '../assets/images/pagina51_imagem5.webp';
import pagina51_imagem6 from '../assets/images/pagina51_imagem6.webp';
import pagina51_imagem7 from '../assets/images/pagina51_imagem7.webp';

import pg50_audio1e from '../assets/audios/pg50_audio1e.mp3';
import pg50_audio1p from '../assets/audios/pg50_audio1p.mp3';
import pg50_audio2H from '../assets/audios/pg50_audio2H.mp3';
import pg51_audio1 from '../assets/audios/pg51_audio1.mp3';
import pg51_audio2 from '../assets/audios/pg51_audio2.mp3';
import pg51_audio3 from '../assets/audios/pg51_audio3.mp3';
import pg51_audio4 from '../assets/audios/pg51_audio4.mp3';
import pg51_audio5 from '../assets/audios/pg51_audio5.mp3';
import pg51_audio6 from '../assets/audios/pg51_audio6.mp3';
import pg51_audio7 from '../assets/audios/pg51_audio7.mp3';

const Pagina51 = () => {
    const audioMap = {
        pg50_audio1e,
        pg50_audio1p,
        pg50_audio2H,
        pg51_audio1,
        pg51_audio2,
        pg51_audio3,
        pg51_audio4,
        pg51_audio5,
        pg51_audio6,
        pg51_audio7,
    };

    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
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
            <div className={styles.pg51Container}>
                <header className={styles.pg51Header}>
                    <h1 className={styles.pg51HeaderH1}>
                        Grammar - Demonstrative Pronouns
                        <img
                            src={iconeE}
                            alt="English Audio"
                            className={styles.pg51Icon}
                            onClick={() => playAudio('pg50_audio1e')}
                        />
                        <img
                            src={iconeP}
                            alt="Portuguese Audio"
                            className={styles.pg51Icon}
                            onClick={() => playAudio('pg50_audio1p')}
                        />
                    </h1>
                    <div className={styles.pg51HeaderH2H3}>
                        <h2
                            className={styles.pg51HeaderH2}
                            onClick={() => playAudio('pg50_audio2H')}
                            style={{ cursor: 'pointer' }}
                        >
                            This = Este / Esta / Esse / Essa
                        </h2>
                    </div>
                </header>
                <main className={styles.pg51Main}>
                    <div className={styles.pg51Container1}>
                        <div>
                            <div className={styles.pg51Div1Container1}>
                                <img src={pagina51_imagem1} alt="Imagem 1" className={styles.pg51Img} />
                            </div>
                            <p
                                className={styles.pg51ParagrafoDiv}
                                onClick={() => playAudio('pg51_audio1')}
                                style={{ cursor: 'pointer' }}
                            >
                                <strong>Best Friend</strong><br />
                                This is my best friend, Alex.
                            </p>
                        </div>
                        <div>
                            <div className={styles.pg51Div2Container1}>
                                <img src={pagina51_imagem3} alt="Imagem 3" className={styles.pg51Img} />
                            </div>
                            <p
                                className={styles.pg51ParagrafoDiv}
                                onClick={() => playAudio('pg51_audio2')}
                                style={{ cursor: 'pointer' }}
                            >
                                <strong>Work Friend</strong><br />
                                This is my work friend, James. He is very helpful and kind.
                            </p>
                        </div>
                        <div>
                            <div className={styles.pg51Div3Container1}>
                                <img src={pagina51_imagem5} alt="Imagem 5" className={styles.pg51Img} />
                            </div>
                            <p
                                className={styles.pg51ParagrafoDiv}
                                onClick={() => playAudio('pg51_audio3')}
                                style={{ cursor: 'pointer' }}
                            >
                                <strong>Gym Friend</strong><br />
                                This is my gym friend, David. He motivates me to stay fit.
                            </p>
                        </div>
                        <div>
                            <div className={styles.pg51Div4Container1}>
                                <img src={pagina51_imagem7} alt="Imagem 4" className={styles.pg51Img} />
                            </div>
                            <p
                                className={styles.pg51ParagrafoDiv}
                                onClick={() => playAudio('pg51_audio4')}
                                style={{ cursor: 'pointer' }}
                            >
                                <strong>Online Friend</strong><br />
                                This is my online friend, Sam.
                            </p>
                        </div>
                    </div>
                    <div className={styles.pg51Container2}>
                        <div>
                            <div className={styles.pg51Div1Container2}>
                                <img src={pagina51_imagem2} alt="Imagem 5" className={styles.pg51Img} />
                            </div>
                            <p
                                className={styles.pg51ParagrafoDiv}
                                onClick={() => playAudio('pg51_audio5')}
                                style={{ cursor: 'pointer' }}
                            >
                                <strong>School Friend</strong><br />
                                This is my school friend, Emma. She is very good at math.
                            </p>
                        </div>
                        <div>
                            <div className={styles.pg51Div2Container2}>
                                <img src={pagina51_imagem4} alt="Imagem 6" className={styles.pg51Img} />
                            </div>
                            <p
                                className={styles.pg51ParagrafoDiv}
                                onClick={() => playAudio('pg51_audio6')}
                                style={{ cursor: 'pointer' }}
                            >
                                <strong>Neighbor Friend</strong><br />
                                This is my neighbor friend, Sarah. We often go jogging together.
                            </p>
                        </div>
                        <div>
                            <div className={styles.pg51Div3Container2}>
                                <img src={pagina51_imagem6} alt="Imagem 7" className={styles.pg51Img} />
                            </div>
                            <p
                                className={styles.pg51ParagrafoDiv}
                                onClick={() => playAudio('pg51_audio7')}
                                style={{ cursor: 'pointer' }}
                            >
                                <strong>College Friend</strong><br />
                                This is my college friend, Rachel.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina51;
