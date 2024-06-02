import { inter, poppins } from '@/app/layout'
import Link from 'next/link'
import { BiCart, BiHeart, BiSearch } from 'react-icons/bi'

export default function Header() {
   return (
      <header className=' border-b-[1px]'>
         <div className='container mx-auto px-[135px] pt-[47px] pb-[27px] flex justify-between items-center'>
            <Link href='/' className={inter.className + ' font-bold text-2xl'}>
               Exclusive
            </Link>
            <AppLinks />
            <CartActions />
         </div>
      </header>
   )
}

function AppLinks() {
   return (
      <div className='links flex gap-12'>
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

function CartActions() {
   return (
      <div className='actions flex gap-6'>
         <div className='relative '>
            <input
               type='text'
               placeholder='What are you looking for?'
               className={poppins.className + ' rounded-md relative bg-[#F5F5F5] px-5 py-2 w-[243px] text-xs'}
            />
            <button className='absolute right-5 top-1/2 -translate-y-1/2'>
               <BiSearch size='24' />
            </button>
         </div>
         <button>
            <BiHeart size='24' />
         </button>
         <button>
            <BiCart size='24' />
         </button>
      </div>
   )
}
