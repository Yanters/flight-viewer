import { Polyline } from 'react-leaflet'

interface RouteProps {
  points: [number, number][]
  color?: string
}

const Route = ({ points, color }: RouteProps) => {
  return <Polyline pathOptions={{ color: color ?? 'red' }} positions={points} />
}

export default Route
