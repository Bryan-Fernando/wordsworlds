import React, { useState } from 'react';
import styles from './pagina57.module.css';

const Pagina57 = () => {

    const [inputValuesTable1, setInputValuesTable1] = useState(
        Array(6).fill(Array(6).fill(''))
    );

    const [inputValuesTable2, setInputValuesTable2] = useState(
        Array(6).fill(Array(6).fill(''))
    );

    const handleInputChangeTable1 = (rowIndex, colIndex, e) => {
        const newValue = e.target.value;
        const updatedValues = inputValuesTable1.map((row, i) =>
            row.map((value, j) => (i === rowIndex && j === colIndex ? newValue : value))
        );
        setInputValuesTable1(updatedValues);
    };

    const handleInputChangeTable2 = (rowIndex, colIndex, e) => {
        const newValue = e.target.value;
        const updatedValues = inputValuesTable2.map((row, i) =>
            row.map((value, j) => (i === rowIndex && j === colIndex ? newValue : value))
        );
        setInputValuesTable2(updatedValues);
    };

    return (
        <div>
            <div className={styles.pg57Container}>
                <header className={styles.pg57Header}>
                    <h1>Grammar</h1>
                </header>
                <main className={styles.pg57Main}>
                    <div>
                        <div className={styles.pg57TableHeader}>
                            INTERROGATIVE
                        </div>

                        {/* Primeira Tabela */}
                        <table className={styles.pg57StyledTable}>
                            <colgroup>
                                <col className={styles.pg57PalavrasInterrogativas} />
                                <col className={styles.pg57VerboAuxiliar} />
                                <col className={styles.pg57Sujeito} />
                                <col className={styles.pg57NotAdverbio} />
                                <col className={styles.pg57Verbo} />
                                <col className={styles.pg57ObjetoComplemento} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>Palavras <br /> Interrogativas</th>
                                    <th>Verbo Auxiliar</th>
                                    <th>Sujeito</th>
                                    <th> <span style={{ color: 'red' }}>'Not'</span> <br /> Advérbio</th> {/* Estilo aplicado diretamente */}
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
                                                    id={`input-${rowIndex}-${colIndex}`}
                                                    className={styles.pg57InputCell}
                                                    value={value}
                                                    rows="1"
                                                    onChange={(e) => handleInputChangeTable1(rowIndex, colIndex, e)}
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

                        {/* Segunda Tabela */}
                        <table className={`${styles.pg57StyledTable} ${styles.pg57SecondTable}`}>
                            <colgroup>
                                <col className={styles.pg57Introducao2} />
                                <col className={styles.pg57Sujeito2} />
                                <col className={styles.pg57VerboAuxiliar2} />
                                <col className={styles.pg57Adverbio2} />
                                <col className={styles.pg57Verbo2} />
                                <col className={styles.pg57ObjetivoComplemento2} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>Introdução</th>
                                    <th>Sujeito</th>
                                    <th>Verbo <br />Auxiliar</th>
                                    <th> <span style={{ color: 'red' }}>'Not'</span>  <br /> Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br />Complemento</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValuesTable2.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    id={`input-${rowIndex}-${colIndex}`}
                                                    className={styles.pg57InputCell}
                                                    value={value}
                                                    rows="1"
                                                    onChange={(e) => handleInputChangeTable2(rowIndex, colIndex, e)}
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

export default Pagina57;


