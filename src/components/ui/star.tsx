import cn from '@/lib/cn'
import { ComponentPropsWithoutRef } from 'react'
import Box from './box'

export default function Star(props: ComponentPropsWithoutRef<'span'>) {
   const { className, children, ...rest } = props
   return (
      <Box className={cn('text-[1.25rem] text-gray-300 cursor-pointer', className)} {...rest}>
         {children ?? '★'}
      </Box>
   )
}
