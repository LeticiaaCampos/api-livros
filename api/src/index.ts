import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
const port = 3000

app.get('/livro', async (req, res) => {
  const livros = await prisma.livros.findMany()
  res.json(livros)
})

app.get('/livros/genero/:genero', async (req, res) => {
  const genero = req.params.genero
  if (!genero) {
    res.status(400).json({ error: 'Parâmetro de gênero ausente' });
    return;
  }

  try {
    const livros = await prisma.livros.findMany({
      where: {
        genero: {
          contains: genero,
        },
      },
    });

    if (livros.length === 0) {
      res.status(404).json({ message: 'Nenhum livro encontrado para este gênero' });
      return;
    }
    res.json(livros);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar livros' });
  }
})

app.get('/livros/tipo/:tipo', async (req, res) => {
  const tipo = req.params.tipo;

  if (!tipo) {
    res.status(400).json({ error: 'Parâmetro de tipo ausente' });
    return;
  }

  try {
    const livros = await prisma.livros.findMany({
      where: {
        tipo: {
          contains: tipo,
        },
      },
    });

    if (livros.length === 0) {
      res.status(404).json({ message: 'Nenhum livro encontrado para este tipo' });
      return;
    }

    res.json(livros);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar livros' });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


//visualizar o json
//npx nodemon .\src\index.js
//banco de dados
//npx prisma studio
//compilar
//npx tsc
//node .\dist\index.js
// npm run dev
