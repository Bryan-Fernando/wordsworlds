import React, { useState } from 'react';
import styles from './pagina18.module.css';

const Pagina18 = () => {
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
            <div className={styles.Pg18Container}>
                <header className={styles.Pg18Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg18HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg18Main}>
                    <div>
                        <div className={styles.Pg18TableHeader}>AFIRMATIVA</div>
                        <table className={styles.Pg18StyledTable}>
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
                                    <td className={styles.Pg18Sujeito}>She</td>
                                    <td className={styles.Pg18VerboAuxiliar}>is</td>
                                    <td className={styles.Pg18Adverbio}></td>
                                    <td className={styles.Pg18Verbo}></td>
                                    <td className={styles.Pg18ObjetivoComplemento}>Miss Debora</td>
                                    <td className={styles.Pg18Traducao}>Ela é a Srta. Debora</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg18Sujeito}>She</td>
                                    <td className={styles.Pg18VerboAuxiliar}>is</td>
                                    <td className={styles.Pg18Adverbio}></td>
                                    <td className={styles.Pg18Verbo}></td>
                                    <td className={styles.Pg18ObjetivoComplemento}>at the gym</td>
                                    <td className={styles.Pg18Traducao}>Ela está na academia</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg18Sujeito}>She</td>
                                    <td className={styles.Pg18VerboAuxiliar}>is</td>
                                    <td className={styles.Pg18Adverbio}></td>
                                    <td className={styles.Pg18Verbo}></td>
                                    <td className={styles.Pg18ObjetivoComplemento}>27 years old</td>
                                    <td className={styles.Pg18Traducao}>Ela tem 27 anos</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg18StyledTable}>
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
                                                    className={styles.Pg18InputCell}
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

export default Pagina18;
