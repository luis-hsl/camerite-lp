import { useState, useRef, useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'

const WHATSAPP_LINK = 'https://wa.me/5543936180655?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Camerite.'

export default function Hero() {
  const videoRef = useRef(null)
  const videoContainerRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  // Pause and mute when video scrolls out of view
  useEffect(() => {
    const el = videoContainerRef.current
    const vid = videoRef.current
    if (!el || !vid) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          vid.pause()
          vid.muted = true
          setIsMuted(true)
        } else if (vid.paused && !vid.ended) {
          vid.play().catch(() => {})
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  const sectionRef = useReveal()

  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-screen flex items-center pt-[72px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cam-base" />
      <img
        src="/images/hero-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center sm:object-bottom pointer-events-none"
      />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-16 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div>
            {/* Mobile — capability-led, curiosity hook */}
            <h1 className="reveal reveal-delay-1 sm:hidden text-[1.6rem] min-[400px]:text-[1.85rem] font-display font-bold text-white leading-[1.1] mb-3">
              Leitura de placas. Reconhecimento facial. Alertas em <span className="text-cam-purple">tempo real.</span>
            </h1>
            <p className="reveal reveal-delay-2 sm:hidden text-sm text-zinc-400 leading-relaxed max-w-xs mb-1">
              Com as câmeras que você já tem.
            </p>

            {/* Desktop — full copy */}
            <h1 className="reveal reveal-delay-1 hidden sm:block text-5xl lg:text-[3.5rem] xl:text-[4rem] font-display font-bold text-white leading-[1.06] mb-5">
              Leitura de placas. Busca por rosto. Alertas em <span className="text-cam-purple">tempo real.</span>
            </h1>
            <p className="reveal reveal-delay-2 hidden sm:block text-lg md:text-xl text-zinc-400 leading-relaxed max-w-lg mb-3">
              Tudo isso com as câmeras que você já tem instaladas. Sem trocar equipamento, sem obra.
            </p>
            <p className="reveal reveal-delay-2 hidden sm:block text-[15px] text-zinc-600 leading-relaxed max-w-lg mb-8">
              Conecte suas câmeras à nuvem e pare de depender de alguém assistindo tela o dia inteiro.
            </p>

            <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3 mb-6 sm:mb-10 mt-6 sm:mt-0">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Fale com um Especialista
              </a>
              <a href="#tecnologias" className="btn-secondary">
                Conheça as Tecnologias
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="reveal reveal-delay-4 hidden sm:flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
              <div>
                <div className="font-display font-bold text-white">+300 mil</div>
                <div className="text-[10px] text-zinc-600 uppercase tracking-wider">usuários</div>
              </div>
              <div className="w-px h-8 bg-white/[0.06]" />
              <div>
                <div className="font-display font-bold text-white">+400</div>
                <div className="text-[10px] text-zinc-600 uppercase tracking-wider">parceiros</div>
              </div>
              <div className="w-px h-8 bg-white/[0.06]" />
              <div>
                <div className="font-display font-bold text-white">+50</div>
                <div className="text-[10px] text-zinc-600 uppercase tracking-wider">cidades</div>
              </div>
            </div>
          </div>

          {/* Right - Facial Recognition Demo */}
          <div className="reveal reveal-delay-2 relative">
            {/* Main video - autoplay demo */}
            <div ref={videoContainerRef} className="relative rounded-2xl overflow-hidden border-2 border-cam-purple/25 shadow-2xl shadow-cam-purple/10" style={{ boxShadow: '0 0 50px -10px rgba(123,72,234,0.2), 0 25px 50px -12px rgba(0,0,0,0.5)' }}>
              <video
                ref={videoRef}
                src="/hero-video.mp4"
                autoPlay
                muted
                playsInline
                className="w-full h-auto block"
                onEnded={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = true
                    setIsMuted(true)
                  }
                }}
              />
              {/* Vignette */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)] pointer-events-none rounded-2xl" />
              {/* Mute toggle */}
              <button
                onClick={toggleMute}
                className="absolute bottom-3 right-3 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-cam-surface/80 backdrop-blur-sm border border-white/10 hover:border-cam-purple/30 transition-all duration-300"
                aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
              >
                {isMuted ? (
                  <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-cam-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>
            </div>


            {/* Glow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-16 bg-cam-purple/15 blur-[50px] rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
