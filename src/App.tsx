

import Banner from "./components/Banner";
import Form from "./components/Form";
import MapDisplay from "./components/MapDisplay";
import MapInformationDisplay from "./components/MapInformationDisplay";
import { usMapStore } from "./store/usMap.Store";
import { usSearchIpStore } from "./store/usSearchIp.Store";
import axios from "axios";
import { usGeolocationStore } from "./store/usGeolocation.Store";
// Corrigindo os ícones padrão do Leaflet



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

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
     setSearchIp(e.target.value)
  }

  return (
    <div>
      <Banner>
         <Form submitIp={submitIp} handleInput={handleInput} />
      </Banner>
      <div className="grid place-items-center" >
      <MapInformationDisplay data={data} />
      </div>
      <MapDisplay lat={lat} long={long} city={city} />
    </div>
  );
}

export default App;
