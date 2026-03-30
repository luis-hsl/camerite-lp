import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import FeatureShowcase from './components/FeatureShowcase'
import ImpactBreak from './components/ImpactBreak'
import Segments from './components/Segments'
import CloudVsDVR from './components/CloudVsDVR'
import Platform from './components/Platform'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

const analyticsFeatures = [
  {
    title: 'Contagem de Pessoas',
    question: 'Quantas pessoas passam por aqui? Em que direcao? Em que horario? Responda essas perguntas com contagem automatica em tempo real.',
    segments: ['Condominios', 'Escolas', 'Eventos', 'Espacos Publicos'],
    image: '/images/contagem-pessoas.png',
  },
  {
    title: 'Deteccao de Movimento',
    question: 'Algo se moveu onde normalmente nao deveria? Monitore areas especificas e receba alertas no horario que voce escolher.',
    segments: ['Area rural', 'Loteadoras', 'Obras', 'Patios', 'Perimetros extensos'],
    image: '/images/deteccao-movimento.png',
  },
  {
    title: 'Deteccao de Pessoas',
    question: 'Tem alguem aqui quando nao deveria ter? Identifique presencas em horarios e locais sensiveis automaticamente.',
    segments: ['Condominios', 'Predios publicos', 'Empresas', 'Casas de repouso'],
    image: '/images/deteccao-pessoas.png',
  },
  {
    title: 'Leitura de Placas',
    subtitle: 'AutoOCR',
    question: 'Quem entrou ou saiu? Esse veiculo se repete? Ele deveria estar aqui? Transforme cameras comuns em leitores de placa inteligentes.',
    segments: ['Condominios', 'Logistica', 'Empresas', 'Governos'],
    image: '/images/leitura-placas.png',
  },
  {
    title: 'Reconhecimento Facial',
    question: 'Mais controle, inteligencia e seguranca em tempo real. Busca por deteccao, alerta, foto ou grupo.',
    segments: ['Empresas', 'Eventos', 'Locais Publicos'],
    image: '/images/reconhecimento-facial.png',
  },
  {
    title: 'Notificacoes Inteligentes',
    question: 'Veja apenas o que importa, no momento certo. A tecnologia que conecta todas as deteccoes e envia alertas em tempo real.',
    segments: ['Todos os segmentos'],
    image: '/images/notificacoes.png',
  },
]

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <FeatureShowcase
        id="tecnologias"
        label="Tecnologias"
        title="Cada analitico responde"
        titleHighlight="a uma pergunta diferente"
        description="Da gravacao em nuvem ao reconhecimento facial. O ecossistema mais completo de videomonitoramento inteligente do Brasil."
        features={analyticsFeatures}
      />
      <ImpactBreak />
      <Segments />
      <CloudVsDVR />
      <Platform />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
