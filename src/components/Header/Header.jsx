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
    <header>
      <div className="flex justify-between p-4">
        <img src={logo} alt="Logo" />
        <img
          src={menu}
          alt="Menu"
          onClick={handleOpenMenu}
          className={`${menuOpen ? "opacity-0 pointer-events-none" : ""}`}
        />
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
