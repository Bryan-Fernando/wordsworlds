import React, { useState } from 'react';
import styles from './pagina15.module.css';

const Pagina15 = () => {
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
            <div className={styles.Pg15Container}>
                <header className={styles.Pg15Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg15HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg15Main}>
                    <div>
                        <div className={styles.Pg15TableHeader}>NEGATIVA</div>
                        <table className={styles.Pg15StyledTable}>
                            <thead>
                                <tr>
                                    <th>Sujeito</th>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th>'Not'<br />Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                    <th>Tradução</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles.Pg15Sujeito}>He</td>
                                    <td className={styles.Pg15VerboAuxiliar}>is</td>
                                    <td className={styles.Pg15Adverbio}>not</td>
                                    <td className={styles.Pg15Verbo}></td>
                                    <td className={styles.Pg15ObjetivoComplemento}>Mr. Smith</td>
                                    <td className={styles.Pg15Traducao}>Ele não é o senhor Smith</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg15Sujeito}>He</td>
                                    <td className={styles.Pg15VerboAuxiliar}>isn't</td>
                                    <td className={styles.Pg15Adverbio}></td>
                                    <td className={styles.Pg15Verbo}></td>
                                    <td className={styles.Pg15ObjetivoComplemento}>at the bank</td>
                                    <td className={styles.Pg15Traducao}>Você não está no banco</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg15Sujeito}>He</td>
                                    <td className={styles.Pg15VerboAuxiliar}>ain't</td>
                                    <td className={styles.Pg15Adverbio}></td>
                                    <td className={styles.Pg15Verbo}></td>
                                    <td className={styles.Pg15ObjetivoComplemento}>29 years old</td>
                                    <td className={styles.Pg15Traducao}>Você não tem 29 anos</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg15StyledTable}>
                            <thead>
                                <tr>
                                    <th>Sujeito</th>
                                    <th>Verbo <br /> Auxiliar</th>
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
                                                    className={styles.Pg15InputCell}
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

export default Pagina15;