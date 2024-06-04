const products = [
   {
      id: 1,
      title: 'iPhone 14 Series',
      heading: 'Up to 10% off Voucher',
      image: '/banner-1.png',
      logo: '/apple-logo.png',
   },
   {
      id: 2,
      title: 'iPhone 14 Series',
      heading: 'Up to 10% off Voucher',
      image: '/banner-1.png',
      logo: '/apple-logo.png',
   },
   {
      id: 3,
      title: 'iPhone 14 Series',
      heading: 'Up to 10% off Voucher',
      image: '/banner-1.png',
      logo: '/apple-logo.png',
   },
]
export type Product = (typeof products)[0]

export async function GET() {
   return Response.json({ products, status: 'success' })
}
