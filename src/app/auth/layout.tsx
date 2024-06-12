import Image from 'next/image'
import { PropsWithChildren } from 'react'

export default function AuthLayout(props: PropsWithChildren) {
   return (
      <div className='flex pt-16 pb-28'>
         <div className='img-box max-md:hidden'>
            <Image
               src='/auth-image.png'
               alt='exclusive platform login'
               width='805'
               height='781'
               className='aspect-video w-[650px] h-[600px]  xl:w-[805px] xl:h-[781px]'
            />
         </div>
         <div className='form-box pl-3 pr-3 md:pl-10 md:pr-10 xl:pl-32 xl:pr-32 grid lg:place-content-center max-lg:w-full'>
            {props.children}
         </div>
      </div>
   )
}
