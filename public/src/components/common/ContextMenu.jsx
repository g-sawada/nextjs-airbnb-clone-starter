import React, { useEffect, useRef } from "react";

const ContextMenu = ({options, coordinates, contextMenu, setContextMenu}) => {
  const contextMenuRef = useRef(null);

  const handleClick = (e, callback) => {
    e.stopPropagation();
    callback();
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(contextMenuRef.current && !contextMenuRef.current.contains(event.target)) {
        setContextMenu(false);
        }
      };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  },[])

  return(
    <div 
      ref={contextMenuRef}
      style={{
        boxShadow: "0 2px 5px 0 rgba(var(11,20,26),.26),0 2px 10px 0 rgba(11,20,26;),.16)",
        top:coordinates.y,
        left:coordinates.x,
      }}
      className="bg-white shadow-2xl fixed py-5 z-[100] rounded-lg border border-gray-200"
    >
    <ul>
      {
        options.map(({ name, callback }) => (
          <li 
            className="hover:bg-gray-100 pl-5 pr-10 py-2 cursor-pointer"
            key={name}
            onClick={e => handleClick(e, callback)}
          >
            <span>{name}</span>

        </li>
      
      ))}

    </ul>
    
    </div>
  );
};

export default ContextMenu;
