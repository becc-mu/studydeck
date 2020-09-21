import React, { useState } from 'react'

export function CardPreview(props) {
  const [isFront, setIsFront] = useState(true)

  function handleCardFlip() {
    setIsFront(!isFront)
  }
  return (
    // Conditional css renderting
    <div className={`tile ${isFront ? '' : 'back'}`}>
      <h4 className="cardTerm">{isFront ? props.term : props.definition}</h4>
      <div className="cardButtons">
        <button type="button" className="tertiary" onClick={handleCardFlip}>
          {isFront ? 'show back' : 'show front'}
        </button>
        <div>
          <button type="button" className="secondary">
            edit
          </button>
          <button type="button" className="secondary danger">
            delete
          </button>
        </div>
      </div>
    </div>
  )
}
