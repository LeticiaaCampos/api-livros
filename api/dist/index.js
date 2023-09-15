"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/livro', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const livros = yield prisma.livros.findMany();
    res.json(livros);
}));
app.get('/livros/genero/:genero', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const genero = req.params.genero;
    if (!genero) {
        res.status(400).json({ error: 'Parâmetro de gênero ausente' });
        return;
    }
    try {
        const livros = yield prisma.livros.findMany({
            where: {
                genero: {
                    contains: genero
                }
            }
        });
        if (livros.length === 0) {
            res.status(404).json({ message: 'Nenhum livro encontrado para este gênero' });
            return;
        }
        res.json(livros);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livros' });
    }
}));
app.get('/livros/tipo/:tipo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tipo = req.params.tipo;
    if (!tipo) {
        res.status(400).json({ error: 'Parâmetro de tipo ausente' });
        return;
    }
    try {
        const livros = yield prisma.livros.findMany({
            where: {
                tipo: {
                    contains: tipo,
                },
            },
        });
        if (livros.length === 0) {
            res.status(404).json({ error: 'Nenhum livro encontrado para este tipo' });
            return;
        }
        res.json(livros);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livros' });
    }
}));
app.post('/filtro', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tipo = req.body.tipo;
    const genero = req.body.genero;
    if (!tipo && !genero) {
        return res.status(400).json({ error: 'Parâmetros de tipo e gênero ausentes' });
    }
    try {
        let livros;
        if (tipo === 'Todos' && genero === 'Todos') {
            livros = yield prisma.livros.findMany();
        }
        else if (tipo === 'Todos') {
            livros = yield prisma.livros.findMany({
                where: {
                    genero: genero,
                },
            });
        }
        else if (genero === 'Todos') {
            livros = yield prisma.livros.findMany({
                where: {
                    tipo: tipo
                },
            });
        }
        else {
            livros = yield prisma.livros.findMany({
                where: {
                    AND: [
                        {
                            tipo: tipo,
                        },
                        {
                            genero: genero
                        }
                    ]
                }
            });
        }
        if (livros.length === 0) {
            return res.status(404).json({ error: 'Não há livros nessa categoria e tipo' });
        }
        res.status(200).json(livros);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livros' });
    }
}));
// app.post("/filtro", async (req, res) => {
//   const tipo: string = req.body.tipo
//   const genero: string = req.body.genero
//   if (tipo === "Todos") {
//   }
//   const livros = await prisma.livros.findMany({
//     where: {
//       AND: [
//         {
//           tipo: tipo,
//         },
//         {
//           genero: genero
//         }
//       ]
//     }
//   })
//   if (livros.length === 0) {
//     return res.status(404).json({ message: 'não há livros nessa categoria e tipo' })
//   }
//   res.status(200).json({ livros: livros })
// })
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
