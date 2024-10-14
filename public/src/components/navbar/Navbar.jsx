"use client";

import React, { useState } from "react";
import Image from "next/image";
import AirbnbLogo from "../../svg/airbnb-logo";
import { FiGlobe } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import ContextMenu from "../common/ContextMenu";
import { useAppStore } from "airbnb/store/store";

const Navbar = () => {

  const { setAuthModal } = useAppStore();

  const [isContextMenudVisible, setIsContextMenuVisible] = useState(false);

  // contexMenuOptions is an array of objects with two keys: name and callback
  const contextMenuOptions = [
    {
      name : "Login",
      callback :() =>  {
        setAuthModal();
        setIsContextMenuVisible(false);
      },
    },
    {
      name : "Sign up",
      callback :() =>  {
        setAuthModal();
        setIsContextMenuVisible(false);
      },
    },
    {
      name : "AirBnb your home",
      callback :() =>  {
        setIsContextMenuVisible(false);
      },
    },
    {
      name : "Help",
      callback :() =>  {
        setIsContextMenuVisible(false);
      },
    },
  ]

  return (
    <header className="w-full flex flex-col justify-center transition-all duration-300 h-20 border-b border-b-gray-200">
      <div className="flex items-center justify-between px-20">
        <div className="flex-grow basis-0">
          <div className="w-max cursor-pointer">
            < AirbnbLogo />
          </div>
        </div> 
        <div className="flex-grow basis-0">
          <ul className="flex items-center justify-end gap-6 font-medium">
            <li className="cursor-pointer">
              <span>Airbnb your home</span>
            </li>
            <li className="cursor-pointer">
              <FiGlobe />
            </li>
            <li 
              className="flex cursor-pointer items-center gap-2 border border-gray-300 py-2 px-3 rounded-full hover:shadow-xl transition-all duration-500"
              onClick={() => setIsContextMenuVisible(true)}
            >
              <RxHamburgerMenu />
              <span>
                <Image src="/empty-profile.png" alt="profile" width={30} height={30} />
              </span>
            </li>
          </ul>
        </div>
      </div>
      {
        isContextMenuVisible && (
          <ContextMenu
            contextMenu={isContextMenuVisible}
            setContextMenu={setIsContextMenuVisible}
            coordinates={{ 
              x:window.innerWidth-250,
              y: 70
            }}
            options={contextMenuOptions}  
          />
      )}
    </header>
  );
};

export default Navbar;
