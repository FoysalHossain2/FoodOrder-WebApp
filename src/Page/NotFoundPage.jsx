import NotFound404 from '../assets/NotFound404.png'

const NotFoundPage = () => {
  return (
    <div className='py-10'>
      <div className="container mx-auto">
        <div className='relative flex justify-center items-center'>
          <img src={NotFound404} alt="" />
        </div>
        <div className='absolute ml-[450px] -mt-[120px]'>
          <button className='bg-orange-600 text-white py-2 px-5'>
            Back To Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage