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
                        <h2 className={styles.pg60HeaderH2}>What time is it?</h2>
                        <p>Que horas são?</p>
                    </div>
                </header>
                <main className={styles.pg60Main}>
                    <div className={styles.pg60Caixinha}>
                        <p>a.m = before noon (antes de meio-dia) <br />
                            p.m = after noon (depois de meio-dia)</p>
                    </div>
                    <div className={styles.pg60MainContainer}>
                        <div>
                            <div className={styles.pg60Quadro}></div>
                            <p>It is eight o’clock. <br />
                                (São oito horas.)
                            </p>
                        </div>
                        <div>
                            <div className={styles.pg60Quadro}></div>
                            <p>It is ten ten. <br />
                                (São dez e dez.)</p>
                        </div>
                        <div>
                            <div className={styles.pg60Quadro}></div>
                            <p>It is seven-fifteen. <br />
                                (São sete e quinze.)</p>
                        </div>
                        <div>
                            <div className={styles.pg60Quadro}></div>
                            <p>It is five-fourteen. <br />
                                (São cinco e quatorze.)
                            </p>
                        </div>
                    </div>
                    <div className={styles.pg60MainContainer}>
                        <div>
                            <div className={styles.pg60Quadro}></div>
                            <p>It is one twenty-nine. <br />
                                (São uma e vinte e nove.)</p>
                        </div>
                        <div>
                            <div className={styles.pg60Quadro}></div>
                            <p>It is noon. <br />
                                (É meio-dia.)</p>
                        </div>
                        <div>
                            <div className={styles.pg60Quadro}></div>
                            <p>It is nine forty-five. <br />
                                It’s fifteen to ten <br />
                                (São nove e quarenta e cinco) <br />
                                (São quinze para as dez.)
                            </p>
                        </div>
                        <div>
                            <div className={styles.pg60Quadro}></div>
                            <p>It is three-fifty. <br />
                                It’s ten to four. <br />
                                (São três e cinquenta) <br />
                                (São dez para às quatro.)</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};
export default Pagina60;
