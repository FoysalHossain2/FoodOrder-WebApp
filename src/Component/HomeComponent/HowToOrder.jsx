import React from 'react'
import step_01 from '../../assets/OrderImg/step_01.png'
import step_02 from '../../assets/OrderImg/step_02.png'
import step_03 from '../../assets/OrderImg/step_03.png'
import step_04 from '../../assets/OrderImg/step_04.png'

const HowToOrder = () => {
  return (
    <div className='py-[140px] '>
        <div className="container mx-auto">
            <h1>Easy Order Steps</h1>
            
            <div className='flex items-center justify-between'>
                <div>
                    <p>Select your Restaurant</p>
                    <img src={step_01} alt="" />
                </div>
                <div>
                    <img src={step_02} alt="" />
                    <p>Select your Dish</p>
                </div>
                <div>
                    <p>Pay Cash/Online</p>
                    <img src={step_03} alt="" />
                </div>
                <div>
                    <img src={step_04} alt="" />
                    <p>Enjoy Your Meal</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowToOrder