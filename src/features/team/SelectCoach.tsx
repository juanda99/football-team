import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { setCoach, selectCoach } from './teamSlice'
import { getAllCoaches } from 'lib/utils'
import { Coach } from 'types'

export function SelectCoach(): JSX.Element {
  const [coachList, setCoachList] = useState<Coach[]>([])
  useEffect(() => {
    getAllCoaches().then((coaches) => setCoachList(coaches))
  }, [])

  const dispatch = useAppDispatch()
  const coach = useAppSelector(selectCoach)

  return (
    <>
      <Select
        style={{ minWidth: 300 }}
        value={coach}
        onChange={(e) => dispatch(setCoach(e.target.value))}
      >
        {coachList.map((coach) => (
          <MenuItem key={coach.name} value={coach.name}>
            {coach.name}
          </MenuItem>
        ))}
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
      </Select>
      {!coach && <Alert severity="error">You need to choose a coach!</Alert>}
    </>
  )
}
