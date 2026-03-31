import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import SocialProof from './components/SocialProof'
import FeatureShowcase from './components/FeatureShowcase'
import CloudVsDVR from './components/CloudVsDVR'
import Platform from './components/Platform'
import AppDemo from './components/AppDemo'
import CityGov from './components/CityGov'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

const analyticsFeatures = [
  {
    title: 'Contagem de Pessoas',
    question: 'Quantas pessoas passam por aqui? Em que direção? Em que horário? A contagem acontece sozinha.',
    segments: ['Condomínios', 'Escolas', 'Eventos', 'Espaços Públicos'],
    image: '/images/contagem-pessoas.png',
  },
  {
    title: 'Detecção de Movimento',
    question: 'Algo se moveu onde não deveria? Você define a área, escolhe o horário e a câmera avisa.',
    segments: ['Área rural', 'Loteadoras', 'Obras', 'Pátios', 'Perímetros'],
    image: '/images/deteccao-movimento.png',
  },
  {
    title: 'Detecção de Pessoas',
    question: 'Tem alguém ali quando não deveria? A câmera identifica e te alerta antes que vire problema.',
    segments: ['Condomínios', 'Prédios públicos', 'Empresas', 'Casas de repouso'],
    image: '/images/deteccao-pessoas.png',
  },
  {
    title: 'Leitura de Placas',
    subtitle: 'AutoOCR',
    question: 'Quem entrou? Quem saiu? Esse veículo já apareceu antes? Qualquer câmera vira um leitor de placas.',
    segments: ['Condomínios', 'Logística', 'Empresas', 'Governos'],
    image: '/images/leitura-placas.png',
  },
  {
    title: 'Reconhecimento Facial',
    question: 'Identifique rostos, busque por foto e receba alertas automáticos. Controle e inteligência juntos.',
    segments: ['Empresas', 'Eventos', 'Locais Públicos'],
    image: '/images/reconhecimento-facial.png',
  },
]

const segmentFeatures = [
  {
    title: 'Empresas e Indústrias',
    question: 'Quem entrou na área restrita? A carga saiu no horário? Acompanhe tudo de onde estiver, sem ronda manual.',
    segments: ['Fábricas', 'Escritórios', 'Depósitos', 'Áreas restritas'],
    image: '/images/empresas-industrias.png',
  },
  {
    title: 'Comércios e Shoppings',
    question: 'Prevenção de furtos, controle de fluxo de clientes e identificação de visitantes com tecnologia inteligente. Fila crescendo? Situação suspeita? A câmera vê e te avisa.',
    segments: ['Lojas', 'Supermercados', 'Shoppings', 'Franquias'],
    image: '/images/comercios-shoppings.png',
  },
  {
    title: 'Logística e Transporte',
    question: 'Registro automático de placas e movimentação de veículos. Otimize processos, evite fraudes e tenha controle total da operação.',
    segments: ['Transportadoras', 'Centros de distribuição', 'Pátios', 'Portarias'],
    image: '/images/logistica-transporte.png',
  },
  {
    title: 'Eventos e Locais Públicos',
    question: 'Milhares de pessoas, uma única plataforma. Detecção em tempo real com reconhecimento facial, garantindo prevenção e agilidade na tomada de decisão.',
    segments: ['Shows', 'Praças', 'Estádios', 'Terminais'],
    image: '/images/eventos-publicos.png',
  },
]

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Partners />
      <FeatureShowcase
        id="tecnologias"
        label="Tecnologias"
        title="Cada analítico responde"
        titleHighlight="a uma pergunta diferente"
        description="Usar o mesmo analítico para problemas diferentes gera ruído, não clareza. Aqui, cada tecnologia tem um propósito."
        features={analyticsFeatures}
      />
      <FeatureShowcase
        id="segmentos"
        label="Segmentos"
        title="Na prática, como isso"
        titleHighlight="muda o seu dia a dia?"
        description="Cada ambiente tem seus desafios. A Camerite se adapta ao seu cenário, não o contrário."
        features={segmentFeatures}
        reversed
      />
      <Platform />
      <AppDemo />
      <CloudVsDVR />
      <SocialProof />
      <CityGov />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
