import React, { useState } from 'react';
import styles from './pagina42.module.css';
import Pagina42_primeira_imagem from '../assets/Images/Pagina42_primeira_imagem.jpg';
import Pg42IconNotes from '../assets/Icons/Icon-Notes.png';
import Pagina42_main_imagem1 from '../assets/Images/Pagina42_main_imagem1.jpg';
import Pagina42_main_imagem2 from '../assets/Images/Pagina42_main_imagem2.jpg';
import Pagina42_main_imagem3 from '../assets/Images/Pagina42_main_imagem3.jpg';
import Pagina42_main_imagem4 from '../assets/Images/Pagina42_main_imagem4.jpg';
import Pagina42_main_imagem5 from '../assets/Images/Pagina42_main_imagem5.jpg';

const Pagina42 = () => {
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
            <div className={styles.Pg42Container}>
                <header className={styles.Pg42Header}>
                    <h1 className={styles.Pg42HeaderH1}>Introductions</h1>
                </header>
                <main className={styles.Pg42Main}>
                    <div className={styles.Pg42ContainerPessoas}>
                        <div className={styles.Pg42PessoasDiv}>
                            <div className={styles.Pg42Pessoa1}>
                                <img className={styles.Pg42_main_imagem1} src={Pagina42_main_imagem1} alt="" />
                                <p> Name: I’m Eric Porto. <br />
                                    Age: I’m 32 (thirty-two) years old. <br />
                                    Nationality: I’m Brazilian. <br />
                                    City: I’m from Paraty.  <br />
                                </p>
                            </div>
                            <hr className={styles.Pg4Hr} />
                        </div>
                        <div className={styles.Pg42PessoasDiv}>
                            <div className={styles.Pg42Pessoa2}>
                                <p> Name: This is my friend Marilia Alves. <br />
                                    Age: She’s 31 (thirty-one) years old. <br />
                                    Nationality: She is Brazilian. <br />
                                    City: She’s from Paraty. <br />
                                </p>
                                <img className={styles.Pg42_main_imagem2} src={Pagina42_main_imagem2} alt="" />
                            </div>
                            <hr className={styles.Pg4Hr} />
                        </div >
                        <div className={styles.Pg42PessoasDiv}>
                            <div className={styles.Pg42Pessoa3}>
                                <img className={styles.Pg42_main_imagem3} src={Pagina42_main_imagem3} alt="" />
                                <p> Name: This is Deborah Sena. <br />
                                    Age: She is 36 (thirty-six) years old. <br />
                                    Nationality: Brazilian and Portuguese. <br />
                                    City: She’s originally from Angra dos <br /> Reis but lives in Calgary - Canada.  <br />
                                </p>
                            </div>
                            <hr className={styles.Pg4Hr} />
                        </div>
                        <div className={styles.Pg42PessoasDiv}>
                            <div className={styles.Pg42Pessoa4}>
                                <p> Name: Mei Lazari. <br />
                                    Age: He’s 36 (thirty-six) years old. <br />
                                    Nationality: He’s Brazilian. <br />
                                    City: He is from Ariquemes. <br />
                                </p>
                                <img className={styles.Pg42_main_imagem4} src={Pagina42_main_imagem4} alt="" />
                            </div>
                            <hr className={styles.Pg4Hr} />
                        </div>
                        <div className={styles.Pg42PessoasDiv}>
                            <div className={styles.Pg42Pessoa5}>
                                <img className={styles.Pg42_main_imagem5} src={Pagina42_main_imagem5} alt="" />
                                <p> Name: This is Cheryl Daves. <br />
                                    Age: She’s 37 (thirty-seven) years old. <br />
                                    Nationality: Cheryl is Canadian. <br />
                                    City: She’s from Calgary. <br />
                                </p>
                            </div>
                            <hr className={styles.Pg4Hr} />
                        </div>
                    </div>
                    <img className={styles.Pg42Imagem1} src={Pagina42_primeira_imagem} alt="" />
                </main>
                <aside className={styles.Pg42Aside}>
                    <div className={styles.Pg42Asidecontainer}>
                        <div className={styles.Pg42AsideNotes1}>
                            <img className={styles.Pg42AsideImgNotes} src={Pg42IconNotes} alt="" />
                            <p>Word Bank</p>
                        </div>
                        <div className={styles.Pg42AsideNotes2}>
                            <p className={styles.Pg42AsideNotes2Negrito}>
                                Name <br />
                                Age <br />
                                Nationality <br />
                                City <br />
                                Country
                            </p>
                            <p>
                                Nome <br />
                                Idade <br />
                                Nacionalidade <br />
                                Cidade <br />
                                País
                            </p>
                        </div>
                    </div>
                    <div className={styles.Pg42Asidecontainer}>
                        <div className={styles.Pg42AsideNotes1}>
                            <img className={styles.Pg42AsideImgNotes} src={Pg42IconNotes} alt="" />
                            <p>Word Bank</p>
                        </div>
                        <div className={styles.Pg42AsideNotes2}>
                            <p className={styles.Pg42AsideNotes2Negrito}>
                                This <br />
                                From <br />
                                Age <br />
                                My <br />
                                Your
                            </p>
                            <p>
                                este, esta, isso, isto <br />
                                de, da, dos, das, (origem, procedência) <br />
                                idade <br />
                                meu, minha, meus, minhas <br />
                                teu, tua, teus, tuas
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina42;
