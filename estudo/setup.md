# Projeto React com Vite

## Sobre o Vite

**Vite** é uma ferramenta de construção (build tool) que visa fornecer um ambiente de desenvolvimento rápido e leve. Ele usa a funcionalidade de módulos ES nativos no navegador para evitar a recompilação completa dos arquivos, o que torna o processo de desenvolvimento muito mais rápido em comparação com outras ferramentas como o Webpack.

Principais características do **Vite**:
- **Desenvolvimento rápido**: O Vite utiliza uma abordagem de servidor de desenvolvimento, carregando e recompilando apenas os módulos alterados.
- **Build otimizado**: Para a produção, o Vite utiliza o Rollup sob o capô, gerando pacotes leves e eficientes.
- **Suporte a Hot Module Replacement (HMR)**: Atualiza o aplicativo no navegador instantaneamente após mudanças de código.

## O que é o NPM?

O **NPM (Node Package Manager)** é o gerenciador de pacotes do Node.js. Ele permite que você gerencie dependências do projeto, instale bibliotecas, crie scripts para automação de tarefas e muito mais.

- **Instalação de pacotes**: O NPM facilita a instalação de pacotes de código aberto no seu projeto.
- **Execução de scripts**: O NPM permite rodar scripts personalizados, como iniciar o servidor de desenvolvimento, rodar testes, etc.
- **Gestão de dependências**: Ele cuida de todas as dependências do projeto, permitindo um desenvolvimento mais estruturado.

## Como Instalar

Se você já tem **Node.js** e **NPM** instalados, siga os passos abaixo para rodar este projeto. Caso não tenha, veja as instruções na seção [Pré-requisitos](#pré-requisitos).

### Pré-requisitos

1. **Instalar o Node.js:**
   - Se você ainda não tem o Node.js instalado, [faça o download aqui](https://nodejs.org) e siga as instruções de instalação.
   - Após a instalação, verifique se está corretamente instalado rodando os comandos:
     ```bash
     node -v
     npm -v
     ```

2. **Instalar o Vite (caso queira criar novos projetos com Vite):**
   - Não é necessário instalar o Vite globalmente, mas se quiser, use o comando:
     ```bash
     npm install -g create-vite
     ```

### Instruções de Instalação

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd nome-do-repositorio
   ```

3. **Instale as dependências do projeto:**

   ```bash
   npm install
   ```

4. **Execute o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

   O projeto será servido em `http://localhost:5173`. Você pode acessar esse endereço no navegador para visualizar o aplicativo.

### Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera a build de produção.
- `npm run preview`: Pré-visualiza a build de produção localmente.

### Estrutura do Projeto

- `src/`: Contém os arquivos de código-fonte do projeto React.
- `index.html`: O ponto de entrada principal da aplicação.
- `vite.config.js`: Configuração do Vite.

## Deploy

Para realizar o deploy do projeto, execute o comando abaixo para gerar os arquivos de produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist`. Em seguida, você pode servir esses arquivos em qualquer servidor estático, como o **Netlify**, **Vercel**, ou **GitHub Pages**.
