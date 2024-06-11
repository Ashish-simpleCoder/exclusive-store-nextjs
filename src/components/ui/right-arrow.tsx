'use client'

import { ComponentPropsWithoutRef } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import VisuallyHidden from './visually-hidden'

export function RightArrow(props: Pick<ComponentPropsWithoutRef<'button'>, 'onClick'>) {
   return (
      <button onClick={props.onClick} className='bg-[#F5F5F5] p-2 md:p-3 rounded-full' title='Next Slide'>
         <VisuallyHidden>Next Slide</VisuallyHidden>
         <BsArrowRight className='size-4 md:size-[18px]' />
      </button>
   )
}
export function LeftArrow(props: Pick<ComponentPropsWithoutRef<'button'>, 'onClick'>) {
   return (
      <button onClick={props.onClick} className='bg-[#F5F5F5] p-2 md:p-3 rounded-full' title='Previous Slide'>
         <VisuallyHidden>Previous Slide</VisuallyHidden>
         <BsArrowLeft className='size-4 md:size-[18px]' />
      </button>
   )
}
