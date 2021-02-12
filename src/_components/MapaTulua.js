import React from 'react';
//import 'leaflet/dist/leaflet.css';
import { MapContainer, Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
//import icon from 'leaflet/dist/images/marker-icon.png';
//import iconShadow from 'leaflet/dist/images/marker-shadow.png';
//import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  //iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const posicionTulua = [4.09098, -76.196281]
const posicionGasolineriaPrueba = [4.090658384564016, -76.21557350577977]

const listaGasolinerasCoordenada = [[4.08654, -76.20139], [4.06028, -76.19903],
[4.06028, -76.19903], [4.08413, -76.19456],
[4.08782, -76.21574], [4.07042, -76.19759],
[4.08441, -76.20173], [4.10181, -76.1932],
[4.09192, -76.17874],[4.09234, -76.17843],
[4.08418, -76.18639],[4.07668, -76.18924],
[4.0699, -76.193],[4.06521, -76.19667],
[4.06926, -76.19722],[4.08968, -76.19186],
[4.08985, -76.19155]]
const styleMap = { "width": "100%", "height": "500px" }

class MapaTulua extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            empleados: []
        }
    }

    componentWillMount() {
        fetch('http://localhost:3128/estaciones')
            .then((response) => {
                return response.json()
            })
            .then((empleados) => {
                this.setState({ empleados: empleados })
            })
    }

    render() {
        return <MapContainer style={styleMap} center={posicionTulua} zoom={13} scrollWheelZoom={false}>
            
            {this.state.empleados.map((cord) =>
                <Marker position={[cord.estacion_latitud,cord.estacion_longitud]}>
                <Popup minWidth={90}>
                    Estacion:{cord.estacion_nombre} <br />
                    Direccion:{cord.estacion_direccion} <br />
                    Telefono:{cord.estacion_telefono} <br />
                    Latitud: {cord.estacion_longitud}<br />
                    Longitud: {cord.estacion_latitud}<br />
            </Popup>
            </Marker>
            )}
        </MapContainer>;
    }
}
export default MapaTulua;