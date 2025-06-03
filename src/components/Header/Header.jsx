import logo from "../../assets/Header/Logo.svg";
import menu from "../../assets/Header/Menubar.svg";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between p-4">
        <img src={logo} alt="" />
        <img src={menu} alt="" />
      </div>
    </header>
  );
};

export default Header;
