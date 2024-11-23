import React, { useState } from 'react';
import styles from './pagina32.module.css';

const Pagina32 = () => {
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
            <div className={styles.Pg32Container}>
                <header className={styles.Pg32Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg32HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg32Main}>
                    <div>
                        <div className={styles.Pg32TableHeader}>INTERROGATIVA AFIRMATIVA</div>
                        <table className={styles.Pg32StyledTable}>
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
                                    <td className={styles.Pg32Sujeito}>Are</td>
                                    <td className={styles.Pg32VerboAuxiliar}>they</td>
                                    <td className={styles.Pg32Adverbio}></td>
                                    <td className={styles.Pg32Verbo}></td>
                                    <td className={styles.Pg32ObjetivoComplemento}>from Brazil?</td>
                                    <td className={styles.Pg32Traducao}>Eles são do Brasil?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg32Sujeito}>Are</td>
                                    <td className={styles.Pg32VerboAuxiliar}>they</td>
                                    <td className={styles.Pg32Adverbio}></td>
                                    <td className={styles.Pg32Verbo}></td>
                                    <td className={styles.Pg32ObjetivoComplemento}>at the cinema?</td>
                                    <td className={styles.Pg32Traducao}>Eles estão no cinema?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg32Sujeito}>Are</td>
                                    <td className={styles.Pg32VerboAuxiliar}>they</td>
                                    <td className={styles.Pg32Adverbio}></td>
                                    <td className={styles.Pg32Verbo}></td>
                                    <td className={styles.Pg32ObjetivoComplemento}>15 and 16 years old?</td>
                                    <td className={styles.Pg32Traducao}>Eles têm 15 e 16 anos?</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg32StyledTable}>
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
                                                    className={styles.Pg32InputCell}
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

export default Pagina32;
