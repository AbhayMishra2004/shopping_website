import React from 'react'
import {useState , useEffect} from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem'


export default function Cart() {

  // USE SELCTOR SE APAN ARRAY OF CAERT LENGE 
  const {cart} = useSelector((state) => state) ; 

  const[totalAmount , setTotalAmount] = useState(0) ; 

  // JAB BHI CART KI VALUE CHANGE HO , TOTAL AMOUNT KO BHI CHANGE KARO . 
  useEffect(() => {
    setTotalAmount(cart.reduce((acc , curr) => acc + curr.price , 0)) ; 
  } , [cart])
 

  return (
    <div>

      {
        cart.length > 0 ? 
        (
            <div className="flex flex-col md:flex-row max-w-6xl p-2 mx-auto md:space-x-10">
              
              {/* ALL THE CART ITEMS */}
              <div className="w-[100%] md:w-[60%]">
              {
                cart.map((item , index) => (
                  <CartItem  key={item.id} item={item} itemIndex={index} />
                ))
              }
              </div>

              {/* CART , SUMMARY AND TOTAL LENGTH  */}
              <div className="w-[100%] md:w-[40%] mt-20 flex flex-col justify-between">

                <div>
                  <div className="text-green-500 text-xl font-semibold uppercase">Your Cart</div>
                  <div className="text-green-500 text-5xl font-semibold uppercase">Summary</div>
                  <p className="text-slate-700 mt-5 text-xl font-semibold ">Total Items : 
                    <span className="font-semibold text-black"> {cart.length}</span>
                  </p>
                </div>

              
                {/* TOTAL AMOUNT AND CHECK OUT NOW KA BUTTON */}
                <div>
                  <p className="text-slate-700 md:mt-5 text-xl font-semibold mb-5">Total Amount : 
                    <span className="font-semibold text-black"> ${totalAmount} </span>
                  </p>
                  <button className="bg-green-600 py-3 w-full text-lg rounded-md text-white font-semibold hover:text-green-600 hover:bg-white hover:border-green-600 border-2 transition ease-in duration-300" >CheckOut Now</button>
                </div>
              </div>


          </div>
        
        ) : 

        // AGAR CART KHALI HO TO 
        (
          <div className="flex flex-col items-center justify-center h-[80vh] gap-8">

              <h1 className="text-xl font-bold">Your cart is empty!</h1>

            {/* BUTTON OF SHOW NOW */}
            <NavLink to="/">
                <button className="bg-green-600 py-3 px-10 text-lg rounded-md text-white font-medium hover:text-green-600 hover:bg-white hover:border-green-600 border-2
                transition ease-in duration-300 ">
                  Shop Now
                </button>
            </NavLink>
          </div>
        )
      }
      
    </div>
  )
}
