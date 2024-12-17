import React, { useState } from 'react';
import styles from './pagina55.module.css';

const Pagina55 = () => {
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
            <div className={styles.Pg55Container}>
                <header className={styles.Pg55Header}>
                    <h1 className={styles.Pg55HeaderH1}>Grammar - Demonstrative Pronouns</h1>
                    <div className={styles.Pg55HeaderH2H3}>
                        <h2 className={styles.Pg55HeaderH2}>Those = Aqueles / Aquelas</h2>
                    </div>
                </header>
                <main className={styles.Pg55Main}>
                    <div className={styles.Pg55Container1}>
                        <div>
                            <div className={styles.Pg55Div1Container1}></div>
                            <p className={styles.Pg55ParagrafoDiv}>These are my co-workers. </p>
                        </div>
                        <div>
                            <div className={styles.Pg55Div2Container1}></div>
                            <p className={styles.Pg55ParagrafoDiv}>These are my books.
                            </p>
                        </div>
                    </div>
                    <div className={styles.Pg55Container2}>
                        <div>
                            <div className={styles.Pg55Div1Container2}></div>
                            <p className={styles.Pg55ParagrafoDiv}>These are my grades
                            </p>
                        </div>
                        <div>
                            <div className={styles.Pg55Div2Container2}></div>
                            <p className={styles.Pg55ParagrafoDiv}>These are my new sneakers.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina55;
