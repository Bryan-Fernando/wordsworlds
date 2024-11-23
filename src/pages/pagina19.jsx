import React, { useState } from 'react';
import styles from './pagina19.module.css';

const Pagina19 = () => {
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
            <div className={styles.Pg19Container}>
                <header className={styles.Pg19Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg19HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg19Main}>
                    <div>
                        <div className={styles.Pg19TableHeader}>NEGATIVA</div>
                        <table className={styles.Pg19StyledTable}>
                            <thead>
                                <tr>
                                    <th>Sujeito</th>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th>'Not'<br />Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                    <th>Tradução</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles.Pg19Sujeito}>She</td>
                                    <td className={styles.Pg19VerboAuxiliar}>is</td>
                                    <td className={styles.Pg19Adverbio}>not</td>
                                    <td className={styles.Pg19Verbo}></td>
                                    <td className={styles.Pg19ObjetivoComplemento}>Miss Debora</td>
                                    <td className={styles.Pg19Traducao}>Ela não é a Srta. Debora</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg19Sujeito}>She</td>
                                    <td className={styles.Pg19VerboAuxiliar}>isn't</td>
                                    <td className={styles.Pg19Adverbio}></td>
                                    <td className={styles.Pg19Verbo}></td>
                                    <td className={styles.Pg19ObjetivoComplemento}>at the gym</td>
                                    <td className={styles.Pg19Traducao}>Ela não está na academia</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg19Sujeito}>She</td>
                                    <td className={styles.Pg19VerboAuxiliar}>ain't</td>
                                    <td className={styles.Pg19Adverbio}></td>
                                    <td className={styles.Pg19Verbo}></td>
                                    <td className={styles.Pg19ObjetivoComplemento}>27 years old</td>
                                    <td className={styles.Pg19Traducao}>Ela não tem 27 anos</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg19StyledTable}>
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
                                                    className={styles.Pg19InputCell}
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

export default Pagina19;
