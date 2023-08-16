import React from "react";
import MainVideo from "../../assets/MainVideo.jpg";
import ScrollDownIcon from "../icons/ScrollDownIcon";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="relative flex items-center justify-center lg:justify-normal bg-gradient-to-t from-black">
        <img
          className="h-screen w-full object-cover brightness-90"
          src={MainVideo}
          alt="MainVideo"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#191919] to-transparent"></div>
        <div className="absolute left-[16px] md:left-[32px] lg:left-[90px] text-white text-[32px] lg:text-5xl xl:text-5xl xl:text-[64px] 2xl:text-[100px] tracking-[1.60px] lg:tracking-[2.40px] xl:tracking-[3.20px] font-medium">
          <p>
            Capturing Moments,
            <br /> Framing Memories
          </p>
          <a href="/">
            <div className="px-[25px] py-[10px] bg-zinc-300 bg-opacity-0 rounded-[25px] shadow backdrop-blur-[100px] justify-center items-center inline-flex">
              <p className="text-white text-[14px] lg:text-[18px] 2xl:text-[32px] font-normal uppercase">
                Contact me
              </p>
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
