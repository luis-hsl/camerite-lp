import { useState, useRef, useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'

const WHATSAPP_LINK = 'https://wa.me/5543936180655?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Camerite%20para%20gest%C3%A3o%20p%C3%BAblica.'

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

/* ── Typewriter for terminal lines ── */
function TypewriterLine({ text, delay, started, onDone }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!started) return
    let timeout
    timeout = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
          onDone?.()
        }
      }, 35)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [started, text, delay, onDone])

  return (
    <span>
      {displayed}
      {started && !done && <span className="inline-block w-[2px] h-[1em] bg-red-400 ml-0.5 animate-pulse align-middle" />}
    </span>
  )
}

/* ── Terminal block ── */
function TerminalBlock({ visible }) {
  const [linesDone, setLinesDone] = useState(-1)

  const lines = [
    { prompt: 'buscar', text: 'procurando em 847 horas de gravação...' },
    { prompt: 'filtrar', text: 'nenhum filtro inteligente disponível' },
    { prompt: 'revisar', text: 'reproduzindo frame a frame...' },
    { prompt: 'encontrar', text: 'resultado não encontrado' },
    { prompt: 'tempo', text: '4h 23min gastos. sem evidência.' },
  ]

  return (
    <div className="terminal-block rounded-xl overflow-hidden font-mono text-[11px] sm:text-[13px] leading-relaxed">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.04]"
        style={{ background: 'rgba(20,9,46,0.8)' }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
        <span className="text-[9px] sm:text-[10px] text-zinc-600 ml-1.5 sm:ml-2 tracking-wider uppercase truncate">busca manual · câmeras da cidade</span>
      </div>

      {/* Lines */}
      <div className="p-4 sm:p-5 space-y-2.5">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`transition-opacity duration-500 ${i <= linesDone + 1 ? 'opacity-100' : 'opacity-0'}`}
          >
            <span className="text-zinc-600">$ </span>
            <span className="text-red-400/70">{line.prompt}</span>
            <span className="text-zinc-700"> → </span>
            <span className="text-zinc-500">
              {i <= linesDone + 1 ? (
                <TypewriterLine
                  text={line.text}
                  delay={i * 700}
                  started={visible}
                  onDone={() => setLinesDone(prev => Math.max(prev, i))}
                />
              ) : null}
            </span>
          </div>
        ))}

        {/* Final frustrated line */}
        <div className={`
          pt-3 mt-3 border-t border-red-400/10
          transition-all duration-700
          ${linesDone >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
        `}>
          <span className="text-red-400/80 text-[11px] sm:text-[12px]">
            ⚠ a cidade não pode esperar o play.
          </span>
        </div>
      </div>
    </div>
  )
}

/* ── Data ── */
const insights = [
  'O padrão que se repete',
  'O comportamento fora do normal',
  'O mesmo ponto voltando a dar problema',
  'O risco crescendo aos poucos',
]

const capabilities = [
  { title: 'Proteção de prédios públicos', desc: 'Monitoramento contínuo com detecção de intrusão e alertas fora de horário.' },
  { title: 'Ocorrências e investigação', desc: 'Busca inteligente por rosto, placa ou comportamento. Evidências em segundos.' },
  { title: 'Gestão de eventos e espaços urbanos', desc: 'Contagem de fluxo, detecção de aglomeração e apoio a decisões em tempo real.' },
  { title: 'Planejamento com dados', desc: 'Movimentação, horários críticos, áreas de risco. Mais clareza, menos improviso.' },
]

/* ── Main ── */
export default function CityGov() {
  const sectionRef = useReveal()
  const [termRef, termVisible] = useVisible(0.4)
  const [solRef, solVisible] = useVisible(0.25)
  const [capRef, capVisible] = useVisible(0.15)

  return (
    <section id="cidades" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Divider top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent" />

      {/* Red ambient glow — problem zone */}
      <div className="absolute top-[15%] left-0 w-[60%] max-w-[500px] aspect-square rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(248,113,113,0.04) 0%, transparent 70%)' }}
      />

      {/* Purple ambient glow — solution zone */}
      <div className="absolute top-[55%] right-0 w-[70%] max-w-[600px] aspect-square rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,72,234,0.05) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-[10%] left-0 w-[50%] max-w-[400px] aspect-square rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,72,234,0.03) 0%, transparent 70%)' }}
      />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* ═══════ ACT 1: The Problem ═══════ */}
        <div className="reveal mb-5">
          <span className="section-label">Cidades e Governo</span>
        </div>

        <div className="reveal reveal-delay-1 mb-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] max-w-4xl">
            Gravar tudo não é{' '}
            <span className="citygov-outline-text">o mesmo</span>{' '}
            que entender.
          </h2>
        </div>

        <p className="reveal reveal-delay-2 text-base sm:text-lg text-zinc-500 max-w-xl mb-14 sm:mb-20 leading-relaxed">
          Ruas, escolas, praças, eventos. Um mar de imagens.
          Mas quando algo acontece: <span className="text-zinc-300 italic">"como a gente não viu isso antes?"</span>
        </p>

        {/* Terminal + aside text */}
        <div ref={termRef} className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start mb-24 sm:mb-32">
          <div className="lg:col-span-3">
            <TerminalBlock visible={termVisible} />
          </div>
          <div className={`lg:col-span-2 transition-all duration-700 ${termVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <p className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug mb-4">
              Não é falta de vídeo.<br />
              <span className="text-red-400/80">É excesso sem leitura.</span>
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              No momento mais crítico, alguém precisa procurar, assistir, voltar, rever horas e achar "o minuto certo". Manualmente. Esse é o processo que paralisa a operação quando a cidade mais precisa de resposta.
            </p>
          </div>
        </div>

        {/* ═══════ ACT 2: Solution Zone — wrapped in its own bg ═══════ */}
        <div className="citygov-solution-zone relative rounded-3xl p-4 sm:p-10 md:p-14 mx-0">
          {/* Inner grid pattern */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            <div className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: 'linear-gradient(rgba(123,72,234,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(123,72,234,0.8) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            {/* Top edge glow */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cam-purple/30 to-transparent" />
          </div>

          {/* "com analíticos" label */}
          <div className="flex items-center gap-3 mb-10 sm:mb-14 relative z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-cam-purple animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-cam-purple-soft">com analíticos</span>
            <div className="h-px flex-1 bg-cam-purple/15" />
          </div>

          <div ref={solRef} className="mb-14 sm:mb-16 relative z-10">
            <div className={`transition-all duration-700 ${solVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] max-w-3xl mb-4">
                A imagem deixa de ser arquivo e vira{' '}
                <span className="text-cam-purple">informação.</span>
              </h3>
              <p className="text-base text-zinc-500 max-w-lg mb-10 leading-relaxed">
                O vídeo revela o que importa quando você sabe olhar:
              </p>
            </div>

            {/* Insights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
              {insights.map((text, i) => (
                <div
                  key={i}
                  className={`
                    group flex items-start gap-4 p-4 sm:p-5 rounded-xl
                    border-l-2 border-cam-purple/40
                    bg-cam-purple/[0.04] hover:bg-cam-purple/[0.09]
                    transition-all duration-500
                    ${solVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                  `}
                  style={{ transitionDelay: solVisible ? `${300 + i * 120}ms` : '0ms' }}
                >
                  <span className="font-display font-bold text-xl sm:text-3xl text-cam-purple/50 group-hover:text-cam-purple/70 leading-none transition-colors duration-300 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm sm:text-[15px] text-zinc-300 leading-snug pt-1.5">{text}</p>
                </div>
              ))}
            </div>

            <p className={`
              text-sm text-zinc-500 mt-10 transition-all duration-700
              ${solVisible ? 'opacity-100' : 'opacity-0'}
            `}
            style={{ transitionDelay: '900ms' }}
            >
              Entender não é assistir. <span className="text-cam-purple font-semibold">É interpretar.</span>
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/[0.04] mb-10 sm:mb-14 relative z-10" />

          {/* Capabilities — desktop: static grid / mobile: marquee */}
          <div ref={capRef} className={`mb-10 sm:mb-14 relative z-10 transition-all duration-700 ${capVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

            {/* Desktop: static neon cards grid */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-4">
              {capabilities.map((cap, i) => (
                <div
                  key={i}
                  className={`
                    rounded-xl p-4 citygov-neon-card transition-all duration-500
                    ${capVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                  `}
                  style={{ transitionDelay: capVisible ? `${i * 100}ms` : '0ms' }}
                >
                  <h4 className="text-sm font-semibold text-white mb-1.5 leading-tight">{cap.title}</h4>
                  <p className="text-[13px] text-zinc-400 leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile: marquee */}
            <div className="lg:hidden -mx-4 sm:-mx-10 md:-mx-14 overflow-hidden">

              <div className="flex w-max animate-marquee-slow py-2">
                {[0, 1].map((set) => (
                  <div key={set} className="flex items-stretch gap-4 px-2">
                    {capabilities.map((cap, i) => (
                      <div
                        key={`${set}-${i}`}
                        className="shrink-0 w-[240px] sm:w-[260px] rounded-xl p-4 citygov-neon-card"
                      >
                        <h4 className="text-[13px] font-semibold text-white mb-1.5 leading-tight">{cap.title}</h4>
                        <p className="text-[11px] sm:text-[12px] text-zinc-400 leading-relaxed">{cap.desc}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="reveal reveal-delay-4 relative z-10 text-center pt-6 sm:pt-8 border-t border-white/[0.04]">
            <p className="text-lg sm:text-xl text-zinc-300 mb-8 max-w-xl mx-auto leading-relaxed">
              Cidade que entende o que acontece <span className="text-white font-semibold">age antes</span>, gasta melhor, protege mais.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
              onClick={() => gtag('event', 'conversion', {'send_to': 'AW-16844163935/inNeCLuMt5UcEN-W9t8-'})}
            >
              Leve inteligência para sua operação
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
