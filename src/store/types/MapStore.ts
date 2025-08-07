import type { MapData } from "../../types/MapFormate";

export interface MapStore  {
    data : MapData,
    setData: (data: MapData) => void
}