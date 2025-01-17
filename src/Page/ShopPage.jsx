import { useContext, useState} from "react";
import CartComponent from "../Component/CommonComponent/CartComponent.jsx"
import Sort from "../Component/CommonComponent/Sort";
import { ProductContext} from '../contexts/index'
import LoadingSkeleton from '../Component/CommonComponent/LoadingSkeleton'
import filter from '../assets/filter.svg'
import FilterModal from "../Component/CommonComponent/FilterModal";


const ShopPage = () => {

  const [ModalShow, setModalShow] = useState(false)
  const [SelectFilter, setSelectFilter] = useState(null)
  const {ProductData, Loading, Error} = useContext(ProductContext)
  
  const Skeleton = Array.from({length: 16})
  

  // HandleShowModal
  const HandleShowModal = () => {
    setModalShow(true)
  }

  const HandleClose = () => {
    setModalShow(false)
  }

  return (
    <>
    {ModalShow && (

     <FilterModal
      onClose={HandleClose}
    />
    )}
      <div className="pt-[50px] pb-[100px] lg:px-0 px-2">
        <div className="container mx-auto">
          <div className="flex"> 
            <img src="" alt="Delivery" className="w-20 h-20" />
            <h1 className="text-lg">Delivery</h1>
          </div>

          {/* --- filter option --- */}
          <div className="mb-16 flex items-center gap-x-3">
            <button onClick={() => HandleShowModal ()} className="flex items-center gap-x-2 py-[9px] px-2 border w-24 rounded-lg cursor-pointer">
              <img src={filter} alt="" />
              <p className="font-DM_Sans" >Filters</p>
            </button>
            <div className="w-20">
              <Sort />
            </div>
            <div className="py-[9px] px-2 border w-24 rounded-lg cursor-pointer">
            <p>Pur Vage</p>
            </div>
          </div>
            {/* --- filter option --- */}

          <div > 
            {Loading ? 
            (<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
              { Skeleton.map((_,index) => (
              <div key={index} >
                <LoadingSkeleton />
              </div>
            ))}
            </div>)
            :
            Error ? (<div>Error...</div>)
            :
            ProductData && (
              <div  className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
              {ProductData.map((item, id) => (
                <div key={id} >
    
                  <CartComponent 
                    cartData={item}
                  />
                </div>
              ))}
              </div>
            )
            }
          
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopPage