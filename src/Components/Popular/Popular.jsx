import React from 'react'
import data from "../Assets/data"
import Items from '../Items/Items'

const popular = () => {
  return (
    <section className=' pt-5 justify-center flex flex-col items-center'>
      <h2 className='text-4xl font-semibold mb-9 relative after:absolute after:content-[""] after:block after:w-40 after:h-1.5 after:rounded-full  after:bg-black after:mt-2 after:left-1/2 after:-translate-x-1/2'>POPULAR IN WOMEN</h2>
      <div className='flex justify-center p-5'>
        {data.map((item, i) => (
            <Items key={i} id={item.id} name={item.name} img={item.image} old_price={item.old_price} new_price={item.new_price}  />
        ))}
      </div>
    </section>
  )
}

export default popular
