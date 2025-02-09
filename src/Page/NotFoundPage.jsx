import { Link } from 'react-router'
import NotFound404 from '../assets/NotFound404.png'

const NotFoundPage = () => {
  return (
    <div className='py-10 relative'>
      <div className="container mx-auto">
        <div className=''>
          <div className='relative flex justify-center items-center'>
            <img src={NotFound404} alt="" />
          </div>
          <div className='absolute lg:ml-[450px] ml-[180px] -mt-[120px] '>
            <Link to={'/shop'}>
              <button className='bg-orange-600 text-white py-2 px-5'>
                Back To shoping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage