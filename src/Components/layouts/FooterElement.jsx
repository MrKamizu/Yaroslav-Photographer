import React, { useMemo } from "react";

import Instagram from "../icons/Socials/Instagram.svg";
import Telegram from "../icons/Socials/Telegram.svg";
import X from "../icons/Socials/X.svg";

const SOCIAL_ICONS = [
  { icon: Instagram, link: "/" },
  { icon: Telegram, link: "/" },
  { icon: X, link: "/" },
];

const INFORMATION_LINKS = ["Terms of use of the site", "Contacts"];

const renderInformationLinks = () =>
  INFORMATION_LINKS.map((link, index) => (
    <div
      key={index}
      className="text-zinc-400 text-sm md:text-base font-normal tracking-wide"
    >
      {link}
    </div>
  ));

const renderSocialIcons = () =>
  SOCIAL_ICONS.map((item, index) => (
    <a key={index} className="w-5 h-5" href={item.link}>
      <img className="w-full h-full" src={item.icon} alt="" />
    </a>
  ));

const FooterElement = () => {
  const informationLinks = useMemo(() => renderInformationLinks(), []);
  const socialIcons = useMemo(() => renderSocialIcons(), []);

  return (
    <div className="w-full mx-auto py-2.5 flex flex-col items-center p-4 md:px-[32px] lg:px-[300px]">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start">
        <div className="flex flex-col justify-start items-start gap-5">
          <div className="text-white text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-medium tracking-wide">
            Yaroslav Dveik
          </div>
          <div className=" text-zinc-400 text-sm md:text-base font-normal tracking-wide max-w-md">
            тут можеш написати який ти піздатий фотограф і ще якусь дуже цікаву
            інфу хз
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-5 py-5 lg:py-0">
          <div className="text-white text-sm md:text-base font-medium tracking-wide">
            ІНФОРМАЦІЯ
          </div>
          {informationLinks}
        </div>
        <div className="flex flex-col justify-start items-start gap-5">
          <div className="text-white text-sm md:text-base font-medium tracking-wide">
            Contact me
          </div>
          <div className="relative flex justify-between items-start w-full">
            {socialIcons}
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
