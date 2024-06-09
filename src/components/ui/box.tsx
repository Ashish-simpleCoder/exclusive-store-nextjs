import cn from '@/lib/cn'
import { ComponentPropsWithoutRef } from 'react'

export default function Box<Tag extends keyof HTMLElementTagNameMap = 'span'>(
   props: ComponentPropsWithoutRef<Tag> & { as?: Tag }
) {
   const { as = 'span', className, ...rest } = props
   const Tag = as

   return (
      <>
         {/* @ts-ignore */}
         <Tag className={cn('', className)} {...(rest as any)} />
      </>
   )
}
