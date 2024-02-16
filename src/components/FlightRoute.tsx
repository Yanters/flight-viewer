import Route from './Route'
import { getFlightPoints } from '../utils/getFlightPoints'
import { useAppSelector } from '../store/store'

const FlightRoute = () => {
  const flight = useAppSelector((state) => state.flight.flight)

  if (!flight) return null

  return <Route points={getFlightPoints(flight)} />
}

export default FlightRoute
