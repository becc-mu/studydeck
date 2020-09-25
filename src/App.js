import React, { useEffect, useState } from 'react'
import './normalize.css'
import './App.css'
import { CardPreview } from './components/CardPreview'

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('/api/card')
      .then((res) => res.json())
      .then(setCards)
  }, [])
  return (
    <div>
      <header>
        <h1>
          Study<span className="titleHighlight">Deck</span>
        </h1>
        <h2>Retention through reptition</h2>
      </header>
      <main>
        <h3>Your Cards</h3>
        <div className="gridContainer">
          {cards.length &&
            cards.map((card) => (
              <CardPreview
                key={card.id}
                term={card.term}
                definition={card.definition}
              />
            ))}
        </div>
      </main>
    </div>
  )
}

export default App
