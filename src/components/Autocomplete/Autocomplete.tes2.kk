import React from 'react'
import { render } from '@testing-library/react'
import ParentComponent from './Autocomplete'

jest.mock('@mui/material/Autocomplete', () => ({
  Autocomplete: ({ t }) => <>{t}</>,
}))

const mockChildComponent = jest.fn()
jest.mock('./ChildComponent', () => (props) => {
  mockChildComponent(props)
  return <mock-childComponent />
})

test('If ParentComponent is passed open and has data, ChildComponent is called with prop open and data', () => {
  render(<ParentComponent open data="some data" />)
  expect(mockChildComponent).toHaveBeenCalledWith(
    expect.objectContaining({
      open: true,
      data: 'some data',
    })
  )
})

test('If ParentComponent is not passed open, ChildComponent is not called', () => {
  render(<ParentComponent />)
  expect(mockChildComponent).not.toHaveBeenCalled()
})
