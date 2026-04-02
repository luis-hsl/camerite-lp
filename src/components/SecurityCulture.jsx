import { useReveal } from '../hooks/useReveal'

const insights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    label: 'O que foge do padrão',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'O horário que não fazia sentido',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'A permanência acima do normal',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: 'O movimento em área sensível',
  },
]

const environments = [
  { name: 'Condomínios', detail: 'percebem acessos irregulares' },
  { name: 'Empresas', detail: 'entendem melhor o fluxo de pessoas' },
  { name: 'Escolas', detail: 'ganham clareza sobre horários sensíveis' },
  { name: 'Comércios', detail: 'identificam pontos de maior atenção' },
]

export default function SecurityCulture() {
  const sectionRef = useReveal()

  return (
    <section className="relative py-28">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <div className="reveal mb-5">
              <span className="section-label">Cultura de Segurança</span>
            </div>

            <h2 className="reveal reveal-delay-1 section-title mb-4">
              Segurança não falha
              <br />
              <span className="text-cam-purple">de uma vez.</span>
            </h2>

            <p className="reveal reveal-delay-2 section-desc mb-6">
              Quando ninguém olha, o comportamento relaxa. Porta que fica aberta "só um minuto". Acesso "rapidinho" sem cadastro. Gente em área onde não deveria estar.
            </p>

            <p className="reveal reveal-delay-2 text-sm text-zinc-500 leading-relaxed mb-10 max-w-lg">
              Quando o ambiente é monitorado de verdade, o comportamento muda. Não por medo. Mas porque todo mundo sabe que ali tem alguém de olho. E quem cuida, percebe antes.
            </p>

            {/* Insight cards */}
            <div className="reveal reveal-delay-3 mb-10">
              <p className="text-xs text-zinc-600 uppercase tracking-[0.15em] font-medium mb-4">
                Analíticos mostram o que merece atenção
              </p>
              <div className="grid grid-cols-2 gap-3">
                {insights.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-cam-surface/40 px-4 py-3"
                  >
                    <span className="text-cam-purple">{item.icon}</span>
                    <span className="text-sm text-zinc-300 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="reveal reveal-delay-4 text-sm font-medium text-cam-purple-soft italic">
              "Segurança vira cultura, não só câmera na parede."
            </p>
          </div>

          {/* Right - Environments grid */}
          <div className="reveal reveal-delay-3">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              {environments.map((env, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-white/[0.06] bg-cam-surface/30 p-5 sm:p-6 hover:border-cam-purple/15 transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-cam-purple mb-4" />
                  <h3 className="text-base font-display font-semibold text-white mb-1.5">
                    {env.name}
                  </h3>
                  <p className="text-[13px] text-zinc-500 leading-relaxed">
                    {env.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-cam-purple/10 bg-cam-purple/[0.03] p-5 sm:p-6">
              <p className="text-sm text-zinc-400 leading-relaxed">
                Cada lugar passa a ter a <span className="text-white font-medium">sua própria leitura</span>. Baseada no que acontece de fato, não no achismo. Quando checar vira hábito, o comportamento muda. E quando muda, <span className="text-cam-purple font-medium">o problema some</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
