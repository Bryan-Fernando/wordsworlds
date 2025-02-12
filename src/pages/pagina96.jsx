import React, { useState } from 'react';

import styles from './pagina96.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina96_imagem1 from '../assets/images/pagina96_imagem1.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg96_audio1e from '../assets/audios/pg96_audio1e.mp3';
import pg96_audio1p from '../assets/audios/pg96_audio1p.mp3';
import pg96_audio11e from '../assets/audios/pg96_audio11e.mp3';
import pg96_audio11p from '../assets/audios/pg96_audio11p.mp3';
import pg96_audio2 from '../assets/audios/pg96_audio2.mp3';
import pg96_audio3 from '../assets/audios/pg96_audio3.mp3';
import pg96_audio4 from '../assets/audios/pg96_audio4.mp3';
import pg96_audio5 from '../assets/audios/pg96_audio5.mp3';
import pg96_audio6 from '../assets/audios/pg96_audio6.mp3';
import pg96_audio7 from '../assets/audios/pg96_audio7.mp3';
import pg96_audio8 from '../assets/audios/pg96_audio8.mp3';
import pg96_audio9 from '../assets/audios/pg96_audio9.mp3';
import pg96_audio10 from '../assets/audios/pg96_audio10.mp3';
import pg96_audio12 from '../assets/audios/pg96_audio12.mp3';
import pg96_audio13 from '../assets/audios/pg96_audio13.mp3';
import pg96_audio14 from '../assets/audios/pg96_audio14.mp3';
import pg96_audio15 from '../assets/audios/pg96_audio15.mp3';

const Pagina96 = () => {
    const [inputValues, setInputValues] = useState({
        questions1: Array(10).fill(''),
        questions2: Array(8).fill(''),
        questions3: Array(4).fill('')
    });

    const [results, setResults] = useState({
        questions1: Array(5).fill(null),
        questions2: Array(4).fill(null),
        questions3: Array(4).fill(null)
    });

    const correctAnswers = {
        questions1: [
            ['does', 'go'],
            ['do', 'eat'],
            ['does', 'read'],
            ['do', 'migrate'],
            ['do', 'visit']
        ],
        questions2: [
            ['does', 'wake up'],
            ['do', 'take'],
            ['does', 'eat'],
            ['do', 'check']
        ],
        questions3: [
            'when does she finish her homework?',
            'how often do they clean the house?',
            'what time does the shop open?',
            'who cooks dinner for your family?'
        ]
    };

    const audioMap = {
        global_learning_le_e,
        global_learning_le_p,
        pg96_audio1e,
        pg96_audio1p,
        pg96_audio2,
        pg96_audio3,
        pg96_audio4,
        pg96_audio5,
        pg96_audio6,
        pg96_audio7,
        pg96_audio8,
        pg96_audio9,
        pg96_audio10,
        pg96_audio11e,
        pg96_audio11p,
        pg96_audio12,
        pg96_audio13,
        pg96_audio14,
        pg96_audio15
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
        const newResults = {
            questions1: correctAnswers.questions1.map((correctPair, index) => {
                const userPair = [
                    inputValues.questions1[index * 2]?.trim().toLowerCase(),
                    inputValues.questions1[index * 2 + 1]?.trim().toLowerCase()
                ];
                return JSON.stringify(userPair) === JSON.stringify(correctPair) && userPair.every(val => val !== '')
                    ? correct_icon
                    : wrong_icon;
            }),
            questions2: correctAnswers.questions2.map((correctPair, index) => {
                const userPair = [
                    inputValues.questions2[index * 2]?.trim().toLowerCase(),
                    inputValues.questions2[index * 2 + 1]?.trim().toLowerCase()
                ];
                return JSON.stringify(userPair) === JSON.stringify(correctPair) && userPair.every(val => val !== '')
                    ? correct_icon
                    : wrong_icon;
            }),
            questions3: correctAnswers.questions3.map((correctAnswer, index) => {
                return inputValues.questions3[index].trim().toLowerCase() === correctAnswer.toLowerCase() && inputValues.questions3[index].trim() !== ''
                    ? correct_icon
                    : wrong_icon;
            })
        };

        setResults(newResults);
    };

    const handleInputChange = (value, index, questionSet) => {
        setInputValues(prevState => ({
            ...prevState,
            [questionSet]: prevState[questionSet].map((item, idx) =>
                idx === index ? value : item
            ),
        }));
    };


    return (
        <div className={styles.pg96Container}>
            <header className={styles.pg96Header}>
                <h1 className={styles.pg96H1}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles.pg96HeaderIcon}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles.pg96HeaderIcon}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
            </header>

            <main className={styles.pg96Main}>
                {/* Questão 4 */}
                <div className={styles.pg69tabelaInterrogativaContainer}>
                    <div className={styles.pg69tableHeaderInterrogativa}>INTERROGATIVA</div>
                    <table className={styles.pg69styledTableInterrogativa}>
                        <thead className={styles.pg69Thead}>
                            <tr className={styles.pg69celulatable}>
                                <th>Palavras <br /> Interrogativas</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th>Sujeito</th>
                                <th><span className={styles.highlight}>Not</span> <br />Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto <br /> Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className={styles.pg95Questions1}>
                    <div className={styles.pg95Question}>
                        <span>
                            <p>4. Make questions with the verbs in parentheses.
                                <img
                                    src={eng_audio_icon}
                                    alt="Audio English"
                                    className={styles.pg96HeaderIcon}
                                    onClick={() => playAudio("pg96_audio1e")}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Audio Portuguese"
                                    className={styles.pg96HeaderIcon}
                                    onClick={() => playAudio("pg96_audio1p")}
                                />
                            </p>
                            <em><strong>a.</strong> <input type="text" value={inputValues.questions1[0]} onChange={(e) => handleInputChange(e.target.value, 0, 'questions1')} className={styles.pg95InputBoxSmall} /> she <input type="text" value={inputValues.questions1[1]} onChange={(e) => handleInputChange(e.target.value, 1, 'questions1')} className={styles.pg95InputBoxSmall} /> (go) to the gym every day?</em>
                            {results.questions1[0] && <img src={results.questions1[0]} alt="Result" className={styles.icon} />}
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.pg95AudioIcon}
                                onClick={() => playAudio("pg96_audio2")}
                            />
                        </span>
                    </div>
                    <div className={styles.pg95Question}>
                        <span>
                            <em><strong>b.</strong> <input type="text" value={inputValues.questions1[2]} onChange={(e) => handleInputChange(e.target.value, 2, 'questions1')} className={styles.pg95InputBoxSmall} /> they <input type="text" value={inputValues.questions1[3]} onChange={(e) => handleInputChange(e.target.value, 3, 'questions1')} className={styles.pg95InputBoxSmall} /> (eat) out often?</em>
                            {results.questions1[1] && <img src={results.questions1[1]} alt="Result" className={styles.icon} />}
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.pg95AudioIcon}
                                onClick={() => playAudio("pg96_audio3")}
                            />
                        </span>
                    </div>

                    <div className={styles.pg95Question}>
                        <span>
                            <em><strong>c.</strong> <input type="text" value={inputValues.questions1[4]} onChange={(e) => handleInputChange(e.target.value, 4, 'questions1')} className={styles.pg95InputBoxSmall} /> he <input type="text" value={inputValues.questions1[5]} onChange={(e) => handleInputChange(e.target.value, 5, 'questions1')} className={styles.pg95InputBoxSmall} /> (read) newspapers regularly?</em>
                            {results.questions1[2] && <img src={results.questions1[2]} alt="Result" className={styles.icon} />}
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.pg95AudioIcon}
                                onClick={() => playAudio("pg96_audio4")}
                            />
                        </span>
                    </div>

                    <div className={styles.pg95Question}>
                        <span>
                            <em><strong>d.</strong> <input type="text" value={inputValues.questions1[6]} onChange={(e) => handleInputChange(e.target.value, 6, 'questions1')} className={styles.pg95InputBoxSmall} /> the birds <input type="text" value={inputValues.questions1[7]} onChange={(e) => handleInputChange(e.target.value, 7, 'questions1')} className={styles.pg95InputBoxSmall} /> (migrate) in winter?</em>
                            {results.questions1[3] && <img src={results.questions1[3]} alt="Result" className={styles.icon} />}
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.pg95AudioIcon}
                                onClick={() => playAudio("pg96_audio5")}
                            />
                        </span>
                    </div>

                    <div className={styles.pg95Question}>
                        <span>
                            <em><strong>e.</strong> <input type="text" value={inputValues.questions1[8]} onChange={(e) => handleInputChange(e.target.value, 8, 'questions1')} className={styles.pg95InputBoxSmall} /> you <input type="text" value={inputValues.questions1[9]} onChange={(e) => handleInputChange(e.target.value, 9, 'questions1')} className={styles.pg95InputBoxSmall} /> (visit) your relatives yearly?</em>
                            {results.questions1[4] && <img src={results.questions1[4]} alt="Result" className={styles.icon} />}
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.pg95AudioIcon}
                                onClick={() => playAudio("pg96_audio6")}
                            />
                        </span>
                    </div>

                </div>

                {/* Questão 5 */}
                <div className={styles.pg69tabelaInterrogativaContainer}>
                    <div className={styles.pg69tableHeaderInterrogativa}>INTERROGATIVA</div>
                    <table className={styles.pg69styledTableInterrogativa}>
                        <thead className={styles.pg69Thead}>
                            <tr className={styles.pg69celulatable}>
                                <th>Palavras <br /> Interrogativas</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th>Sujeito</th>
                                <th><span className={styles.highlight}>Not</span> <br />Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto <br /> Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className={styles.pg95Questions2}>
                    <div className={styles.pg95Question}>
                        <span>
                            <p>5. Make questions with the verbs in parentheses.
                                <img
                                    src={eng_audio_icon}
                                    alt="Audio English"
                                    className={styles.pg96HeaderIcon}
                                    onClick={() => playAudio("pg96_audio1e")}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Audio Portuguese"
                                    className={styles.pg96HeaderIcon}
                                    onClick={() => playAudio("pg96_audio1p")}
                                />
                            </p>
                            <em><strong>a.</strong> <input type="text" value={inputValues.questions2[0]} onChange={(e) => handleInputChange(e.target.value, 0, 'questions2')} className={styles.pg95InputBoxSmall} /> she <input type="text" value={inputValues.questions2[1]} onChange={(e) => handleInputChange(e.target.value, 1, 'questions2')} className={styles.pg95InputBoxSmall} /> (wake up) early in the morning?</em>
                            {results.questions2[0] && <img src={results.questions2[0]} alt="Result" className={styles.icon} />}
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.pg95AudioIcon}
                                onClick={() => playAudio("pg96_audio7")}
                            />
                        </span>
                    </div>

                    <div className={styles.pg95Question}>
                        <span>
                            <em><strong>b.</strong> <input type="text" value={inputValues.questions2[2]} onChange={(e) => handleInputChange(e.target.value, 2, 'questions2')} className={styles.pg95InputBoxSmall} /> they <input type="text" value={inputValues.questions2[3]} onChange={(e) => handleInputChange(e.target.value, 3, 'questions2')} className={styles.pg95InputBoxSmall} /> (take) the bus to work?</em>
                            {results.questions2[1] && <img src={results.questions2[1]} alt="Result" className={styles.icon} />}
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.pg95AudioIcon}
                                onClick={() => playAudio("pg96_audio8")}
                            />
                        </span>
                    </div>

                    <div className={styles.pg95Question}>
                        <span>
                            <em><strong>c.</strong> <input type="text" value={inputValues.questions2[4]} onChange={(e) => handleInputChange(e.target.value, 4, 'questions2')} className={styles.pg95InputBoxSmall} /> he <input type="text" value={inputValues.questions2[5]} onChange={(e) => handleInputChange(e.target.value, 5, 'questions2')} className={styles.pg95InputBoxSmall} /> (eat) breakfast before leaving?</em>
                            {results.questions2[2] && <img src={results.questions2[2]} alt="Result" className={styles.icon} />}
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.pg95AudioIcon}
                                onClick={() => playAudio("pg96_audio9")}
                            />
                        </span>
                    </div>

                    <div className={styles.pg95Question}>
                        <span>
                            <em><strong>d.</strong> <input type="text" value={inputValues.questions2[6]} onChange={(e) => handleInputChange(e.target.value, 6, 'questions2')} className={styles.pg95InputBoxSmall} /> you <input type="text" value={inputValues.questions2[7]} onChange={(e) => handleInputChange(e.target.value, 7, 'questions2')} className={styles.pg95InputBoxSmall} /> (check) your emails first thing in the morning?</em>
                            {results.questions2[3] && <img src={results.questions2[3]} alt="Result" className={styles.icon} />}
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.pg95AudioIcon}
                                onClick={() => playAudio("pg96_audio10")}
                            />
                        </span>
                    </div>
                </div>


                {/* Questão 6 */}
                <div className={styles.pg69tabelaInterrogativaContainer}>
                    <div className={styles.pg69tableHeaderInterrogativa}>INTERROGATIVA</div>
                    <table className={styles.pg69styledTableInterrogativa}>
                        <thead className={styles.pg69Thead}>
                            <tr className={styles.pg69celulatable}>
                                <th>Palavras <br /> Interrogativas</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th>Sujeito</th>
                                <th><span className={styles.highlight}>Not</span> <br />Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto <br /> Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className={styles.pg96Container3}>
                    {/* Adicionando os bloquinhos acima da alternativa A  */}


                    <div className={styles.pg96Questions3}>
                        <p>6. Make questions using the words from the box:
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.pg96HeaderIcon}
                                onClick={() => playAudio("pg96_audio11e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Audio Portuguese"
                                className={styles.pg96HeaderIcon}
                                onClick={() => playAudio("pg96_audio11p")}
                            />
                        </p>


                        <div className={styles.pg96Question}>
                            <div className={styles.pg96QuestionWordsContainer}>
                                <div className={styles.pg96QuestionWord}>When</div>
                                <div className={styles.pg96QuestionWord}>How often</div>
                                <div className={styles.pg96QuestionWord}>Who</div>
                                <div className={styles.pg96QuestionWord}>What time</div>
                            </div>
                            <em><strong>a.</strong> She finishes her homework before dinner.</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.pg96Q3Icon}
                                onClick={() => playAudio("pg96_audio12")}
                            />
                        </div>
                        <input
                            type="text"
                            value={inputValues.questions3[0]}
                            onChange={(e) => handleInputChange(e.target.value, 0, 'questions3')}
                            className={styles.pg96inputboxquestion3}
                        />
                        {results.questions3[0] && <img src={results.questions3[0]} alt="Result" className={styles.pg96Icon} />}

                        <div className={styles.pg96Question}>
                            <em><strong>b.</strong> They clean the house every Saturday.</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.pg96Q3Icon}
                                onClick={() => playAudio("pg96_audio13")}
                            />
                        </div>
                        <input
                            type="text"
                            value={inputValues.questions3[1]}
                            onChange={(e) => handleInputChange(e.target.value, 1, 'questions3')}
                            className={styles.pg96inputboxquestion3}
                        />
                        {results.questions3[1] && <img src={results.questions3[1]} alt="Result" className={styles.pg96Icon} />}

                        <div className={styles.pg96Question}>
                            <em><strong>c.</strong> The shop opens at 9:00 AM.</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.pg96Q3Icon}
                                onClick={() => playAudio("pg96_audio14")}
                            />
                        </div>
                        <input
                            type="text"
                            value={inputValues.questions3[2]}
                            onChange={(e) => handleInputChange(e.target.value, 2, 'questions3')}
                            className={styles.pg96inputboxquestion3}
                        />
                        {results.questions3[2] && <img src={results.questions3[2]} alt="Result" className={styles.pg96Icon} />}

                        <div className={styles.pg96Question}>
                            <em><strong>d.</strong> I cook dinner for my family.</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.pg96Q3Icon}
                                onClick={() => playAudio("pg96_audio15")}
                            />
                        </div>
                        <input
                            type="text"
                            value={inputValues.questions3[3]}
                            onChange={(e) => handleInputChange(e.target.value, 3, 'questions3')}
                            className={styles.pg96inputboxquestion3}
                        />
                        {results.questions3[3] && <img src={results.questions3[3]} alt="Result" className={styles.pg96Icon} />}

                    </div>

                    <div className={styles.pg96ContainerImagem}>
                        <img className={styles.pg96imagem} src={pagina96_imagem1} alt="" />
                    </div>
                </div>


                <button className={styles.pg96CheckButton} onClick={handleCheckClick}><em>Check</em></button>
            </main>
        </div>
    );
};

export default Pagina96;
