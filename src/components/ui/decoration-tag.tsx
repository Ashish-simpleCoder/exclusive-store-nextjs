import type { ComponentPropsWithoutRef } from 'react'
import { poppins } from '@/fonts'
import cn from '@/lib/cn'

type Color = 'blue' | 'red' | 'green'

export default function DecorationTag(props: ComponentPropsWithoutRef<'div'> & { color?: Color }) {
   const { children, className, color = 'red', ...rest } = props

   return (
      <div
         className={cn(
            'text-red-secondary font-semibold leading-5 flex items-center gap-4',
            poppins.className,
            className
         )}
         {...rest}
      >
         <div className='bg-red-secondary h-10 w-5 rounded-[0.25rem]'></div>
         {children}
      </div>
   )
}
