import React from 'react';
import styles from './pagina110.module.css';
import pagina110_imagem1 from '../assets/Images/pagina110_imagem1.webp';
import pagina110_imagem2 from '../assets/Images/pagina110_imagem2.webp';
import global_vocabularye from '../assets/audios/global_vocabularye.mp3';
import global_vocabularyp from '../assets/audios/global_vocabularyp.mp3';

import pg110_audio1 from '../assets/audios/pg110_audio1.mp3';
import pg110_audio2 from '../assets/audios/pg110_audio2.mp3';
import pg110_audio3 from '../assets/audios/pg110_audio3.mp3';
import pg110_audio4 from '../assets/audios/pg110_audio4.mp3';
import pg110_audio5 from '../assets/audios/pg110_audio5.mp3';
import pg110_audio6 from '../assets/audios/pg110_audio6.mp3';
import pg110_audio7 from '../assets/audios/pg110_audio7.mp3';
import pg110_audio8 from '../assets/audios/pg110_audio8.mp3';
import pg110_audio9 from '../assets/audios/pg110_audio9.mp3';
import pg110_audio10 from '../assets/audios/pg110_audio10.mp3';
import pg110_audio11 from '../assets/audios/pg110_audio11.mp3';
import pg110_audio12 from '../assets/audios/pg110_audio12.mp3';
import pg110_audio13 from '../assets/audios/pg110_audio13.mp3';
import pg110_audio14 from '../assets/audios/pg110_audio14.mp3';
import pg110_audio15 from '../assets/audios/pg110_audio15.mp3';
import pg110_audio16 from '../assets/audios/pg110_audio16.mp3';

import eIcon from '../assets/icons/eIcon.png';
import pIcon from '../assets/icons/pIcon.png';

const labelsWomen = [
    { text: 'bracelet\n(pulseira)', top: '20%', left: '9%', audio: "pg110_audio2" },
    { text: 'glasses\n(óculos)', top: '22%', left: '38%', audio: "pg110_audio3" },
    { text: 'earrings\n(brincos)', top: '26%', left: '40%', audio: "pg110_audio4" },
    { text: 't-shirt\n(camiseta)', top: '31%', left: '9%', audio: "pg110_audio5" },
    { text: 'jacket\n(jaqueta)', top: '32%', left: '38%', audio: "pg110_audio6" },
    { text: 'handbag\n(bolsa de mão)', top: '37%', left: '9%', audio: "pg110_audio7" },
    { text: 'shorts\n(Bermuda/shorts)', top: '39%', left: '35%', audio: "pg110_audio8" },
    { text: 'boots\n(botas)', top: '57%', left: '31%', audio: "pg110_audio9" }
];


const labelsMen = [
    { text: 'blazer\n(blazer)', top: '27%', left: '86%', backgroundColor: '#B9DCEF', audio: "pg110_audio10" },
    { text: 'shirt\n(camisa)', top: '28%', left: '65%', backgroundColor: '#B9DCEF', audio: "pg110_audio11" },
    { text: 'tie\n(gravata)', top: '32.3%', left: '65%', backgroundColor: '#B9DCEF', audio: "pg110_audio12" },
    { text: 'belt\n(cinto)', top: '37.5%', left: '64.3%', backgroundColor: '#B9DCEF', audio: "pg110_audio13" },
    { text: 'wrist watch\n(relógio de pulso)', top: '39%', left: '88%', backgroundColor: '#B9DCEF', audio: "pg110_audio14" },
    { text: 'sport pants\n(calças esportivas)', top: '45%', left: '86%', backgroundColor: '#B9DCEF', audio: "pg110_audio15" },
    { text: 'shoes\n(sapatos)', top: '61%', left: '64%', backgroundColor: '#B9DCEF', audio: "pg110_audio16" }
];


const Label = ({ text, top, left, backgroundColor, audio }) => (
    <div className={styles.pg110Label} style={{ top, left, backgroundColor }}>
        <p 
            dangerouslySetInnerHTML={{ __html: text }} 
            onClick={() => playAudio(audio)} 
            style={{ cursor: "pointer" }}
        ></p>
        <div className={styles.arrow}></div>
    </div>
);

const audioMap = {
    global_vocabularye, global_vocabularyp,
    pg110_audio1, pg110_audio2, pg110_audio3, pg110_audio4,
    pg110_audio5, pg110_audio6, pg110_audio7, pg110_audio8,
    pg110_audio9, pg110_audio10, pg110_audio11, pg110_audio12,
    pg110_audio13, pg110_audio14, pg110_audio15, pg110_audio16,
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


const Pagina110 = () => {

    return (
        <div>
            <div className={styles.pg110Container}>
                <header className={styles.pg110Header}>
                    <h1 className={styles.pg110HeaderH1}>
                        Vocabulary
                        <img
                            src={eIcon}
                            alt="English audio"
                            className={styles.pg110AudioIcon}
                            onClick={() => playAudio("global_vocabularye")}
                        />
                        <img
                            src={pIcon}
                            alt="Portuguese audio"
                            className={styles.pg110AudioIcon}
                            onClick={() => playAudio("global_vocabularyp")}
                        />
                    </h1>
                    <div>
                        <h2 onClick={() => playAudio("pg110_audio1")} style={{ cursor: "pointer" }}>Clothing</h2>
                        <p>Roupas</p>
                    </div>
                </header>

                <main className={styles.pg110Main}>
                    <div className={styles.pg110ContainerImagemA}>
                        <img className={styles.pg110Imagem} src={pagina110_imagem1} alt="Women's clothing" />
                        {labelsWomen.map((label, index) => (
                            <Label key={index} {...label} />
                        ))}
                        <div className={styles.pg110CaixaLegenda}><p>Women’s clothing (Roupas femininas)</p></div>
                    </div>
                    <div className={styles.pg110ContainerImagemB}>
                        <img className={styles.pg110Imagem} src={pagina110_imagem2} alt="Men's clothing" />
                        {labelsMen.map((label, index) => (
                            <Label key={index} {...label} />
                        ))}
                        <div className={styles.pg110CaixaLegenda}><p>Men’s clothing (Roupas masculinas)</p></div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina110;
