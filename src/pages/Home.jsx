import React from 'react'
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

export default function Home() {

  const API_URL = "https://fakestoreapi.com/products";
    const [loading , setLoading] = useState(false) ; 
    const [items , setItems] = useState([]) ; 

    async function fetchProductData() 
    {
        setLoading(true) ; 

        try
        { 
          const result = await fetch(API_URL) ; 
          const data = await result.json() ; 
          // SET IT IN A POSTS 
          setItems(data) ; 
        }

        catch(error)
        {
          console.log("Error -> " , error) ; 
        }

      setLoading(false); 
    }

    // USE EFFECT TO CALL A FUNCTION 
    useEffect( () => {
      fetchProductData() ; 

    // eslint-disable-next-line
    }, []) ; 


  return (

    <div className="min-h-[vh]">

      {
        // IF LPADING IS TRUE 
        loading ? <Spinner /> : 

        // IF LENGTH OF POST IS MORE THAN 0 
        items.length > 0 ? 
        (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:max-w-6xl p-2  mx-auto md:space-x-5 min-h-[80vh]"> 

            {
              items.map((item) => (
                <Product key={item.id}  item={item} />
              ))
            }
          </div>
        ) : 
        
        // IF NO POSTS FOUND 
        (
            <div className="flex justify-center items-center min-h-[80vh]">
            <p>No Data Found</p>
          </div>
        )
      }

    </div>
  )
}
