import React from 'react'
import one from '../../../public/gridimgs/1.jpg'
import Image from 'next/image'
const ItemCard = () => {
  return (
    <div className='w-60 flex h-screen bg-stone-500 ml-20'>
        <div className='w-1/2 justify-center text-center content-center'>
            <Image src={one} alt=''></Image>
        </div>
        <div className='w-1/2 text-white flex-row'>
            <h1>name</h1>
            <p>sasasas</p>
        </div>

    </div>
  )
}

export default ItemCard