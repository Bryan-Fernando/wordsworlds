import React, { useState } from 'react';
import styles from './pagina41.module.css';
import Pagina41_imagemCoral from '../assets/images/Pagina41_Coral.webp';
import Pagina41_imagemBasquete from '../assets/images/Pagina41_Basquete.webp';
import vSquare from '../assets/images/vSquare.png';
import xSquare from '../assets/images/xSquare.png';
import eIcon from '../assets/images/eIcon.png';
import volumeReduzidoIcon from '../assets/images/volumeReduzido.png';
import Pagina41_audioA from '../assets/audios/Pagina41_audioA.mp3';
import Pagina41_audioB from '../assets/audios/Pagina41_audioB.mp3';
import Pagina41_audioC from '../assets/audios/Pagina41_audioC.mp3';
import Pagina41_audioD from '../assets/audios/Pagina41_audioD.mp3';
import Pagina41_audioE from '../assets/audios/Pagina41_audioE.mp3';
import Pagina41_audioF from '../assets/audios/Pagina41_audioF.mp3';
import Pagina41_audioG from '../assets/audios/Pagina41_audioG.mp3';
import Pagina41_audioH from '../assets/audios/Pagina41_audioH.mp3';
import Pagina41_audioI from '../assets/audios/Pagina41_audioI.mp3';
import Pagina41_audioJ from '../assets/audios/Pagina41_audioJ.mp3';

const audioFiles = [
    Pagina41_audioA,
    Pagina41_audioB,
    Pagina41_audioC,
    Pagina41_audioD,
    Pagina41_audioE,
    Pagina41_audioF,
    Pagina41_audioG,
    Pagina41_audioH,
    Pagina41_audioI,
    Pagina41_audioJ
];

const Pagina41 = () => {
    const [inputValues, setInputValues] = useState(Array(10).fill(''));
    const [results, setResults] = useState(Array(10).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState(Array(10).fill(false));

    const correctAnswers = [
        'is', 'go', 'meets', 'plays', 'is',
        'drive', 'rises', 'sing', 'is', 'are'
    ];

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => value.toLowerCase() === correctAnswers[index]);
        setResults(newResults);
    };

    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
    };

    const playAudio = (index) => {
        const audio = new Audio(audioFiles[index]);
        audio.playbackRate = isSpeedReduced[index] ? 0.60 : 1;
        audio.play();
    };

    const toggleSpeedReduction = (index) => {
        const newSpeedState = [...isSpeedReduced];
        newSpeedState[index] = !newSpeedState[index];
        setIsSpeedReduced(newSpeedState);
    };

    return (
        <div className={styles.pg41Container}>
            <h2 style={{ textAlign: 'left', color: '#A61C28', marginLeft: '25px' }}>Learning Language Exercises</h2>
            <p className={styles.pg41ExerciseTitle}>Fill in the blanks in the Present Simple with the verbs in parentheses.</p>
            <div className={styles.pg41QuestionsContainer}>
                {[
                    "My favorite color ____ blue. (be)",
                    "They ____ to the movies every Friday. (go)",
                    "She ____ her friends at the mall on weekends. (meet)",
                    "He ____ basketball every morning. (play)",
                    "The dog ____ very friendly. (be)",
                    "We ____ to school. (drive)",
                    "The sun ____ in the east. (rise)",
                    "I ____ in the choir at church. (sing)",
                    "It ____ rainy today. (be)",
                    "My parents ____ doctors. (be)"
                ].map((question, index) => {
                    const parts = question.split('____');
                    return (
                        <div key={index} className={styles.pg41Question}>
                            <span>
                                <em>
                                    <strong>{String.fromCharCode(97 + index)}.</strong> {parts[0]}
                                </em>
                            </span>
                            <div className={styles.pg41InputContainer}>
                                <input
                                    type="text"
                                    value={inputValues[index]}
                                    onChange={(e) => handleInputChange(e.target.value, index)}
                                    className={styles.pg41InputBox}
                                />
                                {results[index] !== null && (
                                    <img
                                        src={results[index] ? vSquare : xSquare}
                                        alt={results[index] ? "Correct" : "Incorrect"}
                                        className={styles.pg41CheckmarkImage}
                                    />
                                )}
                            </div>
                            <span><em>{parts[1]}</em></span>
                            <div className={styles.pg41IconsContainer}>
                                <img
                                    src={eIcon}
                                    alt="Audio Icon"
                                    className={styles.pg41AdditionalIcon}
                                    onClick={() => playAudio(index)}
                                />
                                <img
                                    src={volumeReduzidoIcon}
                                    alt="Volume Reduced Icon"
                                    className={`${styles.pg41AdditionalIcon} ${isSpeedReduced[index] ? styles.pg41Pulsing : ''}`}
                                    onClick={() => toggleSpeedReduction(index)}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
            <button className={styles.pg41CheckButton} onClick={handleCheckClick}><em>Check</em></button>
            <div className={styles.pg41ImagesContainer}>
                <img src={Pagina41_imagemBasquete} alt="Basketball" className={styles.pg41ImageBasketball} />
                <img src={Pagina41_imagemCoral} alt="Choir" className={styles.pg41ImageChoir} />
            </div>
        </div>
    );
};

export default Pagina41;
