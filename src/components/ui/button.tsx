import { poppins } from '@/fonts'
import cn from '@/lib/cn'

import type { ClassValue } from 'clsx'
import type { ComponentProps } from 'react'

type Theme = 'red' | 'green' | 'blue'
type Variant = 'outlined' | 'filled'
type Size = 'sm' | 'default'

export default function Button(props: ComponentProps<'button'> & { theme?: Theme; variant?: Variant; size?: Size }) {
   const { children, className, theme = 'red', variant = 'filled', size = 'default', ...rest } = props

   const themes: Record<Theme, ClassValue> = {
      red: variant == 'filled' ? 'bg-[#DB4444]' : '',
      green: variant == 'filled' ? 'bg-[#0c902d]' : '',
      blue: variant == 'filled' ? 'bg-[#0821ae]' : '',
   }

   return (
      <button
         className={cn(
            poppins.className,
            'text-[#FAFAFA] text-base rounded-[0.25rem] px-12 py-4 hover:bg-opacity-70 hover:text-opacity-70',
            themes[theme],
            variant == 'outlined' && 'text-black border-[1px] border-black border-opacity-50',
            size == 'sm' && 'py-[0.65rem]',
            className
         )}
         {...rest}
      >
         {children}
      </button>
   )
}
