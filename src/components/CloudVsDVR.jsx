import { useState, useRef, useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'

const WHATSAPP_LINK = 'https://wa.me/5543936180655?text=Ol%C3%A1!%20Quero%20migrar%20para%20a%20nuvem%20Camerite.'

/* ── Scroll visibility hook ── */
function useVisible(threshold = 0.3) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, vis]
}

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

const techBadges = ['HD', 'Full HD', '4K', 'RTSP', 'P2P', 'RTMP', 'Multimarcas']

export default function CloudVsDVR() {
  const sectionRef = useReveal()
  const [cardsRef, cardsVisible] = useVisible(0.2)
  const [badgesRef, badgesVisible] = useVisible(0.3)

  return (
    <section id="diferenciais" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'url("https://framerusercontent.com/images/c0EZxtMucSR6UOSZk2TBnWsqr4.svg?width=96&height=96")',
          backgroundRepeat: 'repeat',
          backgroundSize: '41px auto',
        }}
      />

      {/* 3D decorative elements */}
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

      {/* Ambient glows */}
      <div className="absolute top-[20%] left-0 w-[60%] max-w-[400px] aspect-square rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(248,113,113,0.03) 0%, transparent 70%)' }}
      />
      <div className="absolute top-[20%] right-0 w-[60%] max-w-[400px] aspect-square rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,72,234,0.04) 0%, transparent 70%)' }}
      />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="reveal mb-5">
          <span className="section-label">Por que nuvem?</span>
        </div>
        <div className="reveal reveal-delay-1 mb-4">
          <h2 className="section-title max-w-3xl">
            Gravar é só o começo.
            <br />
            <span className="text-cam-purple">Proteger é o que importa.</span>
          </h2>
        </div>
        <p className="reveal reveal-delay-2 section-desc mb-12 sm:mb-16">
          Um DVR na portaria é um convite. A nuvem tira suas evidências do alcance físico e coloca na palma da sua mão.
        </p>

        {/* ═══ Comparison cards ═══ */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-14">

          {/* DVR Card — broken/outdated feel */}
          <div className={`
            dvr-card relative rounded-2xl overflow-hidden
            transition-all duration-700
            ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}>
            {/* Noise overlay */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '128px' }}
            />

            <div className="relative z-10 p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/10">
                  <svg className="w-4 h-4 text-red-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-white">DVR Tradicional</h3>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-red-400/50">legado</span>
                </div>
              </div>

              {/* Items with staggered appear */}
              <ul className="space-y-0">
                {dvrProblems.map((item, i) => (
                  <li
                    key={i}
                    className={`
                      flex items-start gap-3 py-3 border-b border-red-400/[0.06] last:border-0
                      transition-all duration-500
                      ${cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'}
                    `}
                    style={{ transitionDelay: cardsVisible ? `${300 + i * 100}ms` : '0ms' }}
                  >
                    <svg className="w-4 h-4 text-red-400/50 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    <span className="text-[13px] sm:text-sm text-zinc-400 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cloud Card — alive/premium feel */}
          <div className={`
            cloud-card relative rounded-2xl overflow-hidden
            transition-all duration-700
            ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
          style={{ transitionDelay: cardsVisible ? '150ms' : '0ms' }}
          >
            {/* Corner glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(123,72,234,0.12) 0%, transparent 70%)' }}
            />

            {/* Grid texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(rgba(123,72,234,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(123,72,234,0.8) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative z-10 p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-cam-purple/15 border border-cam-purple/15">
                  <svg className="w-4 h-4 text-cam-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-white">Nuvem Camerite</h3>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-cam-purple/60">ativo</span>
                </div>
                <span className="ml-auto w-2 h-2 rounded-full bg-cam-green animate-pulse" />
              </div>

              {/* Items */}
              <ul className="space-y-0">
                {cloudBenefits.map((item, i) => (
                  <li
                    key={i}
                    className={`
                      flex items-start gap-3 py-3 border-b border-cam-purple/[0.06] last:border-0
                      transition-all duration-500
                      ${cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'}
                    `}
                    style={{ transitionDelay: cardsVisible ? `${400 + i * 100}ms` : '0ms' }}
                  >
                    <svg className="w-4 h-4 text-cam-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-[13px] sm:text-sm text-zinc-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ═══ Tech badges ═══ */}
        <div
          ref={badgesRef}
          className={`
            flex flex-wrap items-center gap-3 mb-10 sm:mb-12
            transition-all duration-700
            ${badgesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-600 mr-1">Compatível com</span>
          {techBadges.map((tag, i) => (
            <span
              key={tag}
              className={`
                text-[11px] sm:text-xs font-mono font-medium
                text-cam-purple-soft/80 bg-cam-purple/[0.06] border border-cam-purple/10
                hover:border-cam-purple/25 hover:bg-cam-purple/[0.1]
                rounded-lg px-3.5 py-2 transition-all duration-300
                ${badgesVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
              `}
              style={{ transitionDelay: badgesVisible ? `${200 + i * 60}ms` : '0ms' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal reveal-delay-4">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary group" onClick={() => gtag('event', 'conversion', {'send_to': 'AW-16844163935/inNeCLuMt5UcEN-W9t8-'})}>
            Quero migrar para a nuvem
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
