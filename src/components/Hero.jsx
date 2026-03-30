import { useReveal } from '../hooks/useReveal'

const WHATSAPP_LINK = 'https://wa.me/5543936180655?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Camerite.'

export default function Hero() {
  const sectionRef = useReveal()

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      <div className="absolute inset-0 bg-cam-base" />
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-cam-surface/40" />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="reveal flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-cam-green" />
              <span className="text-sm text-zinc-400 font-medium">
                +300.000 usuarios ativos no Brasil
              </span>
            </div>

            <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-display font-bold text-white leading-[1.08] mb-6">
              Inteligencia Artificial
              <br />
              <span className="text-cam-purple">para suas cameras</span>
            </h1>

            <p className="reveal reveal-delay-2 text-lg text-zinc-400 leading-relaxed max-w-lg mb-4">
              Suas cameras ja veem. Agora elas podem pensar.
            </p>
            <p className="reveal reveal-delay-2 text-[15px] text-zinc-500 leading-relaxed max-w-lg mb-10">
              Conecte suas cameras atuais a nuvem, previna perdas e tome decisoes baseadas em visao computacional. A plataforma mais completa do Brasil.
            </p>

            <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3">
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
                Conheca as Tecnologias
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06]">
              <img
                src="https://framerusercontent.com/images/q4n1Pz2KkahH6k5WSlo6Z89EQ.png?width=3030&height=2160"
                alt="Plataforma Camerite - Dashboard"
                className="w-full h-auto"
                loading="eager"
              />
              <div className="absolute inset-x-0 h-px bg-cam-cyan/30 animate-scan-line" />
            </div>

            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-cam-surface border border-white/[0.06] rounded-xl p-3.5 shadow-2xl animate-float max-w-[190px]">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-2 h-2 rounded-full bg-cam-purple" />
                <span className="text-[11px] font-semibold text-white">Alerta Detectado</span>
              </div>
              <p className="text-[10px] text-zinc-500">Movimento na Area 3 - Entrada principal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
