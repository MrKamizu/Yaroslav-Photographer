import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { throttle } from "../utils/hocs";

import BurgerMenu from "../UI/BurgerMenu";

const scrollCallback = (prevScrollPos, setVisible) => {
  const currentScrollPos = window.scrollY;
  setVisible(prevScrollPos.current > currentScrollPos);
  prevScrollPos.current = currentScrollPos;
};

const trottleScrollCallback = throttle(scrollCallback, 100);

/**
 * Hook for tracking scroll position
 */
const useScrollPosition = () => {
  const prevScrollPos = useRef(window.scrollY);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    trottleScrollCallback(prevScrollPos, setVisible);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return visible;
};

// Component for rendering menu links
const MenuLinks = ({ links, isMenuOpen, closeMenu }) => {
  const menuClass = isMenuOpen
    ? "flex absolute flex-col w-full h-full text-[32px] gap-y-16 m-[-24px]"
    : "hidden lg:flex";

  return (
    <ul
      className={`flex justify-center items-center gap-y-6 lg:gap-y-0 gap-x-6 lg:gap-x-16 text-lg md:text-md 2xl:text-lg font-normal ${menuClass}`}
    >
      {links.map((link) => (
        <li key={link.id}>
          <Link to={link.url} onClick={closeMenu}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const MENU_LINKS = [
  { id: "home", label: "Home", url: "/" },
  { id: "about", label: "About me", url: "/about" },
  { id: "gallery", label: "Art gallery", url: "/gallery" },
  { id: "topics", label: "Topics", url: "/topics" },
];

// Header component
const HeaderElement = () => {
  const visible = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((currentValue) => !currentValue);
  };

  return (
    <>
      <header
        className={`fixed z-10 top-0 w-full  m-auto max-w-[1980px] transition-transform duration-300 transform ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav
          className={`px-6 relative lg:px-[48px] py-3 shadow backdrop-blur-[100px] flex justify-between items-start justify-center items-center${
            isMenuOpen ? "h-screen " : ""
          }`}
        >
          <div className="text-md md:text-xl 2xl:text-2xl font-normal">
            <a href="/">Yaroslav Dveik</a>
          </div>
          <button onClick={toggleMenu} className="lg:hidden z-10">
            <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </button>
          <MenuLinks
            links={MENU_LINKS}
            isMenuOpen={isMenuOpen}
            closeMenu={() => setIsMenuOpen(false)}
          />
        </nav>
      </header>
    </>
  );
};

export default HeaderElement;
