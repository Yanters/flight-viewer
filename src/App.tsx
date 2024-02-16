import Map from './components/Map'
import styled from 'styled-components'
import FlightList from './components/FlightList'
import FlightRoute from './components/FlightRoute'
import PlanePosition from './components/PlanePosition'
import { Provider } from 'react-redux'
import { store } from './store/store'
import SliderView from './components/SliderView'

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
      <Provider store={store}>
        <FlightList />
        <MapAndSlider>
          <Map>
            <FlightRoute />
            <PlanePosition />
          </Map>
          <SliderView />
        </MapAndSlider>
      </Provider>
    </FullScreen>
  )
}

export default App
