import { fireEvent, render, screen, within } from '@testing-library/react'
import React from 'react'
import Autocomplete from './Autocomplete'
import user from '@testing-library/user-event'
import { act } from 'react-test-renderer'

// TODO: FIX, SEE https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
// describe('Autocomplete', () => {
// it('should call onChange when selectint item', async () => {
//   const handleChange = jest.fn()
//   const options = ['one', 'two']
//   render(<Autocomplete options={options} onChange={handleChange} />)
//   // const selectOutput = screen.getByTestId('select-output')
//   const selectOutput = screen.getByRole('combobox')
//   // click into the component
//   selectOutput.focus()
//   user.type(selectOutput, 'o')
//   // arrow down to first option
//   user.type(selectOutput, '{arrowdown}')
//   // select element
//   user.type(selectOutput, '{enter}')
//   expect(
//     ((await screen.findByRole('combobox')) as HTMLInputElement).value
//   ).toEqual('one')
//   expect(handleChange).toHaveBeenCalledTimes(1)
//   expect(handleChange).toHaveBeenCalledWith('one')
// })
// it('should not call onChange when no item is selected', async () => {
//   const handleChange = jest.fn()
//   const options = ['one', 'two']
//   render(<Autocomplete options={options} onChange={handleChange} />)
//   // const selectOutput = screen.getByTestId('select-output')
//   const selectOutput = screen.getByRole('combobox')
//   // click into the component
//   selectOutput.focus()
//   fireEvent.change(selectOutput, { target: { value: 'o' } })
//   // select element
//   fireEvent.keyDown(selectOutput, { key: 'Enter' })
//   expect(handleChange).toHaveBeenCalledTimes(0)
// })
// })
