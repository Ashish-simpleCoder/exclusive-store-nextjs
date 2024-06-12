'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import Input from '@/components/ui/input'

const SignUpSchema = z.object({
   name: z.string({ required_error: 'Name is required' }),
   email: z
      .string({ required_error: 'Email is required', invalid_type_error: 'Email is invalid' })
      .email('Email is invalid'),
   password: z
      .string({ required_error: 'Password is required' })
      .min(3, 'Minimum 3 characters are required')
      .max(20, 'Maximum 20 characters are allowed'),
})

export default function Inputs() {
   const { register, watch } = useForm({
      values: {
         name: '',
         email: '',
         password: '',
      },
      resolver: zodResolver(SignUpSchema),
   })

   return (
      <div className='inputs flex flex-col gap-10'>
         <Input variant='floating' label='Email' {...register('email')} value={watch('email')} />
         <Input variant='floating' label='Password' {...register('password')} value={watch('password')} />
      </div>
   )
}
