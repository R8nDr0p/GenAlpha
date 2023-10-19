import React from "react";
import { NavLink } from "react-router-dom";

import "./Navlinks.css";

function Navlinks() {
  return (
    <ul className="nav-links flex flex-col md:flex-row items-center justify-center gap-4">
      <li>
        <NavLink
          className={
            "text-amber-200 hover:text-amber-500 hover:bg-teal-500 hover:px-2 rounded transition-all duration-200"
          }
          to={"/"}
        >
          Users
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-amber-200"} to={"/"}>
          My Places
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-amber-200"} to={"/"}>
          Add Place
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-amber-200"} to={"/"}>
          Authenticate
        </NavLink>
      </li>
    </ul>
  );
}

export default Navlinks;
