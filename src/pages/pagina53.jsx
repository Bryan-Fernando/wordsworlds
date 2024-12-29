import React from 'react';
import styles from './pagina53.module.css';
import pagina53_imagem1 from '../assets/Images/pagina53_imagem1.png';
import pagina53_imagem2 from '../assets/Images/pagina53_imagem2.png';
import pagina53_imagem3 from '../assets/Images/pagina53_imagem3.png';
import pagina53_imagem4 from '../assets/Images/pagina53_imagem4.png';

const Pagina53 = () => {
    return (
        <div>
            <div className={styles.pg53Container}>
                <header className={styles.pg53Header}>
                    <h1 className={styles.pg53HeaderH1}>Grammar - Demonstrative Pronouns</h1>
                    <div className={styles.pg53HeaderH2H3}>
                        <h2 className={styles.pg53HeaderH2}>These = Estes / Estas / Esses / Essas</h2>
                    </div>
                </header>
                <main className={styles.pg53Main}>
                    <div className={styles.pg53Container1}>
                        <div>
                            <div className={styles.pg53Div1Container1}>
                                <img src={pagina53_imagem1} alt="Imagem 1" className={styles.pg53Img} />
                            </div>
                            <p className={styles.pg53ParagrafoDiv}>
                                <span style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>These are my co-workers</span>.
                            </p>
                        </div>
                        <div>
                            <div className={styles.pg53Div2Container1}>
                                <img src={pagina53_imagem3} alt="Imagem 2" className={styles.pg53Img} />
                            </div>
                            <p className={styles.pg53ParagrafoDiv}>
                                <span style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>These are my books</span>.
                            </p>
                        </div>
                    </div>
                    <div className={styles.pg53Container2}>
                        <div>
                            <div className={styles.pg53Div1Container2}>
                                <img src={pagina53_imagem2} alt="Imagem 3" className={styles.pg53Img} />
                            </div>
                            <p className={styles.pg53ParagrafoDiv}>
                                <span style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>These are my grades</span>.
                            </p>
                        </div>
                        <div>
                            <div className={styles.pg53Div2Container2}>
                                <img src={pagina53_imagem4} alt="Imagem 4" className={styles.pg53Img} />
                            </div>
                            <p className={styles.pg53ParagrafoDiv}>
                                <span style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>These are my new sneakers</span>.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina53;
