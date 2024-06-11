import type { ComponentPropsWithRef, ElementType } from 'react'
import type { DistributiveOmit, OmitChildrenFromVoid } from '@/types'

function Box<As extends ElementType>(
   props: DistributiveOmit<OmitChildrenFromVoid<As>, keyof {}> & { As: As }
): JSX.Element
function Box<As = 'span'>(props: ComponentPropsWithRef<'span'>): JSX.Element
function Box({ As: Component = 'span', ...props }) {
   const { className, ...rest } = props

   return (
      <>
         <Component
            // @ts-ignore
            className={className}
            {...rest}
         />
      </>
   )
}
export default Box
// export default function Container(props: ComponentProps<keyof HTMLElementTagNameMap> & {As?: keyof JSX.IntrinsicElements}) {



// ---------------------        old implementiona -------------------------------
// import cn from '@/lib/cn'
// import { ComponentPropsWithoutRef } from 'react'

// export default function Box<Tag extends keyof HTMLElementTagNameMap = 'span'>(
//    props: ComponentPropsWithoutRef<Tag> & { as?: Tag }
// ) {
//    const { as = 'span', className, ...rest } = props
//    const Tag = as

//    return (
//       <>
//          {/* @ts-ignore */}
//          <Tag className={cn('', className)} {...(rest as any)} />
//       </>
//    )
// }