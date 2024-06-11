import Link from 'next/link'
import { ComponentProps, ComponentPropsWithoutRef, PropsWithoutRef, ReactNode } from 'react'
import Star from './star'

function Man<
   Comp extends ((props: any) => any) | keyof HTMLElementTagNameMap,
   Values extends ComponentPropsWithoutRef<Comp>,
>(props: { As: Comp } & Values) {
   // function Man<Comp extends (props:any) => any, Values extends MyParameters<Comp>>(props: {as:Comp} & Values){
   return 2
}

{
   /* <Man  as={Temp}  num={3}/> */
}
;<Man As={Link} href='/' />
;<Man As={'abbr'} />

function Temp({ num }: { num: number }) {
   return num
}

type MyParameters<T extends (args: any) => any> = T extends (args: infer Args extends any) => any ? Args : never

// working-2

// function Man<Comp extends (props:any) => any, Values extends MyParameters<Comp>>(props: Comp, val?:Values){
//    return 2
// }

// {/* <Man  as={Temp}  /> */}
// Man(Temp,{num: 2343})

// function Temp({num}:{num: number}){
//    return num
// }

// type MyParameters<T extends (args: any) => any> = T extends (args: infer Args extends any) => any ? Args : never

// working basic
// function Man<Comp extends (...props:any[]) => any, Values extends MyParameters<Comp>>(props: Comp, val?:Values){
//    return 2
// }

// {/* <Man  as={Temp}  /> */}
// Man(Temp,[2])

// function Temp(num: number){
//    return num
// }
// type MyParameters<T extends (args: Record<string, any>) => any> = T extends (args: infer Args extends Record<string, any>) => any ? Args : never
// type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer Args extends any[]) => any ? Args : never
