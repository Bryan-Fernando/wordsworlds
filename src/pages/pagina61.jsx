import React, { useState } from 'react';
import styles from './pagina61.module.css';
import pg57IconNotes from '../assets/Icons/Icon-Notes.png';

const Pagina61 = () => {
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
            <div className={styles.pg61Container}>
                <header className={styles.pg61Header}>
                    <h1 className={styles.pg61HeaderH1}>Grammar</h1>
                    <div>
                        <h2 className={styles.pg61HeaderH2}>What time is it?</h2>
                        <p>Que horas são?</p>
                    </div>
                </header>
                <div className={styles.pg61ContainerMainDiv}>
                    <div>
                        <main className={styles.pg61Main}>
                            <div className={styles.pg61MainContainer1}>
                                <p>No sistema de um relógio digital, indicamos inicialmente as horas, seguidas pelos minutos, que
                                    variam de 0 a 59.</p>
                            </div>
                            <div className={styles.pg61MainContainer2}>
                                <div className={styles.pg61MainLado1}>
                                    <p>10:00 - It’s ten o’clock.</p>
                                    <div className={styles.pg61LinhaHorizontal}></div>
                                    <p>
                                        10:01 - It’s ten oh one <br />
                                        10:02 - It’s ten oh two <br />
                                        10:03 - It’s ten oh three  <br />
                                        10:04 - It’s ten oh four <br />
                                        10:05 - It’s ten oh five <br />
                                        10:06 - It’s ten oh six <br />
                                        10:07 - It’s ten oh seven  <br />
                                        10:08 - It’s ten oh eight <br />
                                        10:09 - It’s ten oh nine <br />
                                    </p>
                                    <div className={styles.pg61LinhaHorizontal}></div>
                                    <p>
                                        10:10 - It’s ten ten. <br />
                                        10:15 - It’s ten fifteen. <br />
                                        10:20 - It’s ten twenty. <br />
                                        10:25 - It’s ten twenty-five <br />
                                        10:30 - It’s ten thirty. <br />
                                        10:35 - It’s ten thirty-five. <br />
                                        10:40 - It’s ten forty. <br />
                                        10:45 - It’s ten forty-five. <br />
                                        10:50 - It’s ten fifty. <br />
                                        10:55 - It’s ten fifty-five <br />
                                    </p>
                                    <div className={styles.pg61LinhaHorizontal}></div>
                                    <p>It’s almost eleven o’clock.</p>
                                </div>
                                <div className={styles.pg61MainListaCinza}></div>
                                <div className={styles.pg61MainLado2}>
                                    <p>10:00 - São 10 horas</p>
                                    <div className={styles.pg61LinhaHorizontal}></div>
                                    <p>
                                        10:01 - São dez e um <br />
                                        10:02 - São dez e dois <br />
                                        10:03 - São dez e três <br />
                                        10:04 - São dez e quatro <br />
                                        10:05 - São dez e cinco <br />
                                        10:06 - São dez e seis <br />
                                        10:07 - São dez e sete <br />
                                        10:08 - São dez e oito <br />
                                        10:09 - São dez e nove <br />
                                    </p>
                                    <div className={styles.pg61LinhaHorizontal}></div>
                                    <p>
                                        10:10 - São dez e dez. <br />
                                        10:15 - São dez e quinze. <br />
                                        10:20 - São dez e vinte. <br />
                                        10:25 - São dez e vinte e cinco. <br />
                                        10:30 - São dez e trinta. <br />
                                        10:35 - São dez e trinta e cinco. <br />
                                        10:40 - São dez e quarenta. <br />
                                        10:45 - São dez e quarenta e cinco. <br />
                                        10:50 - São dez e cinquenta. <br />
                                        10:55 - São dez e cinquenta e cinco. <br />
                                    </p>
                                    <div className={styles.pg61LinhaHorizontal}></div>
                                    <p>São quase onze horas
                                    </p>
                                </div>
                            </div>
                            <div className={styles.pg61MainContainer3}>
                                <div className={styles.pg61MainLado1}>
                                    <p>11:00 - It’s eleven o’clock</p>
                                </div>
                                <div className={styles.pg61MainListaCinza}></div>
                                <div className={styles.pg61MainLado2}>
                                    <p>11:00 - São onze horas </p>
                                </div>
                            </div>
                        </main>
                    </div>
                    <div>
                        <div className={styles.pg61Aside}>
                            <div>
                                <p>Telling the time <br />
                                    Dizendo as horas</p>
                                <div><p>imagem aqui</p></div>
                            </div>
                            <div>
                                <p>Ordem <br />It’s <br />
                                    São</p>
                                <p>Hora <br /> ten <br />
                                    dez</p>
                                <p> oh one <br />
                                    e um</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Pagina61;
