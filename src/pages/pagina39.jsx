import React, { useState } from 'react';
import styles from './pagina39.module.css';
import Pagina39_imagem1 from '../assets/images/Pagina39_imagem1.png';
import Pagina39_imagem2 from '../assets/images/Pagina39_imagem2.png';
import Pagina39_imagem3 from '../assets/images/Pagina39_imagem3.png';
import Pagina39_imagem4 from '../assets/images/Pagina39_imagem4.png';
import Pagina39_imagem5 from '../assets/images/Pagina39_imagem5.png';
import vSquare from '../assets/images/vSquare.png';
import xSquare from '../assets/images/xSquare.png';
import eIcon from '../assets/images/eIcon.png';
import pIcon from '../assets/images/pIcon.png';
import volumeReduzidoIcon from '../assets/images/volumeReduzido.png';
import Pagina39_audioA from '../assets/audios/Pagina39_audioA.mp3';
import Pagina39_audioB from '../assets/audios/Pagina39_audioB.mp3';
import Pagina39_audioC from '../assets/audios/Pagina39_audioC.mp3';
import Pagina39_audioD from '../assets/audios/Pagina39_audioD.mp3';
import Pagina39_audioE from '../assets/audios/Pagina39_audioE.mp3';
import Pagina39_audio1 from '../assets/audios/Pagina39_audio1.mp3';
import Pagina39_audio2 from '../assets/audios/Pagina39_audio2.mp3';
import Pagina39_audio3 from '../assets/audios/Pagina39_audio3.mp3';
import Pagina39_audio4 from '../assets/audios/Pagina39_audio4.mp3';
import Pagina39_audio5 from '../assets/audios/Pagina39_audio5.mp3';

const Pagina39 = () => {
    const [inputValues, setInputValues] = useState(['', '', '', '', '']);
    const [results, setResults] = useState([null, null, null, null, null]);
    const [pulsingAudioEnglishIndex, setPulsingAudioEnglishIndex] = useState(null);
    const [pulsingAudioPortugueseIndex, setPulsingAudioPortugueseIndex] = useState(null);
    const [isSpeedReduced, setIsSpeedReduced] = useState([false, false, false, false, false]);

    const correctSentences = [
        "The dog is sleeping on the floor",
        "We are cooking dinner",
        "He is writing a letter",
        "She is drinking coffee",
        "They are playing basketball"
    ];

    const displayedSentences = [
        "She is drinking coffee",
        "They are playing basketball",
        "The dog is sleeping on the floor",
        "He is writing a letter",
        "We are cooking dinner"
    ];

    const audioFiles = [
        Pagina39_audioA,
        Pagina39_audioB,
        Pagina39_audioC,
        Pagina39_audioD,
        Pagina39_audioE
    ];

    const portugueseAudioFiles = [
        Pagina39_audio1,
        Pagina39_audio2,
        Pagina39_audio3,
        Pagina39_audio4,
        Pagina39_audio5
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
        <div className={styles.pg39Container}>
            <header className={styles.pg39Header}>
                <h1 style={{ textAlign: 'left', color: '#A61C28' }}>Exercise:</h1>
                <h2 className={styles.pg39ExerciseTitle}>
                    2. Matching Exercises (Match the sentence with the correct image/description)
                </h2>
                <p className={styles.pg39ExerciseQuestion}>
                    Match the sentence (A-E) with the correct picture or description (1-5):
                </p>
            </header>
            <main className={styles.pg39Main}>
                <div className={styles.pg39ImagesContainer}>
                    {[Pagina39_imagem1, Pagina39_imagem2, Pagina39_imagem3, Pagina39_imagem4, Pagina39_imagem5].map((image, index) => (
                        <div key={index} className={styles.pg39ImageBox}>
                            <img src={image} alt={`Image ${index + 1}`} />
                            <div className={styles.pg39InputBoxContainer}>
                                <input
                                    type="text"
                                    className={styles.pg39InputBox}
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
                                        className={styles.pg39CheckmarkImage}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.pg39SentencesContainer}>
                    <p><strong>Sentences:</strong></p>
                    {displayedSentences.map((sentence, index) => (
                        <div key={index} className={styles.pg39Sentence} onClick={() => handleSentenceClick(sentence)}>
                            <p><strong>{String.fromCharCode(65 + index)}) {sentence}</strong></p>
                            <div className={styles.pg39IconsContainer}>
                                <img
                                    src={eIcon}
                                    alt="English Audio Icon"
                                    className={`${styles.pg39AudioIcon} ${pulsingAudioEnglishIndex === index ? styles.pg39Pulsing : ''}`}
                                    onClick={(e) => handleAudioClick(index, false, e)}
                                />
                                <img
                                    src={pIcon}
                                    alt="Portuguese Audio Icon"
                                    className={`${styles.pg39PortugueseIcon} ${pulsingAudioPortugueseIndex === index ? styles.pg39Pulsing : ''}`}
                                    onClick={(e) => handleAudioClick(index, true, e)}
                                />
                                <img
                                    src={volumeReduzidoIcon}
                                    alt="Reduce Speed Icon"
                                    className={`${styles.pg39VolumeIcon} ${isSpeedReduced[index] ? styles.pg39Active : ''}`}
                                    onClick={(e) => reduzirVelocidade(index, e)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <button className={styles.pg39CheckButton} onClick={handleCheckClick}>
                    Check
                </button>
            </main>
        </div>
    );
};

export default Pagina39;
