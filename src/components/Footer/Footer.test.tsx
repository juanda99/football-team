import React from 'react'
import renderer from 'react-test-renderer'
import Footer from './Footer'

describe('Footer component', () => {
  it('renders correctly', () => {
    const elem = renderer.create(<Footer />).toJSON()
    expect(elem).toMatchSnapshot()
  })
})
