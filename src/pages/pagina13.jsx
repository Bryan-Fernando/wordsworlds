import React, { useState } from 'react';
import styles from './pagina13.module.css';

const Pagina13 = () => {
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
            <div className={styles.Pg13Container}>
                <header className={styles.Pg13Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg13HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg13Main}>
                    <div>
                        <div className={styles.Pg13TableHeader}>INTERROGATIVA NEGATIVA</div>
                        <table className={styles.Pg13StyledTable}>
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
                                    <td className={styles.Pg13VerboAuxiliar}>Are</td>
                                    <td className={styles.Pg13Sujeito}>you</td>
                                    <td className={styles.Pg13Adverbio}>not</td>
                                    <td className={styles.Pg13Verbo}></td>
                                    <td className={styles.Pg13ObjetivoComplemento}>the new director?</td>
                                    <td className={styles.Pg13Traducao}>Você não é o novo diretor?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg13VerboAuxiliar}>Aren't</td>
                                    <td className={styles.Pg13Sujeito}>you</td>
                                    <td className={styles.Pg13Adverbio}></td>
                                    <td className={styles.Pg13Verbo}></td>
                                    <td className={styles.Pg13ObjetivoComplemento}>in class 2-B?</td>
                                    <td className={styles.Pg13Traducao}>Você não está na turma 2-B?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg13VerboAuxiliar}>Ain't</td>
                                    <td className={styles.Pg13Sujeito}>you</td>
                                    <td className={styles.Pg13Adverbio}></td>
                                    <td className={styles.Pg13Verbo}></td>
                                    <td className={styles.Pg13ObjetivoComplemento}>only 12 years old?</td>
                                    <td className={styles.Pg13Traducao}>Você não tem apenas 12 anos?</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className={styles.Pg13TableHeader}>INTERROGATIVA NEGATIVA PERSONALIZADA</div>
                        <table className={styles.Pg13StyledTable}>
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
                                                    className={styles.Pg13InputCell}
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

export default Pagina13;
