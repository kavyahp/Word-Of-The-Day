import React, { useCallback, useState } from 'react'
import { useWordLookup } from '../../hooks/useWordLookup.js'
import WordCard from './WordCard.jsx'
import Button from '../ui/Button.jsx'

function WordLookup() {
  const [input, setInput] = useState('')
  const { word, meaning, example, loading, error, lookup } = useWordLookup()

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      if (!input.trim()) return
      lookup(input)
    },
    [input, lookup],
  )

  const handleChange = useCallback((event) => {
    setInput(event.target.value)
  }, [])

  const hasResult = !!word && !!meaning

  return (
    <section className="lookup section">
      <div className="container">
        <div className="lookup-header">
          <h2 className="lookup-title">Find any word</h2>
          <p className="lookup-subtitle">
            Type a word to see its meaning and real-life usage.
          </p>
        </div>

        <div className="lookup-box">
          <form className="lookup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="lookup-input"
              placeholder="Enter a word"
              value={input}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="primary"
              className="lookup-button"
              disabled={loading || !input.trim()}
            >
              {loading ? 'Searching…' : 'Search'}
            </Button>
          </form>

          {error && <p className="lookup-error">Word not found</p>}

          {!hasResult && !loading && !error && (
            <p className="lookup-empty">
              Enter a word to see its meaning.
            </p>
          )}

          {hasResult && !loading && (
            <div className="lookup-result">
              <p className="word-card-label lookup-label">Search result</p>
              <WordCard
                word={word}
                meaning={meaning}
                example={example}
                isActive={true}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default WordLookup

