import React from 'react'

const Items = ({id, name, img, old_price, new_price}) => {
  return (
    <div className='p-3 flex flex-col items-center hover:scale-105 cursor-pointer transition-all'>
      <img src={img} className='w-[250px] mb-2' alt="image item" />
      <p className='text-center px-7'>{name}</p>
      <div className='flex gap-5 mt-1'>
         <p className='font-semibold'>${new_price}</p>
        <p className='text-gray-600 line-through'>${old_price}</p>
      </div>
    </div>
  )
}

export default Items
