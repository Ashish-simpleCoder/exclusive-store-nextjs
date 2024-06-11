import Image from 'next/image'
import Link from 'next/link'

import { inter, poppins } from '@/fonts'
import cn from '@/lib/cn'
import Container from '@components/layout/container'
import Flex from '@components/layout/flex'
import DecorationTag from '@components/ui/decoration-tag'

export default function NewArrival() {

   return (
      <Container className='flex flex-col py-16 w-full relative'>
         <DecorationTag>Featured</DecorationTag>

         <Flex className='xl:justify-between mt-6 mb-10 md:items-center'>
            <div className='info flex md:items-center max-md:flex-col md:gap-20 w-full'>
               <h2 className={cn(inter.className, 'font-semibold text-2xl lg:text-[2.25rem]')}>New Arrival</h2>
            </div>
         </Flex>

         <div className='grid lg:grid-cols-2 gap-7'>
            <div className='g-1 flex flex-col bg-black h-[286px] lg:h-[600px] relative rounded-md'>
               <div className='img-box'>
                  <Image
                     src='/ps-5.png'
                     width='511'
                     height='511'
                     alt='ps5'
                     className='absolute bottom-0 left-1/2 -translate-x-1/2 max-lg:h-[270px] max-lg:w-unset'
                  />
               </div>
               <div className='info-box mt-auto z-[1] pl-3 lg:pl-8 flex flex-col gap-3 lg:gap-4 mb-8'>
                  <h3 className={`${inter.className} font-semibold text-2xl tracking-[3%] leading-6 text-white`}>
                     PlayStation 5
                  </h3>
                  <p className={`${poppins.className} font-light text-sm text-[#FAFAFA] leading-[21px]`}>
                     Black and White version of the PS5 <br /> coming out on sale.
                  </p>
                  <Link
                     href='/'
                     className={`${poppins.className} w-fit leading-6 text-white border-b-[1px] border-[#FAFAFA] border-opacity-50 flex`}
                  >
                     Shop Now
                  </Link>
               </div>
            </div>

            <div className='g-2 flex flex-col gap-7'>
               <div className='gg-1 flex flex-col bg-[#0D0D0D] h-[284px] relative rounded-md'>
                  <div className='img-box'>
                     <Image src='/woman.png' width='432' height='286' alt='ps5' className='absolute bottom-0 right-0' />
                  </div>
                  <div className='info-box mt-auto z-[1] pl-3 lg:pl-8 flex flex-col gap-3 lg:gap-4 mb-3 lg:mb-6'>
                     <h3 className={`${inter.className} font-semibold text-2xl tracking-[3%] leading-6 text-white`}>
                        Women&apos;s Collections
                     </h3>
                     <p className={`${poppins.className} font-light text-sm text-[#FAFAFA] leading-[21px]`}>
                        Featured woman collections that <br /> give you another vibe.
                     </p>
                     <Link
                        href='/'
                        className={`${poppins.className} w-fit leading-6 text-white border-b-[1px] border-[#FAFAFA] border-opacity-50 flex`}
                     >
                        Shop Now
                     </Link>
                  </div>
               </div>

               <div className='gg-2 flex max-lg:flex-col gap-7'>
                  <div className='flex flex-col lg:flex-1 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8),black)] h-[284px] relative rounded-md'>
                     <div className='img-box'>
                        <Image
                           src='/speaker.png'
                           width='210'
                           height='222'
                           alt='ps5'
                           className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        />
                     </div>
                     <div className='info-box mt-auto z-[1] pl-3 lg:pl-6 flex flex-col gap-1 lg:gap-2 mb-3 lg:mb-6'>
                        <h3 className={`${inter.className} font-semibold text-2xl tracking-[3%] leading-6 text-white`}>
                           Speakers
                        </h3>
                        <p className={`${poppins.className} font-light text-sm text-[#FAFAFA] leading-[21px]`}>
                           Amazon wireless speakers
                        </p>
                        <Link
                           href='/'
                           className={`${poppins.className} w-fit leading-6 text-white border-b-[1px] border-[#FAFAFA] border-opacity-50 flex`}
                        >
                           Shop Now
                        </Link>
                     </div>
                  </div>
                  <div className='flex flex-col lg:flex-1 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8),black)] h-[284px] relative rounded-md'>
                     <div className='img-box'>
                        <Image
                           src='/gucci-perfume.png'
                           width='210'
                           height='222'
                           alt='ps5'
                           className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        />
                     </div>
                     <div className='info-box mt-auto z-[1] pl-3 lg:pl-6 flex flex-col gap-1 lg:gap-2 mb-3 lg:mb-6'>
                        <h3 className={`${inter.className} font-semibold text-2xl tracking-[3%] leading-6 text-white`}>
                           Perfume
                        </h3>
                        <p className={`${poppins.className} font-light text-sm text-[#FAFAFA] leading-[21px]`}>
                           Gucci intense oud
                        </p>
                        <Link
                           href='/'
                           className={`${poppins.className} w-fit leading-6 text-white border-b-[1px] border-[#FAFAFA] border-opacity-50 flex`}
                        >
                           Shop Now
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Container>
   )
}
