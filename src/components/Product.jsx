import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from "../redux/slices/CartSlice";

export default function Product(props) {

  const item = props.item ; 


  // CART KI VALUE FROM CART SLICE 
  const {cart} = useSelector((state) => state) ; 
  const dispatch = useDispatch() ; 


  // ADD TO CART FUNCTION
  const addToCart = () => 
  {
    // REDUX KE SLICE KA FUNCTION USE KAR LIYA .
    dispatch(add(item)) ; 
    toast.success("Item added from Cart") ; 
  }
   

  // REMOVE FROM CART FUNCTION 
  const removeFromCart = () => 
  {
    // REDUX KE SLICE KA FUNCTION USE KAR LIYA .
    dispatch(remove(item.id)) ; 
    toast.error("Item removed from cart") ;
  }

  return (

    <div className="flex flex-col items-center justify-between md:hover:scale-110 hover:scale-90 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_50px] transition duration-300 ease-in gap-3 mt-2 md:mt-10 md:ml-5 rounded-xl border-2 md:border-0 w-full">

        {/* TITLE */}
        <div>
            <p className="text-gray-700 font-semibold text-lg truncate w-40 mt-1">{item.title}</p>
        </div>

        {/* DESCRITION OF THE item */}
        <div>
            <p className="w-40 text-gray-400 font-normal text-[10px]">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>
        
        {/* IMAGE */}
        <div className="h-[180px]">
        <img src={item.image} alt="img" className="h-full w-full" />
        </div>

      <div className="flex justify-between gap-12 items-center mt-5 mb-5 ">

            {/* PRICE OF THE PRODUCT */}
          <div className="text-green-600 font-semibold">
                <p>{ "$" + item.price}</p>
          </div>

          {/* BUTTON  */}
          <div>
              {
                  // JO ITEM HAI KYA HO CARD MAI ALREADY PRESENT HAI 
                  cart.some((p) => p.id === item.id) ? 
                  (
                    <button onClick={removeFromCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
                    hover:bg-gray-700 
                    hover:text-white transition duration-300 ease-in"> 
                      Remove Item
                    </button>
                  ) : 

                  (
                    <button onClick={addToCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
                    hover:bg-gray-700 
                    hover:text-white transition duration-300 ease-in">
                        Add to Cart
                    </button>
                  )
              }
          </div>

        </div>
    </div>
  )
}
