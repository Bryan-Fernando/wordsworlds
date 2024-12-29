import React, { useState } from 'react';
import styles from './pagina57.module.css';
import pg57IconNotes from '../assets/Icons/Icon-Notes.png';

const Pagina57 = () => {
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
            <div className={styles.pg57Container}>
                <header className={styles.pg57Header}>
                    <h1 className={styles.pg57HeaderH1}>Asking and Giving <br />
                        Personal - Information</h1>
                    <h1 className={styles.pg57HeaderH1}>Vocabulary: Numbers 0-10</h1>
                </header>
                <main className={styles.pg57Main}>
                    <div className={styles.pg57ContainerMain1}>
                        <div>
                            <div className={styles.pg57bloco}><p>0</p></div>
                            <p>zero <br />
                                (oh)
                            </p>
                        </div>
                        <div>
                            <div className={styles.pg57bloco}><p>1</p></div>
                            <p>one</p>
                        </div>
                        <div>
                            <div className={styles.pg57bloco}><p>2</p></div>
                            <p>two</p>
                        </div>
                        <div>
                            <div className={styles.pg57bloco}><p>3</p></div>
                            <p>three</p>
                        </div>
                        <div>
                            <div className={styles.pg57bloco}><p>4</p></div>
                            <p>four</p>
                        </div>
                        <div>
                            <div className={styles.pg57bloco}><p>5</p></div>
                            <p>five</p>
                        </div>
                        <div>
                            <div className={styles.pg57bloco}><p>6</p></div>
                            <p>six</p>
                        </div>
                        <div>
                            <div className={styles.pg57bloco}><p>7</p></div>
                            <p>seven</p>
                        </div>
                        <div>
                            <div className={styles.pg57bloco}><p>8</p></div>
                            <p>eight </p>
                        </div>
                        <div>
                            <div className={styles.pg57bloco}><p>9</p></div>
                            <p>nine</p>
                        </div>
                        <div>
                            <div className={styles.pg57bloco}><p>10</p></div>
                            <p>ten</p>
                        </div>
                    </div>
                    <div className={styles.pg57ContainerMain2}>
                        <div className={styles.pg57Div1Container2}>
                            <div><h2>Phone numbers and email addresses</h2></div>
                            <p>Ana: Hey, Julie. What’s your cell phone number? <br />
                                Julie: It’s 308-187-0745. <br />
                                Ana: What’s your email address? <br />
                                Julie: It’s julie@gmail.com. <br />
                                Ana: Thanks! <br />
                            </p>
                            <div className={styles.pg57BlocoCinza}>
                                <p>Nos endereços de email:</p>
                                <ul>
                                    <li>‘‘.’’ = ‘‘dot’’</li>
                                    <li>‘‘@’’ = ‘‘at’’</li>
                                    <li>‘‘_’’ = ’’underscore’’</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p>imagem</p>
                        </div>
                    </div>
                    <div className={styles.pg57ContainerMain3}>
                        <h3>Vocabulary: The alphabet</h3>
                        <div className={styles.DivContainer3}>
                            <div>
                                <div className={styles.pg57bloco}><p>Aa</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Bb</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Cc</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Dd</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Ee</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Ff</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Gg</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Hh</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Ii</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Jj</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Kk</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Ll</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Mm</p></div>
                            </div>
                        </div>
                        <div className={styles.DivContainer3}>
                            <div>
                                <div className={styles.pg57bloco}><p>Nn</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Oo</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Pp</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Qq</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Rr</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Ss</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Tt</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Uu</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Vv</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Ww</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Xx</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Yy</p></div>
                            </div>
                            <div>
                                <div className={styles.pg57bloco}><p>Zz</p></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.pg57ContainerMain4}>
                        <div className={styles.pg57Div1Container4}>
                            <div><h2>Phone numbers and email addresses</h2></div>
                            <p>Ana: Hey, Julie. What’s your cell phone number? <br />
                                Julie: It’s 308-187-0745. <br />
                                Ana: What’s your email address? <br />
                                Julie: It’s julie@gmail.com. <br />
                                Ana: Thanks! <br />
                            </p>
                        </div>
                        <div>
                            <p>imagem</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};
export default Pagina57;
