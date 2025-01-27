import { useContext, useState} from "react";
import CartComponent from "../Component/CommonComponent/CartComponent.jsx"
import Sort from "../Component/CommonComponent/Sort";
import { CartContext, ProductContext} from '../contexts/index'
import LoadingSkeleton from '../Component/CommonComponent/LoadingSkeleton'
import filter from '../assets/filter.svg'
import FilterModal from "../Component/CommonComponent/FilterModal";
import ShopTop from '../Component/CommonComponent/ShopTop.jsx'
import CategoryItem from '../Component/CommonComponent/common/CategoryItem.jsx'
import DataError from '../Component/CommonComponent/common/DataError.jsx'
import BreadCramp from '../Component/CommonComponent/common/BreadCramp.jsx'
import { searchData } from "../../utils/helper.js";
import ShopDataNotFound from '../Component/CommonComponent/common/ShopDataNotFound'

const ShopPage = () => {

  const [ModalShow, setModalShow] = useState(false)
  const [SelectFilter, setSelectFilter] = useState(null)
  const {ProductData, Loading, Error} = useContext(ProductContext)
  const {state, dispatch} = useContext(CartContext);
console.log(ProductData.categoryItem);


  const {searchQuery} = state;
  
  const Skeleton = Array.from({length: 16})

  const productData = searchData(ProductData, searchQuery)

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
      <div className="pt-[50px] pb-[100px] px-4 md:px-4 lg:px-0">
        <div className="container mx-auto">

          <BreadCramp />


          {/* --- filter option --- */}
            <div className="mb-16 flex items-center gap-x-3 sticky">
              <button onClick={() => HandleShowModal ()} className="flex items-center gap-x-2 py-[9px] px-2 border w-24 rounded-lg cursor-pointer">
                <img src={filter} alt="" />
                <p className="font-DM_Sans" >Filters</p>
              </button>
              <div className="w-20">
                <Sort ProductData={ProductData} />
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
            Error ? (<div> <DataError /> </div>)
            :

            <div>
              
             {/* CategoryItem */}
             < CategoryItem />

             <ShopTop />
              {productData ? 
              (
                <div  className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                {productData.map((item, id) => (
                  <div key={id} >
      
                    <CartComponent 
                      cartData={item}
                    />
                  </div>
                ))}
                </div>
              )
              :
              <div>
              <ShopDataNotFound />
            </div>
            }
            </div>
            
            }
          
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopPage