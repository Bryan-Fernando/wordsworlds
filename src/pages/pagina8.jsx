import React, { useState } from 'react';
import styles from './pagina8.module.css';

const Pagina8 = () => {
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
            <div className={styles.Pg8Container}>
                <header className={styles.Pg8Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg8HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg8Main}>
                    <div>
                        <div className={styles.Pg8TableHeader}>INTERROGATIVA NEGATIVA</div>
                        <table className={styles.Pg8StyledTable}>
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
                                    <td className={styles.Pg8Sujeito}>Am</td>
                                    <td className={styles.Pg8VerboAuxiliar}>I</td>
                                    <td className={styles.Pg8Adverbio}>not</td>
                                    <td className={styles.Pg8Verbo}></td>
                                    <td className={styles.Pg8ObjetivoComplemento}>a good student?</td>
                                    <td className={styles.Pg8Traducao}>Eu não sou um bom aluno?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg8Sujeito}>Ain't</td>
                                    <td className={styles.Pg8VerboAuxiliar}>I</td>
                                    <td className={styles.Pg8Adverbio}></td>
                                    <td className={styles.Pg8Verbo}></td>
                                    <td className={styles.Pg8ObjetivoComplemento}>In class A or B?</td>
                                    <td className={styles.Pg8Traducao}>Eu não estou na turma A ou B?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg8Sujeito}>Ain't</td>
                                    <td className={styles.Pg8VerboAuxiliar}>I</td>
                                    <td className={styles.Pg8Adverbio}></td>
                                    <td className={styles.Pg8Verbo}></td>
                                    <td className={styles.Pg8ObjetivoComplemento}>over 3?</td>
                                    <td className={styles.Pg8Traducao}>Eu não tenho mais de 3 anos?</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg8StyledTable}>
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
                                                    className={styles.Pg8InputCell}
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

export default Pagina8;
