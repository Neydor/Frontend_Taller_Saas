import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const posicionTulua = [4.09098,-76.196281]
const posicionGasolineriaPrueba = [4.09098,-76.196281]
const styleMap = { "width": "50%", "height": "60vh" }

class MapaTulua extends React.Component{
    render() {
        return <MapContainer style={styleMap} center={posicionTulua} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={posicionTulua}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>;
    }
}
export default MapaTulua;