# Tauri + React

This template should help get you started developing with Tauri and React in Vite.

## Recommended IDE Setup

` Create app tauri`
_[npm create tauri-app]_

` Run application`
_[npm run tauri dev]_

` Compile application to exe`
_[npm run tauri build]_

# Estrutura Padrão de um Aplicativo Tauri com React e Vite

## Diretório do Projeto

```plaintext
my-tauri-app/
├── src/
│   ├── assets/                # Recursos estáticos como imagens e fontes
│   ├── components/            # Componentes React reutilizáveis
│   ├── pages/                 # Páginas principais do app
│   ├── App.jsx                # Componente raiz React
│   ├── main.jsx               # Ponto de entrada do Vite/React
│   ├── index.css              # Estilos globais
│   └── utils/                 # Funções utilitárias do front-end
├── src-tauri/                 # Diretório do Tauri
│   ├── icons/                 # Ícones da aplicação
│   ├── src/
│   │   ├── main.rs            # Entrada principal do Tauri
│   │   └── commands.rs        # Definições dos comandos nativos
│   ├── Cargo.toml             # Configuração do projeto Rust
│   ├── tauri.conf.json        # Configuração do Tauri
├── public/                    # Arquivos públicos expostos como estáticos
├── vite.config.js             # Configuração do Vite
├── package.json               # Dependências do Node.js
├── yarn.lock or package-lock.json # Lockfile do gerenciador de pacotes
└── README.md                  # Informações do projeto
```

---

## Descrição dos Diretórios e Arquivos Principais

### Front-end (React)

**`src/`**:

- **`assets/`**: Local para armazenar imagens, fontes e outros arquivos estáticos.
- **`components/`**: Componentes React reutilizáveis e desacoplados.
- **`pages/`**: Representa diferentes telas ou rotas da aplicação.
- **`App.jsx`**: Componente raiz que organiza a estrutura do aplicativo.
- **`main.jsx`**: Entrada principal do Vite/React, onde o React é renderizado.
- **`index.css`**: Estilos globais que afetam toda a aplicação.
- **`utils/`**: Funções ou classes utilitárias que auxiliam no front-end.

**`public/`**:

- Arquivos estáticos acessíveis diretamente, como ícones e manifestos.

**`vite.config.js`**:

- Configurações do Vite, incluindo integração com o Tauri (otimizações específicas).

---

### Back-end (Tauri)

**`src-tauri/`**:

- **`src/`**:
  - **`main.rs`**: Arquivo principal escrito em Rust, onde a lógica nativa é definida.
  - **`commands.rs`**: Arquivo opcional para organizar comandos customizados que o front-end pode chamar.
- **`icons/`**:
  - Ícones usados pelo Tauri para o executável e outros recursos.
- **`Cargo.toml`**:
  - Arquivo de configuração do Rust, onde as dependências e metadados do projeto são definidos.
- **`tauri.conf.json`**:
  - Configurações do Tauri, como permissões, rotas e propriedades do aplicativo.
