import { useNavigate } from 'react-router-dom';
import Estrutura from '../Estrutura';
import '../pagina1/PaginaCurso1.css';
import eIcon from '../assets/eIcon.png';
import pIcon from '../assets/pIcon.png';


function PaginaCurso1() {
    const navigate = useNavigate();

    const irParaProximaPagina = () => {
        navigate('/pagina/2');
    };

    return (
        <Estrutura>
            <div className="content">
              
                <div className="table-container">
                    <div className="table-header">AFIRMATIVA</div>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Introdução<br />Conjunção</th>
                                <th>Advérbio</th>
                                <th>Sujeito</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th>Advérbio</th>
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
                                <td className="sujeito">I</td>
                                <td className="verboAuxiliar">am</td>
                                <td className="adverbio2"></td>
                                <td className="verbo"></td>
                                <td className="objetivoComplemento"></td>
                                <td className="place"></td>
                                <td className="time"></td>
                                <td className="tresPontos"></td>
                            </tr>

                            <tr>
                                <td className="tabelaIntroducao"></td>
                                <td className="adverbio"></td>
                                <td className="sujeito">I</td>
                                <td className="verboAuxiliar">am</td>
                                <td className="adverbio2"></td>
                                <td className="verbo"></td>
                                <td className="objetivoComplemento">at work</td>
                                <td className="place"></td>
                                <td className="time"></td>
                                <td className="tresPontos"></td>
                            </tr>
                            <tr>
                                <td className="tabelaIntroducao"></td>
                                <td className="adverbio"></td>
                                <td className="sujeito">I</td>
                                <td className="verboAuxiliar">am</td>
                                <td className="adverbio2"></td>
                                <td className="verbo"></td>
                                <td className="objetivoComplemento">years old</td>
                                <td className="place"></td>
                                <td className="time"></td>
                                <td className="tresPontos"></td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Introdução<br />Conjunção</th>
                                <th>Advérbio</th>
                                <th>Sujeito</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th>Advérbio</th>
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
                                    <td className="sujeito"><input type="text" className="input-cell" /></td>
                                    <td className="verboAuxiliar"><input type="text" className="input-cell" /></td>
                                    <td className="adverbio2"><input type="text" className="input-cell" /></td>
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
                <div className="botoes-navegacao">
                    <button className="proximo-button" onClick={irParaProximaPagina}>Próximo</button>
                </div>
                <div className="marcador-pagina">
                    <strong>1</strong>
                </div>
            </div>
        </Estrutura>
    );
}

export default PaginaCurso1;
