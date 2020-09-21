import React from 'react'
import './normalize.css'
import './App.css'

function App() {
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
          <div className="title">
            <h4 className="cardTerm">Term goes here</h4>
            <div className="cardButtons">
              <button type="button" className="tertiary">
                show back
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
        </div>
      </main>
    </div>
  )
}

export default App
