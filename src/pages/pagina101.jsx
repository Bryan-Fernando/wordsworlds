import React, { useState } from 'react';
import styles from './Pagina101.module.css';
import Pagina101_imagem1 from '../assets/images/Pagina101_imagem1.webp';
import Pagina101_imagem2 from '../assets/images/Pagina101_imagem2.webp';
import vSquare from '../assets/icons/vSquare.png';
import xSquare from '../assets/icons/xSquare.png';
import eIcon from '../assets/icons/eIcon.png';
import pIcon from '../assets/icons/pIcon.png';
import volumeReduzidoIcon from '../assets/icons/volumeReduzido.png';

// Áudios dos subtítulos
import pg101_audio1e from '../assets/audios/pg101_audio1e.mp3';
import pg101_audio1p from '../assets/audios/pg101_audio1p.mp3';
import pg101_audio12e from '../assets/audios/pg101_audio12e.mp3';
import pg101_audio12p from '../assets/audios/pg101_audio12p.mp3';

// Áudios das questões afirmativas
import pg101_audio2 from '../assets/audios/pg101_audio2.mp3';
import pg101_audio3 from '../assets/audios/pg101_audio3.mp3';
import pg101_audio4 from '../assets/audios/pg101_audio4.mp3';
import pg101_audio5 from '../assets/audios/pg101_audio5.mp3';
import pg101_audio6 from '../assets/audios/pg101_audio6.mp3';
import pg101_audio7 from '../assets/audios/pg101_audio7.mp3';
import pg101_audio8 from '../assets/audios/pg101_audio8.mp3';
import pg101_audio9 from '../assets/audios/pg101_audio9.mp3';
import pg101_audio10 from '../assets/audios/pg101_audio10.mp3';
import pg101_audio11 from '../assets/audios/pg101_audio11.mp3';

// Áudios das questões negativas
import pg101_audio13 from '../assets/audios/pg101_audio13.mp3';
import pg101_audio14 from '../assets/audios/pg101_audio14.mp3';
import pg101_audio15 from '../assets/audios/pg101_audio15.mp3';
import pg101_audio16 from '../assets/audios/pg101_audio16.mp3';
import pg101_audio17 from '../assets/audios/pg101_audio17.mp3';
import pg101_audio18 from '../assets/audios/pg101_audio18.mp3';
import pg101_audio19 from '../assets/audios/pg101_audio19.mp3';
import pg101_audio20 from '../assets/audios/pg101_audio20.mp3';

// Mapeamento de Áudio
const audioMap = {
    pg101_audio1e,
    pg101_audio1p,
    pg101_audio2,
    pg101_audio3,
    pg101_audio4,
    pg101_audio5,
    pg101_audio6,
    pg101_audio7,
    pg101_audio8,
    pg101_audio9,
    pg101_audio10,
    pg101_audio11,
    pg101_audio12e,
    pg101_audio12p,
    pg101_audio13,
    pg101_audio14,
    pg101_audio15,
    pg101_audio16,
    pg101_audio17,
    pg101_audio18,
    pg101_audio19,
    pg101_audio20
};

const Pagina101 = () => {
    const [inputValues, setInputValues] = useState(Array(20).fill(''));
    const [results, setResults] = useState(Array(20).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});

    const correctAnswers = [
        'am', 'is', 'are', 'are', 'is', 'is', 'is', 'are', 'are', 'is',
        'am not', 'is not', 'are not', 'are not', 'is not', 'is not', 'is not', 'is not', 'are not', 'is not'
    ];

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => {
            const trimmedValue = value.trim().toLowerCase();
            const correctValue = correctAnswers[index]?.toLowerCase() || "";

            return trimmedValue !== "" && trimmedValue === correctValue;
        });
    
        setResults(newResults);
    };
    
    

    const handleInputChange = (value, index) => {
        setInputValues(prevValues => {
            const newValues = [...prevValues]; // Copia o array corretamente
            newValues[index] = value;
            return newValues;
        });
    };
    

    const playAudio = (audioKey) => {
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            audio.playbackRate = isSpeedReduced[audioKey] ? 0.6 : 1;
            audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };

    const toggleSpeedReduction = (audioKey) => {
        setIsSpeedReduced((prevState) => ({
            ...prevState,
            [audioKey]: !prevState[audioKey]
        }));
    };
    return (
        <div className={styles.pg101Container}>
            <main className={styles.pg101Main}>
                {/* Tabela Afirmativa */}
                <div className={styles.pg101tabelaAfirmativaContainer}>
                    <div className={styles.pg101tableHeaderAfirmativa}>AFIRMATIVA</div>
                    <table className={styles.pg101styledTableAfirmativa}>
                        <thead>
                            <tr className={styles.pg101celulatable}>
                                <th>Sujeito</th>
                                <th>Verbo Auxiliar</th>
                                <th>Adverb</th>
                                <th>Verbo(s)</th>
                                <th>Objeto Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                {/* Primeira parte - Afirmativa */}
                <div className={styles.pg101ContainerQuestoes}>
                    <div className={styles.pg101Questions1}>
                        <p className={styles.pg101ATituloQuestion}>
                            C) Fill in the blanks with the correct form of the verb be in the Simple Present Tense (Affirmative Form):
                            <img
                                src={eIcon}
                                alt="English audio"
                                className={styles.pg101HeaderIcon}
                                onClick={() => playAudio("pg101_audio1e")}
                            />
                            <img
                                src={pIcon}
                                alt="Portuguese audio"
                                className={styles.pg101HeaderIcon}
                                onClick={() => playAudio("pg101_audio1p")}
                            />
                        </p>
                        {[
                            "I ____ a student.",
                            "She ____ a doctor.",
                            "They ____ my friends.",
                            "We ____ from Italy.",
                            "The book ____ on the table.",
                            "John ____ at home right now.",
                            "Alice ____ a doctor.",
                            "Tom and Emily ____ in the park.",
                            "We ____ students.",
                            "The party ____ tonight."
                        ].map((question, index) => {
                            const parts = question.split('____');
                            const audioKey = `pg101_audio${index + 2}`;

                            return (
                                <div key={index} className={styles.pg101Question}>
                                    <span><em><strong>{index + 1}.</strong> {parts[0]}</em></span>
                                    <div className={styles.pg101InputContainer}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles.pg101InputBox}
                                        />

                                    </div>
                                    <span><em>{parts[1]}</em></span>
                                    <div className={styles.pg101IconsContainer}>
                                        {results[index] !== null && (
                                            <img
                                                src={results[index] ? vSquare : xSquare}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles.pg101CheckmarkImage}
                                            />
                                        )}
                                        <img
                                            src={eIcon}
                                            alt="Audio Icon"
                                            className={styles.pg101AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={volumeReduzidoIcon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles.pg101AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg101Pulsing : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.pg101ContainerImagem}>
                        <img className={styles.pg101imagem} src={Pagina101_imagem1} alt="" />
                    </div>
                </div>

                {/* Tabela Negativa */}
                <div className={styles.pg101tabelaNegativaContainer}>
                    <div className={styles.pg101tableHeaderNegativa}>NEGATIVA</div>
                    <table className={styles.pg101styledTableNegativa}>
                        <thead>
                            <tr className={styles.pg101celulatable}>
                                <th>Introdução</th>
                                <th>Sujeito</th>
                                <th>Verbo Auxiliar</th>
                                <th><span style={{ color: 'red' }}>Not</span> <br /> Adverb</th>
                                <th>Verbo(s)</th>
                                <th>Objeto Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                {/* Segunda parte - Negativa */}
                <div className={styles.pg101ContainerQuestoes}>
                    <div className={styles.pg101Questions2}>
                        <p className={styles.pg101ATituloQuestion}>
                            D) Negative Form:
                            <img
                                src={eIcon}
                                alt="English audio"
                                className={styles.pg101HeaderIcon}
                                onClick={() => playAudio("pg101_audio12e")}
                            />
                            <img
                                src={pIcon}
                                alt="Portuguese audio"
                                className={styles.pg101HeaderIcon}
                                onClick={() => playAudio("pg101_audio12p")}
                            />
                        </p>
                        {[
    "I ____ a student.",
    "She ____ a doctor.",
    "They ____ my friends.",
    "We ____ from Italy.",
    "The book ____ on the table.",
    "John ____ at home right now.",
    "Alice ____ a doctor.",
    "Tom and Emily ____ in the park.",
    "We ____ students.",
    "The party ____ tonight."
].map((question, index) => {
    const parts = question.split('____');
    const audioKey = `pg101_audio${index + 2}`;

    return (
        <div key={index} className={styles.pg101Question}>
            <span><em><strong>{index + 1}.</strong> {parts[0]}</em></span>
            <div className={styles.pg101InputContainer}>
                <input
                    type="text"
                    value={inputValues[index] || ""}
                    onChange={(e) => handleInputChange(e.target.value, index)}
                    className={styles.pg101InputBox}
                />
            </div>
            <span><em>{parts[1]}</em></span>
            <div className={styles.pg101IconsContainer}>
                {results[index] !== null && (
                    <img
                        src={results[index] ? vSquare : xSquare}
                        alt={results[index] ? "Correct" : "Incorrect"}
                        className={styles.pg101CheckmarkImage}
                    />
                )}
                <img
                    src={eIcon}
                    alt="Audio Icon"
                    className={styles.pg101AdditionalIcon}
                    onClick={() => playAudio(audioKey)}
                />
                <img
                    src={volumeReduzidoIcon}
                    alt="Volume Reduced Icon"
                    className={`${styles.pg101AdditionalIcon} ${isSpeedReduced[audioKey] ? styles.pg101Pulsing : ''}`}
                    onClick={() => toggleSpeedReduction(audioKey)}
                />
            </div>
        </div>
    );
})}

                    </div>
                    <div className={styles.pg101ContainerImagem}>
                        <img className={styles.pg101imagem} src={Pagina101_imagem2} alt="" />
                    </div>
                </div>
            </main>
            <button className={styles.pg101CheckButton} onClick={handleCheckClick}><em>Check</em></button>
        </div>
    );
};

export default Pagina101;
