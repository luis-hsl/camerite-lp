import { useReveal } from '../hooks/useReveal'

export default function AppDemo() {
  const sectionRef = useReveal()

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video */}
          <div className="reveal reveal-delay-1 flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative w-[280px] sm:w-[320px] md:w-[360px]">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cam-purple/20 border border-white/[0.08]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto block"
                >
                  <source src="/videos/app-demo.mp4" type="video/mp4" />
                </video>
                {/* Bottom gradient overlay with text */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-cam-purple via-cam-purple/70 to-transparent flex items-end pb-5 px-5">
                  <p className="text-white text-sm font-medium leading-snug">
                    Cameras acessiveis a qualquer hora, direto do seu celular.
                  </p>
                </div>
              </div>
              {/* Glow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-cam-purple/20 blur-[40px] rounded-full pointer-events-none" />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="reveal mb-5">
              <span className="section-label">App Mobile</span>
            </div>
            <h2 className="reveal reveal-delay-1 section-title mb-4">
              Suas cameras no bolso.
              <br />
              <span className="text-cam-purple">A qualquer hora, de qualquer lugar.</span>
            </h2>
            <p className="reveal reveal-delay-2 section-desc mb-10">
              Receba alertas, assista ao vivo e revise gravacoes direto do celular. Tudo o que a plataforma faz, agora na palma da sua mao.
            </p>

            <div className="reveal reveal-delay-3 flex flex-wrap gap-3">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 border border-white/[0.06] hover:border-cam-purple/15 rounded-xl px-5 py-3 transition-all duration-300">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302-2.698-2.302 2.698-2.302zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-zinc-500 leading-none">Disponivel no</div>
                  <div className="text-sm text-white font-semibold">Google Play</div>
                </div>
              </a>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 border border-white/[0.06] hover:border-cam-purple/15 rounded-xl px-5 py-3 transition-all duration-300">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-zinc-500 leading-none">Baixar na</div>
                  <div className="text-sm text-white font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
