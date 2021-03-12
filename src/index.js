const http = require('http');
const express = require('express');
const app = express();
const porta = 3000;
var contador = 2;
const livros = [
    {
    id: 1,
    titulo:  "Diario de um Banana",
    descricao: 'É um livro de ficçao cientifica que conta a historia de um estudante em suas aventuras do dia a dia',
    edicao:1,
    autor:'Jeff Kinney',
    isbn: '9780810994737'
    },
    {
    id: 2,
    titulo: 'Percy Jackson e o ladrão de raios',
    descricao: 'É um livro de ficçao cientifica que conta a historia de um estudante em aventuras mitologicas',
    edicao:1,
    autor:'Rick Riordan',
    isbn: '9781423121701'
    }
];
const bodyParser = require ('body-parser');
const { values } = require('methods');
app.use (bodyParser.json());

app.set('port', porta);

app.get("/livros", (req, res, next) => {
    res.json(livros);
});

app.post('/livros', (req, res, next) => {
    const livro = req.body;
    livros.push({
        id: contador += 1,
        nome: livro.nome,
        descricao: livro.descricao,
        edicao: livro.edicao,
        autor: livro.autor,
        isbn: livro.isbn
    });
    console.log(livros);
    res.status(201).json(livros);
});

app.put('/livros', (req,res,next) => {
      const livroB = req.body;
    
      livros.forEach((livro) => {
        if(livro.id == livroB.id)
        {
          livro.titulo = livroB.titulo;
          livro.descricao = livroB.descricao; 
          livro.edicao = livroB.edicao;
          livro.autor = livroB.autor;
          livro.isbn = livroB.isbn;
        }        
      })
      res.status(200).json(livros)
  });

app.delete('/livros/:index', (req,res,next) => {
  const { index }  = req.params;
  var idxx = livros.forEach(livro => {
    if (livro.id === index) {
        return livros.indexOf(livro.id);
    }
})
  livros.splice(idxx,1);
  res.status(200).json(livros);
});


const server = http.createServer(app);
server.listen(3000);