import React, { useState } from 'react';

import styles from './pagina112.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina112_imagem1 from '../assets/images/pagina112_imagem1.webp';
import pagina112_imagem2 from '../assets/images/pagina112_imagem2.webp';
import pagina112_imagem3 from '../assets/images/pagina112_imagem3.webp';
import pagina112_imagem4 from '../assets/images/pagina112_imagem4.webp';
import pagina112_imagem5 from '../assets/images/pagina112_imagem5.webp';
import pagina112_imagem6 from '../assets/images/pagina112_imagem6.webp';
import pagina112_imagem7 from '../assets/images/pagina112_imagem7.webp';
import pagina112_imagem8 from '../assets/images/pagina112_imagem8.webp';
import pagina112_imagem9 from '../assets/images/pagina112_imagem9.webp';
import pagina112_imagem10 from '../assets/images/pagina112_imagem10.webp';
import pagina112_imagem11 from '../assets/images/pagina112_imagem11.webp';
import pagina112_imagem12 from '../assets/images/pagina112_imagem12.webp';
import pagina112_imagem13 from '../assets/images/pagina112_imagem13.webp';
import pagina112_imagem14 from '../assets/images/pagina112_imagem14.webp';

import global_vocabularye from '../assets/audios/global_vocabularye.mp3';
import global_vocabularyp from '../assets/audios/global_vocabularyp.mp3';
import pg111_audio1 from '../assets/audios/pg111_audio1.mp3';
import pg112_audio1 from '../assets/audios/pg112_audio1.mp3';
import pg112_audio2 from '../assets/audios/pg112_audio2.mp3';
import pg112_audio3 from '../assets/audios/pg112_audio3.mp3';
import pg112_audio4 from '../assets/audios/pg112_audio4.mp3';
import pg112_audio5 from '../assets/audios/pg112_audio5.mp3';
import pg112_audio6 from '../assets/audios/pg112_audio6.mp3';
import pg112_audio7 from '../assets/audios/pg112_audio7.mp3';
import pg112_audio8 from '../assets/audios/pg112_audio8.mp3';
import pg112_audio9 from '../assets/audios/pg112_audio9.mp3';
import pg112_audio10 from '../assets/audios/pg112_audio10.mp3';
import pg112_audio11 from '../assets/audios/pg112_audio11.mp3';
import pg112_audio12 from '../assets/audios/pg112_audio12.mp3';
import pg112_audio13 from '../assets/audios/pg112_audio13.mp3';
import pg112_audio14 from '../assets/audios/pg112_audio14.mp3';

const Pagina112 = () => {

    const playAudio = (audioSrc) => {
        const audio = new Audio(audioSrc);
        audio.play();
    };


    return (
        <div>
            <div className={styles.pg112Container}>
                <header className={styles.pg112Header}>
                    <h1 className={styles.pg112HeaderH1}>
                        Vocabulary
                        <div className={styles.pg112HeaderIcons}>
                            <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                className={styles.pg112HeaderIcon}
                                onClick={() => playAudio(global_vocabularye)}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles.pg112HeaderIcon}
                                onClick={() => playAudio(global_vocabularyp)}
                            />
                        </div>
                    </h1>

                    <div>
                        <h2
                            className={styles.pg112HeaderH2}
                            onClick={() => playAudio(pg111_audio1)}
                            style={{ cursor: 'pointer' }}
                        >
                            Clothing and Accessories
                        </h2>
                        <p>Roupas e acessórios</p>
                    </div>
                </header>
                <main className={styles.pg112Main}>
                    <div className={styles.pg112Imagens}>
                        <div>
                            <img className={styles.pg112imagem} src={pagina112_imagem1} alt="" />
                            <p
                                className={styles.pg112ParagrafoVermelho}
                                onClick={() => playAudio(pg112_audio1)}
                                style={{ cursor: 'pointer' }}
                            >
                                scarf
                            </p>
                            <p className={styles.pg112ParagrafoPreto}>cachecol</p>
                        </div>
                        <div>
                            <img className={styles.pg112imagem} src={pagina112_imagem2} alt="" />
                            <p
                                className={styles.pg112ParagrafoVermelho}
                                onClick={() => playAudio(pg112_audio2)}
                                style={{ cursor: 'pointer' }}
                            >
                                sunglasses
                            </p>
                            <p className={styles.pg112ParagrafoPreto}>óculos de sol</p>
                        </div>
                        <div>
                            <img className={styles.pg112imagem} src={pagina112_imagem3} alt="" />
                            <p
                                className={styles.pg112ParagrafoVermelho}
                                onClick={() => playAudio(pg112_audio3)}
                                style={{ cursor: 'pointer' }}
                            >
                                glasses
                            </p>
                            <p className={styles.pg112ParagrafoPreto}>óculos de grau</p>
                        </div>
                        <div>
                            <img className={styles.pg112imagem} src={pagina112_imagem4} alt="" />
                            <p
                                className={styles.pg112ParagrafoVermelho}
                                onClick={() => playAudio(pg112_audio4)}
                                style={{ cursor: 'pointer' }}
                            >
                                rings
                            </p>
                            <p className={styles.pg112ParagrafoPreto}>anéis</p>
                        </div>
                    </div>
                    <div className={styles.pg112Imagens}>
                        <div>
                            <img className={styles.pg112imagem} src={pagina112_imagem5} alt="" />
                            <p
                                className={styles.pg112ParagrafoVermelho}
                                onClick={() => playAudio(pg112_audio5)}
                                style={{ cursor: 'pointer' }}
                            >
                                underwear
                            </p>
                            <p className={styles.pg112ParagrafoPreto}>cueca</p>
                        </div>
                        <div>
                            <img className={styles.pg112imagem} src={pagina112_imagem6} alt="" />
                            <p
                                className={styles.pg112ParagrafoVermelho}
                                onClick={() => playAudio(pg112_audio6)}
                                style={{ cursor: 'pointer' }}
                            >
                                pantyhose
                            </p>
                            <p className={styles.pg112ParagrafoPreto}>meia-calça</p>
                        </div>
                        <div>
                            <img className={styles.pg112imagem} src={pagina112_imagem7} alt="" />
                            <p
                                className={styles.pg112ParagrafoVermelho}
                                onClick={() => playAudio(pg112_audio7)}
                                style={{ cursor: 'pointer' }}
                            >
                                nightdress
                            </p>
                            <p className={styles.pg112ParagrafoPreto}>camisola</p>
                        </div>
                        <div>
                            <img className={styles.pg112imagem} src={pagina112_imagem8} alt="" />
                            <p
                                className={styles.pg112ParagrafoVermelho}
                                onClick={() => playAudio(pg112_audio8)}
                                style={{ cursor: 'pointer' }}
                            >
                                legging
                            </p>
                            <p className={styles.pg112ParagrafoPreto}>calça legging</p>
                        </div>
                    </div>
                    <div className={styles.pg112Imagens}>
                        <div>
                            <img className={styles.pg112imagem} src={pagina112_imagem9} alt="" />
                            <p
                                className={styles.pg112ParagrafoVermelho}
                                onClick={() => playAudio(pg112_audio9)}
                                style={{ cursor: 'pointer' }}
                            >
                                high heels
                            </p>
                            <p className={styles.pg112ParagrafoPreto}>sapato de salto alto</p>
                        </div>
                        <div>
                            <img className={styles.pg112imagem} src={pagina112_imagem10} alt="" />
                            <p
                                className={styles.pg112ParagrafoVermelho}
                                onClick={() => playAudio(pg112_audio10)}
                                style={{ cursor: 'pointer' }}
                            >
                                swimsuit
                            </p>
                            <p className={styles.pg112ParagrafoPreto}>Maiô</p>
                        </div>
                        <div>
                            <img className={styles.pg112imagem} src={pagina112_imagem11} alt="" />
                            <p
                                className={styles.pg112ParagrafoVermelho}
                                onClick={() => playAudio(pg112_audio11)}
                                style={{ cursor: 'pointer' }}
                            >
                                pajamas
                            </p>
                            <p className={styles.pg112ParagrafoPreto}>pijamas</p>
                        </div>

                        <div>
                            <img className={styles.pg112imagem} src={pagina112_imagem12} alt="" />
                            <p
                                className={styles.pg112ParagrafoVermelho}
                                onClick={() => playAudio(pg112_audio12)}
                                style={{ cursor: 'pointer' }}
                            >
                                gloves
                            </p>
                            <p className={styles.pg112ParagrafoPreto}>luvas</p>
                        </div>
                    </div>
                    <div className={styles.pg112Imagens}>
                        <div>
                            <img className={styles.pg112imagem} src={pagina112_imagem13} alt="" />
                            <p
                                className={styles.pg112ParagrafoVermelho}
                                onClick={() => playAudio(pg112_audio13)}
                                style={{ cursor: 'pointer' }}
                            >
                                bikini
                            </p>
                            <p className={styles.pg112ParagrafoPreto}>biquíne</p>
                        </div>
                        <div>
                            <img className={styles.pg112imagem} src={pagina112_imagem14} alt="" />
                            <p
                                className={styles.pg112ParagrafoVermelho}
                                onClick={() => playAudio(pg112_audio14)}
                                style={{ cursor: 'pointer' }}
                            >
                                wrist watch
                            </p>
                            <p className={styles.pg112ParagrafoPreto}>relógio de pulso</p>
                        </div>
                        <div>
                            <img className={styles.pg112imagem} src={pagina112_imagem1} alt="" />
                            <p
                                className={styles.pg112ParagrafoVermelho}
                                onClick={() => playAudio(pg112_audio15)}
                                style={{ cursor: 'pointer' }}
                            >
                                flip-flops
                            </p>
                            <p className={styles.pg112ParagrafoPreto}>chinelo</p>
                        </div>
                        <div>
                            <img className={styles.pg112imagem} src={pagina112_imagem1} alt="" />
                            <p
                                className={styles.pg112ParagrafoVermelho}
                                onClick={() => playAudio(pg112_audio16)}
                                style={{ cursor: 'pointer' }}
                            >
                                sweatshirt
                            </p>
                            <p className={styles.pg112ParagrafoPreto}>moletom</p>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};
export default Pagina112;
