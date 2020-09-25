import React from 'react'
import { CardPreview } from './CardPreview'
import { render, fireEvent } from '@testing-library/react'

it('renders the expected term', () => {
  const expectedTerm = 'This is a test'
  const { getByText } = render(<CardPreview term={expectedTerm} />)
  expect(getByText(expectedTerm)).toBeInTheDocument()
})

it('flips card when clicked', () => {
  const expectedTerm = 'This is term'
  const expectedDef = 'This is def'
  const { getByText, queryByText } = render(
    <CardPreview term={expectedTerm} definition={expectedDef} />,
  )
  expect(getByText(expectedTerm)).toBeInTheDocument()
  // Searchs reg exp for word show and case insensitive
  const flipButton = getByText(/show/i)
  fireEvent.click(flipButton)
  expect(getByText(expectedDef)).toBeInTheDocument()
  expect(queryByText(expectedTerm)).not.toBeInTheDocument()
})
