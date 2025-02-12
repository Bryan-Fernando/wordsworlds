import React from 'react';

import styles from './pagina49.module.css';

import global_grammar from '../assets/audios/global_grammar.mp3';
import pg49_audio1 from '../assets/audios/pg49_audio1.mp3';
import pg49_audio2 from '../assets/audios/pg49_audio2.mp3';
import pg49_audio3 from '../assets/audios/pg49_audio3.mp3';
import pg49_audio4 from '../assets/audios/pg49_audio4.mp3';
import pg49_audio5 from '../assets/audios/pg49_audio5.mp3';
import pg49_audio6 from '../assets/audios/pg49_audio6.mp3';
import pg49_audio7 from '../assets/audios/pg49_audio7.mp3';
import pg49_audio8 from '../assets/audios/pg49_audio8.mp3';
import pg49_audio9 from '../assets/audios/pg49_audio9.mp3';
import pg49_audio10 from '../assets/audios/pg49_audio10.mp3';
import pg49_audio11 from '../assets/audios/pg49_audio11.mp3';
import pg49_audio12 from '../assets/audios/pg49_audio12.mp3';
import pg49_audio13 from '../assets/audios/pg49_audio13.mp3';
import pg49_audio14 from '../assets/audios/pg49_audio14.mp3';
import pg49_audio15 from '../assets/audios/pg49_audio15.mp3';
import pg49_audio16 from '../assets/audios/pg49_audio16.mp3';
import pg49_audio17 from '../assets/audios/pg49_audio17.mp3';
import pg49_audio18 from '../assets/audios/pg49_audio18.mp3';
import pg49_audio19 from '../assets/audios/pg49_audio19.mp3';
import pg49_audio20 from '../assets/audios/pg49_audio20.mp3';
import pg49_audio21 from '../assets/audios/pg49_audio21.mp3';
import pg49_audio22 from '../assets/audios/pg49_audio22.mp3';
import pg49_audio23 from '../assets/audios/pg49_audio23.mp3';
import pg49_audio24 from '../assets/audios/pg49_audio24.mp3';
import pg49_audio25 from '../assets/audios/pg49_audio25.mp3';
import pg49_audio26 from '../assets/audios/pg49_audio26.mp3';

const audioMap = {
    'global_grammar': global_grammar,
    'pg49_audio1': pg49_audio1,
    'pg49_audio2': pg49_audio2,
    'pg49_audio3': pg49_audio3,
    'pg49_audio4': pg49_audio4,
    'pg49_audio5': pg49_audio5,
    'pg49_audio6': pg49_audio6,
    'pg49_audio7': pg49_audio7,
    'pg49_audio8': pg49_audio8,
    'pg49_audio9': pg49_audio9,
    'pg49_audio10': pg49_audio10,
    'pg49_audio11': pg49_audio11,
    'pg49_audio12': pg49_audio12,
    'pg49_audio13': pg49_audio13,
    'pg49_audio14': pg49_audio14,
    'pg49_audio15': pg49_audio15,
    'pg49_audio16': pg49_audio16,
    'pg49_audio17': pg49_audio17,
    'pg49_audio18': pg49_audio18,
    'pg49_audio19': pg49_audio19,
    'pg49_audio20': pg49_audio20,
    'pg49_audio21': pg49_audio21,
    'pg49_audio22': pg49_audio22,
    'pg49_audio23': pg49_audio23,
    'pg49_audio24': pg49_audio24,
    'pg49_audio25': pg49_audio25,
    'pg49_audio26': pg49_audio26,
};

const playAudio = (audioKey) => {
    const audio = new Audio(audioMap[audioKey]);
    audio.play();
};

const Pagina49 = () => {
    return (
        <div>
            <div className={styles.pg49Container}>
                <header className={styles.pg49Header}>
                    <h1 className={styles.pg49HeaderH1} onClick={() => playAudio('global_grammar')}>
                        Grammar
                    </h1>
                    <div className={styles.pg49HeaderH2H3}>
                        <h2 className={styles.pg49HeaderH2} onClick={() => playAudio('pg49_audio1')}>
                            Demonstrative Pronouns
                        </h2>
                        <h3 className={styles.pg49HeaderH3} onClick={() => playAudio('pg49_audio2')}>
                            Pronomes Demonstrativos
                        </h3>
                    </div>
                </header>
                <main className={styles.pg49Main}>
                    <div className={styles.pg49MainDiv1}>
                        <p onClick={() => playAudio('pg49_audio3')}>
                            <span style={{ color: '#A61C28' }}>This</span> <br />
                            Este, esta, isto
                        </p>
                        <p onClick={() => playAudio('pg49_audio4')}>
                            <span style={{ color: '#A61C28' }}>That</span> <br />
                            Aquele, aquela, aquilo
                        </p>
                        <p onClick={() => playAudio('pg49_audio5')}>
                            <span style={{ color: '#A61C28' }}>These</span> <br />
                            Estes, estas
                        </p>
                        <p onClick={() => playAudio('pg49_audio6')}>
                            <span style={{ color: '#A61C28' }}>Those</span> <br />
                            Aqueles, aquelas
                        </p>
                    </div>
                    <div>
                        <p className={styles.pg49Exemplo}>Exemplos:</p>
                        <div className={styles.ContainerDivs}>
                            <div className={styles.pg49MainDiv2}>
                                <ul className={styles.pg49Listas}>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio7')}>
                                        <span className={styles.pg49TextRed}>This is <span className={styles.underline}>my</span> cat.</span>
                                    </li>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio8')}>
                                        <span>Esta é <span className={styles.underline}>minha</span> gata.</span>
                                    </li>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio9')}>
                                        <span className={styles.pg49TextRed}>These are <span className={styles.underline}>his</span> friends.</span>
                                    </li>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio10')}>
                                        <span>Estes são os amigos <span className={styles.underline}>dele</span>.</span>
                                    </li>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio11')}>
                                        <span className={styles.pg49TextRed}>Those are <span className={styles.underline}>my</span> parents.</span>
                                    </li>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio12')}>
                                        <span>Esses são <span className={styles.underline}>meus</span> pais.</span>
                                    </li>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio13')}>
                                        <span className={styles.pg49TextRed}>Those are <span className={styles.underline}>your</span> shoes.</span>
                                    </li>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio14')}>
                                        <span>Esses são <span className={styles.underline}>seus</span> sapatos.</span>
                                    </li>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio15')}>
                                        <span className={styles.pg49TextRed}>This is <span className={styles.underline}>our</span> school.</span>
                                    </li>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio16')}>
                                        <span>Este é <span className={styles.underline}>nosso</span> colégio.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.pg49MainDiv3}>
                                <ul className={styles.pg49Listas}>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio17')}>
                                        <span className={styles.pg49TextRed}>Those are <span className={styles.underline}>his</span> sunglasses.</span>
                                    </li>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio18')}>
                                        <span>Esses são os óculos de sol <span className={styles.underline}>dele</span>.</span>
                                    </li>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio19')}>
                                        <span className={styles.pg49TextRed}>These are <span className={styles.underline}>their</span> favorite flowers.</span>
                                    </li>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio20')}>
                                        <span>Estas são as flores favoritas <span className={styles.underline}>deles</span>.</span>
                                    </li>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio21')}>
                                        <span className={styles.pg49TextRed}>That is <span className={styles.underline}>her</span> laptop.</span>
                                    </li>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio22')}>
                                        <span>Aquele é o laptop <span className={styles.underline}>dela</span>.</span>
                                    </li>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio23')}>
                                        <span className={styles.pg49TextRed}>Those are <span className={styles.underline}>our</span> classmates.</span>
                                    </li>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio24')}>
                                        <span>Aqueles são <span className={styles.underline}>nossos</span> colegas de classe.</span>
                                    </li>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio25')}>
                                        <span className={styles.pg49TextRed}>That is not <span className={styles.underline}>your</span> umbrella.</span>
                                    </li>
                                    <li className={styles.pg49Item} onClick={() => playAudio('pg49_audio26')}>
                                        <span>Aquele não é <span className={styles.underline}>seu</span> guarda-chuva.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    );
};

export default Pagina49;
