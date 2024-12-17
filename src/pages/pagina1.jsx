import React, { useState } from 'react';
import styles from './pagina1.module.css';
import Pagina0Video from '../assets/pagina0Video.mp4'; 

const Pagina1 = () => {
  return (
    <div className={styles.container}>
      <video className={styles.fullScreenVideo} autoPlay muted loop>
        <source src={Pagina0Video} type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
    </div>
  );
};

export default Pagina1;
