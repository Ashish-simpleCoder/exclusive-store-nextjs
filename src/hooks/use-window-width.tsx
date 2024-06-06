import { useEventListener, useOnMountEffect } from 'classic-react-hooks'
import { useState } from 'react'

export default function useWindowWidth(cb: () => boolean) {
   const [display, setDisplay] = useState(false)

   useOnMountEffect(() => setDisplay(cb))

   useEventListener(
      () => window,
      'resize',
      () => setDisplay(cb)
   )

   return display
}
