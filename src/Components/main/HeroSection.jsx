import React from "react";
import MainVideo from "../../assets/MainVideo.jpg";
import ScrollDownIcon from "../icons/ScrollDownIcon";

const HeroSection = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center lg:justify-normal bg-gradient-to-t from-black">
        <img
          className="h-screen w-full object-cover brightness-90"
          src={MainVideo}
          alt="MainVideo"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#191919] to-transparent"></div>
        <div className="absolute left-32 w-[771px] text-white text-[64px] font-medium tracking-[3.20px]">
          <p>Capturing Moments, Framing Memories</p>
          <a href="/">
            <div class="px-[25px] py-2.5 bg-zinc-300 bg-opacity-0 rounded-[25px] shadow backdrop-blur-[100px] justify-center items-center inline-flex">
              <p class="text-white text-sm font-normal uppercase">Contact me</p>
            </div>
          </a>
        </div>
        <div className="absolute flex justify-center bottom-10 left-0 w-full py-4">
          <ScrollDownIcon />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
