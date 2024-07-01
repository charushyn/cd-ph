'use client'

import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = ({coordination} : {coordination: any}) => {
    if(typeof window !== 'undefined')
        {
            return (
                <div>
                    <MapContainer style={{
                        height: '50svh',
                        width: '90svw',
                        
                    }} center={coordination} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={coordination}>
                            <Popup>The Best Result</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            )
        }
    
}

export default Map