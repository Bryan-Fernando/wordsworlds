import React, { useState } from 'react';
import styles from './pagina44.module.css';
import Pg44IconNotes from '../assets/Icons/Icon-Notes.png';
import Pagina44_Primeira_imagem from '../assets/Images/Pagina44_Primeira_imagem.jpg';
import Pagina44_Brasil from '../assets/Images/Pagina44_Brasil.png';
import Pagina44_Canada from '../assets/Images/Pagina44_Canada.png';
import Pagina44_China from '../assets/Images/Pagina44_China.png';
import Pagina44_Egito from '../assets/Images/Pagina44_Egito.png';
import Pagina44_Franca from '../assets/Images/Pagina44_Franca.png';
import Pagina44_Alemanha from '../assets/Images/Pagina44_Alemanha.png';
import Pagina44_GraBretanha from '../assets/Images/Pagina44_GraBretanha.png';
import Pagina44_Italia from '../assets/Images/Pagina44_Italia.png';
import Pagina44_Japao from '../assets/Images/Pagina44_Japao.png';
import Pagina44_Mexico from '../assets/Images/Pagina44_Mexico.png';
import Pagina44_Portugal from '../assets/Images/Pagina44_Portugal.png';
import Pagina44_Espanha from '../assets/Images/Pagina44_Espanha.png';
import Pagina44_Usa from '../assets/Images/Pagina44_Usa.png';


const Pagina44 = () => {
    const [inputValues, setInputValues] = useState(
        Array(6).fill(Array(6).fill(''))
    );

    const handleInputChange = (rowIndex, colIndex, e) => {
        const newValue = e.target.value;
        const updatedValues = inputValues.map((row, i) =>
            row.map((value, j) => (i === rowIndex && j === colIndex ? newValue : value))
        );
        setInputValues(updatedValues);
    };

    return (
        <div>
            <div className={styles.Pg44Container}>
                <main className={styles.Pg44Main}>
                    <img className={styles.Pg44MainImagems} src={Pagina44_Primeira_imagem} alt="" />
                </main>
                <aside className={styles.Pg44Aside}>
                    <div className={styles.tableContainer}>
                        <div className={styles.table}>
                            <div className={styles.header}>
                                <div className={styles.column}>Country</div>
                                <div className={styles.column}>Nationality</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Brasil} alt="Brazil Flag" className={styles.flag} />
                                    Brazil
                                </div>
                                <div className={styles.cell}>Brazilian</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Canada} alt="Brazil Flag" className={styles.flag} />
                                    Canada
                                </div>
                                <div className={styles.cell}>Canadian</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_China} alt="Brazil Flag" className={styles.flag} />
                                    China
                                </div>
                                <div className={styles.cell}>Chinese</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Egito} alt="Brazil Flag" className={styles.flag} />
                                    Egypt
                                </div>
                                <div className={styles.cell}>Egyptian</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Franca} alt="Brazil Flag" className={styles.flag} />
                                    France
                                </div>
                                <div className={styles.cell}>French</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Alemanha} alt="Brazil Flag" className={styles.flag} />
                                    Germany
                                </div>
                                <div className={styles.cell}>German</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_GraBretanha} alt="Brazil Flag" className={styles.flag} />
                                    Great Britain
                                </div>
                                <div className={styles.cell}>British</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Italia} alt="Brazil Flag" className={styles.flag} />
                                    Italy
                                </div>
                                <div className={styles.cell}>Italian</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Japao} alt="Brazil Flag" className={styles.flag} />
                                    Japan
                                </div>
                                <div className={styles.cell}>Japanese</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Mexico} alt="Brazil Flag" className={styles.flag} />
                                    Mexico
                                </div>
                                <div className={styles.cell}>Mexican</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Portugal} alt="Brazil Flag" className={styles.flag} />
                                    Portugal
                                </div>
                                <div className={styles.cell}>Portuguese</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Espanha} alt="Brazil Flag" className={styles.flag} />
                                    Spain
                                </div>
                                <div className={styles.cell}>Spanish</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Usa} alt="Brazil Flag" className={styles.flag} />
                                    USA
                                </div>
                                <div className={styles.cell}>American</div>
                            </div>
                        </div>

                        <div className={styles.table}>
                            <div className={styles.header}>
                                <div className={styles.column}>País</div>
                                <div className={styles.column}>Nacionalidade</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Brasil} alt="Bandeira do Brasil" className={styles.flag} />
                                    Brasil
                                </div>
                                <div className={styles.cell}>Brasileiro</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Canada} alt="Bandeira do Brasil" className={styles.flag} />
                                    Canadá
                                </div>
                                <div className={styles.cell}>Canadense</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_China} alt="Bandeira do Brasil" className={styles.flag} />
                                    China
                                </div>
                                <div className={styles.cell}>Chinês</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Egito} alt="Bandeira do Brasil" className={styles.flag} />
                                    Egito
                                </div>
                                <div className={styles.cell}>Egípcio</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Franca} alt="Bandeira do Brasil" className={styles.flag} />
                                    França
                                </div>
                                <div className={styles.cell}>Francês</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Alemanha} alt="Bandeira do Brasil" className={styles.flag} />
                                    Alemanha
                                </div>
                                <div className={styles.cell}>Alemão</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_GraBretanha} alt="Bandeira do Brasil" className={styles.flag} />
                                    Grã-Bretanha
                                </div>
                                <div className={styles.cell}>Britânico</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Italia} alt="Bandeira do Brasil" className={styles.flag} />
                                    Itália
                                </div>
                                <div className={styles.cell}>Italiano</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Japao} alt="Bandeira do Brasil" className={styles.flag} />
                                    Japão
                                </div>
                                <div className={styles.cell}>Japonês</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Mexico} alt="Bandeira do Brasil" className={styles.flag} />
                                    México
                                </div>
                                <div className={styles.cell}>Mexicano</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Portugal} alt="Bandeira do Brasil" className={styles.flag} />
                                    Portugal
                                </div>
                                <div className={styles.cell}>Português</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Espanha} alt="Bandeira do Brasil" className={styles.flag} />
                                    Espanha
                                </div>
                                <div className={styles.cell}>Espanhol</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.cell}>
                                    <img src={Pagina44_Usa} alt="Bandeira do Brasil" className={styles.flag} />
                                    EUA
                                </div>
                                <div className={styles.cell}>Americano</div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina44;
