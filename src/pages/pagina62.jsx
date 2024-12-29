import React, { useState } from 'react';
import styles from './pagina62.module.css';
import pg57IconNotes from '../assets/Icons/Icon-Notes.png';

const Pagina62 = () => {
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
            <div className={styles.pg62Container}>
                <header className={styles.pg62Header}>
                    <h1 className={styles.pg62HeaderH1}>Grammar</h1>
                    <div>
                        <h2 className={styles.pg62HeaderH2}>What time is it? </h2>
                        <p>Que horas são?</p>
                    </div>
                </header>
                <main className={styles.pg62Main}>
                    <div className={styles.pg62MainContainer1}></div>
                </main>
            </div>
        </div>
    );
};
export default Pagina62;
