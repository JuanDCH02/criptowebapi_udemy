import { currencies } from "../data"
import { useCryptoStore } from "../store"
import { useState } from "react"
import type { Pair } from "../types"
import { ErrorMessage } from "./ErrorMessage"

export const CriptoSearchForm = () => {

    const {cryptocurrencies, fetchData} = useCryptoStore()
    const [error,SetError] = useState('')
    const [pair,setPair] = useState<Pair>({
        currency:'',
        cryptocurrency:''
    })
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(Object.values(pair).includes('')){
            SetError('Ambos campos son obligatorios')
            return
        }
        SetError('')
        fetchData(pair) 
    }

  return (
    <form className="form"
        onSubmit={handleSubmit}
        >
        
        <div className="field">
            {error && (
                <ErrorMessage>{error}</ErrorMessage>
            )}
            <label htmlFor="currency">
                Moneda:
            </label>
            <select name="currency" id="currency"
                onChange={handleChange}
                value={pair.currency}
            >
                <option value="">-- Seleccione --</option>
                {currencies.map( currency => (
                    <option key={currency.code} value={currency.code}
                        >{currency.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="field">
            <label htmlFor="cryptocurrency">
                Criptomoneda:
            </label>
            <select name="cryptocurrency" id="cryptocurrency"
                onChange={handleChange}
                value={pair.cryptocurrency}
            >
                <option value="">-- Seleccione --</option>
                {cryptocurrencies.map(crypto =>(
                    <option
                        key={crypto.CoinInfo.Name}
                        value={crypto.CoinInfo.Name}
                            >{crypto.CoinInfo.FullName}</option>
                    )
                )}
            </select>
        </div>

        <input type="submit" value='cotizar' />
    </form>
  )
}
