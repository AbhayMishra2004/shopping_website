import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

export default function Navbar() {

    const {cart} = useSelector((state) => state) ; 


  return (

    <div>  

        <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">

            {/* IMAGE OF THE NAVBAR  */}
            <NavLink to="/">
                  <div className="ml-5">   
                      <img src="../logo.png" height="3.5rem" className="h-14" alt="img"/>
                </div>
            </NavLink>

            {/* RIGHT SIDE OF THE NAVBAR */}
              <div className="flex items-center font-medium mr-5 space-x-6">

                <NavLink to="/">
                    <p className="text-white">Home</p>
                </NavLink>

                <NavLink to="/cart">
                <div className="relative">
              <FaShoppingCart className="text-2xl text-white
               "/>
                    {
                        cart.length > 0 && 
                          <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                            {cart.length}
                        </span>
                    }
                </div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}
