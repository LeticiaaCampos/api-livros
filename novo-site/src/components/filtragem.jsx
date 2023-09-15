import { useEffect, useRef, useState } from "react";

export default function Filtro({ setLivros }) {
  const genero = useRef("Todos")
  const tipo = useRef("Todos")

  const handleFiltro = async () => {
    const body = {
      tipo: tipo.current,
      genero: genero.current
    }
    console.log(body)
    const response = await fetch('http://localhost:3000/filtro', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
    const data = await response.json()
    setLivros(data)
  }

  return (
    <div className=" bg-white/10 flex items-center justify-center p-4 rounded-lg">
      <div className="flex flex-col space-y-4 items-center">
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="genero" className="text-white">Gênero:</label>
          <select
            id="genero"
            onChange={(e) => genero.current = e.target.value}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="Todos">Todos</option>
            <option value="Ficção">Ficção</option>
            <option value="Romance">Romance</option>
            <option value="Drama">Drama</option>
            <option value="Fantasia">Fantasia</option>
          </select>
        </div>
  
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="tipo" className="text-white">Tipo:</label>
          <select
            id="tipo"
            onChange={(e) => tipo.current = e.target.value}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
              <option value="Todos">Todos</option>
            <option value="Livro">Livro</option>
            <option value="Novels">Novels</option>
            <option value="Mangás">Mangás</option>
          </select>
        </div>
        <button className="text-white bg-white/20 p-2 px-4" onClick={() => handleFiltro()}>
          Procurar
        </button>
      </div>
  </div>
  );
}
