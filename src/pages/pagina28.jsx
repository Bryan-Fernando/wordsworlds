import React, { useState } from 'react';
import styles from './pagina28.module.css';

const Pagina28 = () => {
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
            <div className={styles.Pg28Container}>
                <header className={styles.Pg28Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg28HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg28Main}>
                    <div>
                        <div className={styles.Pg28TableHeader}>INTERROGATIVA AFIRMATIVA</div>
                        <table className={styles.Pg28StyledTable}>
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
                                    <td className={styles.Pg28Sujeito}>Are</td>
                                    <td className={styles.Pg28VerboAuxiliar}>we</td>
                                    <td className={styles.Pg28Adverbio}></td>
                                    <td className={styles.Pg28Verbo}></td>
                                    <td className={styles.Pg28ObjetivoComplemento}>good students?</td>
                                    <td className={styles.Pg28Traducao}>Somos bons alunos? </td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg28Sujeito}>Are</td>
                                    <td className={styles.Pg28VerboAuxiliar}>we</td>
                                    <td className={styles.Pg28Adverbio}></td>
                                    <td className={styles.Pg28Verbo}></td>
                                    <td className={styles.Pg28ObjetivoComplemento}>late?</td>
                                    <td className={styles.Pg28Traducao}>Estamos atrasados? </td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg28Sujeito}>Are</td>
                                    <td className={styles.Pg28VerboAuxiliar}>we</td>
                                    <td className={styles.Pg28Adverbio}></td>
                                    <td className={styles.Pg28Verbo}></td>
                                    <td className={styles.Pg28ObjetivoComplemento}>4 or 5 years old?</td>
                                    <td className={styles.Pg28Traducao}>Temos 4 ou 5 anos?</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg28StyledTable}>
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
                                                    className={styles.Pg28InputCell}
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

export default Pagina28;
