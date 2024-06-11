import { Product } from '@/types'

const products: Product[] = [
   {
      id: 2,
      price: 960,
      old_price: 1160,
      discount_percent: 35,
      rating: 4,
      total_rating_feedbacks: 63,
      title: 'The north coat',
      image: '/jacket.png',
   },
   {
      id: 1,
      price: 120,
      old_price: 160,
      discount_percent: 40,
      rating: 5,
      total_rating_feedbacks: 45,
      title: 'HAVIT HV-G92 Gamepad',
      image: '/gamepad.png',
   },
   {
      id: 3,
      price: 370,
      old_price: 400,
      discount_percent: 30,
      rating: 4.5,
      total_rating_feedbacks: 200,
      title: 'RGB liquid CPU Cooler',
      image: '/rgb-cooler.png',
   },
   {
      id: 4,
      price: 375,
      old_price: 400,
      discount_percent: 25,
      rating: 4,
      total_rating_feedbacks: 344,
      title: 'Small BookSelf',
      image: '/bookself.png',
   },
   {
      id: 5,
      price: 960,
      old_price: 1160,
      discount_percent: 40,
      rating: 4,
      total_rating_feedbacks: 203,
      title: 'Gucci duffle bag',
      image: '/woman-purse.png',
   },
]

export default async function bestSellingProducts() {
   return products
}
