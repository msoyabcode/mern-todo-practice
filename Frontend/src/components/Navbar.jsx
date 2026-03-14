import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-700 text-white flex justify-between text-xl h-14 items-center p-5">
      <ul className="">
        <li>To Do App</li>
      </ul>
      <ul className="flex gap-9 cursor-pointer">
        <li> <Link to="/">List</Link></li>
        <li> <Link to="/add">Add Task</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
