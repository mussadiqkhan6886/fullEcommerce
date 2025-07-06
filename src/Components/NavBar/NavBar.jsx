import React, { useContext, useEffect, useState } from 'react'
import cart_icon from "../Assets/cart_icon.png"
import logo from "../Assets/logo.png"
import {Link, useLocation} from "react-router-dom"
import { ShopContext } from '../../Context/ShopContext'

const NavBar = () => {
    const [catogery, setCatogery] = useState("shop")
    const location = useLocation()
    
    const {cartTotalCount} = useContext(ShopContext)

    useEffect(() => {
        const currentPath = location.pathname.split("/")[1]
        if(currentPath == "men" || currentPath == "women" || currentPath == "kid" || currentPath == "login" || currentPath == "cart"){
            setCatogery(currentPath)
        }else{
            setCatogery("shop")
        }
    }, [location.pathname])
  return (
    <>
    <header className='flex shadow justify-between px-10 py-2 items-center'>
        <div className='flex items-center'>
            <img className='w-[44px] h-[44px]' src={logo} alt="logo" />
            <h1 className='font-bold text-2xl'>SHOPPER</h1>
        </div>
        <div className='w-[40%] md:block hidden'>
            <ul className='flex w-full justify-between text-gray-700 items-center'>
                <li  className={catogery == "shop" ? "border-b-2 py-1 border-red-500 text-[17px]" : ""}> <Link to="/">Shop</Link> </li>
                <li className={catogery == "men" ? "border-b-2 py-1 border-red-500 text-[17px]" : ""}> <Link to="/men">Men</Link> </li>
                <li className={catogery == "women" ? "border-b-2 py-1 border-red-500 text-[17px]" : ""}> <Link to="/women">Women</Link></li>
                <li className={catogery == "kid" ? "border-b-2 py-1 border-red-500 text-[17px]" : ""}> <Link to='kid'>Kids</Link></li>
            </ul>
        </div>
        <div className='flex relative gap-6'>
            <button className='border rounded-3xl px-5 border-gray-500 hover:bg-gray-300 cursor-pointer'> <Link to={"/login"}>Login</Link></button>
            <Link to={"/cart"}><img className='w-[33px]' src={cart_icon} alt="cartIcon" /></Link> 
            <p className='bg-red-600 text-white absolute rounded-full w-[20px] text-[14px] text-center -right-2 -top-1'>{cartTotalCount()}</p>
        </div>
    </header>
    <nav className='md:hidden '>
        <div className='p-2 px-5'>
            <ul className='flex w-full justify-between text-gray-700 items-center '>
                <li  className={catogery == "shop" ? "border-b-2 py-1 border-red-500 text-[17px]" : ""}> <Link to="/">Shop</Link> </li>
                <li className={catogery == "men" ? "border-b-2 py-1 border-red-500 text-[17px]" : ""}> <Link to="/men">Men</Link> </li>
                <li className={catogery == "women" ? "border-b-2 py-1 border-red-500 text-[17px]" : ""}> <Link to="/women">Women</Link></li>
                <li className={catogery == "kid" ? "border-b-2 py-1 border-red-500 text-[17px]" : ""}> <Link to='kid'>Kids</Link></li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default NavBar
