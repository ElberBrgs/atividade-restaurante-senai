import { useState, useEffect } from "react";
import axios from "axios";
import './styles.css';

function ListaDePratos() {
  const [pratos, setPrato] = useState([]);

  useEffect(() => {
    const carregarPratos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/pratos');
        setPrato(response.data);
      } catch (error) {
        alert('Erro ao buscar prato: ' + error.message);
        setPrato([]);
      }
    };
    carregarPratos();
  }, []);

  return (
    <ul className="lista-pratos">
      {pratos.length === 0 ? (
        <li>Nenhum prato encontrado.</li>
      ) : (
        pratos.map(prato => (
          <li key={prato.id} className="card-prato">
            {prato.urlImagem && (
              <img
                src={prato.urlImagem}
                alt={`Imagem do prato ${prato.nomeDoPrato}`}
                className="imagem-prato"
              />
            )}
            <div className="info-prato">
              <h1>{prato.nomeDoPrato}</h1>
              <p><strong>Descrição: </strong>{prato.descricaoDoPrato}</p>
              <p><strong>Preço: </strong>R$ {prato.precoDoPrato}</p>
              <p><strong>Categoria: </strong>{prato.categoria}</p>
              <p><strong>Disponibilidade: </strong>{prato.disponibilidade}</p>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default ListaDePratos;