// src\components\Home\index.js

import './styles.css';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo.png'

function Home (){
    const navigate = useNavigate();
    
    return (
        <div className="container">
            <img src={logo} alt="Logo da empresa" />
            <h2>Cardápio</h2>
            <button onClick={() => navigate('/jogadores')} className='link-jogadores'>Ver cardápio</button>
            <button onClick={() => navigate('/cadastro')} className='link-cadastro'>Cadastra pratos </button>
        </div>
    )
}


export default Home;
