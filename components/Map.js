import React from 'react'
import ReactMapGL from 'react-map-gl'

export default function Map() {
   const [viewport, setVieport] = React.useState({
    width: '100vw',
    height: '100vh',
    latitude: 41.5868,
    longitude: -93.625,
    zoom: 13
  })

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/estefan074/ck002rku546481cnq4hc1buof"
      mapboxApiAccessToken="pk.eyJ1IjoiZXN0ZWZhbjA3NCIsImEiOiJja2NiNHV1OXoxYndzMnRsY3VhZWF4YnhjIn0.mSSbeNLgblPKvTs_Wzkxrg"
      onViewportChange={viewport => setVieport({ viewport })}
    />
  );
}