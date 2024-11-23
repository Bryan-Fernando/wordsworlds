import React, { useState } from 'react';
import styles from './pagina35.module.css';

const Pagina35 = () => {
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
            <div className={styles.Pg35Container}>
                <header className={styles.Pg35Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg35HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg35Main}>
                    <div>
                        <div className={styles.Pg35TableHeader}>NEGATIVA</div>
                        <table className={styles.Pg35StyledTable}>
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
                                    <td className={styles.Pg35Sujeito}>We</td>
                                    <td className={styles.Pg35VerboAuxiliar}>aren't</td>
                                    <td className={styles.Pg35Adverbio}>not</td>
                                    <td className={styles.Pg35Verbo}></td>
                                    <td className={styles.Pg35ObjetivoComplemento}>in Maringá</td>
                                    <td className={styles.Pg35Traducao}>Nós não estamos em Maringá</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg35Sujeito}>You</td>
                                    <td className={styles.Pg35VerboAuxiliar}>aren't</td>
                                    <td className={styles.Pg35Adverbio}></td>
                                    <td className={styles.Pg35Verbo}></td>
                                    <td className={styles.Pg35ObjetivoComplemento}>on duty</td>
                                    <td className={styles.Pg35Traducao}>Você não está de plantão</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg35Sujeito}>They</td>
                                    <td className={styles.Pg35VerboAuxiliar}>aren't</td>
                                    <td className={styles.Pg35Adverbio}></td>
                                    <td className={styles.Pg35Verbo}></td>
                                    <td className={styles.Pg35ObjetivoComplemento}>busy</td>
                                    <td className={styles.Pg35Traducao}>Eles não estão ocupados</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg35StyledTable}>
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
                                                    className={styles.Pg35InputCell}
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

export default Pagina35;
