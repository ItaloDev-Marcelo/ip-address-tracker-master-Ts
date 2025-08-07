import {create} from 'zustand';
import type { IpStore } from './types/IpStore';

export const usSearchIpStore = create<IpStore>((set) => ({
    SearchIp: '177.40.13.114',
    setSearchIp: (newValue) => set({SearchIp: newValue})
}))