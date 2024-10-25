import { useState, useEffect } from "react";
import ZummitLogoImage from "../assets/images/navigationImages/zummit_logo.png";
const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
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
  const navigationLinks = [
    { id: 0, href: "/", linkText: "Home" },
    { id: 1, href: "/", linkText: "About" },
    { id: 2, href: "/", linkText: "Contact" },
    { id: 3, href: "/", linkText: "Careers" },
  ];
  return (
    <nav>
      {/* Hamburger Button */}
      <div className='fixed z-50 bg-royalGreen h-dvh'>
        <button className='p-4' onClick={toggleOpenMenu}>
          <div className='relative w-8 h-6 transform transition-all duration-300'>
            {/* Hamburger lines */}
            <span
              className={`block absolute h-1 w-full bg-offWhite rounded-3xl transform transition-all duration-300 ${
                openMenu ? "top-2.5 rotate-45" : "top-0 rotate-0"
              }`}
            />
            <span
              className={`block absolute h-1 w-full bg-offWhite rounded-3xl transform transition-all duration-300 ${
                openMenu ? "-translate-x-28" : "top-2.5"
              }`}
            />
            <span
              className={`block absolute h-1 w-full bg-offWhite rounded-3xl transform transition-all duration-300 ${
                openMenu ? "top-2.5 -rotate-45" : "top-5 rotate-0"
              }`}
            />
          </div>
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-[56px] h-full md:w-64 md:text-left text-center w-full bg-royalGreen text-white transform transition-transform duration-300 z-40 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className='flex flex-col pt-14 pr-14 md:items-start items-center gap-10'>
          <div className='block'>
            <img className='block' src={ZummitLogoImage} alt='logo' />
          </div>
          <ul className='flex flex-col gap-4'>
            {navigationLinks.map((navigationLink) => (
              <li
                className='cursor-pointer py-2 px-2 rounded-md w-fit hover:bg-black text-white transition duration-200'
                key={navigationLink.id}
              >
                <a
                  className='block text-2xl w-fit font-semibold'
                  href={navigationLink.href}
                >
                  {navigationLink.linkText}
                </a>
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
