import fs from 'node:fs'

export default async function getCart() {
   const cart = fs.readFileSync(process.cwd() + '/src/server-actions/cart.json')
   return JSON.parse(cart.toString()) as {
      id: number
      price: number
      old_price: number
      discount_percent: number
      rating: number
      total_rating_feedbacks: number
      title: string
      image: string
      quantity: number
   }[]
}
