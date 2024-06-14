'use client'

import { createContext, useContext, type ReactNode, ComponentProps } from 'react'
import type { Product } from '@/types'

import styled from '@emotion/styled'
import Image from 'next/image'

import { poppins } from '@/fonts'
import cn from '@/lib/cn'
import Button from '../ui/button-3'
import Badge from '../ui/badge'
import StarRating from './star-rating'

const Div = styled.div`
   &:hover button.add-to-cart {
      display: unset !important;
   }
`

const ctx = createContext<Product | null>(null)
const useCtx = () => useContext(ctx)

export default function ProductCard(props: { product: Product; onCartClick?: () => void; children?: ReactNode }) {
   if (props.children) {
      return (
         <ctx.Provider value={props.product}>
            <Div className='product-card relative h-[350px]'>{props.children}</Div>
         </ctx.Provider>
      )
   }

   return (
      <ctx.Provider value={props.product}>
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
      </ctx.Provider>
   )
}

ProductCard.Img = function Img(props: { className?: string }) {
   const product = useCtx()!
   const { className } = props

   return (
      <div
         className={cn(
            'img-box relative mb-4 w-full rounded-sm h-[250px] bg-[#F5F5F5] flex items-center justify-center',
            className
         )}
      >
         <Image
            width='172'
            height='152'
            src={product.image}
            alt={product.title}
            className='w-[172px] h-[152px] object-contain flex'
         />
      </div>
   )
}

ProductCard.Title = function Title(props: ComponentProps<'h4'>) {
   const title = useCtx()?.title
   const { className, children, ...rest } = props

   return (
      <h4 className={cn(poppins.className, 'font-medium leading-6 mb-2', className)} {...rest}>
         {title}
      </h4>
   )
}

ProductCard.PriceSection = function PriceSection(props: { className?: string }) {
   const product = useCtx()
   const { className } = props

   return (
      <div className={cn('prices flex gap-3', className)}>
         <p className={cn(poppins.className, 'font-medium text-red-secondary leading-6')}>${product?.price}</p>
         <p className={cn(poppins.className, 'font-medium text-black text-opacity-50 leading-6 line-through')}>
            ${product?.old_price}
         </p>
      </div>
   )
}

ProductCard.Badge = function PBadge(props: ComponentProps<typeof Badge>) {
   const product = useCtx()!
   const { className, ...rest } = props

   return (
      <Badge className={cn('absolute top-3 left-3', className)} {...rest}>
         {product.discount_percent}%
      </Badge>
   )
}

ProductCard.StarRating = function PStarRating(
   props: Omit<ComponentProps<typeof StarRating>, 'rating_level' | 'total_rating_feedbacks'>
) {
   const product = useCtx()!

   return (
      <StarRating rating_level={product.rating} total_rating_feedbacks={product.total_rating_feedbacks} {...props} />
   )
}

ProductCard.CartButton = function CartButton(props: ComponentProps<typeof Button>) {
   const { className, ...rest } = props

   return (
      <Button className={cn('add-to-cart md:hidden absolute bottom-0 w-full bg-black text-white', className)} {...rest}>
         Add To Cart
      </Button>
   )
}
