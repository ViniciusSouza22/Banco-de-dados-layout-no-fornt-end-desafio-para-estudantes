# 📊 Banco de Dados + Layout no Front-End — Desafio para Estudantes

> 🚀 **Desafio:** conectar um sistema front-end a um banco de dados SQL, fazendo com que todas as ferramentas da interface funcionem corretamente. ([GitHub][1])

Este projeto é um desafio de estudos em desenvolvimento web voltado para integrar **layout/front-end com lógica de persistência de dados** por meio de um banco de dados SQL. O foco é criar uma interface funcional que se conecta a uma API ou backend para registrar, buscar e mostrar dados dinamicamente.

---

## 🧠 Objetivo

O desafio principal é:

* 📍 Construir um **layout front-end profissional e responsivo** usando HTML, CSS e JavaScript;
* 📍 Conectar a interface com um **backend que faça consultas e atualizações a um banco de dados SQL** (ex.: MySQL, PostgreSQL, SQLite);
* 📍 Garantir que todas as funcionalidades da interface (ex.: listagem, cadastro, edição e exclusão) funcionem corretamente com dados reais;
* 📍 Aplicar boas práticas de organização de código e lógica de integração entre front-end e back-end.

Este tipo de desafio ajuda a reforçar a compreensão de como aplicações web completas funcionam na prática.

---

## 📁 Estrutura do Projeto

```
Banco-de-dados-layout-no-fornt-end-desafio-para-estudantes/
├── index.html         # Página principal do front-end
├── style.css          # Estilos do projeto
├── server.js          # Backend que faz interface com banco de dados
├── README.md          # Documentação do projeto
├── (possível pasta de rotas/backend)  
└── (scripts de banco de dados)
```

---

## 🛠 Tecnologias

Este projeto utiliza as seguintes tecnologias:

✔ **HTML5** — marcação semântica da interface
✔ **CSS3** — estilo e layout responsivo
✔ **JavaScript** — lógica de interação no front-end
✔ **Node.js / Backend** — comunicação com banco de dados
✔ **Banco de Dados SQL** — persistência de dados

---

## 🚀 Como Rodar Localmente

⚙️ **Pré-requisitos**

Antes de começar, você precisa ter instalado:

* 🧾 **Node.js (v14+)**
* 🗄️ **Banco de dados SQL** (ex.: MySQL, PostgreSQL ou SQLite)

### 🔧 Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/ViniciusSouza22/Banco-de-dados-layout-no-fornt-end-desafio-para-estudantes.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd Banco-de-dados-layout-no-fornt-end-desafio-para-estudantes
   ```

3. Instale dependências:

   ```bash
   npm install
   ```

4. Configure seu banco de dados (crie tabelas e ajuste conexão no `server.js`):

   * Edite variáveis de conexão como host, usuário e senha
   * Crie as tabelas necessárias para armazenar os dados da sua interface

5. Inicie o servidor:

   ```bash
   npm start
   ```

6. Abra o `index.html` no navegador para testar a interface.

---

## 📌 Features (Funcionalidades)

✔ Interface de cadastro/dados em front-end
✔ Integração com backend para CRUD (Create, Read, Update, Delete)
✔ Conexão com banco de dados SQL
✔ Layout responsivo e limpo
✔ Fluxo de requisições entre front-end ↔ backend

---

## 📊 O que Aprender com este Projeto

* Como estruturar um front-end moderno com HTML e CSS
* Como consumir dados via JavaScript e APIs
* Como criar endpoints que conversam com um banco de dados
* Boas práticas de layout e lógica entre camadas (client/server)

---

## 🤝 Como Contribuir

Contribuições são bem-vindas! Você pode:

1. Fazer um **fork** do projeto
2. Adicionar melhorias (ex.: validação de formulários, autenticação, testes)
3. Enviar um **Pull Request**

---

## 📄 Licença

Este projeto está sob a **licença MIT** — sinta-se livre para estudar, adaptar e usar como referência para seus estudos.
