import React, { useRef } from 'react';
import styles from './pagina48.module.css';
import Pagina49_Primeira_imagem from '../assets/Images/Pagina49_Primeira_imagem.jpg';
import Pagina49_Segunda_imagem from '../assets/Images/Pagina49_Segunda_imagem.jpg';
import audio1e from '../assets/audios/pg48_audio1e.mp3';
import audio2e from '../assets/audios/pg48_audio2e.mp3';
import audio3e from '../assets/audios/pg48_audio3e.mp3';
import audio1p from '../assets/audios/pg48_audio1p.mp3';
import audio2p from '../assets/audios/pg48_audio2p.mp3';
import audio3p from '../assets/audios/pg48_audio3p.mp3';

const Pagina48 = () => {
    const audioMap = {
        'pg48_audio1e': audio1e,
        'pg48_audio2e': audio2e,
        'pg48_audio3e': audio3e,
        'pg48_audio1p': audio1p,
        'pg48_audio2p': audio2p,
        'pg48_audio3p': audio3p,
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
            <div className={styles.pg48Container}>
                <header className={styles.pg48Header}>
                    <h1 className={styles.pg48HeaderH1}>Grammar</h1>
                    <div className={styles.pg48HeaderH2H3}>
                        <h2 className={styles.pg48HeaderH2}>Possessive Adjectives</h2>
                        <h3 className={styles.pg48HeaderH3}>Pronomes possessivos</h3>
                    </div>
                </header>
                <main className={styles.pg48Main}>
                    {/* Primeiro bloco de exemplo */}
                    <div className={styles.pg48Exemplo}>
                        <p className={styles.pg48TituloExemplo}><strong>Exemplo:</strong></p>
                        <div className={styles.pg48ContainerAsidetexto}>
                            <div className={styles.pg48AsideTexto1} onClick={() => playAudio('pg48_audio1e')} style={{ cursor: 'pointer' }}>
                                <p>John: I love this city. <strong>Its</strong> architecture is stunning.</p>
                            </div>
                        </div>
                        <div className={styles.pg48ExemploImg}>
                            <img
                                className={styles.pg48AsideImg1}
                                src={Pagina49_Primeira_imagem}
                                alt="Primeira imagem de exemplo"
                            />
                        </div>
                        <div className={styles.pg48Traducao}>
                            <p className={styles.pg48TituloTraducao}><strong>Tradução:</strong></p>
                            <p className={styles.pg48TraducaoTexto1} onClick={() => playAudio('pg48_audio1p')} style={{ cursor: 'pointer' }}>
                                Eu amo essa cidade. <strong>Sua</strong> arquitetura é impressionante.
                            </p>
                        </div>
                    </div>

                    {/* Segundo bloco de exemplo */}
                    <div className={styles.pg48Exemplo}>
                        <p className={styles.pg48TituloExemplo}><strong>Exemplo:</strong></p>
                        <div className={styles.pg48ContainerAsidetexto}>
                            <div className={styles.pg48AsideTexto2} onClick={() => playAudio('pg48_audio2e')} style={{ cursor: 'pointer' }}>
                                <p>Paulo: Are these <strong>our</strong> books?</p>
                            </div>
                            <div className={styles.pg48AsideTexto3} onClick={() => playAudio('pg48_audio3e')} style={{ cursor: 'pointer' }}>
                                <p>Maria: No, they aren’t. <strong>Our</strong> books are on the teacher’s desk.</p>
                            </div>
                        </div>
                        <div className={styles.pg48ExemploImg}>
                            <img
                                className={styles.pg48AsideImg2}
                                src={Pagina49_Segunda_imagem}
                                alt="Segunda imagem de exemplo"
                            />
                        </div>
                        <div className={styles.pg48Traducao}>
                            <p className={styles.pg48TituloTraducao}><strong>Tradução:</strong></p>
                            <p className={styles.pg48TraducaoTexto2} onClick={() => playAudio('pg48_audio2p')} style={{ cursor: 'pointer' }}>
                                Estes são <strong>nossos</strong> livros?
                            </p>
                            <p className={styles.pg48TraducaoTexto3} onClick={() => playAudio('pg48_audio3p')} style={{ cursor: 'pointer' }}>
                                Não, não são. <strong>Nossos</strong> livros estão na mesa do professor.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina48;