# Camerite Landing Page

> **Inteligência Artificial para suas câmeras** — Transformando imagens em informação de valor.

Landing page institucional da [Camerite](https://camerite.com), empresa de tecnologia especializada em Videomonitoramento com Inteligência Artificial. Focada em conversão via WhatsApp.

## Sobre a Camerite

A Camerite é a maior plataforma de videomonitoramento com IA do Brasil, com:

- **+300.000** usuários ativos
- **+400** parceiros e franquias
- **+50** cidades com forças de segurança apoiadas
- **+10 toneladas** de drogas apreendidas
- **+R$30 milhões** de prejuízo ao crime
- **+450** veículos recuperados

## Tecnologias Apresentadas

- **Nuvem de Câmeras** — Armazenamento escalável em HD, Full HD e 4K
- **Detecção de Movimento** — Alertas inteligentes e personalizados
- **Detecção e Permanência de Pessoas** — Contagem e análise de fluxo
- **AutoOCR e Câmera LPR** — Leitura de placas por qualquer câmera
- **Reconhecimento Facial** — Identificação e comparação de faces
- **Análise de Rotas com IA** — Busca avançada investigativa
- **Rede Colaborativa** — Segurança comunitária integrada
- **Ronda Virtual** — Vigilância automatizada com mosaico

## Stack Tecnológica

- **React 18** — Biblioteca de UI
- **Vite 6** — Build tool ultrarrápido
- **Tailwind CSS 3** — Framework CSS utility-first
- **Lucide React** — Ícones SVG otimizados

## Instalação e Uso

```bash
# Clonar o repositório
git clone https://github.com/SEU_USUARIO/camerite-lp.git
cd camerite-lp

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Estrutura do Projeto

```
camerite-lp/
├── public/
│   └── camerite-icon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Barra de navegação fixa
│   │   ├── Hero.jsx            # Seção principal com CTA
│   │   ├── Stats.jsx           # Números animados
│   │   ├── Timeline.jsx        # Evolução das câmeras
│   │   ├── Technologies.jsx    # Grid de tecnologias
│   │   ├── CloudVsDVR.jsx      # Comparação Nuvem vs DVR
│   │   ├── Platform.jsx        # Plataforma e App
│   │   ├── Videos.jsx          # Vídeos demonstrativos
│   │   ├── CTA.jsx             # Call-to-action final
│   │   ├── Footer.jsx          # Rodapé
│   │   └── WhatsAppFloat.jsx   # Botão flutuante WhatsApp
│   ├── App.jsx                 # Componente raiz
│   ├── main.jsx                # Entry point
│   └── index.css               # Estilos globais + Tailwind
├── index.html                  # HTML template
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Personalização

### WhatsApp
O número de WhatsApp está configurado em cada componente como:
```
https://wa.me/5543936180655
```
Para alterar, busque por `WHATSAPP_LINK` nos componentes.

### Vídeos
Na seção de vídeos (`Videos.jsx`), substitua os `embedId` placeholder pelos IDs reais dos vídeos do YouTube da Camerite.

### Cores
A paleta de cores está definida em `tailwind.config.js` sob `theme.extend.colors.camerite`.

## Deploy

A landing page pode ser hospedada em qualquer serviço de hospedagem estática:

- **Vercel** — `vercel deploy`
- **Netlify** — Conectar repositório GitHub
- **GitHub Pages** — Via GitHub Actions

## Licença

Propriedade da Camerite. Todos os direitos reservados.
