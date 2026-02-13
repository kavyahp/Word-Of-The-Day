import React from 'react'
import Card from '../ui/Card.jsx'

function WordCard({ word, meaning, example, isActive = false }) {
  const cardClassName = isActive ? 'word-card active' : 'word-card'

  return (
    <Card className={cardClassName}>
      <h2 className="word-card-heading">{word}</h2>
      <p className="word-card-meaning">{meaning}</p>

      <div className="word-card-divider" />

      <div>
        <p className="word-card-label">Example</p>
        <p className="word-card-example">“{example}”</p>
      </div>
    </Card>
  )
}

export default WordCard

