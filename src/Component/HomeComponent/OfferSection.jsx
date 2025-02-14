import { Link } from 'react-router'
import pizzaOffer from '../../assets/pizzaOffer.png'

const OfferSection = () => {
  return (
    <div className='container mx-auto'> 
<div className="relative bg-orange-500 py-16 px-6 md:px-10 flex flex-col-reverse md:flex-row items-center justify-between">
  {/* Text Section */}
  <div className="max-w-xl text-center md:text-left">
    <h1 className="text-white lg:text-3xl md:text-3xl text-xl font-bold leading-snug">
      Always Hot Food Delivered At Your Door Step
    </h1>
    <Link to={'/shop'}>
      <button className="mt-6 bg-black text-white px-6 py-3 rounded-3xl font-semibold">
        Order Now
      </button>
    </Link>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={pizzaOffer} // Replace with actual image
      alt="Pizza Box"
      className="w-full max-w-sm md:max-w-md lg:max-w-lg object-cover"
    />
  </div>
</div>

</div>
  )
}

export default OfferSection