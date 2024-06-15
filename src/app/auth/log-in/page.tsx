import Link from 'next/link'
import type { Metadata } from 'next'

import Inputs from '@/components/page/auth/inputs'
import Button from '@/components/ui/button-3'
import { inter, poppins } from '@/fonts'

export const metadata: Metadata = {
   title: 'Exclusive | Login',
   description: 'Login to Exclusive',
}

export default function Login() {
   return (
      <div className='sign-up-form flex flex-col justify-center gap-9 lg:gap-12'>
         <div className='heading flex flex-col gap-3 lg:gap-6'>
            <h2 className={`${inter.className} text-2xl xl:text-4xl leading-[30px] tracking-wide`}>
               Log in to Exclusive
            </h2>
            <h2 className={`${poppins.className}`}>Enter your details below</h2>
         </div>

         <Inputs />

         <div className='btns flex flex-col gap-4'>
            <div className='flex justify-between gap-4 items-center'>
               <Button>Log In</Button>
               <Link href='' className={`${poppins.className} text-red-secondary`}>
                  Forgot Password?
               </Link>
            </div>
            <div className={`${poppins.className} flex justify-center gap-4 mt-4 flex-wrap`}>
               <span className='font-normal text-opacity-70 text-black'>Don&apos;t have an account?</span>
               <Link
                  href='/auth/sign-up'
                  className='font-medium text-black text-opacity-70 border-b-[1px] pb-1 border-black border-opacity-70'
               >
                  Sign up
               </Link>
            </div>
         </div>
      </div>
   )
}
