import { NavLink } from 'react-router-dom';

const MenuWeb = () => {
  return (
    <nav>
      <ul className="flex gap-7">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer text-[#FF2C63] border-b-2"
                : "cursor-pointer hover:text-[#FF2C63] hover:border-b-2"
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/artistas"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer text-[#FF2C63] border-b-2"
                : "cursor-pointer hover:text-[#FF2C63] hover:border-b-2"
            }
          >
            ARTISTAS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/musicas"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer text-[#FF2C63] border-b-2"
                : "cursor-pointer hover:text-[#FF2C63] hover:border-b-2"
            }
          >
            MÚSICAS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/playlists"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer text-[#FF2C63] border-b-2"
                : "cursor-pointer hover:text-[#FF2C63] hover:border-b-2"
            }
          >
            PLAYLISTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/conta"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer text-[#FF2C63] border-b-2"
                : "cursor-pointer hover:text-[#FF2C63] hover:border-b-2"
            }
          >
            CONTA
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuWeb;