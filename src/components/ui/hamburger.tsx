import cn from '@/lib/cn'
import { ComponentProps } from 'react'

export default function Hamburger({
   onClick,
   isActive,
}: Pick<ComponentProps<'div'>, 'onClick'> & { isActive?: boolean }) {
   return (
      <div
         className={cn('hamburger flex flex-col gap-1 cursor-pointer', isActive && 'active-hamburger')}
         onClick={onClick}
      >
         <div className='l1 bg-black h-[2px] w-6 rounded-full'></div>
         <div className='l2 bg-black h-[2px] w-6  rounded-full'></div>
         <div className='l3 bg-black h-[2px] w-6  rounded-full'></div>
      </div>
   )
}
