import { useContext } from 'react'
import CartLeftPart from '../Component/CartComponent/CartLeftPart'
import CartRightPart from '../Component/CartComponent/CartRightPart'
import PaymentMethod from '../Component/CartComponent/PaymentMethod'
import { CartContext } from '../contexts'

const CartPage = () => {

  const {state} = useContext(CartContext)

  return (
    <div className={`py-10 pb-[200px] ${state.EachCartData.length > 0 ? 'bg-[#E9ECEE]' : 'bg-white'}`}>
      <div className="container mx-auto">
        {state.EachCartData.length > 0 ?
        (

          <div className='flex justify-between '> 
            <div className='pl-8'>
              <CartLeftPart />
              <PaymentMethod />
            </div>
            <div>
              <CartRightPart />
            </div>
          </div>
        )
        :
        (
          <div>Your Cart is Empty
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png" alt="" className='bg-white' />
          </div>
        )
        
        }
      </div>
    </div>
  )
}

export default CartPage