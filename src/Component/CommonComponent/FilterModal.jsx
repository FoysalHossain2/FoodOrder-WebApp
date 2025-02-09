import React, { useState } from 'react'

const FilterModal = ({onClose}) => {


  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-[2px] transition-all " >
      <div
        className="z-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[484px] p-4 max-h-[100vh] overflow-auto"
      >
       
       <div className="bg-white max-w-md rounded-lg shadow-lg  h-[550px] py-2">
        <div className='flex items-center justify-between py-4 px-4'>
          <h1 className='text-2xl font-DM_Sans'>Filters</h1>
          <button onClick={onClose}>x</button>
        </div>
        <hr />

        <div className='flex items-center justify-between py-2'>
          <div className='bg-orange-100/40 h-[400px]'>
            <ul className='space-y-8 px-4'>
              {["Sort by", "Rating", "Delivery Time", "Cost per pearson", ""].map((item) => (
                <li key={item.id} className='text-[18px]'>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
          </div>
        </div>

        <button>
          Apply
        </button>
        </div>
      </div>
    </div>

    </>
  )
}

export default FilterModal