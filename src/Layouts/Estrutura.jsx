import React, { useState } from 'react';
import './Estrutura.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Estrutura({ children, backgroundColor, routes = [] }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [paginaValida, setPaginaValida] = useState(false);

  const currentIndex = routes.findIndex((route) => route.path === location.pathname);

  const userNavigate = (path, state = {}) => {
    window.scrollTo(0, 0);
    navigate(path, { state });
  };

  // Função de validação que será passada como prop
  const handleValidarPagina = (isValid) => {
    setPaginaValida(isValid);
  };

  const handleAvancar = () => {
    if (location.pathname === '/pagina36' && !paginaValida) {
      alert('Por favor, valide as respostas antes de avançar.');
      return;
    }
    if (currentIndex >= 0 && currentIndex < routes.length - 1) {
      userNavigate(routes[currentIndex + 1]?.path);
    }
  };

  const handleVoltar = () => {
    if (currentIndex > 0) {
      const previousPage = routes[currentIndex - 1]?.path;
      if (previousPage === '/pagina37') {
        // Enviar dados armazenados no localStorage ao voltar para a página 37
        const respostasUsuario = localStorage.getItem('respostasPagina36') 
          ? JSON.parse(localStorage.getItem('respostasPagina36')) 
          : [];
        const resultado = localStorage.getItem('resultadoPagina36') 
          ? JSON.parse(localStorage.getItem('resultadoPagina36')) 
          : [];
        
        userNavigate(previousPage, { respostasUsuario, resultado });
      } else {
        userNavigate(previousPage);
      }
    }
  };

  return (
    <div>
      <main
        className="mainEstrutura"
        style={{ backgroundColor: backgroundColor || 'white' }}
      >
        <div className="side">
          <p className="wordside">Words and Worlds</p>
          <p className="englishside">ENGLISH COURSE</p>
        </div>
        <div className="Content">
          <div>
            {React.cloneElement(children, { onValidar: handleValidarPagina })}
          </div>
          <div className="navButtons">
            <button
              className="navButton"
              onClick={handleVoltar}
              disabled={currentIndex <= 0}
            >
              Voltar
            </button>

            <button
              className="navButton"
              onClick={handleAvancar}
              disabled={currentIndex >= routes.length - 1}
            >
              Avançar
            </button>
            <div className="marcador-pagina">
              <strong>{currentIndex + 1}</strong>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Estrutura;
