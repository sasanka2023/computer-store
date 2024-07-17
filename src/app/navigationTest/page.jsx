'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'



const page = () => {
    //CLIENT SIDE NAVIGATION
    const pathname = usePathname( );
    console.log(pathname);
    const router = useRouter();
    const handleClick = ()=>{
        console.log("clicked");
        router.replace("/")
    }
  return (
    <div className='w-full h-96 text-white bg-slate-500 mt-10 text-center'>
        <Link href='/' prefetch={false}    >click me</Link><br></br>
        <button onClick={handleClick}>write and redirect</button>
    </div>
  )
}

export default page