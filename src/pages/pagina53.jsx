import React, { useState } from 'react';
import styles from './pagina53.module.css';

const Pagina53 = () => {
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
            <div className={styles.Pg53Container}>
                <header className={styles.Pg53Header}>
                    <h1 className={styles.Pg53HeaderH1}>Grammar - Demonstrative Pronouns</h1>
                    <div className={styles.Pg53HeaderH2H3}>
                        <h2 className={styles.Pg53HeaderH2}>That = Aquele / Aquela </h2>
                    </div>
                </header>
                <main className={styles.Pg53Main}>
                    <div className={styles.Pg53Container1}>
                        <div>
                            <div className={styles.Pg53Div1Container1}></div>
                            <p className={styles.Pg53ParagrafoDiv}>That is your office</p>
                        </div>
                        <div>
                            <div className={styles.Pg53Div2Container1}></div>
                            <p className={styles.Pg53ParagrafoDiv}>That is my brother John in the green shirt <br />
                                and brown pants.
                            </p>
                        </div>
                        <div>
                            <div className={styles.Pg53Div3Container1}></div>
                            <p className={styles.Pg53ParagrafoDiv}>That is my sister Joan and my cousin Maria. </p>
                        </div>
                    </div>
                    <div className={styles.Pg53Container2}>
                        <div>
                            <div className={styles.Pg53Div1Container2}></div>
                            <p className={styles.Pg53ParagrafoDiv}>That is Mr.Batista, the new director.

                            </p>
                        </div>
                        <div>
                            <div className={styles.Pg53Div2Container2}></div>
                            <p className={styles.Pg53ParagrafoDiv}>That is my cousin Gary.

                            </p>
                        </div>
                        <div>
                            <div className={styles.Pg53Div3Container2}></div>
                            <p className={styles.Pg53ParagrafoDiv}>That is my sister Julia in the <br />
                                yellow blouse and blue skirt.</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina53;
