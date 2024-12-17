import React, { useState } from 'react';
import styles from './pagina47.module.css';
import Pg45IconNotes from '../assets/Icons/Icon-Notes.png';
import Pagina47_Primeira_imagem from '../assets/Images/Pagina47_Primeira_imagem.jpg';



const Pagina47 = () => {
    const [inputValues, setInputValues] = useState(
        Array(6).fill(Array(6).fill(''))
    );

    const handleInputChange = (rowIndex, colIndex, e) => {
        const newValue = e.target.value;
        const updatedValues = inputValues.map((row, i) =>
            row.map((value, j) => (i === rowIndex && j === colIndex ? newValue : value))
        );
        setInputValues(updatedValues);
    };

    return (
        <div>
            <div className={styles.Pg47Container}>
                <header className={styles.Pg47Header}>
                    <h1 className={styles.Pg47HeaderH1}>Grammar</h1>
                    <div className={styles.Pg47HeaderH2H3}>
                        <h2 className={styles.Pg47HeaderH2}>Possessive Adjectives</h2>
                        <h3 className={styles.Pg47HeaderH3}>Pronomes possessivos</h3>
                    </div>
                </header>
                <main className={styles.Pg47Main}>
                    <div className={styles.Pg47ContainerMain}>
                        <table className={styles.Pg47table}>
                            <thead>
                                <tr>
                                    <th>My</th>
                                    <td>meu(s), minha(s)</td>
                                </tr>
                                <tr>
                                    <th>His</th>
                                    <td>dele (seu/s/sua/s)</td>
                                </tr>
                                <tr>
                                    <th>Her</th>
                                    <td>dela (seu/s/sua/s)</td>
                                </tr>
                                <tr>
                                    <th>Its</th>
                                    <td>seu(s), sua(s) - coisas/animais/plantas</td>
                                </tr>
                                <tr>
                                    <th>Our</th>
                                    <td>nosso(s), nossa(s)</td>
                                </tr>
                                <tr>
                                    <th>Your</th>
                                    <td>seu(s), sua(s), teu(s), tua(s)</td>
                                </tr>
                                <tr>
                                    <th>Your</th>
                                    <td>seus, suas, teus, tuas (de vocês)</td>
                                </tr>
                                <tr>
                                    <th>Their</th>
                                    <td>deles, delas, seus, suas</td>
                                </tr>
                            </thead>
                        </table>
                        <div className={styles.Pg47MainTexto}>
                            <ol className={styles.Pg47MainList}>
                                <li>This is <strong>my</strong> teacher.</li>
                                <li>Those are <strong>your</strong> keys.</li>
                                <li>These are <strong>his</strong> pens.</li>
                                <li>This is <strong>her</strong> phone.</li>
                                <li>That is <strong>their</strong> car.</li>
                                <li><strong>My</strong> friend Leo is from Italy.</li>
                                <li><strong>His</strong> dad is an engineer.</li>
                                <li><strong>Her</strong> parents are Canadian.</li>
                                <li><strong>Our</strong> neighbor is French.</li>
                                <li><strong>Your</strong> sister is smart.</li>
                            </ol>

                        </div>
                    </div>
                </main>
                <aside className={styles.Pg47Aside}>
                    <div className={styles.Pg47Exemplo}>
                        <p>Exemplo:</p>
                        <div className={styles.Pg47ContainerAsidetexto}>
                            <div className={styles.Pg47AsideTexto1}>
                                <p>Emily: Yes, I’m proud of our progress.<br /> Our hard work is paying off.</p>
                            </div>
                            <div className={styles.Pg47AsideTexto2}>
                                <p>Alex: This project is going really well. <br /> Our team has put in  a lot of</p>
                            </div>
                        </div>
                        <div className={styles.Pg47ExemploImg}>
                            <img className={styles.Pg47AsideImg1} src={Pagina47_Primeira_imagem} alt="" />
                        </div>
                    </div>
                    <div className={styles.Pg47Traducao}>
                        <p>Tradução:</p>
                        <div className={styles.Pg47AsideTraducao1}><p>Alex: Este projeto está indo muito bem. Nossa equipe tem se esforçado muito.</p></div>
                        <div className={styles.Pg47AsideTraducao2}><p>Emily: Sim, estou orgulhoso do nosso progresso. Nosso trabalho duro está valendo a pena.</p></div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina47;