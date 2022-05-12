import * as React from 'react'
import Table from '@mui/material/Table'
import Box from '@mui/material/Box'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableSortLabel from '@mui/material/TableSortLabel'
import TableRow from '@mui/material/TableRow'
import { visuallyHidden } from '@mui/utils'
import { TeamPlayer } from 'types'
import { AddPlayer, RemovePlayer } from 'features/team'

type AppProps = {
  players: TeamPlayer[]
  hidePosition?: boolean
}

const pos: Record<string, string> = {
  G: 'Goalkeeper',
  D: 'Defender',
  M: 'Midfielder',
  F: 'Forward',
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

type Order = 'asc' | 'desc'

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof TeamPlayer
  ) => void
  order: Order
  orderBy: string
  hidePosition: boolean
}

interface HeadCell {
  id: keyof TeamPlayer | 'actions'
  label: string
  sortable: boolean
  hiden?: boolean
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort, hidePosition } = props
  const headCells: readonly HeadCell[] = [
    {
      id: 'firstname',
      label: 'Name',
      sortable: true,
    },
    {
      id: 'lastname',
      label: 'Surname',
      sortable: true,
    },
    {
      id: 'img',
      label: 'Image',
      sortable: false,
    },
    {
      id: 'position',
      label: 'Position',
      sortable: true,
      hiden: hidePosition,
    },
    {
      id: 'country',
      label: 'Country',
      sortable: true,
    },
    {
      id: 'actions',
      label: 'Actions',
      sortable: false,
    },
  ]
  const createSortHandler =
    (property: keyof TeamPlayer) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property)
    }

  return (
    <TableHead>
      <TableRow>
        {headCells
          .filter((headCell) => !headCell?.hiden)
          .map((headCell) => (
            <TableCell
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
              style={{ width: 150 }}
            >
              {headCell.sortable && headCell.id !== 'actions' ? (
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc'
                        ? 'sorted descending'
                        : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              ) : (
                <>{headCell.label}</>
              )}
            </TableCell>
          ))}
      </TableRow>
    </TableHead>
  )
}

const PlayersGrid = ({
  players,
  hidePosition = false,
}: AppProps): JSX.Element => {
  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<keyof TeamPlayer>('lastname')

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof TeamPlayer
  ) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  return (
    <>
      {players.length > 0 ? (
        <TableContainer>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            padding="normal"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              hidePosition={hidePosition}
            />
            <TableBody>
              {players
                .slice()
                .sort(getComparator(order, orderBy))
                .map((player) => {
                  const { id, firstname, lastname, img, position, country } =
                    player
                  return (
                    <TableRow
                      key={id}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {firstname}
                      </TableCell>
                      <TableCell>{lastname}</TableCell>
                      <TableCell>
                        <img
                          alt={`${firstname}-${lastname}`}
                          src={img}
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null // prevents looping
                            currentTarget.src = `${process.env.PUBLIC_URL}no-image.png`
                          }}
                        />
                      </TableCell>
                      {!hidePosition && <TableCell>{pos[position]}</TableCell>}
                      <TableCell>{country}</TableCell>
                      <TableCell>
                        <AddPlayer player={player} />
                        <RemovePlayer player={{ ...player }} />
                      </TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </>
  )
}

export default PlayersGrid
