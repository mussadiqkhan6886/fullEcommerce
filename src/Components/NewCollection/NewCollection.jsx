import React from 'react'
import newcollection from "../Assets/new_collections"
import Items from '../Items/Items'
import Heading from '../heading/Heading'

const NewCollection = () => {
  return (
    <section className='justify-center flex flex-col items-center '> 
      <Heading title={"New Collection"} /> 
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-20'>
        {newcollection.map((item, i) => (
            <Items  key={i} id={item.id} name={item.name} img={item.image} old_price={item.old_price} new_price={item.new_price} />
        ))}
      </div>
    </section>
  )
}

export default NewCollection
