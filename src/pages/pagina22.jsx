import React, { useState } from 'react';
import styles from './pagina22.module.css';

const Pagina22 = () => {
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
            <div className={styles.Pg22Container}>
                <header className={styles.Pg22Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg22HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg22Main}>
                    <div>
                        <div className={styles.Pg22TableHeader}>AFIRMATIVA</div>
                        <table className={styles.Pg22StyledTable}>
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
                                    <td className={styles.Pg22Sujeito}>It</td>
                                    <td className={styles.Pg22VerboAuxiliar}>is</td>
                                    <td className={styles.Pg22Adverbio}></td>
                                    <td className={styles.Pg22Verbo}></td>
                                    <td className={styles.Pg22ObjetivoComplemento}>(hot)</td>
                                    <td className={styles.Pg22Traducao}>Está calor / quente. É quente</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg22Sujeito}>It</td>
                                    <td className={styles.Pg22VerboAuxiliar}>is</td>
                                    <td className={styles.Pg22Adverbio}></td>
                                    <td className={styles.Pg22Verbo}></td>
                                    <td className={styles.Pg22ObjetivoComplemento}>(next to the library)</td>
                                    <td className={styles.Pg22Traducao}>Esta/Fica ao lado da biblioteca</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg22Sujeito}>It</td>
                                    <td className={styles.Pg22VerboAuxiliar}>is</td>
                                    <td className={styles.Pg22Adverbio}></td>
                                    <td className={styles.Pg22Verbo}></td>
                                    <td className={styles.Pg22ObjetivoComplemento}>(okay)</td>
                                    <td className={styles.Pg22Traducao}>Está tudo bem</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg22Sujeito}>It</td>
                                    <td className={styles.Pg22VerboAuxiliar}>is</td>
                                    <td className={styles.Pg22Adverbio}></td>
                                    <td className={styles.Pg22Verbo}></td>
                                    <td className={styles.Pg22ObjetivoComplemento}>(3 years old)</td>
                                    <td className={styles.Pg22Traducao}>Tem 3 anos</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg22StyledTable}>
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
                                                    className={styles.Pg22InputCell}
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

export default Pagina22;
