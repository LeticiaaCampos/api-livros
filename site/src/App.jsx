import { useState } from 'react'
import Card from "../components/card"
import {useEffect, useState} from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Lista de Livros</h1>
      <div className="grid grid-cols-3 gap-4">
        {livros.map((livro) => (
          <Card
            nome={livro.nome}
            img={livro.img}
            autor={livro.autor}
            sinopse={livro.sinopse}
            genero={livro.genero}
            tipo={livro.tipo}
          />
        ))}
      </div>
    </div>
  );
}
