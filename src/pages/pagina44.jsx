import React, { useRef } from 'react';
import styles from './pagina44.module.css';
import Pagina44_Primeira_imagem from '../assets/Images/Pagina44_Primeira_imagem.jpg';
import Pagina44_Brasil from '../assets/Images/Pagina44_Brasil.png';
import Pagina44_Canada from '../assets/Images/Pagina44_Canada.png';
import Pagina44_China from '../assets/Images/Pagina44_China.png';
import Pagina44_Egito from '../assets/Images/Pagina44_Egito.png';
import Pagina44_Franca from '../assets/Images/Pagina44_Franca.png';
import Pagina44_Alemanha from '../assets/Images/Pagina44_Alemanha.png';
import Pagina44_GraBretanha from '../assets/Images/Pagina44_GraBretanha.png';
import Pagina44_Italia from '../assets/Images/Pagina44_Italia.png';
import Pagina44_Japao from '../assets/Images/Pagina44_Japao.png';
import Pagina44_Mexico from '../assets/Images/Pagina44_Mexico.png';
import Pagina44_Portugal from '../assets/Images/Pagina44_Portugal.png';
import Pagina44_Espanha from '../assets/Images/Pagina44_Espanha.png';
import Pagina44_Usa from '../assets/Images/Pagina44_Usa.png';
import audio1e from '../assets/audios/pg44_audio1e.mp3';
import audio2e from '../assets/audios/pg44_audio2e.mp3';
import audio3e from '../assets/audios/pg44_audio3e.mp3';
import audio4e from '../assets/audios/pg44_audio4e.mp3';
import audio5e from '../assets/audios/pg44_audio5e.mp3';
import audio6e from '../assets/audios/pg44_audio6e.mp3';
import audio7e from '../assets/audios/pg44_audio7e.mp3';
import audio8e from '../assets/audios/pg44_audio8e.mp3';
import audio9e from '../assets/audios/pg44_audio9e.mp3';
import audio10e from '../assets/audios/pg44_audio10e.mp3';
import audio11e from '../assets/audios/pg44_audio11e.mp3';
import audio12e from '../assets/audios/pg44_audio12e.mp3';
import audio13e from '../assets/audios/pg44_audio13e.mp3';
import audio14e from '../assets/audios/pg44_audio14e.mp3';
import audio15e from '../assets/audios/pg44_audio15e.mp3';
import audio16e from '../assets/audios/pg44_audio16e.mp3';
import audio17e from '../assets/audios/pg44_audio17e.mp3';
import audio18e from '../assets/audios/pg44_audio18e.mp3';
import audio19e from '../assets/audios/pg44_audio19e.mp3';
import audio20e from '../assets/audios/pg44_audio20e.mp3';
import audio21e from '../assets/audios/pg44_audio21e.mp3';
import audio22e from '../assets/audios/pg44_audio22e.mp3';
import audio23e from '../assets/audios/pg44_audio23e.mp3';
import audio24e from '../assets/audios/pg44_audio24e.mp3';
import audio25e from '../assets/audios/pg44_audio25e.mp3';
import audio26e from '../assets/audios/pg44_audio26e.mp3';
import audio27e from '../assets/audios/pg44_audio27e.mp3';
import audio28e from '../assets/audios/pg44_audio28e.mp3';
import audio1p from '../assets/audios/pg44_audio1p.mp3';
import audio2p from '../assets/audios/pg44_audio2p.mp3';
import audio3p from '../assets/audios/pg44_audio3p.mp3';
import audio4p from '../assets/audios/pg44_audio4p.mp3';
import audio5p from '../assets/audios/pg44_audio5p.mp3';
import audio6p from '../assets/audios/pg44_audio6p.mp3';
import audio7p from '../assets/audios/pg44_audio7p.mp3';
import audio8p from '../assets/audios/pg44_audio8p.mp3';
import audio9p from '../assets/audios/pg44_audio9p.mp3';
import audio10p from '../assets/audios/pg44_audio10p.mp3';
import audio11p from '../assets/audios/pg44_audio11p.mp3';
import audio12p from '../assets/audios/pg44_audio12p.mp3';
import audio13p from '../assets/audios/pg44_audio13p.mp3';
import audio14p from '../assets/audios/pg44_audio14p.mp3';
import audio15p from '../assets/audios/pg44_audio15p.mp3';
import audio16p from '../assets/audios/pg44_audio16p.mp3';
import audio17p from '../assets/audios/pg44_audio17p.mp3';
import audio18p from '../assets/audios/pg44_audio18p.mp3';
import audio19p from '../assets/audios/pg44_audio19p.mp3';
import audio20p from '../assets/audios/pg44_audio20p.mp3';
import audio21p from '../assets/audios/pg44_audio21p.mp3';
import audio22p from '../assets/audios/pg44_audio22p.mp3';
import audio23p from '../assets/audios/pg44_audio23p.mp3';
import audio24p from '../assets/audios/pg44_audio24p.mp3';
import audio25p from '../assets/audios/pg44_audio25p.mp3';
import audio26p from '../assets/audios/pg44_audio26p.mp3';
import audio27p from '../assets/audios/pg44_audio27p.mp3';
import audio28p from '../assets/audios/pg44_audio28p.mp3';

const Pagina44 = () => {
    const audioMap = {
        'pg44_audio1e': audio1e,
        'pg44_audio2e': audio2e,
        'pg44_audio3e': audio3e,
        'pg44_audio4e': audio4e,
        'pg44_audio5e': audio5e,
        'pg44_audio6e': audio6e,
        'pg44_audio7e': audio7e,
        'pg44_audio8e': audio8e,
        'pg44_audio9e': audio9e,
        'pg44_audio10e': audio10e,
        'pg44_audio11e': audio11e,
        'pg44_audio12e': audio12e,
        'pg44_audio13e': audio13e,
        'pg44_audio14e': audio14e,
        'pg44_audio15e': audio15e,
        'pg44_audio16e': audio16e,
        'pg44_audio17e': audio17e,
        'pg44_audio18e': audio18e,
        'pg44_audio19e': audio19e,
        'pg44_audio20e': audio20e,
        'pg44_audio21e': audio21e,
        'pg44_audio22e': audio22e,
        'pg44_audio23e': audio23e,
        'pg44_audio24e': audio24e,
        'pg44_audio25e': audio25e,
        'pg44_audio26e': audio26e,
        'pg44_audio27e': audio27e,
        'pg44_audio28e': audio28e,
        'pg44_audio1p': audio1p,
        'pg44_audio2p': audio2p,
        'pg44_audio3p': audio3p,
        'pg44_audio4p': audio4p,
        'pg44_audio5p': audio5p,
        'pg44_audio6p': audio6p,
        'pg44_audio7p': audio7p,
        'pg44_audio8p': audio8p,
        'pg44_audio9p': audio9p,
        'pg44_audio10p': audio10p,
        'pg44_audio11p': audio11p,
        'pg44_audio12p': audio12p,
        'pg44_audio13p': audio13p,
        'pg44_audio14p': audio14p,
        'pg44_audio15p': audio15p,
        'pg44_audio16p': audio16p,
        'pg44_audio17p': audio17p,
        'pg44_audio18p': audio18p,
        'pg44_audio19p': audio19p,
        'pg44_audio20p': audio20p,
        'pg44_audio21p': audio21p,
        'pg44_audio22p': audio22p,
        'pg44_audio23p': audio23p,
        'pg44_audio24p': audio24p,
        'pg44_audio25p': audio25p,
        'pg44_audio26p': audio26p,
        'pg44_audio27p': audio27p,
        'pg44_audio28p': audio28p
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
            <div className={styles.pg44Container}>
                <main className={styles.pg44Main}>
                    <img className={styles.pg44MainImagems} src={Pagina44_Primeira_imagem} alt="" />
                </main>
                <aside className={styles.pg44Aside}>
                    <div className={styles.tableContainer}>
                        <div className={styles.table}>
                            <div className={styles.header}>
                                <div className={styles.column} onClick={() => playAudio('pg44_audio1e')}>Country</div>
                                <div className={styles.column} onClick={() => playAudio('pg44_audio15e')}>Nationality</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio2e')}>
                                    <img src={Pagina44_Brasil} alt="Brazil Flag" className={styles.flag} />
                                    Brazil
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio16e')}>Brazilian</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio3e')}>
                                    <img src={Pagina44_Canada} alt="Canada Flag" className={styles.flag} />
                                    Canada
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio17e')}>Canadian</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio4e')}>
                                    <img src={Pagina44_China} alt="China Flag" className={styles.flag} />
                                    China
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio18e')}>Chinese</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio5e')}>
                                    <img src={Pagina44_Egito} alt="Egypt Flag" className={styles.flag} />
                                    Egypt
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio19e')}>Egyptian</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio6e')}>
                                    <img src={Pagina44_Franca} alt="France Flag" className={styles.flag} />
                                    France
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio20e')}>French</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio7e')}>
                                    <img src={Pagina44_Alemanha} alt="Germany Flag" className={styles.flag} />
                                    Germany
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio21e')}>German</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio8e')}>
                                    <img src={Pagina44_GraBretanha} alt="Great Britain Flag" className={styles.flag} />
                                    Great Britain
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio22e')}>British</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio9e')}>
                                    <img src={Pagina44_Italia} alt="Italy Flag" className={styles.flag} />
                                    Italy
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio23e')}>Italian</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio10e')}>
                                    <img src={Pagina44_Japao} alt="Japan Flag" className={styles.flag} />
                                    Japan
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio24e')}>Japanese</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio11e')}>
                                    <img src={Pagina44_Mexico} alt="Mexico Flag" className={styles.flag} />
                                    Mexico
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio25e')}>Mexican</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio12e')}>
                                    <img src={Pagina44_Portugal} alt="Portugal Flag" className={styles.flag} />
                                    Portugal
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio26e')}>Portuguese</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio13e')}>
                                    <img src={Pagina44_Espanha} alt="Spain Flag" className={styles.flag} />
                                    Spain
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio27e')}>Spanish</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio14e')}>
                                    <img src={Pagina44_Usa} alt="USA Flag" className={styles.flag} />
                                    USA
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio28e')}>American</div>
                            </div>
                        </div>
    
                        <div className={styles.table}>
                            <div className={styles.header}>
                                <div className={styles.column} onClick={() => playAudio('pg44_audio1p')}>País</div>
                                <div className={styles.column} onClick={() => playAudio('pg44_audio15p')}>Nacionalidade</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio2p')}>
                                    <img src={Pagina44_Brasil} alt="Bandeira do Brasil" className={styles.flag} />
                                    Brasil
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio16p')}>Brasileiro</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio3p')}>
                                    <img src={Pagina44_Canada} alt="Bandeira do Canadá" className={styles.flag} />
                                    Canadá
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio17p')}>Canadense</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio4p')}>
                                    <img src={Pagina44_China} alt="Bandeira da China" className={styles.flag} />
                                    China
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio18p')}>Chinês</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio5p')}>
                                    <img src={Pagina44_Egito} alt="Bandeira do Egito" className={styles.flag} />
                                    Egito
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio19p')}>Egípcio</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio6p')}>
                                    <img src={Pagina44_Franca} alt="Bandeira da França" className={styles.flag} />
                                    França
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio20p')}>Francês</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio7p')}>
                                    <img src={Pagina44_Alemanha} alt="Bandeira da Alemanha" className={styles.flag} />
                                    Alemanha
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio21p')}>Alemão</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio8p')}>
                                    <img src={Pagina44_GraBretanha} alt="Bandeira da Grã-Bretanha" className={styles.flag} />
                                    Grã-Bretanha
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio22p')}>Britânico</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio9p')}>
                                    <img src={Pagina44_Italia} alt="Bandeira da Itália" className={styles.flag} />
                                    Itália
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio23p')}>Italiano</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio10p')}>
                                    <img src={Pagina44_Japao} alt="Bandeira do Japão" className={styles.flag} />
                                    Japão
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio24p')}>Japonês</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio11p')}>
                                    <img src={Pagina44_Mexico} alt="Bandeira do México" className={styles.flag} />
                                    México
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio25p')}>Mexicano</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio12p')}>
                                    <img src={Pagina44_Portugal} alt="Bandeira de Portugal" className={styles.flag} />
                                    Portugal
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio26p')}>Português</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio13p')}>
                                    <img src={Pagina44_Espanha} alt="Bandeira da Espanha" className={styles.flag} />
                                    Espanha
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio27p')}>Espanhol</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio14p')}>
                                    <img src={Pagina44_Usa} alt="Bandeira dos EUA" className={styles.flag} />
                                    EUA
                                </div>
                                <div className={styles.cell} onClick={() => playAudio('pg44_audio28p')}>Americano</div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
    
};

export default Pagina44;
