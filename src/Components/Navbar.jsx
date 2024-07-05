import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
const Navbar = () => {
  const dispatch=useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center py-3 px-6 bg-white shadow-md mb-10">
      <div className="flex flex-col items-center lg:items-start mb-4 lg:mb-0">
        <h3 className="text-lg font-medium text-gray-500">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-3xl font-bold text-blue-600">Flavoro Foods</h1>
      </div>
      <div className="w-full lg:w-auto">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search here"
          autoComplete="off"
          className="p-3 border border-gray-300 text-sm rounded-lg outline-none w-full lg:w-96"
          onClick={(e)=>{dispatch(setSearch(e.target.value))}}
        />
      </div>
    </nav>
  );
};

export default Navbar;
