import * as React from 'react'

import { Routes, Route } from 'react-router-dom'
import { HomePage, TeamPage, PageNotFound } from './pages'
import { Header, Footer } from './components'
import CssBaseline from '@mui/material/CssBaseline'

import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/my-team"
            element={<TeamPage name="pepe" desc="Best team of the world" />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </ThemeProvider>
  )
}
