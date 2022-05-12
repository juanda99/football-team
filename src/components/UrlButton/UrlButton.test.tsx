import React from 'react'
import { render, screen } from '@testing-library/react'
import UrlButton from './UrlButton'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router'
import { createMemoryHistory } from 'history'

describe('UrlButton', () => {
  test('Should render a button with text and href passed as props', async () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <UrlButton url="/test-url" text="UrlButtonText" />
      </Router>
    )
    expect(screen.getByText(/UrlButtonText/i)).toBeInTheDocument()
    userEvent.click(screen.getByText(/UrlButtonText/i))
    expect(history.location.pathname).toBe('/test-url')
  })
})
