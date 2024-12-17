import React, { useState } from 'react';
import styles from './pagina56.module.css';
import Pg56IconNotes from '../assets/Icons/Icon-Notes.png';

const Pagina56 = () => {
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
                <header className={styles.Pg56Header}>
                    <h1 className={styles.Pg56HeaderH1}>Names and Titles (Mr. Mrs. Miss. Ms. Ma’am)</h1>
                </header>
                <main className={styles.Pg56Main}>
                    <div className={styles.ContainerDiv1}>
                        <div>
                            <div className={styles.Container1Div1}></div>
                            <p>Ma’am Jeaneta Mc. Cartney</p>
                        </div>
                        <div>
                            <div className={styles.Container1Div2}></div>
                            <p>Mrs Carina Sanches
                            </p>
                        </div>
                        <div>
                            <div className={styles.Container1Div3}></div>
                            <p>Ms Olivia Gomes</p>
                        </div>
                    </div>
                    <div className={styles.ContainerDiv2}>
                        <div>
                            <div className={styles.Container2Div1}></div>
                            <p>Miss Leticia Pagliari</p>
                        </div>
                        <div>
                            <div className={styles.Container2Div2}></div>
                            <p>Mr Ronaldo Willian
                            </p>
                        </div>
                    </div>
                </main>
                <aside className={styles.Pg56Aside}>
                    <div className={styles.Pg56Asidecontainer}>
                        <div className={styles.Pg56AsideNotes1}>
                            <img className={styles.Pg56AsideImgNotes} src={Pg56IconNotes} alt="" />
                            <p>Word Bank</p>
                        </div>
                        <div className={styles.Pg56AsideNotes2}>
                            <p className={styles.Pg56AsideNotes2Vermelho}>
                                Mr
                                <br />
                                Mrs
                                <br />
                                Miss <br />
                                Ms <br />
                                Ma’am <br />
                            </p>
                            <p>
                                Sr (senhor) <br />
                                Sra (senhora)
                                <br />
                                Srta (solteira) <br />
                                Ms (mulher adulta sem especificar seu estado civil) <br />
                                Madame (forma cortês de se dirigir a uma mulher) <br />
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};
export default Pagina56;
