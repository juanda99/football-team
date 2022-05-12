import * as React from 'react'
import TextField from '@mui/material/TextField'
import { default as MuiAutocomplete } from '@mui/material/Autocomplete'

interface AppProps {
  options: string[]
  onChange: (value: string) => void
  value?: string
}

const Autocomplete = ({
  options,
  onChange,
  value = '',
}: AppProps): JSX.Element => {
  return (
    <MuiAutocomplete
      options={options}
      value={value}
      onChange={(event: any, newValue: string | null) => {
        if (newValue) onChange(newValue)
      }}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          data-testid="select-output"
          {...params}
          label="Choose a country"
        />
      )}
    />
  )
}

export default Autocomplete
