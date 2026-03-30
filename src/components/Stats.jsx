import { useState, useEffect, useRef } from 'react'

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
  { number: 300000, prefix: '+', label: 'Usuarios Ativos' },
  { number: 400, prefix: '+', label: 'Parceiros e Franquias' },
  { number: 50, prefix: '+', label: 'Cidades Apoiadas' },
  { number: 10, prefix: '+', suffix: ' ton', label: 'Drogas Apreendidas' },
  { number: 30, prefix: 'R$', suffix: ' mi', label: 'Prejuizo ao Crime' },
  { number: 450, prefix: '+', label: 'Veiculos Recuperados' },
]

export default function Stats() {
  return (
    <section id="resultados" className="relative py-20">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                <AnimatedNumber target={stat.number} prefix={stat.prefix} suffix={stat.suffix || ''} />
              </div>
              <p className="text-[11px] text-zinc-500 uppercase tracking-wider font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-white/5" />
    </section>
  )
}
