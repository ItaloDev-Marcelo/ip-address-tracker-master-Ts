import { MapUpdate } from "./MapUpdate";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import type { MapoDisplayProps } from "./types/MapDisplay";


delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


const MapDisplay = ({lat,long,city}:MapoDisplayProps) => {
  return <div className="max-w-full">
            <MapContainer
              center={[lat, long]}
              zoom={19}
              zoomControl={false}
              scrollWheelZoom={false}
              doubleClickZoom={false}
              touchZoom={false}
              keyboard={false}
              style={{ height: "500px", width: "100%" }}
            >
              <MapUpdate lat={lat} long={long} />
    
              <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
              <Marker position={[lat, long]}>
                <Popup>{city}!</Popup>
              </Marker>
            </MapContainer>
        </div>
  
}

export default MapDisplay