import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PaginaCurso1 from './pagina1/PaginaCurso1';
import PaginaCurso2 from './pagina2/PaginaCurso2';
import PaginaCurso3 from './pagina3/PaginaCurso3';
import PaginaCurso4 from './pagina4/PaginaCurso4';
import PaginaCurso5 from './pagina5/PaginaCurso5';
import PaginaCurso6 from './pagina6/PaginaCurso6';
import PaginaCurso7 from './pagina7/PaginaCurso7';
import PaginaCurso8 from './pagina8/PaginaCurso8';
import PaginaCurso9 from './pagina9/PaginaCurso9';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/pagina/1" />} />

        <Route path="/pagina/1" element={<PaginaCurso1 />} />
        <Route path="/pagina/2" element={<PaginaCurso2 />} />
        <Route path="/pagina/3" element={<PaginaCurso3 />} />
        <Route path="/pagina/4" element={<PaginaCurso4 />} />
        <Route path="/pagina/5" element={<PaginaCurso5 />} />
        <Route path="/pagina/6" element={<PaginaCurso6 />} />
        <Route path="/pagina/7" element={<PaginaCurso7 />} />
        <Route path="/pagina/8" element={<PaginaCurso8 />} />
        <Route path="/pagina/9" element={<PaginaCurso9 />} />
      </Routes>
    </Router>
  );
}

export default App;