import React from 'react';
import styles from './pagina105.module.css';
import pagina105_imagem1 from '../assets/images/pagina105_imagem1.webp';
import eIcon from '../assets/icons/eIcon.png';

// Importando áudios
import pg105_audio1 from '../assets/audios/pg105_audio1.mp3';
import pg105_audio2 from '../assets/audios/pg105_audio2.mp3';
import pg105_audio3 from '../assets/audios/pg105_audio3.mp3';
import pg105_audio4 from '../assets/audios/pg105_audio4.mp3';
import pg105_audio5 from '../assets/audios/pg105_audio5.mp3';

const audioMap = {
    pg105_audio1,
    pg105_audio2,
    pg105_audio3,
    pg105_audio4,
    pg105_audio5
};

const playAudio = (audioKey) => {
    if (audioMap[audioKey]) {
        const audio = new Audio(audioMap[audioKey]);
        audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
    } else {
        console.warn(`Áudio não encontrado para: ${audioKey}`);
    }
};

const Pagina105 = () => {
    return (
        <div className={styles.pg105Container}>
            <main className={styles.pg105Main}>
                <div className={styles.pg105ContainerQuestoes}>
                    <div className={styles.pg105Questions}>
                        {[
                            ["Can you say that again, please?", "(Você pode dizer isso de novo, por favor?)", "pg105_audio1"],
                            ["Could you speak more slowly, please?", "(Você poderia falar mais devagar, por favor?)", "pg105_audio2"],
                            ["Sorry, I don’t understand.", "(Desculpe, não entendo.)", "pg105_audio3"],
                            ["I have a question.", "(Eu tenho uma pergunta / Eu tenho uma dúvida.)", "pg105_audio4"],
                            ["Please speak slowly.", "(Por favor fale devagar.)", "pg105_audio5"]
                        ].map((sentence, index) => (
                            <div key={index} className={styles.pg105Question}>
                                <p className={styles.pg105TextRed}>
                                    <em>{sentence[0]}</em>
                                    <img
                                        src={eIcon}
                                        alt="Audio Icon"
                                        className={styles.pg105HeaderIcon}
                                        onClick={() => playAudio(sentence[2])}
                                    />
                                </p>
                                <p className={styles.pg105TextBlack}><strong>{sentence[1]}</strong></p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.pg105ContainerImagem}>
                        <img className={styles.pg105imagem} src={pagina105_imagem1} alt="Learning" />
                    </div>
                </div>
            </main>

            <aside className={styles.pg105Aside}>
                <div className={styles.pg105Asidecontainer}>
                    <div className={styles.pg105AsideNotes1}>
                        <p><strong>Word Bank</strong></p>
                    </div>
                    <div className={styles.pg105AsideNotes2}>
                        <div className={styles.pg105AsideNotes3}>
                            {[
                                ["Nice to meet you", "(Prazer em conhecê-lo/la)"],
                                ["Nice meeting you too", "(Foi um prazer conhecê-lo/la também)"],
                                ["It’s a pleasure to meet you", "(É um prazer conhecê-lo/la)"],
                                ["Glad to meet you", "(Contente em conhecê-lo/la)"]
                            ].map((text, index) => (
                                <div key={index}>
                                    <p className={styles.pg105AsideNotes2Vermelho}>{text[0]}</p>
                                    <p className={styles.pg105AsideNotes2Preto}>{text[1]}</p>
                                </div>
                            ))}
                        </div>

                        <div>
                            {[
                                ["I’m happy to meet you", "(Estou feliz por conhecê-lo/la)"],
                                ["Pleased to meet you", "(Satisfação em conhecê-lo/la)"],
                                ["My pleasure", "(O prazer é meu.)"],
                                ["Very pleased", "(Muito prazer.)"]
                            ].map((text, index) => (
                                <div key={index + 4}>
                                    <p className={styles.pg105AsideNotes2Vermelho}>{text[0]}</p>
                                    <p className={styles.pg105AsideNotes2Preto}>{text[1]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Pagina105;
