import React, { useState } from 'react';
import styles from './pagina50.module.css';
import pagina50_imagem1 from '../assets/Images/pagina50_imagem1.png';
import pagina50_imagem3 from '../assets/Images/pagina50_imagem3.png';
import pagina50_imagem5 from '../assets/Images/pagina50_imagem5.png';
import pagina50_imagem7 from '../assets/Images/pagina50_imagem7.png';
import pagina50_imagem2 from '../assets/Images/pagina50_imagem2.png';
import pagina50_imagem4 from '../assets/Images/pagina50_imagem4.png';
import pagina50_imagem6 from '../assets/Images/pagina50_imagem6.png';
import pagina50_imagem8 from '../assets/Images/pagina50_imagem8.png';

const Pagina50 = () => {
    return (
        <div>
            <div className={styles.pg50Container}>
                <header className={styles.pg50Header}>
                    <h1 className={styles.pg50HeaderH1}>Grammar - Demonstrative Pronouns</h1>
                    <div className={styles.pg50HeaderH2H3}>
                        <h2 className={styles.pg50HeaderH2}>This = Este / Esta / Esse / Essa </h2>
                    </div>
                </header>
                <main className={styles.pg50Main}>
                    <div className={styles.pg50Container1}>
                        <div>
                            <div className={styles.pg50Div1Container1}>
                                <img src={pagina50_imagem1} alt="Imagem 1" className={styles.pg50Img} />
                            </div>
                            <p className={styles.pg50ParagrafoDiv}><strong>Mother</strong> <br />
                                This is my mother, Susan. She is a teacher</p>
                        </div>
                        <div>
                            <div className={styles.pg50Div2Container1}>
                                <img src={pagina50_imagem3} alt="Imagem 3" className={styles.pg50Img} />
                            </div>
                            <p className={styles.pg50ParagrafoDiv}><strong>Sister</strong> <br />
                                This is my sister, Emily. She is a student.</p>
                        </div>
                        <div>
                            <div className={styles.pg50Div3Container1}>
                                <img src={pagina50_imagem5} alt="Imagem 5" className={styles.pg50Img} />
                            </div>
                            <p className={styles.pg50ParagrafoDiv}><strong>Grandmother</strong> <br />
                                This is my grandmother, Mary. She loves
                                gardening.</p>
                        </div>
                        <div>
                            <div className={styles.pg50Div4Container1}>
                                <img src={pagina50_imagem7} alt="Imagem 7" className={styles.pg50Img} />
                            </div>
                            <p className={styles.pg50ParagrafoDiv}><strong>Aunt</strong> <br />
                                This is my aunt, Linda. She is a talented
                                artist.</p>
                        </div>
                    </div>
                    <div className={styles.pg50Container2}>
                        <div>
                            <div className={styles.pg50Div1Container2}>
                                <img src={pagina50_imagem2} alt="Imagem 2" className={styles.pg50Img} />
                            </div>
                            <p className={styles.pg50ParagrafoDiv}><strong>Father</strong> <br />
                                This is my father, John. He is an engineer.
                            </p>
                        </div>
                        <div>
                            <div className={styles.pg50Div2Container2}>
                                <img src={pagina50_imagem4} alt="Imagem 4" className={styles.pg50Img} />
                            </div>
                            <p className={styles.pg50ParagrafoDiv}><strong>Brother</strong> <br />
                                This is my brother, Michael. He is a doctor.
                            </p>
                        </div>
                        <div>
                            <div className={styles.pg50Div3Container2}>
                                <img src={pagina50_imagem6} alt="Imagem 6" className={styles.pg50Img} />
                            </div>
                            <p className={styles.pg50ParagrafoDiv}><strong>Grandfather</strong> <br />
                                This is my grandfather, Robert. He enjoys
                                fishing. </p>
                        </div>
                        <div>
                            <div className={styles.pg50Div4Container2}>
                                <img src={pagina50_imagem8} alt="Imagem 8" className={styles.pg50Img} />
                            </div>
                            <p className={styles.pg50ParagrafoDiv}><strong>Uncle</strong> <br />
                                This is my uncle, Peter. He loves to travel</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina50;
