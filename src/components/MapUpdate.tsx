import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface mapUpdate {
    lat: number,
    long:number,
}

export const MapUpdate = ({lat,long}: mapUpdate) => {
       const map = useMap();
       useEffect(()=> {
        map.setView([lat,  long], 20)
       },[lat, long, map])

       return null
    }