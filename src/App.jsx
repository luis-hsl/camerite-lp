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
    question: 'Quantas pessoas passaram por aqui hoje? Em qual direção? Em que horário? Você não precisa contar. A câmera faz isso sozinha.',
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
    question: 'Cadastre um rosto e receba alerta quando ele aparecer. Busque por foto e ache em segundos. Simples assim.',
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
    question: 'Fila crescendo e ninguém viu? Situação estranha no corredor? A câmera percebe antes de você. Menos perda, mais controle do que acontece na loja.',
    segments: ['Lojas', 'Supermercados', 'Shoppings', 'Franquias'],
    image: '/images/comercios-shoppings.png',
  },
  {
    title: 'Logística e Transporte',
    question: 'Qual caminhão entrou? Que horas saiu? A placa bateu com o agendamento? Tudo registrado automaticamente, sem depender da portaria anotar.',
    segments: ['Transportadoras', 'Centros de distribuição', 'Pátios', 'Portarias'],
    image: '/images/logistica-transporte.png',
  },
  {
    title: 'Eventos e Locais Públicos',
    question: 'Show com 10 mil pessoas e um procurado na multidão. O reconhecimento facial acha. Aglomeração formando na entrada? Você fica sabendo na hora.',
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
        description="Cada analítico resolve um problema específico. Misturar tudo é o caminho mais rápido pra não resolver nada."
        features={analyticsFeatures}
        mobileImageOnly
      />
      <FeatureShowcase
        id="segmentos"
        label="Segmentos"
        title="Na prática, como isso"
        titleHighlight="muda o seu dia a dia?"
        description="Cada ambiente tem seus desafios. A Camerite se adapta ao seu cenário, não o contrário."
        features={segmentFeatures}
        reversed
        mobileImageOnly
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
