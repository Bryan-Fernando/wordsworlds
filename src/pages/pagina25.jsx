import React, { useState } from 'react';
import styles from './pagina25.module.css';

const Pagina25 = () => {
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
            <div className={styles.Pg25Container}>
                <header className={styles.Pg25Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg25HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg25Main}>
                    <div>
                        <div className={styles.Pg25TableHeader}>INTERROGATIVA NEGATIVA</div>
                        <table className={styles.Pg25StyledTable}>
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
                                <tr>
                                    <td className={styles.Pg25VerboAuxiliar}>Is</td>
                                    <td className={styles.Pg25Sujeito}>it</td>
                                    <td className={styles.Pg25Adverbio}>not</td>
                                    <td className={styles.Pg25Verbo}></td>
                                    <td className={styles.Pg25ObjetivoComplemento}>a Ford 68?</td>
                                    <td className={styles.Pg25Traducao}>Não é um Ford 68?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg25VerboAuxiliar}>Ain't</td>
                                    <td className={styles.Pg25Sujeito}>it</td>
                                    <td className={styles.Pg25Adverbio}></td>
                                    <td className={styles.Pg25Verbo}></td>
                                    <td className={styles.Pg25ObjetivoComplemento}>next to the library?</td>
                                    <td className={styles.Pg25Traducao}>Não está ao lado da biblioteca?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg25VerboAuxiliar}>Isn't</td>
                                    <td className={styles.Pg25Sujeito}>it</td>
                                    <td className={styles.Pg25Adverbio}></td>
                                    <td className={styles.Pg25Verbo}></td>
                                    <td className={styles.Pg25ObjetivoComplemento}>ok?</td>
                                    <td className={styles.Pg25Traducao}>Não está tudo bem?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg25VerboAuxiliar}>Isn't</td>
                                    <td className={styles.Pg25Sujeito}>it</td>
                                    <td className={styles.Pg25Adverbio}></td>
                                    <td className={styles.Pg25Verbo}></td>
                                    <td className={styles.Pg25ObjetivoComplemento}>3 years old?</td>
                                    <td className={styles.Pg25Traducao}>Não tem 3 anos?</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg25StyledTable}>
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
                                                    className={styles.Pg25InputCell}
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

export default Pagina25;
