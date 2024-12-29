import React, { useState } from 'react';
import styles from './pagina56.module.css';
import pg56IconNotes from '../assets/Icons/Icon-Notes.png';

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
            <div className={styles.pg56Container}>
                <main className={styles.pg56Main}>
                    <div className={styles.pg56ContainerMain1}>
                        <div><img className={styles.pg56AsideImgNotes} src={pg56IconNotes} alt="" /></div>
                        <div>
                            <p>First name:
                                Gustavo (primeiro nome)</p>
                            <p>Middle name:
                                Amaral (nome do meio)</p>
                            <p>
                                Last name/Family name:
                                Dias (último nome/sobrenome)
                            </p>
                            <p>Full name:
                                Gustavo Amaral Dias (nome completo)</p>
                        </div>
                        <div></div>
                    </div>
                    <div className={styles.pg56ContainerMain2}>
                        <div><img className={styles.pg56AsideImgNotes} src={pg56IconNotes} alt="" /></div>
                        <div>
                            <p>First name:
                                Lucimar (primeiro nome)</p>
                            <p>Middle name:
                                Pereira (nome do meio)</p>
                            <p>Last name/Family name:
                                da Silva (último nome/sobrenome)</p>
                            <p>Full name:
                                Lucimar Pereira de Sousa (nome completo)</p></div>
                        <div></div>
                    </div>
                    <div className={styles.pg56ContainerMain3}>
                        <div><img className={styles.pg56AsideImgNotes} src={pg56IconNotes} alt="" /></div>
                        <div>
                            <p>First name:
                                Ines (primeiro nome)</p>
                            <p>Middle name:
                                Pagliari (nome do meio)</p>
                            <p>Last name/Family name:
                                Jardim (último nome/sobrenome)</p>
                            <p>Full name:
                                Ines Pagliari Jardim (nome completo)
                            </p>
                        </div>
                        <div></div>
                    </div>
                </main>
                <aside className={styles.pg56Aside}>
                    <div className={styles.pg56Asidecontainer}>
                        <div className={styles.pg56AsideNotes1}>
                            <img className={styles.pg56AsideImgNotes} src={pg56IconNotes} alt="" />
                            <p>Word Bank</p>
                        </div>
                        <div className={styles.pg56AsideNotes2}>
                            <p className={styles.pg56AsideNotes2Vermelho}>
                                First name
                                <br />
                                Middle name
                            </p>
                            <p>
                                Primeiro nome <br />
                                Nome do meio
                            </p>
                            <p className={styles.pg56AsideNotes2Vermelho}>
                                Last name/Family name
                                <br />
                                Full name
                            </p>
                            <p>
                                Último nome/Sobrenome
                                <br />
                                Nome completo
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};
export default Pagina56;
