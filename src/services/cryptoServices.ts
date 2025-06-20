import axios from 'axios'
import { CryptCurrenciesResponseSchema } from '../schemas/cripto_schema'



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