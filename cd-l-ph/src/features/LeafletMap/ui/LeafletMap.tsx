"use client"

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"

const LeafletMap = () => {

  const customIcon = new Icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/128/7596/7596723.png',
      iconSize: [30,30]
  })
  return (
    <div className='w-full flex justify-center'>
      <MapContainer center={[52.27013998387916, 21.047516768284613]} zoom={15.5} scrollWheelZoom={true}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.27013998387916, 21.047516768284613]} icon={customIcon}>
        <Popup>
          The Best Result<br />
        </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LeafletMap;