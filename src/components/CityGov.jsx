import { useReveal } from '../hooks/useReveal'

const WHATSAPP_LINK = 'https://wa.me/5543936180655?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Camerite%20para%20gest%C3%A3o%20p%C3%BAblica.'

const capabilities = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Proteção de prédios públicos',
    desc: 'Monitoramento contínuo com detecção de intrusão e alertas fora de horário.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Ocorrências e investigação',
    desc: 'Busca inteligente por rosto, placa ou comportamento. Evidências em segundos.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Gestão de eventos e espaços urbanos',
    desc: 'Contagem de fluxo, detecção de aglomeração e apoio a decisões em tempo real.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Planejamento com dados',
    desc: 'Movimentação, horários críticos, áreas de risco. Mais clareza, menos improviso.',
  },
]

const painPoints = [
  'Procurar',
  'Assistir',
  'Voltar',
  'Rever horas',
  'Achar "o minuto certo"',
]

export default function CityGov() {
  const sectionRef = useReveal()

  return (
    <section id="cidades" className="relative py-28">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal mb-5">
          <span className="section-label">Cidades e Governo</span>
        </div>
        <div className="reveal reveal-delay-1 mb-4">
          <h2 className="section-title">
            Gravar tudo não é o mesmo que
            <br />
            <span className="text-cam-purple">entender o que aconteceu.</span>
          </h2>
        </div>
        <p className="reveal reveal-delay-2 section-desc mb-16">
          A cidade não para. E as câmeras também não. Ruas, escolas, praças, eventos — um mar de imagens. Mas quando algo acontece, a sensação é sempre a mesma: "como a gente não viu isso antes?"
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left - Problem */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-2xl border border-red-500/10 bg-red-950/[0.06] p-6 sm:p-8">
              <p className="text-sm font-medium text-red-400/80 mb-2">O problema real</p>
              <h3 className="text-lg font-display font-semibold text-white mb-4">
                Não é falta de vídeo. É excesso sem leitura.
              </h3>
              <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                No momento mais crítico, alguém precisa:
              </p>
              <ul className="space-y-2.5 mb-6">
                {painPoints.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-400">
                    <svg className="w-4 h-4 text-red-400/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-zinc-500 italic">
                Só que a <span className="text-red-400/80 font-medium">cidade não pode esperar o play</span>.
              </p>
            </div>
          </div>

          {/* Right - Solution */}
          <div className="reveal reveal-delay-3">
            <div className="rounded-2xl border border-cam-purple/10 bg-cam-purple/[0.03] p-6 sm:p-8">
              <p className="text-sm font-medium text-cam-purple-soft mb-2">Com analíticos</p>
              <h3 className="text-lg font-display font-semibold text-white mb-4">
                A imagem deixa de ser arquivo e vira informação.
              </h3>
              <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                O vídeo revela o que importa quando você sabe olhar:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['O padrão que se repete', 'O comportamento fora do normal', 'O mesmo ponto voltando a dar problema', 'O risco crescendo aos poucos'].map((item, i) => (
                  <div key={i} className="rounded-lg border border-white/[0.06] bg-cam-surface/40 px-3 py-2.5">
                    <p className="text-[13px] text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-zinc-500">
                Entender não é assistir. <span className="text-cam-purple font-medium">É interpretar.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Capabilities grid */}
        <div className="reveal reveal-delay-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/[0.06] bg-cam-surface/30 p-5 hover:border-cam-purple/15 transition-all duration-300"
            >
              <span className="text-cam-purple mb-3 block">{cap.icon}</span>
              <h4 className="text-sm font-semibold text-white mb-1.5">{cap.title}</h4>
              <p className="text-[13px] text-zinc-500 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-4 text-center">
          <p className="text-base text-zinc-400 mb-6">
            Cidade que entende o que acontece age antes, gasta melhor, protege mais.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Leve inteligência para sua operação
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
