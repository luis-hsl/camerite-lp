# Camerite - Landing Page

Landing page da **Camerite**, plataforma brasileira de videomonitoramento inteligente com IA. Transforma cameras comuns em uma central de dados ativa com reconhecimento facial, leitura de placas, deteccao de intrusao e alertas em tempo real.

## Numeros

- **+300.000** usuarios ativos
- **+400** parceiros e franquias
- **+50** cidades apoiadas
- **+10 toneladas** de drogas apreendidas
- **R$30 milhoes** de prejuizo ao crime
- **+450** veiculos recuperados

## Stack

- **React 18** + **Vite 6**
- **Tailwind CSS 3.4**
- **Lucide React** + **React Icons**
- Fontes: Specify Expanded (display), Plus Jakarta Sans (body), Fragment Mono (mono)

## Estrutura

```
src/
├── App.jsx                  # Rotas e dados das features
├── main.jsx                 # Entry point
├── index.css                # Estilos globais + Tailwind
├── components/
│   ├── Navbar.jsx           # Nav fixa com fullscreen menu mobile
│   ├── Hero.jsx             # Video autoplay + copy + stats
│   ├── Partners.jsx         # Marquee logos parceiros
│   ├── FeatureShowcase.jsx  # Scroll spy desktop + carousel mobile
│   ├── Platform.jsx         # Accordion mobile + cards desktop
│   ├── AppDemo.jsx          # Video app + download links
│   ├── CloudVsDVR.jsx       # Comparativo nuvem vs DVR
│   ├── SocialProof.jsx      # Bento grid metricas animadas
│   ├── CityGov.jsx          # Terminal + editorial + marquee neon
│   ├── CTA.jsx              # Call to action WhatsApp
│   ├── Footer.jsx           # Links + social
│   └── WhatsAppFloat.jsx    # Botao flutuante WhatsApp
└── hooks/
    ├── useReveal.js         # Intersection Observer reveal
    └── useScrollSpy.js      # Scroll spy para FeatureShowcase
```

## Rodando local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Principais features da LP

- **Hero com video** - autoplay mutado, toggle de som, pausa ao scrollar
- **Scroll spy** - imagem sticky que troca conforme scrolla no desktop
- **Carousel image-only** - swipe horizontal no mobile
- **Terminal typewriter** - simulacao de busca manual com texto digitando
- **Animated counters** - numeros que contam ao entrar na viewport
- **Marquee neon** - cards com borda roxa glow passando automaticamente
- **Fullscreen mobile menu** - overlay com links grandes e hamburger animado
- **Accordion** - tap-to-expand nas features da plataforma (mobile)
- **Responsive** - testado de 320px a 1920px

## Personalizacao

### WhatsApp
O numero de WhatsApp esta configurado em cada componente como:
```
https://wa.me/5543936180655
```
Para alterar, busque por `WHATSAPP_LINK` nos componentes.

### Cores
A paleta de cores esta definida em `tailwind.config.js` sob `theme.extend.colors.cam`.

## Deploy

- **Vercel** - `vercel deploy`
- **Netlify** - Conectar repositorio GitHub
- **GitHub Pages** - Via GitHub Actions

## Licenca

Propriedade da Camerite. Todos os direitos reservados.
