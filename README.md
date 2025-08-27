# 🏥 Instituto Paiva - Site Institucional

Site institucional moderno e responsivo para o Instituto Paiva, uma instituição de ensino especializada em cursos de pós-graduação na área da saúde.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis
- **Framer Motion** - Animações
- **Lucide React** - Ícones
- **React Hook Form** - Gerenciamento de formulários

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (incluído com Node.js)

## 🛠️ Instalação

1. **Clone o repositório**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd instituto-paiva
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse o projeto**
   - Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes base (Radix UI)
│   ├── Header.jsx      # Cabeçalho da página
│   ├── HeroSection.jsx # Seção principal
│   ├── AboutSection.jsx # Sobre a instituição
│   ├── CoursesSection.jsx # Catálogo de cursos
│   ├── ContactSection.jsx # Formulário de contato
│   ├── Footer.jsx      # Rodapé
│   └── WhatsAppButton.jsx # Botão flutuante WhatsApp
├── hooks/              # Custom hooks
├── lib/                # Utilitários
├── assets/             # Recursos estáticos
├── App.jsx             # Componente principal
└── main.jsx            # Ponto de entrada
```

## 🎨 Funcionalidades

### ✨ Seções Principais
- **Hero Section** - Apresentação impactante com animações
- **Sobre** - Missão, valores e diferenciais da instituição
- **Cursos** - Catálogo com filtros por categoria
- **Diferenciais** - Vantagens competitivas
- **Contato** - Formulário e informações de contato

### 📱 Recursos Interativos
- **Botão WhatsApp Flutuante** - Contato direto via WhatsApp
- **Mapa Google Maps** - Localização da instituição
- **Filtros de Cursos** - Busca por categoria
- **Animações Suaves** - Experiência visual aprimorada
- **Design Responsivo** - Otimizado para mobile e desktop

### 🎯 Cursos Disponíveis
- Pós-Graduação em Acupuntura
- Acompanhante Terapêutico
- Terapia Manual
- Neurofuncional
- Estética Avançada
- ABA - Análise do Comportamento

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build de produção
npm run preview      # Visualiza build de produção

# Qualidade de Código
npm run lint         # Executa ESLint
```

## 📞 Informações de Contato

- **WhatsApp:** (81) 99841-9268
- **E-mail:** contato@institutopaiva.com.br
- **Endereço:** R. Carlos Pôrto Carreiro, Boa Vista, Recife - PE
- **Horário:** Seg-Sex: 8h às 18h | Sáb: 8h às 12h

## 🎨 Paleta de Cores

- **Primary:** Azul (#2563eb)
- **Accent:** Amarelo (#fbbf24)
- **Background:** Gradientes azuis
- **Text:** Cinza escuro (#1f2937)

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🔧 Configuração de Desenvolvimento

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
VITE_APP_TITLE=Instituto Paiva
VITE_APP_DESCRIPTION=Site Institucional
```

### Estrutura de Componentes
Todos os componentes seguem o padrão de design system com:
- Props tipadas
- Acessibilidade (ARIA labels)
- Animações suaves
- Estados de hover/focus

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

### Servidor de Produção
```bash
npm run preview
```

## 📄 Licença

Este projeto é privado e pertence ao Instituto Paiva.

## 👥 Desenvolvimento

- **Framework:** React + Vite
- **Estilização:** Tailwind CSS
- **Componentes:** Radix UI
- **Animações:** Framer Motion
- **Ícones:** Lucide React

---

**Instituto Paiva** - Transformando vidas através da educação de qualidade na área da saúde. 🏥✨
