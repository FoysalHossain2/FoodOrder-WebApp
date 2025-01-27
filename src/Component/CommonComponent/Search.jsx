import { IoSearchOutline } from "react-icons/io5";
import { CartContext } from "../../contexts";
import { useDebounce } from "../../hooks/useDebounce";
import { useContext } from "react";


const Search = () => {

  const { dispatch } = useContext(CartContext);

  const debounceFunction  = useDebounce((Value) => {
    dispatch({type: "SEARCH", payload: Value})
  }, 1000)

  const handleChange = (e) => {
    const value = e.target.value
    debounceFunction(value)
  }

  // console.log(" search",SearchData);
  
  return (
    <div className="px-4 md:px-4 lg:px-0">
       <div className="shadow-md flex items-center border border-orange-100 lg:max-w-[600px] md:max-w-[800px]  max-md:max-w-[800px] rounded-md overflow-hidden w-full ">
          <input
            type="text"
            placeholder="Search for restaurants and food"
            className="flex-grow px-4 lg:py-[9px] md:py-4 py-2 text-gray-700 focus:outline-none"
            onChange={handleChange}
          />
            <button className="px-4 text-xl focus:outline-none">
              <IoSearchOutline />
            </button>
      </div>

    </div>
  )
}

export default Search