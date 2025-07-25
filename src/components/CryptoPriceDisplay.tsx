import { useMemo } from "react"
import { useCryptoStore } from "../store"
import { Spinner } from "./Spinner"

export const CryptoPriceDisplay = () => {
    const {result} = useCryptoStore() 
    const {loading} = useCryptoStore() 
    // Verificar si hay datos válidos en result (no strings vacíos)
    const hasResult = useMemo(() => Object.keys(result).length > 0 && !Object.values(result).includes(''), [result])

    return (
        
        <div className="result-wrapper">
        {loading? <Spinner/>:''}
        {hasResult && (
            <>
            <h2>Cotización</h2>
            <div className="result">
                <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="imgame-crypto" />
                <div>
                    <p>El precio es de: <span>{result.PRICE}</span></p>
                    <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
                    <p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
                    <p>Capitalización de mercado: <span>{result.MKTCAP}</span></p>
                    <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
                </div>
            </div>
            </>
        )}
        </div>
    )
}
