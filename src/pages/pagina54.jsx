import React, { useState } from 'react';
import styles from './pagina54.module.css';

const Pagina54 = () => {
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
            <div className={styles.Pg54Container}>
                <header className={styles.Pg54Header}>
                    <h1 className={styles.Pg54HeaderH1}>Grammar - Demonstrative Pronouns</h1>
                    <div className={styles.Pg54HeaderH2H3}>
                        <h2 className={styles.Pg54HeaderH2}>These = Estes / Estas / Esses / Essas</h2>
                    </div>
                </header>
                <main className={styles.Pg54Main}>
                    <div className={styles.Pg54Container1}>
                        <div>
                            <div className={styles.Pg54Div1Container1}></div>
                            <p className={styles.Pg54ParagrafoDiv}>These are my co-workers. </p>
                        </div>
                        <div>
                            <div className={styles.Pg54Div2Container1}></div>
                            <p className={styles.Pg54ParagrafoDiv}>These are my books.
                            </p>
                        </div>
                    </div>
                    <div className={styles.Pg54Container2}>
                        <div>
                            <div className={styles.Pg54Div1Container2}></div>
                            <p className={styles.Pg54ParagrafoDiv}>These are my grades
                            </p>
                        </div>
                        <div>
                            <div className={styles.Pg54Div2Container2}></div>
                            <p className={styles.Pg54ParagrafoDiv}>These are my new sneakers.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina54;
