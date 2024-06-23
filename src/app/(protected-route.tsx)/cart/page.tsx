import type { Metadata } from 'next'
import Link from 'next/link'
import { For, If, Then } from 'classic-react-components'
import Image from 'next/image'
import { MdOutlineDelete } from 'react-icons/md'

import Container from '@/components/layout/container'
import getCart from '@/server-actions/get-cart'
import { poppins } from '@/fonts'
import VisuallyHidden from '@/components/ui/visually-hidden'
import Button from '@/components/ui/button-3'
import Input from '@/components/ui/input'
import { handleCartCountChange } from '@/server-actions/update-cart-count'

export const metadata: Metadata = {
   title: 'Exclusive | Cart',
   description: 'Cart Products',
}
export const dynamic = 'force-dynamic'

export default async function CartPage() {
   const data = await getCart()
   const deleteFromCart = (id: number | string) => {
      // TODO
      // delete query
      // revalidatePath('')
   }

   return (
      <main className='flex min-h-screen flex-col items-center'>
         <Container As='section' className='w-full py-10'>
            <div className=''>
               <If condition={data}>
                  <Then>
                     <div className='overflow-x-auto h-[500px]'>
                        <table className='w-full min-w-[600px] table-auto '>
                           <thead className='mx-10 my-6'>
                              <tr>
                                 <th className={`${poppins.className} text-start font-normal py-6`}>Product</th>
                                 <th className={`${poppins.className} text-start font-normal`}>Price</th>
                                 <th className={`${poppins.className} text-start font-normal`}>Quantity</th>
                                 <th className={`${poppins.className} text-start font-normal`}>Subtotal</th>
                                 <th className={`${poppins.className} text-start font-normal`}>Delete</th>
                              </tr>
                           </thead>
                           <tbody>
                              <For data={data}>
                                 {(cart) => {
                                    return (
                                       <tr key={cart.id}>
                                          <td>
                                             <div className='flex gap-4 items-center py-6'>
                                                <div className='img-box'>
                                                   <Image
                                                      src={cart.image}
                                                      height='54'
                                                      width='54'
                                                      className='w-[54px] h-[54px]'
                                                      alt={cart.title}
                                                   />
                                                </div>
                                                <h3>{cart.title}</h3>
                                             </div>
                                          </td>
                                          <td>${cart.price}</td>
                                          <td>
                                             <Input
                                                type='number'
                                                value={cart.quantity.toString().padStart(2, '0')}
                                                // onChange={(e) => {
                                                //    handleCartCountChange(+e.target.value)
                                                // }}
                                                handleChange={handleCartCountChange}
                                                data-id={cart.id}
                                                className='w-[76px] h-11 px-3 border rounded-md'
                                             />
                                          </td>
                                          <td>${cart.quantity * cart.price}</td>
                                          <td>
                                             <button
                                                className='hover:fill-red-500 hover:-translate-y-1 transition-transform'
                                                title='delete'
                                             >
                                                <MdOutlineDelete className='size-6 fill-inherit' />
                                                <VisuallyHidden>Delete item</VisuallyHidden>
                                             </button>
                                          </td>
                                       </tr>
                                    )
                                 }}
                              </For>
                           </tbody>
                        </table>
                     </div>

                     <div className='flex justify-between mt-6'>
                        <Button As={Link} href='/' variant='outlined'>
                           Return To Shop
                        </Button>
                        <Button As={Link} href='/' variant='outlined'>
                           Update Cart
                        </Button>
                     </div>

                     <div className='flex justify-between mt-20 flex-wrap gap-4'>
                        <div className='max-md:w-full'>
                           <div className='flex gap-4'>
                              <input
                                 placeholder='Coupon Code'
                                 className='border-black border-[1px] max-md:w-[60%] rounded-md px-3 lg:px-6'
                              />
                              <Button className='max-md:w-[40%]'>Apply Coupon</Button>
                           </div>
                        </div>
                        <form className='border-[1px] border-black rounded-md py-8 px-6 w-full lg:max-w-[470px]'>
                           <h3 className={`${poppins.className} text-xl mb-6`}>Cart Total</h3>
                           <div className='flex flex-col gap-4'>
                              <div className='flex justify-between pb-4 border-b-[1px] border-black'>
                                 <span>Subtotal</span>
                                 <span>$123</span>
                              </div>
                              <div className='flex justify-between pb-4 border-b-[1px] border-black'>
                                 <span>Shipping</span>
                                 <span>Free</span>
                              </div>
                              <div className='flex justify-between pb-4'>
                                 <span>Total</span>
                                 <span>$123</span>
                              </div>
                           </div>
                           <div className='text-center'>
                              <Button>Proceed to checkout</Button>
                           </div>
                        </form>
                     </div>
                  </Then>
               </If>
            </div>
         </Container>
      </main>
   )
}
