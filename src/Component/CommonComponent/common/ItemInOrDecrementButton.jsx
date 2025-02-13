import React, { useReducer } from 'react'
import { LuMinus, LuPlus } from 'react-icons/lu'
import { cartReducer, initialState } from '../../../reducers/ProductReducer';

const ItemInOrDecrementButton = () => {

  const [state, dispatch] = useReducer(cartReducer, initialState);

  function handleIncrement() {
    dispatch({ type: "INCREMENT" });
  }
  function handleDecrement() {
    dispatch({ type: "DECREMENT" });
  }

  return (
    <div>
      <div className="flex items-center space-x-1 border border-green-600 px-2 py-[2px]">
        <button 
          onClick={handleDecrement}
          className=" cursor-pointer text-[16px] border-gray-300 rounded hover:bg-slate-200"
         > 
          <LuMinus /> 
         </button>
          <span>{state.count}</span>
        <button 
           onClick={handleIncrement}
          className=" cursor-pointer text-[16px] border-gray-300 rounded hover:bg-slate-200"
        >
           <LuPlus /> 
        </button>
      </div>
    </div>
  )
}

export default ItemInOrDecrementButton