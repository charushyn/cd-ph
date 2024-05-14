'use client'

import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
    
    if(typeof window !== 'undefined')
        {
            return (
                <div>
                    <MapContainer style={{
                        height: '50svh',
                        width: '90svw',
                        
                    }} center={[52.270159680063934, 21.04757041246146]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[52.270159680063934, 21.04757041246146]}>
                            <Popup>The Best Result</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            )
        }
    
}

export default Map