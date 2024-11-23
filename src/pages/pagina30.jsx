import React, { useState } from 'react';
import styles from './pagina30.module.css';

const Pagina30 = () => {
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
            <div className={styles.Pg30Container}>
                <header className={styles.Pg30Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg30HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg30Main}>
                    <div>
                        <div className={styles.Pg30TableHeader}>AFIRMATIVA</div>
                        <table className={styles.Pg30StyledTable}>
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
                                    <td className={styles.Pg30Sujeito}>They</td>
                                    <td className={styles.Pg30VerboAuxiliar}>are</td>
                                    <td className={styles.Pg30Adverbio}></td>
                                    <td className={styles.Pg30Verbo}></td>
                                    <td className={styles.Pg30ObjetivoComplemento}>from Brazil</td>
                                    <td className={styles.Pg30Traducao}>Eles/Elas são do Brasil.</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg30Sujeito}>They</td>
                                    <td className={styles.Pg30VerboAuxiliar}>are</td>
                                    <td className={styles.Pg30Adverbio}></td>
                                    <td className={styles.Pg30Verbo}></td>
                                    <td className={styles.Pg30ObjetivoComplemento}>at the cinema</td>
                                    <td className={styles.Pg30Traducao}>Eles/Elas estão no cinema.</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg30Sujeito}>They</td>
                                    <td className={styles.Pg30VerboAuxiliar}>are</td>
                                    <td className={styles.Pg30Adverbio}></td>
                                    <td className={styles.Pg30Verbo}></td>
                                    <td className={styles.Pg30ObjetivoComplemento}>15 and 16 years old</td>
                                    <td className={styles.Pg30Traducao}>Eles/Elas têm 15 e 16 anos de idade.</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg30StyledTable}>
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
                                                    className={styles.Pg30InputCell}
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

export default Pagina30;
