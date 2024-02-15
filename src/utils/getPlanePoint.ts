import { Flight } from '../data/flightsData'

export function getPlanePoint(flight: Flight, timestamp: number) {
  const point = flight.route.find((point) => point.timestamp === timestamp)
  return point
    ? ([point.lat, point.lon] as [number, number])
    : ([flight.route[0].lat, flight.route[0].lon] as [number, number])
}
