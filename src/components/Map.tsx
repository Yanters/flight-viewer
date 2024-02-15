import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

interface MapProps {
  children?: React.ReactNode
}

const Map = ({ children }: MapProps) => {
  return (
    <MapContainer
      center={[37.0902, -95.7129]}
      zoom={5}
      id='map'
      style={{ height: '100%', width: '100%', display: 'inline-block' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {children}
    </MapContainer>
  )
}

export default Map
