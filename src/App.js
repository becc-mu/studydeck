import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router'
import './normalize.css'
import './App.css'
import { getCards } from './services/cardService'
import { CardList } from './components/CardList'
import { Practice } from './components/Practice'

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    getCards().then(setCards)
  }, [])

  function handleRemove(id) {
    setCards((existing) => existing.filter((c) => c.id !== id))
  }

  function handleAdd(card) {
    setCards((existing) => [...existing, card])
  }

  function handleUpdate(card) {
    setCards((existing) => existing.map((c) => (c.id === card.id ? card : c)))
  }
  return (
    <div>
      <header>
        <h1>
          Study<span className="titleHighlight">Deck</span>
        </h1>
        <h2>Retention through reptition</h2>
      </header>
      <main>
        <Router>
          <CardList
            path="/"
            cards={cards}
            onAdd={handleAdd}
            onRemove={handleRemove}
            onUpdate={handleUpdate}
          />
          <Practice path="/practice" />
        </Router>
      </main>
    </div>
  )
}

export default App
