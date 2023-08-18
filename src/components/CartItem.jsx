import React from 'react'
import { AiFillDelete } from "react-icons/ai";
// import {useState} from 'react'
import { useDispatch} from 'react-redux'
import { remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

export default function CartItem({item , itemIndex}) {

    const dispatch = useDispatch() ; 

    const removeFromCart = () => {

        dispatch(remove(item.id)) ; 
        toast.success("Item Removed") ; 
        // setCount(count-1) ; 
    }


  return (

    <div className="mt-5">


      <div className="flex flex-col gap-3 md:flex-row md:gap-12 px-2 md:px-10"> 

            {/* IMAGE OF THE CART  */}
            <div className="w-[40%] mx-auto md:w-[30%]">
                <img src={item.image} alt={item.id} className="w-full h-full" />
            </div>

            {/* TITLE AND DESCRIPTION FO THE CART */}
              <div className="md:w-[70%] md:py-5">
                <div>
                      <h1 className="text-xl font-bold text-slate-700">{item.title}</h1>
                      <h1 className="text-medium text-base mt-5">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
                </div>

                  <div className="flex mt-5 justify-between ">

                    <p className="text-green-600 font-semibold">{"$" + item.price}</p>

                    <button onClick={removeFromCart} className="flex items-center justify-center p-3 bg-red-200 rounded-full">
                          <AiFillDelete className="text-red-500" />
                    </button>
                </div>
            </div>
        </div>

        {/* LINE OF BORDER IN BETWEEN  */}
        <div className="w-full flex bg-black my-2 md:my-10">
              <div className=" h-0.5"></div>
        </div>

      
    </div>
  )
}
