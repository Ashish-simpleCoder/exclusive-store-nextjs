import { poppins } from '@/fonts'
import cn from '@/lib/cn'

import type { ClassValue } from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

type Theme = 'red' | 'green' | 'blue'
type Variant = 'outlined' | 'filled'
type Size = 'sm' | 'default'

// -------------------------- implement -2 ----------------------------------------------------------------------

// my practice for type inference
// type MyParameters<T extends (args: any) => any> = T extends (args: infer Args extends any) => any ? Args : never
// Comp extends (props:any) => any, Values extends MyParameters<Comp>

export default function Button<As extends ((props: any) => any) | keyof HTMLElementTagNameMap>(
   props: { theme?: Theme; variant?: Variant; size?: Size; As?: As } & ComponentPropsWithoutRef<As>
) {
   const { children, className, theme = 'red', variant = 'filled', size = 'default', As = 'button', ...rest } = props

   const themes: Record<Theme, ClassValue> = {
      red: variant == 'filled' ? 'bg-[#DB4444]' : '',
      green: variant == 'filled' ? 'bg-[#0c902d]' : '',
      blue: variant == 'filled' ? 'bg-[#0821ae]' : '',
   }
   const Tag = As

   return (
      <Tag
         className={cn(
            poppins.className,
            'text-[#FAFAFA] text-sm lg:text-base rounded-[0.25rem] px-10 py-3 lg:px-12 lg:py-4 hover:bg-opacity-90 hover:text-opacity-90 transition-opacity',
            themes[theme],
            variant == 'outlined' && 'text-black border-[1px] border-black border-opacity-50',
            size == 'sm' && 'text-sm py-[0.40rem] lg:py-[0.65rem]',
            className
         )}
         {...(rest as any)}
      >
         {children}
      </Tag>
   )
}

// ------------------ old implementation -------------------------------------------------------------

// import { poppins } from '@/fonts'
// import cn from '@/lib/cn'

// import type { ClassValue } from 'clsx'
// import type { ComponentProps } from 'react'

// type Theme = 'red' | 'green' | 'blue'
// type Variant = 'outlined' | 'filled'
// type Size = 'sm' | 'default'

// export default function Button(props: ComponentProps<'button'> & { theme?: Theme; variant?: Variant; size?: Size }) {
//    const { children, className, theme = 'red', variant = 'filled', size = 'default', ...rest } = props

//    const themes: Record<Theme, ClassValue> = {
//       red: variant == 'filled' ? 'bg-[#DB4444]' : '',
//       green: variant == 'filled' ? 'bg-[#0c902d]' : '',
//       blue: variant == 'filled' ? 'bg-[#0821ae]' : '',
//    }

//    return (
//       <button
//          className={cn(
//             poppins.className,
//             'text-[#FAFAFA] text-sm lg:text-base rounded-[0.25rem] px-10 py-3 lg:px-12 lg:py-4 hover:bg-opacity-90 hover:text-opacity-90 transition-opacity',
//             themes[theme],
//             variant == 'outlined' && 'text-black border-[1px] border-black border-opacity-50',
//             size == 'sm' && 'text-sm py-[0.40rem] lg:py-[0.65rem]',
//             className
//          )}
//          {...rest}
//       >
//          {children}
//       </button>
//    )
// }
