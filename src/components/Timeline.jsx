const timelineItems = [
  {
    year: '1980s',
    title: 'Câmeras de Segurança',
    description: 'Surgem as primeiras câmeras de segurança analógicas.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
    ),
    active: false,
  },
  {
    year: '2000s',
    title: 'Câmeras IP',
    description: 'Chegam as câmeras IP com conexão digital.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0"/></svg>
    ),
    active: false,
  },
  {
    year: '2010s',
    title: 'Gravação em Nuvem',
    description: 'A chegada da gravação em nuvem revoluciona o mercado.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
    ),
    active: false,
  },
  {
    year: '2020s',
    title: 'IAs para Câmeras',
    description: 'As IAs para câmeras entram em cena. É aqui que a Camerite lidera.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    ),
    active: true,
  },
]

const pillars = [
  { icon: '🔒', title: 'Segurança e Atualização Automáticas' },
  { icon: '⚡', title: 'Escalabilidade e Performance' },
  { icon: '📈', title: 'Alta Capacidade de Escalonamento' },
]

export default function Timeline() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-camerite-purple-dark to-camerite-purple-deep"/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-camerite-purple/20 text-camerite-purple-light text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-camerite-purple/30">
            EVOLUÇÃO DA SEGURANÇA
          </span>
          <h2 className="section-title mb-4">
            A evolução das <span className="gradient-text">câmeras de segurança</span>
          </h2>
          <p className="section-subtitle">
            Precisamos de tecnologias que nos guiem e ampliem nossas capacidades.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {timelineItems.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 text-center border transition-all duration-300 ${
                item.active
                  ? 'bg-camerite-purple/20 border-camerite-purple/50 shadow-lg shadow-camerite-purple/10'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 ${
                item.active ? 'bg-camerite-purple text-white' : 'bg-white/10 text-gray-400'
              }`}>
                {item.icon}
              </div>
              <div className={`text-xl font-display font-bold mb-1 ${item.active ? 'text-camerite-purple-light' : 'text-white'}`}>
                {item.year}
              </div>
              <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
              <p className="text-xs text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div key={i} className="card-feature text-center">
              <div className="text-3xl mb-3">{pillar.icon}</div>
              <h4 className="text-white font-display font-bold">{pillar.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
