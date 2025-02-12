import React, { useState, useRef } from 'react';

import styles from './pagina34.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import global_verbo_to_be from '../assets/audios/global_verbo_to_be.mp3';
import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present from '../assets/audios/global_simple_present.mp3';
import afirmativaAudio from '../assets/audios/afirmativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg34Audio1 from '../assets/audios/pg34_audio1.mp3';
import pg34Audio2 from '../assets/audios/pg34_audio2.mp3';
import pg34Audio3 from '../assets/audios/pg34_audio3.mp3';
import pg34Audio4 from '../assets/audios/pg34_audio4.mp3';
import traducaoAudio1 from '../assets/audios/pg34_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg34_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg34_trad3.mp3';
import traducaoAudio4 from '../assets/audios/pg34_trad4.mp3';
import pg5Audio2 from '../assets/audios/pg5_audio2.mp3';
import traducao5Audio1 from '../assets/audios/pg5_trad1.mp3';
import pg26Audio2 from '../assets/audios/pg26_audio2.mp3';
import pg9Audio1 from '../assets/audios/pg9_audio1.mp3';
import traducao9Audio1 from '../assets/audios/pg9_trad1.mp3';
import traducao26Audio2 from '../assets/audios/pg26_trad2.mp3';
import pg30Audio1 from '../assets/audios/pg30_audio1.mp3';
import traducao30Audio1 from '../assets/audios/pg30_trad1.mp3';
const Pagina34 = () => {
    const [inputValues, setInputValues] = useState(
        Array(2).fill(Array(6).fill(''))
    );
    const currentAudioRef = useRef(null);

    const playAudio = (audioFile) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }
        const audio = new Audio(audioFile);
        currentAudioRef.current = audio;
        audio.play();
    };

    const handleInputChange = (rowIndex, colIndex, e) => {
        const newValue = e.target.value;
        const updatedValues = inputValues.map((row, i) =>
            row.map((value, j) => (i === rowIndex && j === colIndex ? newValue : value))
        );
        setInputValues(updatedValues);
    };

    return (
        <div>
            <div className={styles.pg34Container}>
                <header className={styles.pg34Header}>
                    <h1 className={styles.pg34AudioText}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles.pg34Icon}
                            onClick={() => playAudio(global_grammar)}
                        />
                    </h1>
                    <h2 className={styles.pg34AudioText} style={{ color: "black" }}>
                        Simple Present (Presente Simples)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles.pg34Icon}
                            onClick={() => playAudio(global_simple_present)}
                        />
                    </h2>
                    <h3 className={styles.pg34AudioText}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese Audio"
                            className={styles.pg34Icon}
                            onClick={() => playAudio(global_verbo_to_be)}
                        />
                    </h3>
                </header>
                <main className={styles.pg34Main}>
                    <div>
                        <div
                            className={styles.pg34TableHeader}
                            onClick={() => playAudio(afirmativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                className={styles.page__icon__left}
                            />
                            AFFIRMATIVE
                        </div>
                        <table className={styles.pg34StyledTable}>
                            <colgroup>
                                <col className={styles.pg34Sujeito} />
                                <col className={styles.pg34verbo_auxiliar} />
                                <col className={styles.pg34Adverbio} />
                                <col className={styles.pg34Verbo} />
                                <col className={styles.pg34ObjetivoComplemento} />
                                <col className={styles.pg34Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>
                                        Sujeito
                                    </th>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>
                                        'Not' <br /> Adverb
                                    </th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: 'pointer' }}>
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>
                                        Translation
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    
                                >
                                    <td className={styles.page__table__subject}onClick={() => playAudio(pg5Audio2)}
                                    style={{ cursor: 'pointer', textAlign: 'center'  }} >I</td>
                                    <td className={styles.page__table__auxiliary} onClick={() => playAudio(pg5Audio2)}
                                    style={{ cursor: 'pointer', textAlign: 'center'  }}>am</td>
                                    <td className={styles.page__table__adverb}></td>
                                    <td className={styles.page__table__verb}></td>
                                    <td className={styles.page__table__complement} onClick={() => playAudio(pg5Audio2)}
                                    style={{ cursor: 'pointer'}}>at work</td>
                                    <td className={styles.page__table__translation} onClick={() => playAudio(traducao5Audio1)}
                                    style={{ cursor: 'pointer'}}>Eu estou no trabalho</td>
                                </tr>
                                <tr>
                                    <td className={styles.pg34Sujeito} onClick={() => playAudio(pg34Audio1)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        I
                                    </td>
                                    <td className={styles.pg34verbo_auxiliar} onClick={() => playAudio(pg34Audio1)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        'm
                                    </td>
                                    <td className={styles.pg34Adverbio}>
                                    </td>
                                    <td className={styles.pg34Verbo}></td>
                                    <td className={styles.pg34ObjetivoComplemento} onClick={() => playAudio(pg34Audio1)} style={{ cursor: 'pointer' }}>
                                        the Spanish teacher
                                    </td>
                                    <td className={styles.pg34Traducao} onClick={() => playAudio(traducaoAudio1)} style={{ cursor: 'pointer' }}>
                                        Eu  sou o professor de espanhol
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.pg34StyledTable}>
                            <colgroup>
                                <col className={styles.pg34Sujeito} />
                                <col className={styles.pg34verbo_auxiliar} />
                                <col className={styles.pg34Adverbio} />
                                <col className={styles.pg34Verbo} />
                                <col className={styles.pg34ObjetivoComplemento} />
                                <col className={styles.pg34Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>
                                        Sujeito
                                    </th>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>
                                        'Not' <br /> Adverb
                                    </th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: 'pointer' }}>
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>
                                        Translation
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles.pg34Sujeito} onClick={() => playAudio(pg34Audio2)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        He
                                    </td>
                                    <td className={styles.pg34verbo_auxiliar} onClick={() => playAudio(pg34Audio2)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        is
                                    </td>
                                    <td className={styles.pg34Adverbio}></td>
                                    <td className={styles.pg34Verbo}></td>
                                    <td className={styles.pg34ObjetivoComplemento} onClick={() => playAudio(pg34Audio2)} style={{ cursor: 'pointer' }}>
                                        at work
                                    </td>
                                    <td className={styles.pg34Traducao} onClick={() => playAudio(traducaoAudio2)} style={{ cursor: 'pointer' }}>
                                        Ele  está no trabalho
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.pg34Sujeito} onClick={() => playAudio(pg34Audio3)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        She
                                    </td>
                                    <td className={styles.pg34verbo_auxiliar} onClick={() => playAudio(pg34Audio3)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        is
                                    </td>
                                    <td className={styles.pg34Adverbio}></td>
                                    <td className={styles.pg34Verbo}></td>
                                    <td className={styles.pg34ObjetivoComplemento} onClick={() => playAudio(pg34Audio3)} style={{ cursor: 'pointer' }}>
                                        27 years old
                                    </td>
                                    <td className={styles.pg34Traducao} onClick={() => playAudio(traducaoAudio3)} style={{ cursor: 'pointer' }}>
                                        Ela  tem 27 anos
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.pg34Sujeito} onClick={() => playAudio(pg34Audio4)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        It
                                    </td>
                                    <td className={styles.pg34verbo_auxiliar} onClick={() => playAudio(pg34Audio4)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        is
                                    </td>
                                    <td className={styles.pg34Adverbio}></td>
                                    <td className={styles.pg34Verbo}></td>
                                    <td className={styles.pg34ObjetivoComplemento} onClick={() => playAudio(pg34Audio4)} style={{ cursor: 'pointer' }}>
                                        sunny
                                    </td>
                                    <td className={styles.pg34Traducao} onClick={() => playAudio(traducaoAudio4)} style={{ cursor: 'pointer' }}>
                                        Está ensolarado
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.pg34StyledTable}>
                            <colgroup>
                                <col className={styles.pg34Sujeito} />
                                <col className={styles.pg34verbo_auxiliar} />
                                <col className={styles.pg34Adverbio} />
                                <col className={styles.pg34Verbo} />
                                <col className={styles.pg34ObjetivoComplemento} />
                                <col className={styles.pg34Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>
                                        Sujeito
                                    </th>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>
                                        'Not' <br /> Adverb
                                    </th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: 'pointer' }}>
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>
                                        Translation
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        className={styles.pg26Sujeito}
                                        onClick={() => playAudio(pg26Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        We
                                    </td>
                                    <td
                                        className={styles.pg26verbo_auxiliar}
                                        onClick={() => playAudio(pg26Audio2)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        are
                                    </td>
                                    <td className={styles.pg26Adverbio}></td>
                                    <td className={styles.pg26Verbo}></td>
                                    <td
                                        className={styles.pg26ObjetivoComplemento}
                                        onClick={() => playAudio(pg26Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        at the (cinema/the movie/theater)
                                    </td>
                                    <td
                                        className={styles.pg26Traducao}
                                        onClick={() => playAudio(traducao26Audio2)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Nós estamos no cinema
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg9Sujeito}
                                        onClick={() => playAudio(pg9Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        You
                                    </td>
                                    <td
                                        className={styles.pg9verbo_auxiliar}
                                        onClick={() => playAudio(pg9Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        are
                                    </td>
                                    <td className={styles.pg9Adverbio}></td>
                                    <td className={styles.pg9Verbo}></td>
                                    <td
                                        className={styles.pg9ObjetivoComplemento}
                                        onClick={() => playAudio(pg9Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        the new director
                                    </td>
                                    <td
                                        className={styles.pg9Traducao}
                                        onClick={() => playAudio(traducao9Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Você é o novo diretor.
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles.pg30Sujeito}
                                        onClick={() => playAudio(pg30Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        They
                                    </td>
                                    <td
                                        className={styles.pg30verbo_auxiliar}
                                        onClick={() => playAudio(pg30Audio1)}
                                        style={{ cursor: 'pointer', textAlign: 'center' }}
                                    >
                                        are
                                    </td>
                                    <td className={styles.pg30Adverbio}></td>
                                    <td className={styles.pg30Verbo}></td>
                                    <td
                                        className={styles.pg30ObjetivoComplemento}
                                        onClick={() => playAudio(pg30Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        from Brazil
                                    </td>
                                    <td
                                        className={styles.pg30Traducao}
                                        onClick={() => playAudio(traducao30Audio1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Eles/Elas são do Brasil.
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.pg34StyledTable}>
                            <colgroup>
                                <col className={styles.pg34Sujeito} />
                                <col className={styles.pg34verbo_auxiliar} />
                                <col className={styles.pg34Adverbio} />
                                <col className={styles.pg34Verbo} />
                                <col className={styles.pg34ObjetivoComplemento} />
                                <col className={styles.pg34Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br /> Adverb</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: 'pointer' }}>
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Translation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValues.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    className={styles.pg34InputCell}
                                                    value={value}
                                                    onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
                                                    rows="1"
                                                    style={{
                                                        resize: 'none',
                                                        overflowWrap: 'break-word',
                                                        wordWrap: 'break-word',
                                                    }}
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina34;
