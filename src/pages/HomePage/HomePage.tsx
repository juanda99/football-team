import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Menu from 'components/Menu'

const HomePage = (): JSX.Element => {
  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            My team
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Browse through the list of teams to choose your players. Be aware of
            the requirements!
          </Typography>
          <Menu />

          <Typography
            component="h2"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Requirements
          </Typography>
          <Typography variant="h6" component="ul">
            <ul>
              <li>Players are selected from national teams.</li>
              <li>Maximum of 4 players from the same team.</li>
              <li>Team size limit to 16 players plus the coach.</li>
              <li>Each team must have at least:</li>
              <ul>
                <li>1 coach</li>
                <li>2 goalkeepers</li>
                <li>4 defenders</li>
                <li>4 midfielders</li>
                <li>2 forwards</li>
              </ul>
            </ul>
          </Typography>
        </Container>
      </Box>
    </main>
  )
}

export default HomePage
