'use client'

import { If } from 'classic-react-components'
import { useState } from 'react'
import { HiOutlineHeart, HiOutlineShoppingCart } from 'react-icons/hi2'

import useWindowWidth from '@/hooks/use-window-width'
import cn from '@/lib/cn'
import { getScrollBarWidth } from '@/utils/get-scrollbar-width'
import Hamburger from '../ui/hamburger'
import { AppLinks } from './header'
import RouteChangeListener from '../utility/route-change-listener'

export default function MobileHeader() {
   const shouldDisplay = useWindowWidth(() => window.innerWidth < 1024)
   const [shouldShowNav, setShouldNav] = useState(false)
   const [top, setTop] = useState(0)

   const showNav = () => {
      setShouldNav(true)
      document.body.style.setProperty('overflow', 'hidden')
      document.body.style.setProperty('overscroll-behavior', 'contain')
      document.body.style.setProperty('position', 'relative')
      const margin = getScrollBarWidth()
      document.body.style.setProperty('margin-right', margin + 'px')
      // get header height
      const height = document.querySelector('header')?.getBoundingClientRect().height
      setTop(height ?? 0)
   }
   const hideNav = () => {
      setShouldNav(false)
      document.body.style.removeProperty('overflow')
      document.body.style.removeProperty('overscroll-behavior')
      document.body.style.removeProperty('position')
      document.body.style.removeProperty('margin-right')
   }

   return (
      <>
         <RouteChangeListener cb={() => setShouldNav(false)} />
         <If condition={shouldDisplay}>
            <Hamburger
               isActive={shouldShowNav}
               onClick={() => {
                  if (shouldShowNav) {
                     hideNav()
                  } else {
                     showNav()
                  }
               }}
            />
         </If>
         <If condition={shouldShowNav}>
            <nav className={cn('fixed inset-0 bg-[#e9e9e9] flex flex-col z-[2]')} style={{ top: top + 'px' }}>
               <AppLinks className='flex flex-col gap-2 overflow-y-auto px-2 py-4 ' />
               {/* <CartActions className='flex flex-col gap-2' /> */}
               <div className='mt-auto flex gap-2 px-2 py-4'>
                  <button>
                     <HiOutlineHeart size='24' />
                  </button>
                  <button>
                     <HiOutlineShoppingCart size='24' />
                  </button>
               </div>
            </nav>
         </If>
      </>
   )
}
