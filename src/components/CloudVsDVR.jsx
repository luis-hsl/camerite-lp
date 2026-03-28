const WHATSAPP_LINK = 'https://wa.me/5543936180655?text=Ol%C3%A1!%20Quero%20migrar%20para%20a%20nuvem%20Camerite.'

const dvrProblems = [
  'Vulnerável a furtos e avarias',
  'Falhas de HD frequentes',
  'Manutenção constante',
  'Sem escalabilidade',
]

const cloudBenefits = [
  'Segurança aprimorada',
  'Câmeras centralizadas',
  'Acesso simultâneo',
  'Planos de 1 a 365 dias',
]

export default function CloudVsDVR() {
  return (
    <section id="diferenciais" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-camerite-purple-dark via-[#150832] to-camerite-purple-dark"/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-camerite-purple/20 text-camerite-purple-light text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-camerite-purple/30">
            POR QUE NUVEM?
          </span>
          <h2 className="section-title mb-4">
            Por que nuvem é{' '}
            <span className="gradient-text">indispensável?</span>
          </h2>
          <p className="section-subtitle">
            Uma abordagem inovadora que previne perdas de gravações e oferece agilidade sem precedentes. Diferente do DVR físico, a nuvem garante que suas evidências estejam sempre seguras e acessíveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* DVR Card */}
          <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-400"/>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-display font-bold text-white mb-2">DVR</h3>
              <span className="inline-block bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full">
                Riscos Críticos
              </span>
            </div>
            <ul className="space-y-4">
              {dvrProblems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cloud Card */}
          <div className="bg-camerite-purple/10 border border-camerite-purple/30 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-camerite-purple to-camerite-cyan"/>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Nuvem</h3>
              <span className="inline-block bg-camerite-purple/30 text-camerite-purple-light text-xs font-bold px-3 py-1 rounded-full">
                Segurança Total
              </span>
            </div>
            <ul className="space-y-4">
              {cloudBenefits.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-camerite-purple/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-camerite-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quality badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {['HD', 'Full HD', '4K'].map((q) => (
            <span key={q} className="bg-camerite-purple/20 border border-camerite-purple/30 text-camerite-purple-light font-bold text-sm px-5 py-2 rounded-full">
              {q}
            </span>
          ))}
          {['RTSP', 'P2P', 'RTMP'].map((p) => (
            <span key={p} className="bg-white/5 border border-white/10 text-gray-300 font-bold text-sm px-5 py-2 rounded-full">
              {p}
            </span>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Quero migrar para a Nuvem
          </a>
        </div>
      </div>
    </section>
  )
}
