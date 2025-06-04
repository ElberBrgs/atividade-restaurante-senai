import { useState } from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";
import useMensagem from '../../hooks/useMensagem';
import MensagemFeedback from '../MensagemFeedback';
import logo from '../../assets/images/logo.png';
import axios from 'axios';

function FormularioCadastro() {
    const [nomeDoPrato, setNomeDoPrato] = useState('');
    const [descricaoDoPrato, setDescricaoDoPrato] = useState('');
    const [precoDoPrato, setPrecoDoPrato] = useState('');
    const [categoria, setCategoria] = useState('');
    const [disponibilidade, setDisponibilidade] = useState('');
    const [urlImagem, setUrlImagem] = useState('');
    const [previewImagem, setPreviewImagem] = useState(null);

    const navigate = useNavigate();
    const { exibirMensagem, mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem();

    const cadastrarPrato = async () => {
        try {
            const response = await axios.post('http://localhost:8080/pratos', {
                nomeDoPrato,
                descricaoDoPrato,
                precoDoPrato,
                categoria,
                disponibilidade,
                urlImagem
            });

            exibirMensagem(response.data.mensagem || 'Prato cadastrado com sucesso!', 'sucesso');

            
            setNomeDoPrato('');
            setDescricaoDoPrato('');
            setPrecoDoPrato('');
            setCategoria('');
            setDisponibilidade('');
            setUrlImagem('');
            setPreviewImagem(null);

        } catch (error) {
            let erroMsg = 'Erro ao conectar ao servidor.';
            if (error.response && error.response.data) {
                erroMsg = error.response.data.mensagem;
                if (error.response.data.erros) {
                    erroMsg += ' ' + Object.values(error.response.data.erros).join(', ');
                }
            }
            exibirMensagem(erroMsg, 'erro');
        }
    };

    return (
        <div className="container">
            <img src={logo} alt="Logo da empresa" />
            <h2>Cadastro de prato</h2>
            <form onSubmit={(e) => { e.preventDefault(); cadastrarPrato(); }}>
                <input
                    type="text"
                    id="nomeprato"
                    placeholder="Nome do prato"
                    value={nomeDoPrato}
                    onChange={(e) => setNomeDoPrato(e.target.value)}
                    required
                />
                <input
                    type="text"
                    id="descricao"
                    placeholder="Descrição do prato"
                    value={descricaoDoPrato}
                    onChange={(e) => setDescricaoDoPrato(e.target.value)}
                    required
                />
                <input
                    type="text"
                    id="preco"
                    placeholder="Preço"
                    value={precoDoPrato}
                    onChange={(e) => setPrecoDoPrato(e.target.value)}
                    required
                />
                <select
                    id="categoria"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    required
                >
                    <option value="" disabled>Categoria</option>
                    <option value="ENTRADA">Entrada</option>
                    <option value="PRATO_PRINCIPAL">Prato principal</option>
                    <option value="SOBREMES">Sobremesa</option>
                    <option value="BEBIDA">Bebida</option>
                </select>
                <select
                    id="disponibilidade"
                    value={disponibilidade}
                    onChange={(e) => setDisponibilidade(e.target.value)}
                    required
                >
                    <option value="" disabled>Disponibilidade</option>
                    <option value="DISPONIVEL">Disponível</option>
                    <option value="INDISPONIVEL">Indisponível</option>
                </select>

                <label>Imagem do prato:</label>
                <p>Cole a URL da imagem</p>
                <input
                    type="text"
                    id="urlimagem"
                    placeholder="Cole a URL da imagem"
                    value={urlImagem}
                    onChange={(e) => {
                        setUrlImagem(e.target.value);
                        setPreviewImagem(e.target.value); 
                    }}
                />

                <div style={{ margin: "10px 0", textAlign: "center" }}>
                </div>

                {previewImagem && (
                    <img
                        src={previewImagem}
                        alt="Pré-visualização"
                        style={{ maxWidth: '100%', marginTop: '10px', borderRadius: '8px' }}
                    />
                )}

                <button type="submit">Cadastrar</button>
            </form>

            <button onClick={() => navigate('/pratos')} className="link-jogadores">
                Ver cardápio
            </button>

            <button onClick={() => navigate('/')} className="link-home">
                Página inicial
            </button>

            <MensagemFeedback
                mensagem={mensagem}
                tipo={tipoMensagem}
                visivel={visivel}
                onclose={fecharMensagem}
            />
        </div>
    );
}

export default FormularioCadastro;
