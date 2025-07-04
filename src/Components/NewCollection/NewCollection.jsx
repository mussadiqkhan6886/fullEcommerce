import React from 'react'
import newcollection from "../Assets/new_collections"
import Items from '../Items/Items'

const NewCollection = () => {
  return (
    <section className='justify-center flex flex-col items-center '>
      <h3 className='text-4xl font-semibold mb-9 relative after:absolute after:content-[""] after:block after:w-40 after:h-1.5 after:rounded-full  after:bg-black after:mt-2 after:left-1/2 after:-translate-x-1/2'>NEW COLLECTIONS</h3>
      <div className='grid grid-cols-4 px-20'>
        {newcollection.map((item, i) => (
            <Items  key={i} id={item.id} name={item.name} img={item.image} old_price={item.old_price} new_price={item.new_price} />
        ))}
      </div>
    </section>
  )
}

export default NewCollection
