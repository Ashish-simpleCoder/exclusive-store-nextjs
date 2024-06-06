import cn from '@/lib/cn'
import { ComponentProps } from 'react'

export default function Container(props: ComponentProps<'div'>) {
   const { className, children, ...rest } = props
   return (
      <div className={cn('container mx-auto px-2 md:px-[80px] xl:px-[135px]', className)} {...rest}>
         {children}
      </div>
   )
}
