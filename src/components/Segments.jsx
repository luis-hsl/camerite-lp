import { useReveal } from '../hooks/useReveal'

const segments = [
  {
    title: 'Empresas e Industrias',
    description: 'Areas criticas, entrada de funcionarios e movimentacao de cargas.',
    image: '/images/empresas-industrias.png',
  },
  {
    title: 'Eventos e Locais Publicos',
    description: 'Seguranca em tempo real com deteccao e reconhecimento facial.',
    image: '/images/eventos-publicos.png',
  },
  {
    title: 'Comercios e Depositos',
    description: 'Controle de fluxo, gestao de equipe e evidencias para conflitos.',
    image: '/images/lojas-depositos.png',
  },
  {
    title: 'Condominios e Residencias',
    description: 'Acessos irregulares, leitura de placas e monitoramento de areas comuns.',
    image: '/images/deteccao-pessoas.png',
  },
  {
    title: 'Visao da Plataforma',
    description: 'Desenhe areas, defina horarios e receba alertas personalizados.',
    image: '/images/plataforma-deteccao.png',
  },
  {
    title: 'AutoOCR na Plataforma',
    description: 'Transforme cameras comuns em leitores de placa inteligentes.',
    image: '/images/plataforma-autoocr.png',
  },
]

export default function Segments() {
  const sectionRef = useReveal()

  return (
    <section id="segmentos" className="relative py-28">
      <div className="absolute inset-0 bg-cam-surface/15" />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal mb-5">
          <span className="section-label">Segmentos</span>
        </div>
        <div className="reveal reveal-delay-1 mb-4">
          <h2 className="section-title">
            Camerite na pratica:
            <br />
            <span className="text-cam-purple">solucoes para cada situacao</span>
          </h2>
        </div>
        <p className="reveal reveal-delay-2 section-desc mb-14">
          Cada ambiente tem sua leitura propria. Com base em fatos, nao so em sensacao.
        </p>

        {/* Top row: 3 large cards */}
        <div className="reveal reveal-delay-3 grid md:grid-cols-3 gap-4 mb-4">
          {segments.slice(0, 3).map((seg, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden border border-white/[0.04] bg-cam-surface/30 hover:border-cam-purple/15 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={seg.image}
                  alt={seg.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cam-surface via-transparent to-transparent" />
              </div>
              <div className="p-5 -mt-8 relative z-10">
                <h3 className="text-base font-display font-semibold text-white mb-1.5">{seg.title}</h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed">{seg.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: 3 smaller cards */}
        <div className="reveal reveal-delay-4 grid md:grid-cols-3 gap-4">
          {segments.slice(3).map((seg, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden border border-white/[0.04] bg-cam-surface/30 hover:border-cam-purple/15 transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={seg.image}
                  alt={seg.title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cam-surface via-transparent to-transparent" />
              </div>
              <div className="p-5 -mt-6 relative z-10">
                <h3 className="text-base font-display font-semibold text-white mb-1.5">{seg.title}</h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed">{seg.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
