import Plane from './Plane'
import { getPlanePoint } from '../utils/getPlanePoint'
import { useAppSelector } from '../store/store'

const PlanePosition = () => {
  const { flight, timestamp } = useAppSelector((state) => state.flight)

  if (!flight) return null

  return <Plane point={getPlanePoint(flight, timestamp ?? 0)} />
}

export default PlanePosition
