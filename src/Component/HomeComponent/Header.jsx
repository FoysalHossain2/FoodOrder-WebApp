import { CiShop } from "react-icons/ci";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { CgSearch } from "react-icons/cg";
import Search from "../CommonComponent/Search";
import {Link, NavLink } from 'react-router'

const Header = () => {

  const menu = [
    {
      id: 1,
      title: 'Home',
      icon: <CiShop />,
      link: '/'
    },
    {
      id: 1,
      title: 'Shop',
      icon: <CiShop />,
      Link: 'shop'
    },
    {
      id: 1,
      title: 'Search',
      icon: <CgSearch />,
      Link: 'search'
    },
    {
      id: 1,
      title: 'Sing In',
      icon: <FaUser />,
      link: 'singIn'
    },
    {
      id: 1,
      title: 'Cart',
      icon: <RiShoppingBag4Fill />,
      cart: 'Cart'
    }
  ]

  return (
    <nav className=" px-6 py-4 bg-white shadow-lg lg:block relative">
      <div className="container mx-auto">
        <div className="sm:hidden lg:block">
          <div className="flex items-center justify-between  ">

          {/* Logo Section */}
          <Link to={'/'} className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-8 mr-2" />
            <span className="text-xl font-bold text-orange-500">FOOD</span>
          </Link>

          {/* Menu Items */}
          <ul className="hidden md:flex gap-x-10">
            {menu.map((item ,id) => (
              
            <NavLink to={`/${item.title}`} key={id} style={({ isActive }) => ({
              color: isActive ? "text-orange-400" : "text-black",
            })} className="cursor-pointer text-[18px] font-medium font-DM_Sans text-gray-700 hover:text-orange-500 flex items-center gap-x-2">
              {item.icon}
              {item.title}
            </NavLink>
            ))}
          </ul>


          </div>
        </div>
    


        {/* responsive for mobile  */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between gap-x-4 ">

            {/* Logo Section */}
            <div className="flex items-center">
              {/* <img src="/logo.svg" alt="Logo" className="h-8 mr-2" /> */}
              <span className="text-xl font-bold text-orange-500">FoodOrd</span>
            </div>
            
            {/* search option */}
            <Search />
          </div>
        </div>

          {/* <div className="absolute bottom-0 left-0 top-[800px] bg-white">
            <ul className=" flex gap-x-10">
              {menu.map((item ,id) => (
                
              <li key={id} className="text-[18px] font-medium font-DM_Sans text-gray-700 hover:text-orange-500 flex items-center gap-x-2">
                {item.icon}
                
              </li>
              ))}
            </ul>
          </div> */}

      </div>
      </nav>

  );
};

export default Header;      
