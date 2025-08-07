import {create} from 'zustand';
import type { GeolocationStore } from './types/GeolocationStore';

export const usGeolocationStore = create<GeolocationStore>((set) => ({
     geolocationData: null,
    setGeolocationData: (newValues) => set({geolocationData:newValues})
}))