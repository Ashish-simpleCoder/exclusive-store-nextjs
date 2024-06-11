import cn from '@/lib/cn'
import Link from 'next/link'
import Image from 'next/image'

import Carousel from '@/components/common/carousel'

import { BsArrowRight } from 'react-icons/bs'
import type { Product } from './api/get-banner-product/route'
import AppErrorBoundary from '@/components/wrapper/app-error-boundary'
import { inter, poppins } from '@/fonts'
import Container from '@/components/layout/container'
import Flex from '@/components/layout/flex'
import FlashSaleSection from '@/components/page/home/flash-sale-section'

export const dynamic = 'force-dynamic'

export default function Home() {
   return (
      <main className='flex min-h-screen flex-col items-center'>
         <Container As='section' className='home-banner max-xl:w-full flex max-lg:flex-col-reverse py-10'>
            <BannerLinks />
            <AppErrorBoundary msg='Failed to load product banner. Please retry.'>
               <ProductCarousal />
            </AppErrorBoundary>
         </Container>
         <Flex dir='col'>
            <FlashSaleSection />
         </Flex>
      </main>
   )
}

function BannerLinks() {
   const links = [
      "Woman's Fashion",
      "Men's Fashion",
      'Electronics',
      'Home & Lifestyle',
      'Medicine',
      'Sports & Outdoor',
      "Baby's & Toys",
      'Groceries & Pets',
      'Health & Beauty',
   ]

   return (
      <div className='hidden lg:flex flex-col gap-4 border-r-[1px] pr-4 w-[13.5rem] flex-shrink-0'>
         {links.map((link) => {
            return (
               <Link
                  key={link}
                  href=''
                  className={cn('text-black hover:text-slate-700 transition-colors', poppins.className)}
               >
                  {link}
               </Link>
            )
         })}
      </div>
   )
}

async function ProductCarousal() {
   const res = await fetch(new URL('/api/get-banner-product', process.env.NEXT_URL)).then((res) => res.json())
   const data: Product[] = Array.isArray(res.products) ? res.products.slice(0, 5) : []

   return (
      <div className='product-carousal lg:w-[calc(100%-13.5rem)] lg:pl-10'>
         <Carousel
            items={data.map((p) => {
               return (
                  <div
                     key={p.id}
                     className='w-full bg-black flex max-md:flex-col-reverse max-md:pt-4 max-md:pb-10 items-center px-4 lg:px-16 md:h-[344px] md:justify-between'
                  >
                     <div className='info text-white text-left flex flex-col max-md:gap-2 gap-5 max-md:w-full'>
                        <h3 className={cn(poppins.className, 'flex gap-6 items-center')}>
                           <div className='w-10 h-12'>
                              <Image src={p.logo} width={40} height={48} alt='apple' />
                           </div>{' '}
                           {p.title}
                        </h3>
                        <p
                           className={cn(
                              inter.className,
                              'font-semibold text-3xl lg:text-5xl leading-[40px] lg:leading-[60px]'
                           )}
                        >
                           {p.heading}
                        </p>
                        <div className={cn('flex items-center gap-2', poppins.className)}>
                           <Link href='' className='border-b-[1px] border-[#FAFAFA] leading-7'>
                              Shop Now{' '}
                           </Link>
                           <BsArrowRight fill='white' size='24' />
                        </div>
                     </div>

                     <div className='w-[300px] lg:w-[500px]'>
                        <Image src={p.image} alt={p.title} width='500' height='300' objectFit='contain' />
                     </div>
                  </div>
               )
            })}
         />
      </div>
   )
}
