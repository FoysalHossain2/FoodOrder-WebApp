import { useContext, useState } from "react";
import { CartContext, ProductContext } from "../../contexts";
import { sortData } from "../../../utils/helper";


 const Sort = ({ProductData}) => {

    

  const [IsOpen, setIsOpen] = useState(false)
    const [SortValue, setSortValue] = useState(ProductData)
  const {state, dispatch} = useContext(CartContext)
//   const {ProductData, Loading, Error} = useContext(ProductContext)

  const HandleShowOptions = () => {
    setIsOpen(!IsOpen)
  }

  const handleOptionClick = (sortType) => {

};


  

    return (
      <div className="relative inline-block text-left dropdown">
      <div>
          <button
              type="button"
              className="border inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-[11px] text-sm  hover:text-gray-500 focus:text-gray-700 transition-all"
              id="menu-button"
              aria-expanded={IsOpen}
              aria-haspopup="true"
              onClick={HandleShowOptions}
          >
              Sort
              <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                  />
              </svg>
          </button>
      </div>

      {/* Sort Options */ }
      {IsOpen && (
          <div
              className="absolute z-50  hover:z-20 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
          >
              <div className="py-1" role="none">
                  <span
                      className={`cursor-pointer block px-4 py-2 text-sm text-gray-700 transition-all hover:bg-gray-200 `}
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                      onClick={() => handleOptionClick (" Low to High ")}
                  >
                      Low to High
                  </span>
                  <span
                      className={`cursor-pointer block px-4 py-2 text-sm text-gray-700 transition-all hover:bg-gray-200 `}
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                      onClick={() => handleOptionClick (" High to Low ")}
                  >
                      High to Low
                  </span>
              </div>
          </div>
      )}
  </div>
    )

}

export default Sort ;