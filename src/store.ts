import {create} from 'zustand'
import { devtools } from 'zustand/middleware'
import type { CryptoCurrency, CryptoPrice, Pair } from './types'
import { fetchCurrencyCryptoPrice, getCryptos } from './services/cryptoServices'


type CryptoStore = {
    cryptocurrencies: CryptoCurrency[]
    result: CryptoPrice
    loading: boolean
    fetchCriptos: () => Promise<void>
    fetchData: (pair:Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(
    devtools(  
        (set) =>({
            //inicializo mi state
        cryptocurrencies:[],
        result: {} as CryptoPrice,
        loading: false,

        fetchCriptos: async () => {
            //obtengo las cryptos a usar de la api
            const cryptocurrencies = await getCryptos()
            set(() => ({ cryptocurrencies }))
        },
        fetchData: async (pair) =>{
            set(() => ({ loading: true }))
            const result = await fetchCurrencyCryptoPrice(pair)
            //obtengo los datos de usar de la crypto seleccionada en el form
            set(() => ({ 
                result, 
                loading:false 
            }))
        },
        })
    ))