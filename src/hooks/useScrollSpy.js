import { useState, useEffect, useRef, useCallback } from 'react'

export function useScrollSpy(itemCount) {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)

  const handleIntersection = useCallback((entries) => {
    // Find the entry with the highest intersection ratio
    let bestEntry = null
    let bestRatio = 0

    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
        bestRatio = entry.intersectionRatio
        bestEntry = entry
      }
    })

    if (bestEntry) {
      const index = parseInt(bestEntry.target.dataset.index, 10)
      if (!isNaN(index)) {
        setActiveIndex(index)
      }
    }
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-30% 0px -30% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    })

    const items = container.querySelectorAll('[data-index]')
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [itemCount, handleIntersection])

  return { containerRef, activeIndex }
}
