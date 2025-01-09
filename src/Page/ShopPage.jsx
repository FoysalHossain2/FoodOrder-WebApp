import { useEffect, useState } from "react";
import CartComponent from "../Component/CommonComponent/cartComponent"
import Sort from "../Component/CommonComponent/Sort";




const ShopPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://backenddata-k2ey.onrender.com/AllFoods');
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
  


  return (
    <div className="pt-[50px] pb-[100px]">
      <div className="container mx-auto">
        <div className="flex"> 
          <img src="" alt="Delivery" className="w-20 h-20" />
          <h1 className="text-lg">Delivery</h1>
        </div>

        {/* --- filter option --- */}
        <div className="mb-16 flex items-center gap-x-3">
          <div className=" py-1 px-2 border w-20 rounded-full">
            <p>Filters</p>
          </div>
          <div className=" ">
            <Sort />
          </div>
          <div className="py-1 px-2 border w-24 rounded-full ">
           <p>Pur Vage</p>
          </div>
        </div>
          {/* --- filter option --- */}

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10"> 
          {categories.map((item, id) => (
            <div key={id}>

              <CartComponent 
                image={item.image} 
                maxTime={item.maxTime} 
                minTime={item.minTime}
                name={item.name}
                offer={item.offer}
                title={item.title}
              />
            </div>
          ))}
         
        </div>
      </div>
    </div>
  )
}

export default ShopPage