import React from 'react'
import { render, act } from '@testing-library/react'
import { getCards } from './services/cardService'

import App from './App'

jest.mock('./services/cardService')

it('Renders without crushing', async () => {
  const mockCards = [
    { id: 1, term: 'question 1', definition: 'answer 1' },
    { id: 2, term: 'question 2', definition: 'answer 2' },
    { id: 3, term: 'question 3', definition: 'answer 3' },
  ]
  getCards.mockResolvedValue(mockCards)
  let getByText
  await act(async () => {
    ;({ getByText } = render(<App />))
  })

  mockCards.forEach((card) => {
    expect(getByText(card.term)).toBeInTheDocument()
  })
})
