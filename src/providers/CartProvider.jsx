import React, {  useReducer, useState } from 'react'
import { CartContext } from '../contexts'
import { cartReducer, initialState } from '../reducers/ProductReducer'

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <>
     <CartContext.Provider value={{state, dispatch}}>
        {children}
     </CartContext.Provider>
    </>
  )
}

export default CartProvider