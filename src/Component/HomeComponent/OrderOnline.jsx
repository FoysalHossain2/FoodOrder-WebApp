import React from 'react';
import { PiDotsThreeCircleFill } from "react-icons/pi";

const OrderOnline = () => {
  return (
        <div className='py-20'>
             <div className="container mx-auto">
             <span className="text-orange-500 font-bold uppercase text-sm"></span>
        
             <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4 mt-6">
               {/* Card 1 */}
               <div className="bg-white shadow-lg p- rounded-lg flex cursor-pointer flex-col ">
                 <div className=" p- rounded-full mb-3">
                   <img src="https://pxdraft.com/wrap/foodie/assets/img/online-rder.jpg"
                     alt="Fast Food" 
                     className="h-[180px] w-full" 
                   />
                 </div>
                 <div className='px-3 py-2 flex items-center justify-between'>
                    <div>
                        <h4 className="font-bold text-lg">Order Online</h4>
                        <p className="text-gray-500 text-sm">Healthy Foods are nutrient-dense foods.</p>
                    </div>
                    <div className='text-[28px]'>
                        <PiDotsThreeCircleFill />
                    </div>
                 </div>
               </div>

   
               {/* Card 3 */}
               <div className="bg-white shadow-lg  rounded-lg flex flex-col cursor-pointer ">
                 <div className="  rounded-full mb-3">
                   <img src="https://pxdraft.com/wrap/foodie/assets/img/dining.jpg" 
                     alt="Fast Delivery"
                      className="h-[180px] w-full"
                    />
                 </div>
                 <div className='px-3 py-2 flex items-center justify-between'>
                    <div>
                        <h4 className="font-bold text-lg">Dining</h4>
                        <p className="text-gray-500 text-sm">Healthy Foods are nutrient-dense foods.</p>
                    </div>
                    <div className='text-[28px]'>
                        <PiDotsThreeCircleFill />
                    </div>
                 </div>
               </div>
             </div>
   
           </div>
        </div>
  );
};

export default OrderOnline;