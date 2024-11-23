import React, { useState } from 'react';
import styles from './pagina24.module.css';

const Pagina24 = () => {
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
            <div className={styles.Pg24Container}>
                <header className={styles.Pg24Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg24HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg24Main}>
                    <div>
                        <div className={styles.Pg24TableHeader}>INTERROGATIVA AFIRMATIVA</div>
                        <table className={styles.Pg24StyledTable}>
                            <thead>
                                <tr>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th>Sujeito</th>
                                    <th>Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                    <th>Tradução</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles.Pg24VerboAuxiliar}>Is</td>
                                    <td className={styles.Pg24Sujeito}>it</td>
                                    <td className={styles.Pg24Adverbio}></td>
                                    <td className={styles.Pg24Verbo}></td>
                                    <td className={styles.Pg24ObjetivoComplemento}>a Ford 68?</td>
                                    <td className={styles.Pg24Traducao}>É um Ford 68?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg24VerboAuxiliar}>Is</td>
                                    <td className={styles.Pg24Sujeito}>it</td>
                                    <td className={styles.Pg24Adverbio}></td>
                                    <td className={styles.Pg24Verbo}></td>
                                    <td className={styles.Pg24ObjetivoComplemento}>next to the library?</td>
                                    <td className={styles.Pg24Traducao}>Está / Fica ao lado da biblioteca?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg24VerboAuxiliar}>Is</td>
                                    <td className={styles.Pg24Sujeito}>it</td>
                                    <td className={styles.Pg24Adverbio}></td>
                                    <td className={styles.Pg24Verbo}></td>
                                    <td className={styles.Pg24ObjetivoComplemento}>ok?</td>
                                    <td className={styles.Pg24Traducao}>Está tudo bem?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg24VerboAuxiliar}>Is</td>
                                    <td className={styles.Pg24Sujeito}>it</td>
                                    <td className={styles.Pg24Adverbio}></td>
                                    <td className={styles.Pg24Verbo}></td>
                                    <td className={styles.Pg24ObjetivoComplemento}>3 years old?</td>
                                    <td className={styles.Pg24Traducao}>Tem 3 anos?</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg24StyledTable}>
                            <thead>
                                <tr>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th>Sujeito</th>
                                    <th>'Not'<br /> Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                    <th>Tradução</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValues.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    className={styles.Pg24InputCell}
                                                    value={value}
                                                    onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
                                                    rows="1"
                                                    style={{
                                                        resize: 'none',
                                                        overflowWrap: 'break-word',
                                                        wordWrap: 'break-word',
                                                    }}
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina24;
