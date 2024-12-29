import React, { useState } from 'react';
import styles from './pagina49.module.css';


const Pagina49 = () => {

    return (
        <div>
            <div className={styles.pg49Container}>
                <header className={styles.pg49Header}>
                    <h1 className={styles.pg49HeaderH1}>Grammar</h1>
                    <div className={styles.pg49HeaderH2H3}>
                        <h2 className={styles.pg49HeaderH2}>Demonstrative Pronouns</h2>
                        <h3 className={styles.pg49HeaderH3}>Pronomes Demonstrativos</h3>
                    </div>
                </header>
                <main className={styles.pg49Main}>
                    <div className={styles.pg49MainDiv1}>
                        <p>
                            <span style={{ color: '#A61C28' }}>This</span> <br />
                            Este, esta, isto
                        </p>
                        <p>
                            <span style={{ color: '#A61C28' }}>That</span> <br />
                            Aquele, aquela, aquilo
                        </p>
                        <p>
                            <span style={{ color: '#A61C28' }}>These</span> <br />
                            Estes, estas
                        </p>
                        <p>
                            <span style={{ color: '#A61C28' }}>Those</span> <br />
                            Aqueles, aquelas
                        </p>

                    </div>
                    <div>
                        <p className={styles.pg49Exemplo}>Exemplos:</p>
                        <div className={styles.ContainerDivs}>
                            <div className={styles.pg49MainDiv2}>
                                <ul className={styles.pg49Listas}>
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
                            <div className={styles.pg49MainDiv3}>
                                <ul className={styles.pg49Listas}>
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

export default Pagina49;
