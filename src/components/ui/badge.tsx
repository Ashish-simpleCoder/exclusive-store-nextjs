import { poppins } from '@/fonts'
import cn from '@/lib/cn'

import type { ClassValue } from 'clsx'
import type { ComponentProps } from 'react'

type Theme = 'red' | 'green' | 'blue'

export default function Badge(props: ComponentProps<'div'> & { theme?: Theme }) {
   const { children, className, theme = 'red', ...rest } = props

   const themes: Record<Theme, ClassValue> = {
      red: 'bg-red-secondary',
      green: 'bg-[#0c902d]',
      blue: 'bg-[#0821ae]',
   }

   return (
      <div
         className={cn(
            'text-[#FAFAFA] text-xs rounded-[0.25rem] px-3 py-1',
            poppins.className,
            themes[theme],
            className
         )}
         {...rest}
      >
         <span>{children}</span>
      </div>
   )
}
