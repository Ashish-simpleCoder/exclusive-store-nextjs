'use client'

import cn from '@/lib/cn'
import { Carousel as AppCarousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Carousel({ items }: { items: Array<any> }) {
   return (
      <AppCarousel
         showArrows={false}
         showStatus={false}
         infiniteLoop={true}
         autoPlay={true}
         renderIndicator={(onClick, isSelected, index, label) => {
            return (
               <div
                  className={cn(
                     'p-[2px] bg-white opacity-50 rounded-full inline-block mx-3 cursor-pointer',
                     isSelected && 'opacity-100',
                     !isSelected && 'w-3 h-3'
                  )}
                  onClick={onClick}
               >
                  {isSelected && <span className='block w-[10px] h-[10px] bg-[#DB4444] rounded-full'></span>}
               </div>
            )
         }}
      >
         {items}
      </AppCarousel>
   )
}
