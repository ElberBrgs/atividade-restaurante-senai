// src\components\ListaDeUsuarios\index.js

import { useState, useEffect } from "react";
import axios from "axios";
import './styles.css'

function ListaDePratos() {
    const [pratos, setPrato] = useState([])

    useEffect(() => {
        const carregarPratos = async () => {
            try {
                const response = await axios.get('http://localhost:8080/pratos')
                setPrato(response.data)
            } catch (error) {
                alert('Erro ao buscar prato: ', error)
                setPrato([])
            }
        }
        carregarPratos()
    }, [])

    return (
        <ul id="prato" className="lista-Pratos">
            {pratos.length === 0 ? (
                <li>Nenhum usuário encontrado.</li>
            ) : (
                pratos.map( prato => (
                    <li key={prato.id}>
                        <strong>NomePrato: </strong> {prato.nome}<br />
                        <strong>Descrição: </strong> {prato.sexo}<br />
                        <strong>Preço: </strong> {prato.idade}<br />
                        <strong>Categoria: </strong> {prato.altura}<br />
                        <strong>Disponibilidade: </strong> {prato.peso}<br />
                        <strong>Url_Imagem: </strong> {prato.posicao}<br />           
                    </li>
                ))
            )}
        </ul>
    )
    
}

export default ListaDePratos