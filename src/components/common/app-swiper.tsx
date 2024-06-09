'use client'
import type { ComponentProps } from 'react'

import type { CSSSelector } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import cn from '@/lib/cn'

import 'swiper/css'
import 'swiper/css/pagination'

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
         slidesPerView={1}
         spaceBetween={30}
         modules={[Navigation]}
         navigation={{
            nextEl: nextEl,
            prevEl: prevEl,
         }}
         breakpoints={{
            640: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            768: {
               slidesPerView: 3,
               spaceBetween: 30,
            },
            1024: {
               slidesPerView: 4,
               spaceBetween: 30,
            },
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
