import React, { useState } from 'react'

const FilterModal = ({onClose}) => {


  return (
    <>
       <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-[2px] transition-all duration-500 " >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[484px] p-4 max-h-[100vh] overflow-auto"
      >




        <div className="bg-white w-11/12 max-w-md rounded-lg shadow-lg  h-[400px]">
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <h2 className="text-lg font-bold">Filters</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl font-semibold"
            >
              &times;
            </button>
          </div>
          <div className="flex">
            {/* Sidebar */}
            <div className="w-1/3 border-r">
              <ul className="text-sm">
                <li className="px-4 py-2 border-b font-semibold text-red-500">
                  Sort by
                </li>
                <li className="px-4 py-2 border-b">Cuisines</li>
                <li className="px-4 py-2 border-b">Rating</li>
                <li className="px-4 py-2">Cost per person</li>
              </ul>
            </div>
            {/* Main Content */}
            <div className="w-2/3 px-4 py-3">
              <form>
                {["Popularity", "Rating: High to Low", "Delivery Time", "Cost: Low to High", "Cost: High to Low"].map(
                  (option) => (
                    <div key={option} className="mb-2">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="sort"
                          value={option}
                          className="form-radio text-red-500"
                        />
                        <span className="ml-2">{option}</span>
                      </label>
                    </div>
                  )
                )}
              </form>
            </div>
          </div>
          {/* Footer */}
          <div className="flex justify-between px-4 py-3 border-t">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Clear all
            </button>
            <button
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Apply
            </button>
          </div>
        </div>





        </div>
      </div>

    </>
  )
}

export default FilterModal