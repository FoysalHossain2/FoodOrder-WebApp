import Pizza from '../../assets/Pizza.png'

const FoodSection = () => {
  return (
    <div className="bg-white px-6 md:px-16 py-12">
     <div className="container mx-auto">
       
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section - Image */}
        <div className="relative">
          <img
            src={Pizza}
            alt="Pizza"
            className="rounded-lg drop-shadow-lg"
          />
        </div>

        {/* Right Section - Content */}
        <div className="space-y-6">
          <span className="text-orange-500 font-bold uppercase text-sm">About Us</span>
          <h2 className="text-4xl font-bold text-gray-800">
            Where quality food meets excellent services.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            It’s the perfect dining experience where every dish is crafted with
            fresh, high-quality ingredients and served by friendly staff.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center text-center">
              <div className="bg-orange-100 p-4 rounded-full mb-3">
                <img src="/path-to-fast-food-icon.png" alt="Fast Food" className="h-10 w-10" />
              </div>
              <h4 className="font-bold text-lg">Fast Foods</h4>
              <p className="text-gray-500 text-sm">Healthy Foods are nutrient-dense foods.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center text-center">
              <div className="bg-orange-100 p-4 rounded-full mb-3">
                <img src="/path-to-healthy-food-icon.png" alt="Healthy Foods" className="h-10 w-10" />
              </div>
              <h4 className="font-bold text-lg">Healthy Foods</h4>
              <p className="text-gray-500 text-sm">Healthy Foods are nutrient-dense foods.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center text-center">
              <div className="bg-orange-100 p-4 rounded-full mb-3">
                <img src="/path-to-fast-delivery-icon.png" alt="Fast Delivery" className="h-10 w-10" />
              </div>
              <h4 className="font-bold text-lg">Fast Delivery</h4>
              <p className="text-gray-500 text-sm">Healthy Foods are nutrient-dense foods.</p>
            </div>
          </div>

          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600">
            Get started
          </button>

          <div className="flex items-center mt-4">
            <img
              src="/path-to-founder-image.jpg"
              alt="Founder"
              className="h-10 w-10 rounded-full mr-3"
            />
            <div>
              <h4 className="text-sm font-bold">Marley Culhane</h4>
              <p className="text-xs text-gray-500">Founder CEO</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FoodSection;
