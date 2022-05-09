import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import UrlButton from './UrlButton'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router'
import { createMemoryHistory } from 'history'

describe('Tests for UrlButton', () => {
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

// describe('ButtonLogin', () => {
//   test('should pass', () => {
//     const history = createMemoryHistory({ initialEntries: ['/home'] })
//     render(
//       <MemoryRouter initialEntries={['/my-team']}>
//         <UrlButton url='/test-url' text='UrlButtonText'>
//        </MemoryRouter>
//     )
//     const user = userEvent.setup()
//     // verify page content for expected route
//     // often you'd use a data-testid or role query, but this is also possible
//     expect(screen.getByText(/you are home/i)).toBeInTheDocument()
//     await user.click(screen.getByText(/UrlButtonText/i))
//     expect(history.location.pathname).toBe('/test-url')

//     // expect(screen.getByText(/UrlButtonText/i)).toBeInTheDocument()
//     // fireEvent.click(getByText('UrlButtonText'))
//     // expect(history.location.pathname).toBe('/login')
//   })
// })
