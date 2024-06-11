// have taken reference from below article
// https://dev.to/kartikbudhraja/creating-a-dynamic-star-rating-system-in-react-2c8

import { useState } from 'react'
import Star from '../ui/star'
import cn from '@/lib/cn'
import { If } from 'classic-react-components'
import { poppins } from '@/fonts'

export default function StarRating({
   size = 5,
   rating_level,
   total_rating_feedbacks,
   disabled = true,
}: {
   size?: number
   rating_level: number
   total_rating_feedbacks?: number
   disabled?: boolean
}) {
   const [stars, setStars] = useState(() => [...new Array(size).keys()])
   const [new_level, setNewLevel] = useState<number>(rating_level)

   const onMouseEnter = (id: number) => {
      setNewLevel(id)
   }
   const onMouseOut = () => {
      setNewLevel(rating_level)
   }

   return (
      <div className='flex items-center'>
         {stars.map((i) => {
            return (
               <Star
                  key={i}
                  className={cn(
                     new_level && i + 1 <= new_level ? 'text-[#FFAD33]' : 'text-gray-300',
                     disabled && 'cursor-default'
                  )}
                  {...(!disabled && {
                     onMouseEnter: () => onMouseEnter(i + 1),
                     onMouseOut: onMouseOut,
                     onClick: () => setNewLevel(i + 1),
                  })}
               />
            )
         })}
         <If condition={total_rating_feedbacks}>
            <span className={`${poppins.className} font-semibold text-sm text-black text-opacity-50 inline-block ml-2`}>
               ({total_rating_feedbacks})
            </span>
         </If>
      </div>
   )
}
