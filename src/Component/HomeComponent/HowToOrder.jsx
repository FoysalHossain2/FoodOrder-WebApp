import React from 'react'
import step_01 from '../../assets/OrderImg/step_01.png'
import step_02 from '../../assets/OrderImg/step_02.png'
import step_03 from '../../assets/OrderImg/step_03.png'
import step_04 from '../../assets/OrderImg/step_04.png'

const HowToOrder = () => {
  return (
    <div className='py-[180px] '>
        <div className="container mx-auto">
            <h1 className='text-3xl font-DM_Sans font-bold'>Easy Order <span className='border-b-4 border-b-orange-500'>Steps</span></h1>
            
            <div className='flex flex-wrap lg:flex-row md:flex-row sm:flex-col items-center justify-center lg:justify-between gap-x-2 mt-28'>
                <div>
                    <p className='text-center pb-6 font-DM_Sans text-lg'>Select your Restaurant</p>
                    <img src={step_01} alt="" />
                </div>
                <div>
                    <img src={step_02} alt="" />
                    <p className='text-center pt-6 font-DM_Sans text-lg'>Select your Dish</p>
                </div>
                <div>
                    <p className='text-center pb-6 font-DM_Sans text-lg'>Pay Cash/Online</p>
                    <img src={step_03} alt="" />
                </div>
                <div>
                    <img src={step_04} alt="" />
                    <p className='text-center pt-6 font-DM_Sans text-lg'>Enjoy Your Meal</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowToOrder