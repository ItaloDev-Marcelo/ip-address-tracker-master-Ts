import type { IpGeolocationData } from "../../types/GeoLocationFormate";


export interface GeolocationStore {
     geolocationData: IpGeolocationData | null,
     setGeolocationData: (newValues:IpGeolocationData) => void
}