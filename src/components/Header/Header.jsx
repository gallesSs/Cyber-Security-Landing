import logo from "../../assets/Header/Logo.svg";
import menu from "../../assets/Header/Menubar.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setmenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="flex justify-between p-4">
        <img src={logo} alt="" />
        {!menuOpen && <img src={menu} alt="" onClick={handleOpenMenu} />}
        {menuOpen && <MobileMenu handleOpenMenu={handleOpenMenu} />}
      </div>
    </header>
  );
};

export default Header;
