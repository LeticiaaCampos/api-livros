import React from 'react';
import { useEffect, useState } from "react";
import prisma from './prisma';


export default function Filtro() {
  const [livros, setLivros] = useState([]);
  const [generoFiltro, setGeneroFiltro] = useState('todos');
  const [tipoFiltro, setTipoFiltro] = useState('todos');

  useEffect(() => {
    const buscarLivros = async () => {
      try {
        const response = await fetch(`/livros/filtrados?genero=${generoFiltro}&tipo=${tipoFiltro}`);
        const livrosResult = await response.json();
        setLivros(livrosResult);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    };

    buscarLivros();
  }, [generoFiltro, tipoFiltro]);

  return (
    <div className="App">
      <h1>Lista de Livros</h1>

      <div>
        <label htmlFor="genero">Filtrar por Gênero:</label>
        <select
          id="genero"
          value={generoFiltro}
          onChange={(e) => setGeneroFiltro(e.target.value)}
        >
          <option value="todos">Todos</option>
          <option value="Ficção">Ficção</option>
          <option value="Romance">Romance</option>
          <option value="Drama">Drama</option>
          <option value="Fantasia">Fantasia</option>
        </select>
      </div>
      <div>
        <label htmlFor="tipo">Filtrar por Tipo:</label>
        <select
          id="tipo"
          value={tipoFiltro}
          onChange={(e) => setTipoFiltro(e.target.value)}
        >
          <option value="todos">Todos</option>
          <option value="Livro">Livro</option>
          <option value="Novels">Novels</option>
          <option value="Mangás">Mangás</option>
        </select>
      </div>

      <div className="lista-livros">
        {livros.map((livro) => (
          <div key={livro.id} className="livro">
            <h2>{livro.nome}</h2>
            <p>Gênero: {livro.genero}</p>
            <p>Tipo: {livro.tipo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
