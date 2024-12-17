import React, { useState } from 'react';
import styles from './pagina40.module.css';
import Pagina40_imagem1 from '../assets/images/Pagina40_imagem1.png';
import Pagina40_imagem2 from '../assets/images/Pagina40_imagem2.png';
import Pagina40_imagem3 from '../assets/images/Pagina40_imagem3.png';
import Pagina40_imagem4 from '../assets/images/Pagina40_imagem4.png';
import Pagina40_imagem5 from '../assets/images/Pagina40_imagem5.png';
import vSquare from '../assets/images/vSquare.png';
import xSquare from '../assets/images/xSquare.png';
import eIcon from '../assets/images/eIcon.png';
import pIcon from '../assets/images/pIcon.png';
import volumeReduzidoIcon from '../assets/images/volumeReduzido.png';
import Pagina40_audioA from '../assets/audios/Pagina40_audioA.mp3';
import Pagina40_audioB from '../assets/audios/Pagina40_audioB.mp3';
import Pagina40_audioC from '../assets/audios/Pagina40_audioC.mp3';
import Pagina40_audioD from '../assets/audios/Pagina40_audioD.mp3';
import Pagina40_audioE from '../assets/audios/Pagina40_audioE.mp3';
import Pagina40_audio1 from '../assets/audios/Pagina40_audio1.mp3';
import Pagina40_audio2 from '../assets/audios/Pagina40_audio2.mp3';
import Pagina40_audio3 from '../assets/audios/Pagina40_audio3.mp3';
import Pagina40_audio4 from '../assets/audios/Pagina40_audio4.mp3';
import Pagina40_audio5 from '../assets/audios/Pagina40_audio5.mp3';

const Pagina40 = () => {
    const [inputValues, setInputValues] = useState(['', '', '', '', '']);
    const [results, setResults] = useState([null, null, null, null, null]);
    const [pulsingAudioEnglishIndex, setPulsingAudioEnglishIndex] = useState(null);
    const [pulsingAudioPortugueseIndex, setPulsingAudioPortugueseIndex] = useState(null);
    const [isSpeedReduced, setIsSpeedReduced] = useState([false, false, false, false, false]);

    const correctSentences = [
        "I am studying for my exam",
        "They are swimming in the pool",
        "We are watching a movie",
        "He is cleaning the house",
        "She is playing the piano"
    ];

    const displayedSentences = [
        "I am studying for my exam",
        "He is cleaning the house",
        "We are watching a movie",
        "They are swimming in the pool",
        "She is playing the piano"
    ];

    const audioFiles = [
        Pagina40_audioA,
        Pagina40_audioB,
        Pagina40_audioC,
        Pagina40_audioD,
        Pagina40_audioE
    ];

    const portugueseAudioFiles = [
        Pagina40_audio1,
        Pagina40_audio2,
        Pagina40_audio3,
        Pagina40_audio4,
        Pagina40_audio5
    ];

    const handleAudioClick = (index, isPortuguese = false, event) => {
        event.stopPropagation();
        const audioFile = isPortuguese ? portugueseAudioFiles[index] : audioFiles[index];
        const audio = new Audio(audioFile);
        audio.playbackRate = isSpeedReduced[index] ? 0.75 : 1;

        if (isPortuguese) {
            setPulsingAudioPortugueseIndex(index);
        } else {
            setPulsingAudioEnglishIndex(index);
        }

        audio.play();
        audio.onended = () => {
            if (isPortuguese) {
                setPulsingAudioPortugueseIndex(null);
            } else {
                setPulsingAudioEnglishIndex(null);
            }
        };
    };

    const reduzirVelocidade = (index, event) => {
        event.stopPropagation();
        setIsSpeedReduced((prev) => {
            const newSpeeds = [...prev];
            newSpeeds[index] = !newSpeeds[index];
            return newSpeeds;
        });
    };

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => value === correctSentences[index]);
        setResults(newResults);
    };

    const handleSentenceClick = (sentence) => {
        const indexInInputs = inputValues.indexOf(sentence);

        if (indexInInputs !== -1) {
            const newValues = [...inputValues];
            newValues[indexInInputs] = '';
            setInputValues(newValues);
        } else {
            const emptyIndex = inputValues.findIndex((value) => value === '');
            if (emptyIndex !== -1) {
                const newValues = [...inputValues];
                newValues[emptyIndex] = sentence;
                setInputValues(newValues);
            }
        }
    };

    return (
        <div className={styles.pg40Container}>
            <header className={styles.pg40Header}>
                <h1 style={{ textAlign: 'left', color: '#A61C28' }}>Exercise:</h1>
                <h2 className={styles.pg40ExerciseTitle}>
                    2. Matching Exercises (Match the sentence with the correct image/description)
                </h2>
                <p className={styles.pg40ExerciseQuestion}>
                    Match the sentence (A-E) with the correct picture or description (1-5):
                </p>
            </header>
            <main className={styles.pg40Main}>
                <div className={styles.pg40ImagesContainer}>
                    {[Pagina40_imagem1, Pagina40_imagem2, Pagina40_imagem3, Pagina40_imagem4, Pagina40_imagem5].map((image, index) => (
                        <div key={index} className={styles.pg40ImageBox}>
                            <img src={image} alt={`Image ${index + 1}`} />
                            <div className={styles.pg40InputBoxContainer}>
                                <input
                                    type="text"
                                    className={styles.pg40InputBox}
                                    placeholder="Place here"
                                    value={inputValues[index]}
                                    onChange={(e) => {
                                        const newValues = [...inputValues];
                                        newValues[index] = e.target.value;
                                        setInputValues(newValues);
                                    }}
                                />
                                {results[index] !== null && (
                                    <img
                                        src={results[index] ? vSquare : xSquare}
                                        alt={results[index] ? "Correct" : "Incorrect"}
                                        className={styles.pg40CheckmarkImage}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.pg40SentencesContainer}>
                    <p><strong>Sentences:</strong></p>
                    {displayedSentences.map((sentence, index) => (
                        <div key={index} className={styles.pg40Sentence} onClick={() => handleSentenceClick(sentence)}>
                            <p><strong>{String.fromCharCode(65 + index)}) {sentence}</strong></p>
                            <div className={styles.pg40IconsContainer}>
                                <img
                                    src={eIcon}
                                    alt="English Audio Icon"
                                    className={`${styles.pg40AudioIcon} ${pulsingAudioEnglishIndex === index ? styles.pg40Pulsing : ''}`}
                                    onClick={(e) => handleAudioClick(index, false, e)}
                                />
                                <img
                                    src={pIcon}
                                    alt="Portuguese Audio Icon"
                                    className={`${styles.pg40PortugueseIcon} ${pulsingAudioPortugueseIndex === index ? styles.pg40Pulsing : ''}`}
                                    onClick={(e) => handleAudioClick(index, true, e)}
                                />
                                <img
                                    src={volumeReduzidoIcon}
                                    alt="Reduce Speed Icon"
                                    className={`${styles.pg40VolumeIcon} ${isSpeedReduced[index] ? styles.pg40Active : ''}`}
                                    onClick={(e) => reduzirVelocidade(index, e)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <button className={styles.pg40CheckButton} onClick={handleCheckClick}>
                    Check
                </button>
            </main>
        </div>
    );
};

export default Pagina40;
