
const express = require('express')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const app = express()
const port = 3000


app.get('/', async (req, res) => {
    const livros = await prisma.livros.findMany()
    res.json(livros)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//visualizar o json
//npx nodemon .\src\index.jsmkdir hello-prisma
//banco de dados
//npx prisma studiocd
