import React from 'react'
import renderer from 'react-test-renderer'
import Menu from 'components/Menu'
import Component from '.'

jest.mock('components/Menu')

describe('HomePage component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    // Let TypeScript know that this thing is a mock
    const mockMenu = Menu as jest.MockedFunction<typeof Menu>
    // Provide our custom implementation here
    mockMenu.mockImplementation(() => <div>MockMenu</div>)
  })

  it('renders correctly', () => {
    const elem = renderer.create(<Component />).toJSON()
    expect(elem).toMatchSnapshot()
  })
})
