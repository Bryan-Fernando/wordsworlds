import React, { useState } from 'react';
import styles from './pagina49.module.css';
import Pagina49_Primeira_imagem from '../assets/Images/Pagina49_Primeira_imagem.jpg';
import Pagina49_Segunda_imagem from '../assets/Images/Pagina49_Segunda_imagem.jpg';


const Pagina49 = () => {
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
            <div className={styles.Pg49Container}>
                <header className={styles.Pg49Header}>
                    <h1 className={styles.Pg49HeaderH1}>Grammar</h1>
                    <div className={styles.Pg49HeaderH2H3}>
                        <h2 className={styles.Pg49HeaderH2}>Possessive Adjectives</h2>
                        <h3 className={styles.Pg49HeaderH3}>Pronomes possessivos</h3>
                    </div>
                </header>
                <main className={styles.Pg49Main}>
                    <div className={styles.Pg49MainDiv1}>
                        <div className={styles.Pg49MainImagem1}>
                            <img className={styles.Pg49_main_imagem1} src={Pagina49_Primeira_imagem} alt="" />
                        </div>
                    </div>
                    <div className={styles.Pg49MainDiv2}>
                        <div className={styles.Pg49MainImagem2}>
                            <img className={styles.Pg49_main_imagem1} src={Pagina49_Segunda_imagem} alt="" />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina49;
