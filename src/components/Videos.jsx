const WHATSAPP_LINK = 'https://wa.me/5543936180655?text=Ol%C3%A1!%20Vi%20os%20v%C3%ADdeos%20e%20quero%20saber%20mais%20sobre%20a%20Camerite.'

const videos = [
  {
    title: 'Detecção de Movimento em Ação',
    description: 'Veja como a IA identifica movimentos suspeitos e envia alertas em tempo real.',
    embedId: 'dQw4w9WgXcQ', // Placeholder - substituir por vídeos reais da Camerite
    tag: 'Detecção',
  },
  {
    title: 'Leitura de Placas AutoOCR',
    description: 'Demonstração da tecnologia AutoOCR capturando e identificando placas de veículos automaticamente.',
    embedId: 'dQw4w9WgXcQ', // Placeholder
    tag: 'AutoOCR',
  },
  {
    title: 'Rede Colaborativa',
    description: 'Como a comunidade se une para uma segurança mais eficiente com a rede colaborativa Camerite.',
    embedId: 'dQw4w9WgXcQ', // Placeholder
    tag: 'Rede',
  },
]

export default function Videos() {
  return (
    <section id="videos" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-camerite-purple-dark"/>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-camerite-purple rounded-full blur-[250px]"/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-camerite-purple/20 text-camerite-purple-light text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-camerite-purple/30">
            VEJA EM AÇÃO
          </span>
          <h2 className="section-title mb-4">
            Como funciona na{' '}
            <span className="gradient-text">prática</span>
          </h2>
          <p className="section-subtitle">
            Assista a demonstrações reais das nossas tecnologias em funcionamento e veja por que somos a plataforma mais completa do Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <div key={i} className="card-feature group overflow-hidden p-0">
              <div className="relative aspect-video bg-camerite-purple-deep">
                {/* Video placeholder - substituir pelos embed reais */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-camerite-purple/20 to-camerite-purple-dark/60">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 group-hover:bg-white/30 group-hover:scale-110 transition-all cursor-pointer">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-400">Clique para assistir</span>
                </div>
                {/* Uncomment below and replace embedId for real YouTube embeds */}
                {/*
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                */}
              </div>
              <div className="p-5">
                <span className="inline-block text-[10px] font-bold tracking-wider text-camerite-purple-light bg-camerite-purple/20 px-2.5 py-1 rounded-full mb-3 uppercase">
                  {video.tag}
                </span>
                <h3 className="text-lg font-display font-bold text-white mb-2">{video.title}</h3>
                <p className="text-gray-400 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Quero ver uma demonstração ao vivo
          </a>
        </div>
      </div>
    </section>
  )
}
