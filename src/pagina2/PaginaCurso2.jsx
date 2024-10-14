import { useNavigate } from 'react-router-dom';
import Estrutura from '../Estrutura';
import '../pagina2/PaginaCurso2.css';

function PaginaCurso1() {
    const navigate = useNavigate();

    const irParaPaginaAnterior = () => {
        navigate('/pagina/1');
    };

    const irParaProximaPagina = () => {
        navigate('/pagina/3');
    };

    return (
        <Estrutura>
            <div className="content">
                
                <div className="table-container">
                    <div className="table-header">NEGATIVA + (Forma Contraída)</div>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Introdução<br />Conjunção</th>
                                <th>Advérbio</th>
                                <th>Sujeito</th>
                                <th>Verbo <br /> Auxiliar</th>
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
                                <td className="sujeito">I</td>
                                <td className="verboAuxiliar">ain't</td>
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
                                <td className="adverbio2">not</td>
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
                                <td className="adverbio2">not</td>
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
                <div className="botoes-navegacao-p2">
                <button className="anterior-button-p2" onClick={irParaPaginaAnterior}>
                    Anterior
                </button>
                    <button className="proximo-button-p2" onClick={irParaProximaPagina}>Próximo</button>
                </div>
                <div className="marcador-pagina">
                    <strong>2</strong>
                </div>
            </div>
        </Estrutura>
    );
}

export default PaginaCurso1;
