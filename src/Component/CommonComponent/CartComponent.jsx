// import Burger01 from '../../assets/CategoryRelatedImg/Burger01.png'

const CartComponent = ({image ,maxTime ,minTime ,name ,offer ,title }) => {
  return (
    <div className="w-full max-w-sm  bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        {/* Image Section */}

        <div className=" hover:scale-110 transition duration-500">
          <img
            src={image}
            alt="Cheesecake"
            className="w-full h-[250px] object-cover"
          />
        </div>
        {/* Overlay Badge */}
        <span className="absolute  bottom-2 left- bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
          {offer}
        </span>

      </div>
      {/* Content Section */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
              4.5 ★
            </span>
        </div>
        <p className="text-sm text-gray-600">Bakery, Desserts</p>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-800">₹200 for one</p>
          <p className="text-sm text-gray-500">33 min</p>
        </div>
        {/* Rating */}
        <div className="mt-3 flex items-center">
         
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
