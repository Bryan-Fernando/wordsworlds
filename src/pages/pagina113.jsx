import React, { useState } from 'react';

import styles from './pagina113.module.css';

import pagina113_imagem1 from '../assets/images/pagina113_imagem1.webp';
import pagina113_imagem2 from '../assets/images/pagina113_imagem2.webp';
import pagina113_imagem3 from '../assets/images/pagina113_imagem3.webp';
import pagina113_imagem4 from '../assets/images/pagina113_imagem4.webp';
import pagina113_imagem5 from '../assets/images/pagina113_imagem5.webp';
import pagina113_imagem6 from '../assets/images/pagina113_imagem6.webp';
import pagina113_imagem7 from '../assets/images/pagina113_imagem7.webp';
import pagina113_imagem8 from '../assets/images/pagina113_imagem8.webp';
import pagina113_imagem9 from '../assets/images/pagina113_imagem9.webp';

import global_grammar from '../assets/audios/global_grammar.mp3';
import pg113_audio1 from '../assets/audios/pg113_audio1.mp3';
import pg113_audio2 from '../assets/audios/pg113_audio2.mp3';
import pg113_audio3 from '../assets/audios/pg113_audio3.mp3';
import pg113_audio4 from '../assets/audios/pg113_audio4.mp3';


const Pagina113 = () => {

    const playAudio = (audioSrc) => {
        const audio = new Audio(audioSrc);
        audio.play();
    };


    return (
        <div>
            <div className={styles.pg113Container}>
                <header className={styles.pg113Header}>
                    <h1 className={styles.pg113HeaderH1} onClick={() => playAudio(global_grammar)} style={{ cursor: 'pointer' }} >Grammar</h1>
                    <div>
                        <h2 className={styles.pg113HeaderH2}
                            onClick={() => playAudio(pg113_audio1)}
                            style={{ cursor: 'pointer' }} >Clothing Materials
                        </h2>
                        <p>Materias de Roupas
                        </p>
                    </div>
                </header>
                <main className={styles.pg113Main}>
                    <div className={styles.pg113ContainerImagens1}>
                        <div className={styles.Flex}>
                            <div className={styles.pg113FlexImagens}>
                                <div><img className={styles.pg113ImagemLarga} src={pagina113_imagem1} alt="" /></div>
                                <div><img className={styles.pg113ImagemNormal} src={pagina113_imagem2} alt="" /></div>
                            </div>
                            <div className={styles.pg113DivTextos}>
                                <p
                                    className={styles.pg113ParagrafoVermelho}
                                    onClick={() => playAudio(pg113_audio2)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    wool
                                </p>
                                <p>lã </p>
                            </div>
                        </div>
                        <div className={styles.Flex}>
                            <div className={styles.pg113FlexImagens}>
                                <div><img className={styles.pg113ImagemLarga} src={pagina113_imagem3} alt="" /></div>
                                <div><img className={styles.pg113ImagemNormal} src={pagina113_imagem4} alt="" /></div>
                            </div>
                            <div className={styles.pg113DivTextos}>
                                <p
                                    className={styles.pg113ParagrafoVermelho}
                                    onClick={() => playAudio(pg113_audio3)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    cotton
                                </p>
                                <p>algodão </p>
                            </div>
                        </div>
                        <div className={styles.Flex}>
                            <div className={styles.pg113FlexImagens}>
                                <div><img className={styles.pg113ImagemLarga} src={pagina113_imagem5} alt="" /></div>
                                <div><img className={styles.pg113ImagemNormal} src={pagina113_imagem6} alt="" /></div>
                            </div>
                            <div className={styles.pg113DivTextos}>
                                <p
                                    className={styles.pg113ParagrafoVermelho}
                                    onClick={() => playAudio(pg113_audio4)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    leather
                                </p>
                                <p>couro </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.pg113ContainerImagens2}>
                        <div className={styles.FlexB}>
                            <div className={styles.pg113FlexImagens}>
                                <div><img className={styles.pg113ImagemGrande} src={pagina113_imagem7} alt="" /></div>
                            </div>
                            <div className={styles.pg113DivTextos}>
                                <p
                                    className={styles.pg113ParagrafoVermelho}
                                    onClick={() => playAudio(pg113_audio2)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    wool
                                </p>
                                <p>lã </p>
                            </div>
                        </div>
                        <div className={styles.FlexB}>
                            <div className={styles.pg113FlexImagens}>
                                <div><img className={styles.pg113ImagemGrande} src={pagina113_imagem8} alt="" /></div>
                            </div>
                            <div className={styles.pg113DivTextos}>
                                <p
                                    className={styles.pg113ParagrafoVermelho}
                                    onClick={() => playAudio(pg113_audio3)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    cotton
                                </p>
                                <p>algodão </p>
                            </div>
                        </div>
                        <div className={styles.FlexB}>
                            <div className={styles.pg113FlexImagens}>
                                <div><img className={styles.pg113ImagemGrande} src={pagina113_imagem9} alt="" /></div>
                            </div>
                            <div className={styles.pg113DivTextos}>
                                <p
                                    className={styles.pg113ParagrafoVermelho}
                                    onClick={() => playAudio(pg113_audio4)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    leather
                                </p>
                                <p>couro </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};
export default Pagina113;
