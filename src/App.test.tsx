// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react'
import App from './App'
import { Header, Footer } from './components'
import { HomePage, PageNotFound, TeamPage } from './pages'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import '@testing-library/jest-dom/extend-expect'

jest.mock('./pages/HomePage/index')
jest.mock('./components/Header/index')
jest.mock('./components/Footer/index')
jest.mock('./pages/PageNotFound')
jest.mock('./pages/TeamPage/index')

// jest.mock('./pages/TeamsListPage/index')

describe('Tests for App Router', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    // Let TypeScript know that this thing is a mock
    const mockHeader = Header as jest.MockedFunction<typeof Header>
    const mockHomePage = HomePage as jest.MockedFunction<typeof HomePage>
    const mockTeamPage = TeamPage as jest.MockedFunction<typeof TeamPage>
    const mockFooter = Footer as jest.MockedFunction<typeof Footer>
    const mockPageNotFound = PageNotFound as jest.MockedFunction<
      typeof PageNotFound
    >
    // Provide our custom implementation here
    mockHeader.mockImplementation(() => <div>MockHeader</div>)
    mockHomePage.mockImplementation(() => <div>MockHomePage</div>)
    mockTeamPage.mockImplementation(() => <div>MockTeamPage</div>)
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
