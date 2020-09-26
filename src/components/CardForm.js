import React, { useState } from "react";
import { saveCard } from "../services/cardService";

export default function CardForm(props) {
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    saveCard({ term, definition }).then((card) => {
      clearForm();
      props.onSave && typeof props.onSave === "function" && props.onSave(card);
    });
  }
  function clearForm() {
    setTerm('');
    setDefinition('');
  }
  function handleTermChange(event) {
    const { value } = event.target;
    setTerm(value);
  }

  function handleDefChange(event) {
    const { value } = event.target;
    setDefinition(value);
  }

  return (
    <div className="tile">
      <form onSubmit={handleSubmit} onReset={clearForm}>
        <div>
          <label htmlFor="card_term">Term</label>
          <textarea
            id="card_term"
            type="text"
            value={term}
            onChange={handleTermChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="card_definition">Definition</label>
          <textarea
            id="card_definition"
            value={definition}
            onChange={handleDefChange}
          ></textarea>
          <div>
            <button className="primary" type="submit" onClick={handleSubmit}>
              Save
            </button>
            <button className="secondary" type="reset">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
