import React from 'react';
import styles from './pagina1.module.css';
import Pagina1_primeira_imagem from '../assets/Images/Pagina1_primeira_imagem.jpg';
import Pagina1_segunda_imagem from '../assets/Images/Pagina1_segunda_imagem.jpg';

const Pagina1 = () => {
    return (
            <div>
                <img className={styles.Pg1Imagem1} src={Pagina1_primeira_imagem} alt="" />
                <img className={styles.Pg1Imagem2} src={Pagina1_segunda_imagem} alt="" />
            </div>
    
  );
};

export default Pagina1;
