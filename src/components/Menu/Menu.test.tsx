import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { TEAM_URL, TEAMS_LIST_URL } from 'settings.mjs'
import Component from './Menu'

// import '@testing-library/jest-dom/extend-expect'

describe('Tests for Menu buttons', () => {
  test('Should not render home page button on default route', () => {
    render(
      <MemoryRouter>
        <Component />
      </MemoryRouter>
    )

    expect(screen.queryByText('Go to home')).not.toBeInTheDocument()
    expect(screen.getByText('Select players')).toBeInTheDocument()
    expect(screen.getByText('Show my team')).toBeInTheDocument()
  })

  test(`Should not render my team button on ${TEAM_URL} route`, () => {
    render(
      <MemoryRouter initialEntries={[TEAM_URL]}>
        <Component />
      </MemoryRouter>
    )
    expect(screen.getByText('Go to home')).toBeInTheDocument()
    expect(screen.getByText('Select players')).toBeInTheDocument()
    expect(screen.queryByText('Show my team')).not.toBeInTheDocument()
  })

  test(`Should not render browse teams button on ${TEAMS_LIST_URL} route`, () => {
    render(
      <MemoryRouter initialEntries={[TEAMS_LIST_URL]}>
        <Component />
      </MemoryRouter>
    )

    expect(screen.getByText('Go to home')).toBeInTheDocument()
    expect(screen.queryByText('Select players')).not.toBeInTheDocument()
    expect(screen.getByText('Show my team')).toBeInTheDocument()
  })
})
