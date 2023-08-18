import React from "react";

const FooterElement = () => {
  return (
    <div className="max-w-[1980px] mx-auto py-2.5 flex flex-col items-center">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start px-4 md:px-8 lg:px-12">
        <div className="flex flex-col justify-start items-start gap-5">
          <div className="text-white text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-medium tracking-wide">
            Yaroslav Dveik
          </div>
          <div className=" text-zinc-400 text-sm md:text-base font-normal tracking-wide">
            тут можеш написати який ти піздатий фотограф і ще якусь дуже цікаву
            інфу хз
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-5 py-5 lg:py-0">
          <div className="text-white text-sm md:text-base font-medium tracking-wide">
            ІНФОРМАЦІЯ
          </div>
          <div className="text-zinc-400 text-sm md:text-base font-normal tracking-wide">
            Terms of use of the site
          </div>
          <div className="text-zinc-400 text-sm md:text-base font-normal tracking-wide">
            Contacts
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-5">
          <div className="text-white text-sm md:text-base font-medium tracking-wide">
            Contact me
          </div>
          <div className="relative">
            {/* Your contact icons or information here */}
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        <span className="text-white text-sm md:text-base font-medium tracking-wide">
          © 2023{" "}
        </span>
        <span className="">Yaroslav Dveik</span>
      </div>
    </div>
  );
};

export default FooterElement;
