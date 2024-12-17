import React, { useState } from 'react';
import styles from './pagina45.module.css';
import Pg45IconNotes from '../assets/Icons/Icon-Notes.png';
import Pagina45_Aside_Imagem1 from '../assets/Images/Pagina45_Aside_Imagem1.jpg';
import Pagina45_Aside_Imagem2 from '../assets/Images/Pagina45_Aside_Imagem2.jpg';


const Pagina45 = () => {
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
            <div className={styles.Pg45Container}>
                <header className={styles.Pg45Header}>
                    <h1 className={styles.Pg45HeaderH1}>Grammar</h1>
                    <div className={styles.Pg45HeaderH2H3}>
                        <h2 className={styles.Pg45HeaderH2}>Possessive Adjectives</h2>
                        <h3 className={styles.Pg45HeaderH3}>Pronomes possessivos</h3>
                    </div>
                </header>
                <main className={styles.Pg45Main}>
                    <div>
                        <table className={styles.Pg45table}>
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
                            <tbody>
                                <tr>
                                    <th>My</th>
                                    <td>meu, minha, meus, minhas</td>
                                </tr>
                                <tr>
                                    <th>Your</th>
                                    <td>teu, tua, teus, tuas, seu, sua, seus, suas</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
                <aside className={styles.Pg45Aside}>
                    <div className={styles.Pg45Exemplo}>
                        <p>Exemplo:</p>
                        <div className={styles.Pg45ContainerAsidetexto}>
                            <div className={styles.Pg45AsideTexto1}>
                                <p>Mark: The neighbors are having a party. <br /> Their music is so loud!</p>
                            </div>
                            <div className={styles.Pg45AsideTexto2}>
                                <p>Laura: I know, it's hard to concentrate with <br /> all that noise. I'll talk to them about it.</p>
                            </div>
                        </div>
                        <div className={styles.Pg45ExemploImg}>
                            <img className={styles.Pg45AsideImg1} src={Pagina45_Aside_Imagem1} alt="" />
                            <img className={styles.Pg45AsideImg2} src={Pagina45_Aside_Imagem2} alt="" />
                        </div>
                    </div>
                    <div className={styles.Pg45Traducao}>
                        <p>Tradução:</p>
                        <div className={styles.Pg45AsideTraducao1}><p>Mark: Os vizinhos estão dando uma festa. A música deles está tão alta!</p></div>
                        <div className={styles.Pg45AsideTraducao2}><p>Laura: Eu sei, é difícil se concentrar com tanto barulho. Vou falar com eles sobre isso.</p></div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina45;