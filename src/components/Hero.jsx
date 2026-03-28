const WHATSAPP_LINK = 'https://wa.me/5543936180655?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Camerite.'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"/>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-camerite-purple rounded-full blur-[120px]"/>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-camerite-cyan rounded-full blur-[150px]"/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-camerite-purple-light rounded-full blur-[200px] opacity-20"/>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 animate-fade-in-up">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
          <span className="text-sm font-medium text-gray-200">+300.000 usuários ativos em todo o Brasil</span>
        </div>

        {/* Main Heading */}
        <h1 className="section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.15s'}}>
          Inteligência Artificial{' '}
          <span className="relative">
            <span className="gradient-text">para suas câmeras</span>
            <svg className="absolute -right-8 -top-4 w-8 h-8 text-camerite-purple-light opacity-60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z"/>
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          Transformando imagens em informação de valor. Monitore, detecte e proteja com a plataforma de videomonitoramento mais completa do Brasil.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{animationDelay: '0.45s'}}>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn text-base sm:text-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Fale com um Especialista
          </a>
          <a
            href="#tecnologias"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105"
          >
            Conheça Nossas Tecnologias
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </a>
        </div>

        {/* Platform Preview */}
        <div className="relative max-w-5xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="relative bg-gradient-to-b from-white/10 to-white/5 rounded-2xl border border-white/10 p-2 shadow-2xl shadow-camerite-purple/20">
            <div className="bg-camerite-purple-dark rounded-xl overflow-hidden">
              {/* Browser-like header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80"/>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80"/>
                  <div className="w-3 h-3 rounded-full bg-green-400/80"/>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white/10 rounded-lg px-4 py-1 text-xs text-gray-400 flex items-center gap-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                    app.camerite.com
                  </div>
                </div>
              </div>
              {/* Dashboard mockup */}
              <div className="p-6 grid grid-cols-3 gap-4 min-h-[300px]">
                <div className="col-span-2 space-y-4">
                  <div className="bg-white/5 rounded-xl aspect-video flex items-center justify-center border border-white/10">
                    <div className="text-center">
                      <svg className="w-12 h-12 mx-auto text-camerite-purple-light mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                      </svg>
                      <p className="text-sm text-gray-400">Câmera ao vivo - HD</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="flex-1 bg-white/5 rounded-lg aspect-video border border-white/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-camerite-purple-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="text-xs text-camerite-purple-light font-semibold mb-2">Notificações</div>
                    {['Movimento detectado', 'Pessoa identificada', 'Placa capturada'].map((n, i) => (
                      <div key={i} className="flex items-center gap-2 py-1.5 border-b border-white/5 last:border-0">
                        <div className="w-2 h-2 bg-camerite-purple rounded-full"/>
                        <span className="text-xs text-gray-400">{n}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="text-xs text-camerite-purple-light font-semibold mb-2">Status</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
                      <span className="text-xs text-gray-300">12 câmeras online</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-camerite-purple/20 rounded-3xl blur-3xl -z-10"/>
        </div>
      </div>
    </section>
  )
}
