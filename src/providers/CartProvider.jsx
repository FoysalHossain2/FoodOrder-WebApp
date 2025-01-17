import React, {  useReducer, useState } from 'react'
import { CartContext } from '../contexts'
import { cartReducer, initialState } from '../reducers/CartReducer'

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