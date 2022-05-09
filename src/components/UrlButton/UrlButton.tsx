import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

type AppProps = {
  url: string
  text: string
}

const UrlButton = ({ url, text }: AppProps): JSX.Element => (
  <Button variant="contained" component={Link} to={url}>
    {text}
  </Button>
)

export default UrlButton
