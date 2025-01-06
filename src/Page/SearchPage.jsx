import { useEffect, useState } from "react"
import Search from "../Component/CommonComponent/Search"
// import axios from 'axios'
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const SearchPage = () => {


  const [Slider, setSlider] = useState(0)

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://backenddata-k2ey.onrender.com/category');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json(); // JSON ডেটা রূপান্তর
        setCategories(data); // ডেটা সেট করা
      } catch (error) {
        setError(error.message); // ত্রুটি সেট করা
      } finally {
        setLoading(false); // লোডিং বন্ধ
      }
    };

    fetchCategories(); // ফাংশন কল করা
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  console.log(Slider);

  const HandleNext = () => {
    if(Slider.length - 8 === setSlider) return false
    setSlider( Slider + 3)
  }

  const HandlePrevious = () => {
    setSlider( Slider - 2)
  }
  
 

  return (
    <div className="mt-14 mb-[200px] relative">
        <div className="container mx-auto">
          <div>
            <div className="flex items-center justify-center">
                <Search />
            </div>
            <div className="xl:pl-[150px] lg:pl-16 lg:pr-20 xl:pr-[150px] md:pl-0 mt-10">
              <h1 className="font-DM_Sans text-lg" >Recant Searches</h1>

              <div className=" mt-16">
                <div className="">
                  <button onClick={HandlePrevious} className="text-[25px] bg-gray-300 p-[2px] rounded-full cursor-pointer">
                    <MdOutlineChevronRight  />
                  </button>
                  <button onClick={HandleNext} className="text-[25px] bg-gray-300 p-[2px] rounded-full mt-1 cursor-pointer">
                    <MdOutlineChevronLeft  />
                  </button>
                </div>
                <div className="flex overflow-hidden py-2">
                  {categories.map((item, id) => (
                    <div style={{transform: `translateX(-${Slider * 100}%)`}} key={id} className="h-28 w-28 shrink-0 duration-500">
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