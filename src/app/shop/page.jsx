import ItemCard from '@/components/item/ItemCard'
import React from 'react'

const page = () => {
  return (
    <div className='bg-slate-200 flex items-center justify-center min-h-screen'>
      <ItemCard/>
      <ItemCard/>
    </div>
  )
}

export default page