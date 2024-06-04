'use client'

import type { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Button from '../ui/button'

export default function AppErrorBoundary({
   children,
   msg = 'Something went wrong.',
}: {
   children: ReactNode
   msg?: string
}) {
   return (
      <ErrorBoundary
         FallbackComponent={({ error, resetErrorBoundary }) => {
            return (
               <div>
                  <h3>{msg}</h3>
                  <Button onClick={resetErrorBoundary}>Retry</Button>
               </div>
            )
         }}
      >
         {children}
      </ErrorBoundary>
   )
}
