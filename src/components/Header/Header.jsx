import logo from "/public/Header/Logo.svg";
import menu from "/public/Header/Menubar.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-[#FAFAFA]">
      <div className="flex justify-between items-center p-4 md:px-[9.5%]">
        <img src={logo} alt="Logo" />
        <img
          src={menu}
          alt="Menu"
          onClick={handleOpenMenu}
          className={`${
            menuOpen ? "opacity-0 pointer-events-none" : ""
          } md:hidden`}
        />
        <nav className="hidden md:flex justify-center mt-2">
          <ul className="flex justify-end gap-10 text-[#161616] text-base font-medium leading-6">
            <li className="hover:text-red-600 transition-all duration-300 active:text-red-600 cursor-pointer">
              <a href="#About">About</a>
            </li>
            <li className="hover:text-red-600 transition-all duration-300 active:text-red-600 cursor-pointer">
              <a href="#Features">Features</a>
            </li>
            <li className="hover:text-red-600 transition-all duration-300 active:text-red-600 cursor-pointer">
              Advantages
            </li>
            <li className="hover:text-red-600 transition-all duration-300 active:text-red-600 cursor-pointer">
              Reviews
            </li>
            <li className="hover:text-red-600 transition-all duration-300 active:text-red-600 cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>
      </div>
      <MobileMenu
        handleOpenMenu={handleOpenMenu}
        isOpen={menuOpen}
        handleClose={handleClose}
      />
    </header>
  );
};

export default Header;
