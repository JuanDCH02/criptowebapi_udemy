import {create} from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { CryptoCurrency } from './types'
import { getCryptos } from './services/cryptoServices'


type CryptoStore = {
    cryptocurrencies: CryptoCurrency[],
    fetchCriptos: () => Promise<void>

}


export const useCriptoStore = create<CryptoStore>()(
    devtools(  
        (set) =>({
        cryptocurrencies:[],
        fetchCriptos: async () => {
            const cryptocurrencies = await getCryptos()
            set(() => ({cryptocurrencies}) )
        }
        })
    ))