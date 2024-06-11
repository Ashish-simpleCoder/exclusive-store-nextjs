import Image from 'next/image'

import Container from '@/components/layout/container'
import { poppins } from '@/fonts'

export default function PerksSection() {
   return (
      <Container
         As='section'
         className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 xl:gap-[88px] md:px-[40px] xl:px-[114px]  py-16 w-full'
      >
         <div className='flex flex-col gap-6'>
            <div className='img-box'>
               <Image
                  src='/fast-delivery.png'
                  alt='fast delivery'
                  width='80'
                  height='80'
                  className='w-20 h-20 mx-auto'
               />
            </div>
            <div className='info-box flex flex-col items-center gap-2'>
               <h3 className={`${poppins.className} font-semibold text-lg lg:text-xl`}>FREE AND FAST DELIVERY</h3>
               <p className={`${poppins.className} text-sm`}>Free delivery for all orders over $140</p>
            </div>
         </div>

         <div className='flex flex-col gap-6'>
            <div className='img-box'>
               <Image
                  src='/customer-care.png'
                  alt='customer care'
                  width='80'
                  height='80'
                  className='w-20 h-20 mx-auto'
               />
            </div>
            <div className='info-box flex flex-col items-center gap-2'>
               <h3 className={`${poppins.className} font-semibold text-lg lg:text-xl`}>24/7 CUSTOMER SERVICE</h3>
               <p className={`${poppins.className} text-sm`}>Friendly 24/7 customer support</p>
            </div>
         </div>

         <div className='flex flex-col gap-6 md:col-span-2 lg:col-span-1'>
            <div className='img-box'>
               <Image src='/back-gar.png' alt='fast delivery' width='80' height='80' className='w-20 h-20 mx-auto' />
            </div>
            <div className='info-box flex flex-col items-center gap-2'>
               <h3 className={`${poppins.className} font-semibold text-lg lg:text-xl`}>MONEY BACK GUARANTEE</h3>
               <p className={`${poppins.className} text-sm`}>We reurn money within 30 days</p>
            </div>
         </div>
      </Container>
   )
}
