import React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'

const Copyright = (): JSX.Element => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.adidas.es/">
        Adidas
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const Footer = (): JSX.Element => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Adidas Challenge
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Juan Daniel Burró Aláez - May, 2022
      </Typography>
      <Copyright />
    </Box>
  )
}
export default Footer
