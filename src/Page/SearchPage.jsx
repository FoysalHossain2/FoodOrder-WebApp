import { useEffect, useState } from "react"
import Search from "../Component/CommonComponent/Search"
// import axios from 'axios'
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const SearchPage = () => {


  const [Slider, setSlider] = useState(0)

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/category")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(products);


  console.log(Slider);

  const HandleNext = () => {
    console.log(categories.length );
    
    if(categories.length - 8 === Slider) return false
    setSlider( Slider + 3)
  }

  const HandlePrevious = () => {
    console.log(Slider);
    
    if(Slider == 0) return false
    setSlider( Slider - 3) 
  }
  
 

  return (
    <div className="mt-14 mb-[250px] relative">
        <div className="container mx-auto">
          <div>
            <div className="flex items-center justify-center">
                <Search />
            </div>
            <div className="xl:pl-[150px] lg:pl-16 lg:pr-20 xl:pr-[150px] md:pl-0 mt-10">
              <h1 className="font-DM_Sans text-lg" >Recant Searches</h1>

              <div className=" mt-16">
                <div className="">
                  <button onClick={HandlePrevious} className={`text-[25px] bg-orange-300 p-[2px] rounded-full cursor-pointer ${Slider.length === 0 ? "hidden" : "block"}`}>
                    <MdOutlineChevronRight  />
                  </button>
                  <button onClick={HandleNext} className="text-[25px] bg-gray-300 p-[2px] rounded-full mt-1 cursor-pointer">
                    <MdOutlineChevronLeft  />
                  </button>
                </div>
                <div className="flex overflow-hidden py-3">
                  {products.map((item, id) => (
                    <div style={{transform: `translateX(-${Slider * 100}%)`}} key={id} className="h-28 w-28 shrink-0 duration-500 cursor-pointer">
                      <img src={item.image} alt="title"  />
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default SearchPage