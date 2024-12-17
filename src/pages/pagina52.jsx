import React, { useState } from 'react';
import styles from './pagina52.module.css';

const Pagina52 = () => {
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
            <div className={styles.Pg52Container}>
                <header className={styles.Pg52Header}>
                    <h1 className={styles.Pg52HeaderH1}>Grammar - Demonstrative Pronouns</h1>
                    <div className={styles.Pg52HeaderH2H3}>
                        <h2 className={styles.Pg52HeaderH2}>This = Este / Esta / Esse / Essa </h2>
                    </div>
                </header>
                <main className={styles.Pg52Main}>
                    <div className={styles.Pg52Container1}>
                        <div>
                            <div className={styles.Pg52Div1Container1}></div>
                            <p className={styles.Pg52ParagrafoDiv}>Best Friend <br />
                                This is my best friend, Alex.</p>
                        </div>
                        <div>
                            <div className={styles.Pg52Div2Container1}></div>
                            <p className={styles.Pg52ParagrafoDiv}>Work Friend <br />
                                This is my work friend, James. He is very
                                helpful and kind.</p>
                        </div>
                        <div>
                            <div className={styles.Pg52Div3Container1}></div>
                            <p className={styles.Pg52ParagrafoDiv}>Gym Friend <br />
                                This is my gym friend, David. He
                                motivates me to stay fit.</p>
                        </div>
                        <div>
                            <div className={styles.Pg52Div4Container1}></div>
                            <p className={styles.Pg52ParagrafoDiv}>Online Friend <br />
                                This is my online friend, Sam.</p>
                        </div>
                    </div>
                    <div className={styles.Pg52Container2}>
                        <div>
                            <div className={styles.Pg52Div1Container2}></div>
                            <p className={styles.Pg52ParagrafoDiv}>School Friend <br />
                                This is my school friend, Emma. She is
                                very good at math.
                            </p>
                        </div>
                        <div>
                            <div className={styles.Pg52Div2Container2}></div>
                            <p className={styles.Pg52ParagrafoDiv}>Neighbor Friend <br />
                                This is my neighbor friend, Sarah. We
                                often go jogging together.

                            </p>
                        </div>
                        <div>
                            <div className={styles.Pg52Div3Container2}></div>
                            <p className={styles.Pg52ParagrafoDiv}>College Friend <br />
                                This is my college friend, Rachel.</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina52;
