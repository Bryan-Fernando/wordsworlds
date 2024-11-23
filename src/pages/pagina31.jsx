import React, { useState } from 'react';
import styles from './pagina31.module.css';

const Pagina31 = () => {
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
            <div className={styles.Pg31Container}>
                <header className={styles.Pg31Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg31HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg31Main}>
                    <div>
                        <div className={styles.Pg31TableHeader}>NEGATIVA</div>
                        <table className={styles.Pg31StyledTable}>
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
                                <tr>
                                    <td className={styles.Pg31Sujeito}>They</td>
                                    <td className={styles.Pg31VerboAuxiliar}>are</td>
                                    <td className={styles.Pg31Adverbio}>not</td>
                                    <td className={styles.Pg31Verbo}></td>
                                    <td className={styles.Pg31ObjetivoComplemento}>from Brasil</td>
                                    <td className={styles.Pg31Traducao}>Eles/Elas não são do Brasil</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg31Sujeito}>They</td>
                                    <td className={styles.Pg31VerboAuxiliar}>aren't</td>
                                    <td className={styles.Pg31Adverbio}></td>
                                    <td className={styles.Pg31Verbo}></td>
                                    <td className={styles.Pg31ObjetivoComplemento}>at the cinema</td>
                                    <td className={styles.Pg31Traducao}>Eles/Elas não estão no cinema</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg31Sujeito}>They</td>
                                    <td className={styles.Pg31VerboAuxiliar}>ain't</td>
                                    <td className={styles.Pg31Adverbio}></td>
                                    <td className={styles.Pg31Verbo}></td>
                                    <td className={styles.Pg31ObjetivoComplemento}>15 and 16 years old</td>
                                    <td className={styles.Pg31Traducao}>Eles/Elas não têm 15 e 16 anos de idade</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg31StyledTable}>
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
                                                    className={styles.Pg31InputCell}
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

export default Pagina31;
