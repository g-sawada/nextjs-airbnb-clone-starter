import React from "react";
import AirbnbLogo from "../../svg/airbnb-logo";


const Navbar = () => {
  return (
    <header className="w-full flex flex-col justify-center transition-all duration-3">
      <div className="flex items-center justify-between px-20">
        <div className="flex-grow basis-0">
          <div className="w-max cursor-pointer">
            < AirbnbLogo />
          </div>
        </div> 
      </div>
    </header>
  );
};

export default Navbar;
