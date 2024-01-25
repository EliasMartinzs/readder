# Anime & Manga Explorer

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Uso](#instalação-e-uso)
- [Contribuições](#contribuições)
- [Licença](#licença)

## Sobre o Projeto

Este projeto é um site para fãs de animes e mangás, desenvolvido com o objetivo de aprender sobre TransStack Query e Fetch API. A plataforma oferece uma experiência interativa e informativa para os usuários explorarem uma ampla gama de animes e mangás.

Este projeto foi concebido com um design minimalista e focado principalmente no teste e exploração do TanStack Query. Uma característica importante a se destacar é a limitação imposta pela API gratuita utilizada. Devido a essa restrição, pode ocorrer que, ao acessar o projeto online, nenhum dado seja exibido, indicando que o limite de requisições mensais já foi atingido.

Para garantir uma experiência de desenvolvimento fluida e acessível, as variáveis de ambiente e a chave da API foram deixadas abertas no repositório. Isso permite que qualquer pessoa possa clonar o projeto e executá-lo localmente sem complicações adicionais. Além disso, a API utilizada está claramente documentada no código, facilitando a substituição das chaves da API, caso a chave atual expire. As alterações necessárias podem ser feitas no arquivo fetch/fetch.ts.

## Funcionalidades

- **Autenticação de Usuário com NextAuth**: Garantindo um processo de login seguro.
- **Exploração de Animes e Mangás**: Acesso a informações detalhadas sobre animes e mangás.

## API

- **MyAnimeList** https://rapidapi.com/felixeschmittfes/api/myanimelist.

## Projeto hospedado
- https://readder.vercel.app/

## Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias e bibliotecas:

- **@auth/prisma-adapter**: Integração de autenticação com Prisma.
- **@hookform/resolvers**: Resolvedores para React Hook Form.
- **@prisma/client**: Cliente ORM para interações com o banco de dados.
- **@radix-ui/react-accordion, react-avatar, react-dialog, react-label, react-navigation-menu, react-popover, react-separator, react-slot**: Componentes de UI para a construção de interfaces ricas e interativas.
- **@types/bcryptjs**: Tipagens TypeScript para bcryptjs.
- **bcryptjs**: Biblioteca para hashing de senhas.
- **class-variance-authority**: Utilitário para estilos condicionais.
- **clsx**: Uma biblioteca de utilitários para classNames condicionais em React.
- **embla-carousel-react**: Biblioteca de carrossel para React.
- **lucide-react**: Biblioteca de ícones para React.
- **next**: Framework React para renderização no lado do servidor e geração de sites estáticos.
- **next-auth**: Biblioteca para autenticação em aplicações Next.js.
- **react e react-dom**: Bibliotecas para construir interfaces de usuário.
- **react-hook-form**: Biblioteca para gerenciamento de formulários em React.
- **react-icons**: Biblioteca de ícones populares para React.
- **react-query**: Biblioteca para buscar, armazenar em cache e atualizar dados em React.
- **swiper**: Moderna biblioteca de sliders em JavaScript.
- **tailwind-merge**: Utilitário para mesclar classes Tailwind CSS.
- **tailwindcss-animate**: Plugin de animações para Tailwind CSS.
- **zod**: Biblioteca de parsing e validação de dados para TypeScript e JavaScript.


## Instalação e Uso

Para rodar o projeto localmente, siga os passos:

1. Clone o repositório:

```bash
git clone https://github.com/EliasMartinzs/readder/
```

2. Rode os seguintes comandos

```bash
npm i next@latest
```

```bash
npm run dev
```
