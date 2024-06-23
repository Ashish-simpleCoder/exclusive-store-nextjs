'use server'

import { revalidatePath } from 'next/cache'
import cart from '@/server-actions/cart.json'
import fs from 'node:fs'

export const handleCartCountChange = async (id: number, count: number) => {
   const new_data = structuredClone(cart).map((item) => {
      if (item.id == id) {
         item.quantity = count
      }
      return item
   })
   fs.writeFileSync(process.cwd() + '/src/server-actions/cart.json', JSON.stringify(new_data))
   revalidatePath('/cart')
}
