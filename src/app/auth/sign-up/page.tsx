import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

import Inputs from '@/components/page/auth/inputs'
import Button from '@/components/ui/button-3'
import { inter, poppins } from '@/fonts'

export const metadata: Metadata = {
   title: 'Exclusive | Sign Up',
   description: 'Sign Up to Exclusive',
   icons: '/cart-fav.svg',
}

export default function SignUp() {
   return (
      <div className='sign-up-form flex flex-col justify-center gap-9 lg:gap-12'>
         <div className='heading flex flex-col gap-3 lg:gap-6'>
            <h2 className={`${inter.className} text-2xl xl:text-4xl leading-[30px] tracking-wide  whitespace-nowrap`}>
               Create an account
            </h2>
            <h2 className={`${poppins.className}`}>Enter your details below</h2>
         </div>

         <Inputs />

         <div className='btns flex flex-col gap-4'>
            <Button>Create Account</Button>
            <Button variant='outlined' className='flex gap-3 lg:gap-4 max-md:px-2'>
               <Image src='/google.png' alt='login with google' width='24' height='24' className='w-6 h-6' />{' '}
               <span>Sign up with Google</span>
            </Button>
            <div className={`${poppins.className} flex justify-center gap-4 mt-4 flex-wrap`}>
               <span className='font-normal text-opacity-70 text-black'>Already have an account?</span>
               <Link
                  href='/auth/log-in'
                  className='font-medium text-black text-opacity-70 border-b-[1px] pb-1 border-black border-opacity-70'
               >
                  Log in
               </Link>
            </div>
         </div>
      </div>
   )
}
