import React from "react";

const BurgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={` relative w-11 h-9 cursor-pointer flex justify-between ${
        isOpen ? "open" : ""
      }`}
      onClick={toggleMenu}
    >
      <span
        className={`absolute h-1 w-full bg-white rounded-full transition-all duration-500 ${
          isOpen ? "transform rotate-45 top-1/2" : "top-1"
        }`}
      ></span>
      <span
        className={`absolute h-1 w-full bg-white rounded-full transition-all duration-500 ${
          isOpen ? "opacity-0" : "top-1/2"
        }`}
      ></span>
      <span
        className={`absolute h-1 w-full bg-white rounded-full transition-all duration-500 ${
          isOpen ? "transform -rotate-45 top-1/2" : "bottom-0"
        }`}
      ></span>
    </div>
  );
};

export default BurgerMenu;
