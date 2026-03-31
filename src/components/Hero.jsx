import { useReveal } from '../hooks/useReveal'

const WHATSAPP_LINK = 'https://wa.me/5543936180655?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Camerite.'

export default function Hero() {
  const sectionRef = useReveal()

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cam-base" />
      <img
        src="/images/hero-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
      />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div>
            <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-display font-bold text-white leading-[1.06] mb-5">
              Inteligência Artificial
              <br />
              para suas <span className="text-cam-purple">câmeras</span>
            </h1>

            <p className="reveal reveal-delay-2 text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-lg mb-3">
              Transforme qualquer sistema de monitoramento em uma central de dados ativa.
            </p>
            <p className="reveal reveal-delay-2 text-[15px] text-zinc-600 leading-relaxed max-w-lg mb-8">
              Conecte suas câmeras atuais à nuvem, previna perdas e tome decisões baseadas em visão computacional. Sem trocar equipamento.
            </p>

            <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3 mb-10">
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
            <div className="reveal reveal-delay-4 flex items-center gap-6 text-sm">
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
          <div className="reveal reveal-delay-2 relative overflow-hidden">
            {/* Main image - person being detected with facial comparison */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-cam-purple/10">
              <img
                src="/images/hero-facial-full.png"
                alt="Reconhecimento facial Camerite — pessoa detectada com comparação de rosto cadastrado, 91% de match"
                className="w-full h-auto"
                loading="eager"
              />
              {/* Scan line */}
              <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cam-cyan/40 to-transparent animate-scan-line pointer-events-none" />
              {/* Subtle vignette */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)] pointer-events-none rounded-2xl" />
            </div>

            {/* Floating label - top */}
            <div className="absolute -top-3 left-4 sm:left-6 z-20">
              <div className="flex items-center gap-2 bg-cam-surface/95 backdrop-blur-xl border border-cam-purple/25 rounded-full px-3 py-1.5 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-cam-green animate-pulse" />
                <span className="text-[11px] font-mono font-medium text-cam-purple-soft tracking-wide">RECONHECIMENTO FACIAL ATIVO</span>
              </div>
            </div>

            {/* Floating analytics card - bottom right */}
            <div className="hidden sm:block absolute -bottom-4 -right-3 md:-right-6 z-20 animate-float">
              <div className="bg-cam-surface/95 backdrop-blur-xl border border-white/[0.08] rounded-xl px-4 py-3 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cam-purple/15 flex items-center justify-center">
                    <svg className="w-5 h-5 text-cam-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">Identidade confirmada</span>
                    <span className="text-[10px] text-zinc-500">Match 91% · Cadastro verificado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating camera info - bottom left */}
            <div className="hidden md:flex absolute -bottom-4 -left-3 md:-left-6 z-20 items-center gap-2 bg-cam-surface/95 backdrop-blur-xl border border-white/[0.08] rounded-lg px-3 py-2 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
              <svg className="w-4 h-4 text-cam-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <div>
                <span className="text-[10px] font-semibold text-white block leading-tight">6 analíticos ativos</span>
                <span className="text-[9px] text-zinc-500">Detecção · OCR · Facial</span>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-16 bg-cam-purple/15 blur-[50px] rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
