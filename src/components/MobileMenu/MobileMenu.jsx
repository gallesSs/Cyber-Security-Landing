const MobileMenu = ({ handleOpenMenu }) => {
  return (
    <ul
      onClick={handleOpenMenu}
      className="absolute top-0 right-0 p-4 bg-gray-600 text-amber-100">
      <li>Demos</li>
      <li>About</li>
      <li>Blog</li>
      <li>Pages</li>
      <li>Contact</li>
    </ul>
  );
};

export default MobileMenu;
