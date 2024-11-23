import React, { useState } from 'react';
import styles from './pagina33.module.css';

const Pagina33 = () => {
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
            <div className={styles.Pg33Container}>
                <header className={styles.Pg33Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg33HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg33Main}>
                    <div>
                        <div className={styles.Pg33TableHeader}>INTERROGATIVA NEGATIVA</div>
                        <table className={styles.Pg33StyledTable}>
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
                                <tr>
                                    <td className={styles.Pg33Sujeito}>Are</td>
                                    <td className={styles.Pg33VerboAuxiliar}>they</td>
                                    <td className={styles.Pg33Adverbio}>not</td>
                                    <td className={styles.Pg33Verbo}></td>
                                    <td className={styles.Pg33ObjetivoComplemento}>from Brazil?</td>
                                    <td className={styles.Pg33Traducao}>Eles não são do Brasil?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg33Sujeito}>Aren't</td>
                                    <td className={styles.Pg33VerboAuxiliar}>they</td>
                                    <td className={styles.Pg33Adverbio}></td>
                                    <td className={styles.Pg33Verbo}></td>
                                    <td className={styles.Pg33ObjetivoComplemento}>at the cinema?</td>
                                    <td className={styles.Pg33Traducao}>Eles não estão no cinema?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg33Sujeito}>Ain't</td>
                                    <td className={styles.Pg33VerboAuxiliar}>they</td>
                                    <td className={styles.Pg33Adverbio}></td>
                                    <td className={styles.Pg33Verbo}></td>
                                    <td className={styles.Pg33ObjetivoComplemento}>15 and 16 years old?</td>
                                    <td className={styles.Pg33Traducao}>Eles não têm 15 e 16 anos?</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg33StyledTable}>
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
                                                    className={styles.Pg33InputCell}
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

export default Pagina33;
