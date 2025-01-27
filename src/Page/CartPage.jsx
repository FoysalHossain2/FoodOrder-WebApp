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
          <>
          {/* for lg device */}
          <div className='lg:block hidden'>
            <div className='flex justify-between '> 
              <div className='pl-8'>
                <CartLeftPart />
                <PaymentMethod />
              </div>
              <div>
                <CartRightPart />
              </div>
            </div>
          </div>

            {/* for sm, md device */}
            <div className='flex flex-col justify-between lg:hidden sm:block'> 
              <div>
                <CartRightPart />
              </div>
              <div className=' mt-5'>
                <CartLeftPart />
                <PaymentMethod />
              </div>
            </div>
          </>
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