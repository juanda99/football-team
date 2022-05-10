import React from 'react'
import renderer from 'react-test-renderer'
import LoadingProgress from './LoadingProgress'

it('renders correctly', () => {
  const elem = renderer.create(<LoadingProgress />).toJSON()
  expect(elem).toMatchSnapshot()
})
