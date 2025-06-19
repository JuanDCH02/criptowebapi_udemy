import { CurrencySchema } from "../schemas/cripto_schema";
import {z} from 'zod'

export type Currency = z.infer<typeof CurrencySchema>