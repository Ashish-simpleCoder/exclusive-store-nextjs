import type { Metadata } from 'next'
import { If } from 'classic-react-components'

import Container from '@/components/layout/container'
import WishList from '@/components/page/wish-list/wish-list'
import Button from '@/components/ui/button-3'
import { poppins } from '@/fonts'

export const metadata: Metadata = {
   title: 'Exclusive | WishList',
   description: 'WishList Products',
}

export default function WishListPage() {
   const items = 4

   return (
      <main className='flex min-h-screen flex-col items-center'>
         <Container As='section' className='w-full py-10'>
            <div className='heading w-full flex justify-between items-center mb-16'>
               <h2 className={`${poppins.className} text-xl`}>Wishlist ({items})</h2>
               <If condition={items > 0}>
                  <Button>Move All To Bag</Button>
               </If>
            </div>

            <WishList />
         </Container>
      </main>
   )
}
