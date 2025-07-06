import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropIcon from "../Components/Assets/dropdown_icon.png"
import Items from '../Components/Items/Items'

const ShopCategory = ({banner, category}) => {

  const {all_products} = useContext(ShopContext)

  return (
    <div className='lg:px-20 md:py-9 text-center'> 
      <img src={banner} alt="banner" />
      <div className='flex justify-between my-5 px-4'>
        <p>
          <span className='font-semibold'>Showing 1-12 </span>
          out of 36 Products
        </p>
        <div className='flex border border-gray-400 items-center gap-2 py-1 px-3 rounded-full'>
          <p>Sort by</p>
         <img className='w-[11px] h-[8px]' src={dropIcon} alt="dropdownicon" />
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {all_products.map((item, i) => {
          if(item.category == category){
            return <Items key={i} id={item.id} name={item.name} img={item.image} old_price={item.old_price} new_price={item.new_price}  />
          }else{
            return null;
          }
        })}
      </div>
      <button className='my-10 border px-5 py-2 bg-gray-100 rounded-full cursor-pointer border-gray-400 '>Explore More</button>
    </div>
  )
}

export default ShopCategory
