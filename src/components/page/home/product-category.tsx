'use client'
import { useQuery } from '@tanstack/react-query'

import { inter } from '@/fonts'
import cn from '@/lib/cn'
import AppSwiper from '@components/common/app-swiper'
import Container from '@components/layout/container'
import Flex from '@components/layout/flex'
import DecorationTag from '@components/ui/decoration-tag'
import { LeftArrow, RightArrow } from '@components/ui/right-arrow'

// server actions
import getProductCategories from '@/server-actions/get-product-categories'

export default function ProductCategory() {
   const { data } = useQuery({
      queryKey: ['product', 'product-categories'],
      queryFn: getProductCategories,
   })

   return (
      <Container className='flex flex-col py-16 w-full relative'>
         <DecorationTag>Categories</DecorationTag>

         <Flex className='xl:justify-between mt-6 mb-10 md:items-center'>
            <div className='info flex md:items-center max-md:flex-col md:gap-20 w-full'>
               <h2 className={cn(inter.className, 'font-semibold text-2xl lg:text-[2.25rem]')}>Browse By Category</h2>
            </div>
            <div className='flex gap-2'>
               {/* portal container for next and prev button for carousel */}
               <div className='pc-b1'>
                  <LeftArrow />
               </div>
               <div className='pc-b2'>
                  <RightArrow />
               </div>
            </div>
         </Flex>

         <AppSwiper
            nextEl={'.pc-b2'}
            prevEl={'.pc-b1'}
            slidesPerView={1}
            breakpoints={{
               400: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
               },
               768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
               },
               1024: {
                  slidesPerView: 5,
                  spaceBetween: 30,
               },
            }}
         >
            {data?.map((item) => {
               const Img = item.img
               return (
                  <div
                     key={item.id}
                     className='xs:w-[170px] h-[145px] border-[1px] border-black border-opacity-30 rounded-sm flex flex-col items-center justify-center gap-4   text-black hover:text-white stroke-black hover:stroke-white hover:bg-red-secondary hover:border-none transition-colors'
                  >
                     {Img && <Img className='stroke-inherit' />}
                     {item.name}
                  </div>
               )
            })}
         </AppSwiper>
      </Container>
   )
}
