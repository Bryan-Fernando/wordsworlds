import React from 'react';
import styles from './pagina54.module.css';
import pagina54_imagem1 from '../assets/Images/pagina54_imagem1.png';
import pagina54_imagem3 from '../assets/Images/pagina54_imagem3.png';
import pagina54_imagem2 from '../assets/Images/pagina54_imagem2.png';
import pagina54_imagem4 from '../assets/Images/pagina54_imagem4.png';

const Pagina54 = () => {
    return (
        <div>
            <div className={styles.pg54Container}>
                <header className={styles.pg54Header}>
                    <h1 className={styles.pg54HeaderH1}>Grammar - Demonstrative Pronouns</h1>
                    <div className={styles.pg54HeaderH2H3}>
                        <h2 className={styles.pg54HeaderH2}>Those = Aqueles / Aquelas</h2>
                    </div>
                </header>
                <main className={styles.pg54Main}>
                    <div className={styles.pg54Container1}>
                        <div>
                            <div className={styles.pg54Div1Container1}>
                                <img src={pagina54_imagem1} alt="Imagem 1" className={styles.pg54Img} />
                            </div>
                            <p className={styles.pg54ParagrafoDiv}>
                                <span style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>Those are my teammates</span>.
                            </p>
                        </div>
                        <div>
                            <div className={styles.pg54Div2Container1}>
                                <img src={pagina54_imagem3} alt="Imagem 3" className={styles.pg54Img} />
                            </div>
                            <p className={styles.pg54ParagrafoDiv}>
                                <span style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>Those are my friends</span>.
                            </p>
                        </div>
                    </div>
                    <div className={styles.pg54Container2}>
                        <div>
                            <div className={styles.pg54Div1Container2}>
                                <img src={pagina54_imagem2} alt="Imagem 2" className={styles.pg54Img} />
                            </div>
                            <p className={styles.pg54ParagrafoDiv}>
                                <span style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>Those are Anne’s parents</span>.
                            </p>
                        </div>
                        <div>
                            <div className={styles.pg54Div2Container2}>
                                <img src={pagina54_imagem4} alt="Imagem 4" className={styles.pg54Img} />
                            </div>
                            <p className={styles.pg54ParagrafoDiv}>
                                <span style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>Those are my classmates</span>.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina54;
