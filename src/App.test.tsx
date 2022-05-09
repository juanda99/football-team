import React from 'react'
import App from './App'
import Header from 'components/Header'
import Footer from 'components/Footer'
import HomePage from 'pages/HomePage'
import PageNotFound from 'pages/PageNotFound'
import TeamPage from 'pages/TeamPage'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
// import '@testing-library/jest-dom/extend-expect'

jest.mock('./pages/HomePage/HomePage')
jest.mock('./components/Header/Header')
jest.mock('./components/Footer/Footer')
jest.mock('./pages/PageNotFound')
jest.mock('./pages/TeamPage/TeamPage')
// jest.mock('./pages/TeamsListPage/TeamsListPage')

describe('Tests for App Router', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    // Let TypeScript know that this thing is a mock
    const mockHeader = Header as jest.MockedFunction<typeof Header>
    const mockHomePage = HomePage as jest.MockedFunction<typeof HomePage>
    const mockTeamPage = TeamPage as jest.MockedFunction<typeof TeamPage>
    // const mockTeamsListPage = TeamsListPage as jest.MockedFunction<
    //   typeof TeamsListPage
    // >
    const mockFooter = Footer as jest.MockedFunction<typeof Footer>
    const mockPageNotFound = PageNotFound as jest.MockedFunction<
      typeof PageNotFound
    >
    // Provide our custom implementation here
    mockHeader.mockImplementation(() => <div>MockHeader</div>)
    mockHomePage.mockImplementation(() => <div>MockHomePage</div>)
    mockTeamPage.mockImplementation(() => <div>MockTeamPage</div>)
    // mockTeamsListPage.mockImplementation(() => <div>MockTeamsListPage</div>)
    mockFooter.mockImplementation(() => <div>MockFooter</div>)
    mockPageNotFound.mockImplementation(() => <div>MockPageNotFound</div>)
  })

  test('Should render Page header, HomePage and Footer on default route', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('MockHeader')).toBeInTheDocument()
    expect(screen.getByText('MockHomePage')).toBeInTheDocument()
    expect(screen.getByText('MockFooter')).toBeInTheDocument()
  })

  test('Should render Page header, TeamPage and Footer on /my-team route', () => {
    render(
      <MemoryRouter initialEntries={['/my-team']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('MockHeader')).toBeInTheDocument()
    expect(screen.getByText('MockTeamPage')).toBeInTheDocument()
    expect(screen.getByText('MockFooter')).toBeInTheDocument()
  })

  // test('Should render Page header, TeamsListPage and Footer on /teams route', () => {
  //   render(
  //     <MemoryRouter initialEntries={['/teams']}>
  //       <App />
  //     </MemoryRouter>
  //   )

  //   expect(screen.getByText('MockHeader')).toBeInTheDocument()
  //   expect(screen.getByText('MockTeamsListPage')).toBeInTheDocument()
  //   expect(screen.getByText('MockFooter')).toBeInTheDocument()
  // })

  test('Should render Page header, Footer and PageNotFound for invalid route', () => {
    render(
      <MemoryRouter initialEntries={['/invalid/route']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('MockHeader')).toBeInTheDocument()
    expect(screen.getByText('MockPageNotFound')).toBeInTheDocument()
    expect(screen.getByText('MockFooter')).toBeInTheDocument()
  })
})
