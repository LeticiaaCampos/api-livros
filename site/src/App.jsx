import Card from "./components/card";
import Filtro from "./components/filtragem"
import {useEffect, useState} from "react";

export default function App() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetch('/livro')
      .then((response) => response.json())
      //.then((data) => setLivros(data))
     // .catch((error) => console.error('Erro na procura do livro:', error));
  }, []);

  return (
    <div className="App">
      <h1>Lista de Livros</h1>
      <Filtro setLivros={setLivros} />
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
