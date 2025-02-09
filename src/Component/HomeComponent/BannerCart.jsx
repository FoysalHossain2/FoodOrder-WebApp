import React from "react";

const FoodCard = ({ image, title, description, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 max-w-sm">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-xl"
      />
      <div className="mt-4 text-center">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
        <p className="text-red-600 font-bold text-lg mt-2">${price}</p>
      </div>
    </div>
  );
};

const BannerCart = () => {
  const foodItems = [
    {
      image: "https://via.placeholder.com/150", // Replace with actual URLs
      title: "Burger",
      description: "Mushroom Sauce",
      price: "5.15",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Food Combo",
      description: "Mushroom Sauce",
      price: "9.15",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Pizza",
      description: "Mushroom Sauce",
      price: "6.15",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Cake",
      description: "Mushroom Sauce",
      price: "5.15",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {foodItems.map((item, index) => (
          <FoodCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCart;
