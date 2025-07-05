import {z} from 'zod'

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string(),
}) 
export const CryptCurrencyResponseSchema = z.object({
    CoinInfo: z.object({
        FullName: z.string(),
        Name: z.string(),
    })
})
export const CryptCurrenciesResponseSchema = z.array(CryptCurrencyResponseSchema)
export const PairSchema = z.object({
    currency: z.string(),
    cryptocurrency: z.string(),
})
export const CryptoPriceSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    MKTCAP: z.string(),
    LASTUPDATE: z.string(),
})