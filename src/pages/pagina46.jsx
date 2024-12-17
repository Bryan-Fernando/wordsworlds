import React, { useState } from 'react';
import styles from './pagina46.module.css';
import Pg45IconNotes from '../assets/Icons/Icon-Notes.png';
import Pagina46_Primeira_imagem from '../assets/Images/Pagina46_Primeira_imagem.jpg';



const Pagina46 = () => {
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
            <div className={styles.Pg46Container}>
                <header className={styles.Pg46Header}>
                    <h1 className={styles.Pg46HeaderH1}>Grammar</h1>
                    <div className={styles.Pg46HeaderH2H3}>
                        <h2 className={styles.Pg46HeaderH2}>Possessive Adjectives</h2>
                        <h3 className={styles.Pg46HeaderH3}>Pronomes possessivos</h3>
                    </div>
                </header>
                <main className={styles.Pg46Main}>
                    <div>
                        <table className={styles.Pg46table}>
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
                    </div>
                </main>
                <aside className={styles.Pg46Aside}>
                    <div className={styles.Pg46Exemplo}>
                        <p>Exemplo:</p>
                        <div className={styles.Pg46ContainerAsidetexto}>
                            <div className={styles.Pg46AsideTexto1}>
                                <p>Emily: Yes, I’m proud of our progress.<br /> Our hard work is paying off.</p>
                            </div>
                            <div className={styles.Pg46AsideTexto2}>
                                <p>Alex: This project is going really well. <br /> Our team has put in  a lot of</p>
                            </div>
                        </div>
                        <div className={styles.Pg46ExemploImg}>
                            <img className={styles.Pg46AsideImg1} src={Pagina46_Primeira_imagem} alt="" />
                        </div>
                    </div>
                    <div className={styles.Pg46Traducao}>
                        <p>Tradução:</p>
                        <div className={styles.Pg46AsideTraducao1}><p>Alex: Este projeto está indo muito bem. Nossa equipe tem se esforçado muito.</p></div>
                        <div className={styles.Pg46AsideTraducao2}><p>Emily: Sim, estou orgulhoso do nosso progresso. Nosso trabalho duro está valendo a pena.</p></div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina46;