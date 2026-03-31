import { useScrollSpy } from '../hooks/useScrollSpy'
import { useReveal } from '../hooks/useReveal'

export default function FeatureShowcase({
  id,
  label,
  title,
  titleHighlight,
  description,
  features,
  reversed = false,
}) {
  const sectionRef = useReveal()
  const { containerRef, activeIndex } = useScrollSpy(features.length)

  return (
    <section id={id} className="relative overflow-x-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="reveal pt-20 sm:pt-24 lg:pt-28 pb-10 lg:pb-16">
          <span className="section-label">{label}</span>
          <h2 className="section-title mb-4">
            {title}
            {titleHighlight && (
              <>
                <br className="hidden sm:block" />
                <span className="text-cam-purple"> {titleHighlight}</span>
              </>
            )}
          </h2>
          <p className="section-desc">{description}</p>
        </div>

        {/* Sticky image + scrolling text */}
        <div className={`lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 relative`}>
          {/* Sticky image panel */}
          <div className={`sticky top-[72px] lg:top-24 self-start z-10 ${reversed ? 'lg:order-2' : ''}`}>
            <div className="relative h-[280px] sm:h-[340px] lg:h-[calc(100vh-8rem)]">
              {/* Images */}
              <div className="relative w-full h-full rounded-xl lg:rounded-2xl overflow-hidden bg-cam-surface/30">
                {features.map((feature, i) => (
                  <img
                    key={i}
                    src={feature.image}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-out"
                    style={{ opacity: activeIndex === i ? 1 : 0 }}
                    loading={i < 2 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5">
                <div
                  className="h-full bg-cam-purple transition-all duration-500 ease-out"
                  style={{ width: `${((activeIndex + 1) / features.length) * 100}%` }}
                />
              </div>

              {/* Bottom fade on mobile - creates smooth transition into text */}
              <div className="lg:hidden absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-cam-base to-transparent" />
            </div>
          </div>

          {/* Scrolling text sections */}
          <div ref={containerRef} className={`relative z-20 bg-cam-base lg:bg-transparent ${reversed ? 'lg:order-1' : ''}`}>
            {features.map((feature, i) => (
              <div
                key={i}
                data-index={i}
                className="min-h-[50vh] sm:min-h-[55vh] lg:min-h-[70vh] flex items-center"
              >
                <div
                  className={`py-5 sm:py-6 lg:p-8 lg:rounded-2xl w-full transition-opacity duration-500 ${
                    activeIndex === i
                      ? 'opacity-100 lg:bg-cam-surface/40 lg:border lg:border-white/[0.04]'
                      : 'opacity-20'
                  }`}
                >
                  <span className="text-cam-purple font-display font-bold text-xs sm:text-sm tracking-[0.15em] mb-2 block">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white mb-1 leading-tight">
                    {feature.title}
                  </h3>

                  {feature.subtitle && (
                    <span className="inline-block text-[11px] font-semibold text-cam-purple-soft uppercase tracking-wider mb-2">
                      {feature.subtitle}
                    </span>
                  )}

                  <p className="text-sm sm:text-[15px] text-zinc-400 leading-relaxed mt-2 mb-4">
                    {feature.question}
                  </p>

                  {feature.segments && feature.segments.length > 0 && (
                    <div>
                      <span className="text-[10px] text-zinc-600 uppercase tracking-wider font-medium block mb-1.5">
                        Funciona em:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {feature.segments.map((seg, j) => (
                          <span
                            key={j}
                            className="text-[10px] sm:text-[11px] font-medium text-zinc-500 bg-white/[0.03] border border-white/[0.06] rounded-md px-2 py-0.5 sm:py-1"
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
