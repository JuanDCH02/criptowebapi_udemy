import axios from 'axios'
import { CryptCurrenciesResponseSchema, CryptoPriceSchema } from '../schemas/cripto_schema'
import type { Pair } from '../types'



export async function getCryptos () {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
    //como hay dos data en el objeto asi entro directamente a donde estan los datos que necesito
    const {data: {Data}} = await axios(url)
    //parseo los resultados con mi schema
    const result = CryptCurrenciesResponseSchema.safeParse(Data)
    if(result.success){
        return result.data
    }
}

export async function fetchCurrencyCryptoPrice(pair:Pair) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`
    const {data: {DISPLAY}} = await axios(url)
    //console.log(DISPLAY[pair.cryptocurrency][pair.currency])
    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.cryptocurrency][pair.currency])
    if(result.success){
        return result.data
    }
    
}
