import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <>
        {/* <div className=" lg:max-w-[900px] max-md:max-w-[700px] w-full max-sm:mt-2 md:mt-4 max-md:mt-4 lg:mt-0">

            <input
            type="text"
            name="q"
            className="rounded-lg w-full border py-[8px] shadow  dark:text-white border-button_Color dark:bg-white pl-4"
            placeholder="search product"
            />
        </div> */}
           <div className="flex items-center border border-orange-300 lg:max-w-[900px] md:max-w-[800px]  max-md:max-w-[800px] rounded-lg overflow-hidden w-full max-w-md">
      <input
        type="text"
        placeholder="Search for restaurants and food"
        className="flex-grow px-4 py-3 text-gray-700 focus:outline-none"
      />
      <button className="px-4 text-xl text-gray-500 hover:text-gray-700 focus:outline-none">
       <IoSearchOutline />
      </button>
    </div>
    </>
  )
}

export default Search