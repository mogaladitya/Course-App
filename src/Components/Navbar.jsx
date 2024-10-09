import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-bgDark py-4">
        <h1 className="text-center text-3xl font-bold text-white">Top Courses</h1>

        <div className="flex justify-center gap-4 mt-4 ">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "text-yellow-500" : "text-white")}
          >
            <button className="bg">
            Home
            </button>
           
          </NavLink>
          <NavLink 
            to="/feedback" 
            className={({ isActive }) => (isActive ? "text-yellow-500" : "text-white")}
          >
            Feedback
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
