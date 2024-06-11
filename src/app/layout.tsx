import Header from '@/components/layout/header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ReactQueryProvider from '@/components/wrapper/react-query-provider'
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

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
