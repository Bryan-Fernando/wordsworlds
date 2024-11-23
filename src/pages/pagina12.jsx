import React, { useState } from 'react';
import styles from './pagina12.module.css';

const Pagina12 = () => {
    const [inputValues, setInputValues] = useState(
        Array(6).fill(Array(6).fill('')) // Inicializa matriz 6x6 com valores vazios
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
            <div className={styles.Pg12Container}>
                <header className={styles.Pg12Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg12HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg12Main}>
                    <div>
                        <div className={styles.Pg12TableHeader}>INTERROGATIVA AFIRMATIVA</div>
                        <table className={styles.Pg12StyledTable}>
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
                                    <td className={styles.Pg12VerboAuxiliar}>Are</td>
                                    <td className={styles.Pg12Sujeito}>you</td>
                                    <td className={styles.Pg12Adverbio}></td>
                                    <td className={styles.Pg12Verbo}></td>
                                    <td className={styles.Pg12ObjetivoComplemento}>the new director?</td>
                                    <td className={styles.Pg12Traducao}>Você é o novo diretor?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg12VerboAuxiliar}>Are</td>
                                    <td className={styles.Pg12Sujeito}>you</td>
                                    <td className={styles.Pg12Adverbio}></td>
                                    <td className={styles.Pg12Verbo}></td>
                                    <td className={styles.Pg12ObjetivoComplemento}>in class 2-B?</td>
                                    <td className={styles.Pg12Traducao}>Você está na turma 2-B?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg12VerboAuxiliar}>Are</td>
                                    <td className={styles.Pg12Sujeito}>you</td>
                                    <td className={styles.Pg12Adverbio}></td>
                                    <td className={styles.Pg12Verbo}></td>
                                    <td className={styles.Pg12ObjetivoComplemento}>only 12 years old?</td>
                                    <td className={styles.Pg12Traducao}>Você tem apenas 12 anos?</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className={styles.Pg12TableHeader}>INTERROGATIVA PERSONALIZADA</div>
                        <table className={styles.Pg12StyledTable}>
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
                                                    className={styles.Pg12InputCell}
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

export default Pagina12;
