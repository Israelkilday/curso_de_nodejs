import express, {Application} from 'express';

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/user/:nome/sobrenome/:sobrenome', function (req, res) {
  res.send({
    name: req.params.nome,
    sobrenome: req.params.sobrenome,
  });
});

app.listen(8080, function () {
  console.log('Servidor rodando na porta 8080');
});
