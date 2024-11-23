import React, { useState } from 'react';
import styles from './pagina9.module.css';

const Pagina9 = () => {
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
            <div className={styles.Pg9Container}>
                <header className={styles.Pg9Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg9HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg9Main}>
                    <div>
                        <div className={styles.Pg9TableHeader}>AFIRMATIVA</div>
                        <table className={styles.Pg9StyledTable}>
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
                                    <td className={styles.Pg9Sujeito}>You</td>
                                    <td className={styles.Pg9VerboAuxiliar}>are</td>
                                    <td className={styles.Pg9Adverbio}></td>
                                    <td className={styles.Pg9Verbo}></td>
                                    <td className={styles.Pg9ObjetivoComplemento}>the new director</td>
                                    <td className={styles.Pg9Traducao}>Você é o novo diretor.</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg9Sujeito}>You</td>
                                    <td className={styles.Pg9VerboAuxiliar}>are</td>
                                    <td className={styles.Pg9Adverbio}></td>
                                    <td className={styles.Pg9Verbo}></td>
                                    <td className={styles.Pg9ObjetivoComplemento}>in class 2-B</td>
                                    <td className={styles.Pg9Traducao}>Você está na classe 2-B.</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg9Sujeito}>You</td>
                                    <td className={styles.Pg9VerboAuxiliar}>are</td>
                                    <td className={styles.Pg9Adverbio}></td>
                                    <td className={styles.Pg9Verbo}></td>
                                    <td className={styles.Pg9ObjetivoComplemento}>only 12 years old</td>
                                    <td className={styles.Pg9Traducao}>Você tem apenas 12 anos de idade.</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg9StyledTable}>
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
                                                    className={styles.Pg9InputCell}
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

export default Pagina9;
