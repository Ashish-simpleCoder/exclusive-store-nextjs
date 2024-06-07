import { ComponentPropsWithoutRef } from 'react'

export default function VisuallyHidden<Tag extends keyof HTMLElementTagNameMap = 'span'>(
   props: ComponentPropsWithoutRef<Tag> & { as?: Tag }
) {
   const { as = 'span', ...rest } = props
   const Tag = as

   return (
      <>
         {/* @ts-ignore */}
         <Tag
            className='absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden clip-[rect(0,0,0,0)] whitespace-nowrap border-0'
            {...(rest as any)}
         />
      </>
   )
}
