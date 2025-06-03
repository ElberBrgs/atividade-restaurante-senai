// src\pages\Lista\index.js

import ListaDeUsuarios from '../../components/ListaDePratos'
import { useNavigate } from 'react-router-dom'
import './styles.css'

function PaginaListaUsuarios() {
    const navigate = useNavigate()
    
return (
        <div className='pagina-lista-pratos'>
            <div className='container'>
                <h2>Cardápio</h2>
                <ListaDeUsuarios />
                <button onClick={() => navigate('/cadastro')} className='link-voltar'>
                    Cadastrar pratos
                </button>
                
                <button onClick={() => navigate('/')} className="link-home">
                    Página inicial
                </button>
            </div>
        </div>
    )
}

export default PaginaListaUsuarios