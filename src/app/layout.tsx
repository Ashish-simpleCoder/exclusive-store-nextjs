import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'

export const inter = Inter({ subsets: ['latin'] })
export const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
   title: 'Exclusive Store',
   description: 'Exclusive Store made in NextJS',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang='en'>
         <body className={inter.className}>
            <Header />
            {children}
         </body>
      </html>
   )
}
