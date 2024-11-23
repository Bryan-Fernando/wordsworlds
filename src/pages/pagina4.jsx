import React from 'react';
import styles from './pagina4.module.css';

const Pagina4 = () => {
    return (
        <div>
            <div className={styles.Pg4Container}>
                <header className={styles.Pg4Header}>
                    <h1>Grammar To Be (Be)</h1>
                    <h2 className={styles.Pg4HeaderH2}>Subject Pronouns</h2>
                </header>
                <main className={styles.Pg4Main}>
                    <table className={styles.p4Table}>
                        <thead>
                            <tr>
                                <th className={styles.p4Table}>I</th>
                                <th className={styles.p4Table}>He</th>
                                <th className={styles.p4Table}>She</th>
                                <th className={styles.p4Table}>It</th>
                                <th className={styles.p4Table}>We</th>
                                <th className={styles.p4Table}>You</th>
                                <th className={styles.p4Table}>You and...</th>
                                <th className={styles.p4Table}>They</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles.p4Table}>Eu</td>
                                <td className={styles.p4Table}>Ele</td>
                                <td className={styles.p4Table}>Ela</td>
                                <td className={styles.p4Table}>(Não traduzir)</td>
                                <td className={styles.p4Table}>Nós</td>
                                <td className={styles.p4Table}>Você</td>
                                <td className={styles.p4Table}>Você e... / Vocês</td>
                                <td className={styles.p4Table}>Eles/Elas</td>
                            </tr>
                            <tr>
                                <td className={`${styles.p4Table} ${styles.Pg4Highlight}`}>I am</td>
                                <td className={styles.p4Table}>-</td>
                                <td colSpan="2" className={`${styles.p4Table} ${styles.Pg4Highlight}`}>He is/ She is/ It is</td>
                                <td className={styles.p4Table}>-</td>
                                <td className={styles.p4Table}>-</td>
                                <td colSpan="2" className={`${styles.p4Table} ${styles.Pg4Highlight}`}>We are/ You are/ They are</td>
                            </tr>
                        </tbody>
                    </table>
                </main>
                <hr className={styles.Pg4MainHr} />
                <aside className={styles.Pg4Aside}>
                    <div className={styles.Pg4AsideAffirmative}>
                        <div>
                            <h3 className={styles.Pg4AsideDivH3}>AFFIRMATIVE</h3>
                            <p>I am = I’m a student</p>
                            <hr />
                            <p>He is = He’s a teacher</p>
                            <p>She is = She’s married</p>
                            <p>It is = It’s hot</p>
                            <hr />
                            <p>We are = We’re Brazilians</p>
                            <p>You are = You’re single</p>
                            <p>They are = They’re from Portugal</p>
                        </div>
                    </div>
                    <div className={styles.Pg4AsideNegative}>
                        <div>
                            <h3 className={styles.Pg4AsideDivH3}>NEGATIVE</h3>
                            <p>I’m not Spanish</p>
                            <hr />
                            <p>He’s not a lawyer</p>
                            <p>She’s not single</p>
                            <p>It’s not cold</p>
                            <hr />
                            <p>We’re not Portuguese</p>
                            <p>You’re not Italian</p>
                            <p>They’re not Brazilians</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina4;
