import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./icons/BurgerMenu";

const useScrollPosition = () => {
  const prevScrollPos = useRef(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos.current > currentScrollPos);
    prevScrollPos.current = currentScrollPos;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return visible;
};

const Header = () => {
  const visible = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Block page scrolling
    } else {
      document.body.style.overflow = ""; // Restore page scrolling
    }
  }, [isMenuOpen]);
  const links = [
    { id: "home", label: "Home", url: "/" },
    { id: "about", label: "About me", url: "/about" },
    { id: "gallery", label: "Art gallery", url: "/gallery" },
    { id: "palette", label: "Gallery Palette", url: "/palette" },
  ];

  return (
    <header
      className={`fixed z-10 top-0 right-0 w-full transition-transform duration-300 transform ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        className={`px-6  lg:px-[48px] py-3 shadow backdrop-blur-[100px] flex justify-between items-start ${
          isMenuOpen ? "h-screen " : ""
        } `}
      >
        <div className="text-2xl font-normal">Yaroslav Dveik</div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden z-10"
        >
          <BurgerMenu />
        </button>
        <ul
          className={`flex justify-center items-center gap-y-6 lg:gap-y-0 gap-x-6 lg:gap-x-16 text-lg font-normal ${
            isMenuOpen ? "flex absolute flex-col justify-center w-full h-full" : "hidden"
          } lg:flex`}
        >
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.url} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
