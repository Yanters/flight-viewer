import { flights } from '../data/flightsData'

export class MockAPI {
  static async getFlights() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return flights
  }

  static async getFlight(id: number) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return flights.find((flight) => flight.id === id)
  }
}
