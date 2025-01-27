import React from 'react';

const ShopTop = () => {
  const categories = [
    { id: 1, name: 'Fast Food', icon: '🌭' },
    { id: 2, name: 'Non-Veg', icon: '🍗' },
    { id: 3, name: 'Dessert', icon: '🍮' },
    { id: 4, name: 'Cocktails', icon: '🍸' },
  ];

  return (
    <div className="flex  items-center justify-center gap-x-10 p-6 overflow-x-scroll">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex items-center justify-between px-4 w-44 h-16 bg-white shadow-lg rounded-full border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 rounded-full text-xl">
            {category.icon}
          </div>
          <p className="mt-2 text-center font-medium text-lg text-gray-700">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ShopTop;