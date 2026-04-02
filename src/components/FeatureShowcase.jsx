import { useState, useRef, useEffect, useCallback } from 'react'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useReveal } from '../hooks/useReveal'

/* ─── Mobile Horizontal Carousel with Peek ─── */
function MobileCarousel({ features }) {
  const scrollRef = useRef(null)
  const [active, setActive] = useState(0)

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.firstElementChild?.offsetWidth || 1
    const idx = Math.round(el.scrollLeft / cardWidth)
    setActive(Math.min(idx, features.length - 1))
  }, [features.length])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div>
      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide -mx-5 px-5 sm:-mx-8 sm:px-8 pb-6"
      >
        {features.map((feature, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-[80%] min-w-[260px] sm:w-[80%]"
          >
            <div
              className="rounded-2xl overflow-hidden border border-white/[0.06] bg-[#110830] transition-all duration-300"
              style={{
                opacity: active === i ? 1 : 0.5,
                transform: active === i ? 'scale(1)' : 'scale(0.97)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
              }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] bg-cam-base/60 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                  loading={i < 2 ? 'eager' : 'lazy'}
                />
                {/* Counter */}
                <span className="absolute top-3 left-3 font-mono text-[10px] font-bold tracking-wider text-cam-purple-soft bg-cam-base/70 backdrop-blur-sm border border-cam-purple/15 rounded-full px-2.5 py-1">
                  {String(i + 1).padStart(2, '0')}<span className="text-zinc-600 mx-0.5">/</span>{String(features.length).padStart(2, '0')}
                </span>
                {/* Subtitle pill */}
                {feature.subtitle && (
                  <span className="absolute top-3 right-3 text-[9px] font-bold text-white bg-cam-purple/80 backdrop-blur-sm rounded-full px-2.5 py-1 uppercase tracking-widest">
                    {feature.subtitle}
                  </span>
                )}
                {/* Bottom gradient */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#110830] to-transparent" />
              </div>

              {/* Content */}
              <div className="px-4 pb-5 pt-2 sm:px-5">
                <h3 className="text-base sm:text-lg font-display font-bold text-white leading-snug mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-[13px] sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  {feature.question}
                </p>
                {feature.segments && feature.segments.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {feature.segments.map((seg, j) => (
                      <span
                        key={j}
                        className="text-[9px] sm:text-[11px] font-medium text-zinc-500 bg-white/[0.04] border border-white/[0.06] rounded-lg px-2 py-1 break-words"
                      >
                        {seg}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-1">
        {features.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const el = scrollRef.current
              if (!el) return
              const card = el.children[i]
              if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
            }}
            className={`rounded-full transition-all duration-300 ${
              active === i
                ? 'w-6 h-1.5 bg-cam-purple'
                : 'w-1.5 h-1.5 bg-zinc-700'
            }`}
            aria-label={`Ir para ${features[i].title}`}
          />
        ))}
      </div>
    </div>
  )
}

/* ─── Mobile Image-Only Carousel ─── */
function MobileImageCarousel({ features }) {
  const scrollRef = useRef(null)
  const [active, setActive] = useState(0)

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el || !el.firstElementChild) return
    const gap = 16
    const cardWidth = el.firstElementChild.offsetWidth + gap
    const idx = Math.round(el.scrollLeft / cardWidth)
    setActive(Math.min(Math.max(idx, 0), features.length - 1))
  }, [features.length])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div className="px-5 sm:px-8">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-6"
      >
        {features.map((feature, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-[82%] min-w-[260px] sm:w-[80%]"
          >
            <div
              className="relative rounded-2xl overflow-hidden border-2 border-cam-purple/25 transition-all duration-400"
              style={{
                opacity: active === i ? 1 : 0.4,
                transform: active === i ? 'scale(1)' : 'scale(0.95)',
                boxShadow: active === i ? '0 0 40px -10px rgba(123,72,234,0.2), 0 0 0 1px rgba(123,72,234,0.1)' : 'none',
                transition: 'opacity 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease',
              }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-auto block"
                loading={i < 2 ? 'eager' : 'lazy'}
              />
              {/* Title overlay at bottom */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-10 pb-3 px-4">
                <h3 className="text-sm font-display font-bold text-white leading-tight">
                  {feature.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-1">
        {features.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const el = scrollRef.current
              if (!el) return
              const card = el.children[i]
              if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
            }}
            className={`rounded-full transition-all duration-300 ${
              active === i
                ? 'w-6 h-1.5 bg-cam-purple'
                : 'w-1.5 h-1.5 bg-zinc-700'
            }`}
            aria-label={`Ir para ${features[i].title}`}
          />
        ))}
      </div>
    </div>
  )
}

/* ─── Main Component ─── */
export default function FeatureShowcase({
  id,
  label,
  title,
  titleHighlight,
  description,
  features,
  reversed = false,
  mobileImageOnly = false,
}) {
  const sectionRef = useReveal()
  const { containerRef, activeIndex } = useScrollSpy(features.length)

  return (
    <section id={id} className="relative">
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
      </div>

      {/* ═══ MOBILE (< lg): Horizontal swipe carousel ═══ */}
      <div className="lg:hidden">
        {mobileImageOnly ? (
          <MobileImageCarousel features={features} />
        ) : (
          <MobileCarousel features={features} />
        )}
      </div>

      {/* ═══ DESKTOP (lg+): Sticky scroll spy ═══ */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={containerRef} className="hidden lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 relative">
          <div className={`sticky top-24 self-start ${reversed ? 'lg:order-2' : ''}`}>
            <div className="relative h-[calc(100vh-8rem)]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-cam-purple/25" style={{ boxShadow: '0 0 40px -10px rgba(123,72,234,0.15)' }}>
                {features.map((feature, i) => (
                  <img
                    key={i}
                    src={feature.image}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out"
                    style={{ opacity: activeIndex === i ? 1 : 0 }}
                    loading={i < 2 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5">
                <div
                  className="h-full bg-cam-purple transition-all duration-500 ease-out"
                  style={{ width: `${((activeIndex + 1) / features.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className={`relative ${reversed ? 'lg:order-1' : ''}`}>
            {features.map((feature, i) => (
              <div key={i} data-index={i} className="min-h-[70vh] flex items-center">
                <div
                  className={`p-8 rounded-2xl w-full transition-opacity duration-500 ${
                    activeIndex === i
                      ? 'opacity-100 bg-cam-surface/40 border border-white/[0.04]'
                      : 'opacity-20'
                  }`}
                >
                  <span className="text-cam-purple font-display font-bold text-sm tracking-[0.15em] mb-2 block">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-white mb-1 leading-tight">
                    {feature.title}
                  </h3>
                  {feature.subtitle && (
                    <span className="inline-block text-[11px] font-semibold text-cam-purple-soft uppercase tracking-wider mb-2">
                      {feature.subtitle}
                    </span>
                  )}
                  <p className="text-[15px] text-zinc-400 leading-relaxed mt-2 mb-4">
                    {feature.question}
                  </p>
                  {feature.segments && feature.segments.length > 0 && (
                    <div>
                      <span className="text-[10px] text-zinc-600 uppercase tracking-wider font-medium block mb-1.5">
                        Funciona em:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {feature.segments.map((seg, j) => (
                          <span key={j} className="text-[11px] font-medium text-zinc-500 bg-white/[0.03] border border-white/[0.06] rounded-md px-2 py-1">
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
