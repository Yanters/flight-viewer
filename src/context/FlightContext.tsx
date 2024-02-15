import { createContext, useState } from 'react'
import { Flight } from '../data/flightsData'

export type FlightContextType = {
  flight: Flight | undefined
  timestamp: number
  setFlight: React.Dispatch<React.SetStateAction<Flight | undefined>>
  setTimestamp: React.Dispatch<React.SetStateAction<number>>
}

export const FlightContext = createContext<FlightContextType>(
  {} as FlightContextType
)

export const FlightProvider = ({ children }: { children: React.ReactNode }) => {
  const [flight, setFlight] = useState<Flight | undefined>(undefined)
  const [timestamp, setTimestamp] = useState<number>(0)

  return (
    <FlightContext.Provider
      value={{ flight, setFlight, timestamp, setTimestamp }}
    >
      {children}
    </FlightContext.Provider>
  )
}
