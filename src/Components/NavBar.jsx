import { NavLink } from "react-router-dom";

const NavBar = () => {
  const logo = "https://i.ibb.co/LRqFW3T/Logo.png";
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center my-10">
      <img className="h-10 rem" src={logo} alt="" />
      <div>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-10 
        text-center my-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-primary_clr font-semibold underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-primary_clr font-semibold underline"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-primary_clr font-semibold underline"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
