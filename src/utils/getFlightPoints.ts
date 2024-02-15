import { Flight } from '../data/flightsData'

export function getFlightPoints(flight: Flight) {
  return flight.route.map((point) => [point.lat, point.lon] as [number, number])
}
