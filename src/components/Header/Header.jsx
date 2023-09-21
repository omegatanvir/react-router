import {NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <h2 className="text-center text-3xl py-8 bg-red-600 text-white mb-8">
        NavBar
      </h2>
      <nav className="flex justify-center items-center gap-6 text-4xl">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "bg-white" : isActive ? "bg-red-500 p-4 text-white rounded-lg" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive, isPending }) =>
            isPending ? "bg-white" : isActive ? "bg-red-500 p-4 text-white rounded-lg" : ""
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "bg-white" : isActive ? "bg-red-500 p-4 text-white rounded-lg" : ""
          }
        >
          About
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive, isPending }) =>
            isPending ? "bg-white" : isActive ? "bg-red-500 p-4 text-white rounded-lg" : ""
          }
        >
          All Posts
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "bg-white" : isActive ? "bg-red-500 text-white rounded-lg p-4" : ""
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
