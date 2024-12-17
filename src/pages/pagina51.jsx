import React, { useState } from 'react';
import styles from './pagina51.module.css';

const Pagina51 = () => {
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
            <div className={styles.Pg51Container}>
                <header className={styles.Pg51Header}>
                    <h1 className={styles.Pg51HeaderH1}>Grammar - Demonstrative Pronouns</h1>
                    <div className={styles.Pg51HeaderH2H3}>
                        <h2 className={styles.Pg51HeaderH2}>This = Este / Esta / Esse / Essa </h2>
                    </div>
                </header>
                <main className={styles.Pg51Main}>
                    <div className={styles.Pg51Container1}>
                        <div>
                            <div className={styles.Pg51Div1Container1}></div>
                            <p className={styles.Pg51ParagrafoDiv}>Mother <br />
                                This is my mother, Susan. She is a teacher</p>
                        </div>
                        <div>
                            <div className={styles.Pg51Div2Container1}></div>
                            <p className={styles.Pg51ParagrafoDiv}>Sister <br />
                                This is my sister, Emily. She is a student.</p>
                        </div>
                        <div>
                            <div className={styles.Pg51Div3Container1}></div>
                            <p className={styles.Pg51ParagrafoDiv}>Grandmother <br />
                                This is my grandmother, Mary. She loves
                                gardening.</p>
                        </div>
                        <div>
                            <div className={styles.Pg51Div4Container1}></div>
                            <p className={styles.Pg51ParagrafoDiv}>Aunt <br />
                                This is my aunt, Linda. She is a talented
                                artist.</p>
                        </div>
                    </div>
                    <div className={styles.Pg51Container2}>
                        <div>
                            <div className={styles.Pg51Div1Container2}></div>
                            <p className={styles.Pg51ParagrafoDiv}>Father <br />
                                This is my father, John. He is an engineer.
                            </p>
                        </div>
                        <div>
                            <div className={styles.Pg51Div2Container2}></div>
                            <p className={styles.Pg51ParagrafoDiv}>Brother <br />
                                This is my brother, Michael. He is a doctor.
                            </p>
                        </div>
                        <div>
                            <div className={styles.Pg51Div3Container2}></div>
                            <p className={styles.Pg51ParagrafoDiv}>Grandfather <br />
                                This is my grandfather, Robert. He enjoys
                                fishing. </p>
                        </div>
                        <div>
                            <div className={styles.Pg51Div4Container2}></div>
                            <p className={styles.Pg51ParagrafoDiv}>Uncle <br />
                                This is my uncle, Peter. He loves to travel</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina51;
