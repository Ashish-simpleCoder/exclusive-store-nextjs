import cn from '@/lib/cn'
import Link from 'next/link'
import Image from 'next/image'

import Carousel from '@/components/common/carousel'

import { BsArrowRight } from 'react-icons/bs'
import { Product } from './api/get-banner-product/route'
import AppErrorBoundary from '@/components/wrapper/app-error-boundary'
import { inter, poppins } from '@/fonts'

export const dynamic = 'force-dynamic'

export default function Home() {
   return (
      <main className='flex min-h-screen flex-col items-center'>
         <section className='home-banner container mx-auto px-[135px] flex py-10'>
            <BannerLinks />
            <AppErrorBoundary msg='Failed to load product banner. Please retry.'>
               <ProductCarousal />
            </AppErrorBoundary>
         </section>
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
      <div className='flex flex-col gap-4 border-r-[1px] pr-4 w-[13.5rem] flex-shrink-0'>
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
      <div className='product-carousal w-[calc(100%-13.5rem)] pl-10'>
         <Carousel
            items={data.map((p) => {
               return (
                  <div key={p.id} className='w-full bg-black flex items-center px-16  h-[344px]'>
                     <div className='info text-white text-left flex flex-col gap-5'>
                        <h3 className={cn(poppins.className, 'flex gap-6 items-center')}>
                           <div className='w-10 h-12'>
                              <Image src={p.logo} width={40} height={48} alt='apple' />
                           </div>{' '}
                           {p.title}
                        </h3>
                        <p className={cn(inter.className, 'font-semibold text-5xl leading-[60px]')}>{p.heading}</p>
                        <div className={cn('flex items-center gap-2', poppins.className)}>
                           <Link href='' className='border-b-[1px] border-[#FAFAFA] leading-7'>
                              Shop Now{' '}
                           </Link>
                           <BsArrowRight fill='white' size='24' />
                        </div>
                     </div>

                     <div className='w-[500px]'>
                        <Image src={p.image} alt={p.title} width='500' height='300' objectFit='contain' />
                     </div>
                  </div>
               )
            })}
         />
      </div>
   )
}
