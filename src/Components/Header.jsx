import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
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

const MenuLinks = ({ links, isMenuOpen, closeMenu }) => {
  const menuClass = isMenuOpen
    ? "flex absolute flex-col w-full h-full text-[32px] gap-y-16"
    : "hidden lg:flex";

  return (
    <ul
      className={`flex justify-center items-center gap-y-6 lg:gap-y-0 gap-x-6 lg:gap-x-16 text-lg font-normal ${menuClass}`}
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

const Header = () => {
  const visible = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const menuLinks = [
    { id: "home", label: "Home", url: "/" },
    { id: "about", label: "About me", url: "/about" },
    { id: "gallery", label: "Art gallery", url: "/gallery" },
    { id: "topics", label: "Topics", url: "/topics" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed z-10 top-0 right-0 w-full transition-transform duration-300 transform ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav
          className={`px-6 relative lg:px-[48px] py-3 shadow backdrop-blur-[100px] flex justify-between items-start ${
            isMenuOpen ? "h-screen " : ""
          } `}
        >
          <div className="text-xl md:text-2xl font-normal">Yaroslav Dveik</div>
          <button onClick={toggleMenu} className="lg:hidden z-10">
            <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </button>
          <MenuLinks
            links={menuLinks}
            isMenuOpen={isMenuOpen}
            closeMenu={() => setIsMenuOpen(false)}
          />
        </nav>
      </header>
    </>
  );
};

export default Header;
