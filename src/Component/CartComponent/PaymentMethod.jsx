import React from 'react'
import { MdOutlinePayment } from "react-icons/md";

const PaymentMethod = () => {
  return (
    <div className='mt-8'>
        <div className='bg-white py-6'>
            <p className='px-12 text-gray-500 font-bold font-DM_Sans text-lg'>Delivery address</p>
            <span className='absolute -mt-8 -ml-4 bg-white p-[10px] text-xl shadow-lg shadow-gray-400'>
                <MdOutlinePayment />
            </span>
        </div>
    </div>
  )
}

export default PaymentMethod