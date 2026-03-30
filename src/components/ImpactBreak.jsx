import { useReveal } from '../hooks/useReveal'

const WHATSAPP_LINK = 'https://wa.me/5543936180655?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Camerite.'

export default function ImpactBreak() {
  const sectionRef = useReveal()

  return (
    <section className="relative py-20 overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Image - takes 3 cols */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/[0.04]">
            <img
              src="/images/gravar-entender.png"
              alt="Gravar tudo nao e o mesmo que entender o que aconteceu"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Text - takes 2 cols */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white leading-[1.15] mb-5">
              Gravar tudo nao e o mesmo que{' '}
              <span className="text-cam-purple">entender o que aconteceu.</span>
            </h2>

            <p className="text-[15px] text-zinc-400 leading-relaxed mb-4">
              O problema nao e falta de video. E excesso sem leitura. No momento mais critico, alguem precisa procurar, assistir, voltar, rever horas ate achar o minuto certo.
            </p>

            <p className="text-[15px] text-zinc-500 leading-relaxed mb-8">
              A Camerite usa dados e IA para destacar o que foge do padrao e ajudar voce a agir antes do incidente.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Fale com a Camerite
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
