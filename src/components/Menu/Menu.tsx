import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import { TEAM_URL, TEAMS_LIST_URL, HOME_URL } from 'settings.mjs'
import { useLocation } from 'react-router-dom'

const Menu = (): JSX.Element => {
  const { pathname } = useLocation()
  return (
    <Stack
      sx={{ pt: 4, pb: 4 }}
      direction="row"
      spacing={2}
      justifyContent="center"
    >
      {!(pathname === TEAMS_LIST_URL) && (
        <Button variant="outlined" component={Link} to={TEAMS_LIST_URL}>
          Select players
        </Button>
      )}
      {!(pathname === TEAM_URL) && (
        <Button variant="outlined" component={Link} to={TEAM_URL}>
          Show my team
        </Button>
      )}
      {!(pathname === HOME_URL) && (
        <Button variant="outlined" component={Link} to={HOME_URL}>
          Go to home
        </Button>
      )}
    </Stack>
  )
}

export default Menu
