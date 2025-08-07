import { MapUpdate } from "./components/MapUpdate";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { IoIosArrowForward } from "react-icons/io";
import { usMapStore } from "./store/usMap.Store";
import { usSearchIpStore } from "./store/usSearchIp.Store";
import axios from "axios";
import { usGeolocationStore } from "./store/usGeolocation.Store";
// Corrigindo os ícones padrão do Leaflet

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function App() {
  const { SearchIp, setSearchIp } = usSearchIpStore();
  const { data, setData } = usMapStore();
  const { geolocationData, setGeolocationData } = usGeolocationStore();
  const { lat, long, city } = data;

  const ipTracker = async (IpAddress: string) => {
    try {
      const response = await axios.get(`https://ipwho.is/${IpAddress}`);
      setGeolocationData(response.data);
      if (geolocationData) {
        const {
          ip,
          city,
          region_code,
          latitude,
          longitude,
          connection: { asn, isp },
          timezone: { utc },
        } = response.data;
        setData({
          ip,
          city,
          utc,
          region_code,
          isp,
          lat: latitude,
          long: longitude,
          asn,
        });
      }
    } catch (e) {
      console.log(`error find ${e}`);
    }
  };

  const submitIp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (SearchIp) ipTracker(SearchIp);
  };

  return (
    <div>
      <div className="w-full h-[40vh] bg-pink-500 md:h-[35vh]  flex flex-col justify-center items-center px-2">
        <h1 className="text-[1.7em] font-bold mb-5 text-white">
          IP Address Tracker
        </h1>
        <form
          onSubmit={submitIp}
          className="w-[100%] md:w-[50%] lg:w-[35%] h-[45px] pl-4 flex bg-white rounded-[10px]"
        >
          <input
            type="text"
            name="search"
            placeholder="Search for any IP addressr domain"
            onChange={(e) => setSearchIp(e.target.value)}
            className="w-[90%] h-full"
          />
          <button
            type="submit"
            className="bg-black text-white w-[10%] rounded-r-[10px] pl-2"
          >
            <IoIosArrowForward size={27} />
          </button>
        </form>
      </div>

      <div className="max-w-full bg-blue-300">
        <MapContainer
          center={[lat, long]}
          zoom={20}
          dragging={false}
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
    </div>
  );
}

export default App;
