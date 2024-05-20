import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders invision', () => {
  render(<App />)
  const linkElement = screen.getByText(/INVISION/i)
  expect(linkElement).toBeInTheDocument()
})
