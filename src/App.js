import React, { useEffect, useState } from "react";
import "./normalize.css";
import "./App.css";
import { CardPreview } from "./components/CardPreview";
import { getCards } from "./services/cardService";
import CardForm from "./components/CardForm";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards().then(setCards);
  }, []);

  function handleRemove(id) {
    setCards((existing) => existing.filter((c) => c.id !== id));
  }

  function handleAdd(card) {
    setCards((existing) => [...existing, card]);
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
        <h3>Your Cards</h3>
        <div className="gridContainer">
          <CardForm onSave={handleAdd} />
          {cards.map(({ id, definition, term }) => (
            <CardPreview
              key={id}
              id={id}
              term={term}
              definition={definition}
              onRemove={handleRemove}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
