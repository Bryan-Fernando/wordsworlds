import React, { useState } from 'react';
import styles from './pagina23.module.css';

const Pagina23 = () => {
    // Inicializa o estado com uma matriz 6x6 de valores vazios
    const [inputValues, setInputValues] = useState(
        Array(6).fill(Array(6).fill(''))
    );

    // Função para lidar com mudanças nos inputs
    const handleInputChange = (rowIndex, colIndex, e) => {
        const newValue = e.target.value;
        const updatedValues = inputValues.map((row, i) =>
            row.map((value, j) => (i === rowIndex && j === colIndex ? newValue : value))
        );
        setInputValues(updatedValues);
    };

    return (
        <div>
            <div className={styles.Pg23Container}>
                <header className={styles.Pg23Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg23HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg23Main}>
                    <div>
                        <div className={styles.Pg23TableHeader}>NEGATIVA</div>
                        <table className={styles.Pg23StyledTable}>
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
                                    <td className={styles.Pg23Sujeito}>It</td>
                                    <td className={styles.Pg23VerboAuxiliar}>is</td>
                                    <td className={styles.Pg23Adverbio}>not</td>
                                    <td className={styles.Pg23Verbo}></td>
                                    <td className={styles.Pg23ObjetivoComplemento}>(hot)</td>
                                    <td className={styles.Pg23Traducao}>Ele Está calor / quente</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg23Sujeito}>It</td>
                                    <td className={styles.Pg23VerboAuxiliar}>isn</td>
                                    <td className={styles.Pg23Adverbio}>not</td>
                                    <td className={styles.Pg23Verbo}></td>
                                    <td className={styles.Pg23ObjetivoComplemento}>(next to the library)</td>
                                    <td className={styles.Pg23Traducao}>Não É/Fica ao lado da biblioteca</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg23Sujeito}>It</td>
                                    <td className={styles.Pg23VerboAuxiliar}>ain't</td>
                                    <td className={styles.Pg23Adverbio}></td>
                                    <td className={styles.Pg23Verbo}></td>
                                    <td className={styles.Pg23ObjetivoComplemento}>(ok)</td>
                                    <td className={styles.Pg23Traducao}>Não está bem</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg23Sujeito}>It</td>
                                    <td className={styles.Pg23VerboAuxiliar}>isn't</td>
                                    <td className={styles.Pg23Adverbio}></td>
                                    <td className={styles.Pg23Verbo}></td>
                                    <td className={styles.Pg23ObjetivoComplemento}>(3 years old)</td>
                                    <td className={styles.Pg23Traducao}>Não tem 3 anos</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Segunda tabela com inputs dinâmicos */}
                        <table className={styles.Pg23StyledTable}>
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
                                                    className={styles.Pg23InputCell}
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

export default Pagina23;
