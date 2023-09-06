import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
const port = 3000

app.get('/livro', async (req, res) => {
  const livros = await prisma.livros.findMany()
  res.json(livros)
})

app.get('/livro/:genero', async (req, res) => {
  const genero = req.params.genero
  const livro = await prisma.livros.findMany({
    where: {
      genero: {
        contains: genero,
      }
    },
  });
  if (livro.length !== 0) {
    res.json(livro)
  } else {
    res.send("não existe esse genero")
  }
})

app.get('/livro/:tipo', async (req, res) => {
  const tipo = req.params.genero
  const livro = await prisma.livros.findMany({
    where: {
      genero: {
        contains: tipo,
      }
    },
  });

  if (livro.length !== 0) {
    res.json(livro)
  } else {
    res.send("não existe esse genero")
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//visualizar o json
//npx nodemon .\src\index.js
//banco de dados
//npx prisma studiocd
