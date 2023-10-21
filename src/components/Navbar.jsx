import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            
<nav className="bg-white border-gray-200 shadow-2xl lg:py-5 py-4 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Food Shop</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white   dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
     
         <li>
          <NavLink to="/"  className={({ isActive, isPending }) =>
    isPending ? "white" : isActive ? "text-orange-500 font-bold'" : "text-red-900"
  }>
            Home
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/addProduct" className={({ isActive, isPending }) =>
    isPending ? "white" : isActive ? "text-yellow-500 font-bold'" : "text-red-900"
  } >
            Add Product
          </NavLink>
        </li>

        <li>
          <NavLink to='updateProduct' className={({ isActive, isPending }) =>
    isPending ? "white" : isActive ? "text-lime-500 font-bold'" : "text-red-900"
  }>
            Update Product
          </NavLink>
        </li>
        <li>
          <a href="#" className="">Pricing</a>
        </li>
        <li>
          <a href="#" className="">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    );
};

export default Navbar;