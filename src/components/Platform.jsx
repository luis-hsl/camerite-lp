import { useReveal } from '../hooks/useReveal'

const platformFeatures = [
  {
    title: 'Linha do Tempo',
    description: 'Encontre o momento exato em segundos. Sem assistir horas de vídeo.',
  },
  {
    title: 'Downloads',
    description: 'Baixe a evidência na hora. Compartilhe com quem precisa em um clique.',
  },
  {
    title: 'Mosaico',
    description: 'Todas as câmeras na mesma tela. Perfeito pra portaria e central de monitoramento.',
  },
  {
    title: 'Notificações',
    description: 'Só chega o que importa. A IA separa o relevante do ruído.',
  },
  {
    title: 'Suporte dedicado',
    description: 'Time de CS e suporte técnico pra garantir que tudo funcione. Sempre.',
  },
  {
    title: 'App no celular',
    description: 'Suas câmeras no bolso. Disponível pra Android e iOS.',
  },
]

export default function Platform() {
  const sectionRef = useReveal()

  return (
    <section id="plataforma" className="relative py-28">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="reveal mb-5">
              <span className="section-label">Plataforma</span>
            </div>
            <h2 className="reveal reveal-delay-1 section-title mb-4">
              Uma plataforma. Todas as
              <br />
              <span className="text-cam-purple">câmeras. Todas as respostas.</span>
            </h2>
            <p className="reveal reveal-delay-2 section-desc mb-12">
              Você não precisa de 5 sistemas diferentes. Integre, visualize, analise e tome decisões em um único lugar.
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

          </div>

          <div className="reveal reveal-delay-3 relative">
            {/* Dashboard image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06]">
              <img
                src="/images/plataforma-dashboard.png"
                alt="Plataforma Camerite — Dashboard com câmeras ao vivo, notificações, reconhecimento facial e app mobile"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-14 bg-cam-purple/12 blur-[50px] rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
