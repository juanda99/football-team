import * as React from 'react'
import TextField from '@mui/material/TextField'
import { default as MuiAutocomplete } from '@mui/material/Autocomplete'

interface AppProps {
  options: string[]
  onChange: (value: string) => void
}

const Autocomplete = ({ options, onChange }: AppProps): JSX.Element => {
  return (
    <div>
      <MuiAutocomplete
        options={options}
        onChange={(event: any, newValue: string | null) => {
          if (newValue) onChange(newValue)
          console.log('++++++++++++++++++++++++++++++++')
        }}
        // inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          if (
            options.some(
              (option) => option.toLowerCase() === newInputValue.toLowerCase()
            )
          )
            console.log('++++++++++++++++++++++++++++++++kkkkKkkk')
          onChange(newInputValue)
        }}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Choose a country" />
        )}
      />
    </div>
  )
}

export default Autocomplete
