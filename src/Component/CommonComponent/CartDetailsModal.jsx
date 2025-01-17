

// eslint-disable-next-line react/prop-types
const  CartDetailsModal = ({cartData, onClose}) => {
  const {image  ,offer ,title ,rating} = cartData;

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-[2px] transition-all " >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[484px] p-4 max-h-[100vh] overflow-auto"
      >
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-10">
          {/* onClone button */}
          <div className="flex justify-between items-center ">
              <div >
              </div>
            <button onClick={onClose}>&times;</button>
          </div>
           {/* onClone button */}

         <div className="w-full sm:w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                    {/* Image Section */}

                      <div className="hover:scale-110 transition duration-500 cursor-pointer">
                        <img
                          src={image}
                          alt="Cheesecake"
                          className="w-full h-[250px] object-cover"
                        />
                      </div>


                    {/* Overlay Badge */}
                    <div className="absolute flex justify-between items-center bottom-2 left-0 right-0 px-2">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        {offer}
                      </span>
                      <button className="text-green-600 bg-white text-xs font-semibold px-4 py-2 rounded">
                        ADD
                      </button>
                    </div>
              </div>

                  {/* Content Section */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                  <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {rating} ★
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
        </div>
      </div>
    </div>
    </>
  )
}

export default CartDetailsModal