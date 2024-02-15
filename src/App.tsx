import Map from './components/Map'
import styled from 'styled-components'
import Slider from './components/Slider'
import FlightList from './components/FlightList'
import { FlightProvider } from './context/FlightContext'
import FlightRoute from './components/FlightRoute'
import PlanePosition from './components/PlanePosition'

const FullScreen = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`

const MapAndSlider = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <FullScreen>
      <FlightProvider>
        <FlightList />
        <MapAndSlider>
          <Map>
            <FlightRoute />
            <PlanePosition />
          </Map>
          <Slider />
        </MapAndSlider>
      </FlightProvider>
    </FullScreen>
  )
}

export default App
