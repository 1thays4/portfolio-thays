# Portfólio - Thays

Portfólio pessoal de Thays, Desenvolvedora Full Stack especializada em Angular, Node.js, TypeScript, WordPress e automações.

## 🚀 Como executar

Este é um projeto **puramente estático** (HTML + CSS + JavaScript). Não requer build, instalação de dependências ou servidor backend.

### Opção 1: Abrir diretamente (mais simples)

1. Navegue até a pasta do projeto
2. Abra o arquivo `index.html` no seu navegador

### Opção 2: Usar Live Server (recomendado)

Com o [Visual Studio Code](https://code.visualstudio.com/) e a extensão **Live Server** instalada:

1. Abra a pasta do projeto no VS Code
2. Clique com o botão direito no `index.html`
3. Selecione **"Open with Live Server"**
4. O projeto será aberto em `http://localhost:5500`

### Opção 3: Servidor HTTP local (Python)

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Depois acesse `http://localhost:8000` no navegador.

## 📁 Estrutura do projeto

```
portfolio-thays/
├── index.html        # Página inicial
├── sobre.html        # Sobre mim
├── projetos.html     # Projetos com carrossel de imagens
├── contato.html      # Contato com formulário
├── README.md
├── css/
│   └── style.css     # Estilos globais (tema dark, carrossel, etc.)
├── js/
│   ├── main.js       # Menu mobile, animações, header scroll
│   └── carousel.js   # Carrossel com autoplay, swipe e navegação manual
└── img/
    ├── 1/            # Imagens do Projeto 1 (Sistema ABA)
    ├── 2/            # Imagens do Projeto 2 (Painel IA)
    ├── 3/            # Imagens do Projeto 3 (User Management)
    └── 4/            # Imagens do Projeto 4 (Fincento)
```

## 🛠️ Funcionalidades

- **Tema dark** moderno com gradientes
- **Design responsivo** (desktop, tablet, mobile)
- **Carrossel de imagens** nos projetos com:
  - Autoplay (troca automática a cada 4s)
  - Navegação manual (botões anterior/próximo)
  - Indicadores (dots) clicáveis
  - Suporte a swipe em dispositivos móveis
  - Pausa ao passar o mouse
- **Menu mobile** com animação
- **Formulário de contato** funcional via Formspree
- **Animações de entrada** com Intersection Observer
- **Navegação suave** (smooth scroll)

## 🧑‍💻 Tecnologias

- HTML5
- CSS3 (variáveis, flexbox, grid, animações)
- JavaScript vanilla (ES6+)