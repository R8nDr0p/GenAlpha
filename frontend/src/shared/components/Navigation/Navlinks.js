import React from "react";
import { NavLink } from "react-router-dom";

import "./Navlinks.css";

function Navlinks() {
  return (
    <ul className="nav-links flex flex-col md:flex-row items-center justify-center gap-4">
      <li>
        <NavLink
          className={
            "text-xl text-amber-200 hover:text-amber-300 hover:bg-slate-700 hover:px-2 rounded transition-all duration-150"
          }
          to={"/"}
        >
          Users
        </NavLink>
      </li>
      <li>
        <NavLink
          className={
            "text-xl text-amber-200 hover:text-amber-300 hover:bg-slate-700 hover:px-2 rounded transition-all duration-150"
          }
          to={"/"}
        >
          My Places
        </NavLink>
      </li>
      <li>
        <NavLink
          className={
            "text-xl text-amber-200 hover:text-amber-300 hover:bg-slate-700 hover:px-2 rounded transition-all duration-150"
          }
          to={"/"}
        >
          Add Place
        </NavLink>
      </li>
      <li>
        <NavLink
          className={
            "text-xl text-amber-200 hover:text-amber-300 hover:bg-slate-700 hover:px-2 rounded transition-all duration-150"
          }
          to={"/"}
        >
          Authenticate
        </NavLink>
      </li>
    </ul>
  );
}

export default Navlinks;
