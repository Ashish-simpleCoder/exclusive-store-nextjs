import type { ComponentPropsWithoutRef } from 'react'
import type { ClassValue } from 'clsx'
import type { DistributiveOmit, OmitChildrenFromVoid } from '@/types'

import React from 'react'

import { poppins } from '@/fonts'
import cn from '@/lib/cn'

type Theme = 'red' | 'green' | 'blue'
type Variant = 'outlined' | 'filled'
type Size = 'sm' | 'default'

function Button<As extends React.ElementType>(
   props: { theme?: Theme; variant?: Variant; size?: Size; As: As } & DistributiveOmit<
      OmitChildrenFromVoid<As>,
      keyof {}
   >
): JSX.Element
function Button<As extends React.ElementType>(
   props: { theme?: Theme; variant?: Variant; size?: Size } & ComponentPropsWithoutRef<'button'>
): JSX.Element
function Button({ As: Component = 'button', ...props }) {
   const { className, theme = 'red', variant = 'filled', size = 'default', ...rest } = props

   const themes: Record<Theme, ClassValue> = {
      red: variant == 'filled' ? 'bg-red-secondary' : '',
      green: variant == 'filled' ? 'bg-[#0c902d]' : '',
      blue: variant == 'filled' ? 'bg-[#0821ae]' : '',
   }

   return (
      <Component
         // @ts-ignore
         className={cn(
            poppins.className,
            'text-[#FAFAFA] text-sm lg:text-base rounded-[0.25rem] px-3 md:px-10 py-3 lg:px-12 lg:py-4 hover:bg-opacity-90 hover:text-opacity-90 transition-opacity',
            themes[theme as Theme],
            variant == 'outlined' && 'text-black border-[1px] border-black border-opacity-50',
            size == 'sm' && 'text-sm py-[0.40rem] lg:py-[0.65rem]',
            className
         )}
         {...rest}
      />
   )
}

export default Button
