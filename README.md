# 🚀 NLW Web - Rocketseat

Este projeto foi desenvolvido durante um evento **Next Level Week (NLW)** da Rocketseat.

## 📋 Sobre o Projeto

O projeto utiliza tecnologias de ponta do ecossistema React para oferecer uma experiência de usuário fluida e performática.

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React 19** - Biblioteca principal para construção da interface
- **TypeScript** - Tipagem estática para maior segurança no desenvolvimento
- **Vite** - Build tool moderna e rápida
- **React Router DOM** - Roteamento client-side

### Estilização

- **Tailwind CSS 4** - Framework CSS utility-first
- **shadcn/ui** - Biblioteca de componentes reutilizáveis
- **Radix UI** - Primitivos acessíveis para componentes
- **Lucide React** - Ícones modernos e customizáveis

### Gerenciamento de Estado

- **TanStack Query (React Query)** - Gerenciamento de estado servidor e cache

### Utilitários

- **clsx** - Utilitário para concatenação de classes CSS
- **class-variance-authority** - Criação de variantes de componentes
- **tailwind-merge** - Merge inteligente de classes Tailwind

## 🎨 Padrões de Projeto

### Arquitetura

- **Component-based Architecture** - Componentes reutilizáveis e modulares
- **Atomic Design** - Estrutura de componentes organizados em níveis
- **Custom Hooks** - Lógica reutilizável encapsulada

### Organização de Código

- **Barrel Exports** - Exports centralizados para melhor organização
- **Path Mapping** - Imports absolutos usando `@/` alias
- **Separation of Concerns** - Separação clara entre UI, lógica e dados

### Estilização

- **Design System** - Sistema de design consistente com shadcn/ui
- **CSS Variables** - Tema customizável com variáveis CSS
- **Responsive Design** - Layout adaptativo para diferentes dispositivos

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd web
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse a aplicação em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter para verificar o código

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   └── ui/             # Componentes base do design system
├── lib/                # Utilitários e configurações
├── pages/              # Páginas da aplicação
│   ├── CreateRoom.tsx  # Página de criação/listagem de salas
│   └── Room.tsx        # Página individual da sala
├── app.tsx             # Componente raiz da aplicação
├── main.tsx            # Ponto de entrada da aplicação
└── index.css           # Estilos globais e tema
```

## 🔧 Configuração

### Tailwind CSS

O projeto utiliza Tailwind CSS 4 com configuração customizada incluindo:

- Tema personalizado com variáveis CSS
- Suporte a modo escuro
- Animações customizadas

### shadcn/ui

Configurado com:

- Estilo "New York"
- Tema base "zinc"
- Suporte a CSS variables
- Biblioteca de ícones Lucide

### TypeScript

Configuração otimizada para:

- Strict mode habilitado
- Path mapping para imports absolutos
- Tipos específicos para Vite

## 🌐 API Integration

A aplicação está configurada para consumir uma API REST local:

- **Base URL**: `http://localhost:3333`
- **Endpoints**: `/rooms` para listagem de salas
- **Cache**: Implementado com TanStack Query

## 📝 Funcionalidades

- ✅ Listagem de salas existentes
- ✅ Navegação entre páginas
- ✅ Interface responsiva
- ✅ Tema claro/escuro
- ✅ Componentes acessíveis
- 🔄 Criação de novas salas (em desenvolvimento)
- 🔄 Funcionalidades específicas da sala (em desenvolvimento)

## 🤝 Contribuição

Este projeto foi desenvolvido durante o evento NLW da Rocketseat. Contribuições são bem-vindas!

## 📄 Licença

Este projeto está sob a licença MIT.
