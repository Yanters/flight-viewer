import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { MockAPI } from '../services/mockAPI'
import { Flight } from '../data/flightsData'
import { FlightContext } from '../context/FlightContext'

const FlightListContainer = styled.div`
  height: 100vh;
  width: 560px;
  overflow: auto;
`
const FlightListItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  padding: 8px;
`

const FlightListItem = styled.div`
  padding: 10px;
  border: 1px solid #191919;
  border-radius: 5px;
  background-color: #212121;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #2f2f2f;
  }
  &:active {
    transform: scale(0.98);
  }
`

const FlightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

const FlightName = styled.div`
  font-weight: bold;
  font-size: 16px;
`

const FlightId = styled.div`
  color: #c2c2c2;
  font-size: 14px;
`

const FlightRoute = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5px;
`

const FlightDeparture = styled.div`
  color: #8f8e8e;
`

const FlightArrival = styled.div`
  color: #807f7f;
`

const FlightList = () => {
  const [flights, setFlights] = useState<Flight[] | undefined>()

  const { setFlight } = useContext(FlightContext)

  useEffect(() => {
    async function fetchFlights() {
      const flights = await MockAPI.getFlights()
      setFlights(flights)
    }

    fetchFlights()
  }, [])

  return (
    <FlightListContainer>
      <FlightListItems>
        {flights?.map((flight) => (
          <FlightListItem key={flight.id} onClick={() => setFlight(flight)}>
            <FlightHeader>
              <FlightName>{flight.name}</FlightName>
              <FlightId>#{flight.id}</FlightId>
            </FlightHeader>
            <FlightRoute>
              <FlightDeparture>{flight.departure}</FlightDeparture>
              <FlightArrival>{flight.arrival}</FlightArrival>
            </FlightRoute>
          </FlightListItem>
        ))}
      </FlightListItems>
    </FlightListContainer>
  )
}

export default FlightList
