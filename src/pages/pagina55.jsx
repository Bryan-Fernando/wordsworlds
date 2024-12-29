import React from 'react';
import styles from './pagina55.module.css';
import pg55IconNotes from '../assets/Icons/Icon-Notes.png';
import pagina55_imagem1 from '../assets/Images/pagina55_imagem1.png';
import pagina55_imagem2 from '../assets/Images/pagina55_imagem2.png';
import pagina55_imagem3 from '../assets/Images/pagina55_imagem3.png';
import pagina55_imagem4 from '../assets/Images/pagina55_imagem4.png';
import pagina55_imagem5 from '../assets/Images/pagina55_imagem5.png';

const Pagina55 = () => {
    return (
        <div>
            <div className={styles.pg55Container}>
                <header className={styles.pg55Header}>
                    <h1 className={styles.pg55HeaderH1}>Names and Titles (Mr. Mrs. Miss. Ms. Ma’am)</h1>
                </header>
                <main className={styles.pg55Main}>
                    <div className={styles.ContainerDiv1}>
                        <div>
                            <div className={styles.Container1Div1}>
                                <img src={pagina55_imagem1} alt="Ma’am Jeaneta Mc. Cartney" className={styles.pg55Img} />
                            </div>
                            <p>Ma’am Jeaneta Mc. Cartney</p>
                        </div>
                        <div>
                            <div className={styles.Container1Div2}>
                                <img src={pagina55_imagem2} alt="Mrs Carina Sanches" className={styles.pg55Img} />
                            </div>
                            <p>Mrs Carina Sanches</p>
                        </div>
                        <div>
                            <div className={styles.Container1Div3}>
                                <img src={pagina55_imagem3} alt="Ms Olivia Gomes" className={styles.pg55Img} />
                            </div>
                            <p>Ms Olivia Gomes</p>
                        </div>
                    </div>
                    <div className={styles.ContainerDiv2}>
                        <div>
                            <div className={styles.Container2Div1}>
                                <img src={pagina55_imagem4} alt="Miss Leticia Pagliari" className={styles.pg55Img} />
                            </div>
                            <p>Miss Leticia Pagliari</p>
                        </div>
                        <div>
                            <div className={styles.Container2Div2}>
                                <img src={pagina55_imagem5} alt="Mr Ronaldo Willian" className={styles.pg55Img} />
                            </div>
                            <p>Mr Ronaldo Willian</p>
                        </div>
                    </div>
                </main>
                <aside className={styles.pg55Aside}>
                    <div className={styles.pg55Asidecontainer}>
                        <div className={styles.pg55AsideNotes1}>
                            <img className={styles.pg55AsideImgNotes} src={pg55IconNotes} alt="Word Bank Icon" />
                            <p>Word Bank</p>
                        </div>
                        <div className={styles.pg55AsideNotes2}>
                            <p className={styles.pg55AsideNotes2Vermelho}>
                                Mr
                                <br />
                                Mrs
                                <br />
                                Miss <br />
                                Ms <br />
                                Ma’am <br />
                            </p>
                            <p>
                                Sr (senhor) <br />
                                Sra (senhora)
                                <br />
                                Srta (solteira) <br />
                                Ms (mulher adulta sem especificar seu estado civil) <br />
                                Madame (forma cortês de se dirigir a uma mulher) <br />
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina55;
