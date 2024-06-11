// copied code from this article for deep understanding
// https://www.fullstack.com/labs/resources/blog/typescript-react-component-interfaces-overloading-by-props

import * as React from 'react'

export interface ElementProps {}
export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never
export type VoidElement =
   | 'area'
   | 'base'
   | 'br'
   | 'col'
   | 'hr'
   | 'img'
   | 'input'
   | 'link'
   | 'meta'
   | 'param'
   | 'command'
   | 'keygen'
   | 'source'

export type OmitChildrenFromVoid<C extends React.ElementType> = C extends VoidElement
   ? Omit<React.ComponentPropsWithRef<C>, 'children'>
   : React.ComponentPropsWithRef<C>

export interface OverloadedElement<P> {
   <C extends React.ElementType>(props: { As: C } & P & DistributiveOmit<OmitChildrenFromVoid<C>, keyof P>): JSX.Element
   (props: P & DistributiveOmit<React.ComponentPropsWithRef<'div'>, keyof P>): JSX.Element
}

const Element: OverloadedElement<ElementProps> = ({ As: Component = 'div', ...props }) => {
   return <Component {...props} />
}
