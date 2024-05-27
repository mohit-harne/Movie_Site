import React from "react";
import { Navbar } from "flowbite-react";

const NavBar = () => {
  
  return (
    <div>
      <Navbar className="  backdrop-blur-sm bg-gray-800 bg-opacity-45  w-[100%] fixed z-10 ">
        <Navbar.Brand href="/">
          <h1 className="text-4xl text-red-700 tracking-widest">
            <span className="text-white ml-24">MOVIES</span>FLIX
          </h1>
        </Navbar.Brand>
        
        <Navbar.Collapse >
            <div className="grid grid-flow-col  justify-end gap-6 pr-[150px] mt-[-10px]">
          <Navbar.Link
            className="text-lg text-white  hover:text-red-700  tracking-wider"
            href="/"
          >
           
            MOVIES
          </Navbar.Link>
          <Navbar.Link
            className="text-lg text-white  hover:text-red-700 tracking-wider "
            href="/webseries"
          >
           
            WEBSERIES
          </Navbar.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
