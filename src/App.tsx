import axios from "axios"
import { useEffect, useState } from "react"
import { MapContainer, TileLayer} from 'react-leaflet'
import { Marker, Popup , useMap  } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { IoIosArrowForward } from "react-icons/io";
// Corrigindo os ícones padrão do Leaflet

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


type IpGeolocationData = {
  ip: string;
  success: boolean;
  type: 'IPv4' | 'IPv6';
  continent: string;
  continent_code: string;
  country: string;
  country_code: string;
  region: string;
  region_code: string;
  city: string;
  latitude: number;
  longitude: number;
  is_eu: boolean;
  postal: string;
  calling_code: string;
  capital: string;
  borders: string;
  flag: {
    img: string;
    emoji: string;
    emoji_unicode: string;
  };
  connection: {
    asn: number;
    org: string;
    isp: string;
    domain: string;
  };
  timezone: {
    id: string;
    abbr: string;
    is_dst: boolean;
    offset: number;
    utc: string;
    current_time: string;
  };

};

interface MapData {
  ip: string,
  city: string,
  utc:string,
  region_code: string,
  isp: string,
  lat: number,
  long: number,
  asn: number
}

function App() {
  
  const [apiData, setApiData] = useState<IpGeolocationData |  null>(null)
  const [searchIp, setSearchIp] = useState<string>('177.40.13.114')
  const [mapData, setMapData] = useState<MapData>({
     ip: '177.40.13.114',
     city: 'Itabuna',
     utc:'-03:00',
     region_code: 'BR',
     isp: 'TELEF NICA BRASIL S.A',
     lat:  -14.7916229,
     long: -39.2833243,
     asn: 18881
  }) 
 

 

  const ipTracker = async (IpAddress:string) => {
     try {
       const response = await axios.get(`https://ipwho.is/${IpAddress}`)
       setApiData(response.data)
       if(apiData) {
          const {ip, city, region_code, latitude, longitude, connection: {asn, isp}, timezone: {utc}} = apiData;
          setMapData({
               ip,
     city,
     utc,
     region_code,
     isp,
     lat:  latitude,
     long: longitude,
     asn
          })
           setSearchIp('')
       }
     }catch(e) {
       console.log(`error find ${e}`)
     }
  }  

     

    const Iptracker = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
         ipTracker(searchIp) 
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchIp(e.target.value)
    }


      const UpdateMap = () => {
       const map = useMap();
       const {lat, long} =  mapData
       useEffect(()=> {
        map.setView([lat,  long],20)
       },[lat, long, map])
    }


 

  return (
    <div>
    <div className="w-full h-[25vh] bg-red-400 flex flex-col justify-center items-center">
      <h1 className='text-[1.7em] font-bold mb-5 text-white'>IP Address Tracker</h1>
    <form onSubmit={Iptracker} className='w-[35%] h-[45px] pl-4 flex bg-white rounded-[10px]'>
      <input type='text' name='search' placeholder='Search for any IP addressr domain' onChange={handleChange} className='w-[90%] h-full' />
      <button type='submit' className="bg-black text-white w-[10%] rounded-r-[10px] pl-2"><IoIosArrowForward size={27} /></button>
    </form>
    </div>

    <div className="max-w-full bg-blue-300">
        <MapContainer center={[mapData.lat, mapData.long]} zoom={20} dragging={false}
  zoomControl={false}
  scrollWheelZoom={false}
  doubleClickZoom={false}
  touchZoom={false}
  keyboard={false} style={{ height: '500px', width: '100%' }}>
      <UpdateMap />
      <TileLayer
       url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[mapData.lat, mapData.long]}>
        <Popup>{mapData.city} !</Popup>
      </Marker>
    </MapContainer>
    </div>
    </div>
  )
}

export default App
