import type { ComponentPropsWithRef, ElementType } from 'react'

import cn from '@/lib/cn'
import { DistributiveOmit, OmitChildrenFromVoid } from '@/types'

function Container<As extends ElementType>(
   props: DistributiveOmit<OmitChildrenFromVoid<As>, keyof {}> & { As: As }
): JSX.Element
function Container<As = 'div'>(props: ComponentPropsWithRef<'div'>): JSX.Element
function Container({ As: Component = 'div', ...props }) {
   const { className, ...rest } = props

   return (
      <>
         <Component
            // @ts-ignore
            className={cn('xl:container mx-auto px-3 md:px-[40px] xl:px-[120px]', className)}
            {...rest}
         />
      </>
   )
}
export default Container

// export default function Container(props: ComponentProps<keyof HTMLElementTagNameMap> & {As?: keyof JSX.IntrinsicElements}) {

// ----------------------- old implementation -------------------------------
// import cn from '@/lib/cn'
// import { ComponentPropsWithoutRef } from 'react'

// export default function Container<Tag extends keyof HTMLElementTagNameMap = 'div'>(
//    props: ComponentPropsWithoutRef<Tag> & { as?: Tag }
// ) {
//    const { className, children, as = 'div', ...rest } = props
//    const Tag = as

//    return (
//       <>
//          {/* @ts-ignore */}
//          <Tag className={cn('xl:container mx-auto px-6 md:px-[40px] xl:px-[120px]', className)} {...(rest as any)}>
//             {children}
//          </Tag>
//       </>
//    )
// }
