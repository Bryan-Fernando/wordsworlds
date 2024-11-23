import React, { useState } from 'react';
import styles from './pagina6.module.css';

const Pagina6 = () => {
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
            <div className={styles.Pg6Container}>
                <header className={styles.Pg6Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg6HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg6Main}>
                    <div>
                        <div className={styles.Pg6TableHeader}>NEGATIVA</div>
                        <table className={styles.Pg6StyledTable}>
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
                                    <td className={styles.Pg6Sujeito}>I</td>
                                    <td className={styles.Pg6VerboAuxiliar}>am</td>
                                    <td className={styles.Pg6Adverbio}>not</td>
                                    <td className={styles.Pg6Verbo}></td>
                                    <td className={styles.Pg6ObjetivoComplemento}></td>
                                    <td className={styles.Pg6Traducao}>Eu sou ____</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg6Sujeito}>I</td>
                                    <td className={styles.Pg6VerboAuxiliar}>am</td>
                                    <td className={styles.Pg6Adverbio}>not</td>
                                    <td className={styles.Pg6Verbo}></td>
                                    <td className={styles.Pg6ObjetivoComplemento}>at work</td>
                                    <td className={styles.Pg6Traducao}>Eu não estou no trabalho</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg6Sujeito}>I</td>
                                    <td className={styles.Pg6VerboAuxiliar}>am</td>
                                    <td className={styles.Pg6Adverbio}>not</td>
                                    <td className={styles.Pg6Verbo}></td>
                                    <td className={styles.Pg6ObjetivoComplemento}>years old</td>
                                    <td className={styles.Pg6Traducao}>Eu não tenho ____ anos de idade</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg6Sujeito}>I</td>
                                    <td className={styles.Pg6VerboAuxiliar}>ain't</td>
                                    <td className={styles.Pg6Adverbio}></td>
                                    <td className={styles.Pg6Verbo}></td>
                                    <td className={styles.Pg6ObjetivoComplemento}></td>
                                    <td className={styles.Pg6Traducao}></td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg6StyledTable}>
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
                                                    className={styles.Pg6InputCell}
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

export default Pagina6;
