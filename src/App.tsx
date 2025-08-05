import axios from "axios"
import { useState } from "react"
import { MapContainer,TileLayer} from 'react-leaflet';
import { Marker, Popup} from "react-leaflet";


type IpGeolocationData = {
  ip: string;
  city: string;
  region: string;
  region_code: string;
  country_code: string;
  country_code_iso3: string;
  country_name: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  asn: string;
  org: string;
};


function App() {
  
  const [apiData, setApiData] = useState<IpGeolocationData[] |  null>(null)
  const [searchIp, setSearchIp] = useState<string>('8.8.8.8') 

  const ipTracker = async (IpAddress:string) => {
     try {
       const response = await axios.get(`https://ipwho.is/${IpAddress}`)
       setApiData(response.data)
       setSearchIp('')
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

  console.log(apiData)
 

  return (
    <div>
    <div className="w-full h-[25vh] bg-red-400">
      <h1>Ip-Tracker-test</h1>
    <form onSubmit={Iptracker}>
      <input type='text' name='search' onChange={handleChange} />
      <button type='submit'>Enviar</button>
    </form>
    </div>

    <div className="max-w-full bg-blue-300">
   <MapContainer center={[51.505, -0.09]}
  zoom={13}
  scrollWheelZoom={false}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
    </div>
  )
}

export default App
