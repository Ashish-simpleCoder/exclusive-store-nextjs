import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function RouteChangeListener({ cb }: { cb: () => void }) {
   const route = usePathname()

   useEffect(() => {
      cb()
   }, [route])

   return null
}
