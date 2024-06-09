'use client'

import AppSwiper from '@/components/common/app-swiper'
import ProductCard from '@/components/common/product-card'
import type { Product } from '@/types'

export default function ProductSlider({ data, nextEl, prevEl }: { data: Product[]; nextEl: string; prevEl: string }) {
   return (
      <AppSwiper slidesPerView={4} nextEl={nextEl} prevEl={prevEl}>
         {data.map((item) => {
            return <ProductCard key={item.id} onCartClick={() => {}} product={item} />
         })}
      </AppSwiper>
   )
}
