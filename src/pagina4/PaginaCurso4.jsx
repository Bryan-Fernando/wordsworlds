import { useNavigate } from 'react-router-dom';
import Estrutura from '../Estrutura';
import '../pagina4/PaginaCurso4.css';

function PaginaCurso1() {
    const navigate = useNavigate();

    const irParaPaginaAnterior = () => {
        navigate('/pagina/3');
    };

    const irParaProximaPagina = () => {
        navigate('/pagina/5');
    };

    return (
        <Estrutura>
            <div className="content">
               
                <div className="table-container">
                    <div className="table-header">PERGUNTAS / INTERROGATIVA NEGATIVA + (Forma Contráida)</div>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Introdução<br/> Advérbio <br/>Conjunção</th>
                                <th>Palavras <br/> Interrogativas</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th>Sujeito</th>
                                <th><span style={{ color: 'red'}}>Not</span><br /> Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto <br /> Complemento</th>
                                <th>Place <br />(where)</th>
                                <th>Time <br /> (when)</th>
                                <th>...</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="tabelaIntroducao"></td>
                                <td className="adverbio"></td>
                                <td className="verboAuxiliar">Am</td>
                                <td className="sujeito">I</td>
                                <td className="notAdverbio">not</td>
                                <td className="verbo"></td>
                                <td className="objetivoComplemento">a good student?</td>
                                <td className="place"></td>
                                <td className="time"></td>
                                <td className="tresPontos"></td>
                            </tr>
                            <tr>
                                <td className="tabelaIntroducao"></td>
                                <td className="adverbio"></td>
                                <td className="verboAuxiliar">Ain't</td>
                                <td className="sujeito">I</td>
                                <td className="notAdverbio"></td>
                                <td className="verbo"></td>
                                <td className="objetivoComplemento">in class A or B?</td>
                                <td className="place"></td>
                                <td className="time"></td>
                                <td className="tresPontos"></td>
                            </tr>
                            <tr>
                                <td className="tabelaIntroducao"></td>
                                <td className="adverbio"></td>
                                <td className="verboAuxiliar">Ain't</td>
                                <td className="sujeito">I</td>
                                <td className="notAdverbio"></td>
                                <td className="verbo"></td>
                                <td className="objetivoComplemento">over 3?</td>
                                <td className="place"></td>
                                <td className="time"></td>
                                <td className="tresPontos"></td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Introdução<br/> Advérbio <br/>Conjunção</th>
                                <th>Palavras <br/> Interrogativas</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th>Sujeito</th>
                                <th><span style={{ color: 'red'}}>Not</span><br /> Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto <br /> Complemento</th>
                                <th>Place <br />(where)</th>
                                <th>Time <br /> (when)</th>
                                <th>...</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(6)].map((_, idx) => (
                                <tr key={idx}>
                                    <td className="tabelaIntroducao"><input type="text" className="input-cell" /></td>
                                    <td className="adverbio"><input type="text" className="input-cell" /></td>
                                    <td className="verboAuxiliar"><input type="text" className="input-cell" /></td>
                                    <td className="sujeito"><input type="text" className="input-cell" /></td>
                                    <td className="notAdverbio"><input type="text" className="input-cell" /></td>
                                    <td className="verbo"><input type="text" className="input-cell" /></td>
                                    <td className="objetivoComplemento"><input type="text" className="input-cell" /></td>
                                    <td className="place"><input type="text" className="input-cell" /></td>
                                    <td className="time"><input type="text" className="input-cell" /></td>
                                    <td className="tresPontos"><input type="text" className="input-cell" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="botoes-navegacao-p4">
                <button className="anterior-button" onClick={irParaPaginaAnterior}>
                    Anterior
                </button>
                    <button className="proximo-button" onClick={irParaProximaPagina}>Próximo</button>
                </div>
                <div className="marcador-pagina">
                    <strong>4</strong>
                </div>
            </div>
        </Estrutura>
    );
}

export default PaginaCurso1;
