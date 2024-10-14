import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Importa o componente principal do seu app
import './index.css'; // Importa os estilos globais

// Cria o ponto de entrada principal da aplicação, renderizando o componente App no elemento com id 'root'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
  </StrictMode>
);
