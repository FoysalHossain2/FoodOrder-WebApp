import React from "react";

const products = [
  {
    id: 1,
    name: "Burger",
    sauce: "Mushroom Sauce",
    price: "$5.15",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Food Combo",
    sauce: "Mushroom Sauce",
    price: "$9.15",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Pizza",
    sauce: "Mushroom Sauce",
    price: "$6.15",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Cake",
    sauce: "Mushroom Sauce",
    price: "$5.15",
    image: "https://via.placeholder.com/150",
  },
];

const Card = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
      <img src={product.image} alt={product.name} className="w-28 h-28 object-cover" />
      <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
      <p className="text-gray-500 text-sm">{product.sauce}</p>
      <p className="text-red-500 font-bold text-lg mt-1">{product.price}</p>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;