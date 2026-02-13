import { useCallback, useState } from 'react'

export function useWordCarousel(items) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const total = items.length

  const goNext = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % total)
  }, [total])

  const goPrev = useCallback(() => {
    setCurrentIndex((index) => (index - 1 + total) % total)
  }, [total])

  const current = items[currentIndex]
  const next = items[(currentIndex + 1) % total]
  const prev = items[(currentIndex - 1 + total) % total]

  return {
    currentIndex,
    current,
    next,
    prev,
    goNext,
    goPrev,
    setCurrentIndex,
  }
}

