import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {!isOpen && (
        <button onClick={toggleMenu} className="lg:hidden z-30 relative">
          <i className="fas fa-bars text-white text-2xl"></i>
        </button>
      )}


      {isOpen && (
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-10"
            onClick={toggleMenu}
          ></div>

          <div className="fixed top-0 right-0 bottom-0 w-1/2 bg-[#7B00FF] z-20 p-5 shadow-lg flex flex-col">
            <div className="flex justify-end mb-6">
              <button onClick={toggleMenu}>
                <i className="fas fa-times text-white text-4xl"></i>
              </button>
            </div>

            <ul className="flex flex-col gap-6 text-white">
              <li>
                <NavLink to="/" onClick={toggleMenu} className={({ isActive }) =>
                  isActive
                    ? "cursor-pointer text-[#FF2C63] border-b-2"
                    : "cursor-pointer hover:text-[#FF2C63] hover:border-b-2"
                }>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/artistas" onClick={toggleMenu} className={({ isActive }) =>
                  isActive
                    ? "cursor-pointer text-[#FF2C63] border-b-2"
                    : "cursor-pointer hover:text-[#FF2C63] hover:border-b-2"
                }>
                  ARTISTAS
                </NavLink>
              </li>
              <li>
                <NavLink to="/musicas" onClick={toggleMenu} className={({ isActive }) =>
                  isActive
                    ? "cursor-pointer text-[#FF2C63] border-b-2"
                    : "cursor-pointer hover:text-[#FF2C63] hover:border-b-2"
                }>
                  MÚSICAS
                </NavLink>
              </li>
              <li>
                <NavLink to="/playlists" onClick={toggleMenu} className={({ isActive }) =>
                  isActive
                    ? "cursor-pointer text-[#FF2C63] border-b-2"
                    : "cursor-pointer hover:text-[#FF2C63] hover:border-b-2"
                }>
                  PLAYLISTS
                </NavLink>
              </li>
              <li>
                <NavLink to="/conta" onClick={toggleMenu} className={({ isActive }) =>
                  isActive
                    ? "cursor-pointer text-[#FF2C63] border-b-2"
                    : "cursor-pointer hover:text-[#FF2C63] hover:border-b-2"
                }>
                  CONTA
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MenuMobile;