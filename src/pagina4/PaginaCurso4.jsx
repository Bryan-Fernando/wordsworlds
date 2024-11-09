import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Estrutura from '../Estrutura';
import '../pagina4/PaginaCurso4.css';

function PaginaCurso1() {
    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState(
        Array.from({ length: 6 }, () => Array(10).fill('')) // Cria uma matriz de inputs vazios
    );

    const irParaPaginaAnterior = () => {
        window.scrollTo(0, 0);
        navigate('/pagina/3');
    };

    const irParaProximaPagina = () => {
        window.scrollTo(0, 0);
        navigate('/pagina/5');
    };

    const handleInputChange = (rowIndex, colIndex, e) => {
        const newValue = e.target.value;
        const updatedValues = inputValues.map((row, i) =>
            row.map((value, j) => (i === rowIndex && j === colIndex ? newValue : value))
        );

        setInputValues(updatedValues);

        // Verifica o comprimento do texto e passa para o próximo input abaixo
        if (newValue.length > 15 && rowIndex < inputValues.length - 1) { // Limite de caracteres (ajustável)
            document.getElementById(`input-${rowIndex + 1}-${colIndex}`).focus();
        }
    };

    const handleKeyDown = (rowIndex, colIndex, e) => {
        // Se a tecla Enter for pressionada, mova para o input da linha abaixo
        if (e.key === 'Enter' && rowIndex < inputValues.length - 1) {
            e.preventDefault(); // Evita quebra de linha no input
            document.getElementById(`input-${rowIndex + 1}-${colIndex}`).focus();
        }
    };

    return (
        <Estrutura>
            <div className="content">
                <div className="table-container">
                    <div className="table-header">INTERROGATIVA NEGATIVA (PERGUNTAS)</div>

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
                                <th>Tempo <br />(Quando)</th>
                                <th>Lugar <br /> (Onde)</th>
                                <th>...</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inputValues.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((value, colIndex) => (
                                        <td key={colIndex}>
                                            <input
                                                id={`input-${rowIndex}-${colIndex}`}
                                                type="text"
                                                className="input-cell"
                                                value={value}
                                                onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
                                                onKeyDown={(e) => handleKeyDown(rowIndex, colIndex, e)} // Adiciona o evento onKeyDown
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="botoes-navegacao-p4">
                    <button className="anterior-button-p4" onClick={irParaPaginaAnterior}>
                        Anterior
                    </button>
                    <button className="proximo-button-p4" onClick={irParaProximaPagina}>Próximo</button>
                </div>
                <div className="marcador-pagina">
                    <strong>4</strong>
                </div>
            </div>
        </Estrutura>
    );
}

export default PaginaCurso1;
