'use client'

import { ComponentPropsWithoutRef } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

export function RightArrow(props: Pick<ComponentPropsWithoutRef<'button'>, 'onClick'>) {
   return (
      <button onClick={props.onClick} className='bg-[#F5F5F5] p-3 rounded-full'>
         <BsArrowRight size='18' />
      </button>
   )
}
export function LeftArrow(props: Pick<ComponentPropsWithoutRef<'button'>, 'onClick'>) {
   return (
      <button onClick={props.onClick} className='bg-[#F5F5F5] p-3 rounded-full'>
         <BsArrowLeft size='18' />
      </button>
   )
}
