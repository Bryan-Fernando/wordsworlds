import React, { useState } from 'react';
import styles from './pagina17.module.css';

const Pagina17 = () => {
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
            <div className={styles.Pg17Container}>
                <header className={styles.Pg17Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg17HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg17Main}>
                    <div>
                        <div className={styles.Pg17TableHeader}>INTERROGATIVA NEGATIVA</div>
                        <table className={styles.Pg17StyledTable}>
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
                                <tr>
                                    <td className={styles.Pg17Sujeito}>Is</td>
                                    <td className={styles.Pg17VerboAuxiliar}>he</td>
                                    <td className={styles.Pg17Adverbio}>not</td>
                                    <td className={styles.Pg17Verbo}></td>
                                    <td className={styles.Pg17ObjetivoComplemento}>Mr. Smith?</td>
                                    <td className={styles.Pg17Traducao}>Ele não é o Sr. Smith?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg17Sujeito}>Ain't</td>
                                    <td className={styles.Pg17VerboAuxiliar}>he</td>
                                    <td className={styles.Pg17Adverbio}></td>
                                    <td className={styles.Pg17Verbo}></td>
                                    <td className={styles.Pg17ObjetivoComplemento}>at the bank?</td>
                                    <td className={styles.Pg17Traducao}>Ele não está no banco?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg17Sujeito}>Isn't</td>
                                    <td className={styles.Pg17VerboAuxiliar}>he</td>
                                    <td className={styles.Pg17Adverbio}></td>
                                    <td className={styles.Pg17Verbo}></td>
                                    <td className={styles.Pg17ObjetivoComplemento}>29 years old?</td>
                                    <td className={styles.Pg17Traducao}>Ele não tem 29 anos?</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg17StyledTable}>
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
                                                    className={styles.Pg17InputCell}
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

export default Pagina17;
