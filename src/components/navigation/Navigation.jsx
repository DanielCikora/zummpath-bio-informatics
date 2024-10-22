import { useState } from "react";
const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleOpenMenu = () => {
    setOpenMenu(openMenu ? false : true);
  };
  return (
    <nav className='nav'>
      <div className='nav-content flex justify-between w-full'>
        <div className='nav-content__logo'></div>
        <div className='nav-content__links flex w-full'>
          <ul className='flex'>
            <li>
              <a className='block' href='#'>
                Home
              </a>
            </li>
            <li>
              <a className='block' href='#'>
                Contact
              </a>
            </li>
            <li>
              <a className='block' href='#'>
                About
              </a>
            </li>
            <li>
              <a className='block' href='#'>
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
