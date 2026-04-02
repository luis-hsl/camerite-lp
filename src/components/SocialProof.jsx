import { useState, useEffect, useRef, useCallback } from 'react'
import { useReveal } from '../hooks/useReveal'

/* ── Animated counter with easing ── */
function AnimatedNumber({ target, suffix = '', prefix = '', started }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    const duration = 2200
    const startTime = performance.now()
    let raf
    function tick(now) {
      const p = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setCount(Math.floor(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, target])

  return <>{prefix}{count.toLocaleString('pt-BR')}{suffix}</>
}

/* ── Stat card with glow border + scan effect ── */
function StatCard({ stat, index, isHero }) {
  const cardRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delay = index * 120

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        stat-card group relative overflow-hidden rounded-2xl
        ${isHero ? 'col-span-1 min-[400px]:col-span-2 row-span-1 md:col-span-2' : 'col-span-1'}
        transition-all duration-700 ease-out cursor-default
        ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.96]'}
      `}
      style={{
        transitionDelay: visible ? `${delay}ms` : '0ms',
        '--accent': stat.accentColor,
        '--accent-rgb': stat.accentRgb,
      }}
    >
      {/* Glow border */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(var(--accent-rgb), ${hovered ? 0.25 : 0.08}) 0%, transparent 50%, rgba(var(--accent-rgb), ${hovered ? 0.15 : 0.04}) 100%)`,
          boxShadow: hovered ? `inset 0 0 0 1px rgba(var(--accent-rgb), 0.35), 0 0 40px -10px rgba(var(--accent-rgb), 0.25)` : `inset 0 0 0 1px rgba(var(--accent-rgb), 0.1)`,
        }}
      />

      {/* Scan line effect on hover */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
        style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.4s' }}
      >
        <div
          className="absolute left-0 right-0 h-[1px]"
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgba(var(--accent-rgb), 0.6) 50%, transparent 100%)`,
            animation: hovered ? 'statScanLine 2s linear infinite' : 'none',
          }}
        />
      </div>

      {/* Background noise texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-2xl"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '128px 128px' }}
      />

      {/* Card content */}
      <div className={`relative z-10 ${isHero ? 'p-4 sm:p-8 md:p-10' : 'p-4 sm:p-6 md:p-7'} flex flex-col ${isHero ? 'items-start' : 'items-center text-center'}`}>
        {/* Icon */}
        <span
          className={`
            inline-flex items-center justify-center rounded-xl mb-4
            transition-all duration-500 ease-out
            ${isHero ? 'w-12 h-12' : 'w-10 h-10'}
            ${hovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'}
          `}
          style={{
            background: `rgba(var(--accent-rgb), ${hovered ? 0.2 : 0.12})`,
            color: `var(--accent)`,
          }}
        >
          {stat.icon}
        </span>

        {/* Number */}
        <div
          className={`
            font-display font-bold leading-none mb-2 tracking-tight
            ${isHero ? 'text-4xl sm:text-5xl md:text-6xl' : 'text-2xl sm:text-3xl md:text-4xl'}
          `}
          style={{ color: `var(--accent)` }}
        >
          <AnimatedNumber
            target={stat.number}
            prefix={stat.prefix}
            suffix={stat.suffix || ''}
            started={visible}
          />
        </div>

        {/* Label */}
        <p className={`
          uppercase tracking-[0.15em] font-medium text-zinc-400
          ${isHero ? 'text-xs sm:text-sm' : 'text-[10px] sm:text-xs'}
        `}>
          {stat.label}
        </p>

        {/* Hero badge */}
        {isHero && (
          <div
            className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold whitespace-nowrap"
            style={{
              background: `rgba(var(--accent-rgb), 0.1)`,
              color: `rgba(var(--accent-rgb), 0.8)`,
              border: `1px solid rgba(var(--accent-rgb), 0.15)`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: `var(--accent)` }} />
            Monitoramento ativo
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Stats data ── */
const stats = [
  {
    number: 300000, prefix: '+', label: 'Usuários Ativos',
    accentColor: '#7B48EA', accentRgb: '123,72,234',
    hero: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    number: 400, prefix: '+', label: 'Parceiros e Franquias',
    accentColor: '#33CCF0', accentRgb: '51,204,240',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  },
  {
    number: 50, prefix: '+', label: 'Cidades Apoiadas',
    accentColor: '#5CE6AC', accentRgb: '92,230,172',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    number: 10, prefix: '+', suffix: ' ton', label: 'Drogas Apreendidas',
    accentColor: '#F87171', accentRgb: '248,113,113',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    number: 30, prefix: 'R$', suffix: ' mi', label: 'Prejuízo ao Crime',
    accentColor: '#FBBF24', accentRgb: '251,191,36',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    number: 450, prefix: '+', label: 'Veículos Recuperados',
    accentColor: '#A785F1', accentRgb: '167,133,241',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
  },
]

/* ── Main component ── */
export default function SocialProof() {
  const sectionRef = useReveal()

  return (
    <section id="resultados" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Ambient grid background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(123,72,234,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(123,72,234,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)',
        }}
      />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-14 sm:mb-18">
          <span className="section-label justify-center">Resultados</span>
          <h2 className="section-title mb-4">
            Números que falam
            <br />
            <span className="text-cam-purple">por si mesmos.</span>
          </h2>
          <p className="section-desc mx-auto text-center">
            Isso aqui não é projeção. É o que já aconteceu com quem usa a Camerite.
          </p>
        </div>

        {/* Bento grid */}
        <div className="reveal reveal-delay-1 grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, i) => (
            <StatCard
              key={i}
              stat={stat}
              index={i}
              isHero={stat.hero}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
