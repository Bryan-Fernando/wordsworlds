import React, { useState } from 'react';
import styles from './pagina43.module.css';
import Pg43IconNotes from '../assets/Icons/Icon-Notes.png';
import Pagina43_Primeira_imagem from '../assets/Images/Pagina43_Primeira_imagem.jpg';
import Pagina43_Segunda_imagem from '../assets/Images/Pagina43_Segunda_imagem.jpg';
import Pagina43_Terceira_imagem from '../assets/Images/Pagina43_Terceira_imagem.jpg';
import Pagina43_Quarta_imagem from '../assets/Images/Pagina43_Quarta_imagem.jpg';
import Pagina43_Quinta_imagem from '../assets/Images/Pagina43_Quinta_imagem.jpg';


const Pagina43 = () => {
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
            <div className={styles.Pg43Container}>
                <header className={styles.Pg43Header}>
                    <h1 className={styles.Pg43HeaderH1}>Introductions</h1>
                </header>
                <main className={styles.Pg43Main}>
                    <div className={styles.Pg43ContainerMain}>
                        <div className={styles.Pg43ContainerDiv}>
                            <img className={styles.Pg43MainImagems} src={Pagina43_Primeira_imagem} alt="" />
                            <p className={styles.Pg43MainParagrafoBold}>Name:<br />Age:<br />Nationality:<br />City:</p>
                            <p>I'm Sister Juliana Garcia.<br />I'm 32 years old. <br />I'm Brazilian. <br />
                               I'm from Machadinho D’Oeste.
                            </p>
                        </div>
                        <div className={styles.Pg43ContainerDiv}>
                            <img className={styles.Pg43MainImagems} src={Pagina43_Segunda_imagem} alt="" />
                            <p className={styles.Pg43MainParagrafoBold}>Name:<br />Age:<br />Nationality:<br />City:</p>
                            <p>This is Jones Oliveira.<br />He's 31 years old.<br />He is Brazilian.<br />
                               He's from Ariquemes.
                            </p>
                        </div>
                        <div className={styles.Pg43ContainerDiv}>
                            <img className={styles.Pg43MainImagems} src={Pagina43_Terceira_imagem} alt="" />
                            <p className={styles.Pg43MainParagrafoBold}>Name:<br />Age:<br />Nationality:<br />City:</p>
                            <p>This is Laura Brandhuber.<br />She's 30 years old.<br /> She is Brazilian.<br />
                               She's from Belo Horizonte.
                            </p>
                        </div>
                        <div className={styles.Pg43ContainerDiv}>
                            <img className={styles.Pg43MainImagems} src={Pagina43_Quarta_imagem} alt="" />
                            <p className={styles.Pg43MainParagrafoBold}>Name:<br />Age:<br />Nationality:<br />City:</p>
                            <p>I’m Rogério Madeira.<br /> I’m 35 years old.<br /> I’m Brazilian.<br />
                               I’m from Ariquemes.
                            </p>
                        </div>
                        <div className={styles.Pg43ContainerDiv}>
                            <img className={styles.Pg43MainImagems} src={Pagina43_Quinta_imagem} alt="" />
                            <p className={styles.Pg43MainParagrafoBold}>Name:<br />Age:<br />Nationality:<br />City:</p>
                            <p>This is Gustavo Farias.<br /> He's 38 years old.<br /> He's Brazilian.<br />
                               He's from Mato Grosso.
                            </p>
                        </div>
                    </div>
                </main>
                <aside className={styles.Pg43Aside}>
                    <div className={styles.Pg43Asidecontainer}>
                        <div className={styles.Pg43AsideNotes1}>
                            <img className={styles.Pg43AsideImgNotes} src={Pg43IconNotes} alt="" />
                            <p>Word Bank</p>
                        </div>
                        <div className={styles.Pg43AsideNotes2}>
                            <p className={styles.Pg43AsideNotes2Negrito}>
                                Who...? <br />
                                What...? <br />
                                Where...? <br />
                                When...? <br />
                                What Time...? <br />
                            </p>
                            <p>
                                Quem...? <br />
                                O que | Que | Qual | Quais...? <br />
                                Aonde | Onde...? <br />
                                Quando...? <br />
                                Que horas...? <br />
                            </p>
                            <div className={styles.Pg43VerticalLine}></div>
                            <p className={styles.Pg43AsideNotes2Negrito}>
                                How? <br />
                                How Old? <br />
                            </p>
                            <p>
                                Como? <br />
                                Quantos anos? <br /> 
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina43;
