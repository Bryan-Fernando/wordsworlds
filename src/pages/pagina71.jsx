import React, { useState } from 'react';

import styles from './pagina71.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina71_imagem1 from '../assets/images/pagina71_imagem1.webp';
import pagina71_imagem2 from '../assets/images/pagina71_imagem2.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import global_reading_compe from '../assets/audios/global_reading_compe.mp3';
import global_reading_compp from '../assets/audios/global_reading_compp.mp3';
import pg71_audio1 from "../assets/audios/pg71_audio1.mp3";
import pg71_audio2 from "../assets/audios/pg71_audio2.mp3";
import pg71_audio3e from "../assets/audios/pg71_audio3e.mp3";
import pg71_audio3p from "../assets/audios/pg71_audio3p.mp3";
import pg71_audio4e from "../assets/audios/pg71_audio4e.mp3";
import pg71_audio4p from "../assets/audios/pg71_audio4p.mp3";
import pg71_audio5 from "../assets/audios/pg71_audio5.mp3";
import pg71_audio6 from "../assets/audios/pg71_audio6.mp3";
import pg71_audio7 from "../assets/audios/pg71_audio7.mp3";
import pg71_audio8 from "../assets/audios/pg71_audio8.mp3";
import pg71_audio9 from "../assets/audios/pg71_audio9.mp3";
import pg71_audio10 from "../assets/audios/pg71_audio10.mp3";
import pg71_audio11e from "../assets/audios/pg71_audio11e.mp3";
import pg71_audio11p from "../assets/audios/pg71_audio11p.mp3";
import pg71_audio12 from "../assets/audios/pg71_audio12.mp3";
import pg71_audio13 from "../assets/audios/pg71_audio13.mp3";
import pg71_audio14 from "../assets/audios/pg71_audio14.mp3";
import pg71_audio15 from "../assets/audios/pg71_audio15.mp3";
import pg71_audio16 from "../assets/audios/pg71_audio16.mp3";
import pg71_audio17 from "../assets/audios/pg71_audio17.mp3";
import pg71_audio18 from "../assets/audios/pg71_audio18.mp3";


const Pagina71 = () => {
    const correctAnswers = [
        "She is Karen Brandon.",
        "She is from Portugal.",
        "Lisbon is her home city.",
        "She is 19.",
        "Her email address is karen@mail.com",
        "Her phone number is 999 12 3456789.",
        "He is Leo Santander.",
        "He’s Brazilian.",
        "He’s from Paraty.",
        "He’s married.",
        "He’s 27.",
        "His email is leo@mail.com.",
        "His cell phone number is 99 12 1234-1265."
    ];

    const audioMap = {
        global_learning_le_e,
        global_learning_le_p,
        global_reading_compe,
        global_reading_compp,
        pg71_audio1,
        pg71_audio2,
        pg71_audio3e,
        pg71_audio3p,
        pg71_audio4e,
        pg71_audio4p,
        pg71_audio5,
        pg71_audio6,
        pg71_audio7,
        pg71_audio8,
        pg71_audio9,
        pg71_audio10,
        pg71_audio11e,
        pg71_audio11p,
        pg71_audio12,
        pg71_audio13,
        pg71_audio14,
        pg71_audio15,
        pg71_audio16,
        pg71_audio17,
        pg71_audio18,
    };


    const [userAnswers, setUserAnswers] = useState(Array(13).fill(''));
    const [results, setResults] = useState(Array(13).fill(null));

    const handleInputChange = (value, index) => {
        const newAnswers = [...userAnswers];
        newAnswers[index] = value;
        setUserAnswers(newAnswers);
    };

    const handleCheckClick = () => {
        const newResults = userAnswers.map((answer, index) => {
            return answer.trim().toLowerCase() === correctAnswers[index].trim().toLowerCase()
                ? correct_icon
                : wrong_icon;
        });
        setResults(newResults);
    };

    const playAudio = (audioKey) => {
        const audioSrc = audioMap[audioKey];
        if (audioSrc) {
            const audio = new Audio(audioSrc);
            audio.play();
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };


    return (
        <div className={styles.pg71Container}>
            <header className={styles.pg71Header}>
                <h1 className={styles.pg71HeaderH1}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles.pg71AudioIcon}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles.pg71AudioIcon}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>

                <h2 className={styles.pg71HeaderH2}>
                    Reading Comprehension
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles.pg71AudioIcon}
                        onClick={() => playAudio("global_reading_compe")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles.pg71AudioIcon}
                        onClick={() => playAudio("global_reading_compp")}
                    />
                </h2>
            </header>

            <main className={styles.pg71Main}>
                <div className={styles.pg71Section}>
                    <div className={styles.pg71PersonContainer}>
                        <div className={styles.pg71PersonInfo}>
                            <img src={pagina71_imagem1} alt="Karen Brandon" className={styles.pg71Image} />
                            <div>
                                <p
                                    className={`${styles.pg71PersonTextEnglish} ${styles.pg71ClickableText}`}
                                    onClick={() => playAudio("pg71_audio1")}
                                >
                                    I’m Karen Brandon. I’m from Portugal. Lisbon is my home. It’s an amazing city. I am an English student. I’m 19. My email is karen@mail.com and my phone number is 999 12 3456789.
                                </p>
                                <p className={styles.pg71PersonTextPortuguese}>Eu sou Karen Brandon. Sou de Portugal. Lisboa é minha casa. É uma cidade incrível. Sou estudante de inglês. Tenho 19 anos. Meu e-mail é karen@mail.com e meu número de telefone é 999 12 3456789.</p>
                            </div>
                        </div>
                        <div className={styles.pg71PersonInfo}>
                            <img src={pagina71_imagem2} alt="Leo Santander" className={styles.pg71Image} />
                            <div>
                                <p
                                    className={`${styles.pg71PersonTextEnglish} ${styles.pg71ClickableText}`}
                                    onClick={() => playAudio("pg71_audio2")}
                                >
                                    Hi there, I’m Leo Santander. I’m Brazilian. I’m from Paraty, but I’m now in Rio. I’m an entrepreneur. I have a small company. I’m married. I’m 27 years old. My email is leo@mail.com and my cell phone number is 55 12 1234-1265.
                                </p>
                                <p className={styles.pg71PersonTextPortuguese}>Olá, eu sou Leo Santander. Sou brasileiro. Sou de Paraty, mas estou agora no Rio. Sou empreendedor. Tenho uma pequena empresa. Sou casado. Tenho 27 anos. Meu e-mail é leo@mail.com e meu número de celular é 55 12 1234-1265.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.pg71AnotherHeader}>
                        <h1 className={styles.pg71HeaderH1}>
                            Learning Language Exercises
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles.pg71AudioIcon}
                                onClick={() => playAudio("global_learning_le_e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles.pg71AudioIcon}
                                onClick={() => playAudio("global_learning_le_p")}
                            />
                        </h1>
                        <div>
                            <h2 className={styles.pg71HeaderH2}>
                                Read the Statements and give complete answers according to the texts. <br />
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles.pg71AudioIcon}
                                    onClick={() => playAudio("pg71_audio3e")}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles.pg71AudioIcon}
                                    onClick={() => playAudio("pg71_audio3p")}
                                />
                            </h2>
                        </div>
                    </div>

                    <p className={styles.pg71QuestionText}>
                        The questions about Karen Brandon.
                        <img
                            src={eng_audio_icon}
                            alt="English audio"
                            className={styles.pg71AudioIcon}
                            onClick={() => playAudio("pg71_audio4e")}
                        />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese audio"
                            className={styles.pg71AudioIcon}
                            onClick={() => playAudio("pg71_audio4p")}
                        />
                    </p>

                    <div className={styles.pg71QuestionList}>
                        {["Who is she?", "Where is she from?", "What is her home city?", "How old is she?", "What is her email address?", "What is her phone number?"].map((question, index) => (
                            <div key={index} className={styles.pg71QuestionItem}>
                                <p
                                    className={`${styles.pg71Question} ${styles.pg71ClickableText}`}
                                    onClick={() => playAudio(`pg71_audio${index + 5}`)}
                                >
                                    {String.fromCharCode(97 + index)}. {question}
                                </p>
                                <input
                                    type="text"
                                    className={styles.pg71Input}
                                    value={userAnswers[index]}
                                    onChange={(e) => handleInputChange(e.target.value, index)}
                                />
                                {results[index] && (
                                    <div className={styles.pg71CheckContainer}>
                                        <img src={results[index]} alt="result" className={styles.pg71CheckmarkImage} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <p className={styles.pg71QuestionText}>
                        The questions about Leo Santander.
                        <img
                            src={eng_audio_icon}
                            alt="English audio"
                            className={styles.pg71AudioIcon}
                            onClick={() => playAudio("pg71_audio11e")}
                        />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese audio"
                            className={styles.pg71AudioIcon}
                            onClick={() => playAudio("pg71_audio11p")}
                        />
                    </p>

                    <div className={styles.pg71QuestionList}>
                        {["Who is he?", "What is his nationality?", "Where is he from?", "Is he married or single?", "How old is he?", "What is his email address?", "What is his cell phone number?"].map((question, index) => (
                            <div key={index + 6} className={styles.pg71QuestionItem}>
                                <p
                                    className={`${styles.pg71Question} ${styles.pg71ClickableText}`}
                                    onClick={() => playAudio(`pg71_audio${index + 12}`)}
                                >
                                    {String.fromCharCode(97 + index + 6)}. {question}
                                </p>
                                <input
                                    type="text"
                                    className={styles.pg71Input}
                                    value={userAnswers[index + 6]}
                                    onChange={(e) => handleInputChange(e.target.value, index + 6)}
                                />
                                {results[index + 6] && (
                                    <div className={styles.pg71CheckContainer}>
                                        <img src={results[index + 6]} alt="result" className={styles.pg71CheckmarkImage} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <button className={styles.pg71CheckButton} onClick={handleCheckClick}>Check</button>
                </div>
            </main>


            <aside className={styles.pg71WordBank}>
                <div className={styles.pg71WordBankContainer}>
                    <div className={styles.pg71WordBankHeader}>
                        <p>Work Bank</p>
                    </div>
                    <div className={styles.pg71WordBankContent}>
                        <div className={styles.pg71WordRow}>
                            <div className={styles.pg71WordColumn}>
                                <p><strong>Hello/Hi</strong> <span>Olá/Oi</span></p>
                                <p><strong>Good morning</strong> <span>Bom dia</span></p>
                            </div>
                            <div className={styles.pg71WordColumn}>
                                <p><strong>Good afternoon</strong> <span>Boa tarde</span></p>
                                <p><strong>Good evening</strong> <span>Boa noite</span></p>
                            </div>
                            <div className={styles.pg71WordColumn}>
                                <p><strong>Bye</strong> <span>Tchau</span></p>
                                <p><strong>Goodbye</strong> <span>Adeus</span></p>
                                <p><strong>See you (see ya)</strong> <span>Até logo</span></p>
                            </div>
                            <div className={styles.pg71WordColumn}>
                                <p><strong>See you later</strong> <span>Até mais tarde</span></p>
                                <p><strong>Good night</strong> <span>Boa noite</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Pagina71;
