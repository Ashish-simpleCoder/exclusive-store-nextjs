'use client'
import type { ComponentProps } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import cn from '@/lib/cn'

import 'swiper/css'
import 'swiper/css/pagination'
import { CSSSelector } from 'swiper/types'

export const AppSwiperSlide = SwiperSlide

export default function AppSwiper(
   props: ComponentProps<typeof Swiper> & {
      nextEl?: HTMLElement | CSSSelector | null | undefined
      prevEl?: HTMLElement | CSSSelector | null | undefined
   }
) {
   const { className, children, nextEl, prevEl, ...rest } = props

   return (
      <Swiper
         slidesPerView={4}
         spaceBetween={30}
         modules={[Navigation]}
         navigation={{
            nextEl: nextEl,
            prevEl: prevEl,
         }}
         className={cn('!flex !w-full', className)}
         {...rest}
      >
         {Array.isArray(children) &&
            children.map((child, idx) => {
               return <SwiperSlide key={idx}>{child}</SwiperSlide>
            })}
      </Swiper>
   )
}
