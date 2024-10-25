import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuantumzimeLogoImage from "../assets/images/navigationImages/quantumzyme_logo.png";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // Control body overflow when the menu is open
  useEffect(() => {
    const body = document.querySelector("body");
    if (openMenu) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [openMenu]);

  const toggleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const navigationLinks = [
    { id: 0, href: "/", linkText: "Home" },
    { id: 1, href: "/About", linkText: "About" },
    { id: 2, href: "/Contact", linkText: "Contact" },
    { id: 3, href: "/Careers", linkText: "Careers" },
    { id: 4, href: "/Faq", linkText: "FAQ" },
  ];

  return (
    <nav>
      {/* Hamburger Button */}
      <button
        className='menu-button md:p-4 p-3 fixed z-50'
        onClick={toggleOpenMenu}
      >
        <div className='relative w-8 h-6 transform transition-all duration-300'>
          {/* Hamburger lines */}
          <span
            className={`block absolute h-1 w-full bg-black rounded-3xl transform transition-all duration-300 ${
              openMenu ? "top-2.5 rotate-45 bg-offWhite" : "top-0 rotate-0"
            }`}
          />
          <span
            className={`block absolute h-1 w-full bg-black rounded-3xl transform transition-all duration-300 ${
              openMenu ? "-translate-x-28" : "top-2.5"
            }`}
          />
          <span
            className={`block absolute h-1 w-full bg-black rounded-3xl transform transition-all duration-300 ${
              openMenu ? "top-2.5 -rotate-45 bg-offWhite" : "top-5 rotate-0"
            }`}
          />
        </div>
      </button>
      {/* Sidebar */}
      <div
        className={`fixed top-0 h-full md:w-64 md:text-left text-center w-full bg-royalGreen text-white transform transition-transform duration-300 z-40 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className='flex flex-col pt-4 md:items-start items-center gap-10'>
          <div className='block max-w-24 mx-auto'>
            <Link className='block' to='/' onClick={closeMenu}>
              <img
                className='block w-full h-auto'
                src={QuantumzimeLogoImage}
                alt='quantumzime-logo'
              />
            </Link>
          </div>
          <ul className='flex flex-col gap-4 self-center items-center'>
            {navigationLinks.map((navigationLink) => (
              <li
                className='block cursor-pointer rounded-md w-fit hover:bg-black text-white transition duration-200'
                key={navigationLink.id}
              >
                <Link
                  className='block text-2xl py-2 px-1 w-fit font-semibold'
                  to={navigationLink.href}
                  onClick={closeMenu} // Close the menu when clicking a link
                >
                  {navigationLink.linkText}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Overlay to close the menu */}
      {openMenu && (
        <div
          className='fixed inset-0 bg-black opacity-50 z-30'
          onClick={toggleOpenMenu}
        />
      )}
    </nav>
  );
};

export default Navigation;
