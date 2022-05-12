import * as React from 'react'

import { Routes, Route } from 'react-router-dom'
import HomePage from 'pages/HomePage'
import TeamPage from 'pages/TeamPage'
import TeamsListPage from 'pages/TeamsListPage'
import PageNotFound from 'pages/PageNotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import {
  TEAM_URL,
  TEAMS_LIST_URL,
  HOME_URL,
  NOT_FOUND_URL,
} from './settings.mjs'

import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="md" style={{ paddingTop: 30 }}>
        <Routes>
          <Route path={HOME_URL} element={<HomePage />} />
          <Route path={TEAMS_LIST_URL} element={<TeamsListPage />} />
          <Route path={TEAM_URL} element={<TeamPage />} />
          <Route path={NOT_FOUND_URL} element={<PageNotFound />} />
        </Routes>
      </Container>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </ThemeProvider>
  )
}
