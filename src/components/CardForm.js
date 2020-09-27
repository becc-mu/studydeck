import React, { useState } from 'react'
import { saveCard } from '../services/cardService'

export default function CardForm({ onSave, onCancel, card }) {
  const id = card && card.id ? card.id : undefined
  const [term, setTerm] = useState(id ? card.term : '')
  const [definition, setDefinition] = useState(id ? card.definition : '')

  function handleSubmit(event) {
    event.preventDefault()
    saveCard({ term, definition, id }).then((card) => {
      clearForm()
      onSave && typeof onSave === 'function' && onSave(card)
    })
  }
  function clearForm() {
    setTerm('')
    setDefinition('')
    onCancel && typeof onCancel === 'function' && onCancel()
  }

  function handleTermChange(event) {
    const { value } = event.target
    setTerm(value)
  }

  function handleDefChange(event) {
    const { value } = event.target
    setDefinition(value)
  }

  return (
    <div className="tile">
      <h4>{id ? 'Update Card' : 'Save Card'}</h4>
      <form onReset={clearForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="card_term">term</label>
          <textarea
            id="card_term"
            value={term}
            onChange={handleTermChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="card_definition">definition</label>
          <textarea
            id="card_definition"
            value={definition}
            onChange={handleDefChange}
          ></textarea>
          <div>
            <button className="primary" type="submit">
              Save
            </button>
            <button className="secondary" type="reset">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
