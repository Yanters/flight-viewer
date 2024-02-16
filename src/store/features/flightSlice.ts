import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Flight } from '../../data/flightsData'

interface FlightState {
  flight: Flight | null
  timestamp: number
}

const initialState: FlightState = {
  flight: null,
  timestamp: 0,
}

export const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    setFlight: (state, action: PayloadAction<Flight>) => {
      state.flight = action.payload
      state.timestamp = action.payload.route[0].timestamp
    },
    setTimestamp: (state, action: PayloadAction<number>) => {
      state.timestamp = action.payload
    },
  },
})

export const { setFlight, setTimestamp } = flightSlice.actions

export default flightSlice.reducer
