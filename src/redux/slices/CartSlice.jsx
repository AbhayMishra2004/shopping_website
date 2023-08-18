import { createSlice } from "@reduxjs/toolkit";

export const CartSlice  = createSlice({


    name : "cart" , 
    initialState : [] , 

    reducers : {

        // YAH DO CHIJE LETA HAI AS ARGUMENT , STATE AND ACTION 
        // READ IN DOCUMENTTATION
        add : (state, action) => {

            // ACTION.PAYLOAD DIKHATA HAI , JO BHI PASS KIYA AS A INPUT 
            state.push(action.payload) ; 
        } , 


        remove : (state , action) => {
            return state.filter((item) => item.id !== action.payload)
        } , 

    }


})

export const {add , remove} = CartSlice.actions ; 
export default CartSlice.reducer ; 