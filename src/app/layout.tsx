import type { Metadata } from 'next'

import Header from '@/components/layout/header'
import ReactQueryProvider from '@/components/wrapper/react-query-provider'
import Footer from '@/components/layout/footer'
import { inter } from '@/fonts'

import './globals.css'

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
            <ReactQueryProvider>
               <Header />
               {children}
               <Footer />
            </ReactQueryProvider>
         </body>
      </html>
   )
}
