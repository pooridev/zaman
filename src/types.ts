import '@emotion/react'
import type { Radius } from './style/radius'
export type DatePickerValue = number | Date | string

export enum Locales {
  fa,
  en,
}

export type DaysRange = 0 | 1 | 2 | 3 | 4 | 5 | 6

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      gray: Record<number, string>
      primary: Record<number, string>
    }
    round: keyof typeof Radius
  }
}
