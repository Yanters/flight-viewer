import { useContext } from 'react'
import { FlightContext } from '../context/FlightContext'
import Route from './Route'
import { getFlightPoints } from '../utils/getFlightPoints'

const FlightRoute = () => {
  const { flight } = useContext(FlightContext)

  if (!flight) return null

  return <Route points={getFlightPoints(flight)} />
}

export default FlightRoute
