import React from 'react'
import { render, screen } from '@testing-library/react'
import Component from './PlayerWarnings'
import { goodTeam } from 'data/mockPlayers'

describe('Tests for PlayerWarnings', () => {
  test('Should not display warning if minPlayers ok', () => {
    render(<Component players={goodTeam} minPlayers={16} text="test" />)
    expect(screen.queryByText('You need at least')).not.toBeInTheDocument()
  })

  test('Should display warning if not enough players', () => {
    render(<Component players={goodTeam} minPlayers={17} text="test" />)
    expect(screen.getByText('You need at least 17 test')).toBeInTheDocument()
  })
})
