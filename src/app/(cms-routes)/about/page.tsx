import type { Metadata } from 'next'
import Image from 'next/image'

import Container from '@/components/layout/container'
import { inter, poppins } from '@/fonts'
import cn from '@/lib/cn'

export const metadata: Metadata = {
   title: 'Exclusive | About us',
   description: 'Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh',
   icons: '/cart-fav.svg',
}

export default function AboutPage() {
   return (
      <main className='flex min-h-screen flex-col items-center'>
         <Container
            As='section'
            className='max-xl:w-full flex max-md:flex-col py-10 mr-0 lg:!pr-0 items-center gap-10 xl:gap-20'
         >
            <div className='xl:max-w-[525px] md:w-1/2'>
               <h2
                  className={cn(inter.className, 'font-semibold text-3xl lg:text-[54px] leading-[64px] mb-5 lg:mb-10')}
               >
                  Our Story
               </h2>
               <Image
                  src='/about-our-story.png'
                  alt='about'
                  width='705'
                  height='609'
                  className='md:hidden mx-auto w-full max-w-[400px] xl:h-[250px] mb-5'
               />
               <div>
                  <p className={`${poppins.className} mb-6 leading-[26px]`}>
                     Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active
                     presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions,
                     Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                  </p>
                  <p className={`${poppins.className} leading-[26px]`}>
                     Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a
                     diverse assotment in categories ranging from consumer.
                  </p>
               </div>
            </div>
            <Image
               src='/about-our-story.png'
               alt='about'
               width='705'
               height='609'
               className='max-md:hidden w-1/2 h-[400px] xl:w-[705px] xl:h-[609px]'
            />
         </Container>
      </main>
   )
}
