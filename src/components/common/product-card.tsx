'use client'

import styled from '@emotion/styled'

import { poppins } from '@/fonts'
import cn from '@/lib/cn'
import { Product } from '@/types'
import Image from 'next/image'
import Button from '../ui/button-3'
import { ReactNode } from 'react'

const Div = styled.div`
   &:hover button.add-to-cart {
      display: unset !important;
   }
`

export default function ProductCard(props: {
   product: Product
   onCartClick: () => void
   showDiscount?: boolean
   children?: ReactNode
}) {
   return (
      <Div className='product-card relative h-[350px]'>
         <div className='img-box mb-4 relative'>
            <div className='w-full rounded-sm h-[250px] bg-[#F5F5F5] flex items-center justify-center'>
               <Image
                  width='172'
                  height='152'
                  src={props.product.image}
                  alt={props.product.title}
                  className='w-[172px] h-[152px] object-contain flex'
               />
            </div>
            <Button
               size='sm'
               className='add-to-cart md:hidden absolute bottom-0 w-full bg-black text-white'
               onClick={props.onCartClick}
            >
               Add To Cart
            </Button>
         </div>

         <div className='info-box flex flex-col gap-2'>
            <h4 className={cn(poppins.className, 'font-medium leading-6')}>{props.product.title}</h4>
            <div className='prices flex gap-3'>
               <p className={cn(poppins.className, 'font-medium text-red-secondary leading-6')}>
                  ${props.product.price}
               </p>
               <p className={cn(poppins.className, 'font-medium text-black text-opacity-50 leading-6 line-through')}>
                  ${props.product.old_price}
               </p>
            </div>
         </div>

         {props.children}
      </Div>
   )
}
