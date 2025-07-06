import React, { useContext } from 'react'
import star_dull from "../Assets/star_dull_icon.png"
import star_icon from "../Assets/star_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const DisplayProduct = ({itemFound}) => {

  const {addToCart} = useContext(ShopContext)

  return (
    <section className='flex items-center md:flex-row flex-col mt-7 gap-3'>
      <div className='w-[200px] hidden  lg:flex flex-col items-center'>
        <img className='w-[100px] mb-2' src={itemFound.image} alt="image" />
        <img className='w-[100px] mb-2' src={itemFound.image} alt="image" />
        <img className='w-[100px] mb-2' src={itemFound.image} alt="image" />
        <img className='w-[100px] mb-2' src={itemFound.image} alt="image" />
      </div>
      <div className='md:w-[810px]'>
        <img className='w-[430px]' src={itemFound.image} alt="main image" />
      </div>
      <div className='px-4 ml-4 flex flex-col gap-5 justify-between'>
        <div>
          <h1 className='text-3xl font-semibold'>{itemFound.name}</h1>
          <div className='flex items-center mt-3'>
            <img className='w-[16px] h-[15px]' src={star_icon} alt="star" />
            <img className='w-[16px] h-[15px]' src={star_icon} alt="star" />
            <img className='w-[16px] h-[15px]' src={star_icon} alt="star" />
            <img className='w-[16px] h-[15px]' src={star_icon} alt="star" />
            <img className='w-[16px] h-[15px]' src={star_dull} alt="star" />
            <p>(122)</p>
          </div>
        </div>
        <div className='flex gap-4 text-xl'>
            <h3 className='line-through text-gray-500'>${itemFound.old_price}</h3>
            <h3 className='text-red-600 font-semibold'>${itemFound.new_price}</h3>
        </div>
        <p>A lightweight, usually knitted, pullover shirt, close fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment</p>
        <div>
          <h4 className='font-semibold mb-4'>Select Size</h4>
          <div className='flex gap-3 mb-7'>
            <button className='p-2 px-4 cursor-pointer hover:bg-gray-200 bg-gray-100 border border-gray-300'>S</button>
            <button className='p-2 px-4 cursor-pointer hover:bg-gray-200 bg-gray-100 border border-gray-300'>M</button>
            <button className='p-2 px-4 cursor-pointer hover:bg-gray-200 bg-gray-100 border border-gray-300'>L</button>
            <button className='p-2 px-4 cursor-pointer hover:bg-gray-200 bg-gray-100 border border-gray-300'>XL</button>
            <button className='p-2 px-4 cursor-pointer hover:bg-gray-200 bg-gray-100 border border-gray-300'>XXL</button>
          </div>
          <button onClick={() => addToCart(itemFound.id)} className='cursor-pointer bg-red-600 text-white px-7 py-3 text-[14px]'>ADD TO CART</button>
        </div>
        <div>
          <p className='text-[14px]'><span className='font-bold'>Category: </span>Women, T-shirt, Crop Top</p>
          <p className='text-[14px]'><span className='font-bold'>Tags: </span>Modern, Latest</p>
        </div>
      </div>
    </section>
  )
}

export default DisplayProduct
