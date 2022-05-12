import React from 'react'
import { render, screen } from '@testing-library/react'
import Component from './TeamWarnings'
import { goodTeam } from 'data/mockPlayers'

describe('Tests for TeamWarnings', () => {
  test('Should not display warning about numPlayers or country', () => {
    render(
      <Component players={goodTeam} numPlayers={16} maxCountryPlayers={4} />
    )
    expect(
      screen.queryByText('You need to reduce your squad from')
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText('You need to reduce the players from')
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText('You need to increase your squad from')
    ).not.toBeInTheDocument()
  })
  test('Should display warning about too many players', () => {
    render(
      <Component players={goodTeam} numPlayers={15} maxCountryPlayers={4} />
    )
    expect(
      screen.getByText('You need to reduce your squad from 16 to 15')
    ).toBeInTheDocument()
    expect(
      screen.queryByText('You need to reduce the players from')
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText('You need to increase your squad from')
    ).not.toBeInTheDocument()
  })
  test('Should display warning about not enough players', () => {
    render(
      <Component players={goodTeam} numPlayers={20} maxCountryPlayers={4} />
    )
    expect(
      screen.getByText('You need to increase your squad from 16 to 20')
    ).toBeInTheDocument()
    expect(
      screen.queryByText('You need to reduce the players from')
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText('You need to reduce your squad')
    ).not.toBeInTheDocument()
  })
  test('Should display warning about max players per country', () => {
    render(
      <Component players={goodTeam} numPlayers={16} maxCountryPlayers={3} />
    )
    expect(
      screen.queryByText('You need to increase your squad from')
    ).not.toBeInTheDocument()
    expect(
      screen.getByText('You need to reduce the players from Spain from 4 to 3')
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'You need to reduce the players from England from 4 to 3'
      )
    ).toBeInTheDocument()
    expect(
      screen.queryByText('You need to reduce the players from Italy')
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText('You need to reduce your squad')
    ).not.toBeInTheDocument()
  })
})
