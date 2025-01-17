import { useContext, useState } from "react";
import CartDetailsModal from './CartDetailsModal'
import { CartContext } from "../../contexts";

// eslint-disable-next-line react/prop-types
const CartComponent = ({cartData}) => {



  const [ShowModal, setShowModal] = useState(false);
  const [SelectedCart, setSelectedCart] = useState(null);
  const {state, dispatch} = useContext(CartContext);
  

  // HandleAddToCart 
  const HandleAddToCart = (event, cartData) => {
    event.stopPropagation();
    const found = state.EachCartData.find((item) => {
      return item.id === cartData.id
    })

   
    if (!found) {
     dispatch({
      type: 'ADD_TO_CARD',
      payload:{
        ...cartData
      }
     })
  } else {
      console.error( `The movie ${state.EachCartData.title} has been added to the cart already`);
  }
}
    
    
   


// Modal open and close functionality implementation
  const HandleClose = () => {
    setSelectedCart(null)
    setShowModal(false)
  }

  const HandleSelectCart = (cartData) => {
    setSelectedCart(cartData)
    setShowModal(true)
  }



  return (
    <>
      { ShowModal && (
        <CartDetailsModal
         onClose={HandleClose}
         cartData={SelectedCart}
        />
      )
      }

      <div className="w-full sm:w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
          {/* Image Section */}
          <a className="block" onClick={() =>HandleSelectCart (cartData)}>
            <div className="hover:scale-110 transition duration-500 cursor-pointer">
              <img
                src={cartData.image}
                alt="Cheesecake"
                className="w-full h-[250px] object-cover"
              />
            </div>
          </a>

          {/* Overlay Badge */}
          <div className="absolute flex justify-between items-center bottom-2 left-0 right-0 px-2">
            <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
              {cartData.offer}
            </span>
            <button onClick={(event) => HandleAddToCart (event,cartData)} className="text-green-600 bg-white text-xs font-semibold px-4 py-2 rounded">
              ADD
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-800">{cartData.title}</h3>
            <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                {cartData.rating} ★
              </span>
          </div>
          <p className="text-sm text-gray-600">Bakery, Desserts</p>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-800">{cartData.price}</p>
            <p className="text-sm text-gray-500">33 min</p>
          </div>
          {/* Rating */}
          <div className="mt-3 flex items-center">
          
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;
