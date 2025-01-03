import React from 'react';
import styles from './pagina3.module.css';
import Pagina3_primeira_imagem from '../assets/Images/Pagina3_primeira_imagem.jpg';
import Pagina3_segunda_imagem from '../assets/Images/Pagina3_segunda_imagem.jpg';
import Pagina3_terceira_imagem from '../assets/Images/Pagina3_terceira_imagem.jpg';
import Pagina3_quarta_imagem from '../assets/Images/Pagina3_quarta_imagem.jpg';

const Pagina3 = () => {
        return (
                <div>
                        <div className={styles.pg3Container}>
                                <header className={styles.pg3Header}><h1>People</h1></header>
                                <main className={styles.pg3Main}>
                                        <img src={Pagina3_primeira_imagem} alt="" />
                                        <img src={Pagina3_segunda_imagem} alt="" />

                                        <img src={Pagina3_terceira_imagem} alt="" />
                                        <img src={Pagina3_quarta_imagem} alt="" />
                                </main>
                                <aside className={styles.pg3Aside}>
                                        <div className={styles.pg3AsideH1}>
                                                <h2>Greetings and Introductions.</h2>
                                        </div>
                                        <div className={styles.pg3AsideDivLista}>
                                                <ol>
                                                        <li>Hi, I am Ana Tereza. I am a college veterinary student.</li>
                                                        <li>Hello, I am Andrei. I am a teacher.</li>
                                                        <li>Hi, I am Emilia. I am a lawyer.</li>
                                                        <li>Hello, I am Rafael Vargas. I am a musician, a singer and song writer.</li>
                                                </ol>
                                        </div>
                                </aside>
                        </div>
                </div>

        );
};

export default Pagina3;
