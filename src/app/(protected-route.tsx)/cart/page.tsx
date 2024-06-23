import type { Metadata } from 'next'

import Container from '@/components/layout/container'
import CartList from './components/cart-list'

export const metadata: Metadata = {
   title: 'Exclusive | Cart',
   description: 'Cart Products',
}

export default function CartPage() {
   return (
      <main className='flex min-h-screen flex-col items-center'>
         <Container As='section' className='w-full py-10'>
            <CartList />
         </Container>
      </main>
   )
}
