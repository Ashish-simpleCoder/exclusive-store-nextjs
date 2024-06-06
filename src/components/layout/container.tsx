import cn from '@/lib/cn'
import { ComponentProps } from 'react'

export default function Container(props: ComponentProps<'div'>) {
   const { className, children, ...rest } = props
   return (
      <div className={cn('xl:container mx-auto px-2 md:px-[40px] xl:px-[120px]', className)} {...rest}>
         {children}
      </div>
   )
}
