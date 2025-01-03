/* eslint-disable react/prop-types */
import { CategoryRelateImage } from '../../../data/DataBase'
import { Category } from '../../../data/DataBase';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Slider from "react-slick";

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
              ...style,
              display: "block",
              background: "gray",
              padding: "13px",
              cursor: "pointer",
              position: "absolute",
              right: "0px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={onClick}
          >
            <div className="flex justify-center items-center  text-white text-2xl">
              <MdChevronRight />
            </div>
          </div>
        );
      }
      
      // Previous arrow function
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
          className={className}
            style={{
              ...style,
              display: "block",
              background: "gray",
              padding: "8px",
              cursor: "pointer",
              position: "absolute",
              left: "-20px",
              zIndex: "1",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={onClick}
          >
            <div className="flex justify-center items-center text-white text-2xl">
              <MdChevronLeft />
            </div>
          </div>
        );
      }
      
      // slider Implementation
      var settings = {
        dots: false,
        class: "center",
        centerPadding: "60px",
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
            },
          },
        ],
      };

const MenuCategory = () => {


  return (
    <>
        <div className="bg-white py-[150px] ">
            <div className="container mx-auto">
                <div className='mb-10'>
                    <h1 className='font-DM_Sans font-bold text-[26px]'>Special Menu for you...</h1>
                </div>
                <div className="sm:flex sm:flex-row md:flex md:flex-row lg:flex items-center  gap-x-8">
                    <div className="w-[25%] h-[350px] overflow-hidden overflow-y-scroll ">
                        {Category.map((item, id) => (
                            <div key={id} className=' flex items-center  gap-x-7 py-3 mt-5 hover:bg-green-500 px-2 rounded-full cursor-pointer'>
                                <img src={item.image} alt="" className='h-10 w-10 bg-white rounded-full' />
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
            
                    <div className='bg-slate-300 w-[75%] p-4'>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {CategoryRelateImage.slice(0,3).map((item, id) => (
                            <div
                                key={id}
                                className="bg-cover bg-center relative w-full h-[350px] rounded-lg shadow-lg"
                                style={{
                                  backgroundImage: `url(${item.image})`,
                                }}
                            >
                                <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                                <div className="absolute bottom-4 left-4 text-white z-10">
                                <h3 className="text-3xl font-bold font-DM_Sans">
                                    {item.title}
                                </h3>
                                <p>Aqua Shift Special Edition</p>
                                </div>
                            </div>
                            ))}

                        </div>
                 
                    </div>
                </div>
            </div>
        </div>
  
    </>
  )
}

export default MenuCategory