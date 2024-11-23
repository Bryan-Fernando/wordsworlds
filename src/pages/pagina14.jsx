import React, { useState } from 'react';
import styles from './pagina14.module.css';

const Pagina14 = () => {

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
            <div className={styles.Pg14Container}>
                <header className={styles.Pg14Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg14HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg14Main}>
                    <div>
                        <div className={styles.Pg14TableHeader}>AFIRMATIVA</div>
                        <table className={styles.Pg14StyledTable}>
                            <thead>
                                <tr>
                                    <th>Sujeito</th>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th>Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                    <th>Tradução</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles.Pg14Sujeito}>He</td>
                                    <td className={styles.Pg14VerboAuxiliar}>is</td>
                                    <td className={styles.Pg14Adverbio}></td>
                                    <td className={styles.Pg14Verbo}></td>
                                    <td className={styles.Pg14ObjetivoComplemento}>Mr. Smith</td>
                                    <td className={styles.Pg14Traducao}>Ele é o senhor Smith</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg14Sujeito}>He</td>
                                    <td className={styles.Pg14VerboAuxiliar}>is</td>
                                    <td className={styles.Pg14Adverbio}></td>
                                    <td className={styles.Pg14Verbo}></td>
                                    <td className={styles.Pg14ObjetivoComplemento}>at the bank</td>
                                    <td className={styles.Pg14Traducao}>Ele está no banco</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg14Sujeito}>He</td>
                                    <td className={styles.Pg14VerboAuxiliar}>is</td>
                                    <td className={styles.Pg14Adverbio}></td>
                                    <td className={styles.Pg14Verbo}></td>
                                    <td className={styles.Pg14ObjetivoComplemento}>29 years old</td>
                                    <td className={styles.Pg14Traducao}>Ele tem 29 anos</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg14StyledTable}>
                            <thead>
                                <tr>
                                    <th>Sujeito</th>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th>Advérbio</th>
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
                                                    value={value}
                                                    onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
                                                    className={styles.Pg14InputCell}
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

export default Pagina14;
