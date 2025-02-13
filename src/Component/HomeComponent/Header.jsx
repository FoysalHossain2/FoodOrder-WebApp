import { useContext, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Search from "../CommonComponent/Search";
import FoodOrder from '../../assets/FoodOrder.png'
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CartContext, ProductContext } from "../../contexts";
import { useLocation } from "react-router-dom";
import Headroom from 'react-headroom'
import { FaRegCircleUser } from "react-icons/fa6";
import BottomNavbar from '../CommonComponent/common/BottomNavbar'
import Addmin from "../CommonComponent/common/Addmin";

const Header = () => {

  const [ShowAdMin, setShowAdMin] = useState(false)
  const {state, dispatch} = useContext(CartContext);
  const location = useLocation()

  // HandleClick
  const HandleClick = () => {
    setShowAdMin(!ShowAdMin)
  }


  return (
    <>
      {/*=========== Header part =*/}
      <Headroom className="z-50">
        <div
          className={`lg:py-[10px] py-2 bg-white `}
        >
        
        
          <div className="container mx-auto ">
            {/* --- for lg device ---  */}
            <div className="lg:block hidden">
              <div
                className="flex lg:items-center justify-between  
              max-sm:flex-col  lg:flex-row 
              max-sm:px-2 max-md:px-2 md:px-2 lg:px-0 
            "
              >
                  <div className="flex items-center">
                  <Link to={'/'} className="flex items-center">
                    <img src={FoodOrder} alt="Logo" className="h-12 mr-2" />
                  </Link>
                </div>
                
                {/*========== Search option ==========*/}
                  <div className="lg:max-w-[700px] max-md:max-w-[700px] w-full max-sm:mt-2 md:mt-4 max-md:mt-4 lg:mt-0">
                    <div>
                    {location.pathname === "/shop" && (

                      <Search className="relative"  />
                    )}
                    </div>
                  </div>
                {/*========== Search option ==========*/}

                {/* ========== singIn , login & other option ========== */}
                <div className=" max-sm:hidden md:hidden max-md:hidden lg:block ">
                  <div className="flex items-center gap-x-4 ">

                    <div>
                      <NavLink to={`/singin`} className={'text-[18px] font-DM_Sans'}>
                        Login
                      </NavLink>
                    </div>

                    <div className="border-r border-gray-300 h-5 w-[2px]  max-sm:hidden block"></div>

                    {/* --------------- login part ------------------*/}
                    <div>
                      <NavLink to={`/singup`} className={'text-[18px] font-DM_Sans'} >
                        Sing Up
                      </NavLink>
                    </div>
                    {/* --------------- login part ------------------*/}

                    <div className="border-r border-gray-300 h-5 w-[2px]  "></div>

                    {/*  AddToCart Part =========== */}
                    <div>
                  <NavLink to={`/Cart`} >
                  <LiaShoppingBagSolid className="text-[28px]" />
                  <div className="relative">
                  {state.EachCartData.length > 0 && (
                        'Cart' 
                        ?  
                        <div className="absolute ml-[10px] -mt-[21px] h-1 w-1 text-red-400 font-semibold text-[13px]">
                          {state.EachCartData.length}
                        </div>
                        : 
                        <div className="bg-red-500"></div>
                    )}
                  </div>
                    
                  </NavLink>
                </div>
            
                    {/*  AddToCart Part =========== */}
                  </div>
                </div>
                {/* ===== sing in , login & other option ===== */}
              </div>
            </div>
            {/* --- for lg device ---  */}


            {/* === for md, sm device === */}
            <div className="lg:hidden block px-4 md:px-4 lg:px-0 md:shadow-none shadow-lg">
              <div
                className="flex items-center  justify-between  
              max-sm:px-2 max-md:px-2 md:px-2 lg:px-0
            "
              >
                  <div className="flex items-center">
                  <Link to={'/'} className="flex items-center">
                    <img src={FoodOrder} alt="Logo" className="h-14 mr-2" />
                  </Link>
                </div>

                <div className="text-[30px]">
                   <button onClick={HandleClick}>
                    <FaRegCircleUser />
                   </button>
                   {ShowAdMin && (

                    <div className="absolute">
                      <Addmin />
                    </div>
                   )}
                </div>
              </div>
            </div>
            {/* === for md, sm device === */}

          </div>
          </div>
      </Headroom>
      
           

          <div className="lg:hidden block">
            <BottomNavbar />
          </div>
      {/*=========== Header part =*/}
    </>
  );
};

export default Header;
