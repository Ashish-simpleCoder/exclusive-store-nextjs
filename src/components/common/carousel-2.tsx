'use client'

import dynamic from 'next/dynamic'
import { ComponentProps, ComponentPropsWithoutRef, Suspense } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const Portal = dynamic(() => import('../ui/portal'), { ssr: false })

export default function Carousel2({
   items,
   PrevArrow,
   NextArrow,
   portals,
   ...rest
}: Partial<ComponentProps<typeof AliceCarousel>> & {
   items: Array<any>
   PrevArrow?: (props: Pick<ComponentPropsWithoutRef<'button'>, 'onClick'>) => JSX.Element
   NextArrow?: (props: Pick<ComponentPropsWithoutRef<'button'>, 'onClick'>) => JSX.Element
   portals?: string[]
}) {
   return (
      <AliceCarousel
         autoPlay={true}
         {...(PrevArrow && {
            renderPrevButton: () => {
               if (portals) {
                  return (
                     <Suspense>
                        <Portal node={() => document.querySelector(portals[0])!}>
                           <PrevArrow />
                        </Portal>
                     </Suspense>
                  )
               }
               return <PrevArrow />
            },
         })}
         {...(NextArrow && {
            renderNextButton: (onClick) => {
               if (portals) {
                  return (
                     <Suspense>
                        <Portal node={() => document.querySelector(portals[1])!}>
                           <NextArrow />
                        </Portal>
                     </Suspense>
                  )
               }
               return <NextArrow />
            },
         })}
         {...rest}
      >
         {items}
      </AliceCarousel>
   )
}
