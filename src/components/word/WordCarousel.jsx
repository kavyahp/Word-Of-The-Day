import React from 'react'
import { words } from '../../data/words.js'
import { useWordCarousel } from '../../hooks/useWordCarousel.js'
import WordCard from './WordCard.jsx'
import Button from '../ui/Button.jsx'

function WordCarousel() {
  const { current, next, prev, goNext } = useWordCarousel(words)

  return (
    <div className="carousel">
      <div className="carousel-track">
        <div className="carousel-card is-prev">
          <div className="carousel-card-inner">
            <WordCard
              word={prev.word}
              meaning={prev.meaning}
              example={prev.example}
              isActive={false}
            />
          </div>
        </div>

        <div className="carousel-card is-active">
          <div className="carousel-card-inner">
            <WordCard
              word={current.word}
              meaning={current.meaning}
              example={current.example}
              isActive={true}
            />
          </div>
        </div>

        <div className="carousel-card is-next">
          <div className="carousel-card-inner">
            <WordCard
              word={next.word}
              meaning={next.meaning}
              example={next.example}
              isActive={false}
            />
          </div>
        </div>
      </div>

      <div className="carousel-next-button">
        <Button
          variant="primary"
          className="btn-circle next-button"
          type="button"
          onClick={goNext}
          aria-label="Next word"
        >
          <span className="carousel-next-arrow">→</span>
        </Button>
      </div>
    </div>
  )
}

export default WordCarousel

