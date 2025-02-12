import React, { useState } from 'react';

import styles from './pagina116.module.css';

const Pagina116 = () => {
    const [inputValuesTable1, setInputValuesTable1] = useState(
        Array(3).fill(Array(6).fill(''))
    );
    const [inputValuesTable2, setInputValuesTable2] = useState(
        Array(3).fill(Array(6).fill(''))
    );
    const [inputValuesTable3, setInputValuesTable3] = useState(
        Array(3).fill(Array(6).fill(''))
    );

    const handleInputChange = (rowIndex, colIndex, e, tableSetter) => {
        const newValue = e.target.value;
        tableSetter((prevValues) =>
            prevValues.map((row, i) =>
                row.map((value, j) => (i === rowIndex && j === colIndex ? newValue : value))
            )
        );
    };

    return (
        <div>
            <div className={styles.pg116Container}>
                <header className={styles.pg116Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.pg116HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.pg116Main}>
                    <div>
                        <div className={styles.pg116TableHeader}>INTERROGATIVE</div>
                        <table className={styles.pg116StyledTable}>
                            <thead>
                                <tr>
                                    <th>Palavras interrogativas</th>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th>Sujeito<br /> </th>
                                    <th><span style={{ color: 'red' }}> 'Not'</span> <br /> Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValuesTable1.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    className={styles.pg116InputCell}
                                                    value={value}
                                                    rows="1"
                                                    onChange={(e) =>
                                                        handleInputChange(rowIndex, colIndex, e, setInputValuesTable1)
                                                    }
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

                        <div className={styles.pg116TableHeader}>AFFIRMATIVE</div>
                        <table className={styles.pg116StyledTable}>
                            <thead>
                                <tr>
                                    <th>Introdução</th>
                                    <th>Sujeito</th>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th>Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {inputValuesTable2.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    className={styles.pg116InputCell}
                                                    value={value}
                                                    rows="1"
                                                    onChange={(e) =>
                                                        handleInputChange(rowIndex, colIndex, e, setInputValuesTable2)
                                                    }
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

                        <div className={styles.pg116TableHeader}>NEGATIVE</div>
                        <table className={styles.pg116StyledTable}>
                            <thead>
                                <tr>
                                <th>Introdução</th>
                                    <th>Sujeito</th>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th> <span style={{ color: 'red' }}> 'Not'</span> <br />Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValuesTable3.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    className={styles.pg116InputCell}
                                                    value={value}
                                                    rows="1"
                                                    onChange={(e) =>
                                                        handleInputChange(rowIndex, colIndex, e, setInputValuesTable3)
                                                    }
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

export default Pagina116;
