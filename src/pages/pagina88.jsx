import React, { useState } from 'react';
import styles from './pagina88.module.css';
import pagina88_imagem1 from '../assets/images/pagina88_imagem1.webp';
import pagina88_imagem2 from '../assets/images/pagina88_imagem2.webp';
import pagina88_imagem3 from '../assets/images/pagina88_imagem3.webp';
import pagina88_imagem4 from '../assets/images/pagina88_imagem4.webp';
import pagina88_imagem5 from '../assets/images/pagina88_imagem5.webp';
import pagina88_imagem6 from '../assets/images/pagina88_imagem6.webp';
import pagina88_imagem7 from '../assets/images/pagina88_imagem7.webp';
import pagina88_imagem8 from '../assets/images/pagina88_imagem8.webp';
import pagina88_imagem9 from '../assets/images/pagina88_imagem9.webp';
import pagina88_imagem10 from '../assets/images/pagina88_imagem10.webp';

import global_grammar from '../assets/audios/global_grammar.mp3';
import pg88_audio1 from '../assets/audios/pg88_audio1.mp3';
import pg88_audio2 from '../assets/audios/pg88_audio2.mp3';
import pg88_audio3 from '../assets/audios/pg88_audio3.mp3';
import pg88_audio4 from '../assets/audios/pg88_audio4.mp3';
import pg88_audio5 from '../assets/audios/pg88_audio5.mp3';
import pg88_audio6 from '../assets/audios/pg88_audio6.mp3';
import pg88_audio7 from '../assets/audios/pg88_audio7.mp3';
import pg88_audio8 from '../assets/audios/pg88_audio8.mp3';
import pg88_audio9 from '../assets/audios/pg88_audio9.mp3';
import pg88_audio10 from '../assets/audios/pg88_audio10.mp3';


const Pagina88 = () => {

    const audioMap = {
        global_grammar,
        pg88_audio1,
        pg88_audio2,
        pg88_audio3,
        pg88_audio4,
        pg88_audio5,
        pg88_audio6,
        pg88_audio7,
        pg88_audio8,
        pg88_audio9,
        pg88_audio10
    };

    const playAudio = (audioKey) => {
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };


    return (
        <div className={styles["page88__container"]}>
            <header className={styles["page88__header"]}>
                <h1
                    className={styles["page88__title"]}
                    onClick={() => playAudio("global_grammar")}
                    style={{ cursor: "pointer" }}
                >
                    Grammar
                </h1>

                <div>
                    <h2 className={styles["page88__subtitle"]}>Indefinite articles ‘‘A’’ and ‘‘AN’’ = um ou uma</h2>
                    <p className={styles["page88__description"]}>Artigos indefinidos "a" e "an"</p>
                </div>
            </header>
            <main className={styles["page88__main"]}>
                <div className={styles["page88__article-block"]}>
                    <p className={styles["page88__article-text"]}>
                        Articles a and an <br />
                        a (antes de sons de consoantes) → <strong>a bag</strong> <br />
                        an (antes de sons de vogais) → <strong>an eraser</strong>
                    </p>
                </div>
                <div className={styles["page88__images-container"]}>
                    <div className={styles["page88__images-row"]}>
                        {[
                            { img: pagina88_imagem1, textRed: "a book", textBlack: "um livro", audio: "pg88_audio1" },
                            { img: pagina88_imagem2, textRed: "a cell phone", textBlack: "um telefone celular", audio: "pg88_audio2" },
                            { img: pagina88_imagem3, textRed: "a cup of coffee", textBlack: "uma xícara de café", audio: "pg88_audio3" },
                            { img: pagina88_imagem4, textRed: "a university", textBlack: "uma universidade", audio: "pg88_audio4" },
                            { img: pagina88_imagem5, textRed: "a laptop", textBlack: "um laptop", audio: "pg88_audio5" }
                        ].map((item, index) => (
                            <div key={index} className={styles["page88__image-item"]}>
                                <img className={styles["page88__image"]} src={item.img} alt="" />
                                <p
                                    className={styles["page88__text--red"]}
                                    onClick={() => playAudio(item.audio)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {item.textRed}
                                </p>
                                <p className={styles["page88__text--black"]}>{item.textBlack}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles["page88__images-row"]}>
                        {[
                            { img: pagina88_imagem6, textRed: "an apple", textBlack: "uma maçã", audio: "pg88_audio6" },
                            { img: pagina88_imagem7, textRed: "an eagle", textBlack: "uma águia", audio: "pg88_audio7" },
                            { img: pagina88_imagem8, textRed: "an umbrella", textBlack: "um guarda-chuva", audio: "pg88_audio8" },
                            { img: pagina88_imagem9, textRed: "an elephant", textBlack: "um elefante", audio: "pg88_audio9" },
                            { img: pagina88_imagem10, textRed: "an oven", textBlack: "um forno", audio: "pg88_audio10" }
                        ].map((item, index) => (
                            <div key={index} className={styles["page88__image-item"]}>
                                <img className={styles["page88__image"]} src={item.img} alt="" />
                                <p
                                    className={styles["page88__text--red"]}
                                    onClick={() => playAudio(item.audio)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {item.textRed}
                                </p>
                                <p className={styles["page88__text--black"]}>{item.textBlack}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Pagina88;
