import { useState, useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

function AnimatedNumber({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 2000
    const startTime = performance.now()
    function tick(now) {
      const p = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(eased * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, target])

  return <span ref={ref}>{prefix}{count.toLocaleString('pt-BR')}{suffix}</span>
}

const stats = [
  {
    number: 300000, prefix: '+', label: 'Usuários Ativos',
    color: 'cam-purple',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    number: 400, prefix: '+', label: 'Parceiros e Franquias',
    color: 'cam-cyan',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  },
  {
    number: 50, prefix: '+', label: 'Cidades Apoiadas',
    color: 'cam-green',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    number: 10, prefix: '+', suffix: ' ton', label: 'Drogas Apreendidas',
    color: 'red-400',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    number: 30, prefix: 'R$', suffix: ' mi', label: 'Prejuízo ao Crime',
    color: 'amber-400',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    number: 450, prefix: '+', label: 'Veículos Recuperados',
    color: 'cam-purple-soft',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
  },
]

const colorMap = {
  'cam-purple': { bg: 'bg-cam-purple/15', text: 'text-cam-purple', number: 'text-cam-purple', border: 'border-cam-purple/20', hoverBorder: 'hover:border-cam-purple/40' },
  'cam-cyan': { bg: 'bg-cam-cyan/15', text: 'text-cam-cyan', number: 'text-cam-cyan', border: 'border-cam-cyan/15', hoverBorder: 'hover:border-cam-cyan/30' },
  'cam-green': { bg: 'bg-cam-green/15', text: 'text-cam-green', number: 'text-cam-green', border: 'border-cam-green/15', hoverBorder: 'hover:border-cam-green/30' },
  'red-400': { bg: 'bg-red-400/15', text: 'text-red-400', number: 'text-red-400', border: 'border-red-400/15', hoverBorder: 'hover:border-red-400/30' },
  'amber-400': { bg: 'bg-amber-400/15', text: 'text-amber-400', number: 'text-amber-400', border: 'border-amber-400/15', hoverBorder: 'hover:border-amber-400/30' },
  'cam-purple-soft': { bg: 'bg-cam-purple-soft/15', text: 'text-cam-purple-soft', number: 'text-cam-purple-soft', border: 'border-cam-purple-soft/15', hoverBorder: 'hover:border-cam-purple-soft/30' },
}

export default function SocialProof() {
  const sectionRef = useReveal()

  return (
    <section id="resultados" className="relative py-20 sm:py-28">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal text-center mb-14 sm:mb-16">
          <span className="section-label justify-center">Resultados</span>
          <h2 className="section-title mb-4">
            Números que falam
            <br />
            <span className="text-cam-purple">por si mesmos.</span>
          </h2>
          <p className="section-desc mx-auto text-center">
            O impacto real da Camerite em segurança pública, condomínios, empresas e cidades de todo o Brasil.
          </p>
        </div>

        <div className="reveal reveal-delay-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {stats.map((stat, i) => {
            const c = colorMap[stat.color]
            return (
              <div
                key={i}
                className={`group text-center rounded-2xl border ${c.border} ${c.hoverBorder} bg-cam-surface/30 p-5 sm:p-6 transition-all duration-500 hover:bg-cam-surface/50`}
              >
                <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${c.bg} ${c.text} mb-4 transition-transform duration-500 group-hover:scale-110`}>
                  {stat.icon}
                </span>
                <div className={`text-2xl sm:text-3xl font-display font-bold ${c.number} mb-1.5`}>
                  <AnimatedNumber target={stat.number} prefix={stat.prefix} suffix={stat.suffix || ''} />
                </div>
                <p className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
