import React, { useState } from 'react';
import styles from './pagina60.module.css';
import pg57IconNotes from '../assets/Icons/Icon-Notes.png';

const Pagina60 = () => {
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
            <div className={styles.pg60Container}>
                <header className={styles.pg60Header}>
                    <h1 className={styles.pg60HeaderH1}>Grammar</h1>
                    <div>
                        <h2 className={styles.pg60HeaderH2}>Telling the time</h2>
                        <p>Dizendo as horas</p>
                    </div>
                </header>
                <main className={styles.pg60Main}>
                    <div></div>
                </main>
            </div>
        </div>
    );
};
export default Pagina60;