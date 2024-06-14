'use client'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { inter } from '@/fonts'
import cn from '@/lib/cn'

import Flex from '@components/layout/flex'
import DecorationTag from '@components/ui/decoration-tag'
import Container from '@components/layout/container'
import { LeftArrow, RightArrow } from '@components/ui/right-arrow'
import AppSwiper from '@components/common/app-swiper'
import ProductCard from '@components/common/product-card'
import Button from '@/components/ui/button-3'

// server actions
import getFlashSaleProducts from '@/server-actions/get-flash-sale-products'

export default function FlashSaleSection() {
   const { data } = useQuery({
      queryKey: ['product', 'flash-sale'],
      queryFn: getFlashSaleProducts,
   })

   return (
      <Container className='flex flex-col py-16 w-full relative'>
         <DecorationTag>Today&apos;s</DecorationTag>

         <Flex className='xl:justify-between mt-6 mb-10 md:items-center'>
            <div className='info flex md:items-center max-md:flex-col md:gap-20 w-full'>
               <h2 className={cn(inter.className, 'font-semibold text-2xl lg:text-[2.25rem]')}>Flash Sales</h2>
               {/* <h1 className='text-4xl'>Timer</h1> */}
            </div>
            <div className='flex gap-2'>
               {/* portal container for next and prev button for carousel */}
               <div className='b1'>
                  <LeftArrow />
               </div>
               <div className='b2'>
                  <RightArrow />
               </div>
            </div>
         </Flex>

         <AppSwiper nextEl={'.b2'} prevEl={'.b1'}>
            {data?.map((item) => {
               return (
                  <ProductCard key={item.id} product={item}>
                     <div className='relative'>
                        <ProductCard.Img />
                        <ProductCard.CartButton />
                     </div>
                     <ProductCard.Title />
                     <ProductCard.PriceSection />
                     <ProductCard.Badge />
                     <ProductCard.StarRating />
                  </ProductCard>
               )
            })}
         </AppSwiper>

         <div className='text-center mt-16'>
            <Button As={Link} href='/'>
               View All Products
            </Button>
         </div>
      </Container>
   )
}
