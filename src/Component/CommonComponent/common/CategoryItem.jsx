import { useEffect, useState } from "react"
// import axios from 'axios'
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { categoryItem } from "../../../../data/DataBase";

const CategoryItem = () => {

  const [GetValueofCategory, setGetValueofCategory] = useState("")
  const [Slider, setSlider] = useState(0)

  const [Category, setCategory] = useState([]);

  // HandleGetValue functionality
  const HandleGetValue = (event,value) => {
    event.stopPropagation()
    setGetValueofCategory(value.path);
    
  }
  // console.log("GetValueofCategory",GetValueofCategory);
  


// add Slider functionality 
  const HandleNext = () => {    
    if(Category.length - 8 === Slider) return false
    setSlider( Slider + 2)
  }

  const HandlePrevious = () => {    
    if(Slider == 0) return false
    setSlider( Slider - 2) 
  }
  
 

  return (
    <div className="mt-4 mb-10 relative px-2 lg:px-0">
        <div className="container mx-auto">
          <div className="mt-10 ">
            <h1 className="lg:text-3xl text-xl font-DM_Sans z-[-2]">
              Choose on your Favorite Dish
            </h1>

            <div className="mt-2">

              <div className="flex items-center">
    
                  <button onClick={HandlePrevious} className={`z-40 text-[25px] w-[2px] h-1 mt-1 cursor-pointer `}>
                    <MdOutlineChevronRight className="bg-slate-200  rounded-full -ml-3"  />
                  </button>
                  
  
                <div className="flex overflow-hidden py-3 lg:gap-x-6 gap-0">
                  {categoryItem.map((item, id) => (
                    <div  style={{transform: `translateX(-${Slider * 100}%)`}} key={id} className=" h-[100px] w-[100px]  lg:h-[120px] lg:w-[120px] shrink-0 duration-500 cursor-pointer">
                      <button onClick={(e) => HandleGetValue (e,item)} >
                        <img src={item.image} alt="title"  />
                      </button>
                    </div>
                  ))}
                </div>
                <button onClick={HandleNext} className="text-[25px] bg-orange-300 w-[2px] h-1 rounded-full mt-1 cursor-pointer z-40 m-">
                    <MdOutlineChevronLeft className="bg-slate-200  rounded-full -ml-3"   />
                  </button>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default CategoryItem