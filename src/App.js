import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaCadastro from './pages/Cadastro';
import PaginaListaUsuarios from './pages/Lista';
import './App.css'; // Para estilos globais, se necessário
import HomePage from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<PaginaCadastro />} />
        <Route path="/pratos" element={<PaginaListaUsuarios />} />
      </Routes>
    </Router>
  );
}

export default App;