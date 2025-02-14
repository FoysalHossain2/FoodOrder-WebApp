import { RxCross2 } from "react-icons/rx";

// eslint-disable-next-line react/prop-types
const  CartDetailsModal = ({cartData, onClose}) => {
  const {image  ,offer ,title ,rating} = cartData;

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-[2px] transition-all " >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[484px] p-4 max-h-[100vh] overflow-auto"
      >
         <div className="bg-white p-5 rounded-2xl shadow-lg max-w-3xl mx-auto">
          <div className="flex items-end justify-end">
            <button onClick={onClose}>
             <RxCross2 />
            </button>
          </div>
      <div className="grid grid-cols-3 gap-2">
        <img src={image} alt="Main dish" className="col-span-2 rounded-lg" />
        <div className="flex flex-col gap-2">
          <img src={image} alt="Dish" className="rounded-lg" />
          <img src={image} alt="Dish" className="rounded-lg" />
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      {/* <p className="text-gray-500 text-sm">
        {categories.join(" • ")}
      </p> */}
      <p className="text-gray-600 text-sm mt-1">{offer}</p>
      <div className="flex gap-4 mt-3">
          <div  className="flex items-center gap-2 text-sm">
            <span className="text-orange-500">★ {rating}</span>
            {/* <span className="text-gray-500">{rating}</span> */}
          </div>

      </div>
      <h3 className="text-lg font-semibold mt-4">
        {"Japanese and american soul food fusion restaurants that serves heartly rich ramen, and southern fried chicken with buttermilk. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. "}
      </h3>
      <p className="text-gray-600 text-sm">{}</p>
      <a href="#" className="text-orange-500 font-semibold mt-2 inline-block">
        View All Information
      </a>
    </div>
      </div>
    </div>
    </>
  )
}

export default CartDetailsModal
