import React, { useState } from 'react';
import styles from './pagina27.module.css';

const Pagina27 = () => {
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
            <div className={styles.Pg27Container}>
                <header className={styles.Pg27Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg27HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg27Main}>
                    <div>
                        <div className={styles.Pg27TableHeader}>NEGATIVA</div>
                        <table className={styles.Pg27StyledTable}>
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
                                    <td className={styles.Pg27Sujeito}>We</td>
                                    <td className={styles.Pg27VerboAuxiliar}>are</td>
                                    <td className={styles.Pg27Adverbio}>not</td>
                                    <td className={styles.Pg27Verbo}></td>
                                    <td className={styles.Pg27ObjetivoComplemento}>from Brazil</td>
                                    <td className={styles.Pg27Traducao}>Nós não somos do Brasil</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg27Sujeito}>We</td>
                                    <td className={styles.Pg27VerboAuxiliar}>aren't</td>
                                    <td className={styles.Pg27Adverbio}></td>
                                    <td className={styles.Pg27Verbo}></td>
                                    <td className={styles.Pg27ObjetivoComplemento}>at the cinema</td>
                                    <td className={styles.Pg27Traducao}>Nós não estamos no cinema.</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg27Sujeito}>We</td>
                                    <td className={styles.Pg27VerboAuxiliar}>ain't</td>
                                    <td className={styles.Pg27Adverbio}></td>
                                    <td className={styles.Pg27Verbo}></td>
                                    <td className={styles.Pg27ObjetivoComplemento}>15 and 16 years old</td>
                                    <td className={styles.Pg27Traducao}>Nós não temos 15 e 16 anos de idade.</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg27StyledTable}>
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
                                                    className={styles.Pg27InputCell}
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

export default Pagina27;
