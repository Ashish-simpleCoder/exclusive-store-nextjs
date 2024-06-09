import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

export default function Portal({
   children,
   node,
}: {
   children: ReactNode
   node: Element | DocumentFragment | (() => Element)
}) {
   if (typeof window == 'undefined') return null
   return createPortal(children, typeof node == 'function' ? node?.() : node)
}
