import React, { useState } from 'react';

import styles from './pagina95.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pg95_audio1e from '../assets/audios/pg95_audio1e.mp3';
import pg95_audio1p from '../assets/audios/pg95_audio1p.mp3';
import pg95_audio2 from '../assets/audios/pg95_audio2.mp3';
import pg95_audio3 from '../assets/audios/pg95_audio3.mp3';
import pg95_audio4 from '../assets/audios/pg95_audio4.mp3';
import pg95_audio5 from '../assets/audios/pg95_audio5.mp3';
import pg95_audio6 from '../assets/audios/pg95_audio6.mp3';
import pg95_audio7 from '../assets/audios/pg95_audio7.mp3';
import pg95_audio8 from '../assets/audios/pg95_audio8.mp3';
import pg95_audio9 from '../assets/audios/pg95_audio9.mp3';
import pg95_audio10 from '../assets/audios/pg95_audio10.mp3';
import pg95_audio11 from '../assets/audios/pg95_audio11.mp3';
import pg95_audio12 from '../assets/audios/pg95_audio12.mp3';
import pg95_audio13 from '../assets/audios/pg95_audio13.mp3';
import pg95_audio14 from '../assets/audios/pg95_audio14.mp3';
import pg95_audio15 from '../assets/audios/pg95_audio15.mp3';
import pg95_audio16 from '../assets/audios/pg95_audio16.mp3';

const pagina95 = () => {
    const [inputValues, setInputValues] = useState({
        questions1: Array(10).fill(''),
        questions2: Array(10).fill(''),
        questions3: Array(10).fill(''),
        shortAnswers1: Array(10).fill(''),
        shortAnswers2: Array(10).fill(''),
        shortAnswers3: Array(10).fill(''),
    });

    const [results, setResults] = useState({
        questions1: Array(10).fill(null),
        questions2: Array(10).fill(null),
        questions3: Array(10).fill(null),
        shortAnswers1: Array(10).fill(null),
        shortAnswers2: Array(10).fill(null),
        shortAnswers3: Array(10).fill(null),
    });


    const audioMap = {
        pg95_audio1e,
        pg95_audio1p,
        pg95_audio2,
        pg95_audio3,
        pg95_audio4,
        pg95_audio5,
        pg95_audio6,
        pg95_audio7,
        pg95_audio8,
        pg95_audio9,
        pg95_audio10,
        pg95_audio11,
        pg95_audio12,
        pg95_audio13,
        pg95_audio14,
        pg95_audio15,
        pg95_audio16
    };


    const correctAnswers = {
        questions1: [
            ["Does", "like"],
            ["Do", "play"],
            ["Does", "work"],
            ["Do", "watch"],
            ["Do", "speak"]
        ],
        questions2: [
            ["Does", "read"],
            ["Do", "exercise"],
            ["Does", "drink"],
            ["Does", "arrive"],
            ["Do", "listen"]
        ],
        questions3: [
            ["Does", "prefer"],
            ["Do", "like"],
            ["Does", "enjoy"],
            ["Do", "want"],
            ["Do", "love"]
        ],
        shortAnswers1: [
            ["Yes, she does.", "No, she doesn't."],
            ["Yes, they do.", "No, they don't."],
            ["Yes, he does.", "No, he doesn't."],
            ["Yes, they do.", "No, they don't."],
            ["Yes, I do.", "No, I don't."]
        ],
        shortAnswers2: [
            ["Yes, she does.", "No, she doesn't."],
            ["Yes, they do.", "No, they don't."],
            ["Yes, he does.", "No, he doesn't."],
            ["Yes, it does.", "No, it doesn't."],
            ["Yes, I do.", "No, I don't."]
        ],
        shortAnswers3: [
            ["She prefers tea.", "No, she doesn't."],
            ["Yes, they do.", "No, they don't."],
            ["Yes, he does.", "No, he doesn't."],
            ["Yes, they do.", "No, they don't."],
            ["Yes, I do.", "No, I don't."]
        ]
    };


    const handleInputChange = (value, index, questionGroup) => {
        setInputValues((prevState) => {
            const updatedValues = [...prevState[questionGroup]];
            updatedValues[index] = value;  // Atualiza o valor na posição correta
            return {
                ...prevState,
                [questionGroup]: updatedValues,
            };
        });
    };
    
    
 

    const playAudio = (audioKey) => {
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };

    const handleCheckClick = () => {
        setResults((prevResults) => ({
            questions1: inputValues.questions1.map((input, idx) => {
                const answerIndex = Math.floor(idx / 2);
                const expectedAnswer = correctAnswers.questions1[answerIndex] || []; 
                return input.trim().toLowerCase() === (expectedAnswer[idx % 2] || "").toLowerCase();
            }),
    
            questions2: inputValues.questions2.map((input, idx) => {
                const answerIndex = Math.floor(idx / 2);
                const expectedAnswer = correctAnswers.questions2[answerIndex] || [];
                return input.trim().toLowerCase() === (expectedAnswer[idx % 2] || "").toLowerCase();
            }),
    
            questions3: inputValues.questions3.map((input, idx) => {
                const answerIndex = Math.floor(idx / 2);
                const expectedAnswer = correctAnswers.questions3[answerIndex] || [];
                return input.trim().toLowerCase() === (expectedAnswer[idx % 2] || "").toLowerCase();
            }),
    
            shortAnswers1: inputValues.shortAnswers1.map((input, idx) => {
                // Acessando as respostas afirmativa e negativa diretamente
                const [affirmativeAnswer, negativeAnswer] = correctAnswers.shortAnswers1[Math.floor(idx / 2)] || [];
                return input.trim().toLowerCase() === affirmativeAnswer.toLowerCase() || input.trim().toLowerCase() === negativeAnswer.toLowerCase();
            }),
    
            shortAnswers2: inputValues.shortAnswers2.map((input, idx) => {
                const [affirmativeAnswer, negativeAnswer] = correctAnswers.shortAnswers2[Math.floor(idx / 2)] || [];
                return input.trim() === affirmativeAnswer || input.trim() === negativeAnswer;
            }),
    
            shortAnswers3: inputValues.shortAnswers3.map((input, idx) => {
                
                const [affirmativeAnswer, negativeAnswer] = correctAnswers.shortAnswers3[Math.floor(idx / 2)] || [];
                return input.trim() === affirmativeAnswer || input.trim() === negativeAnswer;
            }),
        }));
    };

    return (
        <div className={styles.pg95Container}>
            <main className={styles.pg95Main}>
                <div className={styles.pg95tabelaInterrogativaContainer}>
                    <div className={styles.pg95tableHeaderInterrogativa}>INTERROGATIVA</div>
                    <table className={styles.pg95styledTableInterrogativa}>
                        <thead className={styles.pg95Thead}>
                            <tr className={styles.pg95celulatable}>
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

                {/* Questões 1 */}
                <div className={styles.pg95ContainerQuestoes}>
                    <div className={styles.pg95Questions1}>
                        <div className={styles.pg95Question}>
                            <span>
                                <p>2. Make questions and give affirmative short answers.
                                <img
                                                        src={eng_audio_icon}
                                                        alt="English audio"
                                                        className={styles.pg95HeaderIcon}
                                                        onClick={() => playAudio("pg95_audio1e")}
                                                    />
                                                    <img
                                                        src={ptbr_audio_icon}
                                                        alt="Portuguese audio"
                                                        className={styles.pg95HeaderIcon}
                                                        onClick={() => playAudio("pg95_audio1p")}
                                                    />

                                </p>
                                <em><strong>a.</strong>
                                    <input
                                        type="text"
                                        value={inputValues.questions1[0]}
                                        onChange={(e) => handleInputChange(e.target.value, 0, 'questions1')}
                                        className={styles.pg95InputBoxSmall}
                                    />
                                    she
                                    <input
                                        type="text"
                                        value={inputValues.questions1[1]}
                                        onChange={(e) => handleInputChange(e.target.value, 1, 'questions1')}
                                        className={styles.pg95InputBoxSmall}
                                    />
                                    ice cream?

                                    {/* Ícone Único para Validar Ambos os Inputs */}
                                    {results.questions1[0] !== null && results.questions1[1] !== null && (
                                        <img
                                            src={results.questions1[0] && results.questions1[1] ? correct_icon : wrong_icon}
                                            alt={results.questions1[0] && results.questions1[1] ? "Correct" : "Incorrect"}
                                            className={styles.pg95CheckmarkImage}
                                        />
                                    )}

                                    <img
                                        src={eng_audio_icon}
                                        alt="Audio Icon"
                                        className={styles.pg95AdditionalIcon}
                                        onClick={() => playAudio("pg95_audio2")}
                                    />
                                </em>
                            </span>
                        </div>

                        {/* Repete para as demais perguntas */}
                        {[1, 2, 3, 4].map((index) => (
                            <div key={index} className={styles.pg95Question}>
                                <span>
                                    <em><strong>{String.fromCharCode(97 + index)}.</strong>
                                        <input
                                            type="text"
                                            value={inputValues.questions1[index * 2]}
                                            onChange={(e) => handleInputChange(e.target.value, index * 2, 'questions1')}
                                            className={styles.pg95InputBoxSmall}
                                        />
                                        {index === 3 ? "the children" : index === 4 ? "you" : "they"}
                                        <input
                                            type="text"
                                            value={inputValues.questions1[index * 2 + 1]}
                                            onChange={(e) => handleInputChange(e.target.value, index * 2 + 1, 'questions1')}
                                            className={styles.pg95InputBoxSmall}
                                        />
                                        {index === 0 ? "ice cream?" : index === 1 ? "basketball on Saturdays?" : index === 2 ? "on Sundays?" : index === 3 ? "TV in the evening?" : "Spanish fluently?"}

                                        {/* Ícone Único de Verificação */}
                                        {results.questions1[index * 2] !== null && results.questions1[index * 2 + 1] !== null && (
                                            <img
                                                src={results.questions1[index * 2] && results.questions1[index * 2 + 1] ? correct_icon : wrong_icon}
                                                alt={results.questions1[index * 2] && results.questions1[index * 2 + 1] ? "Correct" : "Incorrect"}
                                                className={styles.pg95CheckmarkImage}
                                            />
                                        )}

                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles.pg95AdditionalIcon}
                                            onClick={() => playAudio(`pg95_audio${index + 2}`)}
                                        />
                                    </em>
                                </span>
                            </div>
                        ))}

                    </div>

                    {/* Short Answers (right side) */}
                    <div className={styles.pg95ShortAnswers}>
                        <h2>Short Answers</h2>
                        <table className={styles.pg95styledTableShortAnswers}>
                            <thead>
                                <tr>
                                    <th><p>Affirmative</p></th>
                                    <th><p>Negative</p></th>
                                </tr>
                            </thead>
                            <tbody>
                            {Array.from({ length: 5 }).map((_, index) => {
    // Acessando diretamente as respostas afirmativa e negativa
    const [affirmativeAnswer, negativeAnswer] = correctAnswers.shortAnswers1[index] || [];

    return (
        <tr key={index}>
            <td>
                <input
                    type="text"
                    value={inputValues.shortAnswers1[index * 2]} // Acessa a resposta afirmativa
                    onChange={(e) => handleInputChange(e.target.value, index * 2, 'shortAnswers1')}
                    className={styles.pg95InputBoxColumn}
                />
                {results.shortAnswers1[index * 2] !== null && (
                    <img
                        src={results.shortAnswers1[index * 2] ? correct_icon : wrong_icon}
                        alt={results.shortAnswers1[index * 2] ? "Correct" : "Incorrect"}
                        className={styles.pg95CheckmarkImage}
                    />
                )}
            </td>
            <td>
                <input
                    type="text"
                    value={inputValues.shortAnswers1[index * 2 + 1]} // Acessa a resposta negativa
                    onChange={(e) => handleInputChange(e.target.value, index * 2 + 1, 'shortAnswers1')}
                    className={styles.pg95InputBoxColumn}
                />
                {results.shortAnswers1[index * 2 + 1] !== null && (
                    <img
                        src={results.shortAnswers1[index * 2 + 1] ? correct_icon : wrong_icon}
                        alt={results.shortAnswers1[index * 2 + 1] ? "Correct" : "Incorrect"}
                        className={styles.pg95CheckmarkImage}
                    />
                )}
            </td>
        </tr>
    );
})}

</tbody>




                        </table>
                    </div>
                </div>


                {/* Questões 2 */}
                <div className={styles.pg95ContainerQuestoes}>
                    <div className={styles.pg95Questions2}>
                        {[
                            "she __ before going to bed?",
                            "they __ every morning?",
                            "he __ coffee in the morning?",
                            "the bus __ on time?",
                            "you __ to music while working?",
                        ].map((question, index) => {
                            const audioKey = `pg95_audio${index + 7}`;
                            const isCorrect =
                                results.questions2[index * 2] === true &&
                                results.questions2[index * 2 + 1] === true;

                            return (
                                <div key={index} className={styles.pg95Question}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(97 + index)}.</strong>
                                            <input
                                                type="text"
                                                value={inputValues.questions2[index * 2]}
                                                onChange={(e) =>
                                                    handleInputChange(e.target.value, index * 2, 'questions2')
                                                }
                                                className={styles.pg95InputBoxSmall}
                                            />
                                            {question.split('__')[0]}
                                            <input
                                                type="text"
                                                value={inputValues.questions2[index * 2 + 1]}
                                                onChange={(e) =>
                                                    handleInputChange(e.target.value, index * 2 + 1, 'questions2')
                                                }
                                                className={styles.pg95InputBoxSmall}
                                            />
                                            {question.split('__')[1]}
                                        </em>

                                        {/* Ícone de validação único para ambos os inputs */}
                                        {results.questions2[index * 2] !== null &&
                                            results.questions2[index * 2 + 1] !== null && (
                                                <img
                                                    src={isCorrect ? correct_icon : wrong_icon}
                                                    alt={isCorrect ? "Correct" : "Incorrect"}
                                                    className={styles.pg95CheckmarkImage}
                                                />
                                            )}

                                        {/* Ícone de áudio */}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles.pg95AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                    </span>
                                </div>
                            );
                        })}
                    </div>


                    {/* Short Answers (right side) */}
                    <div className={styles.pg95ShortAnswers}>
                        <table className={styles.pg95styledTableShortAnswers}>
                            <thead>
                            </thead>
                            <tbody>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="text"
                                                value={inputValues.shortAnswers2[index * 2]}
                                                onChange={(e) => handleInputChange(e.target.value, index * 2, 'shortAnswers2')}
                                                className={styles.pg95InputBoxColumn}
                                            />
                                            {results.shortAnswers2[index * 2] !== null && (
                                                <img
                                                    src={results.shortAnswers2[index * 2] ? correct_icon : wrong_icon}
                                                    alt={results.shortAnswers2[index * 2] ? "Correct" : "Incorrect"}
                                                    className={styles.pg95CheckmarkImage}
                                                />
                                            )}
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={inputValues.shortAnswers2[index * 2 + 1]}
                                                onChange={(e) => handleInputChange(e.target.value, index * 2 + 1, 'shortAnswers2')}
                                                className={styles.pg95InputBoxColumn}
                                            />
                                            {results.shortAnswers2[index * 2 + 1] !== null && (
                                                <img
                                                    src={results.shortAnswers2[index * 2 + 1] ? correct_icon : wrong_icon}
                                                    alt={results.shortAnswers2[index * 2 + 1] ? "Correct" : "Incorrect"}
                                                    className={styles.pg95CheckmarkImage}
                                                />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                {/* Questões 3 */}
                <div className={styles.pg95ContainerQuestoes}>
                    <div className={styles.pg95Questions3}>
                        {[
                            "she __ tea or coffee?",
                            "they __ to watch movies on weekends?",
                            "he __ playing video games?",
                            "the children __ pizza for dinner?",
                            "you __ going to the beach?",
                        ].map((question, index) => {
                            const audioKey = `pg95_audio${index + 12}`;
                            const isCorrect =
                                results.questions3[index * 2] === true &&
                                results.questions3[index * 2 + 1] === true;

                            return (
                                <div key={index} className={styles.pg95Question}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(97 + index)}.</strong>
                                            <input
                                                type="text"
                                                value={inputValues.questions3[index * 2]}
                                                onChange={(e) =>
                                                    handleInputChange(e.target.value, index * 2, 'questions3')
                                                }
                                                className={styles.pg95InputBoxSmall}
                                            />
                                            {question.split('__')[0]}
                                            <input
                                                type="text"
                                                value={inputValues.questions3[index * 2 + 1]}
                                                onChange={(e) =>
                                                    handleInputChange(e.target.value, index * 2 + 1, 'questions3')
                                                }
                                                className={styles.pg95InputBoxSmall}
                                            />
                                            {question.split('__')[1]}
                                        </em>

                                        {/* Ícone de validação único para ambos os inputs */}
                                        {results.questions3[index * 2] !== null &&
                                            results.questions3[index * 2 + 1] !== null && (
                                                <img
                                                    src={isCorrect ? correct_icon : wrong_icon}
                                                    alt={isCorrect ? "Correct" : "Incorrect"}
                                                    className={styles.pg95CheckmarkImage}
                                                />
                                            )}

                                        {/* Ícone de áudio */}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles.pg95AdditionalIcon}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Short Answers (right side) */}
                    <div className={styles.pg95ShortAnswers}>
                        <table className={styles.pg95styledTableShortAnswers}>
                            <thead>
                            </thead>
                            <tbody>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="text"
                                                value={inputValues.shortAnswers3[index * 2]}
                                                onChange={(e) => handleInputChange(e.target.value, index * 2, 'shortAnswers3')}
                                                className={styles.pg95InputBoxColumn}
                                            />
                                            {results.shortAnswers3[index * 2] !== null && (
                                                <img
                                                    src={results.shortAnswers3[index * 2] ? correct_icon : wrong_icon}
                                                    alt={results.shortAnswers3[index * 2] ? "Correct" : "Incorrect"}
                                                    className={styles.pg95CheckmarkImage}
                                                />
                                            )}
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={inputValues.shortAnswers3[index * 2 + 1]}
                                                onChange={(e) => handleInputChange(e.target.value, index * 2 + 1, 'shortAnswers3')}
                                                className={styles.pg95InputBoxColumn}
                                            />
                                            {results.shortAnswers3[index * 2 + 1] !== null && (
                                                <img
                                                    src={results.shortAnswers3[index * 2 + 1] ? correct_icon : wrong_icon}
                                                    alt={results.shortAnswers3[index * 2 + 1] ? "Correct" : "Incorrect"}
                                                    className={styles.pg95CheckmarkImage}
                                                />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <button className={styles.pg95ButtonCheck} onClick={handleCheckClick}>
                <em>Check</em>
            </button>
        </div>
    );
};

export default pagina95;