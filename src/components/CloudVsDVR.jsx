import { useReveal } from '../hooks/useReveal'

const WHATSAPP_LINK = 'https://wa.me/5543936180655?text=Ol%C3%A1!%20Quero%20migrar%20para%20a%20nuvem%20Camerite.'

const dvrProblems = [
  'Roubaram o DVR? Levaram as provas junto.',
  'HD queimou? Meses de gravação perdidos.',
  'Manutenção constante e custo que não para.',
  'Cresceu? Precisa comprar tudo de novo.',
  'Quer ver de longe? Boa sorte com o acesso remoto.',
]

const cloudBenefits = [
  'Gravações seguras na nuvem, fora do alcance.',
  'Todas as câmeras em um único painel.',
  'Acesse de qualquer lugar, a qualquer hora.',
  'De 1 a 365 dias de armazenamento. Você escolhe.',
  'Cresceu? Só adicionar. Sem limite.',
]

export default function CloudVsDVR() {
  const sectionRef = useReveal()

  return (
    <section id="diferenciais" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />

      {/* Dot pattern - behind everything */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("https://framerusercontent.com/images/c0EZxtMucSR6UOSZk2TBnWsqr4.svg?width=96&height=96")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '41px auto',
        }}
      />

      {/* 3D decorative elements - spread across section */}
      <img
        src="https://framerusercontent.com/images/NJW1d14Yv9Pl3tAZ0nPbXGkt8So.png?scale-down-to=512&width=811&height=662"
        alt=""
        className="absolute top-12 right-[5%] w-16 sm:w-24 lg:w-32 opacity-40 pointer-events-none select-none z-[1]"
        loading="lazy"
        draggable={false}
      />
      <img
        src="https://framerusercontent.com/images/gCkQVdtpzloTrvJEL40wpt9oTg.png?width=685&height=694"
        alt=""
        className="absolute bottom-16 left-[3%] w-14 sm:w-20 lg:w-28 opacity-35 pointer-events-none select-none z-[1]"
        loading="lazy"
        draggable={false}
      />
      <img
        src="https://framerusercontent.com/images/WWx9E7llDUsyhNS7c2qlIeHXwpM.png?scale-down-to=512&width=756&height=674"
        alt=""
        className="absolute bottom-24 right-[5%] w-16 sm:w-24 lg:w-28 opacity-25 pointer-events-none select-none z-[1] hidden md:block"
        loading="lazy"
        draggable={false}
      />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-4xl">
          <div>
            <div className="reveal mb-5">
              <span className="section-label">Por que nuvem?</span>
            </div>
            <div className="reveal reveal-delay-1 mb-4">
              <h2 className="section-title">
                Gravar é só o começo.
                <br />
                <span className="text-cam-purple">Proteger é o que importa.</span>
              </h2>
            </div>
            <p className="reveal reveal-delay-2 section-desc mb-10">
              Um DVR na portaria é um convite. A nuvem tira suas evidências do alcance físico e coloca na palma da sua mão.
            </p>

            <div className="reveal reveal-delay-3 grid sm:grid-cols-2 gap-4">
              {/* DVR */}
              <div className="group rounded-2xl border border-red-500/10 bg-red-950/[0.08] p-5 sm:p-6 hover:border-red-500/20 transition-all duration-500">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-500/10">
                    <svg className="w-3.5 h-3.5 text-red-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-display font-semibold text-white">DVR Tradicional</h3>
                </div>
                <ul className="space-y-3">
                  {dvrProblems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-zinc-400 leading-relaxed">
                      <svg className="w-3.5 h-3.5 text-red-400/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cloud */}
              <div className="group rounded-2xl border border-cam-purple/10 bg-cam-purple/[0.04] p-5 sm:p-6 hover:border-cam-purple/25 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cam-purple/[0.06] blur-[40px] rounded-full pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-cam-purple/15">
                      <svg className="w-3.5 h-3.5 text-cam-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-display font-semibold text-white">Nuvem Camerite</h3>
                  </div>
                  <ul className="space-y-3">
                    {cloudBenefits.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-zinc-400 leading-relaxed">
                        <svg className="w-3.5 h-3.5 text-cam-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="reveal reveal-delay-4 flex flex-wrap gap-2 mt-8">
              {['HD', 'Full HD', '4K', 'RTSP', 'P2P', 'RTMP', 'Multimarcas'].map((tag) => (
                <span key={tag} className="text-[11px] font-mono font-medium text-zinc-500 border border-white/[0.06] rounded-lg px-3 py-1.5">
                  {tag}
                </span>
              ))}
            </div>

            <div className="reveal reveal-delay-5 mt-8">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Quero migrar para a nuvem
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
