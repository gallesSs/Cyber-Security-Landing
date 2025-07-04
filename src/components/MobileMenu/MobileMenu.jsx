import { useRef, useEffect } from "react";

const MobileMenu = ({ handleOpenMenu, isOpen, handleClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClose]);

  return (
    <div
      ref={menuRef}
      className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-amber-100 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-20" : "translate-x-full"
      } md:hidden`}>
      <button onClick={handleOpenMenu} className="p-4 text-white">
        Закрыть
      </button>
      <ul className="p-6 space-y-4">
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Features">Features</a>
        </li>
        <li>
          <a href="#Advantages">Advantages</a>
        </li>
        <li>
          <a href="#Reviews">Reviews</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
