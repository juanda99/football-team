import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { TEAM_URL, TEAMS_LIST_URL } from 'settings.mjs'
// import { Counter } from 'features/counter/Counter'

const HomePage = (): JSX.Element => {
  return (
    <>
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
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" component={Link} to={TEAMS_LIST_URL}>
              Browse the teams
            </Button>
            <Button variant="outlined" component={Link} to={TEAM_URL}>
              Show my team
            </Button>
          </Stack>
        </Container>
      </Box>
      {/* <Counter /> */}
    </>
  )
}

export default HomePage