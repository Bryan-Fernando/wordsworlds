import React, { useState } from 'react';
import styles from './pagina50.module.css';


const Pagina50 = () => {
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
            <div className={styles.Pg50Container}>
                <header className={styles.Pg50Header}>
                    <h1 className={styles.Pg50HeaderH1}>Grammar</h1>
                    <div className={styles.Pg50HeaderH2H3}>
                        <h2 className={styles.Pg50HeaderH2}>Demonstrative Pronouns</h2>
                        <h3 className={styles.Pg50HeaderH3}>Pronomes Demonstrativos</h3>
                    </div>
                </header>
                <main className={styles.Pg50Main}>
                    <div className={styles.Pg50MainDiv1}>
                        <p>This <br />Este, esta, isto</p>
                        <p>That <br />Aquele, aquela, aquilo</p>
                        <p>These <br />Estes, estas</p>
                        <p>Those <br />Aqueles, aquelas</p>
                    </div>
                    <div>
                        <p className={styles.Pg50Exemplo}>Exemplo:</p>
                        <div className={styles.ContainerDivs}>
                            <div className={styles.Pg50MainDiv2}>
                                <ul className={styles.Pg50Listas}>
                                    <li>This is my cat. <br />
                                        Esta é minha gata.</li>
                                    <li>These are his friends. <br />
                                        Estes são os amigos dele.
                                    </li>
                                    <li> Those are my parents. <br />
                                        Esses são meus pais</li>
                                    <li>Those are your shoes. <br />
                                        Esses são seus sapatos.
                                    </li>
                                    <li>This is our school. <br />
                                        Este é nosso colégio.
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.Pg50MainDiv3}>
                                <ul className={styles.Pg50Listas}>
                                    <li>Those are his sunglasses. <br />
                                        Esses são os óculos de sol dele</li>
                                    <li>These are their favorite flowers. <br />
                                        Estas são as flores favoritas deles.</li>
                                    <li>That is her laptop. <br />
                                        Aquele é o laptop dela</li>
                                    <li>Those are our classmates. <br />
                                        Aqueles são nossos colegas de classe</li>
                                    <li>That is not your umbrella. <br />
                                        Aquele não é seu guarda-chuva.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina50;
