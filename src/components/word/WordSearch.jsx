import React, { useCallback } from 'react'
import { useWordLookup } from '../../hooks/useWordLookup.js'
import WordCard from './WordCard.jsx'
import Button from '../ui/Button.jsx'

function WordSearch({ children }) {
  const { query, setQuery, result, loading, error, fetchWord } = useWordLookup()

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      fetchWord(query)
    },
    [fetchWord, query],
  )

  const handleChange = useCallback(
    (event) => {
      const value = event.target.value
      setQuery(value)

      if (!value.trim()) {
        // Clear result and errors when query is cleared
        fetchWord('')
      }
    },
    [fetchWord, setQuery],
  )

  const showResult = !!result && !loading

  return (
    <div className="word-search">
      <form className="word-search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="word-search-input"
          placeholder="Look up any English word"
          value={query}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="primary"
          className="word-search-button"
          disabled={loading || !query.trim()}
        >
          {loading ? 'Searching…' : 'Search'}
        </Button>
      </form>

      {error && <p className="word-search-error">{error}</p>}

      {showResult ? (
        <div className="word-search-result">
          <p className="word-card-label word-search-label">Search result</p>
          <WordCard
            word={result.word}
            meaning={result.meaning}
            example={result.example}
            isActive={true}
          />
        </div>
      ) : (
        <div className="word-search-carousel">{children}</div>
      )}
    </div>
  )
}

export default WordSearch

