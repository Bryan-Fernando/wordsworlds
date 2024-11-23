import React, { useState } from 'react';
import styles from './pagina29.module.css';

const Pagina29 = () => {
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
            <div className={styles.Pg29Container}>
                <header className={styles.Pg29Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg29HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg29Main}>
                    <div>
                        <div className={styles.Pg29TableHeader}>INTERROGATIVA NEGATIVA</div>
                        <table className={styles.Pg29StyledTable}>
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
                                    <td className={styles.Pg29Sujeito}>Are</td>
                                    <td className={styles.Pg29VerboAuxiliar}>we</td>
                                    <td className={styles.Pg29Adverbio}>not</td>
                                    <td className={styles.Pg29Verbo}></td>
                                    <td className={styles.Pg29ObjetivoComplemento}>good students?</td>
                                    <td className={styles.Pg29Traducao}>Não somos bons alunos?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg29Sujeito}>Aren't</td>
                                    <td className={styles.Pg29VerboAuxiliar}>we</td>
                                    <td className={styles.Pg29Adverbio}></td>
                                    <td className={styles.Pg29Verbo}></td>
                                    <td className={styles.Pg29ObjetivoComplemento}>late?</td>
                                    <td className={styles.Pg29Traducao}>Não estamos atrasados?</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg29Sujeito}>Ain't</td>
                                    <td className={styles.Pg29VerboAuxiliar}>we</td>
                                    <td className={styles.Pg29Adverbio}></td>
                                    <td className={styles.Pg29Verbo}></td>
                                    <td className={styles.Pg29ObjetivoComplemento}>4 and 5 years old?</td>
                                    <td className={styles.Pg29Traducao}>Não temos 4 ou 5 anos?</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg29StyledTable}>
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
                                                    className={styles.Pg29InputCell}
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

export default Pagina29;
