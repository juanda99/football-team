import React from 'react'
import renderer from 'react-test-renderer'
import LoadingProgress from './LoadingProgress'

describe('LoadingProgress component', () => {
  it('renders correctly', () => {
    const elem = renderer.create(<LoadingProgress />).toJSON()
    expect(elem).toMatchSnapshot()
  })
})
