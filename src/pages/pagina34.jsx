import React, { useState } from 'react';
import styles from './pagina34.module.css';

const Pagina34 = () => {
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
            <div className={styles.Pg34Container}>
                <header className={styles.Pg34Header}>
                    <h1>Grammar</h1>
                    <h2 className={styles.Pg34HeaderH2}>Simple Present (Presente Simples)</h2>
                    <h3>Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)</h3>
                </header>
                <main className={styles.Pg34Main}>
                    <div>
                        <div className={styles.Pg34TableHeader}>NEGATIVA</div>
                        <table className={styles.Pg34StyledTable}>
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
                                    <td className={styles.Pg34Sujeito}>I</td>
                                    <td className={styles.Pg34VerboAuxiliar}>'m</td>
                                    <td className={styles.Pg34Adverbio}>not</td>
                                    <td className={styles.Pg34Verbo}></td>
                                    <td className={styles.Pg34ObjetivoComplemento}>the Spanish teacher</td>
                                    <td className={styles.Pg34Traducao}>Eu não sou o professor de espanhol</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg34Sujeito}>He</td>
                                    <td className={styles.Pg34VerboAuxiliar}>isn't</td>
                                    <td className={styles.Pg34Adverbio}></td>
                                    <td className={styles.Pg34Verbo}></td>
                                    <td className={styles.Pg34ObjetivoComplemento}>at work</td>
                                    <td className={styles.Pg34Traducao}>Ele não está no trabalho</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg34Sujeito}>It</td>
                                    <td className={styles.Pg34VerboAuxiliar}>isn't</td>
                                    <td className={styles.Pg34Adverbio}></td>
                                    <td className={styles.Pg34Verbo}></td>
                                    <td className={styles.Pg34ObjetivoComplemento}>27 years old</td>
                                    <td className={styles.Pg34Traducao}>Ela não tem 27 anos</td>
                                </tr>
                                <tr>
                                    <td className={styles.Pg34Sujeito}>He</td>
                                    <td className={styles.Pg34VerboAuxiliar}>ain't</td>
                                    <td className={styles.Pg34Adverbio}></td>
                                    <td className={styles.Pg34Verbo}></td>
                                    <td className={styles.Pg34ObjetivoComplemento}>sunny</td>
                                    <td className={styles.Pg34Traducao}>Não está ensolarado</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.Pg34StyledTable}>
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
                                                    className={styles.Pg34InputCell}
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

export default Pagina34;
