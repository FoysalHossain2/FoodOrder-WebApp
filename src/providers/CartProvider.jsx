import React, {  useState } from 'react'
import { CartContext } from '../contexts'
import { cartReducer, initialState } from '../reducers/CartReducer'

const CartProvider = ({children}) => {

    const [data, setData] = useState([])

  return (
    <>
     <CartContext.Provider value={{data, setData}}>
        {children}
     </CartContext.Provider>
    </>
  )
}

export default CartProvider