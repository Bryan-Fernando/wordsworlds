import React, { useState } from 'react';
import styles from './pagina115.module.css';

const pagina115 = () => {
    const [inputValuesTable1, setInputValuesTable1] = useState(
        Array(3).fill(Array(6).fill(''))
    );
    const [inputValuesTable2, setInputValuesTable2] = useState(
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
            <div className={styles.pg115Container}>
                <header className={styles.pg115Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.pg115HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.pg115Main}>
                    <div>
                        <div className={styles.pg115TableHeader}>INTERROGATIVE</div>
                        {/* Tabela de Cima */}
                        <table className={styles.pg115StyledTable}>
                            <colgroup>
                                <col style={{ width: '15%' }} />
                                <col style={{ width: '15%' }} />
                                <col style={{ width: '10%' }} />
                                <col style={{ width: '10%' }} />
                                <col style={{ width: '25%' }} />
                                <col style={{ width: '25%' }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>Palavras <br /> Interrogativas</th>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th>Sujeito</th>
                                    <th><span style={{ color: 'red' }}>'Not'</span><br /> Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto complemento</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValuesTable1.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    id={`table1-input-${rowIndex}-${colIndex}`}
                                                    className={styles.pg115InputCell}
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

                        {/* Tabela de Baixo */}
                        <table className={`${styles.pg115StyledTable} ${styles.pg115TableAligned}`}>
                        <colgroup>
                                <col style={{ width: '20.2%' }} className={styles.pg115ExtraColumn} />
                                <col style={{ width: '20.2%' }} />
                                <col style={{ width: '13.5%' }} />
                                <col style={{ width: '11%' }} />
                                <col style={{ width: '11%' }} />
                                <col style={{ width: '25%' }} />
                                <col style={{ width: '33.7%' }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th className={styles.pg115ExtraColumn}></th>
                                    <th>Introdução</th>
                                    <th>Sujeito</th>
                                    <th>Verbo Auxiliar</th>
                                    <th><span style={{ color: 'red' }}>'Not'</span><br /> Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto Complemento</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValuesTable2.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td className={styles.pg115ExtraColumn}></td>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    id={`table2-input-${rowIndex}-${colIndex}`}
                                                    className={styles.pg115InputCell}
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
                    </div>
                </main>
            </div>
        </div>
    );
};

export default pagina115;
