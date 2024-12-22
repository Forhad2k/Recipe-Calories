import { FaUser, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";

function Navber() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="flex w-full
     m-auto justify-between items-center px-6 py-2">
      
      <div className="nav-left flex items-center">
        {/* Toggle Button for Small Screens */}
      <button
        onClick={() => setIsToggled(!isToggled)}
        className="md:hidden p-3"
      >
        {isToggled ? <IoCloseSharp /> : <CgMenuLeftAlt />}
      </button>
        <h3 className="font-bold md:w-48 md:text-[24px]">Recipe Calories</h3>
      </div>

      <div
        className={`nav-center absolute md:relative  left-0 w-full bg-white z-20 p-5 shadow-lg transition-transform duration-300 md:static md:flex md:justify-center md:gap-7 md:bg-transparent md:shadow-none ${
          isToggled ? "block top-[70px]" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row gap-5 md:gap-7">
          <li className="cursor-pointer hover:text-gray-500">Home</li>
          <li className="cursor-pointer hover:text-gray-500">Recipes</li>
          <li className="cursor-pointer hover:text-gray-500">About</li>
          <li className="cursor-pointer hover:text-gray-500">Search</li>
        </ul>
      </div>

      
      <div className="nav-right flex items-center gap-3">
        <FaSearch />
        <input
          className="px-3 py-1 border-none outline-none sm:w-24 md:w-auto"
          type="text"
          placeholder="Search"
        />
        <FaUser />
      </div>

      
    </div>
  );
}

export default Navber;
