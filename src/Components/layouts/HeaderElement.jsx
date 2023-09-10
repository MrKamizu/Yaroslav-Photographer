import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import BurgerMenu from "../UI/BurgerMenu"; // Імпорт компонента для бургер-меню
import useScrollPosition from "../hooks/useScrollPosition";

// Компонент для відображення посилань меню
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

// Масив з посиланнями для меню
const MENU_LINKS = [
  { id: "home", label: "Home", url: "/" },
  { id: "about", label: "About me", url: "/about" },
  { id: "gallery", label: "Art gallery", url: "/gallery" },
  { id: "topics", label: "Topics", url: "/topics" },
  { id: "contact  ", label: "Contact", url: "/contact" },
];

// Компонент заголовка
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
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed z-10 top-0 w-full  m-auto max-w-[1980px] transition-transform duration-300 transform ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav
          className={`px-6 relative lg:px-[48px] py-3 shadow backdrop-blur-[100px] flex justify-between  justify-center items-center ${
            isMenuOpen ? "h-screen items-baseline " : ""
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
