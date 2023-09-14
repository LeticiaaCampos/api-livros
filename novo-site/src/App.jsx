import Card from "./components/card";
import Filtro from "./components/filtragem"
import {useEffect, useState} from "react";

export default function App() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/livro');
      const data = await response.json();
      setLivros(data)
    })()
  }, []);

  return (
    <div className="bg-black p-4 flex flex-col gap-4">
      <Filtro setLivros={setLivros} />
      <div className="grid grid-cols-3 gap-4">
        {livros.map((livro) => (
          <Card
            key={livro.id}
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
