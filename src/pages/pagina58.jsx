import React from 'react';
import styles from './pagina58.module.css';
import Pagina58_Angola from '../assets/Images/Pagina58_Angola.png';
import Pagina58_Argentina from '../assets/Images/Pagina58_Argentina.png';
import Pagina58_Australia from '../assets/Images/Pagina58_Australia.png';
import Pagina58_Brazil from '../assets/Images/Pagina58_Brasil.png';
import Pagina58_Canada from '../assets/Images/Pagina58_Canada.png';
import Pagina58_China from '../assets/Images/Pagina58_China.png';
import Pagina58_Colombia from '../assets/Images/Pagina58_Colombia.png';
import Pagina58_Egito from '../assets/Images/Pagina58_Egito.png';
import Pagina58_Franca from '../assets/Images/Pagina58_Franca.png';
import Pagina58_Alemanha from '../assets/Images/Pagina58_Alemanha.png';
import Pagina58_India from '../assets/Images/Pagina58_India.png';
import Pagina58_Italia from '../assets/Images/Pagina58_Italia.png';
import Pagina58_Japao from '../assets/Images/Pagina58_Japao.png';
import Pagina58_Mexico from '../assets/Images/Pagina58_Mexico.png';
import Pagina58_Mocambique from '../assets/Images/Pagina58_Mocambique.png';
import Pagina58_Peru from '../assets/Images/Pagina58_Peru.png';
import Pagina58_Russia from '../assets/Images/Pagina58_Russia.png';
import Pagina58_Espanha from '../assets/Images/Pagina58_Espanha.png';
import Pagina58_Suica from '../assets/Images/Pagina58_Suica.png';
import Pagina58_GraBretanha from '../assets/Images/Pagina58_GraBretanha.png';
import Pagina58_Usa from '../assets/Images/Pagina58_Usa.png';

const Pagina58 = () => {
    return (
        <div className={styles.pg58Container}>
            <header className={styles.pg58Header}>
            <h1 className={styles.pg58HeaderH1}>Listening and Pronunciation</h1>
            </header>
            <main className={styles.pg58Main}>
                <table className={styles.pg58Table}>
                    <tr>
                        <th>flag</th>
                        <th>Country</th>
                        <th>Capital</th>
                        <th>Nationality</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_Angola} alt="Angola Flag" className={styles.flag} /></th>
                        <th>Angola</th>
                        <th>Luanda</th>
                        <th>Angolan</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_Argentina} alt="Argentina Flag"className={styles.flag} /></th>
                        <th>Argentina</th>
                        <th>Buenos Aires</th>
                        <th>Argentine</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_Australia} alt="Australia Flag"className={styles.flag} /></th>
                        <th>Australia</th>
                        <th>Canberra</th>
                        <th>Australian</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_Brazil} alt="Brazil Flag"className={styles.flag} /></th>
                        <th>Brazil</th>
                        <th>Brasília</th>
                        <th>Brazilian</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_Canada} alt="Canada Flag"className={styles.flag} /></th>
                        <th>Canada</th>
                        <th>Ottawa</th>
                        <th>Canadian</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_China} alt="China Flag"className={styles.flag} /></th>
                        <th>China</th>
                        <th>Beijing</th>
                        <th>Chinese</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_Colombia} alt="Colombia Flag"className={styles.flag} /></th>
                        <th>Colombia</th>
                        <th>Bogotá</th>
                        <th>Colombian</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_Egito} alt="Egypt Flag"className={styles.flag} /></th>
                        <th>Egypt</th>
                        <th>Cairo</th>
                        <th>Egyptian</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_Franca} alt="France Flag"className={styles.flag} /></th>
                        <th>France</th>
                        <th>Paris</th>
                        <th>French</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_Alemanha} alt="Germany Flag"className={styles.flag} /></th>
                        <th>Germany</th>
                        <th>Berlin</th>
                        <th>German</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_India} alt="Indian Flag"className={styles.flag} /></th>
                        <th>India</th>
                        <th>New Delhi</th>
                        <th>Indian</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_Italia} alt="Italian Flag"className={styles.flag} /></th>
                        <th>Italy</th>
                        <th>Rome</th>
                        <th>Italian</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_Japao} alt="Japao Flag"className={styles.flag} /></th>
                        <th>Japan</th>
                        <th>Tokyo</th>
                        <th>Japanese</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_Mexico} alt="Mexican Flag"className={styles.flag} /></th>
                        <th>Mexico</th>
                        <th>Mexico City </th>
                        <th>Mexican</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_Mocambique} alt="Mozambican Flag"className={styles.flag} /></th>
                        <th>Mozambique</th>
                        <th>Maputo</th>
                        <th>Mozambican</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_Peru} alt="Peruvian Flag"className={styles.flag} /></th>
                        <th>Peru</th>
                        <th>Lima</th>
                        <th>Peruvian</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_Russia} alt="Russian Flag"className={styles.flag} /></th>
                        <th>Russia</th>
                        <th>Moscow</th>
                        <th>Russian</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_Espanha} alt="Spanish Flag"className={styles.flag} /></th>
                        <th>Spain</th>
                        <th>Madrid</th>
                        <th>Spanish</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_Suica} alt="Swiss Flag"className={styles.flag} /></th>
                        <th>Switzerland</th>
                        <th>Bern</th>
                        <th>Swiss</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_GraBretanha} alt="British Flag"className={styles.flag} /></th>
                        <th>United Kingdom</th>
                        <th>London</th>
                        <th>British</th>
                    </tr>
                    <tr>
                        <th><img src={Pagina58_Usa} alt="Usa Flag"className={styles.flag} /></th>
                        <th>United States </th>
                        <th>Washington,D.C. </th>
                        <th>American</th>
                    </tr>
                    
                </table>
            </main>
        </div>
  );
};

export default Pagina58;
