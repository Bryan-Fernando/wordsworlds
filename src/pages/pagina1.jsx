import React from 'react';
import styles from './pagina1.module.css';
import pagina1_imagem1 from '../assets/Images/pagina1_imagem1.webp';
import pagina1_imagem2 from '../assets/Images/pagina1_imagem2.webp';
import pg1_audio1 from '../assets/Audios/pg1_audio1.mp3';  // Áudio para "Unit 1"
import pg1_audio2 from '../assets/Audios/pg1_audio2.mp3';  // Áudio para "People and Places First Edition"

const Pagina1 = () => {
    // Função para tocar áudio
    const playAudio = (audioSrc) => {
        const audio = new Audio(audioSrc);
        audio.play();
    };

    return (
        <div>
            <img className={styles["page1__image--first"]} src={pagina1_imagem1} alt="" />
            <img className={styles["page1__image--second"]} src={pagina1_imagem2} alt="" />

            {/* "Unit 1" - Clica e toca o primeiro áudio */}
            <div className={styles["page1__unit"]} onClick={() => playAudio(pg1_audio1)}>
                <p>Unit 1</p>
            </div>

            {/* "People and Places First Edition" - Clica e toca o segundo áudio */}
            <div className={styles["page1__title"]} onClick={() => playAudio(pg1_audio2)}>
                <p>People</p>
                <p>and</p>
                <p>Places</p>
                <p>First Edition</p>
            </div>
        </div>
    );
};

export default Pagina1;
