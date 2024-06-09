'use client'

import cn from '@/lib/cn'
import dynamic from 'next/dynamic'
import { ComponentProps, ComponentPropsWithoutRef, Suspense } from 'react'
import { Carousel as AppCarousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
const Portal = dynamic(() => import('../ui/portal'))

export default function Carousel({
   items,
   PrevArrow,
   NextArrow,
   portals,
   ...rest
}: Partial<ComponentProps<typeof AppCarousel>> & {
   items: Array<any>
   PrevArrow?: (props: Pick<ComponentPropsWithoutRef<'button'>, 'onClick'>) => JSX.Element
   NextArrow?: (props: Pick<ComponentPropsWithoutRef<'button'>, 'onClick'>) => JSX.Element
   portals?: string[]
}) {
   return (
      <AppCarousel
         showArrows={false}
         showStatus={false}
         infiniteLoop={true}
         autoPlay={true}
         showThumbs={false}
         width={'100%'}
         {...(PrevArrow && {
            renderArrowPrev: (onClick) => {
               if (portals) {
                  return (
                     <Suspense>
                        <Portal node={() => document.querySelector(portals[0])!}>
                           <PrevArrow onClick={onClick} />
                        </Portal>
                     </Suspense>
                  )
               }
               return <PrevArrow onClick={onClick} />
            },
         })}
         {...(NextArrow && {
            renderArrowNext: (onClick) => {
               if (portals) {
                  return (
                     <Suspense>
                        <Portal node={() => document.querySelector(portals[1])!}>
                           <NextArrow onClick={onClick} />
                        </Portal>
                     </Suspense>
                  )
               }
               return <NextArrow onClick={onClick} />
            },
         })}
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
         {...rest}
      >
         {items}
      </AppCarousel>
   )
}
