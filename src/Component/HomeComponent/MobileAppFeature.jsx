import React from 'react'
import mobile_apps from '../../assets/mobile_apps.png'
import { IoLogoApple } from "react-icons/io5";

const MobileAppFeature = () => {
  return (
   <div className="py-28">
     <div className='container mx-auto'>
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-white">
        {/* Left Side - Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={mobile_apps} alt="Mobile App Illustration" className="w-80" />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 mt-10 lg:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get More Feature With Our <br /> Mobile Application
          </h2>
          <p className="text-gray-600 mb-6">
            Donec vitae porta felis. Donec est est, pretium sit amet nibh sed, blandit tincidunt urna. 
            Donec laoreet eu felis et tristique. Morbi pretium convallis mauris.
          </p>

          {/* Features List */}
          <ul className="space-y-4 mb-6">
            <li className="flex items-center space-x-3">
              <span className="bg-orange-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">1</span>
              <span className="text-gray-900 font-medium">Follow Delivery Status</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="bg-orange-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">2</span>
              <span className="text-gray-900 font-medium">Order From Any Location</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="bg-orange-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">3</span>
              <span className="text-gray-900 font-medium">Get Important Notices</span>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8 items-center">
            {/* Apple Store Button */}
            <button className="w-full md:w-auto  bg-orange-500 text-white px-7 py-1 rounded-xl flex items-center justify-center shadow-lg hover:bg-orange-600">
              <span className="mr-2"><IoLogoApple className="text-3xl" /></span> 
              <div className="text-center md:text-left">
                <span>Available On</span> <br /> 
                <span className="font-semibold">Apple Store</span>
              </div>
            </button>

            {/* Google Store Button */}
            <button className="w-full md:w-auto border border-orange-500 text-orange-500 px-7 py-1 rounded-xl flex items-center justify-center shadow-lg hover:bg-orange-100">
              <span className="mr-2">📱</span> 
              <div className="text-center md:text-left">
                <span>Available On</span> <br /> 
                <span className="font-semibold">Google Store</span>
              </div>
            </button>
          </div>

        </div>
     </div>
    </div>
   </div>
  )
}

export default MobileAppFeature