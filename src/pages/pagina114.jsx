import React, { useState, useRef } from 'react';

import styles from './pagina114.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina114_imagem1 from '../assets/images/pagina114_imagem1.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg114_audio1 from '../assets/audios/pg114_audio1.mp3';
import pg114_audio2 from '../assets/audios/pg114_audio2.mp3';
import pg114_audio3 from '../assets/audios/pg114_audio3.mp3';
import pg114_audio4 from '../assets/audios/pg114_audio4.mp3';
import pg114_audio5 from '../assets/audios/pg114_audio5.mp3';
import pg114_audio6 from '../assets/audios/pg114_audio6.mp3';
import pg114_audio7 from '../assets/audios/pg114_audio7.mp3';
import pg114_audio8 from '../assets/audios/pg114_audio8.mp3';
import pg114_audio9 from '../assets/audios/pg114_audio9.mp3';
import pg114_audio10 from '../assets/audios/pg114_audio10.mp3';
import pg114_audio11 from '../assets/audios/pg114_audio11.mp3';
import pg114_audio12 from '../assets/audios/pg114_audio12.mp3';
import pg114_audio13 from '../assets/audios/pg114_audio13.mp3';
import pg114_audio14 from '../assets/audios/pg114_audio14.mp3';
import pg114_audio15 from '../assets/audios/pg114_audio15.mp3';

const pagina114 = () => {
    const [inputValues, setInputValues] = useState({
        questions1: Array(4).fill(''),
        questions2: Array(4).fill(''),
        questions3: Array(3).fill(''),
        questions4: Array(4).fill(''),
        shortAnswers1: Array(4).fill(''),
        shortAnswers2: Array(4).fill(''),
        shortAnswers3: Array(3).fill(''),
        shortAnswers4: Array(4).fill(''),
    });

    const [results, setResults] = useState({
        questions1: Array(4).fill(null),
        questions2: Array(4).fill(null),
        questions3: Array(3).fill(null),
        questions4: Array(4).fill(null),
    });


    const correctAnswers = {
        questions1: [
            'Where are',
            'What is',
            'What time is',
            'How are',
        ],
        questions2: [
            'What is',
            'Where are',
            'When is',
            'How is',
        ],
        questions3: [
            'When is',
            'How is',
            'What is',
        ],
        questions4: [
            'What is',
            'When are',
            'What is',
            'What is',
        ],
    };

    // Função para verificar as respostas
    const handleCheckClick = () => {
        const newResults = {
            questions1: inputValues.questions1.map((value, index) => value.trim().toLowerCase() === correctAnswers.questions1[index].toLowerCase()),
            questions2: inputValues.questions2.map((value, index) => value.trim().toLowerCase() === correctAnswers.questions2[index].toLowerCase()),
            questions3: inputValues.questions3.map((value, index) => value.trim().toLowerCase() === correctAnswers.questions3[index].toLowerCase()),
            questions4: inputValues.questions4.map((value, index) => value.trim().toLowerCase() === correctAnswers.questions4[index].toLowerCase()),
        };

        setResults(newResults);
    };

    // Função para atualizar as respostas
    const handleInputChange = (value, index, questionSet) => {
        const newValues = { ...inputValues };
        newValues[questionSet][index] = value;
        setInputValues(newValues);
    };

    const currentAudioRef = useRef(null);

    // **Função para tocar o áudio corretamente**
    const playAudio = (audioFile) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }
        const audio = new Audio(audioFile);
        currentAudioRef.current = audio;
        audio.play().catch((error) => console.error("Erro ao reproduzir áudio:", error));
    };

    return (
        <div className={styles.pg114Container}>
            <main className={styles.pg114Main}>
                <header className={styles.pg114Header}>
                    <h1 className={styles.pg114H1}>Learning Language Exercises <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles.pg114HeaderIcon}
                        onClick={() => playAudio(global_learning_le_e)}

                    />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese audio"
                            className={styles.pg114HeaderIcon}
                            onClick={() => playAudio(global_learning_le_p)}

                        /></h1>
                    <p className={styles.pg114TextoExplicativo}>Complete the questions using the correct question words: <strong> What | Where | When | What time | How;</strong>
                        along with the verbs: <strong> am| is | are |. </strong>Then answer them with your own words.
                        <br /> <br />
                        Complete as perguntas usando as palavras interrogativas corretas: O que / Onde / Quando /
                        Que horas / Como; juntamente com os verbos: sou / é / são. Depois, responda-as com suas
                        próprias palavras.</p>
                    <p className={styles.pg114TextoExplicativoRed}>There can be more than one possible question and answer <br /> Nota: Pode haver mais de uma pergunta e resposta possíveis.</p>

                </header>

                <div className={styles.pg114ContainerTabelas}>
                    {/* Tabela Interrogativa */}
                    <div className={styles.pg114tabelaInterrogativaContainer}>
                        <div className={styles.pg114tableHeaderInterrogativa}>INTERROGATIVA</div>
                        <table className={styles.pg114styledTableInterrogativa}>
                            <thead>
                                <tr className={styles.pg114celulatable}>
                                    <th>Palavras <br /> Interrogativas</th>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th>Sujeito</th>
                                    <th><span style={{ color: '#A61C28' }}>Not</span> <br />Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    {/* Tabela Afirmação */}
                    <div className={styles.pg114tabelaInterrogativaContainer}>
                        <div className={styles.pg114tableHeaderInterrogativa}>AFIRMATIVA</div>
                        <table className={styles.pg114styledTableInterrogativa}>
                            <thead>
                                <tr className={styles.pg114celulatable}>
                                    <th>Introdução</th>
                                    <th>Sujeito</th>
                                    <th>Verbo Auxiliar</th>
                                    <th>Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>

                {/* Questões com Respostas */}
                <div className={styles.pg114ContainerQuestoes}>
                    {/* Questões 1 e Respostas 1 */}
                    <div className={styles.pg114Questions1}>
                        <p className={styles.pg114TitleContainer}>
                            <strong>1 - Questions</strong>
                        </p>
                        {[" you from?", " your favorite color?", " the party tonight?", " your parents?"].map((question, index) => (
                            <div key={index} className={styles.pg114Question}>
                                <span><strong>{String.fromCharCode(97 + index)}.</strong></span>
                                <input
                                    type="text"
                                    value={inputValues.questions1[index]}
                                    onChange={(e) => handleInputChange(e.target.value, index, 'questions1')}
                                    className={styles.pg114InputBoxSmall}
                                />
                                {question}
                                <img
                                    src={eng_audio_icon}
                                    alt="Play Audio"
                                    className={styles.pg114AudioIcon}
                                    onClick={() => playAudio(eval(`pg114_audio${index + 1}`))}

                                />
                                {results.questions1[index] !== null && (
                                    <img
                                        src={results.questions1[index] ? correct_icon : wrong_icon}
                                        alt={results.questions1[index] ? "Correct" : "Incorrect"}
                                        className={styles.pg114CheckmarkImage}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Respostas 1 */}
                    <div className={styles.pg114Answers}>
                        <p><strong>1 - Answers</strong></p>
                        {["a", "b", "c", "d"].map((item, index) => (
                            <div key={index} className={styles.pg114Answer}>
                                <em><strong>{item})</strong> <input type="text" value={inputValues.shortAnswers1[index]} onChange={(e) => handleInputChange(e.target.value, index, 'shortAnswers1')} className={styles.pg114InputBoxColumn} /></em>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Questões 2 e Respostas 2 */}
                <div className={styles.pg114ContainerQuestoes}>
                    <div className={styles.pg114Questions2}>
                        <p className={styles.pg114TitleContainer}>
                            <strong>2 - Questions</strong>
                        </p>
                        {["(What / your name)?", "(Where / your keys)?", "(When / the next train)?", "(How / your new job)?"].map((question, index) => (
                            <div key={index} className={styles.pg114Question}>
                                <span><strong>{String.fromCharCode(97 + index)}.</strong></span>
                                <input
                                    type="text"
                                    value={inputValues.questions2[index]}
                                    onChange={(e) => handleInputChange(e.target.value, index, 'questions2')}
                                    className={styles.pg114InputBoxSmall}
                                />
                                {question}
                                <img
                                    src={eng_audio_icon}
                                    alt="Play Audio"
                                    className={styles.pg114AudioIcon}
                                    onClick={() => playAudio(eval(`pg114_audio${index + 5}`))}

                                />
                                {results.questions2[index] !== null && (
                                    <img
                                        src={results.questions2[index] ? correct_icon : wrong_icon}
                                        alt={results.questions2[index] ? "Correct" : "Incorrect"}
                                        className={styles.pg114CheckmarkImage}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Respostas 2 */}
                    <div className={styles.pg114Answers}>
                        <p><strong>2 - Answers</strong></p>
                        {["a", "b", "c", "d"].map((item, index) => (
                            <div key={index} className={styles.pg114Answer}>
                                <em><strong>{item})</strong> <input type="text" value={inputValues.shortAnswers2[index]} onChange={(e) => handleInputChange(e.target.value, index, 'shortAnswers2')} className={styles.pg114InputBoxColumn} /></em>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Questões 3 e Respostas 3 */}
                <div className={styles.pg114ContainerQuestoes}>
                    <div className={styles.pg114Questions3}>
                        <p><strong>3 - Questions</strong></p>
                        {[" the concert? ", "the weather today?", "your favorite subject at school?"].map((question, index) => (
                            <div key={index} className={styles.pg114Question}>
                                <span><strong>{String.fromCharCode(97 + index)}.</strong> </span>
                                <input
                                    type="text"
                                    value={inputValues.questions3[index]}
                                    onChange={(e) => handleInputChange(e.target.value, index, 'questions3')}
                                    className={styles.pg114InputBoxSmall}
                                />{question}
                                <img
                                    src={eng_audio_icon}
                                    alt="Play Audio"
                                    className={styles.pg114AudioIcon}
                                    onClick={() => playAudio(eval(`pg114_audio${index + 9}`))}

                                />
                                {results.questions3[index] !== null && (
                                    <img
                                        src={results.questions3[index] ? correct_icon : wrong_icon}
                                        alt={results.questions3[index] ? "Correct" : "Incorrect"}
                                        className={styles.pg114CheckmarkImage}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Respostas 3 */}
                    <div className={styles.pg114Answers}>
                        <p><strong>3 - Answers</strong></p>
                        {["a", "b", "c"].map((item, index) => (
                            <div key={index} className={styles.pg114Answer}>
                                <em><strong>{item})</strong> <input type="text" value={inputValues.shortAnswers3[index]} onChange={(e) => handleInputChange(e.target.value, index, 'shortAnswers3')} className={styles.pg114InputBoxColumn} /></em>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Questões 4 e Respostas 4 */}
                <div className={styles.pg114ContainerQuestoes}>
                    <div className={styles.pg114Questions4}>
                        <p><strong>4 - Questions</strong></p>
                        {["your favorite book?", " you at home?", " the time now?", " your phone number?"].map((question, index) => (
                            <div key={index} className={styles.pg114Question}>
                                <span><strong>{String.fromCharCode(97 + index)}.</strong></span>
                                <input
                                    type="text"
                                    value={inputValues.questions4[index]}
                                    onChange={(e) => handleInputChange(e.target.value, index, 'questions4')}
                                    className={styles.pg114InputBoxSmall}
                                /> {question}
                                <img
                                    src={eng_audio_icon}
                                    alt="Play Audio"
                                    className={styles.pg114AudioIcon}
                                    onClick={() => playAudio(eval(`pg114_audio${index + 12}`))}

                                />
                                {results.questions4[index] !== null && (
                                    <img
                                        src={results.questions4[index] ? correct_icon : wrong_icon}
                                        alt={results.questions4[index] ? "Correct" : "Incorrect"}
                                        className={styles.pg114CheckmarkImage}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Respostas 4 */}
                    <div className={styles.pg114Answers}>
                        <p><strong>4 - Answers</strong></p>
                        {["a", "b", "c", "d"].map((item, index) => (
                            <div key={index} className={styles.pg114Answer}>
                                <em><strong>{item})</strong> <input type="text" value={inputValues.shortAnswers4[index]} onChange={(e) => handleInputChange(e.target.value, index, 'shortAnswers4')} className={styles.pg114InputBoxColumn} /></em>
                            </div>
                        ))}
                    </div>
                </div>


                <button className={styles.pg114CheckButton} onClick={handleCheckClick}>Check</button>

                <div className={styles.pg114ContainerImagem}> <img className={styles.pg114imagem} src={pagina114_imagem1} alt="" /></div>


            </main>
        </div>
    );
};

export default pagina114;
