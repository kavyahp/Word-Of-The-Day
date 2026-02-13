import { useCallback, useState } from 'react'

export function useWordLookup() {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const lookup = useCallback(async (word) => {
    const trimmed = word.trim()
    if (!trimmed) {
      setResult(null)
      setError('')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(trimmed)}`,
      )

      if (!response.ok) {
        setResult(null)
        setError('Word not found')
        setLoading(false)
        return
      }

      const data = await response.json()

      const entry = Array.isArray(data) && data.length > 0 ? data[0] : null
      const meaningBlock =
        entry && entry.meanings && entry.meanings.length > 0
          ? entry.meanings[0]
          : null
      const definitionBlock =
        meaningBlock &&
        meaningBlock.definitions &&
        meaningBlock.definitions.length > 0
          ? meaningBlock.definitions[0]
          : null

      const definition =
        (definitionBlock && definitionBlock.definition) ||
        'No definition available.'

      const apiExample =
        (definitionBlock && definitionBlock.example) ||
        (meaningBlock &&
          meaningBlock.definitions &&
          meaningBlock.definitions.find((d) => d.example)?.example)

      const example =
        apiExample || `Here is an example usage of ${trimmed}.`

      const normalized = {
        word: entry?.word || trimmed,
        meaning: definition,
        example,
      }

      setResult(normalized)
    } catch (e) {
      setResult(null)
      setError('Word not found')
    } finally {
      setLoading(false)
    }
  }, [])

  const word = result?.word || ''
  const meaning = result?.meaning || ''
  const example = result?.example || ''

  return { word, meaning, example, loading, error, lookup }
}

