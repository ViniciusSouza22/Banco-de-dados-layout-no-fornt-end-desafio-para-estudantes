// Este código é apenas uma base, já que você pode usar qualquer SQL de sua preferência.
// Este código contém uma base para SQL Server da Microsoft, mas pode ser adaptado para
// qualquer outro sistema SQL de sua preferência.

// Boa sorte. 


const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CONFIGURAÇÃO DO BANCO DE DADOS
const config = {
  server: '',
  database: '',
  options: {
    encrypt: false,
    trustServerCertificate: true
  },
  authentication: {
    type: 'ntlm',
    options: {
      userName: '', // seu usuário do Windows
      password: '',        // sua senha do Windows
      domain: ''   // seu domínio ou nome do computador
    }
  }
};

// ROTA PARA RECEBER DADOS DO FORMULÁRIO
app.post('/enviar-dados', async (req, res) => {
  const { data, quantidade, cliente, preco, produto, vendas } = req.body;

  try {
    const pool = await sql.connect(config);
    await pool.request()
      .input('Data', sql.Date, data)
      .input('Quantidade', sql.Int, quantidade)
      .input('Cliente', sql.NVarChar(100), cliente)
      .input('Preco', sql.Decimal(10, 2), preco)
      .input('Produto', sql.NVarChar(100), produto)
      .input('Vendas', sql.Int, vendas)
      .query(`
        INSERT INTO dbo.Vendas (Data, Quantidade, Cliente, Preco, Produto, Vendas)
        VALUES (@Data, @Quantidade, @Cliente, @Preco, @Produto, @Vendas)
      `);

    res.send('Dados inseridos com sucesso!');
  } catch (err) {
    console.error('Erro ao inserir dados:', err);
    res.status(500).send('Erro ao inserir dados');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
