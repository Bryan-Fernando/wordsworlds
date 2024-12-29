import React, { useState } from 'react';
import styles from './pagina59.module.css';
import pg57IconNotes from '../assets/Icons/Icon-Notes.png';

const Pagina59 = () => {
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
            <div className={styles.pg59Container}>
                <header className={styles.pg59Header}>
                    <h1 className={styles.pg59HeaderH1}>Grammar</h1>
                    <div>
                        <h2 className={styles.pg59HeaderH2}>Telling the time</h2>
                        <p>Dizendo as horas</p>
                    </div>
                </header>
                <main className={styles.pg59Main}>
                    <div className={styles.pg59MainContainer1}>
                        <p>OBS: Em inglês existem (têm) duas formas de dizer as horas:</p>
                        <p>1. O sistema do relógio analógico conforme exemplos. </p>
                        <p>1.1 Neste sistema mencionamos primeiro as horas seguida dos minutos até os 30 minutos.</p>
                        <p>1.2 Após os 30 minutos invertemos mencionamos primeiro os minutos seguido da hora até 1 minuto
                            para a hora seguinte</p>
                    </div>
                    <div className={styles.pg59MainContainer2}>
                        <div className={styles.pg59MainLado1}>
                            <p>10:00 - It’s ten o’clock.</p>
                            <div className={styles.pg59LinhaHorizontal}></div>
                            <p>
                                10:05 - It’s five past/after ten. <br />
                                10:10 - It’s ten past/after ten. <br />
                                10:15 - It’s quarter past/after ten. <br />
                                10:20 - It’s twenty past/after ten. <br />
                                10:25 - It’s twenty-five past/after ten. <br />
                                10:30 - It’s half past/after ten. <br />
                            </p>
                            <div className={styles.pg59LinhaHorizontal}></div>
                            <p>
                                10:35 - It’s twenty-five to eleven. <br />
                                10:40 - It’s twenty to eleven. <br />
                                10:45 - It’s quarter to eleven. <br />
                                10:50 - It’s ten to eleven. <br />
                                10:55 - It’s five to eleven. <br />
                            </p>
                        </div>
                        <div className={styles.pg59MainListaCinza}></div>
                        <div className={styles.pg59MainLado2}>
                            <p>10:00 - São 10 horas</p>
                            <div className={styles.pg59LinhaHorizontal}></div>
                            <p>
                                10:05 - São 10 e 5 <br />
                                10:10 - São 10 e 10 <br />
                                10:15 - São 10 e 15 <br />
                                10:20 - São 10 e 20 <br />
                                10:25 - São 10 e 25 <br />
                                10:30 - São 10 e 30 <br />
                            </p>
                            <div className={styles.pg59LinhaHorizontal}></div>
                            <p>
                                10:35 - São/Faltam 25 para às 11 <br />
                                10:40 - São/Faltam 20 para às 11 <br />
                                10:45 - São/Faltam 15 para às 11 <br />
                                10:50 - São/Faltam 10 para às 11 <br />
                                10:55 - São/Faltam 5 para às 11 <br />
                            </p>
                        </div>
                    </div>
                </main>
                <aside className={styles.pg59Aside}>
                    <div className={styles.pg59AsideContainer}>
                        <p>Imagem aq</p>
                    </div>
                </aside>
            </div>
        </div>
    );
};
export default Pagina59;
