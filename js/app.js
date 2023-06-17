import express, { urlencoded } from 'express';
import { createConnection } from 'mysql';

const app = express();
const port = 3000;

const connection = createConnection({
  host: 'localhost',
  email: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco_de_dados'
});

app.use(urlencoded({ extended: true }));

app.get('/cadastro', (req, res) => {
  res.sendFile(__dirname + '/cadastro.html');
});

app.post('/cadastro', (req, res) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  };

  connection.query('INSERT INTO usuarios SET ?', newUser, (err, results) => {
    if (err) {
      console.error('Erro ao cadastrar usuário: ' + err.stack);
      res.send('Erro ao cadastrar usuário');
      return;
    }
    console.log('Usuário cadastrado com sucesso. ID do usuário:', results.insertId);
    res.send('Usuário cadastrado com sucesso');
  });
});

connection.connect((err) => {
  if (err) {
    console.error('Erro de conexão: ' + err.stack);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados.');

  app.listen(port, () => {
    console.log(`Servidor Node.js em execução na porta ${port}`);
  });
});
