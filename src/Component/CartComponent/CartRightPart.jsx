import React, { useContext } from 'react'
import { LuMinus, LuPlus } from "react-icons/lu";
import { CartContext } from '../../contexts';
import ItemInOrDecrementButton from '../CommonComponent/common/ItemInOrDecrementButton'

const CartRightPart = () => {

  const {state, dispatch} = useContext(CartContext);
  console.log('CartRight',state.EachCartData);
  

  return (
    <div className=' '>
      <div className="max-w-3xl mx-auto border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
        {/* Restaurant Name */}
          <div className="flex items-center mb-4">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/21/7e502890-6a0f-4d67-9cf6-96ad9f39c3cc_329142.jpg"
              alt="Dish"
              className="w-10 h-10 rounded-lg mr-4"
            />
            <div>
              <h2 className="text-lg font-bold">Guliyano Cafe</h2>
              <p className="text-gray-500 text-sm">Karol Bagh</p>
            </div>
          </div>

        {/* Item Details */}
        <div className="border-t border-gray-300 pt-4">
          {state.EachCartData.map((item, id) => (
            <div className="flex justify-between items-center gap-x-4 py-2">
            <img
              src={item.image}
              alt="Dish"
              className="w-9 h-9 rounded-lg mr-4"
            />
              <p className="font-medium pr-[7px] text-[14px] w-24 ">{item.category}</p>
             <div>
              <ItemInOrDecrementButton />
             </div>
              <p className="text-right mt-2 font-semibold">{item.price}tk</p>
            </div>
          ))}
        </div>

        {/* Bill Details */}
        <div className="mt-4 border-gray-200 pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <p>Item Total</p>
            <p>₹676</p>
          </div>
          <div className="flex justify-between text-sm">
            <p>Delivery Fee | 8.5 kms</p>
            <p>₹94</p>
          </div>
          <hr />
          <div className="flex justify-between text-sm">
            <p>Delivery Tip</p>
            <p className='text-orange-500'>Add Tip</p>
          </div>
          <div className="flex justify-between text-sm">
            <p>Platform Fee</p>
            <p>₹10</p>
          </div>
          <div className="flex justify-between text-sm">
            <p>GST and Restaurant Charges</p>
            <p>₹56.60</p>
          </div>
        </div>

        {/* To Pay */}
        <div className="mt-4 border-t border-gray-200 pt-4">
          <div className="flex justify-between font-bold text-lg">
            <p>TO PAY</p>
            <p>₹837</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartRightPart