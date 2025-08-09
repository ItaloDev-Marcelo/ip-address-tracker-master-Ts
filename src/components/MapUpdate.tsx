import { useEffect } from "react";
import { useMap } from "react-leaflet";
import {type MapUp } from "./types/MapUpdate";

export const MapUpdate = ({lat,long}: MapUp) => {
       const map = useMap();
       useEffect(()=> {
        map.setView([lat,  long],19)
       },[lat, long, map])

       return null
    }