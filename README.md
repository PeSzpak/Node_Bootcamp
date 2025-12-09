# Bootcamp Node.js

Este projeto foi desenvolvido como parte de um curso sobre Node.js. Ele demonstra o uso de várias funcionalidades do Node.js, incluindo manipulação de arquivos, criação de servidores HTTP, integração com MongoDB, e a construção de uma aplicação web utilizando Express e EJS.

## Funcionalidades

### 1. **Servidor HTTP**
- Um servidor HTTP básico foi implementado em [`modules/http.js`](#codebase).
- Rotas disponíveis:
    - `/home`: Retorna uma página HTML simples.
    - `/users`: Retorna uma lista de usuários em formato JSON.

### 2. **Manipulação de Arquivos**
- O módulo [`modules/fs.js`](#codebase) demonstra como criar, escrever, e ler arquivos utilizando o módulo `fs` do Node.js.

### 3. **Manipulação de Caminhos**
- O módulo [`modules/path.js`](#codebase) mostra como trabalhar com caminhos de arquivos usando o módulo `path`.

### 4. **Conexão com MongoDB**
- A conexão com o banco de dados MongoDB é gerenciada em [`src/database/connect.js`](#codebase).
- As credenciais do banco de dados estão armazenadas em um arquivo `.env` (ignorado pelo Git).

### 5. **Modelo de Usuário**
- O modelo de dados para usuários é definido em [`src/models/user.model.js`](#codebase) utilizando Mongoose.

### 6. **Aplicação Web com Express**
- A aplicação web é implementada em [`modules/express.js`](#codebase).
- Funcionalidades:
    - **CRUD de Usuários**:
        - `GET /users`: Retorna todos os usuários.
        - `GET /users/:id`: Retorna um usuário específico.
        - `POST /users`: Cria um novo usuário.
        - `PATCH /users/:id`: Atualiza um usuário existente.
        - `DELETE /users/:id`: Remove um usuário.
    - **Renderização de Páginas**:
        - `GET /views/users`: Renderiza uma página com a lista de usuários utilizando EJS.

### 7. **Templates EJS**
- Os templates EJS estão localizados em [`src/views`](#codebase).
- Estrutura:
    - `index.ejs`: Página principal que exibe a lista de usuários.
    - `partials/head.ejs`: Contém o cabeçalho e estilos.
    - `partials/navbar.ejs`: Contém a barra de navegação.

### 8. **Variáveis de Ambiente**
- As variáveis sensíveis, como credenciais do banco de dados, estão armazenadas no arquivo `.env` (exemplo disponível em [`#codebase`](#codebase)).

## Como Executar

### Pré-requisitos
- Node.js instalado.
- MongoDB configurado.

### Passos
1. Clone o repositório:
     ```bash
     git clone <url-do-repositorio>
     ```
2. Instale as dependências:
     ```bash
     npm install
     ```
3. Configure o arquivo `.env` com suas credenciais do MongoDB.
4. Inicie o servidor:
     ```bash
     npm run start:dev
     ```

## Dependências

- **Express**: Framework para construção de aplicações web.
- **EJS**: Template engine para renderização de páginas.
- **Mongoose**: ODM para MongoDB.
- **Dotenv**: Gerenciamento de variáveis de ambiente.
- **Nodemon**: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.

## Estrutura do Projeto

```plaintext
bootcampaNode/
├── .env
├── .gitignore
├── index.js
├── modules/
│   ├── express.js
│   ├── fs.js
│   ├── http.js
│   ├── path.js
├── package.json
├── src/
│   ├── database/
│   │   └── connect.js
│   ├── models/
│   │   └── user.model.js
│   ├── views/
│       ├── index.ejs
│       └── partials/
│           ├── head.ejs
│           └── navbar.ejs
└── README.md
```

## Autor

Pedro Szpak

## Licença

Este projeto está licenciado sob a licença ISC.