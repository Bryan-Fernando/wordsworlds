import React from 'react';
import styles from './pagina1.module.css';
import videoCapa from '../assets/wwcnp.mp4';

const Pagina1 = () => {
    return (
        <div className={styles.pageContainer}>
            <video
                className={styles.backgroundVideo}
                src={videoCapa}
                autoPlay
                loop
                muted
            />
        </div>
    );
};

export default Pagina1;
