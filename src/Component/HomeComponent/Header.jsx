import { CiShop } from "react-icons/ci";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { CgSearch } from "react-icons/cg";
import Search from "../CommonComponent/Search";

const Header = () => {

  const menu = [
    {
      id: 1,
      title: 'Home',
      icon: <CiShop />
    },
    {
      id: 1,
      title: 'Shop',
      icon: <CiShop />
    },
    {
      id: 1,
      title: 'Search',
      icon: <CgSearch />
    },
    {
      id: 1,
      title: 'Sing In',
      icon: <FaUser />
    },
    {
      id: 1,
      title: 'Cart',
      icon: <RiShoppingBag4Fill />
    }
  ]

  return (
    <nav className=" px-6 py-4 bg-white shadow-lg lg:block relative">
      <div className="container mx-auto">
        <div className="sm:hidden lg:block">
          <div className="flex items-center justify-between  ">

          {/* Logo Section */}
          <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-8 mr-2" />
            <span className="text-xl font-bold text-orange-500">FOOD</span>
          </div>

          {/* Menu Items */}
          <ul className="hidden md:flex gap-x-10">
            {menu.map((item ,id) => (
              
            <li key={id} className="cursor-pointer text-[18px] font-medium font-DM_Sans text-gray-700 hover:text-orange-500 flex items-center gap-x-2">
              {item.icon}
              {item.title}
            </li>
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
