# ZapRecall

O ZapRecall é um app de flashcards. Flashcards são cartões de estudos que contém uma pergunta/afirmação na frente e uma resposta atrás. A ideia é ler a pergunta ou afirmação e tentar lembrar da reposta. O projeto foi configurado utilizando o Vite para um processo de build rápido e eficiente e utiliza React e styled-components para construção da interface e gerenciamento de estados.

## Funcionalidades

- **Exibição de Cartas:**
  - Cada carta possui uma pergunta e uma resposta associada.
  - As cartas podem ser "viradas" ao clicar no ícone correspondente.

- **Interação com Botões:**
  - Cada carta tem três botões disponíveis após ser virada:
    - **Não lembrei:** 
    - **Quase não lembrei:** 
    - **Zap!:** 
  
- **Contador de Conclusão:**
  - Um contador exibe a quantidade de cartas concluídas em relação ao total de cartas.

## Tecnologias Utilizadas

- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat-square)
  Biblioteca JavaScript para criação de interfaces de usuário.  

- ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat-square)
  Ferramenta de build rápida para projetos modernos.

- ![Styled Components](https://img.shields.io/badge/-Styled--Components-DB7093?logo=styled-components&logoColor=white&style=flat-square)
  Biblioteca para estilização dinâmica em aplicações React. 

- ![JSX](https://img.shields.io/badge/-JSX-61DAFB?logo=react&logoColor=white&style=flat-square)
  Extensão de sintaxe JavaScript usada com React para criar elementos de interface de usuário.  

## Estrutura do Projeto

```
project/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- Carta.jsx
|   |   |-- Deck.jsx
|   |   |-- ZapRecall.jsx
|   |-- App.jsx
|   |-- main.jsx
|   |-- Mock.js
|   |-- Reset.css
|-- index.html
|-- package.json
```

### Componentes

#### Carta.jsx
Responsável por renderizar cada carta individualmente. Gerencia os seguintes estados internos:
- **estado:** Indica o estágio atual da carta (não virada, pergunta, resposta, concluída).
- **imagemFinal:** Exibe o ícone correspondente ao botão clicado.
- **corTexto:** Altera a cor do texto com base na escolha do usuário.

#### Deck.jsx
- Renderiza todas as cartas com base nos dados fornecidos.
- Exibe o contador de progresso no final da lista de cartas.

#### ZapRecall.jsx
- Exibe o topo do site
- Renderiza o Deck.jsx

## Como Executar o Projeto

0. **Pré-requisitos:**
   Certifique-se de ter o [Node.js](https://nodejs.org) instalado em sua máquina.

1. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/seu-usuario/ZapRecall.git
   cd ZapRecall
   ```

2. **Instalar as Dependências:**
   ```bash
   npm install 
   npm i styled-components
   ```

3. **Executar o Projeto:**
   ```bash
   npm run dev
   ```

4. **Abrir no Navegador:**
   Acesse `http://localhost:5173` para visualizar o projeto.

## Dependências Principais

- Noje.js
- styled-components
