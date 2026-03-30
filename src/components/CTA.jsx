import { useReveal } from '../hooks/useReveal'

const WHATSAPP_LINK = 'https://wa.me/5543936180655?text=Ol%C3%A1!%20Quero%20proteger%20meu%20patrim%C3%B4nio%20com%20a%20Camerite.'

export default function CTA() {
  const sectionRef = useReveal()

  return (
    <section className="relative py-28">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal relative rounded-3xl overflow-hidden border border-white/[0.04]">
          {/* Background image from marketing */}
          <div className="absolute inset-0">
            <img
              src="/images/camerite-acao.png"
              alt=""
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-cam-darker/90" />
          </div>

          <div className="relative z-10 p-10 md:p-16 lg:p-20">
            <div className="max-w-2xl">
              <p className="text-sm text-cam-purple-soft font-medium mb-4 tracking-wide">
                Quer escolher os analiticos certos pro seu cenario?
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-[1.1] mb-6">
                Quando a pergunta e clara, a decisao vem{' '}
                <span className="text-cam-purple">mais rapido.</span>
              </h2>

              <p className="text-base text-zinc-400 leading-relaxed mb-10 max-w-lg">
                Fale com um dos nossos especialistas e descubra como a Camerite pode proteger o que e mais importante para voce. Imagem e inteligencia, juntas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base !py-4 !px-10"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Fale com a Camerite
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-zinc-500">
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-cam-green" />
                  +300 mil usuarios
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-cam-green" />
                  +400 parceiros
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-cam-green" />
                  +50 cidades
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-cam-green" />
                  Suporte dedicado
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
