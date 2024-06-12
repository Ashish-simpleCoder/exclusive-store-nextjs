'use client'

import { poppins } from '@/fonts'
import cn from '@/lib/cn'
import emotionStyled from '@emotion/styled'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

type InputProps = ComponentPropsWithoutRef<'input'> & {
   variant?: 'floating' | 'default'
   label?: string
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<ElementRef<'input'>, InputProps>((props: InputProps, ref) => {
   const { variant = 'default', label, className, id: inputId, value, ...rest } = props
   const id = useId()

   // [&:valid+label]:-translate-y-[24px]

   if (variant == 'floating') {
      return (
         <Div className='form-group relative' inputValue={value}>
            <input
               type='text'
               id={id + ' ' + inputId}
               value={value}
               className={cn(
                  'pb-2 border-b-[1px] w-full outline-none focus-within:border-b-black [&:focus-within+label]:-translate-y-[24px] invalid:border-red-500',
                  className
               )}
               ref={ref}
               {...rest}
            />
            <label
               htmlFor={id}
               className={`${poppins.className} text-base opacity-60 font-normal absolute left-0 pointer-events-none transition-all`}
            >
               {label}
            </label>
         </Div>
      )
   }

   return <input type='text' />
})
export default Input

const Div = emotionStyled.div<{ inputValue: string | number | readonly string[] | undefined }>`
   label{
      ${(props) => {
         if (props.inputValue) {
            return `
                  transform:translateY(-24px);
            `
         }
         return ``
      }}

   }
`
