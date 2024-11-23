import React, { useState } from 'react';
import styles from './pagina10.module.css';

const Pagina10 = () => {
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
            <div className={styles.Pg10Container}>
                <header className={styles.Pg10Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg10HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg10Main}>
                    <div>
                        <div className={styles.Pg10TableHeader}>NEGATIVA</div>
                        <table className={styles.Pg10StyledTable}>
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
                                <tr>
                                    <td className={styles.Pg10Sujeito}>You</td>
                                    <td className={styles.Pg10VerboAuxiliar}>are</td>
                                    <td className={styles.Pg10Adverbio}>not</td>
                                    <td className={styles.Pg10Verbo}></td>
                                    <td className={styles.Pg10ObjetivoComplemento}>the new director</td>
                                    <td className={styles.Pg10Traducao}>Você não é o novo diretor.</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg10Sujeito}>You</td>
                                    <td className={styles.Pg10VerboAuxiliar}>aren't</td>
                                    <td className={styles.Pg10Adverbio}></td>
                                    <td className={styles.Pg10Verbo}></td>
                                    <td className={styles.Pg10ObjetivoComplemento}>in class 2-B</td>
                                    <td className={styles.Pg10Traducao}>Você não está na classe 2-B.</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg10Sujeito}>You</td>
                                    <td className={styles.Pg10VerboAuxiliar}>ain't</td>
                                    <td className={styles.Pg10Adverbio}></td>
                                    <td className={styles.Pg10Verbo}></td>
                                    <td className={styles.Pg10ObjetivoComplemento}>only 12 years old</td>
                                    <td className={styles.Pg10Traducao}>Você não tem apenas 12 anos de idade.</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg10StyledTable}>
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
                                                    id={`input-${rowIndex}-${colIndex}`}
                                                    className={styles.Pg10InputCell}
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

export default Pagina10;
