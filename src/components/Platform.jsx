import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const platformFeatures = [
  {
    title: 'Linha do Tempo',
    description: 'Aconteceu às 15h? Vai direto pro minuto certo. Acabou o sofrimento de ficar rebobinando.',
  },
  {
    title: 'Downloads',
    description: 'Precisa mandar pra polícia? Pro síndico? Baixa o trecho e manda. Um clique.',
  },
  {
    title: 'Mosaico',
    description: '16 câmeras na mesma tela. O porteiro vê tudo sem ficar trocando de aba.',
  },
  {
    title: 'Notificações',
    description: 'Nada de 200 alertas por dia que ninguém lê. Só chega o que realmente importa.',
  },
  {
    title: 'Suporte dedicado',
    description: 'Travou? Dúvida? Tem gente de verdade do outro lado pra te ajudar. Sem robô.',
  },
  {
    title: 'App no celular',
    description: 'Abriu o app, tá vendo suas câmeras. No ônibus, na viagem, de madrugada. Android e iOS.',
  },
]

/* ── Mobile: tap-to-expand feature pills ── */
function MobilePlatform() {
  const [expanded, setExpanded] = useState(null)

  return (
    <div className="lg:hidden">
      {/* Dashboard image on mobile */}
      <div className="reveal reveal-delay-2 relative mb-8 mx-5 sm:mx-8">
        <div className="relative rounded-2xl overflow-hidden border border-cam-purple/10"
          style={{ boxShadow: '0 0 50px -15px rgba(123,72,234,0.1), 0 15px 40px -10px rgba(0,0,0,0.4)' }}
        >
          <img
            src="/images/plataforma-dashboard.png"
            alt="Plataforma Camerite"
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
      </div>

      {/* Feature pills — tap to expand */}
      <div className="reveal reveal-delay-3 px-5 sm:px-8 space-y-2">
        {platformFeatures.map((feature, i) => {
          const isOpen = expanded === i
          return (
            <button
              key={i}
              onClick={() => setExpanded(isOpen ? null : i)}
              className={`
                w-full text-left rounded-xl px-4 py-3 transition-all duration-300
                border
                ${isOpen
                  ? 'bg-cam-purple/[0.06] border-cam-purple/20'
                  : 'bg-white/[0.02] border-white/[0.04] active:bg-white/[0.04]'
                }
              `}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <span className={`
                    font-mono text-[10px] transition-colors duration-300
                    ${isOpen ? 'text-cam-purple' : 'text-zinc-600'}
                  `}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`
                    text-sm font-semibold transition-colors duration-300 truncate
                    ${isOpen ? 'text-cam-purple-soft' : 'text-white'}
                  `}>
                    {feature.title}
                  </h3>
                </div>
                <svg
                  className={`w-4 h-4 shrink-0 transition-all duration-300 ${isOpen ? 'text-cam-purple rotate-180' : 'text-zinc-600 rotate-0'}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div className={`
                overflow-hidden transition-all duration-300 ease-out
                ${isOpen ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}
              `}>
                <p className="text-[13px] text-zinc-400 leading-relaxed pl-7">
                  {feature.description}
                </p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function Platform() {
  const sectionRef = useReveal()

  return (
    <section id="plataforma" ref={sectionRef} className="relative py-20 sm:py-28">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header — shared between mobile and desktop */}
        <div className="lg:mb-0 mb-8">
          <div className="reveal mb-5">
            <span className="section-label">Plataforma</span>
          </div>
          <h2 className="reveal reveal-delay-1 section-title mb-4">
            Uma plataforma. Todas as
            <br />
            <span className="text-cam-purple">câmeras. Todas as respostas.</span>
          </h2>
          <p className="reveal reveal-delay-2 section-desc mb-0 lg:mb-12">
            Chega de pular entre 5 sistemas diferentes. Aqui você vê tudo, busca tudo e resolve tudo num lugar só.
          </p>
        </div>
      </div>

      {/* ═══ MOBILE (< lg) ═══ */}
      <MobilePlatform />

      {/* ═══ DESKTOP (lg+): Original 2-column layout ═══ */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="grid sm:grid-cols-2 gap-4">
              {platformFeatures.map((feature, i) => (
                <div key={i} className="reveal" style={{ transitionDelay: `${0.2 + i * 0.06}s` }}>
                  <div className="group rounded-xl border-l-2 border-cam-purple/30 bg-cam-purple/[0.03] px-4 py-3.5 transition-all duration-300 hover:border-cam-purple/60 hover:bg-cam-purple/[0.06]">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-2 h-2 rounded-full bg-cam-purple/80 ring-[3px] ring-cam-purple/15 transition-all duration-300 group-hover:bg-cam-purple group-hover:ring-cam-purple/25" />
                      <h3 className="text-sm font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-[13px] text-zinc-400 leading-relaxed pl-[18px]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-3 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06]">
              <img
                src="/images/plataforma-dashboard.png"
                alt="Plataforma Camerite — Dashboard com câmeras ao vivo, notificações, reconhecimento facial e app mobile"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-14 bg-cam-purple/12 blur-[50px] rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
