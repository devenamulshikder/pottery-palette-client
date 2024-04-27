import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/Authprovider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log out successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("night");
    } else {
      setTheme("light");
    }
  };

  const navLink = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "btn btn-outline btn-success font-bold text-sm lg:text-lg"
            : "font-bold"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/allart"
        className={({ isActive }) =>
          isActive
            ? "btn btn-outline btn-success font-bold  text-sm lg:text-lg"
            : "font-bold"
        }
      >
        All Art & craft Items
      </NavLink>
      <NavLink
        to="/addcraft"
        className={({ isActive }) =>
          isActive
            ? "btn btn-outline btn-success font-bold  text-sm lg:text-lg"
            : "font-bold"
        }
      >
        Add Craft Item
      </NavLink>
      <NavLink
        to="/myartcraftlist"
        className={({ isActive }) =>
          isActive
            ? "btn btn-outline btn-success font-bold  text-sm lg:text-lg"
            : "font-bold"
        }
      >
        My Art&Craft List
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl lg:text-2xl font-bold">
            <span className="text-[#00a973]">Pottery</span> Palette
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-3">{navLink}</ul>
        </div>
        <div className="navbar-end mr-1 lg:mr-4 text-[#00a973] lg:text-xl font-semibold">
          {user ? (
            <div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar relative"
                >
                  <div className="w-10 rounded-full">
                    <img alt="user" src={user.photoURL} />
                  </div>
                  <span className="hidden absolute top-full left-1/2 -translate-x-1/2 text-sm bg-base-100 p-1 rounded">
                    {user.displayName}
                  </span>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[20] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <h1>{user.displayName}</h1>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <Link className="mr-4" to="/login">
                Login
              </Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </div>
        <label className="cursor-pointer grid place-items-center">
          <input
            onChange={handleToggle}
            type="checkbox"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
