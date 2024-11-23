import React, { useState } from 'react';
import styles from './pagina5.module.css';

const Pagina5 = () => {
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
            <div className={styles.Pg5Container}>
                <header className={styles.Pg5Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg5HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg5Main}>
                    <div>
                        <div className={styles.Pg5TableHeader}>AFIRMATIVA</div>
                        <table className={styles.Pg5StyledTable}>
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
                                    <td className={styles.Pg5Sujeito}>I</td>
                                    <td className={styles.Pg5VerboAuxiliar}>am</td>
                                    <td className={styles.Pg5Adverbio}></td>
                                    <td className={styles.Pg5Verbo}></td>
                                    <td className={styles.Pg5ObjetivoComplemento}></td>
                                    <td className={styles.Pg5Traducao}></td>
                                </tr>

                                <tr>
                                    <td className={styles.Pg5Sujeito}>I</td>
                                    <td className={styles.Pg5VerboAuxiliar}>am</td>
                                    <td className={styles.Pg5Adverbio}></td>
                                    <td className={styles.Pg5Verbo}></td>
                                    <td className={styles.Pg5ObjetivoComplemento}>at work</td>
                                    <td className={styles.Pg5Traducao}></td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg5Sujeito}>I</td>
                                    <td className={styles.Pg5VerboAuxiliar}>am</td>
                                    <td className={styles.Pg5Adverbio}></td>
                                    <td className={styles.Pg5Verbo}></td>
                                    <td className={styles.Pg5ObjetivoComplemento}>years old</td>
                                    <td className={styles.Pg5Traducao}></td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg5StyledTable}>
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
                                                    id={`input-${rowIndex}-${colIndex}`}
                                                    className={styles.Pg5InputCell}
                                                    value={value}
                                                    rows="1"
                                                    onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
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

export default Pagina5;
