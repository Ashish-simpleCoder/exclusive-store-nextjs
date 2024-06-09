import cn from '@/lib/cn'
import { ComponentPropsWithoutRef } from 'react'

export default function Container<Tag extends keyof HTMLElementTagNameMap = 'div'>(
   props: ComponentPropsWithoutRef<Tag> & { as?: Tag }
) {
   const { className, children, as = 'div', ...rest } = props
   const Tag = as

   return (
      <>
         {/* @ts-ignore */}
         <Tag className={cn('xl:container mx-auto px-6 md:px-[40px] xl:px-[120px]', className)} {...(rest as any)}>
            {children}
         </Tag>
      </>
   )
}

// export default function Container(props: ComponentProps<keyof HTMLElementTagNameMap> & {As?: keyof JSX.IntrinsicElements}) {
