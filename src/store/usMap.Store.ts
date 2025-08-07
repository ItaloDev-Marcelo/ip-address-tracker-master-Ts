import {create} from 'zustand';
import type { MapStore } from './types/MapStore';

export const usMapStore = create<MapStore>((set) => ({
      data: {
          ip: '177.40.13.114',
          city: 'Itabuna',
          utc:'-03:00',
          region_code: 'BR',
          isp: 'TELEF NICA BRASIL S.A',
          lat:  -14.7916229,
          long: -39.2833243,
          asn: 18881
      },
      setData: (newData) => set({data: newData})
}))