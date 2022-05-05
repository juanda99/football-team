import React from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'

export const Header: React.FC = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <SportsSoccerIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Choose your team!
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
