import { FaHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const restaurants = [
  {
    id: 1,
    name: "Perfect Maggi",
    image: "https://pxdraft.com/wrap/foodie/assets/img/product-2.jpg",
    category: "Snacks, Beverages",
    time: "25 MINS",
    price: "$15 FOR TWO",
    rating: "3.9",
  },
  {
    id: 2,
    name: "Perfect Maggi",
    image: "https://pxdraft.com/wrap/foodie/assets/img/product-3.jpg",
    category: "Snacks, Beverages",
    time: "25 MINS",
    price: "$15 FOR TWO",
    rating: "3.9",
  },
  {
    id: 3,
    name: "Perfect Maggi",
    image: "https://pxdraft.com/wrap/foodie/assets/img/product-4.jpg",
    category: "Snacks, Beverages",
    time: "25 MINS",
    price: "$15 FOR TWO",
    rating: "3.9",
  },
  {
    id: 4,
    name: "Perfect Maggi",
    image: "https://pxdraft.com/wrap/foodie/assets/img/product-5.jpg",
    category: "Snacks, Beverages",
    time: "25 MINS",
    price: "$15 FOR TWO",
    rating: "3.9",
  },
];

const TopRestaurant = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Title */}
      <h2 className="text-3xl font-semibold mb-6">
        Top Restaurants
        <div className="w-16 h-1 bg-orange-500 mt-2"></div>
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                {restaurant.rating} <FaRegStar />
              </span>
              <button className="absolute top-2 right-2 border hover:bg-white p-2 rounded-full shadow-md">
                <FaHeart className="text-gray-500 hover:text-red-500 transition" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{restaurant.name}</h3>
              <p className="text-gray-500 text-sm">{restaurant.category}</p>
              <p className="text-gray-500 text-sm mt-1">
                {restaurant.time} • {restaurant.price}
              </p>

              <p className="mt-3 text-orange-500 text-sm font-semibold">
                🔥 60% off | Use WELCOMEBACK
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRestaurant;
