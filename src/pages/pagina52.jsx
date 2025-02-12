import React, { useRef } from 'react';

import styles from './pagina52.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina52_imagem1 from '../assets/images/pagina52_imagem1.webp';
import pagina52_imagem2 from '../assets/images/pagina52_imagem2.webp';
import pagina52_imagem3 from '../assets/images/pagina52_imagem3.webp';
import pagina52_imagem4 from '../assets/images/pagina52_imagem4.webp';
import pagina52_imagem5 from '../assets/images/pagina52_imagem5.webp';
import pagina52_imagem6 from '../assets/images/pagina52_imagem6.webp';

import audio1e from '../assets/audios/pg50_audio1e.mp3';
import audio1p from '../assets/audios/pg50_audio1p.mp3';
import audio2h from '../assets/audios/pg52_audio2H.mp3';
import audio1 from '../assets/audios/pg52_audio1.mp3';
import audio2 from '../assets/audios/pg52_audio2.mp3';
import audio3 from '../assets/audios/pg52_audio3.mp3';
import audio4 from '../assets/audios/pg52_audio4.mp3';
import audio5 from '../assets/audios/pg52_audio5.mp3';
import audio6 from '../assets/audios/pg52_audio6.mp3';


const Pagina52 = () => {
    const audioMap = {
        'pg52_audio1e': audio1e,
        'pg52_audio1p': audio1p,
        'pg52_audio2H': audio2h,
        'pg52_audio1': audio1,
        'pg52_audio2': audio2,
        'pg52_audio3': audio3,
        'pg52_audio4': audio4,
        'pg52_audio5': audio5,
        'pg52_audio6': audio6,
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
            <div className={styles.pg52Container}>
                <header className={styles.pg52Header}>
                    <h1 className={styles.pg52HeaderH1}>
                        Grammar - Demonstrative Pronouns
                        <img src={eng_audio_icon} alt="English Audio" className={styles.pg52Icon} onClick={() => playAudio('pg52_audio1e')} />
                        <img src={ptbr_audio_icon} alt="Portuguese Audio" className={styles.pg52Icon} onClick={() => playAudio('pg52_audio1p')} />
                    </h1>
                    <div className={styles.pg52HeaderH2H3}>
                        <h2 className={styles.pg52HeaderH2} onClick={() => playAudio('pg52_audio2H')}>
                            That = Aquele / Aquela
                        </h2>
                    </div>
                </header>
                <main className={styles.pg52Main}>
                    <div className={styles.pg52Container1}>
                        <div>
                            <div className={styles.pg52Div1Container1}>
                                <img src={pagina52_imagem1} alt="Imagem 1" className={styles.pg52Img} />
                            </div>
                            <p className={styles.pg52ParagrafoDiv} onClick={() => playAudio('pg52_audio1')}>
                                <span>That is your office</span>
                            </p>
                        </div>
                        <div>
                            <div className={styles.pg52Div2Container1}>
                                <img src={pagina52_imagem3} alt="Imagem 2" className={styles.pg52Img} />
                            </div>
                            <p className={styles.pg52ParagrafoDiv} onClick={() => playAudio('pg52_audio2')}>
                                <span>That is my brother John</span> in the green shirt and brown pants.
                            </p>
                        </div>
                        <div>
                            <div className={styles.pg52Div3Container1}>
                                <img src={pagina52_imagem5} alt="Imagem 3" className={styles.pg52Img} />
                            </div>
                            <p className={styles.pg52ParagrafoDiv} onClick={() => playAudio('pg52_audio3')}>
                                <span>That is my sister Joan</span> and my cousin Maria.
                            </p>
                        </div>
                    </div>
                    <div className={styles.pg52Container2}>
                        <div>
                            <div className={styles.pg52Div1Container2}>
                                <img src={pagina52_imagem2} alt="Imagem 4" className={styles.pg52Img} />
                            </div>
                            <p className={styles.pg52ParagrafoDiv} onClick={() => playAudio('pg52_audio4')}>
                                <span>That is Mr. Batista</span>, the new director.
                            </p>
                        </div>
                        <div>
                            <div className={styles.pg52Div2Container2}>
                                <img src={pagina52_imagem4} alt="Imagem 5" className={styles.pg52Img} />
                            </div>
                            <p className={styles.pg52ParagrafoDiv} onClick={() => playAudio('pg52_audio5')}>
                                <span>That is my cousin Gary</span>.
                            </p>
                        </div>
                        <div>
                            <div className={styles.pg52Div3Container2}>
                                <img src={pagina52_imagem6} alt="Imagem 6" className={styles.pg52Img} />
                            </div>
                            <p className={styles.pg52ParagrafoDiv} onClick={() => playAudio('pg52_audio6')}>
                                <span>That is my sister Julia</span> <br />in the yellow blouse and blue skirt.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina52;
