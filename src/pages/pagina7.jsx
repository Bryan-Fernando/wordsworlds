import React, { useState } from 'react';
import styles from './pagina7.module.css';

const Pagina7 = () => {
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
            <div className={styles.Pg7Container}>
                <header className={styles.Pg7Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg7HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg7Main}>
                    <div>
                        <div className={styles.Pg7TableHeader}>INTERROGATIVA AFIRMATIVA</div>
                        <table className={styles.Pg7StyledTable}>
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
                                    <td className={styles.Pg7Sujeito}>Am</td>
                                    <td className={styles.Pg7VerboAuxiliar}>I</td>
                                    <td className={styles.Pg7Adverbio}></td>
                                    <td className={styles.Pg7Verbo}></td>
                                    <td className={styles.Pg7ObjetivoComplemento}>a good student?</td>
                                    <td className={styles.Pg7Traducao}>Eu sou um bom aluno?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg7Sujeito}>Am</td>
                                    <td className={styles.Pg7VerboAuxiliar}>I</td>
                                    <td className={styles.Pg7Adverbio}></td>
                                    <td className={styles.Pg7Verbo}></td>
                                    <td className={styles.Pg7ObjetivoComplemento}>In class A or B?</td>
                                    <td className={styles.Pg7Traducao}>Eu estou na turma A ou B?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg7Sujeito}>Am</td>
                                    <td className={styles.Pg7VerboAuxiliar}>I</td>
                                    <td className={styles.Pg7Adverbio}></td>
                                    <td className={styles.Pg7Verbo}></td>
                                    <td className={styles.Pg7ObjetivoComplemento}>over 3?</td>
                                    <td className={styles.Pg7Traducao}>Eu tenho mais de 3 anos?</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg7StyledTable}>
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
                                                    id={`input-${rowIndex}-${colIndex}`}
                                                    className={styles.Pg7InputCell}
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

export default Pagina7;
