import { useScrollSpy } from '../hooks/useScrollSpy'
import { useReveal } from '../hooks/useReveal'

export default function FeatureShowcase({
  id,
  label,
  title,
  titleHighlight,
  description,
  features,
}) {
  const sectionRef = useReveal()
  const { containerRef, activeIndex } = useScrollSpy(features.length)

  return (
    <section id={id} className="relative py-20 lg:py-0">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="reveal pt-20 lg:pt-28 pb-12 lg:pb-16">
          <span className="section-label">{label}</span>
          <h2 className="section-title mb-4">
            {title}
            {titleHighlight && (
              <>
                <br />
                <span className="text-cam-purple">{titleHighlight}</span>
              </>
            )}
          </h2>
          <p className="section-desc">{description}</p>
        </div>

        {/* Sticky image + scrolling text */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-20 relative">
          {/* LEFT: Sticky image panel */}
          <div className="sticky top-[72px] z-10 h-[45vh] lg:h-auto lg:top-24 lg:self-start lg:z-0 mb-6 lg:mb-0">
            <div className="relative w-full h-full lg:h-[calc(100vh-8rem)] flex items-center justify-center">
              {/* Images stack */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.04] bg-cam-surface/30">
                {features.map((feature, i) => (
                  <img
                    key={i}
                    src={feature.image}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-contain p-2 transition-opacity duration-700 ease-out"
                    style={{ opacity: activeIndex === i ? 1 : 0 }}
                    loading={i < 2 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-cam-base/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                {features.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                      activeIndex === i
                        ? 'bg-cam-purple w-4'
                        : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Scrolling text sections */}
          <div ref={containerRef}>
            {features.map((feature, i) => (
              <div
                key={i}
                data-index={i}
                className="min-h-[50vh] lg:min-h-[70vh] flex items-center py-8 lg:py-12"
              >
                <div
                  className={`transition-all duration-500 ease-out p-6 lg:p-8 rounded-2xl ${
                    activeIndex === i
                      ? 'opacity-100 bg-cam-surface/40 border border-white/[0.04]'
                      : 'opacity-30'
                  }`}
                >
                  {/* Number */}
                  <span className="text-cam-purple font-display font-bold text-sm tracking-[0.15em] mb-3 block">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-1.5 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Subtitle */}
                  {feature.subtitle && (
                    <span className="inline-block text-[11px] font-semibold text-cam-purple-soft uppercase tracking-wider mb-3">
                      {feature.subtitle}
                    </span>
                  )}

                  {/* Question / description */}
                  <p className="text-zinc-400 leading-relaxed mt-3 mb-5 text-[15px]">
                    {feature.question}
                  </p>

                  {/* Funciona em */}
                  {feature.segments && feature.segments.length > 0 && (
                    <div>
                      <span className="text-[11px] text-zinc-600 uppercase tracking-wider font-medium block mb-2">
                        Funciona em:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {feature.segments.map((seg, j) => (
                          <span
                            key={j}
                            className="text-[11px] font-medium text-zinc-500 bg-white/[0.03] border border-white/[0.06] rounded-md px-2.5 py-1"
                          >
                            {seg}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
