import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <nav className=" px-6 py-4 bg-white shadow-md lg:block">
        <div className="container mx-auto">
          <div className="flex items-center justify-between ">

        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-8 mr-2" />
          <span className="text-xl font-bold text-orange-500">FOOD</span>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-orange-500">
            Home
          </a>
          <a href="#cart" className="text-gray-700 hover:text-orange-500">
            Cart
          </a>
          <a href="#shop" className="text-gray-700 hover:text-orange-500">
            Shop
          </a>
          <a href="#contact" className="text-gray-700 hover:text-orange-500">
            Contact
          </a>
        </div>

        {/* Search and Cart */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 text-gray-700 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="absolute top-0 right-0 px-4 py-2 text-orange-500">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="relative">
            <button className="flex items-center text-orange-500">
              <i className="fas fa-shopping-cart text-xl"></i>
            </button>
            <span className="absolute top-0 right-0 px-2 text-xs font-bold text-white bg-orange-500 rounded-full">
              2
            </span>
          </div>
        </div> 
      </div>
    </div>
        {/* responsive for mobile  */}

        <div className="flex items-center justify-between lg:hidden">
           <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-8 mr-2" />
            <span className="text-xl font-bold text-orange-500">FOOD</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 text-gray-700 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button className="absolute top-0 right-0 px-4 py-2 text-orange-500">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center text-orange-500">
                <i className="fas fa-shopping-cart text-xl"></i>
              </button>
              <span className="absolute top-0 right-0 px-2 text-xs font-bold text-white bg-orange-500 rounded-full">
                2
              </span>
            </div>
          </div>

          <div>
            <FaBars />
          </div>
        </div>


      </nav>
  );
};

export default Header;      
