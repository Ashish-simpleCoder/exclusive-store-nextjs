import cn from '@/lib/cn'
import type { ComponentPropsWithoutRef } from 'react'

type Direction = 'row' | 'col' | 'row-reverse' | 'col-reverse'

export default function Flex<Tag extends keyof HTMLElementTagNameMap = 'div'>(
   props: ComponentPropsWithoutRef<Tag> & { as?: Tag; dir?: Direction }
) {
   const { className, children, as = 'div', dir = 'row', ...rest } = props
   const Tag = as

   const directions: Record<Direction, string> = {
      row: 'flex-row',
      col: 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'col-reverse': 'flex-col-reverse',
   }

   return (
      <>
         {/* @ts-ignore */}
         <Tag className={cn('flex flex-row w-full', directions[dir], className)} {...(rest as any)}>
            {children}
         </Tag>
      </>
   )
}
