import React, { useState } from 'react'
import cart_icon from "../Assets/cart_icon.png"
import logo from "../Assets/logo.png"
import {Link} from "react-router-dom"

const NavBar = () => {
    const [catogery, setCatogery] = useState("shop")
  return (
    <header className='flex shadow justify-around py-2 items-center'>
        <div className='flex items-center'>
            <img className='w-[44px] h-[44px]' src={logo} alt="logo" />
            <h1 className='font-bold text-2xl'>SHOPPER</h1>
        </div>
        <div className='w-[40%]'>
            <ul className='flex w-full justify-between text-gray-700 items-center'>
                <li onClick={() => setCatogery("shop")}  className={catogery == "shop" ? "border-b-2 py-1 border-red-500 text-[17px]" : ""}> <Link to="/">Shop</Link> </li>
                <li onClick={() => setCatogery("men")} className={catogery == "men" ? "border-b-2 py-1 border-red-500 text-[17px]" : ""}> <Link to="/men">Men</Link> </li>
                <li onClick={() => setCatogery("women")} className={catogery == "women" ? "border-b-2 py-1 border-red-500 text-[17px]" : ""}> <Link to="/women">Women</Link></li>
                <li onClick={() => setCatogery("kids")} className={catogery == "kids" ? "border-b-2 py-1 border-red-500 text-[17px]" : ""}> <Link to='kid'>Kids</Link></li>
            </ul>
        </div>
        <div className='flex relative gap-6'>
            <button className='border rounded-3xl px-5 border-gray-500 hover:bg-gray-300 cursor-pointer'> <Link to={"/login"}>Login</Link></button>
            <Link to={"/cart"}><img className='w-[33px]' src={cart_icon} alt="cartIcon" /></Link> 
            <p className='bg-red-600 text-white absolute rounded-full w-[20px] text-[14px] text-center -right-2 -top-1'>0</p>
        </div>
    </header>
  )
}

export default NavBar
