import React, { useState } from 'react'
import { saveCard } from '../services/cardService'

export default function CardForm({ onSave, onCancel }) {
  const [term, setTerm] = useState('')
  const [definition, setDefinition] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    saveCard({ term, definition }).then((card) => {
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
