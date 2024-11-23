import React, { useState } from 'react';
import styles from './pagina11.module.css';

const Pagina11 = () => {
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
            <div className={styles.Pg11Container}>
                <header className={styles.Pg11Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg11HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg11Main}>
                    <div>
                        <div className={styles.Pg11TableHeader}>AFIRMATIVA</div>
                        <table className={styles.Pg11StyledTable}>
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
                                    <td className={styles.Pg11Sujeito}>You and Pedro</td>
                                    <td className={styles.Pg11VerboAuxiliar}>are</td>
                                    <td className={styles.Pg11Adverbio}></td>
                                    <td className={styles.Pg11Verbo}></td>
                                    <td className={styles.Pg11ObjetivoComplemento}>great students</td>
                                    <td className={styles.Pg11Traducao}>Você e Pedro são ótimos alunos.</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg11Sujeito}>You all</td>
                                    <td className={styles.Pg11VerboAuxiliar}>are</td>
                                    <td className={styles.Pg11Adverbio}></td>
                                    <td className={styles.Pg11Verbo}></td>
                                    <td className={styles.Pg11ObjetivoComplemento}>in class B</td>
                                    <td className={styles.Pg11Traducao}>Você todos estão na classe B.</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg11Sujeito}>All of You</td>
                                    <td className={styles.Pg11VerboAuxiliar}>are</td>
                                    <td className={styles.Pg11Adverbio}></td>
                                    <td className={styles.Pg11Verbo}></td>
                                    <td className={styles.Pg11ObjetivoComplemento}>12 years old</td>
                                    <td className={styles.Pg11Traducao}>Todos vocês têm 12 anos de idade.</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className={styles.Pg11TableHeader}>AFIRMATIVA PERSONALIZADA</div>
                        <table className={styles.Pg11StyledTable}>
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
                                                    id={`input-${rowIndex}-${colIndex}`}
                                                    className={styles.Pg11InputCell}
                                                    value={value}
                                                    rows="1"
                                                    onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
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

export default Pagina11;
