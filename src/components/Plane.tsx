import { CircleMarker } from 'react-leaflet'

interface PlaneProps {
  point: [number, number]
}

const Plane = ({ point }: PlaneProps) => {
  return (
    <CircleMarker
      center={point}
      radius={6}
      fillRule='evenodd'
      pathOptions={{ color: 'blue' }}
    />
  )
}

export default Plane
