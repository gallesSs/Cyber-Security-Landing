import logo from "../../assets/Header/Logo.svg";
import menu from "../../assets/Header/Menubar.svg";
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
      <div className="flex justify-between p-4 md:px-38">
        <img src={logo} alt="Logo" />
        <img
          src={menu}
          alt="Menu"
          onClick={handleOpenMenu}
          className={`${
            menuOpen ? "opacity-0 pointer-events-none" : ""
          } md:hidden`}
        />
        <nav>
          <ul className="flex gap-10 text-[#161616] text-base font-medium leading-6">
            <li>Demos</li>
            <li>About</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact</li>
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
