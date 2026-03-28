const WHATSAPP_LINK = 'https://wa.me/5543936180655?text=Ol%C3%A1!%20Quero%20conhecer%20a%20plataforma%20Camerite.'

const platformFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    ),
    title: 'Linha do Tempo',
    description: 'Navegue rapidamente pelas gravações e encontre eventos em segundos, sem perder tempo assistindo horas de vídeo.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
    ),
    title: 'Downloads',
    description: 'Baixe evidências instantaneamente para compartilhar com autoridades ou gestores.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"/></svg>
    ),
    title: 'Mosaico',
    description: 'Visualize múltiplos pontos simultaneamente em uma única tela, ideal para portarias e centrais de controle.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
    ),
    title: 'Notificações Inteligentes',
    description: 'Receba apenas as notificações que realmente importam. Nossa tecnologia filtra o que é relevante para sua segurança.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01"/></svg>
    ),
    title: 'CS e Suporte',
    description: 'Time dedicado de Customer Success e Suporte Técnico para garantir o pleno funcionamento da operação.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
    ),
    title: 'App Mobile',
    description: 'Acesse suas câmeras de qualquer lugar pelo aplicativo. Disponível no Google Play e App Store.',
  },
]

export default function Platform() {
  return (
    <section id="plataforma" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-section"/>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-camerite-purple rounded-full blur-[200px]"/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-camerite-purple/20 text-camerite-purple-light text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-camerite-purple/30">
            MULTIPLATAFORMA
          </span>
          <h2 className="section-title mb-4">
            Plataforma e{' '}
            <span className="gradient-text">Aplicativo</span>
          </h2>
          <p className="section-subtitle">
            Mais do que uma ferramenta de gerenciamento de câmeras, a plataforma Camerite é o seu núcleo de inteligência de vídeo mais completo, rápido e fácil. Integre, controle, visualize e analise múltiplos pontos e dados, em tempo real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {platformFeatures.map((feature, i) => (
            <div key={i} className="card-feature group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-camerite-purple/20 rounded-xl text-camerite-purple-light mb-4 group-hover:bg-camerite-purple/30 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* App Store Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl px-6 py-3 transition-all hover:scale-105">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302-2.698-2.302 2.698-2.302zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
            </svg>
            <div>
              <div className="text-[10px] text-gray-400 uppercase">Disponível no</div>
              <div className="text-white font-bold">Google Play</div>
            </div>
          </a>
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl px-6 py-3 transition-all hover:scale-105">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div>
              <div className="text-[10px] text-gray-400 uppercase">Baixar na</div>
              <div className="text-white font-bold">App Store</div>
            </div>
          </a>
        </div>

        <div className="text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Quero conhecer a plataforma
          </a>
        </div>
      </div>
    </section>
  )
}
