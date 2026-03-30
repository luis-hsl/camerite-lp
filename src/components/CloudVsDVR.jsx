import { useReveal } from '../hooks/useReveal'

const WHATSAPP_LINK = 'https://wa.me/5543936180655?text=Ol%C3%A1!%20Quero%20migrar%20para%20a%20nuvem%20Camerite.'

const dvrProblems = [
  'Vulneravel a furtos e avarias',
  'Falhas de HD frequentes',
  'Manutencao constante',
  'Sem escalabilidade',
  'Acesso remoto limitado',
]

const cloudBenefits = [
  'Seguranca aprimorada na nuvem',
  'Cameras centralizadas',
  'Acesso simultaneo de qualquer lugar',
  'Planos de 1 a 365 dias',
  'Escalabilidade ilimitada',
]

export default function CloudVsDVR() {
  const sectionRef = useReveal()

  return (
    <section id="diferenciais" className="relative py-28">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal mb-5">
          <span className="section-label">Diferenciais</span>
        </div>
        <div className="reveal reveal-delay-1 mb-4">
          <h2 className="section-title">
            Gravar e so o comeco.
            <br />
            <span className="text-cam-purple">A nuvem e indispensavel.</span>
          </h2>
        </div>
        <p className="reveal reveal-delay-2 section-desc mb-16">
          A nuvem previne perdas de gravacoes e oferece agilidade sem precedentes. Suas evidencias estao sempre seguras e acessiveis.
        </p>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
          {/* DVR */}
          <div className="reveal reveal-delay-2 rounded-2xl border border-red-500/10 bg-red-950/[0.06] p-8">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <h3 className="text-lg font-display font-semibold text-white">DVR Tradicional</h3>
            </div>

            <ul className="space-y-4">
              {dvrProblems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-zinc-400">
                  <svg className="w-4 h-4 text-red-400/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cloud */}
          <div className="reveal reveal-delay-3 rounded-2xl border border-cam-purple/10 bg-cam-purple/[0.03] p-8">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-2.5 h-2.5 rounded-full bg-cam-purple" />
              <h3 className="text-lg font-display font-semibold text-white">Nuvem Camerite</h3>
            </div>

            <ul className="space-y-4">
              {cloudBenefits.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-zinc-400">
                  <svg className="w-4 h-4 text-cam-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Protocol badges */}
        <div className="reveal reveal-delay-4 flex flex-wrap gap-2.5 mt-10 max-w-4xl">
          {['HD', 'Full HD', '4K', 'RTSP', 'P2P', 'RTMP'].map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-zinc-500 border border-white/[0.06] rounded-lg px-3.5 py-2"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="reveal reveal-delay-5 mt-10">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Migrar para a Nuvem
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
