import React, { useState } from 'react';
import styles from './pagina16.module.css';

const Pagina16 = () => {
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
            <div className={styles.Pg16Container}>
                <header className={styles.Pg16Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg16HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg16Main}>
                    <div>
                        <div className={styles.Pg16TableHeader}>INTERROGATIVA AFIRMATIVA</div>
                        <table className={styles.Pg16StyledTable}>
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
                                    <td className={styles.Pg16Sujeito}>Is</td>
                                    <td className={styles.Pg16VerboAuxiliar}>he</td>
                                    <td className={styles.Pg16Adverbio}></td>
                                    <td className={styles.Pg16Verbo}></td>
                                    <td className={styles.Pg16ObjetivoComplemento}>Mr. Smith?</td>
                                    <td className={styles.Pg16Traducao}>Ele é o Sr. Smith?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg16Sujeito}>Is</td>
                                    <td className={styles.Pg16VerboAuxiliar}>he</td>
                                    <td className={styles.Pg16Adverbio}></td>
                                    <td className={styles.Pg16Verbo}></td>
                                    <td className={styles.Pg16ObjetivoComplemento}>at the bank?</td>
                                    <td className={styles.Pg16Traducao}>Ele está no banco?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg16Sujeito}>Is</td>
                                    <td className={styles.Pg16VerboAuxiliar}>he</td>
                                    <td className={styles.Pg16Adverbio}></td>
                                    <td className={styles.Pg16Verbo}></td>
                                    <td className={styles.Pg16ObjetivoComplemento}>29 years old?</td>
                                    <td className={styles.Pg16Traducao}>Ele tem 29 anos?</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg16StyledTable}>
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
                                                    className={styles.Pg16InputCell}
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

export default Pagina16;
