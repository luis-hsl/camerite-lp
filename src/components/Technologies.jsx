const WHATSAPP_LINK = 'https://wa.me/5543936180655?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Camerite.'

const technologies = [
  {
    tag: 'NUVEM DE CÂMERAS',
    title: 'Conexão e Nuvem',
    description: 'Conexão de câmeras fácil e rápida, com suporte a dezenas de fabricantes e modelos. Armazenamento escalável, atualizado e seguro. Planos de 1 a 365 dias em HD, Full HD e 4K.',
    features: ['Suporte RTSP, P2P e RTMP', 'HD, Full HD e 4K', 'Armazenamento de 1 a 365 dias', 'Segurança aprimorada'],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
    ),
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    tag: 'INTELIGÊNCIA ARTIFICIAL',
    title: 'Detecção de Movimento',
    description: 'Tecnologia que identifica movimentos nas imagens, acionando alertas e otimizando a gravação para eventos relevantes. Programe dias e horários específicos para receber notificações.',
    features: ['Alertas personalizados', 'Definição de áreas', 'Agendamento de notificações', 'Sensibilidade ajustável'],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
    ),
    gradient: 'from-purple-500 to-violet-400',
  },
  {
    tag: 'DETECÇÃO E PERMANÊNCIA',
    title: 'Detecção de Pessoas',
    description: 'Tecnologia que identifica e contabiliza automaticamente pessoas e objetos em áreas monitoradas. Configure alertas de permanência: se alguém ultrapassar o tempo limite, o sistema gera um alerta imediato.',
    features: ['Contagem em tempo real', 'Alerta de permanência', 'Análise de fluxo', 'Relatórios analíticos'],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
    ),
    gradient: 'from-cyan-500 to-blue-400',
  },
  {
    tag: 'LEITURA DE PLACA',
    title: 'AutoOCR e Câmera LPR',
    description: 'O AutoOCR incorpora leitura de placas diretamente nas imagens captadas por qualquer modelo de câmera. Cadastre placas de veículos suspeitos e receba alertas instantâneos (Web e App).',
    features: ['Leitura por qualquer câmera', 'Blacklist e alertas', 'Registro de até 1 ano', 'Busca parcial de placas'],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7"/><rect x="2" y="4" width="20" height="6" rx="1" stroke="currentColor" strokeWidth={1.5} fill="none"/></svg>
    ),
    gradient: 'from-orange-500 to-amber-400',
  },
  {
    tag: 'SINAIS E EVIDÊNCIAS',
    title: 'Reconhecimento Facial',
    description: 'As soluções inteligentes ampliam a capacidade de monitoramento e análise em tempo real. Busca por detecção, alerta, foto ou grupo. Gerenciamento completo de faces cadastradas.',
    features: ['Busca por detecção', 'Busca por foto', 'Gerenciamento de faces', 'Alertas automáticos'],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>
    ),
    gradient: 'from-pink-500 to-rose-400',
  },
  {
    tag: 'BUSCA AVANÇADA',
    title: 'Análise de Rotas com IA',
    description: 'Ferramenta de inteligência artificial que redefine abordagens investigativas. Combine múltiplos critérios e filtros para localizar pessoas, veículos ou objetos em uma ou várias câmeras.',
    features: ['Busca por pessoa, veículo, bicicleta', 'Simulação de rotas', 'Relatórios investigativos', 'Filtros avançados'],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
    ),
    gradient: 'from-emerald-500 to-green-400',
  },
  {
    tag: 'VÁ ALÉM DO SEU LOCAL',
    title: 'Rede Colaborativa',
    description: 'Ao unir forças e criar uma malha de câmeras comunitária, todos os moradores se beneficiam. Compartilhe imagens e gravações com vizinhos ou autoridades de forma rápida e segura.',
    features: ['Chat colaborativo', 'Alerta de emergência', 'Compartilhamento seguro', 'Cobertura conjunta'],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
    ),
    gradient: 'from-violet-500 to-purple-400',
  },
  {
    tag: 'MONITORAMENTO ATIVO',
    title: 'Ronda Virtual',
    description: 'O sistema alterna a visualização dos mosaicos, garantindo a vigilância organizada de todas as áreas sem intervenção manual. Mosaico para visualizar múltiplos pontos simultaneamente.',
    features: ['Ronda automatizada', 'Mosaico de câmeras', 'Intervalos configuráveis', 'Centrais de controle'],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"/></svg>
    ),
    gradient: 'from-indigo-500 to-blue-400',
  },
]

export default function Technologies() {
  return (
    <section id="tecnologias" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-camerite-purple-dark"/>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-camerite-purple rounded-full blur-[200px]"/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-camerite-purple/20 text-camerite-purple-light text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-camerite-purple/30">
            NOSSAS TECNOLOGIAS
          </span>
          <h2 className="section-title mb-4">
            Tudo que você precisa em{' '}
            <span className="gradient-text">uma plataforma</span>
          </h2>
          <p className="section-subtitle">
            Da gravação em nuvem ao reconhecimento facial, a Camerite oferece o ecossistema mais completo de videomonitoramento inteligente do Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, i) => (
            <div key={i} className="card-feature group relative overflow-hidden">
              {/* Gradient accent top */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}/>

              <span className="inline-block text-[10px] font-bold tracking-wider text-camerite-purple-light bg-camerite-purple/20 px-2.5 py-1 rounded-full mb-4 uppercase">
                {tech.tag}
              </span>

              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${tech.gradient} bg-opacity-20 text-white mb-4`}>
                {tech.icon}
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-3">{tech.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{tech.description}</p>

              <ul className="space-y-2">
                {tech.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-camerite-purple-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
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
            Quero saber mais sobre as tecnologias
          </a>
        </div>
      </div>
    </section>
  )
}
