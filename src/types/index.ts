export type Prettify<T> = {
   [K in keyof T]: T[K]
} & {}

export type Product = {
   id: number | string
   title: string
   image: string

   price: number
   old_price?: number
   discount_percent: number

   rating: number
   total_rating_feedbacks: number
}
