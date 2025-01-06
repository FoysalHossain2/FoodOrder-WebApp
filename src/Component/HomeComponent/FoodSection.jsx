import Pizza from '../../assets/Pizza.png'
import { ModalComponent } from '../CommonComponent/Modal';

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
              <div className=" p-4 rounded-full mb-3">
                <img src="https://i.pinimg.com/originals/2b/f6/0e/2bf60eaa0d8124a4fb0d2e16428b54a1.jpg"
                  alt="Fast Food" 
                  className="h-20 w-20" 
                />
              </div>
              <h4 className="font-bold text-lg">Fast Foods</h4>
              <p className="text-gray-500 text-sm">Healthy Foods are nutrient-dense foods.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center text-center">
              <div className=" p-4 rounded-full mb-3">
                <img src="https://img.freepik.com/free-vector/fruit-salad-bowl-concept_23-2148505162.jpg"
                 alt="Healthy Foods" 
                 className="h-20 w-20"
                 />
              </div>
              <h4 className="font-bold text-lg">Healthy Foods</h4>
              <p className="text-gray-500 text-sm">Healthy Foods are nutrient-dense foods.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center text-center">
              <div className=" p-4 rounded-full mb-3">
                <img src="https://thumbs.dreamstime.com/b/vector-cartoon-truck-car-icon-comic-style-fast-delivery-ser-vector-cartoon-truck-car-icon-comic-style-fast-delivery-service-121267007.jpg" 
                  alt="Fast Delivery"
                   className="h-20 w-20"
                 />
              </div>
              <h4 className="font-bold text-lg">Fast Delivery</h4>
              <p className="text-gray-500 text-sm">Healthy Foods are nutrient-dense foods.</p>
            </div>
          </div>

          <ModalComponent />

          {/* <div className="flex items-center mt-4">
            <img
              src="/path-to-founder-image.jpg"
              alt="Founder"
              className="h-10 w-10 rounded-full mr-3"
            />
            <div>
              <h4 className="text-sm font-bold">Marley Culhane</h4>
              <p className="text-xs text-gray-500">Founder CEO</p>
            </div>
          </div> */}
        </div>
      </div>
      </div>
    </div>
  );
};

export default FoodSection;
