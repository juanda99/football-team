import React from 'react'
import renderer from 'react-test-renderer'
import Header from './Header'

describe('Header component', () => {
  it('renders correctly', () => {
    const elem = renderer.create(<Header />).toJSON()
    expect(elem).toMatchSnapshot()
  })
})
