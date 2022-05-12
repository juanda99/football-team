import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import teamReducer from '../features/team/teamSlice'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash.throttle'

const preloadedState = loadState()

/*  
i could use redux-persist, but in this case, I'm not using it
create  preloadState as initialState for redux-toolkit
and suscribe to  state for  changes 
*/

export const store = configureStore({
  reducer: {
    team: teamReducer,
  },
  preloadedState,
})

// throttle the store to avoid too many updates
store.subscribe(
  throttle(() => {
    saveState({
      team: store.getState().team,
    })
  }, 1000)
)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
