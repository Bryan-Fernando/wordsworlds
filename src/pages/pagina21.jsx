import React, { useState } from 'react';
import styles from './pagina21.module.css';

const Pagina21 = () => {
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
            <div className={styles.Pg21Container}>
                <header className={styles.Pg21Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg21HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg21Main}>
                    <div>
                        <div className={styles.Pg21TableHeader}>INTERROGATIVA NEGATIVA</div>
                        <table className={styles.Pg21StyledTable}>
                            <thead>
                                <tr>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th>Sujeito</th>
                                    <th>'Not'<br />Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                    <th>Tradução</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles.Pg21Sujeito}>Is</td>
                                    <td className={styles.Pg21VerboAuxiliar}>she</td>
                                    <td className={styles.Pg21Adverbio}>not</td>
                                    <td className={styles.Pg21Verbo}></td>
                                    <td className={styles.Pg21ObjetivoComplemento}>Miss Debora?</td>
                                    <td className={styles.Pg21Traducao}>Ela não é a Srta. Demora?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg21Sujeito}>Ain't</td>
                                    <td className={styles.Pg21VerboAuxiliar}>she</td>
                                    <td className={styles.Pg21Adverbio}></td>
                                    <td className={styles.Pg21Verbo}></td>
                                    <td className={styles.Pg21ObjetivoComplemento}>at the gym?</td>
                                    <td className={styles.Pg21Traducao}>Ela não está na academia?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg21Sujeito}>Isn't</td>
                                    <td className={styles.Pg21VerboAuxiliar}>she</td>
                                    <td className={styles.Pg21Adverbio}></td>
                                    <td className={styles.Pg21Verbo}></td>
                                    <td className={styles.Pg21ObjetivoComplemento}>27 years old?</td>
                                    <td className={styles.Pg21Traducao}>Ela não tem 27 anos?</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg21StyledTable}>
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
                                                    className={styles.Pg21InputCell}
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

export default Pagina21;
