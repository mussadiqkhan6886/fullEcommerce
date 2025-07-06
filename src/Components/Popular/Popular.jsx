import React from 'react'
import data from "../Assets/data"
import Items from '../Items/Items'
import Heading from '../heading/Heading'

const popular = () => {
  return (
    <section className=' pt-5 justify-center flex flex-col items-center'>
     <Heading title={"POPULAR IN WOMEN"} />
      <div className='flex justify-center p-5'>
        {data.map((item, i) => (
            <Items key={i} id={item.id} name={item.name} img={item.image} old_price={item.old_price} new_price={item.new_price}  />
        ))}
      </div>
    </section>
  )
}

export default popular
