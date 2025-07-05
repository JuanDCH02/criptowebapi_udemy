import { CurrencySchema, CryptCurrencyResponseSchema, PairSchema, CryptoPriceSchema} from "../schemas/cripto_schema";

import {z} from 'zod'

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptCurrencyResponseSchema>
export type Pair = z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>