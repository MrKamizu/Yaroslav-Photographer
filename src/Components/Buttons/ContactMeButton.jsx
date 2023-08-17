import React, { useState } from "react";

const ContactMeButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <a href="/">
      <div
        className={`px-[25px] py-[10px] bg-zinc-300 bg-opacity-0 rounded-[25px] shadow backdrop-blur-[100px] justify-center items-center inline-flex transition duration-300 transform hover:scale-105 active:scale-100 ${
          isHovered ? "animate-pulse" : ""
        } ${isClicked ? "animate-bounce" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsClicked(!isClicked)}
      >
        <p className="text-white text-[14px] lg:text-[18px] 3xl:text-[32px] font-normal uppercase">
          Contact me
        </p>
      </div>
    </a>
  );
};

export default ContactMeButton;
