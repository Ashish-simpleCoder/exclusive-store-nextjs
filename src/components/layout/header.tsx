import { inter, poppins } from '@/fonts'
import Link from 'next/link'
import { HiOutlineMagnifyingGlass, HiOutlineHeart, HiOutlineShoppingCart } from 'react-icons/hi2'

import Container from './container'
import MobileHeader from './mobile-header'
import cn from '@lib/cn'

export default function Header() {
   return (
      <header className=' border-b-[1px] relative'>
         <Container className='pt-7 lg:pt-[47px] pb-3 lg:pb-[27px] flex justify-between items-center'>
            <Link href='/' className={inter.className + ' font-bold text-2xl'}>
               Exclusive
            </Link>
            <AppLinks />
            <CartActions />
            <MobileHeader />
         </Container>
      </header>
   )
}

export function AppLinks({ className }: { className?: string }) {
   return (
      <div className={cn('links gap-4 lg:gap-12 hidden lg:flex', className)}>
         <Link href='/' className={poppins.className}>
            Home
         </Link>
         <Link href='/' className={poppins.className}>
            Contact
         </Link>
         <Link href='/' className={poppins.className}>
            About
         </Link>
         <Link href='/' className={poppins.className}>
            Sign Up
         </Link>
      </div>
   )
}

export function CartActions({ className }: { className?: string }) {
   return (
      <div className={cn('actions gap-2 lg:gap-6 hidden lg:flex', className)}>
         <div className='relative '>
            <input
               type='text'
               placeholder='What are you looking for?'
               className={poppins.className + ' rounded-md relative bg-[#F5F5F5] px-5 py-2 w-[243px] text-xs'}
            />
            <button className='absolute right-5 top-1/2 -translate-y-1/2'>
               <HiOutlineMagnifyingGlass size='24' />
            </button>
         </div>
         <button>
            <HiOutlineHeart size='24' />
         </button>
         <button>
            <HiOutlineShoppingCart size='24' />
         </button>
      </div>
   )
}
