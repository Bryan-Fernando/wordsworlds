import React, { useRef } from 'react';
import styles from './pagina57.module.css';
import pagina57_imagem1 from '../assets/images/pagina57_imagem1.webp';
import pagina57_imagem2 from '../assets/images/pagina57_imagem2.webp';
import eIcon from '../assets/icons/eIcon.png';
import pIcon from '../assets/icons/pIcon.png';

// Importação dos áudios do cabeçalho
import pg57_audio1e from '../assets/audios/pg57_audio1e.mp3';
import pg57_audio1p from '../assets/audios/pg57_audio1p.mp3';

// Importação dos áudios restantes (do 2 ao 51)
import pg57_audio2 from '../assets/audios/pg57_audio2.mp3';
import pg57_audio3 from '../assets/audios/pg57_audio3.mp3';
import pg57_audio4 from '../assets/audios/pg57_audio4.mp3';
import pg57_audio5 from '../assets/audios/pg57_audio5.mp3';
import pg57_audio6 from '../assets/audios/pg57_audio6.mp3';
import pg57_audio7 from '../assets/audios/pg57_audio7.mp3';
import pg57_audio8 from '../assets/audios/pg57_audio8.mp3';
import pg57_audio9 from '../assets/audios/pg57_audio9.mp3';
import pg57_audio10 from '../assets/audios/pg57_audio10.mp3';
import pg57_audio11 from '../assets/audios/pg57_audio11.mp3';
import pg57_audio12 from '../assets/audios/pg57_audio12.mp3';
import pg57_audio13 from '../assets/audios/pg57_audio13.mp3';
import pg57_audio14 from '../assets/audios/pg57_audio14.mp3';
import pg57_audio15 from '../assets/audios/pg57_audio15.mp3';
import pg57_audio16 from '../assets/audios/pg57_audio16.mp3';
import pg57_audio17 from '../assets/audios/pg57_audio17.mp3';
import pg57_audio18 from '../assets/audios/pg57_audio18.mp3';
import pg57_audio19 from '../assets/audios/pg57_audio19.mp3';
import pg57_audio20 from '../assets/audios/pg57_audio20.mp3';
import pg57_audio21 from '../assets/audios/pg57_audio21.mp3';
import pg57_audio22 from '../assets/audios/pg57_audio22.mp3';
import pg57_audio23 from '../assets/audios/pg57_audio23.mp3';
import pg57_audio24 from '../assets/audios/pg57_audio24.mp3';
import pg57_audio25 from '../assets/audios/pg57_audio25.mp3';
import pg57_audio26 from '../assets/audios/pg57_audio26.mp3';
import pg57_audio27 from '../assets/audios/pg57_audio27.mp3';
import pg57_audio28 from '../assets/audios/pg57_audio28.mp3';
import pg57_audio29 from '../assets/audios/pg57_audio29.mp3';
import pg57_audio30 from '../assets/audios/pg57_audio30.mp3';
import pg57_audio31 from '../assets/audios/pg57_audio31.mp3';
import pg57_audio32 from '../assets/audios/pg57_audio32.mp3';
import pg57_audio33 from '../assets/audios/pg57_audio33.mp3';
import pg57_audio34 from '../assets/audios/pg57_audio34.mp3';
import pg57_audio35 from '../assets/audios/pg57_audio35.mp3';
import pg57_audio36 from '../assets/audios/pg57_audio36.mp3';
import pg57_audio37 from '../assets/audios/pg57_audio37.mp3';
import pg57_audio38 from '../assets/audios/pg57_audio38.mp3';
import pg57_audio39 from '../assets/audios/pg57_audio39.mp3';
import pg57_audio40 from '../assets/audios/pg57_audio40.mp3';
import pg57_audio41 from '../assets/audios/pg57_audio41.mp3';
import pg57_audio42 from '../assets/audios/pg57_audio42.mp3';
import pg57_audio43 from '../assets/audios/pg57_audio43.mp3';
import pg57_audio44 from '../assets/audios/pg57_audio44.mp3';
import pg57_audio45 from '../assets/audios/pg57_audio45.mp3';
import pg57_audio46 from '../assets/audios/pg57_audio46.mp3';
import pg57_audio47 from '../assets/audios/pg57_audio47.mp3';
import pg57_audio48 from '../assets/audios/pg57_audio48.mp3';
import pg57_audio49 from '../assets/audios/pg57_audio49.mp3';
import pg57_audio50 from '../assets/audios/pg57_audio50.mp3';
import pg57_audio51 from '../assets/audios/pg57_audio51.mp3';

const Pagina57 = () => {

    const audioMap = {
        pg57_audio1e,
        pg57_audio1p,
        pg57_audio2,
        pg57_audio3,
        pg57_audio4,
        pg57_audio5,
        pg57_audio6,
        pg57_audio7,
        pg57_audio8,
        pg57_audio9,
        pg57_audio10,
        pg57_audio11,
        pg57_audio12,
        pg57_audio13,
        pg57_audio14,
        pg57_audio15,
        pg57_audio16,
        pg57_audio17,
        pg57_audio18,
        pg57_audio19,
        pg57_audio20,
        pg57_audio21,
        pg57_audio22,
        pg57_audio23,
        pg57_audio24,
        pg57_audio25,
        pg57_audio26,
        pg57_audio27,
        pg57_audio28,
        pg57_audio29,
        pg57_audio30,
        pg57_audio31,
        pg57_audio32,
        pg57_audio33,
        pg57_audio34,
        pg57_audio35,
        pg57_audio36,
        pg57_audio37,
        pg57_audio38,
        pg57_audio39,
        pg57_audio40,
        pg57_audio41,
        pg57_audio42,
        pg57_audio43,
        pg57_audio44,
        pg57_audio45,
        pg57_audio46,
        pg57_audio47,
        pg57_audio48,
        pg57_audio49,
        pg57_audio50,
        pg57_audio51,
    };

    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
        if (currentAudio.current) {
            currentAudio.current.pause();
            currentAudio.current.currentTime = 0;
        }

        const audio = new Audio(audioMap[audioId]);
        currentAudio.current = audio;
        audio.play();
    };

    return (
        <div>
            <div className={styles['page57__container']}>
                <header className={styles['page57__header']}>
                    <h1 className={styles['page57__title']}>
                        Asking and Giving <br /> Personal - Information
                        <img
                            src={eIcon}
                            alt="English Audio"
                            className={styles['page57__icon']}
                            onClick={() => playAudio('pg57_audio1e')}
                        />
                        <img
                            src={pIcon}
                            alt="Portuguese Audio"
                            className={styles['page57__icon']}
                            onClick={() => playAudio('pg57_audio1p')}
                        />
                    </h1>
                    <h1 className={styles['page57__title']}>Vocabulary: Numbers 0-10</h1>
                </header>
                <main className={styles['page57__main']}>
                    <div className={styles['page57__numbers']}>
                        {[...Array(11)].map((_, index) => (
                            <div key={index} onClick={() => playAudio(`pg57_audio${index + 2}`)} style={{ cursor: 'pointer' }}>
                                <div className={styles['page57__number-box']}>
                                    <p>{index}</p>
                                </div>
                                <p>{["zero (oh)", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"][index]}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles['page57__contacts']}>
                        <div className={styles['page57__contacts-content']}>
                            <div>
                                <h2 className={styles['page57__title--phone']} onClick={() => playAudio('pg57_audio13')} style={{ cursor: 'pointer' }}>
                                    Phone numbers and email addresses
                                </h2>
                            </div>
                            <p>
                                <span onClick={() => playAudio('pg57_audio14')} style={{ cursor: 'pointer' }}> Ana: Hey, Julie. What’s your cell phone number?</span> <br />

                                <span onClick={() => playAudio('pg57_audio15')} style={{ cursor: 'pointer' }}>Julie: It’s 308-187-0745. </span> <br />

                                <span onClick={() => playAudio('pg57_audio16')} style={{ cursor: 'pointer' }}>Ana: What’s your email address? </span><br />

                                <span onClick={() => playAudio('pg57_audio17')} style={{ cursor: 'pointer' }}>Julie: It’s <span className={styles['page57__email']}>julie@gmail.com.</span> <br /></span>

                                <span onClick={() => playAudio('pg57_audio18')} style={{ cursor: 'pointer' }}>Ana: Thanks!</span>
                            </p>
                            <div className={styles['page57__gray-box']}>
                                <p>Nos endereços de email:</p>
                                <ul>
                                    <li>‘‘.’’ = ‘‘dot’’</li>
                                    <li>‘‘@’’ = ‘‘at’’</li>
                                    <li>‘‘_’’ = ‘‘underscore’’</li>
                                </ul>
                            </div>
                        </div>
                        <img className={styles['page57__image']} src={pagina57_imagem1} alt="Duas pessoas conversando" />
                    </div>

                    <h2 className={styles['page57__title--alphabet']} onClick={() => playAudio('pg57_audio19')} style={{ cursor: 'pointer' }}>
                        Vocabulary: The alphabet
                    </h2>
                    <div className={styles['page57__alphabet']}>
                        <div className={styles['page57__letters']}>
                            {[...'ABCDEFGHIJKLM'].map((letter, index) => (
                                <div key={letter} onClick={() => playAudio(`pg57_audio${20 + index}`)} style={{ cursor: 'pointer' }}>
                                    <div className={styles['page57__letter-box']}>
                                        <p>{letter + letter.toLowerCase()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles['page57__letters']}>
                            {[...'NOPQRSTUVWXYZ'].map((letter, index) => (
                                <div key={letter} onClick={() => playAudio(`pg57_audio${33 + index}`)} style={{ cursor: 'pointer' }}>
                                    <div className={styles['page57__letter-box']}>
                                        <p>{letter + letter.toLowerCase()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles['page57__spelling']}>
                        <div className={styles['page57__spelling-content']}>
                            <div>
                                <h2 className={styles['page57__title--spelling']} onClick={() => playAudio('pg57_audio46')} style={{ cursor: 'pointer' }}>
                                    Spelling names (Soletrando nomes)
                                </h2>
                            </div>
                            <p>
                                <span onClick={() => playAudio('pg57_audio47')} style={{ cursor: 'pointer' }}> Jones: Hello. My name is Arthur Black.</span> <br />

                                <span onClick={() => playAudio('pg57_audio48')} style={{ cursor: 'pointer' }}>Clerk: How do you spell your first name? <br /></span>

                                Jones: <span className={styles['page57__spelling-word']} onClick={() => playAudio('pg57_audio49')} style={{ cursor: 'pointer' }}>
                                    A-R-T-H-U-R
                                </span> <br />

                                Clerk: <span onClick={() => playAudio('pg57_audio50')} style={{ cursor: 'pointer' }}>And how do you spell your last name?</span> <br />
                                
                                Jones: <span className={styles['page57__spelling-word']} onClick={() => playAudio('pg57_audio51')} style={{ cursor: 'pointer' }}>
                                    B-L-A-C-K.
                                </span>
                            </p>
                        </div>
                        <img className={styles['page57__image']} src={pagina57_imagem2} alt="Pessoa sendo atendida" />
                    </div>
                </main>
            </div>
        </div>
    );

};

export default Pagina57;
