import React from 'react';

import styles from './pagina56.module.css';

import pagina56Imagem1 from '../assets/images/pagina56_imagem1.webp';
import pagina56Imagem2 from '../assets/images/pagina56_imagem2.webp';
import pagina56Imagem3 from '../assets/images/pagina56_imagem3.webp';

const Pagina56 = () => {
    return (
        <div className={styles['page56']}>
            <main className={styles['page56__content']}>
                {/* Container Principal 1 */}
                <div className={styles['page56__section--first']}>
                    <img className={styles['page56__image']} src={pagina56Imagem1} alt="Gustavo" />
                    <div className={styles['page56__text-container']}>
                        <p>
                            <span className={styles['page56__text--red']}>First name:</span>
                            <span className={styles['page56__text--black']}> Gustavo (primeiro nome)</span>
                        </p>
                        <p>
                            <span className={styles['page56__text--red']}>Middle name:</span>
                            <span className={styles['page56__text--black']}> Amaral (nome do meio)</span>
                        </p>
                        <p>
                            <span className={styles['page56__text--red']}>Last name/Family name:</span>
                            <span className={styles['page56__text--black']}> Dias (último nome/sobrenome)</span>
                        </p>
                        <p>
                            <span className={styles['page56__text--red']}>Full name:</span>
                            <span className={styles['page56__text--black']}> Gustavo Amaral Dias (nome completo)</span>
                        </p>
                    </div>
                    <div className={styles['page56__line--red']}></div>
                    <div className={styles['page56__line--gray']}></div>
                </div>

                {/* Container Principal 2 */}
                <div className={styles['page56__section--second']}>
                    <img className={styles['page56__image']} src={pagina56Imagem2} alt="Lucimar" />
                    <div className={styles['page56__text-container']}>
                        <p>
                            <span className={styles['page56__text--red']}>First name:</span>
                            <span className={styles['page56__text--black']}> Lucimar (primeiro nome)</span>
                        </p>
                        <p>
                            <span className={styles['page56__text--red']}>Middle name:</span>
                            <span className={styles['page56__text--black']}> Pereira (nome do meio)</span>
                        </p>
                        <p>
                            <span className={styles['page56__text--red']}>Last name/Family name:</span>
                            <span className={styles['page56__text--black']}> da Silva (último nome/sobrenome)</span>
                        </p>
                        <p>
                            <span className={styles['page56__text--red']}>Full name:</span>
                            <span className={styles['page56__text--black']}> Lucimar Pereira de Sousa (nome completo)</span>
                        </p>
                    </div>
                    <div className={styles['page56__line--red']}></div>
                </div>

                {/* Container Principal 3 */}
                <div className={styles['page56__section--third']}>
                    <img className={styles['page56__image']} src={pagina56Imagem3} alt="Ines" />
                    <div className={styles['page56__text-container']}>
                        <p>
                            <span className={styles['page56__text--red']}>First name:</span>
                            <span className={styles['page56__text--black']}> Ines (primeiro nome)</span>
                        </p>
                        <p>
                            <span className={styles['page56__text--red']}>Middle name:</span>
                            <span className={styles['page56__text--black']}> Pagliari (nome do meio)</span>
                        </p>
                        <p>
                            <span className={styles['page56__text--red']}>Last name/Family name:</span>
                            <span className={styles['page56__text--black']}> Jardim (último nome/sobrenome)</span>
                        </p>
                        <p>
                            <span className={styles['page56__text--red']}>Full name:</span>
                            <span className={styles['page56__text--black']}> Ines Pagliari Jardim (nome completo)</span>
                        </p>
                    </div>
                    <div className={styles['page56__line--red']}></div>
                    <div className={styles['page56__line--gray']}></div>
                </div>
            </main>

            <aside className={styles['page56__aside']}>
                <div className={styles['page56__aside-container']}>
                    <div className={styles['page56__aside-notes1']}>
                        <p><strong>Word Bank</strong></p>
                    </div>
                    <div className={styles['page56__aside-notes2']}>
                        <div className={styles['page56__word-row']}>
                            <div className={styles['page56__word-column']}>
                                <span className={styles['page56__text--red']}>First name</span>
                                <span className={styles['page56__text--black']}> Primeiro nome</span>
                            </div>
                            <div className={styles['page56__word-column']}>
                                <span className={styles['page56__text--red']}>Middle name</span>
                                <span className={styles['page56__text--black']}> Nome do meio</span>
                            </div>
                        </div>
                        <div className={styles['page56__word-row']}>
                            <div className={styles['page56__word-column']}>
                                <span className={styles['page56__text--red']}>Last name/Family name</span>
                                <span className={styles['page56__text--black']}> Último nome/Sobrenome</span>
                            </div>
                            <div className={styles['page56__word-column']}>
                                <span className={styles['page56__text--red']}>Full name</span>
                                <span className={styles['page56__text--black']}> Nome completo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Pagina56;
