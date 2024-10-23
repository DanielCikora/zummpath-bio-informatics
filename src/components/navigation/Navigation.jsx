import { useState, useEffect } from "react";
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
    { id: 1, href: "/about", linkText: "About" },
    { id: 2, href: "/contact", linkText: "Contact" },
    { id: 3, href: "/careers", linkText: "Careers" },
  ];
  return (
    <nav>
      {/* Hamburger Button */}
      <button className='fixed top-4 left-4 z-50' onClick={toggleOpenMenu}>
        <div className='relative w-8 h-6 transform transition-all duration-300'>
          {/* Hamburger lines */}
          <span
            className={`block absolute h-1 w-full bg-black rounded-3xl transform transition-all duration-300 ${
              openMenu ? "top-2.5 rotate-45" : "top-0 rotate-0"
            }`}
          />
          <span
            className={`block absolute h-1 w-full bg-black rounded-3xl transform transition-all duration-300 ${
              openMenu ? "-translate-x-28" : "top-2.5"
            }`}
          />
          <span
            className={`block absolute h-1 w-full bg-black rounded-3xl transform transition-all duration-300 ${
              openMenu ? "top-2.5 -rotate-45" : "top-5 rotate-0"
            }`}
          />
        </div>
      </button>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full md:w-64 md:text-left text-center w-full bg-[#15856f] text-white transform transition-transform duration-300 z-40 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className='flex flex-col md:pt-20 pt-14 md:items-start items-center p-6 gap-10'>
          <div className='text-3xl font-bold'>LOGO</div>
          <ul className='flex flex-col gap-4'>
            {navigationLinks.map((navigationLink) => (
              <li
                className='cursor-pointer py-2 px-8 rounded-md w-fit hover:bg-white text-black transition duration-200'
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
