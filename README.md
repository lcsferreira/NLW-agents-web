# 🚀 Let me Ask - NLW Web

Este projeto foi desenvolvido durante um evento **Next Level Week (NLW)** da Rocketseat, sendo uma aplicação web moderna para criação de salas de perguntas e respostas com inteligência artificial.

## 📋 Sobre o Projeto

**Let me Ask** é uma plataforma interativa que permite aos usuários criar salas de perguntas e receber respostas geradas por inteligência artificial. O projeto oferece uma experiência completa de Q&A com recursos avançados como gravação de áudio e interface moderna.

### 🎯 Funcionalidades Principais

- ✅ **Criação de Salas**: Crie salas personalizadas com nome e descrição
- ✅ **Listagem de Salas**: Visualize salas recentes com contadores de perguntas
- ✅ **Sistema de Perguntas**: Faça perguntas em texto livre com validação
- ✅ **Respostas com IA**: Receba respostas automáticas geradas por inteligência artificial
- ✅ **Gravação de Áudio**: Grave áudio em tempo real com upload automático
- ✅ **Interface Responsiva**: Design adaptativo para diferentes dispositivos
- ✅ **Tema Moderno**: Interface elegante com suporte a modo escuro

## 🛠️ Tecnologias Utilizadas

### Frontend Core

- **React 19** - Biblioteca principal para construção da interface
- **TypeScript** - Tipagem estática para maior segurança no desenvolvimento
- **Vite** - Build tool moderna e extremamente rápida
- **React Router DOM** - Roteamento client-side para navegação

### Estilização e UI

- **Tailwind CSS 4** - Framework CSS utility-first de última geração
- **shadcn/ui** - Biblioteca de componentes reutilizáveis e acessíveis
- **Radix UI** - Primitivos headless para componentes complexos
- **Lucide React** - Ícones modernos e customizáveis
- **class-variance-authority** - Sistema de variantes para componentes

### Gerenciamento de Estado e Dados

- **TanStack Query (React Query)** - Gerenciamento de estado servidor e cache inteligente
- **React Hook Form** - Gerenciamento de formulários performático
- **Zod** - Validação de esquemas TypeScript-first

### Utilitários

- **Day.js** - Manipulação de datas leve e moderna
- **clsx** - Utilitário para concatenação condicional de classes
- **tailwind-merge** - Merge inteligente de classes Tailwind

## 🎨 Padrões de Projeto

### Arquitetura

- **Component-based Architecture** - Componentes reutilizáveis e modulares
- **Atomic Design** - Estrutura hierárquica de componentes (atoms, molecules, organisms)
- **Custom Hooks** - Lógica reutilizável encapsulada em hooks personalizados
- **Separation of Concerns** - Separação clara entre UI, lógica de negócio e dados

### Organização de Código

- **Barrel Exports** - Exports centralizados para melhor organização
- **Path Mapping** - Imports absolutos usando alias `@/` para melhor legibilidade
- **Type Safety** - Tipagem rigorosa com TypeScript em todo o codebase
- **Validation Layer** - Validação de dados com Zod em formulários e APIs

### Estilização

- **Design System** - Sistema de design consistente baseado em shadcn/ui
- **CSS Variables** - Tema totalmente customizável com variáveis CSS
- **Responsive Design** - Layout mobile-first adaptativo
- **Accessibility** - Componentes acessíveis com suporte a leitores de tela

## 🚀 Como Executar

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** ou **pnpm**
- **API Backend** rodando em `http://localhost:3333`

### Instalação

1. **Clone o repositório:**

```bash
git clone <url-do-repositorio>
cd web
```

2. **Instale as dependências:**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configure o ambiente:**

   - Certifique-se de que a API backend está rodando em `http://localhost:3333`
   - A aplicação se conectará automaticamente aos endpoints da API

4. **Execute o servidor de desenvolvimento:**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. **Acesse a aplicação:**
   - Abra seu navegador em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com hot reload
- `npm run build` - Gera a build otimizada para produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o ESLint para verificar qualidade do código

## 📁 Estrutura do Projeto

```
src/
├── components/              # Componentes reutilizáveis
│   ├── ui/                 # Componentes base do design system
│   │   ├── button.tsx      # Componente de botão
│   │   ├── card.tsx        # Componente de card
│   │   ├── form.tsx        # Componentes de formulário
│   │   └── ...             # Outros componentes UI
│   ├── createRoomForm.tsx  # Formulário de criação de sala
│   ├── questionForm.tsx    # Formulário de perguntas
│   ├── questionItem.tsx    # Item individual de pergunta/resposta
│   ├── QuestionList.tsx    # Lista de perguntas
│   └── roomList.tsx        # Lista de salas
├── http/                   # Camada de comunicação com API
│   ├── types/             # Tipos TypeScript para API
│   ├── useCreateQuestion.ts # Hook para criar perguntas
│   ├── useCreateRoom.ts    # Hook para criar salas
│   ├── useRoomQuestions.ts # Hook para buscar perguntas
│   └── useRooms.ts        # Hook para buscar salas
├── pages/                  # Páginas da aplicação
│   ├── CreateRoom.tsx      # Página inicial (criação/listagem)
│   ├── Room.tsx           # Página individual da sala
│   └── RecordRoomAudio.tsx # Página de gravação de áudio
├── lib/                    # Utilitários e configurações
│   └── utils.ts           # Funções utilitárias
├── utils/                  # Utilitários específicos
│   └── formatRelativeDate.ts # Formatação de datas
├── app.tsx                 # Componente raiz com roteamento
├── main.tsx               # Ponto de entrada da aplicação
└── index.css              # Estilos globais e variáveis CSS
```

## 🔧 Configuração

### Tailwind CSS

O projeto utiliza **Tailwind CSS 4** com configuração avançada:

- Tema personalizado com variáveis CSS customizáveis
- Sistema de cores consistente
- Animações e transições suaves
- Suporte completo a modo escuro/claro

### shadcn/ui

Configuração do sistema de componentes:

- **Estilo**: "New York" (moderno e limpo)
- **Tema base**: "zinc" (tons de cinza elegantes)
- **CSS Variables**: Suporte completo para temas dinâmicos
- **Ícones**: Biblioteca Lucide React integrada

### TypeScript

Configuração rigorosa para máxima segurança:

- **Strict mode** habilitado
- **Path mapping** para imports absolutos (`@/*`)
- **Tipos específicos** para Vite e React 19
- **Validação em tempo de compilação**

## 🌐 Integração com API

### Configuração da API

- **Base URL**: `http://localhost:3333`
- **Comunicação**: REST API com JSON
- **Cache**: Implementado com TanStack Query para otimização

### Endpoints Utilizados

- `GET /rooms` - Lista todas as salas
- `POST /rooms` - Cria uma nova sala
- `GET /rooms/:id/questions` - Lista perguntas de uma sala
- `POST /rooms/:id/questions` - Cria uma nova pergunta
- `POST /rooms/:id/audio` - Upload de áudio gravado

### Recursos Avançados

- **Optimistic Updates**: Atualizações otimistas na UI
- **Error Handling**: Tratamento robusto de erros
- **Loading States**: Estados de carregamento em tempo real
- **Cache Invalidation**: Invalidação inteligente de cache

## 🎤 Funcionalidades de Áudio

### Gravação de Áudio

- **Suporte nativo**: Utiliza Web Audio API
- **Formato**: WebM com compressão otimizada
- **Qualidade**: 64kbps com cancelamento de eco
- **Upload automático**: Envio em chunks de 5 segundos
- **Compatibilidade**: Verificação automática de suporte do navegador

### Processamento

- **Cancelamento de eco**: Melhora a qualidade do áudio
- **Supressão de ruído**: Reduz ruídos de fundo
- **Sample rate**: 44.1kHz para qualidade profissional

## 🎯 Funcionalidades Detalhadas

### Sistema de Salas

- **Criação**: Nome obrigatório (mín. 3 caracteres) e descrição opcional
- **Listagem**: Visualização com data de criação e contador de perguntas
- **Navegação**: Acesso direto às salas com navegação intuitiva

### Sistema de Perguntas

- **Validação**: Perguntas entre 10-500 caracteres
- **IA Integration**: Respostas automáticas geradas por inteligência artificial
- **Estados visuais**: Loading states durante geração de respostas
- **Interface conversacional**: Design similar a chat para melhor UX

### Interface do Usuário

- **Design responsivo**: Funciona perfeitamente em desktop e mobile
- **Tema adaptativo**: Suporte automático a modo escuro/claro
- **Animações suaves**: Transições elegantes entre estados
- **Feedback visual**: Indicadores claros de ações e estados

## 🤝 Contribuição

Este projeto foi desenvolvido durante o evento **Next Level Week (NLW)** da Rocketseat. Contribuições são bem-vindas!

### Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

<div align="center">
  <p>Desenvolvido com ❤️ durante o NLW da Rocketseat</p>
  <p>🚀 Transformando ideias em código</p>
</div>
