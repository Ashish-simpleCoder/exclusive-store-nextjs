'use client'
import { MdOutlineDelete } from 'react-icons/md'

import ProductCard from '@/components/common/product-card'
import getWishList from '@/server-actions/get-wish-list'
import { useQuery } from '@tanstack/react-query'
import VisuallyHidden from '@/components/ui/visually-hidden'
import { revalidatePath } from 'next/cache'

export default function WishList() {
   const { data } = useQuery({
      queryKey: ['wish-list', 'products'],
      queryFn: getWishList,
   })
   const deleteFromWishList = (id: number | string) => {
      // TODO
      // delete query
      revalidatePath('')
   }
   return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7'>
         {data?.map((item) => {
            return (
               <ProductCard key={item.id} product={item}>
                  <div className='relative'>
                     <ProductCard.Img />
                     <ProductCard.CartButton />
                     <button
                        onClick={() => deleteFromWishList(item.id)}
                        title='Delete item'
                        className='absolute top-3 right-3 hover:fill-red-500 bg-white transition-colors p-1 rounded-full'
                     >
                        <MdOutlineDelete className='size-6  fill-inherit' />
                        <VisuallyHidden>Delete item</VisuallyHidden>
                     </button>
                  </div>
                  <ProductCard.Title />
                  <ProductCard.PriceSection />
                  <ProductCard.Badge />
                  <ProductCard.StarRating />
               </ProductCard>
            )
         })}
      </div>
   )
}
