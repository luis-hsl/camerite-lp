import { useReveal } from '../hooks/useReveal'

const platformFeatures = [
  {
    title: 'Linha do Tempo',
    description: 'Navegue pelas gravacoes e encontre eventos em segundos, sem assistir horas de video.',
  },
  {
    title: 'Downloads',
    description: 'Baixe evidencias instantaneamente para compartilhar com autoridades ou gestores.',
  },
  {
    title: 'Mosaico',
    description: 'Visualize multiplos pontos simultaneamente, ideal para portarias e centrais de controle.',
  },
  {
    title: 'Notificacoes Inteligentes',
    description: 'Receba apenas as notificacoes que importam. Nossa IA filtra o que e relevante.',
  },
  {
    title: 'CS e Suporte',
    description: 'Time dedicado de Customer Success e Suporte Tecnico para o pleno funcionamento da operacao.',
  },
  {
    title: 'App Mobile',
    description: 'Acesse suas cameras de qualquer lugar. Disponivel no Google Play e App Store.',
  },
]

export default function Platform() {
  const sectionRef = useReveal()

  return (
    <section id="plataforma" className="relative py-28">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <div className="reveal mb-5">
              <span className="section-label">Plataforma</span>
            </div>
            <h2 className="reveal reveal-delay-1 section-title mb-4">
              Mais que cameras.
              <br />
              <span className="text-cam-purple">Seu nucleo de inteligencia.</span>
            </h2>
            <p className="reveal reveal-delay-2 section-desc mb-12">
              Integre, controle, visualize e analise multiplos pontos e dados em tempo real. Tudo em uma unica plataforma.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {platformFeatures.map((feature, i) => (
                <div key={i} className="reveal" style={{ transitionDelay: `${0.2 + i * 0.06}s` }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-cam-purple" />
                    <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-[13px] text-zinc-500 leading-relaxed pl-3.5">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* App stores */}
            <div className="reveal reveal-delay-6 flex flex-wrap gap-3 mt-12">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 border border-white/[0.06] hover:border-cam-purple/15 rounded-xl px-5 py-3 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302-2.698-2.302 2.698-2.302zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-zinc-500 leading-none">Disponivel no</div>
                  <div className="text-sm text-white font-semibold">Google Play</div>
                </div>
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 border border-white/[0.06] hover:border-cam-purple/15 rounded-xl px-5 py-3 transition-all duration-300"
              >
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

          {/* Right: Platform screenshots stack */}
          <div className="reveal reveal-delay-3 relative">
            <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
              <img
                src="https://framerusercontent.com/images/CpDDCt4Wt9KCfIHzgPpnfxjCmM.png?width=2528&height=1696"
                alt="Plataforma Camerite"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* Alertas card overlay */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 w-48 rounded-xl overflow-hidden border border-white/[0.06] shadow-2xl">
              <img
                src="/images/alertas-automaticos.png"
                alt="Alertas Automaticos Camerite"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
