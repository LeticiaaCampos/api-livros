import { useEffect, useState } from "react";

export default function Filtro({ setLivros }) {
  const [generoFiltro, setGeneroFiltro] = useState('todos');
  const [tipoFiltro, setTipoFiltro] = useState('todos');

  useEffect(() => {
    const buscarLivrosFiltrados = async () => {
      try {
        const response = await fetch(`/livros/genero/${generoFiltro}`);
        const livrosFiltrados = await response.json();
        setLivros(livrosFiltrados);
      } catch (error) {
        //console.error('Erro ao buscar livros filtrados:', error);
      }
    };

    buscarLivrosFiltrados();
  }, [generoFiltro]);

  useEffect(() => {
    const buscarLivrosFiltrados = async () => {
      try {
        const response = await fetch(`/livros/tipo/${tipoFiltro}`);
        const livrosFiltrados = await response.json();
        setLivros(livrosFiltrados);
      } catch (error) {
       // console.error('Erro ao buscar livros filtrados:', error);
      }
    };

    buscarLivrosFiltrados();
  }, [tipoFiltro]);

  return (
    <div className=" flex items-center justify-center p-5">
      <div className="flex flex-col space-y-4 items-center">
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="genero" className="text-gray-700">Gênero:</label>
          <select
            id="genero"
            value={generoFiltro}
            onChange={(e) => setGeneroFiltro(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="todos">Todos</option>
            <option value="Ficção">Ficção</option>
            <option value="Romance">Romance</option>
            <option value="Drama">Drama</option>
            <option value="Fantasia">Fantasia</option>
          </select>
        </div>
  
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="tipo" className="text-gray-700">Filtrar por Tipo:</label>
          <select
            id="tipo"
            value={tipoFiltro}
            onChange={(e) => setTipoFiltro(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
              <option value="Todos">Todos</option>
            <option value="Livro">Livro</option>
            <option value="Novels">Novels</option>
            <option value="Mangás">Mangás</option>
          </select>
        </div>
      </div>
  </div>
  );
}
