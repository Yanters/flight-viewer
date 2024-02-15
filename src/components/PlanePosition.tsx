import { useContext } from 'react'
import Plane from './Plane'
import { getPlanePoint } from '../utils/getPlanePoint'
import { FlightContext } from '../context/FlightContext'

const PlanePosition = () => {
  const { flight, timestamp } = useContext(FlightContext)
  if (!flight) return null

  return <Plane point={getPlanePoint(flight, timestamp ?? 0)} />
}

export default PlanePosition
