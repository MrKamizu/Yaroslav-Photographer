import React from "react";
import Instagram from "./icons/Instagram.svg";
import Telegram from "./icons/Telegram.svg";
import X from "./icons/X.svg";

const FooterElement = () => {
  const socialIcons = [
    { icon: Instagram, link: "/" },
    { icon: Telegram, link: "/" },
    { icon: X, link: "/" },
  ];

  const informationLinks = ["Terms of use of the site", "Contacts"];

  const renderSocialIcons = () => {
    return socialIcons.map((item, index) => (
      <a key={index} className="w-5 h-5" href={item.link}>
        <img className="w-full h-full" src={item.icon} alt="" />
      </a>
    ));
  };

  const renderInformationLinks = () => {
    return informationLinks.map((link, index) => (
      <div
        key={index}
        className="text-zinc-400 text-sm md:text-base font-normal tracking-wide"
      >
        {link}
      </div>
    ));
  };

  return (
    <div className="max-w-[1380px] mx-auto py-2.5 flex flex-col items-center">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start px-4 md:px-8 lg:px-16">
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
          {renderInformationLinks()}
        </div>
        <div className="flex flex-col justify-start items-start gap-5">
          <div className="text-white text-sm md:text-base font-medium tracking-wide">
            Contact me
          </div>
          <div className="relative flex justify-between items-start w-full">
            {renderSocialIcons()}
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
